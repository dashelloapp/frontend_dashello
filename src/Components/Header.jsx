import { Outlet, Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Nav, Navbar, Image, Offcanvas,Button} from "react-bootstrap";
import YourTasks from "./SubComponents/YourTasks";
import ProgBar from "./SubComponents/ProgBar";
import "./Navbar.css"
import { useState } from "react";
import {BsList} from "react-icons/bs"

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div style={{display:"flex"}}>
            <div style={{display:"block"}}>
            <Button variant="primary"  className="d-lg-none" onClick={handleShow}>
                <BsList/>
            </Button>
                <Offcanvas show={show} onHide={handleClose} responsive="lg" backdrop="false" fluid="true" style={
                        {background: "linear-gradient(0deg, rgba(9,83,121,1) 0%, rgba(0,232,255,1) 100%)",
                        width:"200px", marginLeft:0}}>
            
                    <Navbar expand="lg" >
                        <Offcanvas.Header closeButton/>
                        <Container style={{display:"block"}}>
                                <div>
                                    <Image className="nav-photo margin" src={"smilingWoman.jpg"} height="100" style={{borderRadius:"50%"}} />
                                    <p style={{textAlign:"center",color:"#FFF"}}>Welcome to your business dashboard</p>
                                </div>
                                    <div style={{display:"grid"}}>
                                    <Link to="/" >
                                        Home
                                    </Link>
                                    <Link to="/dashboard/goals" >
                                        Goals/Projections
                                    </Link>
                                    <Link to="/dashboard/tasks" >
                                        Tasks
                                    </Link>
                                    <Link to="/dashboard/integrations" >
                                        Integrations/Apps
                                    </Link>
                                    <Link to="/dashboard/team" >
                                        Team
                                    </Link>
                                    <Link to="/dashboard/settings" >
                                        Settings
                                    </Link>

                                    </div>
                                <ProgBar percent={50} />
                                <YourTasks />

                        </Container>
                        </Navbar>
                    </Offcanvas>
            </div>
           <div style={{width:"100%"}}><Outlet /> </div>
        </div>
    );
};

export default Header;