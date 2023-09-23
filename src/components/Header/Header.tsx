import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./Header.module.css";
import { useState } from "react";
/* type Props = {} */

const Header = (/* props: Props */) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="d-flex justify-content-start align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-2 align-self-center d-flex justify-content-start ps-0">
            {!isMenuOpen && (
              <RxHamburgerMenu
                className="d-lg-none"
                onClick={() => toggleDropDown()}
              />
            )}
            {isMenuOpen && <DropDownMenu />}
          </div>
          <div className="col-8">
            <h1 className={`${styles.h1}`}>The New York Times</h1>
          </div>
          <div className="col-2 align-self-center d-flex justify-content-end pe-0">
            {isMenuOpen ? (
              <RxCross1 onClick={() => toggleDropDown()} />
            ) : (
              <FaUser className="d-lg-none" />
            )}
          </div>
        </div>
      </div>
    </header>
  )

  {
    /* <header className="d-flex justify-content-start align-items-center">
      <div className={styles.headerLeft}>
        {!isMenuOpen && (
          <RxHamburgerMenu className="d-lg-none" onClick={() => toggleDropDown()} />
        )}
      </div>
      {isMenuOpen && (
        <DropDownMenu />
      )}
      <h1 className={`${styles.h1}`}>The New York Times</h1>
      <div className={`${styles.headerRight} d-`}>
        {isMenuOpen ? ( 
          <RxCross1 onClick={() => toggleDropDown()} />
        ) : (
          <FaUser />
        )}
      </div>
    </header>*/
  }
}

export default Header;
