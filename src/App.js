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
      filterdHornedBeaset:data,
      userInput:0
      
    }
  }
  
  filterHandler=(e)=>{
    
    let userSel=parseInt(e.target.value);
    let filteredNum;
    switch(userSel){
      case 0: 
      filteredNum=data;
      break;
      case 1:
      case 2: 
      filteredNum=data.filter(beast=>beast.horns===userSel);
      break;
      case 3:
        filteredNum=data.filter(beast=>beast.horns>=userSel);
      break;
      default: 
      return true;
    }
    
    
   this.setState({
    userInput:userSel,
    filterdHornedBeaset:filteredNum
   }) 
  }
  filterWork=()=>{

  }
  
  myFunction=(title)=>{
    
    const selectedBeast=data.find(beast=>beast.title===title);
    this.setState({
      show:true,
      selBeast:selectedBeast
      
    })
  }
    handleClose=()=>{

      this.setState({
        show:false
      })
    }
    
 
  render(){
    return( 
    <div>
      <h1>Welcome to my first React<br></br></h1>
      <UserForm  filterHandler={this.filterHandler} />
      <Header/>
      <Main filteredData={this.state.filterdHornedBeaset} data={data} myFunction={this.myFunction} />
      <Footer/>
      <UserModle handleClose={this.handleClose} showModle={this.state.show} selBeast={this.state.selBeast}/>
      
    </div>
    )
  }
}
export default App;

