import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'

import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

const accountsStyle = { marginRight: '10em' }

export const Navigation = () => (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Character App</Link>

        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem><Link to="/traits">Traits</Link></NavItem>
        <NavItem><Link to="/answers">Past Answers</Link></NavItem>
        {/* <NavItem><Link to="/two">Two</Link></NavItem> */}
      </Nav>
      <Nav pullRight>
        <NavItem style={accountsStyle}><AccountsUIWrapper /></NavItem>
        <Navbar.Brand pullRight>
          <Image src="/images/logo.png" />
        </Navbar.Brand>
      </Nav>

    </Navbar>


)
