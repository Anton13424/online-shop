const iPhone = document.querySelector('.iPhone')
iPhone.addEventListener('click', function(event) {
    let clickTarget = event.target
    let activeButton = iPhone.querySelector('.active')
    let priceItem = iPhone.querySelector('.price')
    let currentPrice
    let activeButtonColor = iPhone.querySelector('.active-border')

    if (clickTarget.classList.contains('color-btn') && !clickTarget.classList.contains('active-border')) {
        clickTarget.classList.add('active-border')
        activeButtonColor.classList.remove('active-border')
    }
    if (clickTarget.classList.contains('btn') && !clickTarget.classList.contains('active')){
        clickTarget.classList.add('active')
        activeButton.classList.remove('active')
    }
    currentPrice = clickTarget.getAttribute('data-size')
    console.log(currentPrice)
    if (currentPrice === 'medium'){
        priceItem.textContent = 'цена 800000р.'
    }
    if (currentPrice === 'large'){
        priceItem.textContent = 'цена 10000000 руб.'
    }
})

