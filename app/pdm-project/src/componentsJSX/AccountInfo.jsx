import React, { Component } from 'react';

class AccountInfo extends Component{
    constructor(props){
        super(props);
        this.state={addInfo:''}
      }

  render(){
    return (
        <div className="account-main">
        <div className="account-main-header">
          <div className="account-main-header-photos">
            <div className="account-main-header-photos-mainPhoto">
              <img src="/images/temi4.jpg" alt="main photo1" />
            </div>
            <div className="account-main-header-photos-otherPhotos">
              <div className="account-main-header-photos-addPhoto">
                <img src="/images/add-photo.png" alt="add photo1" />
              </div>
              <div className="account-main-header-photos-addPhoto">
                <img src="/images/add-photo.png" alt="add photo2" />
              </div>
              <div className="account-main-header-photos-addPhoto">
                <img src="/images/add-photo.png" alt="add photo3" />
              </div>
              <div className="account-main-header-photos-addPhoto">
                <img src="/images/add-photo.png" alt="add photo4" />
              </div>
            </div>
          </div>
          <div className="account-main-header-info">
            <div onClick={()=>{this.props.updateAddInfo('name');document.getElementById('accountInfoTextarea').value=this.props.accountInfo.name+' '+this.props.accountInfo.surname}}
             data-toggle="modal" data-target="#AccountInfoModal">{this.props.accountInfo.name+' '+this.props.accountInfo.surname}</div>
            <div onClick={()=>{this.props.updateAddInfo('status');document.getElementById('accountInfoTextarea').value=this.props.accountInfo.status}}
             data-toggle="modal" data-target="#AccountInfoModal">{this.props.accountInfo.status}</div>
            <div onClick={()=>{this.props.updateAddInfo('old');document.getElementById('accountInfoTextarea').value=this.props.accountInfo.old}}
             data-toggle="modal" data-target="#AccountInfoModal">{this.props.accountInfo.old}</div>
            <div onClick={()=>{this.props.updateAddInfo('familyStatus');document.getElementById('accountInfoTextarea').value=this.props.accountInfo.familyStatus}}
             data-toggle="modal" data-target="#AccountInfoModal">{this.props.accountInfo.familyStatus}</div>
            <div onClick={()=>{this.props.updateAddInfo('interests');document.getElementById('accountInfoTextarea').value=(this.props.accountInfo.interests).join(' ')}}
             data-toggle="modal" data-target="#AccountInfoModal">{(this.props.accountInfo.interests+'').split(',').join(' ')}</div>
            <div onClick={()=>{this.props.updateAddInfo('purpose');document.getElementById('accountInfoTextarea').value=this.props.accountInfo.purpose}}
             data-toggle="modal" data-target="#AccountInfoModal">{this.props.accountInfo.purpose}</div>
            <div onClick={()=>{this.props.updateAddInfo('links');document.getElementById('accountInfoTextarea').value=(this.props.accountInfo.links).join(' ')}}
             data-toggle="modal" data-target="#AccountInfoModal">{(this.props.accountInfo.links+'').split(',').join(' ')}</div>
            <div>{this.props.accountInfo.rating}</div>
          </div>
        </div>
        <div className="account-main-footer">
          <div className="account-main-description" onClick={()=>{this.props.updateAddInfo('aboutSelf');
            document.getElementById('accountInfoTextarea').value=this.props.accountInfo.aboutSelf}}
            data-toggle="modal" data-target="#AccountInfoModal">{this.props.accountInfo.aboutSelf}</div>
          <div className="account-main-feedbacks">
            <div className="account-main-feedback" onClick={()=>{this.props.updateAddInfo('feedbacks');
                document.getElementById('accountInfoTextarea').value=''}}
                data-toggle="modal" data-target="#AccountInfoModal">+</div>
            {(this.props.accountInfo.feedbacks+'').split(',').map((e,i)=><div key={i} className="account-main-feedback">{e}</div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
