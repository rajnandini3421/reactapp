import React from 'react';
import unsplash from '../src/API/unsplash';

import './App.css';
//import CommentDetail from './CommentDetail';
import CardComponent from './CardComponent';
import Searchbar from './Component/Searchbar';
import CalculatorComponent from './Component/CalculatorComponent'
import Loginform from './Component/LoginForm';
import ReduxDemo from './Component/ReduxDemo'
import Login from './Component/Login'
import GetList from './Component/getList'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'

class App extends React.Component {
state={images:[],Name:"Rajnandini"}

  onSearchSubmit= async (term)=>{
     const response=await unsplash.get('/search/photos',{
        params:{query:term}  ,    

  });
  this.setState({images:response.data.results})
};
componentDidMount(){
  console.log("hello elcome in component");
};
  render(){
    

    return (
      <div className="ui container comments">   

      <Router>
    <div>
        <Route exact path="/" component={Loginform}/>
        <Route exact path="/home" component={GetList}/>
        {/* <Route path="/techMap" component={TechMap}/> */}
        {/* <GetList/> */}

    </div>
    </Router>
       {/* <CardComponent/> 
         
       <Searchbar onSubmit={this.onSearchSubmit}/>
       
      <div>{this.state.images.length} images</div>
      <CalculatorComponent DeveloperName={this.state.Name}/> */}
      {/* <Loginform /> */}
      {/* <ReduxDemo/> */}
      {/* <Login/> */}

      </div>                              
    );   
  }
     
}

export default App;
