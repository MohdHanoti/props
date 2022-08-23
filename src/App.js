import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import data from "./component/data.json";
import SelectedBeast from "./component/SelectedBeast";



class App extends React.Component {
  render(){
    return( 
    <div>
      <Header/>
      <Main Data={data}/>
      <Footer/>
      <SelectedBeast/>

    </div>
    )
  }
}
export default App;

