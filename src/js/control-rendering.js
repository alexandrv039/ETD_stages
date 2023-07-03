import {renderStages} from "./render/render-stages.js";

let stagesData;

const renderData = (data) => {
  stagesData = data;
  renderStages(data)
};

const renderRect = () => {

};

const renderLine = () => {

};

export {renderData};
