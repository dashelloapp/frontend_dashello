import { Button, ButtonGroup, ProgressBar } from "react-bootstrap"

const GoalProgressComponent = () => {
  let percent = 50
  let dueDate = "Sept 15"
  return (
    <div style={{maxWidth:"400px"}}>

     <div >
     <div style={{display:"flex",justifyContent:"space-between"}}>

        <div style={{display:"flex",}}>
        <Button style={{borderRadius:"50%", height:"25px", width:"25px", padding:"auto"}}></Button>

          <div style={{justifyContent:"space-between", borderBottom:"solid 1px grey"}}><b>Increase Sales by {percent}%</b><Button>Edit</Button></div>
        </div>
      </div>


      <div >

        <div style={{fontSize:"small", paddingLeft:"5px"}}>Progress - {percent}%</div>
          <div style={{display:"flex"}}>
            <ProgressBar variant="success" now={percent} style={{width:"250px",marginTop:"auto", marginBottom:"auto"}} />
            <p style={{marginBottom:"auto", paddingLeft:"5px", fontSize:"small"}}>Due: {dueDate}</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default GoalProgressComponent