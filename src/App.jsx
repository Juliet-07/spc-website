import { Route, Routes } from "react-router-dom";
import GeneralRoute from "./GeneralRoute";
import ForumRoute from "./ForumRoute";
import StartupDashboardRoute from "./StartupDashboardRoute";
import Signin from "./pages/Startup/signin";
import People from "./pages/people";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<GeneralRoute />} />
        <Route path="/forum/*" element={<ForumRoute />} />
        <Route path="/startup/*" element={<StartupDashboardRoute />} />
        <Route path="/startup-network/signin" element={<Signin />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </>
  );
}

export default App;
