import { Navbar, Form, FormControl, Button, Image } from 'react-bootstrap';
import { FcBusinessman } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useTypesSelector } from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../store/action-creators/userActionCreater';

const Header = () => {
  const { user } = useTypesSelector(state => state.user);

  const dispatch = useDispatch();

  const logInBtnStyles = {
    fontSize: '2rem',
    color: 'whitesmoke',
    cursor: 'pointer',
  };

  const userImgStyles = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const RenderUserImage = () => {
    if (user?.username && user?.imgSrc) {
      return <Image src={user.imgSrc} style={userImgStyles} rounded  />
    }
    if (user?.username && !user?.imgSrc) {
      return <FcBusinessman style={userImgStyles} />
    } else {
      return <FaUserTimes style={userImgStyles} />
    }
  }

  const RenderUserGreeting = () => {
    if (user?.username) {
      return (
        <p style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0' }}>
          Hey, {user.username}!
        </p>
      )
    } else {
      return null;
    }
  }

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
      )
    } else {
      return (
        <Link to="/auth">
          <BiLogIn style={logInBtnStyles} />
        </Link>
      )
    }
  }

  return (
    <header>
      <Navbar bg="primary" expand="md">
        <Link to="/main" style={{ color: 'black' }}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <RenderUserGreeting />

          <Form inline className="m-2">
            <FormControl type="text" placeholder="Search" />
            <Button variant="success">
              <AiOutlineSearch />
            </Button>
          </Form>
          <Form inline className="m-2">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom defaultValue="RU">
                <option>EN</option>
                <option>RU</option>
                <option>AM</option>
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
