import React,{useState} from 'react'
import { Link } from "gatsby"
import About from '../pages/about'
import Blog from '../pages/blog'
import Project from '../pages/Project'
var arr = [
    {
      id:1,
      name:"About",
      link:"/",
      component:About
    },
    {
      id:2,
      name:"Blog",
      link:"/blog",
      component:Blog
    },
    {
      id:3,
      name:"Project",
      link:"/Project",
      component:Project
    },
  ]
const Header = () => {

    return (
        <div className='header' >
            <div className='header-item'>
                <img className='cover-menu' alt='cover-menu'  src="../../static/images/nav-edge.svg"  />
                <div className='menu'>
                    {arr.map((item,index)=>{
                        // return <Link key={item.id} to ={item.link} className={status === index  ? 'menu-item active' : 'menu-item'} onClick={()=>setIndex(index)}>{item.name}</Link>
                        return <Link key={item.id} to ={item.link} className={'menu-item'} >{item.name}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header
