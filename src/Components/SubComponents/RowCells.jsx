import { Row, Col, Card } from "react-bootstrap"
import {BsPlusCircle,BsArrowRightCircle,BsFillCreditCardFill,BsGraphUpArrow,BsChevronDoubleRight,BsWallet2} from "react-icons/bs"

const RowCells = () => {

  let testdata = [{
    title: "Overhead",
    icon:<BsArrowRightCircle style={{margin: "10px", color:"#4285F4",width:"20px", height:"20px"}}/>,
    color:"#7BCC90",
    amount: 79941.08
  },{
    title: "Overhead",
    icon:<BsFillCreditCardFill style={{margin: "10px",color:"#4285F4", width:"20px", height:"20px"}}/>,
    color:"#F14668",
    amount: 79941.08
  },{
    title: "Overhead",
    icon:<BsGraphUpArrow style={{margin: "10px",color:"#4285F4",width:"20px", height:"20px"}}/>,
    color:"#D2D2D2",
    amount: 79941.08
  },{
    title: "Overhead",
    icon:<BsChevronDoubleRight style={{margin: "10px",color:"#4285F4",width:"20px", height:"20px"}}/>,
    color:"#FFD047",
    amount: 79941.08
  }]

  var cardlist = []
  testdata.forEach((card, index) => {
    cardlist.push(
      <Card style={{margin:"10px", height:"125px", width:"125px", textAlign:"center", backgroundColor:`${card.color}`, borderRadius:"10px", border:"none", color:"#FFF"}}>
      <div style={{margin:"auto"}}>
        <div>{card.title}</div>
        <div style={{margin:"auto",width:"40px", height:"40px", borderRadius:"20px", backgroundColor:"#FFF"}}>{card.icon}</div>
        <div>${card.amount}</div>
      </div>
    </Card>
  )});

  return(
    <div style={{display:"flex", margin:"20px"}}>
      <Row s={2} md={4} lg={5} className="g-4">
      {cardlist}
      <Card style={{margin:"10px", border:"none"}}><BsPlusCircle style={{height:"30px", width:"30px",margin:"3px",color:"black"}}/></Card>
      </Row>
        
    </div>
  )
}

export default RowCells