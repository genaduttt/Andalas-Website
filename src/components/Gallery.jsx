import React from "react";

const Gallery = () => {
  const images = [
    "src/assets/foto1.jpg",
    "src/assets/foto4.jpg",
    "src/assets/foto5.jpg",
    "src/assets/foto1.jpg",
    "src/assets/gallery1.jpg",
    "src/assets/gallery3.jpg",
    "src/assets/gallery5.jpg",
    "src/assets/gallery6.jpg",
    "src/assets/gallery7.jpg",
    "src/assets/gallery9.jpg",
    "src/assets/gallery10.jpg",
    "src/assets/gallery1.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center ">
      <h1 className="text-4xl font-bold mt-20 mb-20">
        Destinasi | Tempat Bersejarah | Gunung{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={image} // Path gambar yang sudah benar
              alt={`Image ${index + 1}`}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
