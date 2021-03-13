import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './RegisterForm.scss';

interface AuthFormInterface {
  classNames?: string;
}

interface FormInterface {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

const RegisterForm = ({ classNames }: AuthFormInterface) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  } as FormInterface);
  const [validForm, setValidForm] = useState(false);
  const [isEnabledBtn, setIsEnabledBtn] = useState(true);

  const history = useHistory();

  const changeFormHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name as keyof FormInterface;
    setForm({ ...form, [key]: e.currentTarget.value });
  };

  const [fileSelected, setFileSelected] = useState<File>();
  const reEmail = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const kindMistake = [
    form.email,
    form.password2,
    form.password2,
    form.username,
    form.password1 === form.password2,
    reEmail.test(form.email),
    isEnabledBtn,
  ];
  const changeFileInput = (e: React.FormEvent<HTMLInputElement>) => {
    const fileList = e.currentTarget.files;
    if (fileList) {
      setFileSelected(fileList[0]);
    }
  };

  useEffect(() => {
    setValidForm(kindMistake.every(el => el));
  });

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEnabledBtn(false);
    console.log('sent request');
    const formData = new FormData();
    const { username, password1, email } = form;
    console.log(fileSelected);
    if (fileSelected) {
      formData.append('imagine', fileSelected, fileSelected?.name);
    }
    formData.append('username', username);
    formData.append('password', password1);
    formData.append('email', email);
    try {
      const user = await axios.post('/api/user', formData);
      console.log(user);
      setForm({ email: '', password1: '', password2: '', username: '' });
      history.push('/auth');
    } catch (err) {
      setIsEnabledBtn(true);
      console.log(err.response.data.message);
    }
  };

  return (
    <div className={cn('register-form', classNames)}>
      <form
        className="register-form__form form"
        onSubmit={formSubmitHandler}
        noValidate
      >
        <div className="form-floating mb-4 form__item">
          <input
            type="text"
            className={cn('form-control form__input', {
              'is-invalid': !form.username,
            })}
            id="floatingInputUserName"
            placeholder="petka"
            name="username"
            value={form.username}
            onChange={changeFormHandler}
          />
          <span className="mistake">Required field</span>
          <label htmlFor="floatingInputUserName">User name</label>
        </div>
        <div className="form-floating mb-4 form__item">
          <input
            type="email"
            className={cn('form-control form__input', {
              'is-invalid': !form.email || !reEmail.test(form.email),
            })}
            id="floatingInputEmail"
            placeholder="eee@mail.ru"
            name="email"
            value={form.email}
            onChange={changeFormHandler}
            formNoValidate
          />
          {!form.email && <span className="mistake">Required field</span>}
          {form.email && <span className="mistake">Enter correct email</span>}
          <label htmlFor="floatingInputEmail">Email</label>
        </div>
        <div className="form-floating mb-4 form__item">
          <input
            type="password"
            className={cn('form-control form__input', {
              'is-invalid': !form.password1,
            })}
            id="floatingInputPassword"
            placeholder="111111"
            autoComplete="on"
            name="password1"
            value={form.password1}
            onChange={changeFormHandler}
          />
          <span className="mistake">Required field</span>
          <label htmlFor="floatingInputPassword">Password</label>
        </div>
        <div className="form-floating mb-4 form__item">
          <input
            type="password"
            className={cn('form-control form__input', {
              'is-invalid':
                !form.password1 || form.password1 !== form.password2,
            })}
            id="floatingInputPassword1"
            placeholder="petka"
            autoComplete="on"
            name="password2"
            value={form.password2}
            onChange={changeFormHandler}
          />
          {!form.password2 && <span className="mistake">Required field</span>}
          {form.password1 !== form.password2 && form.password2 && (
            <span className="mistake">Password missmatch</span>
          )}
          <label htmlFor="floatingInputPassword1">Repeat password</label>
        </div>
        <div className="mb-3 form__item">
          <label htmlFor="formFile" className="form-label">
            Select your foto
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="fotosrc"
            accept=".png, .jpg, jpeg"
            onChange={changeFileInput}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!validForm}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
