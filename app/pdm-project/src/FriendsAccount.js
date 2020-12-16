import React, { Component } from 'react';
import FriendsAccountInfo from './componentsJSX/FriendsAccountInfo';
import Nav from './componentsJSX/Nav';

class FriendsAccount extends Component{
  constructor(props){
    super(props);
    this.state={account:{},friendAccount:{}}
    // this.relocationUser=this.relocationUser.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:5000/users/'+[...document.cookie.split(';').find(e=>e.includes('account'))].filter(e=>+e==e).join('')).then(res=>res.json()).then(el=>this.setState({account: el}));
    fetch('http://localhost:5000/users/'+[...window.location.pathname].filter(e=>+e==e).join('')).then(res=>res.json()).then(el=>this.setState({friendAccount: el}));
  }

//   relocationUser(){
//     if(this.state.account._id===this.state.friendAccount._id&&this.state.account._id!=undefined){
//         if(window.confirm('Do you want to go to your account page?')){
//             console.log(this.state)
//             // return document.location.href='http://localhost:3000/account/'+this.state.account._id;
//         }
//     }
//   }

  render(){
    return ( 
      <div className="friends-account" onClick={()=>console.log(this.state)}>
        <Nav account={this.state.account} />
        <FriendsAccountInfo accountInfo={this.state.friendAccount} />
        {/* {this.relocationUser()} */}
      </div>
    );
  }
}

export default FriendsAccount;
