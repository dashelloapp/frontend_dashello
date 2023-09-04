import { Card, Row } from "react-bootstrap";
import { BsGlobe, BsPlusCircle, BsEnvelopeOpen, BsRepeat } from "react-icons/bs";

const Marketing = () => {

  let marketingdata = [{
    title: "Website Engagement",
    icon: <BsGlobe/>,
    amount: "72%", 
  },{
    title: "Open Emails",
    icon: <BsEnvelopeOpen/>,
    amount: 759,
  },{
    title: "Invoice",
    icon: <BsRepeat/>,
    amount: 10050.76,
  },{
    title: "Website Engagement",
    icon: <BsGlobe/>,
    amount: "72%",

}]

  let marketinglist = []
  marketingdata.forEach((card, index) => {
    marketinglist.push(
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
        {marketinglist}
        <Card style={{margin:"10px"}}>  
        <BsPlusCircle style={{height:"30px", width:"30px",margin:"3px",color:"black"}}/>
        </Card>
        
      </Row>
          
      </div>

  )

}

export default Marketing