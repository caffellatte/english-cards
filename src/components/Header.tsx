import { useDispatch } from "react-redux";
import { getLogout } from "../redux/actions";
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Nav className="me-auto">
          <Navbar.Brand href="/">English Cards</Navbar.Brand>
          <Nav.Link href="cards">Cards</Nav.Link>
          <Nav.Link href="profile">Profile</Nav.Link>
        </Nav>
        <button
          type="button"
          className="vtn btn-danger"
          onClick={() => dispatch(getLogout())}
        >Logout</button>
      </div>
    </nav>
  );
};

export default Header;