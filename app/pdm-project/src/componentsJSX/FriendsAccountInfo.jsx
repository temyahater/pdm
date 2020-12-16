import React, { Component } from 'react';

class FriendsAccountInfo extends Component{

  render(){
    return (
        <div className="friends-account-main">
            <div className="friends-account-main-header">
                <div className="friends-account-main-header-photos">
                    <div className="friends-account-main-header-photos-photo">
                        <img src={this.props.accountInfo.photo} alt="friend account"/>
                    </div>
                </div>
                <div className="friends-account-main-header-info">
                    <div>{this.props.accountInfo.name+' '+this.props.accountInfo.surname}</div>
                    <div>{this.props.accountInfo.status}</div>
                    <div>{this.props.accountInfo.old}</div>
                    <div>{this.props.accountInfo.familyStatus}</div>
                    <div>{(this.props.accountInfo.interests+'').split(',').join(' ')}</div>
                    <div>{this.props.accountInfo.purpose}</div>
                    <div>{(this.props.accountInfo.links+'').split(',').join(' ')}</div>
                    <div>{this.props.accountInfo.rating}</div>
                </div>
            </div>
            <div className="friends-account-main-footer">
                <div className="friends-account-main-description">{this.props.accountInfo.aboutSelf}</div>
                <div className="friends-account-main-feedbacks">
                    <div className="friends-account-main-feedback">+</div>
                    {(this.props.accountInfo.feedbacks+'').split(',').map((e,i)=><div key={i} className="friends-account-main-feedback">{e}</div>)}
                </div>
            </div>
        </div>
    );
  }
}

export default FriendsAccountInfo;
