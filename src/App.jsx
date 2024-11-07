import { lazy, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations.js";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
