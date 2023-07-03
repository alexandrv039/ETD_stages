import {createSvg, createSvgElement} from "./svg-factory.js";

function createLineSvg() {
  let svgElement = createSvg({
    viewBox: '0 0 306 111',
    width: '306',
    height: '111',
    fill: 'none',
  });

  let g = createSvgElement('g', {
    filter: "url(#filter_green_line_d_200_42)"
  });

  let svgLine = createSvgElement('rect', {
    width: 307,
    height: 18,
    rx: '5',
    transform: "matrix(0.95972 -0.280958 0.28435 0.958721 2.96875 86.1006)",
    fill: "#9FEE9E",
    'fill-opacity': '0.83',
    'shape-rendering': "crispEdges"
  });

  svgLine.append(g);

  let defs = createSvgElement('defs', {});
  let filter = createSvgElement('filter', {
    id: "filter_green_line_d_200_42",
    x: "0.183105",
    y: "0.967773",
    width: "305",
    height: "109",
    filterUnits: "userSpaceOnUse",
    'color-interpolation-filters': "sRGB"
  });
  defs.appendChild(filter);

  let feFlood = createSvgElement('feFlood', {
    'flood-opacity': "0",
    result: "BackgroundImageFix"
  });
  filter.appendChild(feFlood);

  let feColorMatrix = createSvgElement('feColorMatrix', {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  });
  filter.appendChild(feColorMatrix);

  let feOffset = createSvgElement('feOffset', {
    dy: "4"
  });
  filter.appendChild(feOffset);

  let feGaussianBlur = createSvgElement('feGaussianBlur', {
    stdDeviation: "2"
  });
  filter.appendChild(feGaussianBlur);

  let feComposite = createSvgElement('feComposite', {
    in2: "hardAlpha",
    operator: "out"
  });
  filter.appendChild(feComposite);

  let feColorMatrix2 = createSvgElement('feColorMatrix', {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  });
  filter.appendChild(feColorMatrix2);

  let feBlend = createSvgElement('feBlend', {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_200_42"
  });
  filter.appendChild(feBlend);

  let feBlend2 = createSvgElement('feBlend', {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_200_42",
    result: "shape"
  });
  filter.appendChild(feBlend2);

  svgLine.append(filter);
  svgElement.appendChild(svgLine);
  return svgElement;

}

export {createLineSvg};
