import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./Header.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
/* type Props = {} */

const Header = (/* props: Props */) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const date = new Date().toLocaleDateString("en-En", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  });

  return (
    <header className="d-flex justify-content-start align-items-center flex-column">
      <div className="container">
        <div className="row">
          <div className="col-2 align-self-center d-flex justify-content-start ps-0 flex-column">
            {!isMenuOpen && (
              <div className="d-flex">
                <RxHamburgerMenu
                  size={25}
                  className="d-lg-none me-2"
                  onClick={() => toggleDropDown()}
                />
                <BsSearch
                  size={25}
                  className="d-lg-none"
                  onClick={() => toggleDropDown()}
                />
              </div>
            )}
            {isMenuOpen && <DropDownMenu />}

            <SearchBar classes="d-none d-lg-flex" />
            <p className={styles.date}>{date}</p>
          </div>
          <div className="col-8">
            <h1 className={`${styles.h1}`}>The New York Times</h1>
          </div>
          <div className="col-2 align-self-center d-flex justify-content-end pe-0">
            {isMenuOpen && (
              <RxCross1 size={25} onClick={() => toggleDropDown()} />
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
