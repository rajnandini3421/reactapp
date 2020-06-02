import React from 'react'
import  '../Login.css'
import axios from 'axios'
import { useHistory,Router } from "react-router-dom";

function GetList() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
    <button type="button" onClick={handleClick}>
      Go home
    </button>
    <div>Hello welcome in GetList</div>
    </div>
  );
// class GetList extends React.Component{
//     state={  mydata:[],resultarray:[]}
//   // async componentDidMount(){
   
//   //   const apidata= await axios.get(`http://18.219.103.70:8000/user/login`);
//   //   this.setState({mydata:apidata.data.data});
//   //   }
//     render(){
// return(
//       //  <ul>{this.state.mydata.map(data=><li>{data.employee_name}</li>)}</ul>      
//       <div>Welcome in Form </div>
//       );
//     }
// }
// // //http://dummy.restapiexample.com/api/v1/employees
  }
export default GetList;