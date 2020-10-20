import React, { Component } from 'react';

class AdminToursTable extends Component{

  render(){
    return ( 
      <div className="admin-tours">
          <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                    <th scope="col">Tour info</th>
                    <th scope="col">Price</th>
                    <th scope="col">Photos</th>
                    <th scope="col"><button className="pretty-button" data-toggle="modal" data-target="#createTourFormModal">Add</button></th>
                  </tr>
                </thead>
                <tbody>
                    {
                        this.props.tours.map(e=>
                        <tr key={e._id} className="admin-main-table-button">
                        <th scope="row">{e._id}</th>
                        <td>{e.name}</td>
                        <td>{e.link}</td>
                        <td>{e.tourInfo}</td>
                        <td>{e.price}</td>
                        <td>{e.photo}</td>
                        <td className="admin-main-table-button-td"><button>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
              </table>
      </div>
    );
  }
}

export default AdminToursTable;
