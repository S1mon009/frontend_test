import { useState, useEffect } from "react";
import NaglowekH1 from "./heading_h1/heading-h1";
import FirstBlock from "./blocks/first_block/first-block";
import SecondBlock from "./blocks/second_block/second-block";
import ThirdBlock from "./blocks/third_block/third-block";
import { toast } from "react-toast";
import "./main.scss";
import Dialog from "../dialog/dialog";

const Main = ({ data }) => {
  const [currentData, setCurrentData] = useState(data);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [radioButtonValue, setRadioButtonValue] = useState();
  const [usedValues, setUsedValues] = useState([1]);
  const [appendedTexts, setAppendedTexts] = useState([data[0]]);
  const [showDialog, setShowDialog] = useState([false, false]);

  useEffect(() => {
    localStorage.setItem("frontend_test-data", JSON.stringify(currentData));
  }, [currentData]);

  const getRandomIndex = (lastIndex) => Math.floor(Math.random() * lastIndex);

  const checkCurrentIndex = (index) => index === currentContentIndex;

  const handleChangeCurrentContent = (option) => {
    const newIndex = {
      0: 0,
      1: 1,
      random: getRandomIndex(currentData.length),
    }[option];

    if (newIndex !== undefined && !checkCurrentIndex(newIndex)) {
      setCurrentContentIndex(newIndex);
      setAppendedTexts([currentData[newIndex]]);
      setUsedValues([newIndex + 1]);
    }
  };

  const handleRadioButton = (value) => setRadioButtonValue(value);

  const handleReplace = () => handleChangeCurrentContent(radioButtonValue);

  const handleAppend = () => {
    const availableValues = currentData.filter(
      (item) => !usedValues.includes(item.id)
    );

    if (availableValues.length === 0) {
      toast.warn("Nie można użyć tej samej wartości", {
        position: "relative",
        zIndex: "1",
      });
      return;
    }

    let value;

    if (+radioButtonValue === 0 && !usedValues.includes(1)) {
      value = availableValues.find((item) => item.id === 1);
    } else if (+radioButtonValue === 1 && !usedValues.includes(2)) {
      value = availableValues.find((item) => item.id === 2);
    } else if (radioButtonValue === "random") {
      value =
        availableValues[Math.floor(Math.random() * availableValues.length)];
    }

    if (value) {
      setUsedValues((prevUsedValues) => [...prevUsedValues, value.id]);
      setAppendedTexts((prevTexts) => [...prevTexts, value]);
    }
  };

  const handleDelete = () => {
    if (appendedTexts.length > 1) {
      toast.warn("Można usunąć tylko jedną wartość na raz", {
        position: "relative",
        zIndex: "1",
      });
    } else {
      const updatedData = currentData.filter(
        (item) => item.id !== currentContentIndex
      );
      setCurrentData(updatedData);

      setCurrentContentIndex(0);
    }
  };

  const handleShowDialog = (dialog) => {
    if (appendedTexts.length === 1) {
      setShowDialog([dialog === 0, dialog === 1]);
    } else {
      toast.warn("Możesz dokonywać zmian tylko jednej wartości na raz", {
        position: "relative",
        zIndex: "1",
      });
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const { title, content } = event.target.elements;

    if (title.value.trim() && content.value.trim()) {
      const newData = {
        id: currentData.length,
        title: title.value.trim(),
        content: content.value.trim(),
      };
      setCurrentData((prev) => [...prev, newData]);
      setShowDialog([false, false]);
    } else {
      toast.warn("Tytuł oraz treść nie mogą być puste", {
        position: "relative",
        zIndex: "1",
      });
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const { title, content, id } = event.target.elements;

    if (title.value.trim() && content.value.trim()) {
      const updatedData = currentData.map((item) =>
        item.id === +id.value
          ? {
              ...item,
              title: title.value.trim(),
              content: content.value.trim(),
            }
          : item
      );
      setCurrentData(updatedData);
      setShowDialog([false, false]);
    } else {
      toast.warn("Tytuł oraz treść nie mogą być puste", {
        position: "relative",
        zIndex: "1",
      });
    }
  };

  return (
    <main className="main-content">
      <Dialog
        show={showDialog[0]}
        hide={() => setShowDialog([false, false])}
        handleSubmit={handleAdd}
      />
      <Dialog
        show={showDialog[1]}
        hide={() => setShowDialog([false, false])}
        handleSubmit={handleEdit}
        data={currentData[currentContentIndex]}
      />
      <NaglowekH1 />
      <div className="main-content__blocks">
        <FirstBlock handleRadioButton={handleRadioButton} />
        <SecondBlock
          handleReplace={handleReplace}
          handleAppend={handleAppend}
          handleDelete={handleDelete}
          handleAdd={() => handleShowDialog(0)}
          handleEdit={() => handleShowDialog(1)}
        />
        <ThirdBlock
          content={
            appendedTexts.length === 1
              ? [currentData[currentContentIndex]]
              : appendedTexts
          }
        />
      </div>
    </main>
  );
};

export default Main;
