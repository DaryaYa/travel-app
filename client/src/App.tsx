import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Country from './pages/Country/Country';
import Main from './pages/Main/Main';

const App = () => {
  const a = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
  };
  return (
    <>
      <Switch>
        <Route path={'/main'} component={Main} exact />
        <Route path={'/country'} component={Country} exact />
        <Route path={'/auth'} component={Auth} exact />
        <Redirect to={'/main'} />
      </Switch>
    </>
  );
};

export default App;
