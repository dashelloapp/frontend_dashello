import ProgressBar from 'react-bootstrap/ProgressBar';


const ProgBar = (props) => {
    function prin(){
        console.log(props.percent)
        console.log("tests")
    }
    return (
        <div>

           <div>{props.percent}%</div>
            <ProgressBar now={props.percent} style={{width:"100px"}} />
        </div>
    );
}

export default ProgBar;