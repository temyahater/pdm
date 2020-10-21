import React, { Component } from 'react';

class AdminUsersTable extends Component{

  render(){
    return ( 
      <div className="admin-users" onClick={()=>console.log(this.props.users)}>
          <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                    <th scope="col">Old</th>
                    <th scope="col">Status</th>
                    <th scope="col">Family status</th>
                    <th scope="col">Interests</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Links</th>
                    <th scope="col">About self</th>
                    <th scope="col">Feedbacks</th>
                    <th scope="col">Rating</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        this.props.users.map(e=>
                        <tr key={e._id} className="admin-main-table-button">
                        <th scope="row">{e._id}</th>
                        <td>{e.email}</td>
                        <td>{e.name}</td>
                        <td>{e.old}</td>
                        <td>{e.status}</td>
                        <td>{e.familyStatus}</td>
                        <td>{e.interests}</td>
                        <td>{e.purpose}</td>
                        <td>{e.links}</td>
                        <td>{e.aboutSelf}</td>
                        <td>{e.feedbacks}</td>
                        <td>{e.rating}</td>
                        <td className="admin-main-table-button-td"><button onClick={()=>{
                          if(window.confirm('Are u sure?')){this.props.deleteFetch(e._id,'users');this.props.updateUsers()}
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

export default AdminUsersTable;
