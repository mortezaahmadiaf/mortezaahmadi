import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAppSelector } from "app/feature/redux/hooks";

const Spinner = () => {
  return <div>loading...</div>;
};

export const App = () => {
  const lan = useAppSelector((state) => state.language);
  useEffect(() => {
    document.querySelector("html").setAttribute("dir", lan.direction);
    document.querySelector("html").setAttribute("lang", lan.name);
    document.querySelector("body").setAttribute("class", lan.font);
  }, [lan]);
  return (
    <div className={`d-flex w-100 h-100 flex-column`}>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </div>
  );
};
