const xmlns = "http://www.w3.org/2000/svg";

function createSvg(params = {}) {
  var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  for (var paramKey in params) {
    setSvgAttribute(svgElement, paramKey, params[paramKey]);
  }
  return svgElement;
}

function setSvgAttribute(svgElement, attributeName, value) {
  svgElement.setAttributeNS(null, attributeName, value);
}

function createSvgElement(elementType, params) {
  var svgElement = document.createElementNS(xmlns, elementType);
  for (var paramKey in params) {
    setSvgAttribute(svgElement, paramKey, params[paramKey]);
  }
  return svgElement;
}

export {createSvg, createSvgElement, setSvgAttribute};
