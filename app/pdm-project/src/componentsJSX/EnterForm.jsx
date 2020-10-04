import React, { Component } from 'react';

class EnterForm extends Component{
  render(){
    return (
      <div className="enterForm">
          <div className="enterCompany">
            <img src="images/star.png" alt="logo star" />
            <span>travel-party</span>
          </div>
          <div className="enterFormData">
            <div id="enterEmailDiv" className="enterFormInput enterEmail">
              <span>Email: </span>
              <input id="enterEmail" type="text"></input>
            </div>
            <div id="enterPasswordDiv" className="enterFormInput enterPassword">
              <span>Password: </span>
              <input id="enterPassword" type="text"></input>
            </div>
            <div className="enterRegister">
              <span className="enterForgotPassword" data-toggle="modal" data-target="#forgotPasswordModal">Forgot password?</span>
              <span className="enterForgotPassword" data-toggle="modal" data-target="#registerFormModal">Register</span>
            </div>
            <button onClick={()=>this.props.enterClick()}>Let's go!</button>
          </div>
      </div>
    );
  }
}

export default EnterForm;
