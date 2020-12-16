import React, { Component } from 'react';

class AdminFeedbacksTable extends Component{

  render(){
    return ( 
      <div className="admin-feedbacks admin-scroll">
          <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">User</th>
                    <th scope="col">Feedback</th>
                    <th scope="col">Like</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        this.props.feedbacks.map(e=>
                        <tr key={e._id} className="admin-main-table-button">
                        <th scope="row">{e._id}</th>
                        <td>{e.user}</td>
                        <td>{e.feedback}</td>
                        <td>{e.like}</td>
                        <td className="admin-main-table-button-td"><button onClick={()=>{
                          if(window.confirm('Are u sure?')){this.props.deleteFetch(e._id,'feedbacks');this.props.updateFeedbacks()}
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

export default AdminFeedbacksTable;
