import ArticlePage from "./pages/ArticlePage";
import CatalogPage from "./pages/CatalogPage";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
console.log("hola");
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="article" element={<ArticlePage />} />
        <Route path="catalogo" element={<CatalogPage />} />
        <Route path="user" element={<UserPage />} />
        <Route></Route>
      </Routes>
    </div>
  );

  // const [page, setPage] = useState("articles");

  // return (
  //   <div className="App">
  //     <nav>
  //       <button onClick={() => setPage("catalogo")}>Catalogo</button>
  //       <button onClick={() => setPage("articles")}>Articulos</button>
  //       <button onClick={() => setPage("usuario")}>Usuario</button>
  //     </nav>
  //     {page === "articles" && <ArticlePage />}
  //     {page === "catalogo" && <CatalogPage />}
  //     {page === "usuario" && <UserPage />}
  //   </div>
  // );
}

export default App;
