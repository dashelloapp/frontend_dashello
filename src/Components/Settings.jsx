import { Container, ListGroup, ListGroupItem, Nav, Navbar, Image, Offcanvas,Button} from "react-bootstrap";

const  Settings = () => {

    return (
        <Container style={{display:"flex"}}>
            <div>
                <h1>
                    Profile
                </h1>
                
                <div><Image className="nav-photo margin" src={"smilingWoman.jpg"} height="100" style={{borderRadius:"50%"}} /> <Button>Remove Profile Photo</Button></div>
                
                <div><b>Name</b></div>
                <p>User 1</p>
                <Button >Change name</Button>
                <br/>

                <div><b>Email</b></div>
                <p>example@dashello.com</p>
                <Button>Change email</Button>
                <br/>

                <div><b>Password</b></div>
                <Button>Change password</Button>
            </div> 
            <div>
                Billing plan and information
            </div>
        </Container>
    );
};

export default Settings;