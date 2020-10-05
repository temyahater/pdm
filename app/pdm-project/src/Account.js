import React, { Component } from 'react';
import AccountInfo from './componentsJSX/AccountInfo';
import AddAccountInfo from './componentsJSX/AddAccountInfo';
import Nav from './componentsJSX/Nav';

class Account extends Component{
  constructor(props){
    super(props);
    this.state={account:{},addInfo:''}
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+window.location.pathname.slice(-1)).then(res=>res.json()).then(data =>{this.setState({account: data})});
  }

  updateAddInfo=e=>{
    this.setState({addInfo:e});
  }

  updateAccountInfo=e=>{
    this.setState({account:e});
  }

  render(){
    return ( 
      <div className="account">
        <Nav />
        <AccountInfo updateAddInfo={this.updateAddInfo} accountInfo={this.state.account} />
        <AddAccountInfo updateAccountInfo={this.updateAccountInfo} addInfo={this.state.addInfo} accountInfo={this.state.account} />
      </div>
    );
  }
}

export default Account;
