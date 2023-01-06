import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"

function Hedder({setScreen,screen,admin}) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Budge</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
        {
          (admin === 1)?
            <button
              className="header-btn"
              onClick={() => {
                setScreen("List");
              }}
            >
              List
            </button>:
            null
        }
        <button
          className='header-btn'
            onClick={() => {
                setScreen("Login")
            }}
        >
            Logout
        </button>
      </Navbar>
    </>
  );
}