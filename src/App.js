import { Routes, Route,} from "react-router-dom";
import Home from "./components/Home";
import {history} from "./history";
import Login from "./components/Login";
import Workplan from "./components/Workplan/workPlan";

import './App.css';

function App() {
  return (
    <Routes history={history}>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workplan" element={<Workplan />}/>
      </Routes>
   
  );
}

export default App;
