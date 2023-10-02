import { Link, useParams } from "react-router-dom";
import MainDate from "../../components/MainDate/MainDate";
import useFetchNewsData from "../../services/fetchNewsData";
import { Col, Container, Row } from "react-bootstrap";
import SingleNewsFromSearch from "../../components/SingleNewsFromSearch/SingleNewsFromSearch";
import { NewsFromSearch } from "../../interfaces/NewsFromSearch";
import styles from "./SearchResultsPage.module.css";
import { RingLoader } from "react-spinners";

/* type Props = {} */

const SearchResultsPage = (/* props: Props */) => {
  const { query } = useParams()
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${
    import.meta.env.VITE_API_KEY
  }`;
  const { isDataReady, news } = useFetchNewsData(url, true);

  console.log(query, url);
  console.log(news);

  /* if(news.length === 0) {
    navigate('*')
  } */

  if (news.length === 0) {
    return (
      <>
        <MainDate />
        <main className={`${styles.mainNewsSection} ps-0`}>
          <Container>
            <p className={styles.showingResults}>Showing results for: <span>{query}</span></p>
            <p className={styles.noResults}>Sorry: no results match your search criteria!</p>
          </Container>
        </main>
      </>
    );
  }

  if (isDataReady) {
    return (
      <>
        <MainDate />
        <main className={`${styles.mainNewsSection} ps-0`}>
          <Container>
            <p className={styles.showingResults}>Showing results for: <span>{query}</span></p>
            <Row>
              {news.map((article, index: number) => (
                <Col xs={12} md={6} key={index} className={`${index % 2 === 0 && styles.newsBorder} ${index % 2 === 0 ? "ps-md-0" : "pe-md-0"} my-3`}>
                <Link to={(article as NewsFromSearch).web_url} target="_blank">
                  <SingleNewsFromSearch article={article as NewsFromSearch} />
                </Link>
              </Col>
              ))}
            </Row>
          </Container>
        </main>
      </>
    );
  } else {
    return (
      <RingLoader
        className="d-block mx-auto my-5"
        size={180}
        aria-label="Loading Spinner"
      />
    );
  }
};

export default SearchResultsPage;
