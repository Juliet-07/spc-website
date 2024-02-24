import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Forum/Layout";
import Home from "./pages/Forum/Home";
import Agenda from "./pages/Forum/Agenda";
import Live from "./pages/Forum/Live";
import Network from "./pages/Forum/Network";
import Speakers from "./pages/Forum/Speakers";
import Announcement from "./pages/Forum/Announcement";
import Partners from "./pages/Forum/Partners";
import Explore from "./pages/Forum/Explore";

const ForumRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/live" element={<Live />} />
          <Route path="/network" element={<Network />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/announcements" element={<Announcement />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Layout>
    </>
  );
};

export default ForumRoute;
