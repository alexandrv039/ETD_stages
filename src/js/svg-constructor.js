import {createSvg, createSvgElement} from "./svg-factory.js";

// <svg width="256" height="97" viewBox="0 0 256 97" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect width="266.21" height="15.5306" rx="5" transform="matrix(0.949225 0.314597 -0.318311 0.947986 4.15625 -0.5)" fill="white"/>
// </svg>

function getLineSvg() {
  var svgElement = createSvg({
    viewBox: '0 0 256 97',
    width: '256',
    height: '97',
    fill: 'none',
  });

  var line = createSvgElement('rect', {
    width: 266,
    height: 15,
    rx: 5,
    transform: "matrix(0.949225 0.314597 -0.318311 0.947986 4.15625 -0.5)",
    fill: "white",

  });

  return line;
}

export {getLineSvg};
