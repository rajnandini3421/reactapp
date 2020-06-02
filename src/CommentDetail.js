import React from 'react';
//import faker from 'faker';

class CommentDetail extends React.Component{
  state={Name:" ",Education:" "}
  
  componentDidMount(){
    this.setState({Name:"Nandini"})
    this.state.Education="Mech"
  }
render(){
  return(
<div class="ui segment">
  <div class="ui active dimmer">
    <div class="ui text loader">Loading</div>
  </div>
  <p></p>
</div>
  );
}




}


export default CommentDetail;