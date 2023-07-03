import {createSvgElement} from "../factory/svg-factory.js";

const completedStageRender = (stageElement) => {
  let defs = stageElement.children[1];
  let cloneDefs = defs.cloneNode(true);
  defs.remove();
  let g = createSvgElement('g', {
    filter: "url(#filter_completed_d_226_69)"
  });

  let circle1 = createSvgElement('circle', {
    cx: "60",
    cy: "60",
    r: "35",
    fill: "#9FEE9E",
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

  let rect1 = createSvgElement('rect', {
    x: '39',
    y: '60',
    width: '6',
    height: '28',
    rx: '3',
    transform: 'rotate(-50.5199 39.4155 59.4058)',
    fill: 'white'
  });

  let rect2 = createSvgElement('rect', {
    x: '61',
    y: '76',
    width: '6',
    height: '42',
    rx: '3',
    transform: 'rotate(-137.025 61.22 76.8589)',
    fill: 'white'
  });
  stageElement.appendChild(rect1);
  stageElement.appendChild(rect2);

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
    result: "effect1_dropShadow_226_69"
  });

  var feBlend = createSvgElement('feBlend', {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_226_69",
    result: "shape"
  });
  cloneDefs.appendChild(filter);
  stageElement.appendChild(cloneDefs);
};

export {completedStageRender};
