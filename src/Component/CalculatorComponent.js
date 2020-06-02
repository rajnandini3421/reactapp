import React from 'react'

class CalculatorComponent extends React.Component{
state={
    a:0,
    b:0,
    sum:0
    ,Name:"Rajnandini"
}

addAction =(event)=> {
    this.setState({ sum: parseInt(this.state.a) + parseInt(this.state.b) })
   }
    render(){
        let a;
        if(1==1){
           a= <div>Yes code is working</div>
        }
        else
        a=<div>Code is not working</div>
        return(
        <div>
            <div>Welcome in Calculator Component</div>
            <div>{this.state.a}</div>
            <input type="Number"          
            onChange={e=>this.setState({a:e.target.value})}/> 
            <input type="Number"
            onChange={e=>this.setState({b:e.target.value})}/>             
            <input type="button" onClick={this.addAction} value="Add1"/>
            <div>Sum is: {this.state.sum}
            <div>Task is assigned to :{this.props.DeveloperName}</div>           
            {a}
        </div>

        {this.props.DeveloperName=="Rajnandini" ?<div>Yes you are best</div>:<div>Sorry please try next year</div>}
          </div>
        );
    }
}

export default CalculatorComponent;