import React from "react";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";

import MeloVibePage from "./pages/Melovibe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MeloVibePage />,
      },
     
    ],
  },
]);
