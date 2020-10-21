import React, { Component } from 'react';
import Nav from './componentsJSX/Nav';
import RoomsModal from './componentsJSX/RoomsModal';

class Room extends Component{
  constructor(props){
    super(props);
    this.state={rooms:[],room:{}, account:{}};
  }

  componentDidMount(){
    fetch('http://localhost:5000/rooms').then(res=>res.json()).then(data=>this.setState({rooms: data}));
    fetch('http://localhost:5000/rooms/'+[...document.cookie.split(';').find(e=>e.includes('room'))].filter(e=>+e)).then(res=>res.json()).then(data=>this.setState({room: data}));
    fetch('http://localhost:5000/users/'+[...document.cookie.split(';').find(e=>e.includes('account'))].filter(e=>+e)).then(res=>res.json()).then(el=>this.setState({account: el}));
  }

  render(){
    return ( 
      <div className="room" onClick={()=>console.log(this.state)}>
        <RoomsModal rooms={this.state.rooms.filter(e=>e.users.includes(this.state.account._id))} />
        <Nav account={this.state.account} />
      </div>
    );
  }
}

export default Room;
