import React from "react";
import "./home.scss";
import { Constantce } from "app/feature/utils";
import {
  Translate,
  translate,
  FlipCardFull,
  Row,
  Col,
  FlipCard,
  FlipCardBack,
  FlipCardFront,
} from "app/components";
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
        <Col col={12}>
          <Row>
            <FlipCard>
              <FlipCardFront>
                <div className="bg-primary   m-0 p-0 ">
                  <img
                    className="bg-primary"
                    style={{ width: 160, height: 220 }}
                    src={require(`app/assets/images/${Constantce.P_Info.ima}`)}
                  />
                </div>
              </FlipCardFront>
              <FlipCardBack>
                {" "}
                <div className="flex-column bg-primary item-center text-dark  p-0 m-0">
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
              </FlipCardBack>
            </FlipCard>
          </Row>
        </Col>
      </section>
    </div>
  );
};

export default Home;
