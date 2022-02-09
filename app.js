const rates = {};

const itemUSD = document.querySelector('[data-value="USD"]');
const itemEUR = document.querySelector('[data-value="EUR"]');
const itemGBP = document.querySelector('[data-value="GBP"]');

const getData = async () => {
  const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const result = await response.json();
  const data = await result;

  rates.USD = data.Valute.USD;
  rates.EUR = data.Valute.EUR;
  rates.GBP = data.Valute.GBP;

  itemUSD.textContent = rates.USD.Value.toFixed(2);
  itemEUR.textContent = rates.EUR.Value.toFixed(2);
  itemGBP.textContent = rates.GBP.Value.toFixed(2);
};

getData();  
