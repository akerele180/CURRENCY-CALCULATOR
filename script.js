const baseCurr = document.getElementById('base');
const quoteCurr = document.getElementById('quote');
const baseCurrInput = document.getElementById('base-input');
const quoteCurrInput = document.getElementById('quote-input');

const btnSwap = document.getElementById('btn');
const convInfo = document.getElementById('conv-info');

// fuction def
function calculate(){
    const base = baseCurr.value;
    const quote = quoteCurr.value;
    console.log(base, quote);

    fetch(`https://v6.exchangerate-api.com/v6/5fc75494bd271993c43a672f/latest/${base}`)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            const rate = (data.conversion_rates[quote]).toFixed(2);
            convInfo.innerText = `1 ${base} = ${rate+quote}`
             
            quoteCurrInput.value = (rate * baseCurrInput.value).toFixed(2);
            // console.log(String(quoteCurrInput).length);
        });
}

// eventlisteners
baseCurr.addEventListener('change', calculate);
baseCurrInput.addEventListener('input', calculate);
quoteCurr.addEventListener('change', calculate);
quoteCurrInput.addEventListener('input', calculate); 

btnSwap.addEventListener('click', ()=>{
    const change = baseCurr.value;
    baseCurr.value = quoteCurr.value;
    quoteCurr.value = change;
    calculate();
})
// calculate();