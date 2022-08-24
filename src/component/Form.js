import React from "react";
import Form  from "react-bootstrap/Form";

class userForm extends React.Component {
  render() {
    return (
      <>
      
      <label for='option'>Filter</label>
        <Form.Select aria-label="Default select example" id="option">
            
          <option>Select number of hornes</option>
          <option value="1"  onClick={()=>{this.props.One(this.props.horns)}}>One</option>
          <option value="2"  onClick={()=>{this.props.Two(this.props.horns)}}>Two</option>
          <option value="3">More than two</option>
        </Form.Select>
      </>
    );
  }
}
export default userForm;
