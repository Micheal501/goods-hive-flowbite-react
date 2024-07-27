import { Navbar } from "flowbite-react";
import NavLinkList from "../molecules/NavLinkList";
import { useLocation } from "react-router-dom";
import { navbarTheme } from "../../config/NAVBAR_THEME";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Navbar
        fluid
        rounded
        theme={navbarTheme}
      >
        <Navbar.Brand href="/">
          <span className=" text-xl font-oleoScripts text-[#BEA20B]">
            goods hive
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLinkList
            navbarUrl={"/"}
            navbarTitle={"Home"}
            isActive={currentPath === "/"}
          />
          <NavLinkList
            navbarUrl={"/category"}
            navbarTitle={"Category"}
            isActive={currentPath === "category"}
          />
          <NavLinkList
            navbarUrl={"/login"}
            navbarTitle={"Login"}
            isActive={currentPath === "login"}
          />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
