import { useState } from "react";
import NaglowekH1 from "./heading_h1/heading-h1";
import FirstBlock from "./blocks/first_block/first-block";
import SecondBlock from "./blocks/second_block/second-block";
import ThirdBlock from "./blocks/third_block/third-block";
import "./main.scss";

const Main = ({ data }) => {
  const [currentData, setCurrentData] = useState(data);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  function handleChangeCurrentContent(option) {
    function getRandomIndex(lastIndex) {
      return Math.floor(Math.random() * lastIndex);
    }
    function checkCurrentIndex(index) {
      if (index === currentContentIndex) {
        return true;
      }
      return false;
    }

    if (+option === 0) {
      setCurrentContentIndex(0);
    } else if (+option === 1) {
      setCurrentContentIndex(1);
    } else if (option === "random") {
      let index;

      do {
        index = getRandomIndex(currentData.length);
      } while (checkCurrentIndex(index));

      setCurrentContentIndex(index);
    }
  }

  return (
    <main className="main-content">
      <NaglowekH1 />
      <div className="main-content__blocks">
        <FirstBlock handleChangeCurrentContent={handleChangeCurrentContent} />
        <SecondBlock />
        <ThirdBlock content={currentData[currentContentIndex]} />
      </div>
    </main>
  );
};

export default Main;
