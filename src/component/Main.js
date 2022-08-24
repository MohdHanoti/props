import React from "react";
import Row from "react-bootstrap/Row";
import HornedBeast from "./HornedBeast";

 



class Main extends React.Component {
  
  render() {
    console.log(this.props.Data);
    return (
      <div>
        <Row xs={1} md={4} className="g-4">
      {this.props.Data.map((element,idx) => (
       
        <HornedBeast
          key={idx}
          index={idx}
          horns={element.horns}
          imageUrl={element.image_url}
          title={element.title}
          description={element.description}
          myFunction={this.props.myFunction}
          One={this.props.One}
          Two={this.props.Two}
        />
        
        
      ))}
       
        
      </Row> 
      </div>
    );
  }
}

export default Main;
