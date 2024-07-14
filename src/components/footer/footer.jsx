import { useNavigate } from "react-router-dom";
import "./footer.scss";

const Footer = ({ handleShowName }) => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__css-is-awesome">
        <span className="footer__css-is-awesome__line">CSS</span>
        <br />
        <span className="footer__css-is-awesome__line">IS</span>
        <br />
        <span className="footer__css-is-awesome__line">AWESOME</span>
      </div>
      <div className="footer__nabthat">nabthat</div>
      <button
        className="footer__toggle-button"
        aria-expanded="false"
        aria-controls="toggle-frame"
      >
        Pokaż{" "}
        <i
          className="fas fa-chevron-up"
          aria-hidden="true"
          aria-label="Pokaż"
        />
      </button>
      <div className="footer__toggle-frame">
        <button
          className="footer__toggle-frame__options"
          aria-label="Zresetuj ustawienia"
          onClick={() => navigate(0)}
        >
          <i
            className="fas fa-chevron-right"
            aria-hidden="true"
            aria-label="Zresetuj ustawienia"
          />{" "}
          ZRESETUJ USTAWIENIA
        </button>
        <br />
        <button
          className="footer__toggle-frame__options"
          onClick={handleShowName}
          aria-label="Pokaż dane osobowe"
        >
          <i className="fas fa-chevron-right" aria-hidden="true" /> POKAŻ DANE
          OSOBOWE
        </button>
      </div>
    </footer>
  );
};

export default Footer;
