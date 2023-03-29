import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Text>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <h5>Convin Task</h5>
          </Link>
          </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to={'/history'} style={{textDecoration:'none'}}>
              History
            </Link> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;