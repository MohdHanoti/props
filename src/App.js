import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import data from "./component/data.json";
import UserModle from "./component/SelectedBeast";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selBeast:{},
      show:false
    }
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
      <Header/>
      <Main Data={data} myFunction={this.myFunction}/>
      <Footer/>
      <UserModle handleClose={this.handleClose} showModle={this.state.show} selBeast={this.state.selBeast}/>

    </div>
    )
  }
}
export default App;

