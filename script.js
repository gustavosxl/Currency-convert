const button = document.getElementById('convert-button');
const selectCurrency1 = document.getElementById('select-currency1');
const selectCurrency2 = document.getElementById('select-currency2');
const image1 = document.getElementById('currency-img1');
const image2 = document.getElementById('currency-img2');

const convertValues = async () => {
    const value = document.getElementById('input-value').value;
    const amount1 = document.getElementById('value-real');
    const amount2 = document.getElementById('currency-value-dolar');

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json());
    const dolar = data.USDBRL.high;
    const euro = data.EURBRL.high;

    if (selectCurrency1.value == 'R$ Real Brasileiro' && selectCurrency2.value == 'US$ Dólar americano') {
        amount1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
        amount2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value / dolar);
    }
    if (selectCurrency1.value == 'R$ Real Brasileiro' && selectCurrency2.value == '€ Euro') {
        amount1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
        amount2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(value / euro);
    }
    if (selectCurrency1.value == 'US$ Dólar americano' && selectCurrency2.value == '€ Euro') {
        amount1.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value);
        amount2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format((value * dolar) / euro);
    }
    if (selectCurrency1.value == '€ Euro' && selectCurrency2.value == 'US$ Dólar americano') {
        amount1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(value);
        amount2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format((value * euro) / dolar);
    }
};

const changeCurrency = () => {
    const currencyName1 = document.getElementById('currency-name1');

    if (selectCurrency1.value == 'US$ Dólar americano') {
        currencyName1.innerHTML = 'US$ Dólar americano';
        image1.src = './images/estados-unidos (1) 1.png';
    }

    if (selectCurrency1.value == '€ Euro') {
        currencyName1.innerHTML = '€ Euro';
        image1.src = './images/euro.png';
    }

    if (selectCurrency1.value == 'R$ Real Brasileiro') {
        currencyName1.innerHTML = 'R$ Real Brasileiro';
        image1.src = './images/brasil 2.png';
    }
}
const changeCurrency2 = () => {
    const currencyName2 = document.getElementById('currency-name2');

    if (selectCurrency2.value == 'US$ Dólar americano') {
        currencyName2.innerHTML = 'US$ Dólar americano';
        image2.src = './images/estados-unidos (1) 1.png';
    }

    if (selectCurrency2.value == '€ Euro') {
        currencyName2.innerHTML = '€ Euro';
        image2.src = './images/euro.png';
    }

}


button.addEventListener('click', convertValues);
selectCurrency1.addEventListener('change', changeCurrency);
selectCurrency2.addEventListener('change', changeCurrency2);
