import React from 'react';
import HornedBeast from './HornedBeast';
import U from './assets/U.jpg';
class Main extends React.Component{
    render(){
    return(
        <div>
         <HornedBeast title='Rhino Family' imageUrl={U} description='Parent rhino with two babies'/>
         <HornedBeast title='UniWhal' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='A unicorn and a narwhal nuzzling their horns'/>
         
        </div>
        )
    }
}

export default Main;