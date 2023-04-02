import React from "react";
import { Link, Outlet } from "react-router-dom";
import { urls } from "app/feature/routes";
import { useTranslation } from "react-i18next";
import { changelang } from "app/feature/redux/slice/language";
import { useAppSelector } from "app/feature/redux/hooks";
import { useDispatch } from "react-redux";
import { Translate, translate } from "app/components";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column">
      <div>home</div>
      <button
        onClick={() => {
          dispatch(changelang("fa"));
        }}
      >
        fa
      </button>
      <button
        onClick={() => {
          dispatch(changelang("en"));
        }}
      >
        en
      </button>
      <Link to={urls.about_us} about="test">
        go to about us
      </Link>
      {translate("test")}
      <Translate id="test" />
      <img src={require("app/assets/images/morteza.jpg")} alt="" />
    </div>
  );
};

export default Home;
