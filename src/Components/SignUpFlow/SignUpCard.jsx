import { Container,Form, ListGroup, ListGroupItem, Nav, Navbar, Image, Offcanvas,Button, Card} from "react-bootstrap";
import { useState } from "react";

const SignUpCard = (props) =>{
  const OnFormSignUp = e =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(password, " ", email)
    props.handleSignUpData({email: email, password: password})
    
}
  return(<div>

  <Card.Header style={{backgroundColor:"white", border:"none"}}>
        <h2>Sign Up</h2>
        <div style={{margin:"20px"}} />
        <p style={{color:"grey", fontSize:"small"}}>Please use the email address you use at work</p>
    </Card.Header>
    <Card.Body>
    <Form onSubmit={OnFormSignUp}>
        <Form.Group>
        <Form.Label style={{textAlign:"left"}}htmlFor="email" >Email</Form.Label>
        <Form.Control
            placeholder="example@ex.com"
            type="email"
            name="email"
        />
        </Form.Group>
        
        <div style={{margin:"10px"}} />
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
        </Form.Group>
        <div style={{margin:"30px"}} />

        <Button style={{width:"100%"}} variant="primary" type="submit">Continue</Button>
    </Form>
    <div style={{margin:"20px"}} />
    
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </div> 
  )
}

export default SignUpCard