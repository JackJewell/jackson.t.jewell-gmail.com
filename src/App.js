import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Col, Row, Container } from "./components/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects/index";
import './App.css';

function App() {
  return (
    <Router>
      <div id = "mainBodyDiv">
        <div className = "border-bottom border-5 border-white ">
          <Navbar/>
        </div>
        <Container>
          <div className = "border border-secondary mainDiv rounded">
            <Row>
              <Col id = "aboutDiv" size="md-12">
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/projects" component={Projects} />
                </Switch>
              </Col>
            </Row>
          </div>
        </Container>
        <Footer/>
    </div>
  </Router>
  );
}

export default App;
