import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/Router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
