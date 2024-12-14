import { useEffect } from "react";
function GeosearchControl({ setDestination }) {
  const map = useMap();
  const searchControlRef = useRef(null);

  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      autoComplete: true,
      autoCompleteDelay: 250,
      showMarker: false,
      retainZoomLevel: false,
      animateZoom: true,
      autoClose: true,
      searchLabel: "Enter destination",
      keepResult: true,
    });

    searchControl.on("results", (data) => {
      const [result] = data.results;
      if (result) {
        setDestination(result.label);
      }
    });

    map.addControl(searchControl);
    searchControlRef.current = searchControl;

    return () => {
      map.removeControl(searchControlRef.current);
    };
  }, [map, setDestination]);

  return null;
}
