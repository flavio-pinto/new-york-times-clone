import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { News } from "../interfaces/News"
import { NewsFromSearch } from "../interfaces/NewsFromSearch"

const useFetchNewsData = (apiUrl: string, isSearch: boolean) => {
  const [news, setNews] = useState<(News | NewsFromSearch)[]>([])
  const [isDataReady, setIsDataReady] = useState<boolean>(false)
  const navigate = useNavigate()

  
  useEffect(() => {
    setIsDataReady(false)

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl)
        setNews(!isSearch ? response.data.results : response.data.response.docs)
        setIsDataReady(true)
      } catch (error) {
        navigate('*')
      }
    }  

    fetchData()
  }, [navigate, apiUrl, isSearch])

  return {isDataReady, news}
}

export default useFetchNewsData