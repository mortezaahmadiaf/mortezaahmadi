import React from "react";
import "./home.scss";
import { Constantce } from "app/feature/utils";

const Home = () => {
  return (
    <div className="d-flex w-100 h-100 text-white  flex-column bg-primary">
      <section className="banner w-100 h-100 d-flex justify-content-center align-items-center">
        test
      </section>
      <section className=" d-flex justify-content-center align-items-center">
        <img
          className="d-flex w-100 h-50"
          src={require("app/assets/images/banner1.jpg")}
        />
      </section>
    </div>
  );
};

export default Home;
