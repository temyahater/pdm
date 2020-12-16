import React, { Component } from 'react';

class TourInfoModal extends Component{
    
    render(){
        return (
            <div className="modal fade" id="tourInfoModal" tabIndex="-1" role="dialog" aria-labelledby="tourInfoModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content tour-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="tourInfoModalLabel">Tours</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {
                            this.props.tours.map(e=>
                                <div key={e._id} className="tour">
                                    <div>
                                        <div className="modal-body">
                                            <div>Name: </div>
                                            <div>{e.name}</div>
                                        </div>
                                        <div className="modal-body">
                                            <div>Link: </div>
                                            <div>{e.link}</div>
                                        </div>
                                        <div className="modal-body">
                                            <div>Tour info: </div>
                                            <div>{e.tourInfo}</div>
                                        </div>
                                        <div className="modal-body">
                                            <div>Price: </div>
                                            <div>{e.price}</div>
                                        </div>
                                        <div className="modal-body">
                                            <button onClick={()=>document.getElementById('createRoomTour').innerText=e.name} className="pretty-button" data-dismiss="modal">Choose</button>
                                        </div>
                                    </div>
                                    <div className="tour-photo">
                                        <img src={e.photo} alt="tour" />
                                    </div>
                                </div>
                            )
                        }
                        <div className="modal-footer room-modal-buttons">
                            <button type="button" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default TourInfoModal;
