import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Css from "./Navbar.module.css";

// Redux Selectors
import { categorySelector } from "../../redux/category";
import { vehicleSelectors } from "../../redux/vehicle";

const Navbar = () => {
  const selectSelectedCategory = useSelector(
    categorySelector.selectSelectedCategory
  );
  const selectSelectedVehicle = useSelector(
    vehicleSelectors.selectSelectedVehicle
  );

  return (
    <nav className={Css.Navbar}>
      <ul className={Css.List}>
        <li className={Css.Item}>
          <Link className={Css.Link} to="/">
            Home
          </Link>
        </li>
        {selectSelectedCategory && (
          <li className={Css.Item}>
            <Link className={Css.Link} to="/">
              {selectSelectedCategory.name}
            </Link>
          </li>
        )}
        {selectSelectedVehicle && (
          <li className={Css.Item}>
            <Link className={Css.Link} to="/">
              selectSelectedVehicle.model
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
