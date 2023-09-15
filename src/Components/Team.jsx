

import { Row, Image,ListGroupItem, Card, Button } from "react-bootstrap"
import { AiFillCheckCircle } from "react-icons/ai";
import "../index.css"
import TopOptions from "./SubComponents/TopOptions";

const Team = () => {

  return(
    <>
    <TopOptions/>
    <div style={{display:"flex", margin:"20px"}}>
      <div className="container">
        <div className="row">
          <div className="col-3">
              <Card style={{margin:"10px", alignItems:"center", backgroundColor: "aliceblue"}}>
                <Card.Body>
                  <div style={{display:"flex"}}><Image className="user-photo" src={"./../../public/dashpic1.jpeg"} height="35" width="30" style={{borderRadius:"50%"}} />
                  <h3>Liz</h3></div>
                  <h3 className="subtitle" style={{width:"120px"}}>Next Actions</h3>
                  <ul>
                    <AiFillCheckCircle /><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle /><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle /><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle /><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                  </ul>
                  <Button className="basicButton"> View All</Button>
                </Card.Body> 
              </Card>
            </div>
            <div className="col-3">
              <Card style={{margin:"10px", alignItems:"center", backgroundColor: "aliceblue" }}>
                <Card.Body>
                  <div style={{display:"flex"}}><Image className="user-photo" src={"./../../public/9.person.jpeg"} height="35" width="30" style={{borderRadius:"50%"}} />
                  <h3>Tanya</h3></div>
                  <h3 className="subtitle" style={{width:"120px"}}>Next Actions</h3>
                  <ul>
                    <AiFillCheckCircle /><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle/><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle/><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle/><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                  </ul>
                  <Button className="basicButton"> View All</Button>
                </Card.Body> 
              </Card>
            </div>
            <div className="col-3">
              <Card style={{margin:"10px", alignItems:"center", backgroundColor: "aliceblue"}}>
                <Card.Body>
                  <div style={{display:"flex"}}><Image className="user-photo" src={"./../../public/dashpic2.jpeg"} height="35" width="30" style={{borderRadius:"50%"}} />
                  <h3>Rick</h3></div>
                  <h3 className="subtitle" style={{width:"120px"}}>Next Actions</h3>
                  <ul>
                    <AiFillCheckCircle /><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle/><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle/><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                    <AiFillCheckCircle/><div style={{ width:"120px", borderBottom:"1px solid lightgrey"}}></div>
                  </ul>
                  <Button className="basicButton"> View All</Button>
                </Card.Body> 
              </Card>
            </div>
       </div>
      </div>
    </div>
    </>
  )
};

export default Team