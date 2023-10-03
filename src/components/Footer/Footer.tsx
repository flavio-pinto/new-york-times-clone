import styles from "./Footer.module.css";
/* type Props = {} */

import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { AppContextType, SectionType } from "../../contexts/context";
import { useGlobalContext } from "../../contexts/globalContext";
import { Link, NavLink } from "react-router-dom";
import { BsCodeSquare, BsGithub, BsLinkedin, BsFillHeartFill } from "react-icons/bs";

const Footer = (/* props: Props */) => {
  const context = useGlobalContext();
  const { sections, formatSectionName }: AppContextType = context;

  if (!context) {
    return null;
  }

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
                  );
                })}
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
              <h4 className={styles.madeBy}>Made with <BsFillHeartFill /> by Flavio Pinto</h4>
              <Col xs={12} className={styles.footerIcons}>
                <Link to="https://github.com/flavio-pinto" target="_blank"><BsGithub/></Link>
                <Link to="#" target="_blank"><BsLinkedin/></Link>
                <Link to="#" target="_blank"><BsCodeSquare/></Link>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
