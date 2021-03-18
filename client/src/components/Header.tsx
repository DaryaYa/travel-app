import { Navbar, Form, FormControl, Button, Image } from 'react-bootstrap';
import { FcBusinessman } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { FaUserTimes, FaGamepad } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useTypesSelector } from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../store/action-creators/userActionCreater';
import { useTranslation } from 'react-i18next'; // trans
import { useEffect, useRef, useState } from 'react';
import {
  ChangeLanguageAction,
  ChangeSearchValueAction,
} from '../store/action-creators/other.ActionCreate';

const Header = () => {
  const { t, i18n } = useTranslation(); // trans
  const handleChange = (lang: string) => {
    //trans
    i18n.changeLanguage(lang);
  };

  const [searchValue, serSearchValue] = useState('');
  const dispatch = useDispatch();

  const searchRef = useRef<HTMLInputElement>(null);

  const changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    serSearchValue(e.currentTarget.value);
    dispatch(ChangeSearchValueAction(e.currentTarget.value));
  };
  if (searchRef.current) {
    searchRef.current.focus();
  }

  const { user } = useTypesSelector(state => state.user);
  const { language } = useTypesSelector(state => state.other);

  const location = useLocation();

  const logInBtnStyles = {
    fontSize: '2rem',
    color: 'whitesmoke',
    cursor: 'pointer',
  };

  const userImgStyles = {
    maxHeight: '40px',
    marginRight: '10px',
  };

  const RenderUserImage = () => {
    if (user?.username && user?.imgSrc) {
      return <Image src={user.imgSrc} style={userImgStyles} rounded />;
    }
    if (user?.username && !user?.imgSrc) {
      return <FcBusinessman style={userImgStyles} />;
    } else {
      return <FaUserTimes style={userImgStyles} />;
    }
  };

  const RenderUserGreeting = () => {
    if (user?.username) {
      return (
        <p
          style={{
            fontSize: '1.2rem',
            color: 'white',
            marginBottom: '0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '20ch',
          }}
        >
          {t('Hello.1')}, {user.username}!
        </p>
      );
    } else {
      return null;
    }
  };

  const RenderLogInLogOutBtn = () => {
    if (user?.username) {
      return (
        <BiLogOut
          style={logInBtnStyles}
          onClick={() => {
            dispatch(logoutUserAction());
            localStorage.clear();
          }}
        />
      );
    } else {
      return (
        <Link to="/auth">
          <BiLogIn style={logInBtnStyles} />
        </Link>
      );
    }
  };

  const changeLanguageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
    dispatch(ChangeLanguageAction(e.target.value));
    localStorage.setItem('lang', e.target.value);
  };

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  });

  return (
    <header>
      <Navbar expand="lg">
        <Link to="/main" style={{ color: 'black' }}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <Link to="/quizz-game">
          <FaGamepad
            style={{
              color: 'white',
              cursor: 'pointer',
              fontSize: '3rem',
              marginLeft: '40px',
            }}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <RenderUserGreeting />

          {location.pathname.includes('main') && (
            <Form inline className="m-2 search" autoComplete="off">
              <FormControl
                value={searchValue}
                onChange={changeSearchHandler}
                type="text"
                placeholder={t('Form.11')}
                autoComplete="off"
                ref={searchRef}
              />
              <Button variant="success">
                <AiOutlineSearch />
              </Button>
            </Form>
          )}
          <Form inline className="m-2">
            <Form.Group
              className="language-selector"
              controlId="exampleForm.SelectCustom"
            >
              <Form.Control
                as="select"
                custom
                defaultValue={language}
                onChange={changeLanguageHandler}
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="hy">AM</option>
              </Form.Control>
            </Form.Group>
          </Form>

          <RenderUserImage />

          <RenderLogInLogOutBtn />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
