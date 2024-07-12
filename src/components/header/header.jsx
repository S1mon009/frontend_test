import "./header.scss";
import HTMLIcon from "../../assets/html-icon.webp";

const Header = ({ showName }) => {
  return (
    <header>
      <div className="html-icon-box">
        <img src={HTMLIcon} alt="HTML icon" />
      </div>
      <div className="recruitment-task">
        <div>
          Zadanie <span>rekrutacyjne</span>
        </div>
        <div style={{ display: showName ? "block" : "none" }}>
          Szymon Skałecki
        </div>
      </div>
    </header>
  );
};

export default Header;
