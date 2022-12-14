import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfVotes: 0,
    };
  }

  increamtNum = () => {
    this.setState({
      numOfVotes: this.state.numOfVotes + 1,
    });
  };

  render() {
    return (
      
      <div class="modal-body" >
      <Col>
        <Card class="card" style={{ width: "18rem",height:"39rem"}}>
        <Card.Img class="card-img-top"
          variant="top"
          src={this.props.imageUrl}
          alt={this.props.title}
          title={this.props.title}
          onClick={this.increamtNum}
        />
        <Card.Body>
          <Card.Title class="card-title">{this.props.title}</Card.Title>
          <Card.Text class="card-text">
            {this.props.description}
           <p>Num of horns: {this.props.horns}</p> 


            <p>Num Of Votes:{this.state.numOfVotes}</p>
          </Card.Text>
          <Button variant="primary" class="btn btn-primary" onClick={()=>{this.props.myFunction(this.props.title)}}>Select</Button>
        </Card.Body>
      </Card>
      </Col>
      </div>
      
      
    );
    
  }
}

export default HornedBeast;
