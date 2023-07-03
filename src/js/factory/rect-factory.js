import {createSvg, createSvgElement} from "./svg-factory.js";

const createNewRect = () => {
  // Создание пустого круга
  var svgElement = createSvg({
    viewBox: '0 0 120 120',
    width: '120',
    height: '120',
    fill: 'none',
  });

  var g = createSvgElement('g', {
    filter: "url(#filter0_d)"
  });
  svgElement.appendChild(g);

  var circle = createSvgElement('circle', {
    cx: "60",
    cy: "60",
    r: "40",
    fill: "white",
    'fill-opacity': "0.88",
    stroke: "black",
    'stroke-width': "1",
    'shape-rendering': "crispEdges"
  });

  g.appendChild(circle);

  return svgElement;
};

function renderGreenContour(stageElement) {
  stageElement.children[0].setAttribute('filter', 'url(#filter_green_d)');
  var defs = createSvgElement('defs', {});
  var filter = createSvgElement('filter', {
    id: "filter_green_d",
    x: "0",
    y: "0",
    width: "128",
    height: "128",
    filterUnits: "userSpaceOnUse",
    'color-interpolation-filters': "sRGB"
  });
  defs.appendChild(filter);
  var feFlood = createSvgElement('feFlood', {
    'flood-opacity': "0",
    result: "BackgroundImageFix"
  });
  filter.appendChild(feFlood);

  var feColorMatrix = createSvgElement('feColorMatrix', {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  });
  filter.appendChild(feColorMatrix);

  var feOffset = createSvgElement('feOffset', {
    dy: "4"
  });
  filter.appendChild(feOffset);

  var feGaussianBlur = createSvgElement('feGaussianBlur', {
    stdDeviation: "2"
  });
  filter.appendChild(feGaussianBlur);

  var feComposite = createSvgElement('feComposite', {
    in2: "hardAlpha",
    operator: "out"
  });
  filter.appendChild(feComposite);

  var feColorMatrix = createSvgElement('feColorMatrix', {
    type: "matrix",
    values: "0 0 0 0 0.66925 0 0 0 0 1 0 0 0 0 0.6625 0 0 0 0.62 0"
  });
  filter.appendChild(feColorMatrix);

  var feBlend = createSvgElement('feBlend', {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_220_101"
  });
  filter.appendChild(feBlend);

  var feBlend2 = createSvgElement('feBlend', {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_220_101",
    result: "shape"
  });
  filter.appendChild(feBlend2);
  stageElement.appendChild(defs);
}

const renderWhiteCounter = (stageElement) => {
  stageElement.children[0].setAttribute('filter', 'url(#filter_white_0_d)');
    var defs = createSvgElement('defs', {});
    var filter = createSvgElement('filter', {
      id: "filter_white_0_d",
      x: "0",
      y: "0",
      width: "128",
      height: "128",
      filterUnits: "userSpaceOnUse",
      'color-interpolation-filters': "sRGB"
    });
    defs.appendChild(filter);
    var feFlood = createSvgElement('feFlood', {
      'flood-opacity': "0",
      result: "BackgroundImageFix"
    });
    filter.appendChild(feFlood);

    var feColorMatrix = createSvgElement('feColorMatrix', {
      in: "SourceAlpha",
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
      result: "hardAlpha"
    });
    filter.appendChild(feColorMatrix);

    var feOffset = createSvgElement('feOffset', {
      dy: "4"
    });
    filter.appendChild(feOffset);

    var feGaussianBlur = createSvgElement('feGaussianBlur', {
      stdDeviation: "2"
    });
    filter.appendChild(feGaussianBlur);

    var feComposite = createSvgElement('feComposite', {
      in2: "hardAlpha",
      operator: "out"
    });
    filter.appendChild(feComposite);

    var feColorMatrix = createSvgElement('feColorMatrix', {
      type: "matrix",
      values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
    });
    filter.appendChild(feColorMatrix);

    var feBlend = createSvgElement('feBlend', {
      mode: "normal",
      in2: "BackgroundImageFix",
      result: "effect1_dropShadow_220_101"
    });

    var feBlend = createSvgElement('feBlend', {
      mode: "normal",
      in: "SourceGraphic",
      in2: "effect1_dropShadow_220_101",
      result: "shape"
    });
    stageElement.appendChild(defs);
};

export {createNewRect, renderGreenContour, renderWhiteCounter};
