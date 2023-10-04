import { useNavigate } from "react-router-dom"
import styles from "./SearchBar.module.css"
import { ChangeEvent, FormEvent, useState } from "react"
import { SectionType } from "../../contexts/context"

type Props = {
  classes: string
  setCurrentSection: (section: SectionType | null) => void;
}

const SearchBar: React.FC<Props> = ({ classes, setCurrentSection }) => {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const searchNews = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.currentTarget.reset()

    if (query) {
      setQuery("")
      setCurrentSection(null)
      navigate(`/search/${query}`)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <form
      onSubmit={searchNews}
      
      className={`${styles.searchBar} ${classes}`}
    >
      <input onChange={handleInputChange} className={styles.searchBar} type="text" placeholder="SEARCH" />
      <button type="submit" className={styles.button}>GO</button>
    </form>
  )
}

export default SearchBar
