import TopOptions from "./SubComponents/TopOptions";
import RowCellHeader from "./SubComponents/RowCellHeader"
import GoalProgressComponent from "./SubComponents/GoalProgressComponent";
const Goals = () => {

    return (
        <div>
           <RowCellHeader title={"Company Goals"}
            />
            <GoalProgressComponent/>
        </div>
    );
};

export default Goals;