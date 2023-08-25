import { CardGroup, Card } from "react-bootstrap"
import {BsPlusCircle,BsArrowRightCircle,BsFillCreditCardFill,BsGraphUpArrow,BsChevronDoubleRight,BsWallet2} from "react-icons/bs"

const RowCells = () => {

  let testdata = [{
    title: "Overhead",
    icon:<BsArrowRightCircle/>,
    color:"#7BCC90",
    amount: 79941.08
  },{
    title: "Overhead",
    icon:<BsFillCreditCardFill/>,
    color:"#7BCC90",
    amount: 79941.08
  },{
    title: "Overhead",
    icon:<BsGraphUpArrow/>,
    color:"#7BCC90",
    amount: 79941.08
  },{
    title: "Overhead",
    icon:<BsChevronDoubleRight/>,
    color:"#7BCC90",
    amount: 79941.08
  }]

  var cardlist = []
  testdata.forEach((card, index) => {
    cardlist.push(
      <Card>
     <Card.Body>
     <Card.Title>{card.title}</Card.Title>
      <Card.Text style={{textAlign:"center"}}>{card.icon}</Card.Text>
      <Card.Footer>{card.amount}</Card.Footer>
      </Card.Body> 
    </Card>
  )});

  return(
    <div style={{display:"flex"}}>{cardlist}
        <BsPlusCircle style={{height:"30px", width:"30px",margin:"3px",color:"black"}}/>
    </div>
  )
}

export default RowCells