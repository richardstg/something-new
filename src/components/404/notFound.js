import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import classes from "./notFound.module.scss"

const NotFound = () => {
  return (
    <Container id="intro" className={classes.outerWrapper} fluid>
      <Container className={classes.innerWrapper}>
        <Row className={classes.row}>
          <Col
            lg={{ size: 6, offset: 2 }}
            md={{ size: 12, offset: 0 }}
            xs={{ size: 12, offset: 0 }}
            className={classes.textColumn}
          >
            <h2 className={classes.text}>
              <span className={classes.word}>404</span>
              <span className={classes.word}>NOT</span>
              <span className={classes.word}>FOUND...</span>
            </h2>
            <Link className={classes.link} to="/">
              <button className={classes.button}>Back</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default NotFound
