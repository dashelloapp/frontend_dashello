import { Outlet, Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Nav, Navbar, Image} from "react-bootstrap";
import YourTasks from "./SubComponents/YourTasks";
import ProgBar from "./SubComponents/ProgressBar";
import "./Navbar.css"


const Header = () => {

    return (
        <div style={{display:"flex"}}>
                <Container style={
                {background: "linear-gradient(0deg, rgba(9,83,121,1) 0%, rgba(0,232,255,1) 100%)",
                 width:"200px", marginLeft:0}}>
                    <div>
                    <Image className="nav-photo margin" src={"smilingWoman.jpg"} height="100" style={{borderRadius:"50%"}} />
                    <p style={{textAlign:"center"}}>Welcome to your business dashboard</p>
                    </div>
                    <Navbar><Nav>
                        <ListGroup >
                            <ListGroupItem ><Link to="/" className="nav-link">
                                Home
                            </Link></ListGroupItem >
                            <ListGroupItem><Link to="/dashboard/goals" className="nav-link">
                                Goals/Projections
                            </Link></ListGroupItem>
                            <ListGroupItem><Link to="/dashboard/tasks" className="nav-link">
                                Tasks
                            </Link></ListGroupItem>
                            <ListGroupItem><Link to="/dashboard/integrations" className="nav-link">
                                Integrations/Apps
                            </Link></ListGroupItem>
                            <ListGroupItem><Link to="/dashboard/team" className="nav-link">
                                Team
                            </Link></ListGroupItem>
                            <ListGroupItem><Link to="/dashboard/settings" className="nav-link">
                                Settings
                            </Link></ListGroupItem>
                        </ListGroup>
                    </Nav></Navbar>
                    <ProgBar 
                    percent={50} />
                    <YourTasks 
                    />
                    
                </Container>
           <div style={{width:"100%"}}><Outlet /> </div>
        </div>
    );
};

export default Header;