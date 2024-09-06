import React from 'react'
import './Sidebar.css'
import Logo from '../Assets/Outlook-Company lo.png'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>
           <img src={Logo} alt='logo'></img>
        </div>

        <nav className="navbar">
            <ul>
                <li className='active'>
                    <a href='#'><span className="material-symbols-outlined" >dashboard</span>Dashboard</a>
                </li>

                <li>
                    <a href='#'><span className="material-symbols-outlined" >school</span>College</a>
                </li>

                <li>
                    <a href='#'><span className="material-symbols-outlined" >source_environment</span>School</a>
                </li>

                <li>
                    <a href='#'><span className="material-symbols-outlined" >school</span>University</a>
                </li>
            </ul>
        </nav>
      
    </div>
  )
}





export default Sidebar;





