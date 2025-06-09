import PropTypes from "prop-types";
import Css from "./CarConfigurator.module.css";

const CarConfigurator = ({ children }) => {
  return (
    <div className={Css.CarConfigurator}>
      <img src="#" alt="Car Model Platform Image" className={Css.CarImg} />
      <div className={Css.CarDetailsArea}>{children}</div>
    </div>
  );
};
export default CarConfigurator;

const CarConfiguratorPropTypes = {
  children: PropTypes.node.isRequired,
};
CarConfigurator.propTypes = CarConfiguratorPropTypes;
CarConfigurator.defaultProps = {
  children: null,
};
