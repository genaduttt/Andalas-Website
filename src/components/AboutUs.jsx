import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className=" bg-sky-600-full py-20 px-20 mt-10 justify-center content-center">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                Selamat Datang di Andalas Travel!
              </h1>
              <p className="text-lg text-gray-700">
                Kami adalah sumber informasi terpercaya yang khusus menyajikan
                konten tentang destinasi wisata di pulau Sumatera. Dengan
                pengetahuan yang mendalam tentang keindahan dan alam kekayaan
                Sumatera, kami bertekad untuk membantu Anda menemukan yang
                terbaik destinasi wisata di pulau ini. Kami menawarkan
                komprehensif informasi tentang berbagai destinasi menarik di
                Sumatera, wisata alam yang menakjubkan seperti gunung, danau,
                pantai, hutan tropis dan taman nasional yang melimpah dengan
                flora dan fauna yang unik. Selain itu kami juga menyediakan
                informasi tentang budaya pulau, sejarah, kuliner spesialisasi,
                dan acara khusus, sehingga Anda dapat merasakan pengalaman lokal
                kehidupan dan keajaiban budaya Sumatera. Apakah Anda siap untuk
                temukan keajaiban alam dan keindahan budaya pulau ini Sumatera?
                Dengan Andalas Travel, Anda akan menemukan hal yang luar biasa
                perjalanan, tujuan yang menakjubkan, dan tak terlupakan
                pengalaman. Selamat menjelajahi Sumatera bersama kami!
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[80%] mx-auto"
              src="src/assets/potoaboutus.jpg"
              alt="team img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
