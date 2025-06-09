import Navbar from "../../Components/Navbar/Navbar";
import Css from "./CategoryPage.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { categorySelector } from "../../redux/category";

const CategoryPage = () => {
  const selectCategories = useSelector(categorySelector.selectCategories);
  const [selectCategory, setSelectCategory] = useState(null);

  const hoverCard = (category) => setSelectCategory(category);

  return (
    <div className={Css.Page}>
      <Navbar />
      {selectCategory && (
        <div className={Css.HoverCategory}>
          <h1 className={Css.HoverTitle}>{selectCategory.name}</h1>
          <hr className={Css.HoverHr} />
          <img
            src={selectCategory.icon}
            alt="Hover Category"
            className={Css.HoverImage}
          />
        </div>
      )}
      <div className={Css.Content}>
        <div className={Css.Header}>
          <p className={Css.Description}>Please select one of the categories</p>
          <h2 className={Css.Title}>Category</h2>
        </div>
        <ul
          className={Css.CategoryList}
          onWheel={function (e) {
            const container = e.currentTarget;
            container.scrollLeft += e.deltaY; // deltaY ile yumuşak yatay scroll
          }}
        >
          {selectCategories &&
            selectCategories.map(({ id, name, icon }, index) => (
              <CategoryCard
                key={index}
                id={id}
                name={name}
                icon={icon}
                onHover={hoverCard}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

const CategoryCard = ({ id, name, icon, onHover }) => {
  return (
    <li
      className={Css.CategoryCard}
      onMouseOverCapture={() => onHover({ name, icon })}
    >
      <div className={Css.CardDetail}>
        <p className={Css.CardDescription}>#{id}</p>
        <h2 className={Css.CardTitle}>{name}</h2>
      </div>
      <div className={Css.CardImage}>
        <img src={icon} alt="Category" className={Css.Image} />
      </div>
    </li>
  );
};

export default CategoryPage;
