import { Card, Row } from "react-bootstrap";
import { BsGlobe, BsPlusCircle, BsEnvelopeOpen, BsRepeat } from "react-icons/bs";

const Marketing = () => {

  let marketingdata = [{
    title: "Traffic",
    icon: <BsGlobe style={{margin: "10px",color:"#4285F4",width:"20px", height:"20px"}}/>,
    color:"#7BCC90",
    amount: "72%", 
  },{
    title: "Emails",
    icon: <BsEnvelopeOpen style={{margin: "10px",color:"#4285F4",width:"20px", height:"20px"}}/>,
    color:"#D2D2D2",
    amount: 759,
  },{
    title: "Invoice",
    icon: <BsRepeat style={{margin: "10px",color:"#4285F4",width:"20px", height:"20px"}}/>,
    color:"#FFD047",
    amount: "10,050.76",
  
} ,{
    title: "Traffic",
    icon: <BsGlobe style={{margin: "10px",color:"#4285F4",width:"20px", height:"20px"}}/>,
    color:"#7BCC90",
    amount: "72%",

}]

  let marketinglist = []
  marketingdata.forEach((card, index) => {
    marketinglist.push(
      <Card style={{margin:"auto", height: "125px", width: "125px", borderRadius: "10px", textAlign: "center", fontWeight: "200", backgroundColor:`${card.color}`, border: "none", color: "#FFF"}}>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text style={{margin:"auto", width:"40px", height:"40px", borderRadius:"20px", backgroundColor: "#FFFFFF",}}>{card.icon}</Card.Text>
          <div>{card.amount}</div>
        </Card.Body>
      </Card>
    )
  });

  return (
    <div style={{display:"flex", margin:"20px"}}>
      <Row s={2} md={4} lg={5} className="g-4">
        {marketinglist}
        <Card style={{margin:"10px", border: "none"}}>  
        <BsPlusCircle style={{height:"30px", width:"30px",margin:"3px",color:"black"}}/>
        </Card>
        
      </Row>
          
      </div>

  )

}

export default Marketing