import { ListGroup } from "react-bootstrap";
import { AppContextType, SectionType } from "../../contexts/context";
import { useGlobalContext } from "../../contexts/globalContext";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

/* type Props = {} */

const Navbar = (/* props: Props */) => {
  const context = useGlobalContext();

  if (!context) {
    return null;
  }

  const { sections, formatSectionName }: AppContextType = context;

  return (
    <nav className={`${styles.navbar} d-none d-lg-block`}>
      <ListGroup
        className={`d-flex justify-content-between ${styles.navbarList}`}
      >
        {sections.map((section: SectionType, i: number) => {
          return (
            <ListGroup.Item as="li" key={i}>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "gray" : "black",
                  };
                }}
                to={section === "home" ? "/" : `section/${section}`}
              >
                {formatSectionName(section)}
              </NavLink>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </nav>
  );
};

export default Navbar;
