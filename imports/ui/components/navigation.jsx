import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

export const Navigation = () => (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Character App</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem><Link to="/one">One</Link></NavItem>
        <NavItem><Link to="/two">Two</Link></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem><AccountsUIWrapper /></NavItem>
      </Nav>
    </Navbar>


)
