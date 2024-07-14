import RootLayout from "./pages/root_layout/root-layout";
import Home from "./pages/home/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import data from "./data/data.json";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          if (!localStorage.getItem("frontend_test-data")) {
            localStorage.setItem("frontend_test-data", JSON.stringify(data));
          }

          return JSON.parse(localStorage.getItem("frontend_test-data"));
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
