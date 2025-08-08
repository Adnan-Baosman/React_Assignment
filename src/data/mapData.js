import usaImg from "../assets/images/maps/usa.png";
import uaeImg from "../assets/images/maps/uae.png";
import indiaImg from "../assets/images/maps/india.png";

// data/mapInfo.js
export const mapData = [
  {
    country: "India",
    address:
      "4th Floor, 32/1, Mpark, NCPR Industrial Layout, Doddanekundi Industrial Area 2, Seetharampalya, Mahadevapura, Bengaluru, Karnataka 560048.",
    mapUrl: indiaImg, // Use local image or hosted static map image
  },
  {
    country: "USA",
    address: "188 Spear st #350, San Francisco, CA 94105 United States",
    mapUrl: usaImg,
  },
  {
    country: "UAE",
    address:
      "Office No.2042, ABN Group,20th Floor, Burjuman Business Tower, Al Mankhool, Burdubai Dubai.",
    mapUrl: uaeImg,
  },
];
