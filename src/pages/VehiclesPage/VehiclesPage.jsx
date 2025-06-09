import { useSelector } from "react-redux";
import { categorySelector } from "../../redux/category";
import { useNavigate } from "react-router-dom";

import Css from "./VehiclesPage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect } from "react";

const VehiclePage = () => {
  const navigate = useNavigate();
  const selectSelectedCategory = useSelector(
    categorySelector.selectSelectedCategory
  );
  if (selectSelectedCategory === null) {
    navigate("/", {
      replace: false,
      state: { error: "Please select a category first." },
    });
  }

  useEffect(() => {
    if (selectSelectedCategory === null) {
      navigate("/", {
        replace: false,
        state: { error: "Please select a category first." },
      });
    }
  }, [selectSelectedCategory, navigate]);

  return (
    <div className={Css.Page}>
      <Navbar />
    </div>
  );
};

export default VehiclePage;
