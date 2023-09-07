import TopOptions from "./SubComponents/TopOptions";
import RowCellHeader from "./SubComponents/RowCellHeader"
import RowCells from "./SubComponents/RowCells";
import { Button } from "react-bootstrap";
import { useState } from "react";
import BasicModal from "./Modals/basicModal";
import Sales from "./SubComponents/Sales";
import Marketing from "./SubComponents/Marketing";
import SalesHeader from "./SubComponents/SalesHeader";
import MarketingHeader from "./SubComponents/MarketingHeader";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);


  function modalTest(){
    setModalShow(true)
  }
    return (
        <div>
          <TopOptions/>
          <RowCellHeader title={"CashFlow"}
            images={["smilingWoman.jpg","smilingWoman.jpg","smilingWoman.jpg"]}
            />
            <RowCells/>
            
            <SalesHeader title={"Sales"} />
            <Sales/>
            
            <MarketingHeader title={"Marketing"} />
            <Marketing/>

            <Button onClick={()=>modalTest()}>Open Modal</Button>
            <BasicModal
              show={modalShow}
              onHide={() => setModalShow(false)}/>
        </div>
    );
};

export default Home;