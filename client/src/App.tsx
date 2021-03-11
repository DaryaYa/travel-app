import React from 'react';
<<<<<<< HEAD
import { Route, Redirect, Switch } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Country from './pages/Country/Country';
import Main from './pages/Main/Main';
=======
import Header from './components/Header';
import { Widget } from './components/Widget';
>>>>>>> 2ed1152... feat: add clock % weather

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Switch>
        <Route path={'/main'} component={Main} exact />
        <Route path={'/country'} component={Country} exact />
        <Route path={'/auth'} component={Auth} exact />
        <Redirect to={'/main'} />
      </Switch>
=======
      <Header />
      <Widget lat={15} lng={50} timeZone={"Europe/Moscow"} language={"en-GB"} />
>>>>>>> 2ed1152... feat: add clock % weather
    </>
  );
};

export default App;
