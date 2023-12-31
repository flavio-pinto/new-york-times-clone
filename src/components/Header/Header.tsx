import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { BsSearch } from "react-icons/bs"
import DropDownMenu from "../DropDownMenu/DropDownMenu"
import styles from "./Header.module.css"
import { useEffect, useRef, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import Navbar from "../Navbar/Navbar"
import { NavLink, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../contexts/globalContext'
import { SectionType } from '../../contexts/context'

const Header: React.FC = () => {
  const location = useLocation()
  const [currentSectionName, setCurrentSectionName] = useState<string>('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {formatSectionName } = useGlobalContext()
  const headerRef = useRef(null)
  
  useEffect(() => {
    const pathname = location.pathname
    const section = pathname.split('/')
    const currentSection = pathname.startsWith('/section') ? section[section.length - 1] : ''

    setCurrentSectionName(currentSection)
  }, [location.pathname])

  const date = new Date().toLocaleDateString("en-En", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  })

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
                    onClick={() => setIsMenuOpen(true)}
                  />
                  <BsSearch
                    size={25}
                    className="d-lg-none"
                    onClick={() => setIsMenuOpen(true)}
                  />
                </div>
              )}
              {isMenuOpen && <DropDownMenu headerRef={headerRef} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
  
              <SearchBar classes="d-none d-lg-flex" setIsMenuOpen={setIsMenuOpen}/>
              <p className={styles.date}>{date}</p>
            </Col>
          <Col xs={8}>
            <NavLink to='/'><h1 className={`${styles.h1}`} onClick={() => setIsMenuOpen(false)}>The New York Times</h1></NavLink>
          </Col>
          <Col xs={2} className="align-self-center d-flex justify-content-end pe-0">
            <p className={`${styles.currentSection} d-none d-lg-block`}>{formatSectionName(currentSectionName as SectionType)}</p>
            {isMenuOpen && (
              <RxCross1 size={25} onClick={() => setIsMenuOpen(false)} />
            )}
          </Col>
        </Row>
      </Container>
      <Navbar />
    </header>
  )
}

export default Header