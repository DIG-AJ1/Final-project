import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import useSound from 'use-sound';
import sound from "../sounds/end.mp3"
import Button from 'react-bootstrap/Button';

export default function Header({setScreen, screen, user, setUser}) {
    const [play, { stop, pause }] = useSound(sound)
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand 
            onClick={
                ()=>{
                    (screen === "Login")? setScreen("Login"): setScreen("Main");
                }
            }
            >Badge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                {
                    (screen !== "Login") ?
                        <Button
                            variant="link"
                            className='text-light'
                            onClick={
                                ()=>{
                                    (screen === "Login")? setScreen("Login"): setScreen("Main");
                                    }
                                }
                            >Home
                        </Button>
                    :""
                }
            {
                (screen === "MyBudgeList") ?
                    <Button
                        variant="link"
                        className='text-light'
                        onClick={() => {
                            setScreen("MemberList")
                        }}>All Members
                    </Button>:""
            }
          </Nav>
          <Nav>
            <Nav className='text-light mt-2'>{user[2]}</Nav>
            {
                (screen !== "Login") ?
                    <Button
                        variant="link"
                        className='text-light ms-3'
                        onClick={() => {
                            play();
                            setScreen("Login");
                            setUser([]);
                        }}>Logout
                    </Button>:""
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}