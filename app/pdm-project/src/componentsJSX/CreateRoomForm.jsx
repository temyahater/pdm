import React, { Component } from 'react';

class CreateRoomForm extends Component{
    render(){
        return (
            <div className="modal fade" id="createRoomFormModal" tabIndex="-1" role="dialog" aria-labelledby="createRoomFormModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content create-room-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createRoomFormModalLabel">Create your room!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <span>Name:</span>
                            <input id="createRoomName" />
                        </div>
                        {/* <div className="modal-body">
                            <span>Tour:</span>
                            <div className="dropdown">
                            <button className="dropbtn" id="createRoomTour">Tour</button>
                                <div className="dropdown-content">
                                    {
                                        this.props.tours.map(e=>
                                        <div key={e._id } onClick={()=>document.getElementById('createRoomTour').innerText=e.name}>{e.name}</div>)
                                    }
                                    
                                </div>
                            </div>
                        </div> */}
                        <div className="modal-body choose-tour">
                            <span>Tour:</span>
                            <button id="createRoomTour" data-toggle="modal" data-target="#tourInfoModal">Choose tour</button>
                        </div>
                        <div className="modal-body">
                            <span>Max count users:</span>
                            <div className="dropdown">
                            <button className="dropbtn" id="createRoomMaxCount">Count</button>
                                <div className="dropdown-content">
                                    <div onClick={()=>document.getElementById('createRoomMaxCount').innerText='2'}>2</div>
                                    <div onClick={()=>document.getElementById('createRoomMaxCount').innerText='4'}>4</div>
                                    <div onClick={()=>document.getElementById('createRoomMaxCount').innerText='6'}>6</div>
                                    <div onClick={()=>document.getElementById('createRoomMaxCount').innerText='8'}>8</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <span>Description:</span>
                            <input id="createRoomDescription"  />
                        </div>
                        <div className="modal-body">
                            <span>Status:</span>
                            <input id="createRoomStatus"  />
                        </div>
                        <div className="modal-body">
                            <span>Time</span>
                            <input id="createRoomTime" />
                        </div>
                        <div className="modal-footer create-room-modal-buttons">
                            <button type="button" data-dismiss="modal">Close</button>
                            <button type="button" onClick={this.props.createFormClick} data-dismiss="modal">Create</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default CreateRoomForm;
