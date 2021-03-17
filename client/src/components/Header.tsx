import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // trans

const Header = () => {

  const { t, i18n } = useTranslation(); // trans
  const handleChange = (lang: string) => { //trans
    i18n.changeLanguage(lang);
  }
  return (
    <header>
      <Navbar bg="primary" expand="md">
        <Link to="/main" style={{color: 'black'}}>LOGO</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form inline className="m-2">
            <FormControl type="text" placeholder={t('Form.11')} />
            <Button variant="success">
              <AiOutlineSearch />
            </Button>
          </Form>
          <Form inline className="m-2">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom defaultValue="ru" onChange={(e)=>handleChange(e.target.value)}>
                <option value='en'>EN</option>
                <option value='ru'>RU</option>
                <option value='hy'>AM</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button variant="light" className="m-2">
            <BiLogIn style={{ fontSize: '1.3rem' }} />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
