import { GoogleMapLoader } from "@/base-components";
import MarkerClusterer from "@googlemaps/markerclustererplus";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import location from "@/assets/json/location.json";

function Main({ width = 0, height = 0, className = "" }) {
  const imageAssets = import.meta.globEager(
    `/src/assets/images/*.{jpg,jpeg,png,svg}`
  );
  const darkMode = useRecoilValue(darkModeStore);

  const init = async (initializeMap) => {
    // Resto del código de la función init...
  };

  return <GoogleMapLoader init={init} className={className} />;
}

Main.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default Main;
