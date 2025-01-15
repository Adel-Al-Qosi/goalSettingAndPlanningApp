import LandingPage from "./Pages/LandingPage/LandingPage";
import BrainStormingPage from "./Pages/BrainStormingPage/BrainStormingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/brain-storming" element={<BrainStormingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
