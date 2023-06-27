import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ListaAnimes from "./pages/ListaAnimes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ListaAnimes />,
    },
    {
      path: "/buscar",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
