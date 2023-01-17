import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import useSound from 'use-sound';
import sound from "../sounds/end.mp3"
import Button from 'react-bootstrap/Button';
import "../style/Header.css";
import iconImage from "../images/ajDog.png";

export default function Header({setScreen, screen, user, setUser}) {
    const [play, { stop, pause }] = useSound(sound)
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="shadow p-3 mt-4 mb-5 bg-light rounded-pill ms-5 me-5 head">
      <Container>
        <img className="me-3" src={iconImage} alt="" width="60" height="48" />
        <Navbar.Brand id="theme"
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
                            className='text-dark button'
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
                        className='text-dark button'
                        onClick={() => {
                            setScreen("MemberList")
                        }}>All Member
                    </Button>:""
            }
          </Nav>
          <Nav>
            {
                user[2]? 
                <Nav className='text-dark mt-2'>ID：{user[2]} さん　</Nav>
                :""
            }
            {
                (screen !== "Login") ?
                    <Button
                        variant="white"
                        id="logoutButton"
                        className='text-dark ms-3 button'
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