import React, { Component } from 'react';

class RoomInfoModal extends Component{
    
    render(){
        return (
            <div className="modal fade" id="roomInfoModal" tabIndex="-1" role="dialog" aria-labelledby="roomInfoModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content room-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="roomInfoModalLabel">{this.props.room.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>Tour: {this.props.room.tour}</div>
                        </div>
                        <div className="modal-body">
                            <div>Description: {this.props.room.description}</div>
                        </div>
                        <div className="modal-body">
                            <div>Status: {this.props.room.status}</div>
                        </div>
                        <div className="modal-body">
                            <div>Time: {this.props.room.time}</div>
                        </div>
                        <div className="modal-body">
                            <div>Price: {this.props.room.price}</div>
                        </div>
                        <div className="modal-body">
                            <div>Users: {(''+this.props.room.users).split(',').length}/{this.props.room.maxCount}</div>
                        </div>
                        <div className="modal-body">
                            {
                                this.props.users.map(e=>
                                    <div key={e._id}>{e.name} {e.surname}</div>
                                )
                            }
                        </div>
                        <div className="modal-footer room-modal-buttons">
                            <button type="button" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default RoomInfoModal;
