import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from "react";

function Header({
                  loginInfo,
                }) {

  const [username, setUsername] = useState('');

  useEffect(() => {
    if (loginInfo) {
      console.log(loginInfo);
    }
  }, [loginInfo]);

  // 유저 정보 임시 테스트
  useEffect(() => {
    const userId = window.localStorage.getItem('username');
    setUsername(userId);
  }, []);


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
          {username ? (
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  {username}님
                </Navbar.Text>
                <Navbar.Text>
                  <button type={"button"} className={"btn btn-secondary ms-4"}>
                    로그아웃 <i className="bi bi-arrow-bar-right"></i>
                  </button>
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