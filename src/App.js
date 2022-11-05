import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import NavigationBar from "./components/NavigationBar";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import NoMatch from "./components/NoMatch";
import InitiativeTopPanel from "./components/InitiativeTopPanel";
import SignUp from "./components/Authentication/SignUp.component";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <InitiativeTopPanel />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/estimation" element={<div>Estimation</div>} />
            <Route path="/roadmap" element={<div>Roadmap</div>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
        <div className="footer">
          <p>©2022, made by Anthony Chung and Nhi Tran</p>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default App;
