import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import MomentsPage from "./pages/MomentsPage";
import GiftsPage from "./pages/GiftsPage";
import ValentinePage from "./pages/ValentinePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: '/moments', element: <MomentsPage />},
      {path: '/gifts', element: <GiftsPage />},
      {path: '/valentine', element: <ValentinePage />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);