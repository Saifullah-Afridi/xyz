import { NavLink } from "react-router-dom";
import NavBarButton from "./NavBarButton";

const NavigationMenu = ({ handleDrawer = () => {}, direction }) => {
  return (
    <>
      <ul
        className={`flex ${direction} ${
          direction === "flex-col" ? "space-y-1" : "space-x-6"
        }  p-2`}
      >
        <li>
          <NavLink
            onClick={() => {
              handleDrawer();
            }}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              handleDrawer();
            }}
            to="/all-products"
          >
            All Products
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              handleDrawer();
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {direction === "flex-col" ? <NavBarButton /> : null}
    </>
  );
};

export default NavigationMenu;
