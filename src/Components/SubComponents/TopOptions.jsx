import { Button, ButtonGroup, ToggleButton } from "react-bootstrap"


const TopOptions = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between" }}>
      <ButtonGroup>
        <ToggleButton>
          Row
        </ToggleButton>
        <ToggleButton>
          Column
        </ToggleButton>
      </ButtonGroup>
      
      <Button>Customize</Button>
    </div>
  )
}

export default TopOptions