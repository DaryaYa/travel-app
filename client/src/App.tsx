import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Auth from './pages/Auth/Auth';
import Country from './pages/Country/Country';
import Main from './pages/Main/Main';
import { useTypesSelector } from './components/hooks/useTypedSelector';

const App = () => {
  const notify = () => toast('Wow so easy!');
  const { error } = useTypesSelector(state => state.user);
  if (error) {
    notify();
    console.log(1);
  }
  return (
    <>
      <Switch>
        <Route path={'/main'} component={Main} exact />
        <Route path={'/country/:id'} component={Country} exact />
        <Route path={'/auth'} component={Auth} exact />
        <Redirect to={'/main'} />
      </Switch>

      <ToastContainer />
    </>
  );
};

export default App;
