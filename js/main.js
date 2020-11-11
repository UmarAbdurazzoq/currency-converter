var currencyForm = document.querySelector('.currency-form');
var converter = currencyForm.querySelector('.converter');
var answerInSum = currencyForm.querySelector('.answer-in-sum');
var answerAlert = currencyForm.querySelector('.answer-alert');
var currencyInput = currencyForm.querySelector('.currency');


currencyForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  var currency = parseInt(currencyInput.value, 10);
  var currencySelect = parseInt(document.querySelector('.currency-select').value, 10);
  var inSum = currency * currencySelect;
  
  if (isNaN(currencyInput.value)){
    answerAlert.classList.add('d-block','alert-danger');
    answerInSum.textContent = 'son kiriting';
    return;
  }else if (currencyInput.value === '') {
    answerAlert.classList.add('d-block','alert-danger');
    answerInSum.textContent = 'son kiriting';
    return;
  } else if (currencyInput.value <= 0){
    answerAlert.classList.add('d-block','alert-danger');
    answerInSum.textContent = 'musbat son kiriting';
    return;
  } 
  
  answerAlert.classList.remove('d-none', 'alert-danger');
  answerAlert.classList.add('d-block','alert-success');
  answerInSum.textContent = inSum + ' sum';

});