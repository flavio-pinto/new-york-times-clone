import { Container, Row, Col } from "react-bootstrap";
import { News } from "../../interfaces/News";
import PlaceholderSmall from "../../assets/images/placeholder-small.png"
import Placeholder from "../../assets/images/placeholder.png"
import styles from "./SingleNews.module.css";

type SingleNewsProps = {
  article: News;
  isSmall: boolean;
};

const SingleNews = (props: SingleNewsProps) => {
  console.log(props.article);
  
  return (
    <article className={styles.articleWrapper}>
      <Container>
        <Row>
          <Col
            xs={12}
            md={props.isSmall ? 7 : 5}
            className="ps-lg-0 order-1 order-md-0"
          >
            <h3
              className={`${
                props.isSmall ? styles.articleTitleSmall : styles.articleTitle
              } my-2 my-md-0`}
            >
              {props.article.title}
            </h3>
            {!props.isSmall && (
              <p className={styles.articlePreview}>{props.article.abstract}</p>
            )}
            <small
              className={props.isSmall ? styles.byLineSmall : styles.byLine}
            >
              {props.article.byline}
            </small>
          </Col>
          <Col xs={12} md={props.isSmall ? 5 : 7} className="pe-lg-0">
            <img
              className={styles.articleImg}
              src={
                props.isSmall
                  ? props.article.multimedia ? props.article.multimedia[2].url : PlaceholderSmall
                  : props.article.multimedia ? props.article.multimedia[0].url : Placeholder
              }
              alt={
                props.isSmall
                  ? props.article.multimedia ? props.article.multimedia[2].caption : "placeholder image"
                  : props.article.multimedia ? props.article.multimedia[0].caption : "placeholder image"
              }
            />
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default SingleNews;
