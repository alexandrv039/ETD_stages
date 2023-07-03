import {createSvgElement} from "../factory/svg-factory.js";

const emptyStageRender = (stageElement) => {

  let defs = stageElement.children[1];
  let cloneDefs = defs.cloneNode(true);
  defs.remove();
  let g = createSvgElement('g', {
    filter: "url(#filter_empty_d_228_71)"
  });

  let circle1 = createSvgElement('circle', {
    cx: "60",
    cy: "60",
    r: "35",
    fill: "#C9DDE8",
  });

  let circle2 = createSvgElement('circle', {
    cx: "60",
    cy: "60",
    r: "34",
    stroke: "white",
    'stroke-opacity': "0.29",
  });

  g.appendChild(circle1);
  g.appendChild(circle2);
  stageElement.append(g);

  let filter = createSvgElement('filter', {
    id: "filter_completed_d",
    x: "15",
    y: "15",
    width: "98",
    height: "98",
    filterUnits: "userSpaceOnUse",
    'color-interpolation-filters': "sRGB"
  });
  let feFlood = createSvgElement('feFlood', {
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
    result: "effect1_dropShadow_228_71"
  });

  var feBlend = createSvgElement('feBlend', {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_228_71",
    result: "shape"
  });
  cloneDefs.appendChild(filter);
  stageElement.appendChild(cloneDefs);

};

export {emptyStageRender};
