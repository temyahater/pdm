import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Enter from './Enter';
import Account from './Account';

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={props => <Enter {...props} />}></Route>
      <Route exact path='/account/:id' component={props => <Account {...props} />}></Route>
    </Switch>
  );
}

export default Main;