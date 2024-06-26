import HomePage from "./pages/HomePage";
import AfterSearchPage from "./pages/AfterSearchPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <HomePage/>
  }

]);

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
