import { useGlobalContext } from '../../contexts/globalContext';
import SearchBar from '../SearchBar/SearchBar'
import styles from './DropDownMenu.module.css'
import { AppContextType, SectionType } from '../../contexts/context';

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
      <h3>News</h3>
      <ul>
        {sections.map((section: SectionType, i: number) => {
          return (
            <li key={i}>{formatSectionName(section)}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default DropDownMenu;