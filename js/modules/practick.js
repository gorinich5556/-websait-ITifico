const practicResult = document.querySelectorAll('.practic-result')

practicResult.forEach(el => {
    const practicHead = el.childNodes[1]
    const practicResultResult = el.childNodes[3]
    var practicResultState = false
    practicHead.addEventListener('click', function(){
        if(practicResultState == false){
            practicResultResult.classList.add('practic-result__text_active')
            practicHead.classList.add('practic-result__head_active')
            practicResultState = true
        } else{
            practicResultResult.classList.remove('practic-result__text_active')
            practicHead.classList.remove('practic-result__head_active')
            practicResultState = false
        }
    })
    
})