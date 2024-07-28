import { Carousel } from "flowbite-react";
import { CAROUSEL_PROMO_THEME } from "../../config/CAROUSEL_PROMO_THEME";
import images from "../../../public/assets/img/images";
const CarouselHero = () => {
  return (
    <>
      <div className="mt-12">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel theme={CAROUSEL_PROMO_THEME}>
            <img
              src={images.shoesWeekSale}
              alt="Mens Fashion Carousel"
            />
            <img
              src={images.womensWeekSale}
              alt="Mens Fashion Carousel"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CarouselHero;
