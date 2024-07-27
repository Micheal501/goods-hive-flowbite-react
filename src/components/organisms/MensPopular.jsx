import { Card } from "flowbite-react";
import images from "../../../public/assets/img/images";
import { MENS_POPULAR_THEME } from "../../config/MENS_POPULAR_THEME";

const MensPopular = () => {
  return (
    <>
      <div className="mx-6 flex gap-6">
        <Card
          theme={MENS_POPULAR_THEME}
          imgAlt="Mens Shirts"
          imgSrc={images.mensPopularShirts}
        >
          <h5 className="text-[16px] tracking-tight font-semibold font-roboto">
            Shirts
          </h5>
        </Card>
        <Card
          theme={MENS_POPULAR_THEME}
          imgAlt="Mens Shoes"
          imgSrc={images.mensPopularShoes}
        >
          <h5 className="text-[16px] tracking-tight font-semibold font-roboto">
            Shoes
          </h5>
        </Card>
        <Card
          theme={MENS_POPULAR_THEME}
          imgAlt="Mens Watches"
          imgSrc={images.mensPopularWatches}
        >
          <h5 className="text-[16px] tracking-tight font-semibold font-roboto">
            Watches
          </h5>
        </Card>
      </div>
    </>
  );
};

export default MensPopular;
