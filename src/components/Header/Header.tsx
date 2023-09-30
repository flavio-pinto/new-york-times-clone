import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import styles from "./Header.module.css";
import { useRef, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/globalContext';
import { SectionType } from '../../contexts/context';
/* type Props = {} */

const Header = (/* props: Props */) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentSection, formatSectionName } = useGlobalContext()
  const headerRef = useRef(null)

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
    <header ref={headerRef} className="d-flex justify-content-start align-items-center flex-column">
      <Container>
        <Row>
            <Col xs={2} className="col-2 align-self-center d-flex justify-content-start ps-0 flex-column">
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
              {isMenuOpen && <DropDownMenu toggleDropDown={toggleDropDown} headerRef={headerRef} isMenuOpen={isMenuOpen} />}
  
              <SearchBar classes="d-none d-lg-flex" />
              <p className={styles.date}>{date}</p>
            </Col>
          <Col xs={8}>
            <NavLink to='/'><h1 className={`${styles.h1}`} onClick={() => toggleDropDown()}>The New York Times</h1></NavLink>
          </Col>
          <Col xs={2} className="align-self-center d-flex justify-content-end pe-0">
            <p className={`${styles.currentSection} d-none d-lg-block`}>{formatSectionName(currentSection as SectionType)}</p>
            {isMenuOpen && (
              <RxCross1 size={25} onClick={() => toggleDropDown()} />
            )}
          </Col>
        </Row>
      </Container>
      <Navbar />
    </header>
  );
};

export default Header;