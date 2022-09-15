import { Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/CharacterPages";
import EpisodePage from "./pages/EpisodePages";
import LocationPage from "./pages/LocationPage";
import Navbar from "./components/Navbar/Navbar";
import DetailCard from "./pages/DetailCard";
import { LikeContextProvider } from "./components/context/LikeContext";

function App() {
  return (
    <div className="App">
      <LikeContextProvider>
        <Navbar />
        <Routes>
          <Route path="character/:characterId" element={<DetailCard />} />
          <Route path="character" element={<CharacterPage />} />
          <Route path="episode" element={<EpisodePage />} />
          <Route path="location" element={<LocationPage />} />
          <Route></Route>
        </Routes>
      </LikeContextProvider>
    </div>
  );
}

export default App;
