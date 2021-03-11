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
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            User name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Yury"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control w-100"
            id="formGroupExampleInput2"
            placeholder="Another input yury@mail.ru"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control w-100"
            id="formGroupPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupPassword2" className="form-label">
            Repead password
          </label>
          <input
            type="password"
            className="form-control w-100"
            id="formGroupPassword2"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
