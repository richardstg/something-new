import React from "react"
import BackgroundSlider from "react-background-slider"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Content from "../components/index/content"
import image1 from "../images/lights.jpg"
import image2 from "../images/sthlm.jpg"
import image3 from "../images/forest.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="SOMETHING NEW..."
        description="Are you someone at something new?"
      />
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={5}
        transition={1.4}
      />
      <Content />
    </Layout>
  )
}

export default IndexPage
