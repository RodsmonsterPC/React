import { Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/CharacterPages";
import EpisodePage from "./pages/EpisodePages";
import LocationPage from "./pages/LocationPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="character" element={<CharacterPage />} />
          <Route path="episode" element={<EpisodePage />} />
          <Route path="location" element={<LocationPage />} />
          <Route></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
