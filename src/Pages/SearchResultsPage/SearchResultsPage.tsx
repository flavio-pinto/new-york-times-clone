import { useParams } from "react-router-dom"
import MainDate from "../../components/MainDate/MainDate"

/* type Props = {} */

const SearchResultsPage = (/* props: Props */) => {
  const { query } = useParams()

  return (
    <MainDate />
  )
}

export default SearchResultsPage