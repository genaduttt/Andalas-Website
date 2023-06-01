import React, { useEffect } from "react";

const MapQuest = ({
  height,
  width,
  center,
  tileLayer,
  zoom,
  apiKey,
  markers,
}) => {
  useEffect(() => {
    window.L.mapquest.key = apiKey;

    const map = window.L.mapquest.map("map", {
      center,
      layers: window.L.mapquest.tileLayer(tileLayer),
      zoom,
    });

    map.addControl(window.L.mapquest.control());

    markers.forEach((marker) => {
      const { latitude, longitude, name } = marker;
      window.L.mapquest
        .textMarker([latitude, longitude], {
          text: name,
          position: "right",
          draggable: false,
          clickable: true,
        })
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ width, height }}>
      <p>Lokasi Wisata Sumatera</p>
    </div>
  );
};

export default MapQuest;
