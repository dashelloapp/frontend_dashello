
import {BsFillArrowUpRightSquareFill, BsFillPlusCircleFill} from "react-icons/bs/"
import { Image } from "react-bootstrap";
import {PiDotsThreeCircleFill} from "react-icons/pi"

const RowCellHeader= (props) =>{

  var imageList = []
  props.images.forEach((image, index) => {
    imageList.push(
      <Image  src={image} height="25" style={{borderRadius:"50%", margin:"5px"}} />
  )});
  return(
    <div style={{width:"100%",marginTop:"15px"}}>
      <div style={{borderBottom: "solid 1px grey"}}/>
      <div style={{display:"flex"}}>
        <h3>{props.title}</h3>
        <BsFillArrowUpRightSquareFill/>
        {imageList}
        <BsFillPlusCircleFill style={{height:"25px", width:"25px",margin:"5px",color:"blue"}}/>
        <PiDotsThreeCircleFill style={{height:"30px", width:"30px",margin:"3px",color:"gray"}}/>
      </div>
    </div>
  )
}
export default RowCellHeader