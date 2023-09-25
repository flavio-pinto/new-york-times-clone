import { AppContextType, SectionType } from "../../contexts/context";
import { useGlobalContext } from "../../contexts/globalContext"
import styles from './Navbar.module.css'

/* type Props = {} */

const Navbar = (/* props: Props */) => {
  const context = useGlobalContext();

  if (!context) {
    return null; 
  }

  const { sections, formatSectionName }: AppContextType = context;

  return (
    <nav className={`${styles.navbar} d-none d-lg-block`}>
      <ul className={`d-flex justify-content-between ${styles.navbarList}`}>
        {sections.map((section: SectionType, i: number) => {
          return (
            <li key={i}>{formatSectionName(section)}</li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar