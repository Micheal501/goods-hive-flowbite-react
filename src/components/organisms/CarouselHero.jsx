import { Carousel } from "flowbite-react";
import images from "../../../public/assets/img/images";
import { CAROUSEL_HERO_THEME } from "../../config/CAROUSEL_HERO_THEME";
const CarouselHero = () => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel theme={CAROUSEL_HERO_THEME}>
          <img
            src={images.mensHeroCarousel}
            alt="Mens Fashion Carousel"
          />
          <img
            src={images.womensHeroCarousel}
            alt="Womens Fashion Carousel"
          />
          <img
            src={images.shoesHeroCarousel}
            alt="Shoes Fashion Carousel"
          />
        </Carousel>
      </div>
    </>
  );
};

export default CarouselHero;
