import {renderData} from "../control-rendering.js";
import {stageStatuses, stagesTypes} from "../etd-data.js";

const createStagesContainer = document.createElement('form');
let stagesData = [];

const createStagesHandler = (evt) => {
  evt.preventDefault();
  let stagesElement = document.querySelector('.stages');
  while (stagesElement.firstChild) {
    stagesElement.removeChild(stagesElement.firstChild);
  }

  readStagesDataInTestForm();
  renderData(stagesData);
};

const readStagesDataInTestForm = () => {
  let formStages = createStagesContainer.children;
  stagesData = [];
  for (let i = 0; i < formStages.length; i++) {
    if (formStages[i].localName === 'button') {
      continue;
    }
    let childStage = formStages[i].children;
    if (childStage[0].checked === false) {
      continue;
    }

    const stageType = childStage[1].value;
    const stageStatus = childStage[3].value;

    stagesData.push({
      type: stageType,
      status: stageStatus
    });
  }
};

const renderControl = () => {

  createStagesContainer.addEventListener('submit', createStagesHandler);
  let buttonElement = document.createElement('button');
  buttonElement.innerText = 'Отрисовать';
  buttonElement.setAttribute('type', 'submit');
  createStagesContainer.appendChild(buttonElement);

  for (let stageKey in stagesTypes) {

    let stageContainer = document.createElement('div');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    if (stageKey === 'forwarding' || stageKey === 'replacementDriver' || stageKey === 'priceNegotiation') {
      checkBox.removeAttribute('checked');
    } else {
      checkBox.setAttribute('checked', true);
      checkBox.setAttribute('disabled', true);
    }
    stageContainer.appendChild(checkBox);

    let hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.value = stageKey;
    stageContainer.appendChild(hiddenInput);

    let titleElement = document.createElement('span');
    titleElement.textContent = stagesTypes[stageKey];
    stageContainer.appendChild(titleElement);

    let statusOptionsElement = document.createElement('select');
    for (let i = 0; i < stageStatuses.length; i++) {
      let optionElement = document.createElement('option');
      optionElement.value = i;
      optionElement.textContent = stageStatuses[i];
      if (i === 0) {
        optionElement.setAttribute('selected', true);
      }
      statusOptionsElement.appendChild(optionElement);
    }
    stageContainer.appendChild(statusOptionsElement);

    createStagesContainer.appendChild(stageContainer);

  }

  document.body.appendChild(createStagesContainer);

}

renderControl();

export {createStagesContainer, createStagesHandler};
