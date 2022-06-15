import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./SubNav.css";

export default class SubNav extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar2">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav class="navbaritem" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} to="/Atention">
                Personas
              </Nav.Link>
              <Nav.Link as={Link} to="/Empresas">
                Empresas
              </Nav.Link>
              <Nav.Link as={Link} to="/Carrier">
                Carrier
              </Nav.Link>
              <Nav.Link as={Link} to="/Negocios">
                Negocios
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
