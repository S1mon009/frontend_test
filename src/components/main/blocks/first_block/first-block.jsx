import "./first-block.scss";

const FirstBlock = ({ handleChangeCurrentContent }) => {
  function handleFormChange(formData) {
    handleChangeCurrentContent(formData.target.value);
  }

  return (
    <div className="first-block">
      <h3 className="first-block__heading">BLOK PIERWSZY</h3>
      <form className="first-block__form" onChange={handleFormChange}>
        <label className="first-block__form__label">
          <input type="radio" value="0" name="option" />{" "}
          <span>Opcja pierwsza</span>
        </label>
        <label className="first-block__form__label">
          <input type="radio" value="1" name="option" />{" "}
          <span>Opcja druga</span>
        </label>
        <label className="first-block__form__label">
          <input type="radio" value="random" name="option" />{" "}
          <span>Opcja losowa</span>
        </label>
      </form>
    </div>
  );
};

export default FirstBlock;
