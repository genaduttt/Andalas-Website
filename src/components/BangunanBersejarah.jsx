import React, { useState } from "react";
import { data } from "./SejarahData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function BangunanBersejarah() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = data[currentIndex].img;
  const currentMap = data[currentIndex].maps;
  const currentTitle = data[currentIndex].title;
  const currentDesc = data[currentIndex].desc;

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-400">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row">
        <div className="flex flex-col md:w-1/2">
          <div className="ml-4 mb-0 md:ml-0" id="img">
            <img
              className="w-full h-auto max-h-[500px] object-cover mt-2 mb-2 md:mt-20 md:mb-10"
              src={currentImage}
              alt="index"
            />
          </div>
          <div className="ml-4 md:ml-0 flex flex-col" id="slider">
            <h2 className="text-center mb-10" id="title">
              {currentTitle}
            </h2>
            <div className="relative flex items-center">
              <MdChevronLeft
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={slideLeft}
                size={40}
              />
              <div className="w-full md:w-[1100px] h-[100px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {data.map((item, index) => (
                  <img
                    key={index}
                    className={`w-[90px] h-[100px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 ${
                      index === currentIndex ? "active" : ""
                    }`}
                    src={item.img}
                    alt="/"
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
              <MdChevronRight
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={slideRight}
                size={40}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 ml-4 md:ml-0" id="maps">
          <div className="ml-4 mb-4 md:ml-0 h-[500px]">{currentMap}</div>
          <p className="text-center mt-10 text-white ml-10">{currentDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default BangunanBersejarah;
