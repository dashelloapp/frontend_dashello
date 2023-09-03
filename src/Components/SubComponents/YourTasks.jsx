import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import {BsCheckCircleFill} from "react-icons/bs"
import "./../../index.css"
const YourTasks = () => {

  const tasks = ["", "", "", ""];

  let tasklist = [];

  //for this test we are using foreach and pushing to arra
  //most of the time its better to map structs ie tasks.map((item)=>{<etc></etc>})
  tasks.forEach((season, index) => {
    tasklist.push(
      <ListGroupItem style={{display:"flex", border:"none",marginBottom:"15px"}} key={index}>
        <BsCheckCircleFill style={{color:"lightgrey"}}/>
        <div style={{ width:"100px", borderBottom:"1px solid lightgrey"}}>{season}</div>
      </ListGroupItem>);
  });
  return (
    <Card style={{margin:"10px", alignItems:"center", padding:"0px"}}>
      <Card.Body>
        <h3 className="subtitle" style={{width:"120px"}}>Next Actions</h3>
        {tasklist}
        <Button className="basicButton"> View All</Button>
      </Card.Body> 
    </Card>
  );
};

export default YourTasks;