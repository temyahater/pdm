import React, { Component } from 'react';

class CreateTourForm extends Component{
    render(){
        return (
            <div className="modal fade" id="createTourFormModal" tabIndex="-1" role="dialog" aria-labelledby="createTourFormModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content create-room-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createTourFormModalLabel">Create tour</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <span>Name:</span>
                            <input id="createTourName" />
                        </div>
                        <div className="modal-body">
                            <span>Link:</span>
                            <input id="createTourLink"  />
                        </div>
                        <div className="modal-body">
                            <span>Tour info:</span>
                            <input id="createTourInfo"  />
                        </div>
                        <div className="modal-body">
                            <span>Price:</span>
                            <input id="createTourPrice"  />
                        </div>
                        <div className="modal-body">
                            <span>Photos:</span>
                            <input id="createTourPhotos"  />
                        </div>
                        <div className="modal-footer create-room-modal-buttons">
                            <button type="button" data-dismiss="modal">Close</button>
                            <button type="button" onClick={()=>{this.props.createTourClick()&&this.props.updateTours()}} data-dismiss="modal">Create</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default CreateTourForm;
