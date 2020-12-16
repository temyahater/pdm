import React, { Component } from 'react';

class CreateTourForm extends Component{
    render(){
        return (
            <div className="modal fade" id="createTourFormModal" tabIndex="-1" role="dialog" aria-labelledby="createTourFormModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content create-room-modal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createTourFormModalLabel">Create tour</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{
                                document.getElementById('tourPhotoPreview').src='/images/add-photo.png';
                                document.getElementById('createTourPhotos').value='';
                                document.getElementById('createTourName').value='';
                                document.getElementById('createTourLink').value='';
                                document.getElementById('createTourInfo').value='';
                                document.getElementById('createTourPrice').value='';
                            }}>
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
                            <input id="createTourPhotos" type="file" onChange={()=>
                                document.getElementById('tourPhotoPreview').src=URL.createObjectURL(document.getElementById('createTourPhotos').files[0])} />
                        </div>
                        <div className="modal-body tour-photo-preview">
                            <img id="tourPhotoPreview" src="/images/add-photo.png" alt="tour preview" />
                        </div>
                        <div className="modal-footer create-room-modal-buttons">
                            <button type="button" data-dismiss="modal" onClick={()=>{
                                document.getElementById('tourPhotoPreview').src='/images/add-photo.png';
                                document.getElementById('createTourPhotos').value='';
                                document.getElementById('createTourName').value='';
                                document.getElementById('createTourLink').value='';
                                document.getElementById('createTourInfo').value='';
                                document.getElementById('createTourPrice').value='';
                            }}>Close</button>
                            <button type="button" onClick={()=>{
                                if(document.getElementById('createTourName').value===''||
                                   document.getElementById('createTourLink').value===''||
                                   document.getElementById('createTourInfo').value===''||
                                   document.getElementById('createTourPrice').value===''||
                                   document.getElementById('createTourPhotos').value==='') alert('nope');
                                else{
                                    this.props.createTourClick();
                                    setTimeout(()=>this.props.updateTours(),100);
                                }
                                document.getElementById('tourPhotoPreview').src='/images/add-photo.png';
                                document.getElementById('createTourPhotos').value='';
                                document.getElementById('createTourName').value='';
                                document.getElementById('createTourLink').value='';
                                document.getElementById('createTourInfo').value='';
                                document.getElementById('createTourPrice').value='';
                                }} data-dismiss="modal" >Create</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default CreateTourForm;
