/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

const CardProduct = ({
  cardTheme,
  imageDescription,
  imagesUrl,
  imagesTitle,
}) => {
  return (
    <>
      <Card
        theme={cardTheme}
        imgAlt={imageDescription}
        imgSrc={imagesUrl}
      >
        <h5 className="text-[16px] tracking-tight font-semibold font-roboto">
          {imagesTitle}
        </h5>
      </Card>
    </>
  );
};

export default CardProduct;
