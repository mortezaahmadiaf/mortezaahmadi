import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const Spinner = () => {
  return <div>loading...</div>;
};

export const App = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="w-100 d-flex justify-content-center align-items-center text-primary"
    >
      COMING SOON ...
    </div>
  );
  // return <RouterProvider router={router} fallbackElement={<Spinner />} />;
};
