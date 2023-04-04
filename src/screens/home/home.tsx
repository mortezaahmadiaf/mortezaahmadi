import React from "react";
import "./home.scss";
import { Constantce } from "app/feature/utils";
import { Translate, translate } from "app/components";
import { useAppDispatch } from "app/feature/redux/hooks";
import { changelang } from "app/feature/redux/slice/language";
const Home = () => {
  const distpatch = useAppDispatch();
  return (
    <div className="d-flex w-100 h-100 text-white  flex-column m-0 p-0">
      <section className="banner col-12   item-center ">
        <button
          onClick={() => distpatch(changelang("fa"))}
          className="btn btn-primary text white mx-1"
        >
          fa
        </button>
        <button
          onClick={() => distpatch(changelang("en"))}
          className="btn btn-secoundry text white mx-1"
        >
          en
        </button>
      </section>
      <section className=" item-center m-0 p-0">
        <div className=" flex-column card bg-primary col-3 p-4 m-1  item-center ">
          <img
            style={{ width: 160, height: 220 }}
            src={require(`app/assets/images/${Constantce.P_Info.ima}`)}
          />
          <Translate
            id="personalInfo.firstName"
            param={{ firstName: Constantce.P_Info.F_Name }}
          />
          <Translate
            id="personalInfo.lastName"
            param={{ lastName: Constantce.P_Info.L_Name }}
          />

          <p className="mt-1">
            <small>{Constantce.P_Info.Bio}</small>{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
