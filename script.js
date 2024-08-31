const btnEl = document.getElementById('btn')
const bmiInputEl = document.getElementById('bmi-result')
const weightConditionEl = document.getElementById('weight-condition')

function bmiCalculator() {
  const heightEl = document.getElementById('height').value / 100
  const weightEl = document.getElementById('weight').value
  const resultEl = weightEl / (heightEl * heightEl);

  bmiInputEl.value = resultEl;

  if(resultEl < 18.5) {
    weightConditionEl.innerText = 'Under weight'
  }else if (resultEl >= 18.5 && resultEl <= 24.9) {
    weightConditionEl.innerText = 'Normal weight'
  }else if (resultEl >= 25 && resultEl <= 29.9){
    weightConditionEl.innerText = 'Overweight'
  }else if (resultEl >= 30) {
    weightConditionEl.innerText = 'Obesity'
  }
}
  
btnEl.addEventListener('click', bmiCalculator)
 

