import { useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UsersList from "./Pages/User/UsersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="userlist" element={<UsersList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
