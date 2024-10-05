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
        priceItem.textContent = 'цена 800 000р.'
    }
    if (currentPrice === 'large'){
        priceItem.textContent = 'цена 10 000 000 руб.'
    }
})
const samsung = document.querySelector('.samsung')
samsung.addEventListener('click', function(event) {
    let clickTarget = event.target
    let activeButton = samsung.querySelector('.active')
    let priceItem = samsung.querySelector('.price')
    let currentPrice
    let activeButtonColor = samsung.querySelector('.active-border')

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
        priceItem.textContent = 'цена 40 0000р.'
    }
    if (currentPrice === 'large'){
        priceItem.textContent = 'цена 70 000 руб.'
    }
    if (clickTarget.classList.contains('buy-button')){
        clickTarget.classList.remove('btn btn-primary')
        clickTarget.classList.add('btn btn-secondary')
    }
})

