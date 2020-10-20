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
                        <div className="modal-body">
                            <span>Tour:</span>
                            <input id="createRoomTour"  />
                        </div>
                        <div className="modal-body">
                            <span>Max count users:</span>
                            <input id="createRoomMaxCount"  />
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
                            <button type="button" onClick={this.props.createFormClick} >Create</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default CreateRoomForm;
