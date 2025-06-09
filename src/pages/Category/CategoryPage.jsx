import Navbar from "../../Components/Navbar/Navbar";
import Css from "./CategoryPage.module.css";

import { useSelector } from "react-redux";
import { categorySelector } from "../../redux/category";

const CategoryPage = () => {
  const selectCategories = useSelector(categorySelector.selectCategories);
  return (
    <div className={Css.Page}>
      <Navbar />
      <div className={Css.Content}>
        <div className={Css.Header}>
          <p className={Css.Description}>Please select one of the categories</p>
          <h1 className={Css.Title}>Category</h1>
        </div>
        <ul
          className={Css.CategoryList}
          onWheel={function (e) {
            const container = e.currentTarget;
            container.scrollLeft += e.deltaY; // deltaY ile yumuşak yatay scroll
          }}
        >
          {selectCategories &&
            selectCategories.map(({ id, name }, index) => (
              <CategoryCard key={index} id={id} name={name} />
            ))}
        </ul>
      </div>
    </div>
  );
};

const CategoryCard = ({ id, name }) => {
  return (
    <li className={Css.CategoryCard}>
      <div className={Css.CardDetail}>
        <p className={Css.CardDescription}>#{id}</p>
        <h2 className={Css.CardTitle}>{name}</h2>
      </div>
      <div className={Css.CardImage}>
        <img src="#" alt="Category" className={Css.Image} />
      </div>
    </li>
  );
};

export default CategoryPage;
