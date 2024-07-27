/* eslint-disable react/prop-types */
import NavLink from "../atoms/NavLink";
const NavLinkList = ({ navbarUrl, navbarTitle, isActive }) => {
  return (
    <>
      <NavLink
        navbarUrl={navbarUrl}
        navbarTitle={navbarTitle}
        isActive={isActive}
      />
    </>
  );
};

export default NavLinkList;
