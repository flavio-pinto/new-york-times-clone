import { Container, Row, Col } from "react-bootstrap";
import { News } from "../../interfaces/News";
import styles from "./SingleNews.module.css";

type SingleNewsProps = {
  article: News;
  isSmall: boolean;
};

const SingleNews = (props: SingleNewsProps) => {
  return (
    <article className={styles.articleWrapper}>
      <Container>
        <Row>
          <Col xs={props.isSmall ? 7 : 5}>
            <h3
              className={
                props.isSmall ? styles.articleTitleSmall : styles.articleTitle
              }
            >
              {props.article.title}
            </h3>
            {!props.isSmall && (
              <p className={styles.articlePreview}>{props.article.abstract}</p>
            )}
            <small className={styles.byLine}>{props.article.byline}</small>
          </Col>
          <Col xs={props.isSmall ? 5 : 7}>
            <img
              className={styles.articleImg}
              src={
                props.isSmall
                  ? props.article.multimedia[2].url
                  : props.article.multimedia[0].url
              }
              alt={
                props.isSmall
                  ? props.article.multimedia[2].caption
                  : props.article.multimedia[0].caption
              }
            />
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default SingleNews;
