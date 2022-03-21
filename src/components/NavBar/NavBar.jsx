import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <Navbar bg="dark" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#"></Navbar.Brand>
        
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header className={styles.offCanvasHeader} closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offCanvasBody}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className={styles.navLink} as={Link} to="/">Home</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/about">About</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link className={styles.navLink} as={Link} to="/tweeter">Tweeter</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavBar;