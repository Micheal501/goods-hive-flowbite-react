/* eslint-disable react/prop-types */
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavLink = ({ navbarUrl, navbarTitle, isActive }) => {
  return (
    <>
      <Navbar.Link
        as={Link}
        to={navbarUrl}
        active={isActive}
      >
        {navbarTitle}
      </Navbar.Link>
    </>
  );
};

export default NavLink;
