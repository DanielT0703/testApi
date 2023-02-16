import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'

function Navbar() {
  const searchParams = new URLSearchParams(window.location.search)
  const modulesParam = searchParams.get('modules')
  const showMenu =
    !modulesParam || !modulesParam.includes('alternativemenu')
      ? 'nav-menu-top'
      : 'nav-menu'

  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      {!modulesParam || !modulesParam.includes('alternativemenu') ? (
        ''
      ) : (
        <div className='navbar'>
          <div className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
      )}
      <nav className={sidebar ? showMenu + ' active' : showMenu}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          {!modulesParam || !modulesParam.includes('alternativemenu') ? (
            ''
          ) : (
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </div>
            </li>
          )}
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Navbar
