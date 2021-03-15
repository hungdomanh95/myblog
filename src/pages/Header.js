import React,{Fragment} from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Link } from "gatsby"
import About from './about'
import Blog from './blog'
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
    // {
    //   id:3,
    //   name:"Project",
    //   link:"/project",
    //   component:ReactJs
    // },
  ]
const Header = () => {
    return (
        <div className='header' >
            <div className='header-item'>
                <img className='cover-menu' alt='cover-menu'  src="images/nav-edge.svg"  />
                <div className='menu'>
                    {arr.map((item)=>{
                        return <Link key={item.id} to ={item.link} >{item.name}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header
