import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Game from "./pages/Game";
import History from "./pages/History";
import Landing from "./pages/Landing";


function App() {
 
  return (
   <Router>
    <Routes>
      <Route path="/" exact element={<Landing/>}/>
      <Route path="/game/:id" exact element={<Game/>}/>
      <Route path="/history" exact element={<History/>}/>
      <Route path="/leaderboard" exact element={<Leaderboard/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/home" exact element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
