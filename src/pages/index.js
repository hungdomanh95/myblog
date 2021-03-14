import React, { Fragment } from "react"
import { Link } from "gatsby"
import "../scss/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import About from "./about"
import Header from "./Header"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Fragment>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className='page'>
          <div className='container'>
            <Header/>
            <About/>
          </div>
        </div>
     
      </Fragment>
    )
  }
}

export default IndexPage
