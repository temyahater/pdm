import React from 'react';

function ForgotPassword() {
  return (
    <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" role="dialog" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content registerFormModal">
                <div className="modal-header">
                    
                </div>
                <div className="modal-body registerData">
                    <span>Email:</span>
                    <input />
                </div>
                <div className="modal-footer">
                    <button type="button" className="prettyButtonGray" data-dismiss="modal">Close</button>
                    <button type="button" className="prettyButtonOrange">Send</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ForgotPassword;
