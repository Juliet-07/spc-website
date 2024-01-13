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
import AllStartUps from "./pages/Community/all-startup";
import AllTalents from "./pages/Community/all-talent";
import PartnerPass from "./pages/Events/partner-pass-details";
import StartupDetail from "./pages/Community/startup-details";
import TalentDetail from "./pages/Community/talent-details";
import Payment from "./pages/Events/payment-pass";
import VirtualDelegatePass from "./pages/Events/virtualPass";
import CountryDelegatePass from "./pages/Events/countryPass";
// import Emails from "./pages/email-template";
import PaymentSuccessful from "./pages/Events/payment-successful";
import SponsorshipPayment from "./pages/Events/payment-sponsorship";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-spc" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/all-startups" element={<AllStartUps />} />
          <Route path="/community/all-talents" element={<AllTalents />} />
          <Route path="/community/startup/:id" element={<StartupDetail />} />
          <Route path="/community/talent/:id" element={<TalentDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/details" element={<Pass />} />
          <Route path="/events/partner-details" element={<PartnerPass />} />
          <Route path="/events/payment-details" element={<Payment />} />
          <Route path="/events/sponsorship-payment-details" element={<SponsorshipPayment />} />
          <Route path="/events/virtual-delegate-pass" element={<VirtualDelegatePass />} />
          <Route path="/events/country-delegate-pass" element={<CountryDelegatePass />} />
          <Route path="/events/payment-sucessful" element={<PaymentSuccessful />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-spc" element={<Contact />} />
          {/* <Route path="/email-newsletter" element={<Emails />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
