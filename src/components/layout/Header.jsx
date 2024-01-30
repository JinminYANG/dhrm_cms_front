import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect} from "react";

function Header({
                  loginInfo,
                }) {

  useEffect(() => {
    if (loginInfo) {
      console.log(loginInfo);
    }
  }, [loginInfo]);

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">민주인권기념관 콘텐츠 관리 시스템</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          {/*<Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>*/}
          {loginInfo ? (
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  관리자 123
                </Navbar.Text>
              </Navbar.Collapse>
          ) : (
              <></>
          )}

        </Container>
      </Navbar>
  );
}

export default Header;