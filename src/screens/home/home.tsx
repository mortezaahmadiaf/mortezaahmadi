import React from "react";
import "./home.scss";
const Home = () => {
  return (
    <div className="d-flex w-100 h-100 text-white  flex-column bg-primary">
      <section className="banner d-flex justify-content-center align-items-center">
        hello
      </section>
      <section className=" d-flex justify-content-center align-items-center">
        <img src={require("app/assets/images/banner.jpg")} />
      </section>
    </div>
  );
};

export default Home;
