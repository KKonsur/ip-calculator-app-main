const billInput = document.querySelector('.tipCalculator__billInput')
const tipButtons = document.querySelectorAll('.tipCalculator__tipValue')
const tipInputCustom = document.querySelector('.tipCalculator__tipValue--custom')
const numberOfPeopleInput = document.querySelector('.tipCalculator__numberOfPeople')
const amountValueContainer = document.querySelector('.resultContainer__amountValue')
const totalValue = document.querySelector('.resultContainer__totalValue')
const tipCalculatorForm = document.querySelector('.tipCalculator__form')
const resetButton = document.querySelector('.resetButton')
let tipButtonValue = 0
let billInputValue = 0
let tipInputCustomValue = 0
let numberOfPeopleValue = 1

tipInputCustom.addEventListener('input', () => {
   tipInputCustomValue = parseFloat(tipInputCustom.value)
   if (!isNaN(tipInputCustomValue)) {
      amountValueContainer.textContent = `$${((billInputValue * (tipInputCustomValue / 100)) / numberOfPeopleValue).toFixed(2)}`
      totalValue.textContent = `$${((billInputValue * (1 + tipInputCustomValue / 100)) / numberOfPeopleValue).toFixed(2)}`
   } else {
      amountValueContainer.textContent = '$0.00'
      totalValue.textContent = '$0.00'
   }
})

billInput.addEventListener('input', () => {
   billInputValue = parseFloat(billInput.value)
})

numberOfPeopleInput.addEventListener('input', () => {
   numberOfPeopleValue = parseFloat(numberOfPeopleInput.value)
})

tipButtons.forEach(tipButton => {
   tipButton.addEventListener('click', () => {
      tipButtonValue = parseFloat(tipButton.value)
      amountValueContainer.textContent = `$${((billInputValue * (tipButtonValue / 100)) / numberOfPeopleValue).toFixed(2)}`
      totalValue.textContent = `$${((billInputValue * (1 + tipButtonValue / 100)) / numberOfPeopleValue).toFixed(2)}`
   })
})

resetButton.addEventListener('click', () => {
   amountValueContainer.textContent = '$0.00'
   totalValue.textContent = '$0.00'
   billInput.value = 0
   tipInputCustom.value = ''
   numberOfPeopleInput.value = 1
   tipButtonValue = 0
   billInputValue = 0
   tipInputCustomValue = 0
})
