import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Game from "./pages/Game";
import History from "./pages/History";
import Landing from "./pages/Landing";
import { Navigate } from "react-router-dom";
import Player from "./pages/Player";
import AddPlayerFormPage from "./pages/AddPlayerFormPage";

function App() {
  const token = localStorage.getItem("zxc9238[0]-2Token");
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />

        <Route path="/login" exact element={<Login />} />

        {/* <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} /> */}
        <Route path="/home">
          <Route index exact element={<Home />} />
          <Route path="game/:id" exact element={<Game />} />
          <Route path="history" exact element={<History />} />
          <Route path="players" exact element={<Player />} />
          <Route path="players/add-player" exact element={<AddPlayerFormPage />} />

          <Route path="leaderboard" exact element={<Leaderboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
