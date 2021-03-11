import React from 'react';
import cn from 'classnames';

import './AuthForm.scss';

interface AuthFormInterface {
  classNames?: string;
}

const AuthForm = ({ classNames }: AuthFormInterface) => {
  return (
    <div className={cn('auth-form', classNames)}>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputUserName"
            placeholder="petka"
          />
          <label htmlFor="floatingInputUserName">User name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInputEmail"
            placeholder="eee@mail.ru"
          />
          <label htmlFor="floatingInputEmail">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingInputPassword"
            placeholder="111111"
            autoComplete="on"
          />
          <label htmlFor="floatingInputPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingInputPassword1"
            placeholder="petka"
            autoComplete="on"
          />
          <label htmlFor="floatingInputPassword1">Repeat password</label>
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Select your foto
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              console.log(e.currentTarget.value)
            }
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
