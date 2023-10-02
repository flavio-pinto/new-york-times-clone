import styles from "./SingleNewsFromSearch.module.css";
import { NewsFromSearch } from "../../interfaces/NewsFromSearch";

type SingleNewsProps = {
  article: NewsFromSearch;
};

const SingleNewsFromSearch = (props: SingleNewsProps) => {
  console.log(props.article);

  return (
    <article
      className={`${styles.article} d-flex flex-column justify-content-between`}
    >
      <div>
        <h3>{props.article.headline.main}</h3>
        <p>{props.article.abstract}</p>
      </div>
      <small className={styles.author}>
        by&nbsp;
        {props.article.byline.person.length > 0
          ? props.article.byline.person.map((author, index) => (
              <span key={index}>
                {author.firstname} {author.middlename} {author.lastname}
                {index < props.article.byline.person.length - 1 && ", "}
              </span>
            ))
          : "Unknown"}
      </small>
    </article>
  );
};

export default SingleNewsFromSearch;
