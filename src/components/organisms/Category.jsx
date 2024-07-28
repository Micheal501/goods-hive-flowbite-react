/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Category = ({ imageTitle, imageUrl, imageDescription, categoryUrl }) => {
  return (
    <>
      <Link
        to={categoryUrl}
        className="flex justify-around items-center my-6"
      >
        <h1>{imageTitle}</h1>
        <img
          src={imageUrl}
          alt={imageDescription}
          className="h-28"
        />
      </Link>
    </>
  );
};

export default Category;
