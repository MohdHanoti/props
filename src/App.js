  import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import data from "./component/data.json";
import UserModle from "./component/SelectedBeast";
import UserForm from "./component/Form";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selBeast:{},
      show:false,
      Horns:0
    }
  }
  
  myFunction=(title,horns)=>{
    const hornsBeast=data.find(beast=>beast.horns===horns);
    const selectedBeast=data.find(beast=>beast.title===title);

    this.setState({
      show:true,
      selBeast:selectedBeast,
      Horns:hornsBeast
    })
  }
    handleClose=()=>{

      this.setState({
        show:false
      })
    }
    opsionOne=()=>{
      
      this.this.setState({
        Horns:1
      })
      
    }
    opsionTow=()=>{
      this.this.setState({
        Horns:2
      })
    }

 
  render(){
    return( 
    <div>
      <h1>Welcome to my first React<br></br></h1>
      <UserForm hornsFunction={this.hornsFunction} Horns={this.state.Horns} One={this.opsionOne} Two={this.opsionTow}/>
      <Header/>
      <Main Data={data} myFunction={this.myFunction} One={this.opsionOne} Two={this.opsionTow}/>
      <Footer/>
      <UserModle handleClose={this.handleClose} showModle={this.state.show} selBeast={this.state.selBeast}/>
      
    </div>
    )
  }
}
export default App;

