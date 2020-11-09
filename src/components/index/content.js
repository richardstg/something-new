import React, { useRef } from "react"
import { Container } from "reactstrap"

import classes from "./content.module.scss"
import Arrow from "../svg/arrow"

const scrollToRef = ref => {
  if (typeof window !== "undefined") {
    console.log(ref)
    window.scrollTo(0, ref.current.offsetTop)
  }
}

const Content = () => {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <Container id="content" className={classes.outerWrapper} fluid>
      <Container className={classes.innerWrapper}>
        <div className={classes.container}>
          <div className={classes.landing}>
            <div
            // data-sal="fade"
            // data-sal-delay="0"
            // data-sal-duration="2000"
            // data-sal-easing="ease-out-bounce"
            >
              <h1>
                Are You
                <br />
                Someone at
                <br />
                Something New?
              </h1>
            </div>
            <div
              // data-sal="fade"
              // data-sal-delay="300"
              // data-sal-duration="2000"
              // data-sal-easing="ease-out-bounce"
              className={classes.arrowContainer}
            >
              <div
                onKeyDown={executeScroll}
                onClick={executeScroll}
                // className={classes.arrow}
              >
                <Arrow />
              </div>
            </div>
          </div>
          <div ref={myRef} className={classes.text}>
            <div
            // data-sal="fade"
            // data-sal-delay="0"
            // data-sal-duration="2000"
            // data-sal-easing="ease-out-bounce"
            >
              <h2>Our Belief</h2>
            </div>
            <div
            // data-sal="fade"
            // data-sal-delay="0"
            // data-sal-duration="2000"
            // data-sal-easing="ease-out-bounce"
            >
              <p>
                We observe that information flows at an increasingly higher pace
                <br />
                <br className={classes.linebreakPhone} />
                We observe an increasing number of interconnections{" "}
                <br className={classes.linebreakLarge} />
                <br className={classes.linebreakMedium} />
                and new business logics
                <br />
                <br className={classes.linebreakPhone} />
                We observe the rise of distributed leadership and{" "}
                <br className={classes.linebreakSmall} />
                self-organizations
                <br />
                <br />
                We believe in deep knowledge and data-driven{" "}
                <br className={classes.linebreakSmall} />
                decision-making
                <br />
                <br className={classes.linebreakPhone} />
                We believe in pragmatic value creation and{" "}
                <br className={classes.linebreakSmall} />
                cultural alignment
                <br />
                <br className={classes.linebreakPhone} />
                We believe in inner and outer sustainability
                <br />
                <br />
                We believe in all the above, but we also observe that change is
                evolving
                <br />
                <br className={classes.linebreakPhone} />
                And it is driven by people
              </p>
            </div>
            <div
            // data-sal="fade"
            // data-sal-delay="0"
            // data-sal-duration="2000"
            // data-sal-easing="ease-out-bounce"
            >
              <h2>Who Are We?</h2>
              <p>
                We come from all different backgrounds,{" "}
                <br className={classes.linebreakExtraLarge} />
                <br className={classes.linebreakLarge} />
                <br className={classes.linebreakMedium} />
                <br className={classes.linebreakSmall} />
                brought together by a passion for people and business
                <br />
                <br className={classes.linebreakPhone} />
                We are real people who combine Mind, Heart and Soul in all that
                we are
                <br />
                <br className={classes.linebreakPhone} />
                We want to make a positive impact on the world
                <br />
                <br className={classes.linebreakPhone} />
                We think differently with an ambition{" "}
                <br className={classes.linebreakSmall} />
                to challenge conventionality
                <br />
                <br className={classes.linebreakPhone} />
                We don’t take shortcuts, We create sustainable value
                <br />
                <br className={classes.linebreakPhone} />
                We are a team <br className={classes.linebreakSmall} />
                with a shared evolving purpose and values
                <br />
                <br className={classes.linebreakPhone} />
                We develop people who evolve organizations that make{" "}
                <br className={classes.linebreakMedium} />a difference in the
                world
                <br />
                <br />
                We create Organizational Capital Evolution
                <br />
                <br className={classes.linebreakPhone} />
                And we are looking for Someone to join our team
              </p>
            </div>
            <div
            // data-sal="fade"
            // data-sal-delay="0"
            // data-sal-duration="2000"
            // data-sal-easing="ease-out-bounce"
            >
              <h2>Partnerships</h2>
              <p>
                We believe that the greatest results are created together
                <br />
                <br className={classes.linebreakPhone} />
                We work together to create meaningful partnerships
                <br />
                <br className={classes.linebreakPhone} />
                ​We base our partnerships on long-term value creation,{" "}
                <br className={classes.linebreakLarge} />
                <br className={classes.linebreakMedium} />
                which begins on day one
                <br />
                <br className={classes.linebreakPhone} />
                We are based in Sweden, but our partnerships are global
              </p>
            </div>
            <div
            // data-sal="fade"
            // data-sal-delay="0"
            // data-sal-duration="2000"
            // data-sal-easing="ease-out-bounce"
            >
              <h2>You</h2>
              <p>
                You want to lead evolution within Organizational Capital
                <br />
                <br className={classes.linebreakPhone} />
                You are our most valuable asset
                <br />
                <br className={classes.linebreakPhone} />
                You consider yourself your most important leader
                <br />
                <br className={classes.linebreakPhone} />
                You can make mistakes, learn from them and understand that
                others will too
                <br />
                <br className={classes.linebreakPhone} />
                You are accepting of the views and beliefs of all
                <br />
                <br className={classes.linebreakPhone} />
                You are just beginning,{" "}
                <br className={classes.linebreakSmall} />
                or are already well established in your career
                <br />
                <br className={classes.linebreakPhone} />
                You are looking for a full-time position,{" "}
                <br className={classes.linebreakLarge} />
                <br className={classes.linebreakMedium} />
                <br className={classes.linebreakSmall} />
                or need flexible hours around your studies,{" "}
                <br className={classes.linebreakExtraLarge} />
                <br className={classes.linebreakLarge} />
                <br className={classes.linebreakMedium} />
                <br className={classes.linebreakSmall} />
                but most importantly, you believe in what you just read
                <br />
                <br />
                Are you someone at something new?
                <br />
                <br className={classes.linebreakPhone} />
                Email us your story and where you are heading at{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    // color: "rgb(250, 250, 250)",
                  }}
                >
                  people@somethingnew.se
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
