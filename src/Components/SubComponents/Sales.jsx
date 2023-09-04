import { Card, Row } from "react-bootstrap";
import { BsPlusCircle, BsPerson, BsEnvelopeOpen, BsRepeat } from "react-icons/bs";

const Sales = () => {

  let salesdata = [{
    title: "Leads",
    icon: <BsPerson/>,
    amount: 79 
  },{
    title: "Open Emails",
    icon: <BsEnvelopeOpen/>,
    amount: 759,
  },{
    title: "Invoice",
    icon: <BsRepeat/>,
    amount: 10050.76,
  },{
    title: "Invoice",
    icon: <BsRepeat/>,
    amount: 10050.76,
}]

  let saleslist = []
  salesdata.forEach((card, index) => {
    saleslist.push(
      <Card style={{margin:"10px"}}>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text style={{textAlign:"center"}}>{card.icon}</Card.Text>
          <Card.Footer>{card.amount}</Card.Footer>
        </Card.Body>
      </Card>
    )
  });

  return (
    
    <div style={{display:"flex", margin:"20px"}}>
      <Row s={2} md={4} lg={5} className="g-4">
        {saleslist}
        <Card style={{margin:"10px"}}>  
        <BsPlusCircle style={{height:"30px", width:"30px",margin:"3px",color:"black"}}/>
        </Card>
        
      </Row>
          
      </div>

  )

}

export default Sales