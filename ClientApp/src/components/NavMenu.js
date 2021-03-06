import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth0-wrapper";

import "./NavMenu.css";

const NavMenu = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            Trips
          </NavbarBrand>
          {isAuthenticated ? (
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="btn btn-success" to="/create">
                  Create
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="btn btn-primary" to="/trips">
                  Trips
                </NavLink>
              </NavItem>
              <NavItem>
                <button className="btn btn-danger" onClick={() => logout()}>
                  Log out
                </button>
              </NavItem>
            </ul>
          ) : (
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <button
                  className="btn btn-success"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </NavItem>
            </ul>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
