import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Enter from './Enter';
import Account from './Account';
import Home from './Home';
import Admin from './Admin';

class Main extends Component{
  
  render(){
    return (
      <Switch> 
        <Route exact path='/' component={props => <Enter {...props} />}></Route>
        <Route exact path='/account/:id' component={props => <Account {...props} />}></Route>
        <Route exact path='/home' component={props => <Home {...props} />}></Route>
        <Route exact path='/admin' component={props => <Admin {...props} />}></Route>
      </Switch>
    );
  }
}

export default Main;