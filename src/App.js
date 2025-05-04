import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute

function App() {
  const token = useSelector((state) => state.auth.token); // Get token from Redux

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Routes>
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/register"
            element={!token ? <Register /> : <Navigate to="/dashboard" />}
          />
          {/* Use ProtectedRoute for restricted access to the dashboard */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
