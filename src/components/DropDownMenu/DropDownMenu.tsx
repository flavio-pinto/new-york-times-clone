import ListGroup from "react-bootstrap/ListGroup";
import { useGlobalContext } from "../../contexts/globalContext";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./DropDownMenu.module.css";
import { AppContextType, SectionType } from "../../contexts/context";
import { NavLink } from "react-router-dom";

/* type Props = {} */

const DropDownMenu = () => {
  const context = useGlobalContext();

  if (!context) {
    return null;
  }

  const { sections, formatSectionName }: AppContextType = context;

  return (
    <div className={`${styles.DropDownMenu} py-4`}>
      <SearchBar classes={`${styles.searchBarDropDown} d-flex`} />
      <h3 className={styles.dropdownNewsTitle}>News</h3>
      <ListGroup as="ul" className={styles.dropdownList}>
        {sections.map((section: SectionType, i: number) => {
          return (
            <ListGroup.Item as="li" className={styles.dropdownListItem} key={i}>
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
    </div>
  );
};

export default DropDownMenu;
