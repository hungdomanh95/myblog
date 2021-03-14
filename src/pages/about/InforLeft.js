import React from 'react'
import {inforSocial,inforMySelfLeft} from "../ListData"
const InforLeft = () => {
    return (
        <div className='inforLeft' >
            <div className='avatar'>
                <img src="images/timestope.png" />
                <h3 className='name' >DoHung1995</h3>
                <div className='badge' ><p>Electric Engineer</p></div>
            </div>
            <div className='infor-social'>
                {inforSocial.map(item=>{
                    return (
                        <a className="infor-social-item" key={item.id} href={`${item.link}`} target="_blank">{item.icon}</a>
                    )
                })}
            </div>

            <div className='infor-mySelfLeft'>
                {inforMySelfLeft.map(item=>{
                    return(
                        <div className='infor-mySelfLeft-item'  key={item.id} >
                            <span>{item.icon}</span>
                            <span>{item.infor}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InforLeft
