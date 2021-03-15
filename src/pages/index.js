import React, { Fragment } from "react"
import "../scss/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import About from "./about"
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
      <About/>
      </Layout>
    )
  }
}

export default IndexPage
