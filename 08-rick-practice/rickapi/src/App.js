import { Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/CharacterPages";
import EpisodePage from "./pages/EpisodePages";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="character" element={<CharacterPage />} />
          <Route path="episode" element={<EpisodePage />} />
          {/* <Route path="user" element={<UserPage />} /> */}
          <Route></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
