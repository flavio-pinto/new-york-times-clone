import styles from "./Footer.module.css"
import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { AppContextType, SectionType } from "../../contexts/context"
import { useGlobalContext } from "../../contexts/globalContext"
import { NavLink } from "react-router-dom"
import {
  BsCodeSquare,
  BsGithub,
  BsLinkedin,
  BsFillHeartFill,
} from "react-icons/bs"

const Footer: React.FC = () => {
  const context = useGlobalContext() as AppContextType
  const { sections, formatSectionName }: AppContextType = context ?? {}

  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12}>
            <div className={styles.footer}>
              <h2>The New York Times</h2>
              <ListGroup className={styles.footerList}>
                {sections.map((section: SectionType, i: number) => {
                  return (
                    <ListGroup.Item as="li" key={i}>
                      <NavLink
                        to={section === "home" ? "/" : `section/${section}`}
                      >
                        {formatSectionName(section)}
                      </NavLink>
                    </ListGroup.Item>
                  )
                })}
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
              <h4 className={styles.madeBy}>
                Made with <BsFillHeartFill /> by Flavio Pinto
              </h4>
              <Col xs={12} className={styles.footerIcons}>
                <a
                  href="https://github.com/flavio-pinto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/flaviopinto-dev/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
                </a>
                <a href="https://flavio-pinto.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                  <BsCodeSquare />
                </a>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
