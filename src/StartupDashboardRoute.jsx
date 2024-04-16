import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Startup/Layout";
import Dashboard from "./pages/Startup/Dashboard";
import Talents from "./pages/Startup/Talents";
import Mentors from "./pages/Startup/Mentors";
import GlobalExpansion from "./pages/Startup/Expansion";
import Profile from "./pages/Startup/Profile";

const StartupDashboardRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/expansion" element={<GlobalExpansion />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </>
  );
};

export default StartupDashboardRoute;
