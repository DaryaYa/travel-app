import { Navbar, Form, FormControl, Button, Image } from 'react-bootstrap';
import { FcBusinessman } from 'react-icons/fc';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
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
  }

  const userImgStyles = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  }

  return (
    <header>
      <Navbar bg="primary" expand="md">
        <Link to="/main" style={{color: 'black'}}>LOGO</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          { user?.username
            ? 
              <p style={{fontSize: '1.2rem', color: 'white', marginBottom: '0'}}>
                Hey, {user.username}!
              </p>
            : 
              null
          }
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
          { user?.username
            ?
              <Image
                src={user.imgSrc}
                style={userImgStyles}
                roundedCircle
              />
            : 
              <FcBusinessman style={userImgStyles} />
          }
          { user?.username 
            ? 
              <BiLogOut style={logInBtnStyles} onClick={() => dispatch(logoutUserAction())} />
            : 
              <Link to="/auth">
                <BiLogIn style={logInBtnStyles} />
              </Link>
          }
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
