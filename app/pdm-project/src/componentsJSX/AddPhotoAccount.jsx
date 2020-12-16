import React, { Component } from 'react';

class AddPhotoAccount extends Component{

    async postAccountPhoto(image){
        try {
          let data = new FormData()
          data.append('id',image.id);
          data.append('accountPhoto',image.file);
          data.append('account', JSON.stringify(image.account))
          console.log(image)
          const response = await fetch('http://localhost:5000/accountphoto', {
            method: 'POST', 
            body: data
          });
          const json = await response.json();
          console.log(JSON.stringify(json));
        } catch (error) {
          console.error(error);
        }
    }

  render(){
    return ( 
        <div className="modal fade" id="AddPhotoModal" tabIndex="-1" role="dialog" aria-labelledby="AddPhotoModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content addPhotoModal">
                    <div className="modal-body">
                    <div className="photo-modal">
                        <input id="accountPhoto" type="file" onChange={()=>{
                          if(document.getElementById('accountPhoto').files[0]){
                            document.getElementById('photo-preview').src=URL.createObjectURL(document.getElementById('accountPhoto').files[0])
                          }
                        }} />
                        <img id="photo-preview" src="/images/add-photo.png" alt="preview img" />
                    </div>
                    </div>
                    <div className="addPhotoModalButtons">
                        <button type="button" data-dismiss="modal" onClick={()=>{
                          document.getElementById('accountPhoto').value='';
                          document.getElementById('photo-preview').src='/images/add-photo.png';
                        }}>Close</button>
                        <button onClick={()=>{
                            document.getElementById('accountPhoto').files.length?this.postAccountPhoto({
                            id: (new Date()).getTime(),
                            file:document.getElementById('accountPhoto').files[0],
                            account:this.props.accountInfo
                            }):alert('nope');
                            document.getElementById('accountPhoto').value='';
                            document.getElementById('photo-preview').src='/images/add-photo.png';
                            setTimeout(()=>fetch('http://localhost:5000/users/'+this.props.accountInfo._id)
                            .then(e=>e.json()).then(e=>this.props.updateAccountInfo(e)),100)
                            }} type="button" data-dismiss="modal" >Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AddPhotoAccount;
