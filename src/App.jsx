import LandingPage from "./Pages/LandingPage/LandingPage";
import BrainStormingPage from "./Pages/BrainStormingPage/BrainStormingPage";
import VotingPage from "./Pages/VotingPage/VotingPage";
import Instructions from "./Pages/InstructionsPage/Instructions";
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
        <Route path="/home" element={<LandingPage />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/brain-storming" element={<BrainStormingPage />} />
        <Route path="/voting" element={<VotingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
