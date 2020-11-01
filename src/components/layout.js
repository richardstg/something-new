import React from "react"

import "typeface-libre-baskerville"

import "../styles/app.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container} fluid>
      {/* <Header /> */}
      <div className={layoutStyles.main}>{props.children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
