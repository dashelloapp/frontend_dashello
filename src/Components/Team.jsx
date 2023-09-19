import { CardGroup } from "react-bootstrap";
import RowCellHeader from "./SubComponents/RowCellHeader"
import TeamTasks from "./SubComponents/TeamTasks"

const Team = () => {

    return (
        <div>
            <RowCellHeader title={"CashFlow"}
                images={["smilingWoman.jpg","smilingWoman.jpg","smilingWoman.jpg"]}
            />

            <CardGroup>
                <TeamTasks /> 
                <TeamTasks /> 
                <TeamTasks /> 
                <TeamTasks /> 
            </CardGroup>
        </div>
    );
};

export default Team;