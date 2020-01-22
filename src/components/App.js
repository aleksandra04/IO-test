import React from 'react';
import '../styles/App.scss';
import { Switch, Route } from 'react-router-dom';
import Support from './Support';
import Login from './Login';
import UserPage from './UserPage';
import PasswordReset from './PasswordReset';

function App() {
  return (
    <div className='background-light'>
      <div className='background-dark'>
        <div className='left-side'>
        <Support />
        </div>
        <div className='right-side'>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/logged" component={UserPage} />
          <Route path='/reset-pwd' component={PasswordReset} />
        </Switch>
        </div>
      </div>

    </div>

  );
}

export default App;
