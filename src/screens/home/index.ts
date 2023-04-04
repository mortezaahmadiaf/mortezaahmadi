import React, { lazy } from "react";

const Home = lazy(() => import("./home"));
const homeLoader = async (e) => {
  return e;
};
export { Home, homeLoader };
