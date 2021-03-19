import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import './LoginForm.scss';
import { useDispatch } from 'react-redux';
import { getUserAction } from '../../store/action-creators/userActionCreater';
import { useTypesSelector } from '../hooks/useTypedSelector';

import { useTranslation } from 'react-i18next'; //translation

interface LoginFormInterface {
  classNames: string;
}

interface FormInterface {
  email: string;
  password: string;
}

const LoginForm = ({ classNames }: LoginFormInterface) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  } as FormInterface);

  const { t, i18n } = useTranslation(); //translation

  const dispatch = useDispatch();
  const { loading } = useTypesSelector(state => state.user);
  const [isSubmitBtnValid, setIsSubmitBtnValid] = useState(false);

  const reEmail = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const changeFormHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (form.email && form.email && reEmail.test(form.email) && !loading) {
      setIsSubmitBtnValid(true);
    } else {
      setIsSubmitBtnValid(false);
    }
    const key = e.currentTarget.name as keyof FormInterface;
    setForm({ ...form, [key]: e.currentTarget.value });
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitBtnValid(false);
    await dispatch(
      getUserAction({ email: form.email, password: form.password }),
    );
    setIsSubmitBtnValid(true);
  };
  return (
    <div className={cn('login-form', classNames)}>
      <form
        className="login-form__form form"
        noValidate
        autoComplete="off"
        onSubmit={formSubmitHandler}
      >
        <div className="form-floating mb-4 form__item">
          <input
            type="email"
            className={cn('form-control form__input', {
              'is-invalid': !form.email || !reEmail.test(form.email),
            })}
            id="floatingInputEmailLog-Form"
            placeholder="eee@mail.ru"
            name="email"
            value={form.email}
            onChange={changeFormHandler}
            formNoValidate
            autoComplete="off"
          />
          {!form.email && <span className="mistake">{t('Form.1')}</span>}
          {form.email && <span className="mistake">{t('Form.2')}</span>}
          <label htmlFor="floatingInputEmailLog-Form">{t('Form.3')}</label>
        </div>

        <div className="form-floating mb-4 form__item">
          <input
            type="password"
            className={cn('form-control form__input', {
              'is-invalid': !form.password,
            })}
            id="floatingInputPasswordLog-Form"
            placeholder="111111"
            autoComplete="off"
            name="password"
            value={form.password}
            onChange={changeFormHandler}
          />
          <span className="mistake">{t('Form.1')}</span>
          <label htmlFor="floatingInputPasswordLog-Form">{t('Form.5')} </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!isSubmitBtnValid}
        >
          {t('Form.4')}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
