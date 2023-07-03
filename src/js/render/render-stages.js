import {createNewRect, renderGreenContour, renderWhiteCounter} from "../factory/rect-factory.js";
import {completedStageRender} from "./completed-stage-render.js";
import {emptyStageRender} from "./empty-stage-render.js";
import {stagesTypes} from "../etd-data.js";
import {createLineSvg} from "../factory/line-factory.js";

const renderStages = (stagesData) => {
  let stagesElement = document.querySelector('.stages');
  for (let i = 0; i < stagesData.length; i++) {
    const isUpper = (i + 1) % 2 === 0;
    let svgElement = createNewRect(isUpper);
    if (stagesData[i].status === '2') {
      renderGreenContour(svgElement);
      completedStageRender(svgElement)
    } else if (stagesData[i].status === '1') {
      renderGreenContour(svgElement);
      emptyStageRender(svgElement);
    } else {
      renderWhiteCounter(svgElement);
      emptyStageRender(svgElement);
    }
    // Создание контейнера
    let svgElementContainer = document.createElement('div');
    let upperClass = isUpper ? 'upper-stage' : 'lower-stage';
    svgElementContainer.classList.add('stage');
    svgElementContainer.classList.add(upperClass);

    let elemP = document.createElement('p');
    elemP.textContent = stagesTypes[stagesData[i].type];
    elemP.classList.add('stage-title');
    if (isUpper) {
      svgElementContainer.appendChild(elemP);
    }
    svgElementContainer.appendChild(svgElement);
    if (!isUpper) {
      svgElementContainer.appendChild(elemP);
    }
    stagesElement.appendChild(svgElementContainer);

  }

  // stagesElement.appendChild(createLineSvg());

  // TODO: Тестирование


};

export {renderStages};
