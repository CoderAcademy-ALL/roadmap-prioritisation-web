import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import AuthContext from "./context/auth.context";
// Pages
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
// import InitiativeItem from "./components/InitiativeItem";
import NotFound from "./components/NotFound";
import SignUp from "./components/Authentication/SignUp.component";
import Login from "./components/Authentication/Login.component";
import NotAuthorized from "./components/Authentication/NotAuthorized.component";
import EmailRecovery from "./components/Authentication/EmailRecovery.component";
import Users from "./components/Users/Users.components";
import InitiativeItem from "./components/InitiativeItem/IntiativeItem.component";
import PendingSignUpComponent from "./components/Authentication/PendingSignUp.component";

function App() {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user != undefined) {
      const userJson = JSON.parse(user);
      setAuth(userJson);
    }
  }, []);
  console.log(auth);
  return (
    <div className="container">
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/initiatives/:id" element={<InitiativeItem />} />
              <Route path="estimation" element={<div>Estimation</div>} />
              <Route path="roadmap" element={<div>Roadmap</div>} />
              <Route path="users" element={<Users />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
            <Route
              path="signup/pendingsignup"
              element={<PendingSignUpComponent />}
            />
            <Route path="login" element={<Login />} />
            <Route path="not-authorized" element={<NotAuthorized />} />
            <Route path="forgot-password" element={<EmailRecovery />} />
          </Routes>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
