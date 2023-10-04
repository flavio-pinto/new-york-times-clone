import styles from "./Error.module.css"

import { Col, Container, Row } from "react-bootstrap"

const Error = () => {
  return (
    <main className={styles.errorPage}>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} className="my-5">
            <h2>Page Not Found</h2>
            <p>We’re sorry, we seem to have lost this page, but we don’t want to lose you. Report the broken link to our email.</p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Error