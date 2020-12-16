import React, { Component } from 'react';
import AccountInfo from './componentsJSX/AccountInfo';
import AddAccountInfo from './componentsJSX/AddAccountInfo';
import AddPhotoAccount from './componentsJSX/AddPhotoAccount';
import Nav from './componentsJSX/Nav';

class Account extends Component{
  constructor(props){
    super(props);
    this.state={account:{},addInfo:'',test:{}}
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+[...window.location.pathname].filter(e=>+e==e).join('')).then(res=>res.json()).then(data=>this.setState({account: data}));
    fetch('http://localhost:5000/accountphoto').then(res=>res.json()).then(data=>this.setState({test: data}));
  }

  updateAddInfo=e=>{
    this.setState({addInfo:e});
  }

  updateAccountInfo=e=>{
    this.setState({account:e});
  }

  render(){
    return ( 
      <div className="account" onClick={()=>console.log([...window.location.pathname].filter(e=>+e==e).join(''))}>
        <Nav account={this.state.account} />
        <AccountInfo updateAddInfo={this.updateAddInfo} accountInfo={this.state.account} />
        <AddAccountInfo updateAccountInfo={this.updateAccountInfo} addInfo={this.state.addInfo} accountInfo={this.state.account} />
        <AddPhotoAccount updateAccountInfo={this.updateAccountInfo} postAccountPhoto={this.postAccountPhoto} accountInfo={this.state.account}/>
      </div>
    );
  }
}

export default Account;
