import React, { Component } from 'react';

class AddAccountInfo extends Component{

    async testPost(inf){
       console.log(inf);
    }

  render(){
    return ( 
        <div className="modal fade" id="AccountInfoModal" tabIndex="-1" role="dialog" aria-labelledby="AccountInfoModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content accountInfoModal">
                    <div className="modal-body"><textarea id="accountInfoTextarea" defaultValue={this.props.accountInfo[''+this.props.addInfo]} /></div>
                    <div className="accountInfoModalButtons">
                        <button type="button" data-dismiss="modal">Close</button>
                        <button type="button" onClick={()=>this.testPost(this.props.addInfo)} >Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default AddAccountInfo;
