// Navigation file
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
//
// This app requires react-bootstrap and bootstrap installed: 
//    npm install react-bootstrap bootstrap
//
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './App.css';
//
import List from './components/List';
import EditUser from './components/EditUser';
import EditGame from './components/EditGame';

import CreateUser from './components/CreateUser';
import ShowUser from './components/ShowUser';
import ShowGame from './components/ShowGame';
import ListGames from "./components/ListGames";

import Home from './components/Home';
import Login from './components/Login';
//
function App() {

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className= "custom-nav">
        <Container className='container'>
          <Navbar.Brand href="#home"> <img src="src/assets/imgs/logo.png" alt="logo"  height = "90" width = "auto"></img> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home" >Home</Nav.Link>            
              {/* <Nav.Link as={Link} to="/list">List of Users</Nav.Link>*/}
              <Nav.Link as={Link} to="/listgames">List of Games</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/create">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />         
          <Route path="create" element ={< CreateUser />} />
          <Route path="login" element= {< Login />}  />
          <Route path="list" element= {< List />}  />
          <Route path="listgames" element= {< ListGames />}  />
          <Route path="edit/:id" element= {< EditUser />}  />
          <Route path="show/:id" element= {< ShowUser />}  />
          <Route path="showgame/:id" element= {< ShowGame />}  />
          <Route path="editgame/:id" element= {< EditGame />}  />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
