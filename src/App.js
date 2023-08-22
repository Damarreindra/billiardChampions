import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Game from "./pages/Game";


function App() {
 
  return (
   <Router>
    <Routes>
      <Route path="/" exact/>
      <Route path="/game" exact element={<Game/>}/>
      <Route path="/leaderboard" exact element={<Leaderboard/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/home" exact element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
