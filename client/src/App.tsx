import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Country from './pages/Country/Country';
import Main from './pages/Main/Main';
import { useTypesSelector } from './components/hooks/useTypedSelector';

const App = () => {
  return (
    <>
      <Switch>
        <Route path={'/main'} component={Main} exact />
        <Route path={'/country/:id'} component={Country} exact />
        <Route path={'/auth'} component={Auth} exact />
        <Redirect to={'/main'} />
      </Switch>
    </>
  );
};

export default App;
