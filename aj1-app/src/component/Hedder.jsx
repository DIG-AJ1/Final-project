import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"

export default function Hedder({setScreen,screen,admin,setDisp,state}) {
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
              className="hedder-btn"
              onClick={() => {
                console.log("***");
                setScreen("Badge")
              }}
            >
              badge
            </button>:
            null
        }
        {
            (screen === "List")?
            <button
              className='hedder-btn'
                onClick={() => {
                    setScreen("Login")
                }}
            >
                Logout
            </button>:
            null
        }
      </Navbar>
    </>
  );
}

