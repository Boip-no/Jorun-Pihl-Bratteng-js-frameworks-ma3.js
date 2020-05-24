/* 

Use React Router to create links to the Home, 
News and Login components, using the paths /, /news and /login. 

*/

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Login from "../login/Login";
import News from "../news/News";

function Layout() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact>
                <Navbar.Brand>React MA3</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="mr-auto">
                    <Nav.Link to="/" exact className="nav-link">
                        Home
                    </Nav.Link>
                    <Nav.Link to="/news/" className="nav-link">
                        News
                    </Nav.Link>
                    <Nav.Link to="/login/" className="nav-link">
                        Login
                    </Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Container>
        </Router>
    );
}

export default Layout;