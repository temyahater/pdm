import React, { Component } from 'react';
import CreateRoomForm from './componentsJSX/CreateRoomForm';
import Nav from './componentsJSX/Nav';
import RoomsModal from './componentsJSX/RoomsModal';

async function postCreateRoom(room){
  try {
    const response = await fetch('http://localhost:5000/rooms', {
      method: 'POST', 
      body: JSON.stringify({id:room.id,name:room.name,usersinvite:room.usersinvite,users:room.users,
        tour:room.tour,maxCount:room.maxCount,description:room.description,status:room.status,
        time:room.time,messages:room.messages,price:room.price}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

class Home extends Component{
  constructor(props){
    super(props);
    this.state={rooms:[], account:{}};
  }

  componentDidMount(){
    fetch('http://localhost:5000/rooms').then(res=>res.json()).then(data=>this.setState({rooms: data}));
    fetch('http://localhost:5000/users/'+document.cookie.split(';').find(e=>e.includes('account')).slice(8)).then(res=>res.json()).then(el=>this.setState({account: el}));
  }

  render(){
    return ( 
      <div className="home" onClick={()=>console.log(document.cookie.split(';').find(e=>e.includes('account')).slice(8))}>
        <CreateRoomForm createFormClick={()=>postCreateRoom({
          id:(''+(new Date()).getTime()).slice(-5),
          name:document.getElementById('createRoomName').value,
          usersinvite:[],
          users:[this.state.account._id],
          tour:document.getElementById('createRoomTour').value,
          maxCount:document.getElementById('createRoomMaxCount').value,
          description:document.getElementById('createRoomDescription').value,
          status:document.getElementById('createRoomStatus').value,
          time:document.getElementById('createRoomTime').value,
          messages:[],
          price:"0"
        })} />
        <RoomsModal rooms={this.state.rooms.filter(e=>e.users.includes(this.state.account._id))} />
        <Nav account={this.state.account} />
        <div className="home-main">
            <div className="home-main-article">
              <div className="home-main-article-sort">
                <div className="dropdown">
                  <button className="dropbtn">Sort</button>
                  <div className="dropdown-content">
                    <div>Sort1</div>
                    <div>Sort2</div>
                    <div>Sort3</div>
                  </div>
                </div>
              </div>
              <div className="home-main-article-create">
                <button data-toggle="modal" data-target="#createRoomFormModal">Create room</button>
              </div>
              <div className="home-main-article-search">
                <button>Search</button>
                <input />
              </div>
            </div>
            <div className="home-main-rooms">
              <div className="home-main-rooms-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Tour</th>
                    <th scope="col">Price</th>
                    <th scope="col">Time</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.rooms.map(e=>
                    <tr key={e._id} className="home-main-rooms-body-button">
                      <th scope="row">{e._id}</th>
                    <td>{e.name}</td>
                    <td>{e.tour}</td>
                    <td>{e.price}</td>
                    <td>{e.time}</td>
                    <td>{e.status}</td>
                    <td>{e.users.length}/{e.maxCount}</td>
                    <td className="home-main-rooms-body-button-td"><button>Join</button></td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
              </div>
            </div>
        </div>
        <div className="home-footer">
        </div>
      </div>
    );
  }
}

export default Home;
