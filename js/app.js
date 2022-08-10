

console.log('Привет');
const burgerButton = document.querySelector('.header__burger-btn')
const burgerMenu = document.querySelector('.header-burger')
const headerShadow = document.querySelector('.header__shadow')
const burgerIcon = document.querySelector('.header__burger-svg-use')
var burgerState = false

burgerButton.addEventListener('click', function(){
        if(burgerState == false){
            burgerMenu.classList.add('header-burger_active')
            headerShadow.style.display = 'block'
            burgerIcon.setAttribute('xlink:href', "img/icons/icons.svg#close")
            burgerState = true
        }else{
            burgerMenu.classList.remove('header-burger_active')
            burgerIcon.setAttribute('xlink:href', "img/icons/icons.svg#burger")
            headerShadow.style.display = 'none'
            burgerState = false
        }
})

