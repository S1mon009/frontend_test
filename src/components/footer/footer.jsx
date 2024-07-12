import "./footer.scss";

const Footer = ({ handleShowName }) => {
  return (
    <footer>
      <div className="css-is-awesome">
        <span>CSS</span>
        <br />
        <span>IS</span>
        <br />
        <span>AWESOME</span>
      </div>
      <div className="nabthat">nabthat</div>
      <button className="toggle-button">
        Pokaż <i className="fas fa-chevron-up"></i>
      </button>
      <div className="toggle-frame">
        <button className="options">
          <i className="fas fa-chevron-right"></i> ZRESETUJ USTAWIENIA
        </button>
        <br />
        <button className="options" onClick={handleShowName}>
          <i className="fas fa-chevron-right"></i> POKAŻ DANE OSOBOWE
        </button>
      </div>
    </footer>
  );
};

export default Footer;
