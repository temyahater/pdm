import React, { Component } from 'react';

class AdminToursTable extends Component{

  render(){
    return ( 
      <div className="admin-tours admin-scroll">
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
                        <td className="table-photos"><img src={e.photo} alt="tour"/></td>
                        <td className="admin-main-table-button-td" onClick={()=>{
                          if(window.confirm('Are u sure?')){this.props.deleteFetch(e._id,'tours');setTimeout(()=>this.props.updateTours(),100) }
                        }}><button>Delete</button></td>
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
