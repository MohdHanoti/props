import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <Col>
        <Card class="card" style={{ width: "18rem" }}>
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

            <p>Num Of Votes :{this.state.numOfVotes}</p>
          </Card.Text>
          <Button variant="primary" class="btn btn-primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      </Col>
      
      
    );
    
  }
}

export default HornedBeast;
