import React, { useState, useEffect } from "react";
import bgVideo from "../assets/headercinematic.mp4";
import MapQuest from "../MapQuest";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [latitude, setLat] = useState(-0.7893);
  const [longitude, setLng] = useState(102.4477);

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Check the query and navigate to the appropriate page
    if (query.toLowerCase() === "gunung") {
      navigate("/destinasi/gunung");
    } else if (query.toLowerCase() === "tempat wisata") {
      navigate("/destinasi/tempatwisata");
    } else if (query.toLowerCase() === "bangunan bersejarah") {
      navigate("/destinasi/bangunanbersejarah");
    }
  };

  useEffect(() => {
    // Update the latitude and longitude values
    setLat(-0.7893);
    setLng(102.4477);
  }, []);

  return (
    <div>
      <header className="w-screen h-screen relative">
        <video
          src={bgVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
          <h1 className="text-white mb-2">KUNJUNGI SUMATERA</h1>
          <h2 className="text-white mb-4">
            Persiapkan diri Anda untuk terpesona dengan keindahan Sumatera.
          </h2>
          <form
            action=""
            className="flex border p-1 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto"
          >
            <input
              type="text"
              placeholder="Cari Destinasi"
              className="grow bg-transparent outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          <button
            type="button"
            onClick={handleSearch}
            className="btn mt-4 hover:bg-gray-800 hover:text-white w-22 mx-auto pr-4 whitespace-nowrap"
          >
            Telusuri
          </button>
          <a className="text-white mt-10 hover:text-sky-600" href="#Lokasi">
            Lokasi yang tersedia....
          </a>
        </div>
      </header>
      <div id="Lokasi">
        <h1 className="text-center my-10">Lokasi Tersedia</h1>
        <MapQuest
          height="500px"
          width="100%"
          center={[latitude, longitude]}
          tileLayer="map" // Replace with a valid tile layer value
          zoom={5}
          apiKey="3LFtWHcNhWZ5c9UwXq3bgJTzwxOuqUiA"
          markers={[
            { latitude: -1.8524, longitude: 101.2653, name: "Gunung Kerinci" },
            { latitude: -3.5237, longitude: 98.6513, name: "Bukit Gayo" },
            { latitude: -1.6797, longitude: 103.8339, name: "Bukit Khayangan" },
            { latitude: -0.2689, longitude: 100.2356, name: "Danau Maninjau" },
            { latitude: 1.1714, longitude: 103.8258, name: "Ombak Bono" },
            { latitude: 2.6709, longitude: 98.8475, name: "Pulau Samosir" },
            {
              latitude: 2.8616,
              longitude: 98.5049,
              name: "Air Terjun Sipiso-piso",
            },
            { latitude: -0.4487, longitude: 100.4752, name: "Lembah Harau" },
            {
              latitude: -2.4513,
              longitude: 100.7486,
              name: "Pantai Tanjung Tinggi",
            },
            { latitude: 0.3156, longitude: 104.6216, name: "Pantai Lengkuas" },
            { latitude: -3.8006, longitude: 102.263, name: "Pantai Panjang" },
            { latitude: -0.8706, longitude: 100.3584, name: "Pantai Gigi Hiu" },
            { latitude: -5.4515, longitude: 105.2945, name: "Way Belerang" },
            {
              latitude: -3.7518,
              longitude: 102.5831,
              name: "Kawasan Wisata Gunung Dempo",
            },
            { latitude: -4.9734, longitude: 105.6041, name: "Way Kambas" },
            { latitude: 2.6351, longitude: 98.6855, name: "Danau Toba" },
            {
              latitude: 3.5526,
              longitude: 98.2446,
              name: "Hillpark Sibolangit",
            },
            { latitude: -3.6146, longitude: 98.7222, name: "Pulau Kemaro" },
            { latitude: -1.6051, longitude: 103.6133, name: "Jambi Paradise" },
            { latitude: -0.4651, longitude: 100.6174, name: "Danau Singkarak" },
            { latitude: 3.9642, longitude: 97.8258, name: "Tangkahan" },
            { latitude: 1.2905, longitude: 97.6215, name: "Pulau Nias" },
            {
              latitude: 3.2819,
              longitude: 98.6164,
              name: "Air Terjun Sigura-Gura",
            },
            { latitude: 4.5079, longitude: 96.9652, name: "Danau Laut Tawar" },
            { latitude: -2.0597, longitude: 99.754, name: "Goa Sarang" },
            { latitude: 0.7752, longitude: 104.5833, name: "Pulau Keluang" },
            { latitude: 0.8841, longitude: 100.3658, name: "Kilometer Nol" },
            { latitude: 0.4396, longitude: 104.3257, name: "Pulau Tikus" },
            { latitude: -2.2224, longitude: 104.157, name: "Pulau Jemur" },
            {
              latitude: -1.1463,
              longitude: 100.371,
              name: "Pantai Air Manis (Malin Kundang)",
            },
            {
              latitude: -5.7521,
              longitude: 105.4164,
              name: "Pantai Teluk Kiluan",
            },
            {
              latitude: -2.3882,
              longitude: 101.9532,
              name: "Pantai Tanjung Setia",
            },
            {
              latitude: 5.565,
              longitude: 95.3293,
              name: "Memorial Museum Tsunami",
            },
            {
              latitude: 3.5881,
              longitude: 98.6782,
              name: "Tjong A Fie Mansion",
            },
            {
              latitude: 0.8479,
              longitude: 100.36,
              name: "Benteng Marlborough",
            },
            { latitude: 3.6364, longitude: 98.6626, name: "Japanese Tunnel" },
            {
              latitude: 5.554,
              longitude: 95.3267,
              name: "Masjid Raya Baiturrahman",
            },
            {
              latitude: -0.4579,
              longitude: 100.5858,
              name: "Istano Basa Pagaruyung",
            },
            {
              latitude: -5.4084,
              longitude: 105.2644,
              name: "Taman Alam Lumbini",
            },
            {
              latitude: -3.7915,
              longitude: 102.2479,
              name: "Taman Kambang Iwak",
            },
            {
              latitude: 3.5904,
              longitude: 98.6862,
              name: "Graha Bunda Maria Annai Velangkanni",
            },
            { latitude: -2.9931, longitude: 104.74, name: "Jembatan Ampera" },
            {
              latitude: -1.5913,
              longitude: 103.6536,
              name: "Candi Muaro Jambi",
            },
            {
              latitude: -1.0626,
              longitude: 103.3706,
              name: "Candi Muara Takus",
            },
            {
              latitude: 0.3113,
              longitude: 101.1861,
              name: "Istana Siak Sri Inderapura",
            },
            {
              latitude: 5.568,
              longitude: 95.3467,
              name: "Masjid Raya Al Mashun",
            },
            {
              latitude: 5.5488,
              longitude: 95.3583,
              name: "Vihara Gunung Timur",
            },
            {
              latitude: 3.5936,
              longitude: 98.6667,
              name: "Rahmat International Wildlife Museum and Gallery",
            },
            {
              latitude: 3.6539,
              longitude: 98.6647,
              name: "Museum Cut Nyak Dien",
            },
            {
              latitude: 5.5431,
              longitude: 95.317,
              name: "Benteng Iskandar Muda dan Benteng Indrapatra",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
