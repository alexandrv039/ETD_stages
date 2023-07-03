let emptyStageData = {
  stageType: 'onLoad',
  status: 'Стадия не запускалась',
  errorText: ''
}

let stagesTypes = {
  'onLoad': 'На погрузке',
  'load': 'Погрузка',
  'forwarding': 'Переадресация',
  'replacementDriver': 'Замена водителя',
  'onUnloading': 'На разгрузке',
  'unloading': 'Разгрузка',
  'priceNegotiation': 'Согласование стоимости',
  'proofOfPayment': 'Подтверждение оплаты'
};

let stageStatuses = [
  'Стадия не запускалась',
  'Текущая стадия',
  'Стадия завершена',
  'На стадии произошла ошибка'
];

let stage = {
  status: 0,
  type: undefined,
  error: ''
}

export {stagesTypes, stageStatuses, stage}
