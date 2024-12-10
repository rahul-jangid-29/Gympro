import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // Import PayPal provider
import "./App.css";
import Hero from "./components/Hero";
import MembershipPlans from "./components/MembershipPlans";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard.jsx";
import Payment from "./components/Payment.jsx"; 
import Contact from "./components/Contact.jsx";
import Trainers from "./components/Trainer.jsx";

// Layout for public pages
const PublicLayout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID", currency: "USD" }}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Hero />
                <MembershipPlans />
                <Gallery />
                <Testimonials />
                <Trainers/>
              </PublicLayout>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />


          {/* Payment Route */}
          <Route path="/payment" element={<Payment />} />  {/* PayPal button shown here */}

          {/* Protected Route for Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 Page */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
