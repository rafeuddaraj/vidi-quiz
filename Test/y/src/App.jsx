import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
    return (
        <>
            <Router>
                <Navbar /> {/* Include the Navbar component */}
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
