import { NavLink } from "react-router-dom";
import "./CustomButton.css";

const CustomButton = ({ text, link, type }) => {
  return (
    <NavLink to={link} className={"custom-button-" + type}>
      {text}
    </NavLink>
  );
};

export default CustomButton;
