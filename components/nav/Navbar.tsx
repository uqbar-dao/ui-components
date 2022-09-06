import React from 'react'
import Row from '../spacing/Row'
import Link from './Link'
// import logoWithText from '../../assets/img/uqbar-logo-text.png'
import logo from '../../assets/img/logo192.png'
import { isMobileCheck } from '../utils/dimensions'
import './Navbar.scss'

const Navbar = () => {
  const isMobile = isMobileCheck()

  return (
    <Row className='navbar'>
      <Row>
        <Link href='/' className="nav-link logo">
          <img src={logo} alt="Uqbar Logo" />
        </Link>
      </Row>
    </Row>
  )
}

export default Navbar
