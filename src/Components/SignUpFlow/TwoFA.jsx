import { Container, ListGroup, ListGroupItem, Nav, Navbar, Image, Offcanvas,Button} from "react-bootstrap";
import { useState } from "react";
import QRCode from "react-qr-code";
const TwoFA = (props) => {

    return (
        <Container style={{display:"flex"}}>
            <div>
                <QRCode value={props.qr} />
                <div>scan this QR code into a 2fa application like google authenticator or DUO</div>
                <input/>
                <Button>Sign in</Button>
            </div>
        </Container>
    );
};

export default TwoFA;