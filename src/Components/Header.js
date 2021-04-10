import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Парсер</Navbar.Brand>
    <Nav className="ml-auto">
      <NavLink><Link to='/'>Слово</Link></NavLink>
    </Nav>
  </Navbar>
  </header>
  );
}
export default Header;