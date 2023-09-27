import SingleNews from "../../components/SingleNews/SingleNews";
import useFetchNewsData from "../../services/fetchNewsData";
import { News } from "../../interfaces/News";
import styles from "./HomeAndSectionsPage.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
/* type Props = {} */

const Home = (/* props: Props */) => {
  const { sectionName } = useParams()

  const url = `https://api.nytimes.com/svc/topstories/v2/${!sectionName ? 'home' : sectionName}.json?api-key=${
    import.meta.env.VITE_API_KEY
  }`;

  const { isDataReady, news } = useFetchNewsData(url);

  const date = new Date().toLocaleDateString("en-En", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })

  console.log(sectionName)
  console.log(news.results);

  if (isDataReady) {
    const totalNewsCount = news.results.length;
    const leftColumnCount = Math.ceil(totalNewsCount * 0.3);
    const isSmallViewport = window.innerWidth < 992;

    return (
      <>
        <p className={`${styles.mainDate} d-lg-none`}>{date}</p>
        <main className={styles.mainNewsSection}>
          <Container>
            <Row className={styles.mainRowCorrect}>
              <Col
                lg={isSmallViewport ? 12 : 9}
                className={`${
                  !isSmallViewport && styles.verticalLine
                } ps-lg-0 pe-lg-3`}
              >
                {news.results
                  .slice(
                    0,
                    !isSmallViewport ? leftColumnCount : news.results.length - 1
                  )
                  .map((article: News, index: number) => (
                    <SingleNews key={index} article={article} isSmall={false} />
                  ))}
              </Col>
              <Col lg={3} className="pe-lg-0 ps-lg-3 d-none d-lg-block">
                {news.results.slice(leftColumnCount).map((article, index) => (
                  <SingleNews key={index} article={article} isSmall={true} />
                ))}
              </Col>
            </Row>
          </Container>
        </main>
      </>
    );
  } else {
    return <div>Spinner</div>;
  }
};

export default Home;
