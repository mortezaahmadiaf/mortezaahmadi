import React from "react";
import { Link, Outlet } from "react-router-dom";
import { urls } from "app/feature/routes";
import { useTranslation } from "react-i18next";
import { changelang } from "app/feature/redux/slice/language";
import { useAppSelector } from "app/feature/hooks";
import { translate, Translate } from "app/components";
import { useDispatch } from "react-redux";
const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const test = useAppSelector((state) => state.language);
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
      {/* <Link to={urls.about_us} about="test">
        go to about us
      </Link> */}
      {translate("test")}
      <Translate key="test" />
      <img src="assets/images/morteza.jpg" alt="morteza" />
    </div>
  );
};

export default Home;
