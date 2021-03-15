import React from "react"
import { BrowserRouter } from "react-router-dom";
import InforLeft from "./InforLeft"
import InforRight from "./InforRight"
const home = () => {
  return (
    <div className="home">
        <BrowserRouter>
            <InforLeft />
            <InforRight />
        </BrowserRouter>
    </div>
  )
}

export default home
