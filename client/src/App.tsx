import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Country from './pages/Country/Country';
import Main from './pages/Main/Main';
// import { useTranslation } from 'react-i18next'; // trans

const App = () => {
  const a = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
  };
//  const { t, i18n } = useTranslation(); // trans
//   const handleClick = (lang: string) => { //trans
//     i18n.changeLanguage(lang);
//   }
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
        <Redirect to={'/main'} />
        
      </Switch>
    </>
  );
};

export default App;
