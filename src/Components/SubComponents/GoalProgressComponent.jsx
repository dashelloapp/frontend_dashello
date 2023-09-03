import { Button, ButtonGroup, ProgressBar } from "react-bootstrap"

const GoalProgressComponent = () => {
  let percent = 50
  let dueDate = "Sept 15"
  return (
    <div style={{maxWidth:"400px"}}>

     <div >
     <div style={{display:"flex",justifyContent:"space-between"}}>

        <div style={{display:"flex",}}>
        <Button style={{}}>X</Button>

          <p>Increase Sales by {percent}</p>
        </div>
        <Button>Edit</Button>
      </div>


      <div style={{margin:"30px"}}>
      <hr/>

        <div>Progress - {percent}%</div>
          <div style={{display:"flex"}}>
            <ProgressBar now={percent} style={{width:"350px"}} />
            <p>Due: {dueDate}</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default GoalProgressComponent