import React, { Component } from 'react';
import AdminFeedbacksTable from './componentsJSX/AdminFeedbacksTable';
import AdminNav from './componentsJSX/AdminNav';
import AdminRoomsTable from './componentsJSX/AdminRoomsTable';
import AdminToursTable from './componentsJSX/AdminToursTable';
import AdminUsersTable from './componentsJSX/AdminUsersTable';
import AdminUsersToRegTable from './componentsJSX/AdminUsersToRegTable';
import CreateTourForm from './componentsJSX/CreateTourForm';

async function postCreateTour(tour){
    try {
      const response = await fetch('http://localhost:5000/tours', {
        method: 'POST', 
        body: JSON.stringify({id:tour.id,name:tour.name,link:tour.link,
          tourInfo:tour.tourInfo,price:tour.price,photo:tour.photo}), 
        headers: {'Content-Type': 'application/json'}
      });
      const json = await response.json();
      console.log(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
}

async function postUsers(user){
  try {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST', 
      body: JSON.stringify({id:user.id,email:user.email,name:user.name,surname:user.surname,old:user.old,password:user.password,
        status:user.status,familyStatus:user.familyStatus,interests:user.interests,purpose:user.purpose,links:user.links,
        aboutSelf:user.aboutSelf,feedbacks:user.feedbacks,rating:user.rating}), 
      headers: {'Content-Type': 'application/json'}
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

async function deleteFetch(id,table){
  try {
    const response = await fetch('http://localhost:5000/'+table+'/'+id, {
      method: 'DELETE'
    });
    const json = await response.json();
    console.log(JSON.stringify(json));
  } catch (error) {
    console.error(error);
  }
}

class Admin extends Component{
  constructor(props){
    super(props);
    // this.updateUsersToReg = this.updateUsersToReg.bind(this)
    // this.updateUsers = this.updateUsers.bind(this)
    // this.updateRooms = this.updateRooms.bind(this)
    // this.updateTours = this.updateTours.bind(this)
    // this.updateFeedbacks = this.updateFeedbacks.bind(this)
    this.state={table:'Users',rooms:[],users:[],userstoreg:[]};
  }

  componentDidMount(){
    fetch('http://localhost:5000/rooms').then(res=>res.json()).then(data=>this.setState({rooms: data}));
    fetch('http://localhost:5000/users').then(res=>res.json()).then(data=>this.setState({users: data}));
    fetch('http://localhost:5000/userstoreg').then(res=>res.json()).then(data=>this.setState({userstoreg: data}));
    fetch('http://localhost:5000/tours').then(res=>res.json()).then(data=>this.setState({tours: data}));
    fetch('http://localhost:5000/feedbacks').then(res=>res.json()).then(data=>this.setState({feedbacks: data}));
  }

  updateUsersToReg(){
    fetch('http://localhost:5000/userstoreg').then(res=>res.json()).then(data=>this.setState({userstoreg: data}));
  }

  updateUsers(){
    fetch('http://localhost:5000/users').then(res=>res.json()).then(data=>this.setState({users: data}));
  }

  updateRooms(){
    fetch('http://localhost:5000/rooms').then(res=>res.json()).then(data=>this.setState({rooms: data}));
  }

  updateTours(){
    fetch('http://localhost:5000/tours').then(res=>res.json()).then(data=>this.setState({tours: data}));
  }

  updateFeedbacks(){
    fetch('http://localhost:5000/feedbacks').then(res=>res.json()).then(data=>this.setState({feedbacks: data}));
  }

  tableSwitch(name){
    switch(name){
        case 'Users':
            return <AdminUsersTable updateUsers={()=>this.updateUsers()} deleteFetch={deleteFetch} users={this.state.users} />;
        case 'Userstoreg':
            return <AdminUsersToRegTable updateUsers={()=>this.updateUsers()} updateUsersToReg={()=>this.updateUsersToReg()} deleteFetch={deleteFetch} postUsers={postUsers} userstoreg={this.state.userstoreg} />;
        case 'Rooms':
            return <AdminRoomsTable updateRooms={()=>this.updateRooms()} deleteFetch={deleteFetch} rooms={this.state.rooms} />;
        case 'Tours':
            return <AdminToursTable updateTours={()=>this.updateTours()} deleteFetch={deleteFetch} tours={this.state.tours} />;
        case 'Feedbacks':
            return <AdminFeedbacksTable updateFeedbacks={()=>this.updateFeedbacks()} deleteFetch={deleteFetch} feedbacks={this.state.feedbacks} />;
        default:
            return 'вы бездарь, не может тут вообще быть дефолт';
      }
  }

  render(){
    return ( 
      <div className="admin">
          <AdminNav />
          <CreateTourForm updateTours={()=>this.updateTours()} createTourClick={()=>postCreateTour({
              id:(new Date()).getTime(),
              name:document.getElementById('createTourName').value,
              link:document.getElementById('createTourLink').value,
              tourInfo:document.getElementById('createTourInfo').value,
              price:document.getElementById('createTourPrice').value,
              photo:document.getElementById('createTourPhotos').value
          })} />
          <div className="admin-main">
              <div className="admin-main-article">
                <div className="admin-main-article-table">
                    <div className="dropdown">
                        <button className="dropbtn" id="adminTable">{this.state.table}</button>
                        <div className="dropdown-content">
                            <div onClick={()=>this.setState({table:'Users'})}>Users</div>
                            <div onClick={()=>this.setState({table:'Userstoreg'})}>Userstoreg</div>
                            <div onClick={()=>this.setState({table:'Rooms'})}>Rooms</div>
                            <div onClick={()=>this.setState({table:'Tours'})}>Tours</div>
                            <div onClick={()=>this.setState({table:'Feedbacks'})}>Feedbacks</div>
                        </div>
                    </div>
                </div>
                <div className="admin-main-article-table">
                    <div className="dropdown">
                    <button className="dropbtn">Sort</button>
                        <div className="dropdown-content">
                            <div>Sort1</div>
                            <div>Sort2</div>
                            <div>Sort3</div>
                            <div>Sort4</div>
                            <div>Sort5</div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="admin-main-table">
                  {this.tableSwitch(this.state.table)}
              </div>
          </div>
      </div>
    );
  }
}

export default Admin;
