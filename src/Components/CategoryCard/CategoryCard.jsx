import Css from "./Category.module.css";

const CategoryCard = () => {
  return (
    <div className={Css.CategoryArea}>
      <div className={Css.CarDetailsArea}>{children}</div>
    </div>
  );
};

export default CategoryCard;
