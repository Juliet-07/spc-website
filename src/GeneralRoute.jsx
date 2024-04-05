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
import PaymentSuccessful from "./pages/Events/payment-successful";
import SponsorshipPayment from "./pages/Events/payment-sponsorship";
import CountryVipDelegatePass from "./pages/Events/countryVip";
import GeneralPass from "./pages/Events/generalPass";
import VipPass from "./pages/Events/vipPass";
import ExhibitionPartnerPass from "./pages/Events/exhibitionPartner";
import ImpactFounder from "./pages/Events/impactFounder";
import ImpactOrg from "./pages/Events/impactOrg";
import Emails from "./pages/email-template";
import StartupNetwork from "./pages/Community/startup-network";
import ThankYou from "./components/ThankYou";

const GeneralRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-spc" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/all-startups" element={<AllStartUps />} />
          <Route path="/community/startups-network" element={<StartupNetwork />} />
          <Route path="/community/all-talents" element={<AllTalents />} />
          <Route path="/community/startup/:id" element={<StartupDetail />} />
          <Route path="/community/talent/:id" element={<TalentDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/details" element={<Pass />} />
          <Route path="/events/partner-details" element={<PartnerPass />} />
          <Route path="/events/payment-details" element={<Payment />} />
          <Route
            path="/events/sponsorship-payment-details"
            element={<SponsorshipPayment />}
          />
          <Route
            path="/events/virtual-delegate-pass"
            element={<VirtualDelegatePass />}
          />
          <Route
            path="/events/country-delegate-pass"
            element={<CountryDelegatePass />}
          />
          <Route
            path="/events/country-vip-delegate-pass"
            element={<CountryVipDelegatePass />}
          />
          <Route
            path="/events/general-all-access-pass"
            element={<GeneralPass />}
          />
          <Route path="/events/vip-all-access-pass" element={<VipPass />} />
          <Route
            path="/events/exhibition-partner-ticket"
            element={<ExhibitionPartnerPass />}
          />
          <Route
            path="/events/impact-founder-ticket"
            element={<ImpactFounder />}
          />
          <Route path="/events/impact-org-ticket" element={<ImpactOrg />} />
          <Route
            path="/events/payment-sucessful"
            element={<PaymentSuccessful />}
          />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-spc" element={<Contact />} />
          <Route path="/email-newsletter" element={<Emails />} />
          <Route path="/thankYou" element={<ThankYou />} />
        </Routes>
      </Layout>
    </>
  );
};

export default GeneralRoute;
