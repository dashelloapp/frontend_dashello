import { Outlet, Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Nav, Navbar, Image, Offcanvas,Button} from "react-bootstrap";
import YourTasks from "./SubComponents/YourTasks";
import ProgBar from "./SubComponents/ProgBar";
import "./Navbar.css"
import { useState } from "react";
import {BsList} from "react-icons/bs"
import {CgHomeAlt} from "react-icons/cg"
import {TbPlaystationCircle, TbSettings} from "react-icons/tb"
import {AiOutlineCheckCircle, AiOutlineTeam} from "react-icons/ai"
import {IoCheckmarkDone} from "react-icons/io5"

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let path = window.location.pathname;//variable to track what the url is and set active nav item

    return (
        <div style={{display:"flex"}}>
            <div style={{display:"block"}}>
            <Button variant="primary"  className="d-lg-none" onClick={handleShow}>
                <BsList/>
            </Button>
                <Offcanvas show={show} onHide={handleClose} responsive="lg" backdrop="false" fluid="true" style={
                        {background: "linear-gradient(0deg, rgba(9,83,121,1) 0%, rgba(0,232,255,1) 100%)",
                        width:"190px", marginLeft:0}}>
            
                    <Navbar expand="lg" >
                        <Offcanvas.Header closeButton/>
                        <Container style={{display:"block"}}>
                                <div>
                                    <Image className="nav-photo margin" src={"smilingWoman.jpg"} height="100" style={{borderRadius:"50%"}} />
                                    <p style={{textAlign:"center",color:"#FFF"}}>Welcome to your business dashboard</p>
                                </div>
                                    <Nav defaultActiveKey={path} style={{display:"grid"}}>
                                        <Nav.Item>
                                            <Nav.Link eventKey="/">
                                                <Link to="/" >
                                                    <CgHomeAlt className="icon"/>
                                                    Home
                                                </Link>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="/dashboard/goals">
                                            <Link to="/dashboard/goals">
                                                <TbPlaystationCircle className="icon"/>
                                                Goals/Projections
                                            </Link>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="/dashboard/tasks">
                                                <Link to="/dashboard/tasks" >
                                                    <AiOutlineCheckCircle className="icon"/>
                                                    Tasks
                                                </Link>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="/dashboard/integrations">
                                                <Link to="/dashboard/integrations" >
                                                    <IoCheckmarkDone className="icon"/>
                                                    Integrations/Apps
                                                </Link>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="/dashboard/team">
                                                <Link to="/dashboard/team" >
                                                    <AiOutlineTeam className="icon"/>
                                                    Team
                                                </Link>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="/dashboard/settings">
                                                <Link to="/dashboard/settings" >
                                                    <TbSettings className="icon"/>
                                                    Settings
                                                </Link>
                                            </Nav.Link>
                                        </Nav.Item>
 
                                    </Nav>

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