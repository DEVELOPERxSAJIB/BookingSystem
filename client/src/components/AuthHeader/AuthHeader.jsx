import "./AuthHeader.scss";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import main_logo from "../../assets/main_logo.png"

const AuthHeader = () => {
  const location = useLocation();
  let findpath = null;

  if (location.pathname === "/register") {
    findpath = true;
  }
  if (location.pathname === "/login") {
    findpath = false;
  }

  return (
    <>
      <div className="main-header-auth">
        <div className="container">
          <div className="logo-area">
            <Link to={"/login"}>
              <img
                src={main_logo}
                alt=""
              />
            </Link>
          </div>
          <div className="button-area">
            {findpath && (
              <Link to={"/login"}>
                <button>
                  <FaArrowRightToBracket className="icon" />
                  Login
                </button>
              </Link>
            )}
            {!findpath && (
              <Link to={"/register"}>
                <button>
                  <FaArrowRightToBracket className="icon" />
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
