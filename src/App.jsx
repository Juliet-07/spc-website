import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/home";
import About from "./pages/About/aboutUs";
import Community from "./pages/Community/community";
import Events from "./pages/Events/events";
import Trainings from "./pages/Trainings/trainings";
import Team from "./pages/Team/team";
import Contact from "./pages/Contact/contact";
import Pass from "./pages/Events/pass-details";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-spc" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/details" element={<Pass />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-spc" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
