import L from "leaflet";
import "leaflet.markercluster";

const initializeMap = async (mapRef, mapConfig) => {
  if (mapRef.map) {
    mapRef.map.remove();
  }

  const map = L.map(mapRef, mapConfig.config);
  mapRef.map = map;

  return {
    map: map,
    leaflet: L,
  };
};

export { initializeMap };
