import React from 'react'
//import faker from 'faker'
class CardComponent extends React.Component{
render(){
  return(
<div className="ui cards">
  <div className="card">
    <div className="content">
      {/* <img className="right floated mini ui image" src={faker.image.avatar()}/> */}
      <div className="header">
        Elliot Fu
      </div>
      <div className="meta">
        Friends of Veronika
      </div>
      <div className="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    {/* <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div> */}
  </div>
  {/* <div className="card">
    <div className="content">
      <img className="right floated mini ui image" src={faker.image.avatar()}/>
      <div className="header">
        Jenny Hess
      </div>
      <div className="meta">
        New Member
      </div>
      <div className="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div> */}
</div>

  );
}
}

export default CardComponent;