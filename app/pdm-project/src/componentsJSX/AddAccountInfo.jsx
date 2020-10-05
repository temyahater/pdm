import React, { Component } from 'react';

class AddAccountInfo extends Component{

    async updateInfoServer(user,updateInfo,value){
        try {
          const response = await fetch('http://localhost:5000/users/'+user._id, {
            method: 'PUT', 
            body: JSON.stringify({[updateInfo]:value}), 
            headers: {'Content-Type': 'application/json'}
          });
          const json = await response.json();
          console.log(JSON.stringify(json));
        } catch (error) {
          console.error(error);
        }
      }

  render(){
    return ( 
        <div className="modal fade" id="AccountInfoModal" tabIndex="-1" role="dialog" aria-labelledby="AccountInfoModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content accountInfoModal">
                    <div className="modal-body"><textarea id="accountInfoTextarea" defaultValue={this.props.accountInfo[''+this.props.addInfo]} /></div>
                    <div className="accountInfoModalButtons">
                        <button type="button" data-dismiss="modal">Close</button>
                        <button type="button"
                        onClick={()=>{
                            document.getElementById('accountInfoTextarea').value===''?alert('nope brat'):
                            this.props.addInfo==='feedbacks'?
                            this.updateInfoServer(this.props.accountInfo,this.props.addInfo,[...this.props.accountInfo.feedbacks,document.getElementById('accountInfoTextarea').value]):
                            this.props.addInfo==='interests'||this.props.addInfo==='links'?
                            this.updateInfoServer(this.props.accountInfo,this.props.addInfo,document.getElementById('accountInfoTextarea').value.split(' ')):
                            this.updateInfoServer(this.props.accountInfo,this.props.addInfo,document.getElementById('accountInfoTextarea').value);
                            setTimeout(()=>fetch('http://localhost:5000/users/'+this.props.accountInfo._id).then(e=>e.json()).then(e=>this.props.updateAccountInfo(e)),100)
                            }}data-dismiss="modal" >Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AddAccountInfo;
