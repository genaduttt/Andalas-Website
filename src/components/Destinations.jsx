import React from "react";

import ampera from "/src/assets/sejarah/JembatanAmpera.jpg";
import bukitgayo from "/src/assets/gunung/bukitgayo.jpg";
import gunungkerinci from "/src/assets/gunung/gunungkerinci.jpg";
import pantaitanjungtinggi from "/src/assets/gunung/pantaitanjungtinggi.jpg";
import waykambas from "/src/assets/tempatwisata/waykambas.jpg";

const Destinations = () => {
  return (
    <section className=" px-4 flex flex-col items-center mt-20 bg-gray-400">
      <h2 className="mb-4">Sumatera inklusif</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        <div className="col-span-2 md:col-span-3 md:row-span-2">
          <img
            src={ampera}
            alt="borabora1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={bukitgayo}
            alt="borabora2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={waykambas}
            alt="maldives1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={gunungkerinci}
            alt="maldives2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={pantaitanjungtinggi}
            alt="maldives1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
