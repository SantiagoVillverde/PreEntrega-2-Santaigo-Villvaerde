import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../cartWidget";
import "./navBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Navbar className="cont" expand="lg">
      <Container className="cont">
        <Navbar.Brand className="title"><NavLink to={'/'}>Team Rocket</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link>
              <NavLink>usuario</NavLink>
            </Nav.Link>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="drop">
                {" "}
                <NavLink to={"/category/fuego"}>fuego</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop">
                <NavLink to={"/category/agua"}>
                  agua
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop">
                <NavLink to={"/category/planta"}>
                  planta
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop">
                {" "}
                <NavLink to={"/category/normal"}>normal</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="drop">
                {" "}
                <NavLink to={"/category/electrico"}>electrico</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              {" "}
              <CartWidget></CartWidget>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
