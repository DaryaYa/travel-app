import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Auth from './pages/Auth/Auth';
import Country from './pages/Country/Country';
import Main from './pages/Main/Main';
import QuizzGame from './pages/QuizzGame/QuizzGame';
import { ChangeLanguageAction } from './store/action-creators/other.ActionCreate';
import { getUserAction } from './store/action-creators/userActionCreater';
import { UserResponseInterface } from './types/user.interface';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(getUserAction());
    }

    if (localStorage.getItem('lang')) {
      const lang: string = String(localStorage.getItem('lang'));
      console.log(lang);
      dispatch(ChangeLanguageAction(lang));
    }
  }, [dispatch]);
  return (
    <>
      {/* <nav>
      <button className='button' onClick={()=>handleClick('en')}>EN</button>
      <button className='button' onClick={()=>handleClick('ru')}>RU</button>
      <button className='button' onClick={()=>handleClick('hy')}>HY</button>
      <p>{t('Hello.1')}</p>
        <p>{t('Why.1')}</p>
    </nav> */}
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
