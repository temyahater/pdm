import React, { Component } from 'react';
import Nav from './componentsJSX/Nav';
import RoomInfoModal from './componentsJSX/RoomInfoModal';
import RoomsModal from './componentsJSX/RoomsModal';

class Room extends Component{
  constructor(props){
    super(props);
    this.state={rooms:[],users:[],room:{}, account:{}};
  }

  async updateRoomServer(room,updateInfo,value){
    try {
      const response = await fetch('http://localhost:5000/rooms/'+room._id, {
        method: 'PUT', 
        body: JSON.stringify({[updateInfo]:value}), 
        headers: {'Content-Type': 'application/json'}
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/rooms/'+[...document.cookie.split(';').find(e=>e.includes('room'))].filter(e=>+e==e).join('')).then(res=>res.json()).then(data=>this.setState({room: data}));
    fetch('http://localhost:5000/rooms').then(res=>res.json()).then(data=>this.setState({rooms: data}));
    fetch('http://localhost:5000/users/'+[...document.cookie.split(';').find(e=>e.includes('account'))].filter(e=>+e==e).join('')).then(res=>res.json()).then(el=>this.setState({account: el}));
    fetch('http://localhost:5000/users/').then(res=>res.json()).then(el=>this.setState({users: el.filter(e=>this.state.room.users.includes(e._id))}));
   
  }

  render(){
    return ( 
      <div className="room" onClick={()=>console.log(this.state)}>
        <RoomsModal rooms={this.state.rooms.filter(e=>e.users.includes(this.state.account._id))} />
        <RoomInfoModal room={this.state.room} users={this.state.users} />
        <Nav account={this.state.account} />
        <div className="room-main">
          <div className="room-main-articles">
            <div className="room-main-article-info">
              <button data-toggle="modal" data-target="#roomInfoModal">{this.state.room.name}</button>
            </div>
            <div className="room-main-article-leave">
              <button onClick={()=>{if(window.confirm('Are u sure?')){
                this.updateRoomServer(this.state.room,'users',this.state.room.users.filter(e=>e!==this.state.account._id));
                document.location.href='http://localhost:3000/home';
              }}}>Leave</button>
            </div>
          </div>
          <div className="room-main-chat">
            <div className="room-main-messages">

            </div>
          </div>
        </div>
        <div className="room-footer"></div>
      </div>
    );
  }
}

export default Room;
