import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import useSound from 'use-sound';
import sound from "../sounds/end.mp3"
import Button from 'react-bootstrap/Button';
import "../style/Header.css"

export default function Header({setScreen, screen, user, setUser}) {
    const [play, { stop, pause }] = useSound(sound)
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow p-4 mt-3 mb-5 bg-dark rounded-pill ms-5 me-5">
      <Container>
        <img className="me-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabrl2VTWfpp7MbwZp6gVKWPv5C_3Xkx-VlQ&usqp=CAU" alt="" width="30" height="24" />
        <Navbar.Brand id=""
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
                            variant="white"
                            id="homeButton"
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
                        variant="white"
                        id="allMemberButton"
                        className='text-light'
                        onClick={() => {
                            setScreen("MemberList")
                        }}>All Member
                    </Button>:""
            }
          </Nav>
          <Nav>
            <Nav className='text-light mt-2'>{user[2]}</Nav>
            {
                (screen !== "Login") ?
                    <Button
                        variant="white"
                        id="logoutButton"
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