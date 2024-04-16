import { Route, Routes } from "react-router-dom";
import GeneralRoute from "./GeneralRoute";
import ForumRoute from "./ForumRoute";
import StartupDashboardRoute from "./StartupDashboardRoute";
import Signin from "./pages/Startup/signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<GeneralRoute />} />
        <Route path="/forum/*" element={<ForumRoute />} />
        <Route path="/startup/*" element={<StartupDashboardRoute />} />
        <Route path="/startup-network/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
