import { useSelector } from "react-redux";
import { categorySelector } from "../../redux/category";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Css from "./VehiclesPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";

const VehiclePage = () => {
  const navigate = useNavigate();

  const selectSelectedCategory = useSelector(
    categorySelector.selectSelectedCategory
  );

  useEffect(() => {
    console.log("Selected Params:", location.pathname);
  }, [selectSelectedCategory]);

  return (
    <div className={Css.Page}>
      <Navbar />
    </div>
  );
};

export default VehiclePage;
