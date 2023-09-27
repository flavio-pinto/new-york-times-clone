import SingleNews from "../../components/SingleNews/SingleNews";
import useFetchNewsData from "../../services/fetchNewsData"
import { News } from "../../interfaces/News";
import styles from "./Home.module.css"
import { Col, Container, Row } from "react-bootstrap";
/* type Props = {} */

const Home = (/* props: Props */) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_API_KEY}`
  const { isDataReady, news } = useFetchNewsData(url)

  console.log(news.results);
  
  if (isDataReady) {
    const totalNewsCount = news.results.length;
    const leftColumnCount = Math.ceil(totalNewsCount * 0.25);

    return (
      <main className={styles.mainNewsSection}>
        <Container>
          <Row className={styles.mainRowCorrect}>
            <Col lg={9} className={`${styles.verticalLine} ps-lg-0 pe-lg-4`}>
              {news.results.slice(0, leftColumnCount).map((article: News, index: number) => (
                <SingleNews key={index} article={article} isSmall={false}/>
              ))}
            </Col>
            <Col lg={3} className="ps-lg-3">
              {news.results.slice(leftColumnCount).map((article, index) => (
                <SingleNews key={index} article={article} isSmall={true}/>
              ))}
            </Col>
          </Row>
        </Container>
      </main>
    );
  } else {
    return <div>Spinner</div>;
  }
}

export default Home