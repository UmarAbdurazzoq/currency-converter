var converter = document.querySelector('.converter');
var answerInSum = document.querySelector('.answer-in-sum');
var answerAlert = document.querySelector('.answer-alert');
var currencyInput = document.querySelector('.currency');


converter.addEventListener('click', function (event) {
  event.preventDefault();
  
  var currency = parseInt(currencyInput.value, 10);
  var currencySelect = parseInt(document.querySelector('.currency-select').value, 10);
  var InSum = currency * currencySelect;
  
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
  answerInSum.textContent = InSum + ' sum';

});