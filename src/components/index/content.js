import React from "react"
import { Container } from "reactstrap"

import classes from "./content.module.scss"

const Content = () => {
  return (
    <Container id="content" className={classes.outerWrapper} fluid>
      <Container className={classes.innerWrapper}>
        <div className={classes.container}>
          <div className={classes.landing}>
            <div
              data-sal="fade"
              data-sal-delay="0"
              data-sal-duration="2000"
              data-sal-easing="ease-out-bounce"
            >
              <h1>
                Are you
                <br />
                someone at
                <br />
                something new?
              </h1>
            </div>
          </div>
          <div className={classes.text}>
            <div
              data-sal="fade"
              data-sal-delay="0"
              data-sal-duration="2000"
              data-sal-easing="ease-out-bounce"
            >
              <h1>SOMETHING NEW...</h1>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="0"
              data-sal-duration="2000"
              data-sal-easing="ease-out-bounce"
            >
              <p>
                We observe that information flows at an increasingly higher pace
                <br />
                We observe an increasing number of interconnections and new
                business logics
                <br />
                We observe the rise of distributed leadership
                and self-organizations
                <br />
                <br />
                We believe in deep knowledge and data-driven decision-making
                <br />
                We believe in pragmatic value creation​ and cultural alignment
                <br />
                We believe in inner and outer sustainability
                <br />
                <br />
                We believe in all the above, but we also observe that change is
                evolving And it is driven by people
              </p>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="0"
              data-sal-duration="2000"
              data-sal-easing="ease-out-bounce"
            >
              <h2>Who are we?</h2>
              <p>
                We come from all different backgrounds,
                <br />
                brought together by a passion for people and business
                <br />
                We are real people who combine Mind, Heart and Soul in all that
                we are
                <br />
                We want to make a positive impact on the world
                <br />
                We think differently with an ambition to challenge
                conventionality
                <br />
                We don’t take shortcuts, We create sustainable value
                <br />
                We are a team with a shared evolving purpose and or values
                <br />
                We develop people who evolve organizations that make a
                difference in the world
                <br />
                <br />
                We create Organizational Capital Evolution And we are looking
                for Someone to join our team
              </p>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="0"
              data-sal-duration="2000"
              data-sal-easing="ease-out-bounce"
            >
              <h2>Partnerships</h2>
              <p>
                We believe that the greatest results are created together
                <br />
                We work together to create meaningful partnerships
                <br />
                ​We base our partnerships on long-term value creation, which
                begins on day one
                <br />
                We are based in Sweden, but our partnerships are global
              </p>
            </div>
            <div
              data-sal="fade"
              data-sal-delay="0"
              data-sal-duration="2000"
              data-sal-easing="ease-out-bounce"
            >
              <h2>You</h2>
              <p>
                You want to lead evolution within Organizational Capital
                <br />
                You are our most valuable asset
                <br />
                You consider yourself your most important leader
                <br />
                You can make mistakes, learn from them and understand that
                others will too
                <br />
                You are accepting of the views and beliefs of all
                <br />
                You are just beginning, or are already well established in your
                career
                <br />
                You are looking for a full-time position, or need flexible
                hours around your studies
                <br />
                but most importantly, you believe in what you just read
                <br />
                <br />
                Are you someone@somethingnew?
                <br />
                <br />
                Email us your story and where you are heading at 
                <span
                  style={{
                    fontWeight: "bold",
                    color: "rgb(250, 250, 250)",
                  }}
                >
                  people@somethingnew.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Content
