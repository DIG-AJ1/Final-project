import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

export default function _Header({setScreen,screen}) {
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

                {   
                    (screen === "MyBudgeList") ?
                    
                    <button variant="light"
                        className='header-btn text-nowrap'
                        onClick={() => {
                            setScreen("MemberList")
                        }}
                        >All Members
                    </button>:""
                }

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