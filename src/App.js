import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className = 'main-container'>
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

        </div>
      </Router>
      <footer className='footer mt-auto py-3 bg-dark text-white'>
          <div className='container'>Place sticky footer content here.</div>
      </footer>
    </div>
  );
}

export default App;
