import React, { useEffect,useState } from 'react'
import  '../Login.css'
import axios from 'axios'
import GetList from './getList'
import  ModalExample from './Modal'
import Route from 'react-router-dom/Route'
import { useHistory,Router } from "react-router-dom";

function LoingForm (){
  const history = useHistory();

  const [username, setusername] = useState('');
  
  const [password, setpassword] = useState('');
  
   const [mydata, setData] = useState([]);

  // state={username:'',
  // password:'',
  // mydata:[]}

  
  // constructor(props){
  //   super(props);
  //   //this.handlechange=this.handlechange.bind(this);
  //   //this.onFormSubmit=this.onFormSubmit.bind(this);

  // }

    useEffect(()=>{
   
    // const apidata=  axios.get(`http://dummy.restapiexample.com/api/v1/employees`);
    // setData(apidata.data.data);
    // console.log(apidata.data.data);

    //this.setState({mydata:apidata.data.data});
    });
  const handlechange =event=>{
    //this.setState({username:event.target.value});
    setusername(event.target.value);
  }
  const handlepassword=event=>{
    setpassword(event.target.value);
  }
  const onFormSubmit=()=>{
     // console.log(this.state.mydata)
      var flag=0

        // this.state.mydata.map(data=>
        // {if(this.state.username===data.employee_name && this.state.password===data.id)
        //   {
        //     flag=1;
        //   }
        // })
      // mydata.map(data=>
      //   {if(username===data.employee_name && password===data.id)
      //     {
      //       flag=1;
      //     }
      //   })
      if(username=='raj' && password=='123')
      {flag=1}
      console.log(flag);
      if(flag===1){
        // return(
        // <>
        // <Link to="/login">
        // <div class="ui fluid large teal submit button">Home</div>
        // </Link>
        // </>);
      //   return(
      // // alert("Successfully login !");
      // <GetList/>
      //   )
      //alert("Successfully login !");
      history.push("/home");

      }
      else if(flag===0){
        alert("login failed please check credentials and try again")

      }
 
  }
// render(){

    return(
      // <Router>
<div className="Container">
  {/* <Route exact path="/login" render={()=>{return <div>welcome in Router</div>}}/> */}
<div class="image-login-page">
  
{/* //ui right align grid */}
<div class="ui  align grid ">
{/* <div class="eight wide column">
    <div >
    <div class="ui small image">
    <img src="/images/wireframe/image.png">
    </img>
     </div>
        <div>{this.state.mydata.length}</div>

    </div>
    </div> */}
    <div class="parent-div">
  <div class="six wide column">
       <h2 class="ui teal image header">
      {/* <img src="assets/images/logo.png" class="image"/> */}

      <div  >
      {/* <GetList/> */}
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form" onFormSubmit>
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address" value={username} onChange={handlechange}/>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password" value={password} onChange={handlepassword}/>
          </div>
        </div>
        <div class="ui fluid large teal submit button" onClick={onFormSubmit}>Login</div>
      </div>
      <div class="ui error message"></div>

    </form>

    <div class="background-transparet">
      New to us? <a href="#">Sign Up</a>
    </div>
  {/* <ModalExample/> */}
    
    </div>
  </div>
</div>

</div>
</div>
// {/* </Router> */}
    );
}
//}

export default LoingForm;
 