import SingleNews from "../../components/SingleNews/SingleNews"
import useFetchNewsData from "../../services/fetchNewsData"
import { News } from "../../interfaces/News"
import styles from "./HomeAndSectionsPage.module.css"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { RingLoader } from "react-spinners"
import { useGlobalContext } from "../../contexts/globalContext"
import { useEffect, useState } from "react"
import { SectionType } from "../../contexts/context"
import MainDate from "../../components/MainDate/MainDate"

const HomeAndSectionsPage = () => {
  const { sectionName } = useParams()
  const { setCurrentSection } = useGlobalContext()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (sectionName) {
      setCurrentSection(sectionName as SectionType)
    } else {
      setCurrentSection(null)
    }
  })

  const url = `https://api.nytimes.com/svc/topstories/v2/${
    !sectionName ? "home" : sectionName
  }.json?api-key=${import.meta.env.VITE_API_KEY}`

  const { isDataReady, news } = useFetchNewsData(url, false)

  if (isDataReady) {
    const totalNewsCount = news.length
    const leftColumnCount = Math.ceil(totalNewsCount * 0.3)
    const isSmallViewport = windowWidth < 992

    return (
      <>
        <MainDate />
        <h2 className={`${styles.currentSection} d-block d-lg-none`}>
          {sectionName}
        </h2>
        <main className={styles.mainNewsSection}>
          <Container>
            <Row className={styles.mainRowCorrect}>
              <Col
                lg={isSmallViewport ? 12 : 9}
                className={`${
                  !isSmallViewport && styles.verticalLine
                } ps-lg-0 pe-lg-3`}
              >
                {news
                  .slice(
                    0,
                    !isSmallViewport ? leftColumnCount : news.length - 1
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
                {news.slice(leftColumnCount).map((article, index) => (
                  <Link to={(article as News).url} target="_blank" key={index}>
                    <SingleNews
                      article={article as News}
                      isSmall={true}
                      isLast={index === news.length - leftColumnCount - 1}
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
