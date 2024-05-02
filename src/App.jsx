import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {Router, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Summary from "./components/Summary";

function App() {

  return (
    <div>
      <Router>
        <Route exact path="/" Component={HomePage}/>
      </Router>
      <Summary/>
    </div>
  );
}

export default App;
