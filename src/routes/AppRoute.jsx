import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

// Role-based route guard
const ProtectedRoute = ({ children, role, userRole }) => {
    if (userRole === role) return children;
    return <Navigate to="/" />;
};

const AppRoutes = ({ userRole }) => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute role="admin" userRole={userRole}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
