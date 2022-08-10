const practicMainArrow = document.querySelector('.practic__arrow')
const practicContent = document.querySelector('.practic__row')
const practicHead = document.querySelector('.practic__head')
const practicRollUp = document.querySelector('.practic__roll-up')
var practicState = true

practicMainArrow.addEventListener('click', function(){
    if(practicState == false){
        practicContent.classList.add('practic__row_active')
        practicHead.classList.add('practic__head_active')
        practicState = true
    }else{
        practicContent.classList.remove('practic__row_active')
        practicHead.classList.remove('practic__head_active')
        practicState = false
    }
})
practicRollUp.addEventListener('click', function(){
    if(practicState == false){
        practicContent.classList.add('practic__row_active')
        practicHead.classList.add('practic__head_active')
        practicState = true
    }else{
        practicContent.classList.remove('practic__row_active')
        practicHead.classList.remove('practic__head_active')
        practicState = false
    }
})