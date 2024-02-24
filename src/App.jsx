import { Route, Routes } from "react-router-dom";
import GeneralRoute from "./GeneralRoute";
import ForumRoute from "./ForumRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<GeneralRoute />} />
        <Route path="/forum/*" element={<ForumRoute />} />
      </Routes>
    </>
  );
}

export default App;
