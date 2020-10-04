import React, { Component } from 'react';

class Nav extends Component{

  render(){
    return ( 
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand">Travel Party</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="http://localhost:3000">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link account-settings-link" href="http://localhost:3000/account">Account</a>
                </li>
            </ul>
            </div>
            <button id="account-exit">Exit</button>
        </nav>
    );
  }
}

export default Nav;
