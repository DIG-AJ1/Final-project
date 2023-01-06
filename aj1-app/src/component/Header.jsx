import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"

export default function Header({setScreen,screen}) {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand
                        onClick={
                            ()=>{
                                
                                // console.log("no14: clicked");
                                (screen === "Login")? setScreen("Login"): setScreen("Main");
                                // console.log(screen);
                            }
                        }
                        >Budge
                    </Navbar.Brand>
                </Container>
                <button
                    className='header-btn'
                    onClick={() => {
                        setScreen("Login")
                    }}
                    >Logout
                </button>
            </Navbar>
        </>
    );
}