const menuTab = document.querySelectorAll('.c-course__item')

menuTab.forEach(el =>{
    const tabContent = el.childNodes[3]
    const tabBtn = el.childNodes[1]
    var tabState = false
    tabBtn.addEventListener('click', function(){
        if(tabState == false){
            tabContent.classList.add('c-course__sub-row_active')
            tabState = true
        } else{
            tabContent.classList.remove('c-course__sub-row_active')
            tabState = false
        }
    })
    
})
//------------------------min devaice
const menuButton = document.querySelector('.c-course__menu-btn')
const menuRow = document.querySelector('.c-course__row')
const menuSubItem = document.querySelectorAll('.c-course__sub-item')
var menuState = false


menuButton.addEventListener('click', function(){
    if(menuState == false){
        menuRow.classList.add('c-course__row_active')
        menuButton.classList.add('c-course__menu-btn_active')
        menuState = true
    }else{
        menuRow.classList.remove('c-course__row_active')
        menuButton.classList.remove('c-course__menu-btn_active')
        menuState = false
    }
})
menuSubItem.forEach(el =>{
    el.addEventListener('click', function(){
        if(menuState == false){
            menuRow.classList.add('c-course__row_active')
            menuButton.classList.add('c-course__menu-btn_active')
            menuState = true
        }else{
            menuRow.classList.remove('c-course__row_active')
            menuButton.classList.remove('c-course__menu-btn_active')
            menuState = false
        }
    })
})