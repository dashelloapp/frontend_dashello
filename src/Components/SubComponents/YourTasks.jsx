import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
const YourTasks = () => {

  const tasks = ["Spring", "Summer", "Autumn", "Winter"];

  let tasklist = [];

  //for this test we are using foreach and pushing to arra
  //most of the time its better to map structs ie tasks.map((item)=>{<etc></etc>})
  tasks.forEach((season, index) => {
    tasklist.push(
      <ListGroupItem>

        <div>__________</div>
      </ListGroupItem>);
  });
  return (
    <Card style={{maxWidth:"150px"}}>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush" >
        {tasklist}
      </ListGroup>
      <Button size="sm" >View All</Button>
    </Card>
  );
};

export default YourTasks;