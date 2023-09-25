import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const useFetchNewsData = (apiUrl: string) => {
  const [news, setNews] = useState([])
  const [isDataReady, setIsDataReady] = useState<boolean>(false)
  const navigate = useNavigate()

  
  useEffect(() => {
    setIsDataReady(false)

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data);
        setIsDataReady(true);
      } catch (error) {
        console.error(error);
        navigate('*');
      }
    }  

    fetchData()
  }, [navigate, apiUrl])

  

  return {isDataReady, news}
}

export default useFetchNewsData