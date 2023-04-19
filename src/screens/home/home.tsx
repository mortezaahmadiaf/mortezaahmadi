import React from "react";
import "./home.scss";
import { Constantce } from "app/feature/utils";

// import { MyApp } from "./home-component";
const Home = () => {
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
            <strong>MORTEZA AHMADI</strong>
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
                  <div className="row ">
                    {item.tools.map((tool) => (
                      <strong className="col border-end">
                        <small className="">{tool}</small>
                      </strong>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-sm-12 col-md-7">
            <h1 className="m-1">Education</h1>
            <table className="col-12 m-3">
              <thead>
                <tr>
                  <th>Field</th> <th>Degree</th> <th>University</th>
                  <th>Start Date</th> <th>End Date</th> <th>Degree</th>{" "}
                  <th>Grad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Constantce.Edu_Info.field}</td>
                  <td>{Constantce.Edu_Info.degree}</td>
                  <td>{Constantce.Edu_Info.university}</td>
                  <td>{Constantce.Edu_Info.startDate}</td>
                  <td>{Constantce.Edu_Info.endDate}</td>
                  <td>{Constantce.Edu_Info.degree}</td>
                  <td>{Constantce.Edu_Info.grad}</td>
                </tr>
              </tbody>
              <div>{Constantce.Edu_Info.description}</div>
            </table>
          </div>

          <div className="col-12 col-sm-12 col-md-7">
            <table className="col-12 m-3">
              <thead>
                <tr>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Constantce.LINKS.git}</td>
                </tr>
                <tr>
                  <td>{Constantce.LINKS.linkedin}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <MyApp /> */}
      </section>
    </div>
  );
};

export default Home;
