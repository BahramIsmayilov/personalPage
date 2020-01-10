import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import SingleProjectInfo from "./components/SingleProjectInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/projects/:id">
          <SingleProjectInfo />
        </Route>
        <Route>
          <Error path="*" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
