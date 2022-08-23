import React from "react";
import Row from "react-bootstrap/Row";
// import HornedBeast from "./HornedBeast";

 

// let beastData=this.props.Data.map((element) => (
//   <HornedBeast
//     key={element._id}
//     imageUrl={element.image_url}
//     title={element.title}
//     description={element.description}
//   />
// ));

class Main extends React.Component {
  
  render() {
    console.log(this.props.Data);
    return (
      <Row xs={1} md={4} className="g-4">
        {/* {beastData} */}
      </Row>
    );
  }
}

export default Main;
