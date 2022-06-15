import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../img/1.png";
//import user from "../img/user.png";
import SubNav from "./SubNav";
import "../Components/Navbar.css";
import PersonIcon from "@material-ui/icons/Person";

const Navbar1 = () => {
  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img className="img1" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title="Telecomunicaciones"
              id="navbarScrollingDropdown"
            >
              <h6>Segmentos</h6>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Atention">
                Personas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Negocios</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Carrier</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Phymes</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Cotizador</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Service">
                Internet
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Service">
                Televisión
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Service">
                Telefonía
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Comprar" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/sell">
                Internet
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sell">
                Televisión
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sell">
                Telefonía
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href={"https://pagos.emcali.com.co/pagosweb/checkout"}>
              Pagos
            </Nav.Link>
            <NavDropdown title="Información" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Atention">
                Regulatoria
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ayuda" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Atention">
                Atencion al cliente
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Atention">
                PQR
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Atention">
                Whatsapp
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Atention">
                Puntos de atención
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Atention">
                Soporte Tecnico{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Login">
              <PersonIcon />
              Ingresar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <SubNav />
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default Navbar1;
