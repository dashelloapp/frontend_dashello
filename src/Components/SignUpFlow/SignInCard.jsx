import { Container,Form, ListGroup, ListGroupItem, Nav, Navbar, Image, Offcanvas,Button, Card} from "react-bootstrap";
import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';

const SignInCard = (props) =>{
  

  function OnFormSignIn(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(password, " ", email)
    props.handleSignIn({email:email,ps:password})
  }
  const responseGoogle = (response) => {
    console.log(response);
    // Send response.tokenId to the backend
  };
  return(<div>

  <Card.Header style={{backgroundColor:"white", border:"none"}}>
              <h2>Sign In</h2>


          </Card.Header>
          <Card.Body>
          <Form onSubmit={OnFormSignIn}>
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
              <div style={{margin:"10px"}} />
              <Form.Group className="mb-3">
                  <Form.Label>2FA</Form.Label>
                  <Form.Control type="text" placeholder="2FA" name="2FA" />
              </Form.Group>
              <Button style={{width:"100%"}} variant="primary" type="submit">Continue</Button>
          </Form>
          <div style={{margin:"20px"}} />
          <div>
              <svg width="312" height="22" viewBox="0 0 312 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M152.154 15.096C151.306 15.096 150.542 14.912 149.862 14.544C149.182 14.168 148.646 13.652 148.254 12.996C147.87 12.34 147.678 11.608 147.678 10.8C147.678 9.992 147.87 9.26 148.254 8.604C148.646 7.948 149.182 7.436 149.862 7.068C150.542 6.692 151.306 6.504 152.154 6.504C152.994 6.504 153.754 6.692 154.434 7.068C155.114 7.436 155.646 7.948 156.03 8.604C156.414 9.252 156.606 9.984 156.606 10.8C156.606 11.616 156.414 12.352 156.03 13.008C155.646 13.656 155.114 14.168 154.434 14.544C153.754 14.912 152.994 15.096 152.154 15.096ZM152.154 14.028C152.77 14.028 153.322 13.888 153.81 13.608C154.306 13.328 154.694 12.944 154.974 12.456C155.262 11.96 155.406 11.408 155.406 10.8C155.406 10.192 155.262 9.644 154.974 9.156C154.694 8.66 154.306 8.272 153.81 7.992C153.322 7.712 152.77 7.572 152.154 7.572C151.538 7.572 150.978 7.712 150.474 7.992C149.978 8.272 149.586 8.66 149.298 9.156C149.018 9.644 148.878 10.192 148.878 10.8C148.878 11.408 149.018 11.96 149.298 12.456C149.586 12.944 149.978 13.328 150.474 13.608C150.978 13.888 151.538 14.028 152.154 14.028ZM164.056 15L162.244 12.42C162.02 12.436 161.844 12.444 161.716 12.444H159.64V15H158.44V6.6H161.716C162.804 6.6 163.66 6.86 164.284 7.38C164.908 7.9 165.22 8.616 165.22 9.528C165.22 10.176 165.06 10.728 164.74 11.184C164.42 11.64 163.964 11.972 163.372 12.18L165.364 15H164.056ZM161.68 11.424C162.44 11.424 163.02 11.26 163.42 10.932C163.82 10.604 164.02 10.136 164.02 9.528C164.02 8.92 163.82 8.456 163.42 8.136C163.02 7.808 162.44 7.644 161.68 7.644H159.64V11.424H161.68Z" fill="#DCDCDC"/>
              <path d="M0 11L139.437 11.5" stroke="#DCDCDC"/>
              <path d="M172.563 11L312 11.5" stroke="#DCDCDC"/>
              </svg>
          </div>
          <div style={{margin:"20px"}} />
          <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            />
          </Card.Body>

  </div> 
  )
}

export default SignInCard