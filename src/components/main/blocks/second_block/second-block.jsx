import "./second-block.scss";

const SecondBlock = ({
  handleReplace,
  handleAppend,
  handleDelete,
  handleAdd,
  handleEdit,
}) => {
  return (
    <div className="second-block">
      <h3 className="second-block__heading">BLOK DRUGI</h3>
      <div className="second-block__buttons">
        <button
          className="second-block__buttons__button"
          aria-label="Zastąp"
          onClick={handleReplace}
        >
          Zastąp
        </button>
        <button
          className="second-block__buttons__button"
          aria-label="Doklej"
          onClick={handleAppend}
        >
          Doklej
        </button>
      </div>
      <div className="second-block__buttons">
        <button
          className="second-block__buttons__button"
          aria-label="Dodaj"
          onClick={handleAdd}
        >
          Dodaj
        </button>
        <button
          className="second-block__buttons__button"
          aria-label="Edytuj"
          onClick={handleEdit}
        >
          Edytuj
        </button>
        <button
          className="second-block__buttons__button"
          aria-label="Usuń"
          onClick={handleDelete}
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default SecondBlock;
