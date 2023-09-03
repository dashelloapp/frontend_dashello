import TopOptions from "./SubComponents/TopOptions";
import RowCellHeader from "./SubComponents/RowCellHeader"
import RowCells from "./SubComponents/RowCells";
import { Button } from "react-bootstrap";

import { useState } from "react";
import BasicModal from "./Modals/basicModal";
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

            <Button onClick={()=>modalTest()}>Open Modal</Button>
            <BasicModal
              show={modalShow}
              onHide={() => setModalShow(false)}/>
        </div>
    );
};

export default Home;