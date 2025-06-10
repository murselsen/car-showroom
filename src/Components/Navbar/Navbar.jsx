import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Css from "./Navbar.module.css";

// Dispatch Actions
import { useDispatch } from "react-redux";
// Redux Selectors
import { categorySelector, categoryActions } from "../../redux/category";
import { vehicleActions, vehicleSelectors } from "../../redux/vehicle";

const Navbar = () => {
  const dispatch = useDispatch();
  const category = useSelector(categorySelector.selectSelectedCategory);
  const vehicle = useSelector(vehicleSelectors.selectSelectedVehicle);

  return (
    <nav className={Css.Navbar}>
      <ul className={Css.List}>
        <li
          className={Css.Item}
          onClick={() => {
            dispatch(categoryActions.resetSelectedCategory());
            dispatch(vehicleActions.resetSelectedVehicle());
          }}
        >
          <Link className={Css.Link} to="/" title="Home">
            Home
          </Link>
        </li>

        {category ? (
          <li className={Css.Item}>
            <Link
              className={Css.Link}
              to={"/" + category.name}
              title={category.name}
            >
              {category.name}
            </Link>
          </li>
        ) : null}
        {vehicle ? (
          <li className={Css.Item}>
            <Link className={Css.Link} to={"/"} title={vehicle.model}>
              {vehicle.model}
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
