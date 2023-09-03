import TopOptions from "./SubComponents/TopOptions";
import TeamTasks from "./SubComponents/TeamTasks";
import "./../index.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import {BsCheckCircleFill} from "react-icons/bs"
import "./../../public/asana-logo.svg"
const Tasks = () => {
    let title = "Tasks"

    const tasks = ["Spring", "Summer", "Autumn", "Winter"];

    let tasklist = [];

    tasks.forEach((season, index) => {
        tasklist.push(
          <ListGroupItem style={{display:"flex", border:"none"}} key={index}>
            <BsCheckCircleFill style={{color:"lightgrey"}}/>
            <div style={{ width:"200px", borderBottom:"1px solid lightgrey"}}>{season}</div>
            <img className="greyBorder" style={{height:"25px", width:"25px", borderRadius:"5px", padding:"3px", margin:" 0px 10px 0px 10px"}}src="./../../public/asana-logo.svg"/>
            <div className="subtitle boxRadius" style={{background:"lightgrey", border:"1px grey solid", color:"black"}} >Sept. 27th</div>
          </ListGroupItem>);
      });

    return (
        <div>
           <TopOptions/> 
           <h2 className="greyTitleBorder margin">{title}</h2>

           <div style={{display:"flex"}}>
           <div className="margin greyBorder boxRadius padding" style={{display:"block", maxWidth:"450px"}}>
            <div >
                <div style={{display:"flex", justifyContent:"space-between", marginRight:"30px"}}>
                    <h3 className="subtitle">Your Tasks</h3>
                    <div style={{display:"flex",justifyContent:"center"}}><>Progress</><ProgressBar className="boxRadius" variant="success" now={50} style={{width:"125px",marginTop:"5px"}}/></div>
                </div>
            </div>

            <div >
                <ListGroup variant="flush" >
                    {tasklist}
                </ListGroup>
                <Button size="sm" className="basicButton" >Add new</Button>
            </div>
           </div>
           <div className="margin padding">
            <h2>heloo</h2>
            <TeamTasks />
           </div>
           </div>
        </div>
    );
};

export default Tasks;