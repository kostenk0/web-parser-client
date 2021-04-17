import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Парсер</Navbar.Brand>
    <Nav className="ml-auto">
      <NavLink  href='/'>Слово</NavLink>
      <NavLink  href='/upload'>Завантажити файл</NavLink>
      <NavLink  href='/findWithKeyword'>Пошук за словом</NavLink>
      <NavLink  href='/findWithUrl'>Пошук за url</NavLink>
    </Nav>
  </Navbar>
  </header>
  );
}
export default Header;