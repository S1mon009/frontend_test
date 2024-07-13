import "./second-block.scss";

const SecondBlock = () => {
  return (
    <div className="second-block">
      <h3 className="second-block__heading">BLOK DRUGI</h3>
      <div className="second-block__buttons">
        <button className="second-block__buttons__button" aria-label="Zastąp">
          Zastąp
        </button>
        <button className="second-block__buttons__button" aria-label="Doklej">
          Doklej
        </button>
      </div>
    </div>
  );
};

export default SecondBlock;
