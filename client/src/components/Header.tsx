import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="md">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
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
          <Button variant="light" className="m-2">
            <BiLogIn style={{ fontSize: '1.3rem' }} />
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
