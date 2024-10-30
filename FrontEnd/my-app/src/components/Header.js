import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand">Ikéhack</Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="navbar-link active">Accueil <i className="fa-solid fa-house"></i></Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item">
                <LinkContainer to="/cart">
                  <Nav.Link className="nav-link">Panier</Nav.Link>
                </LinkContainer>
              </li>
              <li className="nav-item dropdown">
              <LinkContainer to="/singup">
                <Nav.Link className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nouvel utilisateur ?
                </Nav.Link>
                </LinkContainer>
                <div className="dropdown-menu">
                <LinkContainer to="/singup">
                  <Nav.Link className="dropdown-item" href="#">
                    Se connecter
                  </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                  <Nav.Link className="dropdown-item" href="#">
                    S'inscrire
                  </Nav.Link>
                  </LinkContainer>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                     Déconnexion
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Recherche" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                  Recherche
              </button>
            </form>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
