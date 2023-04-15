import React from "react";
import "./home.scss";
import { Constantce } from "app/feature/utils";
// import {
//   Translate,
//   translate,
//   FlipCardFull,
//   Row,
//   Col,
//   FlipCard,
//   FlipCardBack,
//   FlipCardFront,
// } from "app/components";
// import { useAppDispatch } from "app/feature/redux/hooks";
// import { changelang } from "app/feature/redux/slice/language";
const Home = () => {
  // const distpatch = useAppDispatch();
  return (
    <div className="d-flex w-100 h-100 text-white  flex-column m-0 p-0">
      <section className="banner col-12 row m-0 d-flex justify-content-start align-items-center ">
        <div className="  col-12 col-md-6" style={{ height: "auto" }}>
          <img
            className="col-3 col-md-5 rounded"
            src={require(`app/assets/images/${Constantce.P_Info.ima}`)}
          />
        </div>
        <div className="d-flex justify-content-start flex-column col-12 col-md-6">
          <h1>
            {" "}
            <strong>MORTEZA AHMADI</strong>{" "}
          </h1>
          <h2>Full stack Developer(MERN ) with front end focus</h2>
          <small>{Constantce.P_Info.Bio}</small>
        </div>
      </section>
      <section className=" d-flex flex-column bg-secoundry py-3 pt-4 ">
        <h1 className="m-2">Work Experience</h1>

        <div className="row px-3 ">
          {Constantce.W_Experience.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 ">
              <div className="d-flex flex-column bg-primary m-2 rounded px-2 py-4">
                <h6>{item.jobTitle}</h6>
                <div className="d-flex mx-2 flex-column">
                  <h6>{item.company}</h6>
                  <div className="d-flex">
                    <small>{item.startDate}</small>-
                    <small>{item.endDate}</small>
                  </div>
                  <small>{item.description}</small>
                  <div className="row">
                    {item.tools.map((tool) => (
                      <strong className=" col">
                        <small className="text-danger">{tool}</small>
                      </strong>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className=" flex-column card bg-primary col-3 p-4 m-1  item-center ">
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
        </div> */}
      </section>
    </div>
  );
};

export default Home;
{
  /* <button
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
</button> */
}
