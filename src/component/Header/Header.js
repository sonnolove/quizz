import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../services/apiServices";
import { toast } from "react-toastify";
import { doLogout } from "../../redux/action/useAction";
import Language from "./Language";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaReact } from "react-icons/fa";
import { useState } from "react";
import Profile from "./Profile";
import "./Header.scss";
import "../../assets/logo.png";


const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShowModalProfile, setIsShowModalProfile] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogOut = async () => {
    let rs = await logout(account.email, account.refresh_token);
    if (rs && rs.EC === 0) {
      dispatch(doLogout());
      navigate("/login");
    } else {
      toast.error(rs.EM);
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="light">
        <Container>
          {/* <Navbar.Brand href="">Bien</Navbar.Brand> */}
          <NavLink to="/" className="navbar-brand">
  <span className="brand-logo"></span>
  <span className="brand-name">PioQuizzy</span>
</NavLink>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/users" className="nav-link">
                My Quizzes
              </NavLink>
              {account && account.role === "ADMIN" ? (
                <NavLink target="_blank" to="/admin" className="nav-link">
                  Dashboard
                </NavLink>
              ) : (
                <></>
              )}
            </Nav>
            <Nav>
              {isAuthenticated === false ? (
                <>
                  <button className="btn-login" onClick={() => handleLogin()}>
                    Log in
                  </button>
                  <button
                    className="btn-sign-up"
                    onClick={() => handleRegister()}>
                    Sign up
                  </button>
                </>
              ) : (
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => setIsShowModalProfile(true)}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleLogOut()}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              <Language />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Profile show={isShowModalProfile} setShow={setIsShowModalProfile} />
    </>
  );
};

export default Header;
