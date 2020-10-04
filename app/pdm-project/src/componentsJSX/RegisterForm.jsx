import React, { Component } from 'react';

class RegisterForm extends Component{
    render(){
        return (
            <div className="modal fade" id="registerFormModal" tabIndex="-1" role="dialog" aria-labelledby="registerFormModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content registerFormModal">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerFormModalLabel">Registration form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body registerData">
                            <span>Email:</span>
                            <input className="registerInputs" onKeyUp={(e)=>e.target.value===''?e.target.classList.add('emptyRegisterData'):e.target.classList.remove('emptyRegisterData')} id="registerEmail" />
                        </div>
                        <div className="modal-body registerData">
                            <span>Name:</span>
                            <input className="registerInputs" onKeyUp={(e)=>e.target.value===''?e.target.classList.add('emptyRegisterData'):e.target.classList.remove('emptyRegisterData')} id="registerName" />
                        </div>
                        <div className="modal-body registerData">
                            <span>Surname:</span>
                            <input className="registerInputs" onKeyUp={(e)=>e.target.value===''?e.target.classList.add('emptyRegisterData'):e.target.classList.remove('emptyRegisterData')} id="registerSurname" />
                        </div>
                        <div className="modal-body registerData">
                            <span>Old:</span>
                            <input className="registerInputs" onKeyUp={(e)=>e.target.value===''?e.target.classList.add('emptyRegisterData'):e.target.classList.remove('emptyRegisterData')} id="registerOld" />
                        </div>
                        <div className="modal-body registerData">
                            <span>Password:</span>
                            <input className="registerInputs" onKeyUp={(e)=>e.target.value===''?e.target.classList.add('emptyRegisterData'):e.target.classList.remove('emptyRegisterData')} id="registerPassword" />
                        </div>
                        <div className="modal-body registerData">
                            <span>Repeat password:</span>
                            <input className="registerInputs" onKeyUp={(e)=>e.target.value===''?e.target.classList.add('emptyRegisterData'):e.target.classList.remove('emptyRegisterData')} id="registerPasswordRepeat" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="prettyButtonGray" data-dismiss="modal">Close</button>
                            <button type="button" className="prettyButtonOrange" onClick={()=>this.props.registerClick()}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
          );
    }
}

export default RegisterForm;
