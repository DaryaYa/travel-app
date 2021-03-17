import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Auth from './pages/Auth/Auth';
import Country from './pages/Country/Country';
import Main from './pages/Main/Main';
import QuizzGame from './pages/QuizzGame/QuizzGame';
import { getUserAction } from './store/action-creators/userActionCreater';
import { UserResponseInterface } from './types/user.interface';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(getUserAction());
    }
  }, [dispatch]);
  return (
    <>
      <Switch>
        <Route path={'/main'} component={Main} exact />
        <Route path={'/country/:id'} component={Country} exact />
        <Route path={'/auth'} component={Auth} exact />
        <Route path={'/quizz-game'} component={QuizzGame} exact />
        <Redirect to={'/main'} />
      </Switch>

      <ToastContainer />
    </>
  );
};

export default App;
