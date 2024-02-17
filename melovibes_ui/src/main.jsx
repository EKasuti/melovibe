import React from "react";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/melovibe",
        element: <MeloVibePage />,
      },
     
    ],
  },
]);
