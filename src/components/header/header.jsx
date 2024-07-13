import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ showName }) => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__icon-box">
          <i
            className="fa-brands fa-html5 header__icon-box__icon"
            aria-hidden="true"
          />
        </div>
      </Link>
      <div className="header__task">
        <div className="header__task-title">
          Zadanie{" "}
          <span className="header__task-title--font-bolder">rekrutacyjne</span>
        </div>
        {showName && <span>Szymon Skałecki</span>}
      </div>
    </header>
  );
};

export default Header;
