import React, { Component } from 'react';

class RoomsModal extends Component{
    render(){
        return (
            <div className="modal fade" id="roomsModal" tabIndex="-1" role="dialog" aria-labelledby="roomsModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rooms-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="roomsModalLabel">Rooms</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {
                            this.props.rooms.map(e=>
                                <div key={e._id} className="modal-body">
                                    <span>{e.name}</span>
                                    <button onClick={()=>{document.cookie="room="+e._id; return document.location.href='http://localhost:3000/room'}}>Join</button>
                                </div>
                                )
                        }
                        <div className="modal-footer rooms-modal-buttons">
                            <button type="button" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default RoomsModal;
