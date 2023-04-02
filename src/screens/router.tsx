import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home, homeLoader } from "./home";
import { urls, basename } from "app/feature/routes";
export const router = createBrowserRouter(
  [
    {
      path: urls.home,
      element: <Home />,
      loader: homeLoader,
    },
  ],
  { basename, hydrationData: {} }
);
