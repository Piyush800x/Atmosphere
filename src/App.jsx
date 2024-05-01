import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <Router>
        <Route exact path="/" Component={HomePage}/>
      </Router>
    </div>
  );
}

export default App;
