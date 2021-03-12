import React from 'react';
import Card from '../../components/Card/Card';
import AuthForm from '../../components/AuthForm/AuthForm';
import Layout from '../../components/Layout/Layout';
import { useSelector } from 'react-redux';

import './Auth.scss';
import { useTypesSelector } from '../../components/hooks/useTypedSelector';

const Auth = () => {
  return (
    <>
      <Layout classNames="auth row">
        <div className="auth__wrapper  col-12 col-lg-6 offset-lg-3">
          <Card classNames="auth__card">
            <AuthForm classNames="auth__form" />
          </Card>
        </div>
      </Layout>
    </>
  );
};

export default Auth;
