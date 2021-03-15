import React from 'react'
import { Route, Switch, BrowserRouter,Link } from "react-router-dom";
import About from './about'
import Project from './Project'
var arr = [
    {
      id:1,
      name:"About",
      link:"/",
      component:About
    },
    {
      id:2,
      name:"Project",
      link:"/Project",
      component:Project
    },

  ]
const InforRight = () => {
    return (
        <div className='inforRight' >
            {/* <Switch>
                <Route path="/" component={About} />
                <Route path="/Project" component={Project} />
            </Switch> */}
        </div>
    )
}

export default InforRight
