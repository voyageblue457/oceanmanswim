import React from "react";

const ShopSection = () => {
  const images = [
    {
      src: "/shop/oceanman-swimsuit-mexico.jpg",
      alt: "oceanman-swimsuit-mexico",
    },
    {
      src: "/shop/shop-image-2-1.jpg",
      alt: "shop-image-2-1",
    },
    {
      src: "/shop/bali-sweat-woman.jpg",
      alt: "bali-sweat-woman",
    },
    {
      src: "/shop/icon-sweatshirt-1.jpg",
      alt: "icon-sweatshirt-1",
    },
    {
      src: "/shop/hodie-poncho.jpg",
      alt: "hodie-poncho",
    },
  ];
  return (
    <section className="relative pt-10">
      <div className="absolute inset-0 bg-[#0b1d3b] z-0"></div>

      <div className="  relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
            OCEANMAN COACHES
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            _ Your journey starts today _
          </p>
        </div>
      </div>

      <div className="px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {images.map((image) => (
            <div key={image.alt} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
