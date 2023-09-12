import { CardGroup, Card } from "react-bootstrap";


const Integrations = () => {


    let testdata = [{
        title: "Asana",
        logo: "test",
        titleLogo:"",
        infobox: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      },{
        title: "Trello",
        logo: "test",
        titleLogo:"",
        infobox: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      },{
        title: "Google Analytics",
        logo: "test",
        titleLogo:"",
        infobox: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      },{
        title: "Intuit quickbooks",
        logo: "test",
        titleLogo:"",
        infobox: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
      }]
    
      var cardlist = []
      testdata.forEach((card, index) => {
        cardlist.push(
          <Card style={{margin:"10px", height:"250px", width:"225px", textAlign:"center", borderRadius:"10px", border:"none", backgroundColor:"lightgray"}}>
          <div style={{margin:"auto"}}>
            <div>{card.title}</div>
            <div>logo</div>
            <div>${card.infobox}</div>
          </div>
        </Card>
      )});
    
      var appsList = []
      testdata.forEach((card, index) =>{
        appsList.push(
            <Card style={{margin:"20px", height:"100px", width:"100px", textAlign:"center", borderRadius:"10px", border:"none"}}>
                <div style={{margin:"auto"}}>{card.logo}</div>
            </Card>
        )
      })

    return (
        <div style={{display:"flex"}}>
           <div style={{width:"174px", backgroundColor:"lightgray", height:"100%"}}>
            {appsList}
           </div> 
           <div>
            <div >
                <h2>All Apps</h2>
                <div>add new metric box and ChatBox</div>
            </div>
            <div>
                <CardGroup>
                    {cardlist}
                </CardGroup>
            </div>
           </div>
        </div>
    );
};

export default Integrations;