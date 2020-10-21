import React, { Component } from 'react';

class AdminRoomsTable extends Component{

  render(){
    return ( 
      <div className="admin-rooms" >
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
                        this.props.rooms.map(e=>
                        <tr key={e._id} className="admin-main-table-button">
                        <th scope="row">{e._id}</th>
                        <td>{e.name}</td>
                        <td>{e.tour}</td>
                        <td>{e.price}</td>
                        <td>{e.time}</td>
                        <td>{e.status}</td>
                        <td>{e.users.length}/{e.maxCount}</td>
                        <td className="admin-main-table-button-td"><button onClick={()=>{
                          if(window.confirm('Are u sure?')){this.props.deleteFetch(e._id,'rooms');this.props.updateRooms()}
                        }}>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
              </table>
      </div>
    );
  }
}

export default AdminRoomsTable;
