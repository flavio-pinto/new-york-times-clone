import SingleNews from "../../components/SingleNews/SingleNews"
import useFetchNewsData from "../../services/fetchNewsData"
import { News } from "../../interfaces/News"
import styles from "./HomeAndSectionsPage.module.css"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { RingLoader } from "react-spinners"
import MainDate from "../../components/MainDate/MainDate"
import { Helmet } from "react-helmet"
import { AppContextType, SectionType } from "../../contexts/context"
import { useGlobalContext } from "../../contexts/globalContext"

const HomeAndSectionsPage: React.FC = () => {
  const { sectionName } = useParams<{ sectionName: string }>()
  
  const context = useGlobalContext()
  const { formatSectionName }: AppContextType = context ?? {}

  const url = `https://api.nytimes.com/svc/topstories/v2/${
    !sectionName ? "home" : sectionName
  }.json?api-key=${import.meta.env.VITE_API_KEY}`

  const { isDataReady, news } = useFetchNewsData(url, false)

  if (isDataReady) {
    const totalNewsCount: number = news.length

    // Faccio un filtro in modo tale da evitare che vengano renderizzate notizie senza titolo (è un difetto della API)
    const filteredNews = news.filter((article) => (article as News).title)

    const leftColumnCount: number = Math.ceil(filteredNews.length * 0.3)

    //variabile utile per decidere se dividere gli articoli in due colonne o meno
    const isSmallViewport: boolean = window.innerWidth < 992

    return (
      <>
        <Helmet>
          <title>
            The New York Times
            {sectionName
              ? ' - ' +
                formatSectionName(sectionName as SectionType)
                  .split(' ')
                  .map(
                    (word) => word.charAt(0).toLocaleUpperCase() + word.slice(1)
                  )
                  .join(' ')
              : ''}
          </title>
        </Helmet>
        <MainDate />
        <h2 className={`${styles.currentSection} d-block d-lg-none`}>
          {sectionName}
        </h2>
        <main className={styles.mainNewsSection}>
          <Container>
            <Row className={styles.mainRowCorrect}>
              <Col
                xs={12}
                lg={9}
                className={`${styles.verticalLine} ps-lg-0 pe-lg-3`}
              >
                {filteredNews
                  .slice(
                    0,
                    !isSmallViewport ? leftColumnCount : filteredNews.length - 1
                  )
                  .map((article, index: number) => (
                    <Link
                      key={index}
                      target="_blank"
                      to={(article as News).url}
                    >
                      <SingleNews
                        article={article as News}
                        isSmall={false}
                        isLast={
                          index === leftColumnCount - 1 &&
                          leftColumnCount !== totalNewsCount
                        }
                      />
                    </Link>
                  ))}
              </Col>
              <Col lg={3} className="pe-lg-0 ps-lg-3 d-none d-lg-block">
                {filteredNews.slice(leftColumnCount).map((article, index) => (
                  <Link to={(article as News).url} target="_blank" key={index}>
                    <SingleNews
                      article={article as News}
                      isSmall={true}
                      isLast={
                        index === filteredNews.length - leftColumnCount - 1
                      }
                    />
                  </Link>
                ))}
              </Col>
            </Row>
          </Container>
        </main>
      </>
    )
  } else {
    return (
      <RingLoader
        className="d-block mx-auto my-5"
        size={180}
        aria-label="Loading Spinner"
      />
    )
  }
}

export default HomeAndSectionsPage
