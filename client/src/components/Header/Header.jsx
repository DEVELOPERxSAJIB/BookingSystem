import "./Header.scss";
import { Link } from "react-router-dom";
import main_logo from "../../assets/main_logo_white.png";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="logo-area">
            <Link to="/">
            <img style={{ cursor : "pointer" }}
              src={main_logo}
              alt=""
            />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
