import TopOptions from "./SubComponents/TopOptions";
import RowCellHeader from "./SubComponents/RowCellHeader"
import RowCells from "./SubComponents/RowCells";
const Home = () => {

    return (
        <div>
          <TopOptions/>
          <RowCellHeader title={"CashFlow"}
            images={["smilingWoman.jpg","smilingWoman.jpg","smilingWoman.jpg"]}
            />
            <RowCells/>
           helloo dashello from home! 
        </div>
    );
};

export default Home;