import styles from './SearchBar.module.css';

type Props = {
  classes: string; // Definizione della prop per le classi
}

const SearchBar: React.FC<Props> = ({ classes }) => {
  return (
    <div>
      <div className={`${styles.searchBar} ${classes}`}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="SEARCH"
      />
      <button className={styles.button}>
        GO
      </button>
    </div>
    </div>
  )
}

export default SearchBar