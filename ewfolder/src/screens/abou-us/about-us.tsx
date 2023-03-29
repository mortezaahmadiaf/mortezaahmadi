import React from "react";
import { Link } from "react-router-dom";
import { urls } from "app/feature/routes";

import type { RootState } from "app/feature/redux";
import { useSelector, useDispatch } from "react-redux";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div></div>
    </div>
  );
}
const AboutUs = () => {
  return (
    <div className="d-flex flex-column">
      <div>AboutUs</div>
      <Link to={urls.home}>go to home</Link>

      <Counter />
    </div>
  );
};
export default AboutUs;
