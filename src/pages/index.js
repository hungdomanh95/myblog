import React, { Fragment } from "react"
// import { Link } from "gatsby"
import "../scss/index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Header from "./Header"
import Home from "./home"
import { Route, Switch, BrowserRouter,Link } from "react-router-dom";
class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className='page'>
          <div className='container'>
          <BrowserRouter>
            <Header/>
            <Home/>
          </BrowserRouter>
          </div>
        </div>
     
      </Fragment>
    )
  }
}

export default IndexPage
