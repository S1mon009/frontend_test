// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import RootLayout from "./pages/root-layout";
import Home from "./pages/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import data from "./data/data.json";

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
