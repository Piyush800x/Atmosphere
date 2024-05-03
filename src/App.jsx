import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {Router, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Summary from "./components/Summary";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <HomePage/>
  }, 

]);

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
