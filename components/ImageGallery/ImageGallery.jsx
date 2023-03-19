import { useState } from "react";
import ema1 from "../../public/Ema1.jpeg";
import ema2 from "../../public/Ema2.jpeg";
import ema4 from "../../public/Ema4.jpeg";
import ema5 from "../../public/Ema5.jpeg";
import ema6 from "../../public/Ema6.jpeg";
import ema7 from "../../public/Ema7.jpeg";
import ema8 from "../../public/Ema8.jpeg";
import ema9 from "../../public/Ema9.jpeg";
import ema10 from "../../public/Ema10.jpeg";
import ema11 from "../../public/Ema11.jpeg";
import ema12 from "../../public/Ema12.jpeg";
import ema13 from "../../public/Ema13.jpeg";
import ema14 from "../../public/Ema14.jpeg";
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    {
      src: ema1,
      alt: "First Selfie",
    },
    {
      src: ema2,
      alt: "Budapest Selfie",
    },

    {
      src: ema4,
      alt: "Basilica",
    },
    {
      src: ema5,
      alt: "Budapest Ferris Selfie",
    },
    {
      src: ema6,
      alt: "Budapest Ferris",
    },
    {
      src: ema7,
      alt: "New York Cafe Selfie",
    },
    {
      src: ema8,
      alt: "Fisherman Bastion",
    },
    {
      src: ema9,
      alt: "Budapest Parliament",
    },
    {
      src: ema10,
      alt: "Graz",
    },
    {
      src: ema11,
      alt: "Graz Selfie",
    },
    {
      src: ema12,
      alt: "Graz",
    },
    {
      src: ema13,
      alt: "Scary Ema",
    },
    {
      src: ema14,
      alt: "Maribor Selfie",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };
  return (
    <div
      className={
        selectedImage === null
          ? "grid grid-cols-3 animation-fade delay-300"
          : "w-full h-5/6 animation-fade delay-300"
      }
    >
      {images.map((image, index) => (
        <div key={index} className="">
          {selectedImage === null && (
            <Image
            src={image.src}
            alt={image.alt}
            className="h-full"
            onClick={() => handleImageClick(index)}
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
          )}
          {selectedImage === index && (
            <div
              className=" p-4 w-full h-5/6 grid grid-cols-2 "
              onClick={() => setSelectedImage(null)}
            >
              <h2 className="text-3xl text-center m-4 font-antonio flex items-center justify-center">
                {images[index].alt}
              </h2>

              <Image
                src={images[index].src}
                alt={images[index].alt}
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
