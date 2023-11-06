import { Container,Tabs , Tab, Navbar, Image, Offcanvas,Button, Card} from "react-bootstrap";
import { useState, useContext } from "react";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";
import LogoWrapper from "./logoWrapper";
import LazyWrapper from "./LazyWrapper"
import SetUp from "./SetUp";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from "../../Contexts/UserContext";
import TwoFA from "./TwoFA";

const  SignInUp = () => {

    const [ps, setPs] = useState('')
    const [email, setEmail] = useState('')
    const [org, setOrg] = useState('')
    const [firstName, setFirst] = useState('')
    const [lastName, setLast] = useState('')
    const [showSetUp, setCard] = useState(false) 
    const [show2FA, setShow2FA] = useState(false) 
    const [qr, setQR] = useState('')

    let { signInUser, createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSignUpData(data){
        //take props from sign up card
        //show setupCard
        setPs(data.password)
        setEmail(data.email)
        setCard(true)
    }
    function handleSetUp(data){
        setOrg(data.org)
        setFirst(data.first)
        setLast(data.last)
        console.log(org," ", firstName," ", lastName," ", ps," ",email," ", org)
        if (testSignUpData){
            createUser({"organization":org, "firstName":firstName, "lastName":lastName,"email":email,"password":ps}).then((response) =>{
                console.log(response)
            }).catch(error =>{
                console.log(error)
                window.alert("Failed Registration: error creating user")
            })
        }
        //take props from set up

        //form user in format backend likes
        //make user create post
        //if successful
        //make sign in request
        //if successful 
        //navigate to app
            //set sign in to true in app?
                    //see how i do this in dream team

    }
    function handleSignIn(data){

        signInUser({email: data.email,password: data.ps}).then((response) =>{
            console.log
            navigate('/')
        }).catch(error =>{
            console.log(error)
            window.alert("Failed Registration: error creating user")
        })
    }
    function testSignUpData(){
        if (ps != '' || email != '' || org != '' || firstName != '' || lastName != ''){
            return true
        }
        return false
    }
    return (
        <Container style={{display:"flex", backgroundColor:"#EAEAEB"}}>
            <div style={{ display:"flex", flexDirection:"column",alignItems:"center"}}>
                <div style={{margin:"20px"}}>
                <LogoWrapper/>
                </div>
                <Card style={{width:"500px", alignItems:"center", textAlign:"center",padding:"40px 20px 60px 40px", borderRadius:"30px",boxShadow:"0px 6px 5px 0px rgba(0,0,0,0.25)"}}>
                <Tabs defaultActiveKey="SignUp"
                        variant="pills"
                        id="uncontrolled-tab-example"
                        className="mb-3">
                    <Tab eventKey="SignIn" title="Sign In">
                        <SignInCard handleSignIn={handleSignIn} />
                    </Tab>
                    <Tab eventKey="SignUp" title="Sign Up">
                        {showSetUp ? show2FA ? <TwoFA qr={qr}/> : <SetUp handleSetUp={handleSetUp} /> 
                        : <SignUpCard handleSignUpData={handleSignUpData}/>}
                    </Tab>
                </Tabs>
                </Card>
            <div style={{margin:"30px"}} >
                    <LazyWrapper />
                </div>
            </div>
        </Container>
    );
};

export default SignInUp;
