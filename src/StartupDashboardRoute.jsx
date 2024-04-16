import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Startup/Layout";
import Dashboard from "./pages/Startup/Dashboard";

const StartupDashboardRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/agenda" element={<Agenda />} />
          <Route path="/live" element={<Live />} />
          <Route path="/network" element={<Network />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/announcements" element={<Announcement />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/explore" element={<Explore />} /> */}
        </Routes>
      </Layout>
    </>
  );
};

export default StartupDashboardRoute;
