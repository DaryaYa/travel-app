import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import Card from '../../components/Card/Card';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Layout from '../../components/Layout/Layout';

import './Auth.scss';
import LoginForm from '../../components/LoginFrom/LoginForm';
import { useTypesSelector } from '../../components/hooks/useTypedSelector';

const Auth = () => {
  const params = new URLSearchParams(useLocation().search);
  const isRegister = params.get('register');
  const history = useHistory();
  const { user } = useTypesSelector(state => state.user);
  useEffect(() => {
    if (user) {
      history.push('/main');
    }
  });
  return (
    <>
      <Layout classNames="auth row">
        <div className="auth__wrapper  col-12 col-lg-6 offset-lg-3">
          <Card classNames="auth__card">
            {isRegister && <RegisterForm classNames="auth__form-register" />}
            {!isRegister && <LoginForm classNames="auth__form-login" />}
            <Link
              to={!isRegister ? '/auth?register=true' : '/auth'}
              className="btn btn-link"
            >
              {isRegister ? 'Log in' : 'Create account'}
            </Link>
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default Auth;
