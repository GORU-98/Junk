import React, { useState } from 'react'
import {
  Outlet
} from "react-router-dom"

const Navbar = () => {
  const [menu,setmenu]=useState(false)
  
  const handleMenu=()=>{
    setmenu(!menu)

  }
  return (<>
    <div className='nav'>
    <div className="nav_title">Goru2k18</div>
    <div className="nav_ul">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/getcard">Chips</a></li>
            <li><a href="/">Services</a></li>
        </ul>
    </div>
    <div className="srch_bar">
        <input type="search" name="srch" id="srch" placeholder='Search here...'/>
    </div>
    </div>


    <div className="nav_res">
    <div className="nav_title">Goru2k18</div>
    <div className="nav_ul" style={{display:menu?"flex":"none"}}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/getcard">Chips</a></li>
            <li><a href="/">Services</a></li>
        </ul>
    </div>
    <div className="menu_btn" onClick={handleMenu}><img src="./pics/menu.png" alt="" /></div>
    {/* <div className="srch_bar">
        <input type="search" name="srch" id="srch" placeholder='Search here...'/>
    </div> */}
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar
