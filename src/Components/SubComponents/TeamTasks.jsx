import { Row, Image,ListGroupItem, Card, Button } from "react-bootstrap"
import {BsCheckCircleFill,BsArrowRightCircle,BsFillCreditCardFill,BsGraphUpArrow,BsChevronDoubleRight} from "react-icons/bs"
import "./../../index.css"
const TeamTasks = () => {

  const tasks = ["", "", "", ""];

  var tasklist = [];

  tasks.forEach((season, index) => {
    tasklist.push(
    
        <ListGroupItem style={{display:"flex", border:"none", marginBottom:"10px"}} key={index}>
            <BsCheckCircleFill style={{color:"lightgrey"}}/>
            <div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}>{season}</div>
          </ListGroupItem>
      
  )});

  return(
    <div style={{display:"flex", margin:"20px"}}>
      <Row className="g-4">
        <Card style={{margin:"10px", alignItems:"center", padding:"0px"}}>
          <Card.Body>
            <div style={{display:"flex"}}><Image className="nav-photo " src={"./../../public/smilingWoman.jpg"} height="35" style={{borderRadius:"50%"}} />
            <h3>User</h3></div>
            <h3 className="subtitle" style={{width:"120px"}}>Next Actions</h3>
            {tasklist}
            <Button className="basicButton"> View All</Button>
          </Card.Body> 
        </Card>
      </Row>
        
    </div>
  )
}

export default TeamTasks