const rates = {};

const itemUSD = document.querySelector('[data-value="USD"]');
const itemEUR = document.querySelector('[data-value="EUR"]');
const itemGBP = document.querySelector('[data-value="GBP"]');

const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')


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

  if (rates.USD.Value > rates.USD.Previous) {
    itemUSD.classList.add("top");
  } else {
    itemUSD.classList.add("bottom");
  }
  if (rates.EUR.Value > rates.EUR.Previous) {
    itemEUR.classList.add("top");
  } else {
    itemEUR.classList.add("bottom");
  }
  if (rates.GBP.Value > rates.GBP.Previous) {
    itemGBP.classList.add("top");
  } else {
    itemGBP.classList.add("bottom");
  }
};

getData();


const convertValue = () => {
  result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2)
}

input.oninput = convertValue

select.oninput = convertValue
