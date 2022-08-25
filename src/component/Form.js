import React from "react";
import Form  from "react-bootstrap/Form";

class userForm extends React.Component {

  

  
  render() {
    return (
      <>
      
      <label for='option'>Filter</label>
        <Form.Select aria-label="Default select example" id="option" onChange={this.props.filterHandler}>
            
          <option value="0">Select number of hornes</option>
          <option value="1" >One</option>
          <option value="2" >Two</option>
          <option value="3">More than two</option>
        </Form.Select>
      </>
    );
  }
}
export default userForm;
