import images from "../../../public/assets/img/images";

const Brands = () => {
  const brandData = [
    images.nike,
    images.puma,
    images.dior,
    images.chanel,
    images.prada,
    images.rolex,
  ];

  return (
    <>
      <div className="mb-12">
        <div className="text-center mt-12">
          <h2 className="text-xl font-oleoScripts">Popular Brand</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center mx-6 gap-2">
          {brandData.map((brand) => (
            <img
              key={brand}
              src={brand}
              alt="brand"
              className="w-24 h-24"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
