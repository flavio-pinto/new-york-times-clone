import styles from "./Footer.module.css";
/* type Props = {} */

import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { AppContextType, SectionType } from "../../contexts/context";
import { useGlobalContext } from "../../contexts/globalContext";
import { NavLink } from "react-router-dom";

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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
