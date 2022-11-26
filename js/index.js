window.onload = () => {
let basket = {}
let openBasket = document.querySelector('.header__container-button')
let closeBasket = document.querySelector('.basket__close')
let overlay = document.querySelector('.fixed-overlay')
let cards = document.querySelectorAll('.card')
let exit = document.querySelector('.basket__out')
let basketItem = document.querySelector('.item-basket')
let itemsContainer = document.querySelector('.basket__container')
let item = basketItem.cloneNode(true)
basketItem.style.display = 'none'
for(let card of cards){
    card.addEventListener('click',function(event){
        if(event.target.closest('.card__click')){
            let name = card.querySelector('.card__title').textContent
            let cost = parseInt(card.querySelector('.card__price').textContent, 10)

            basket[event.target.dataset.id] = {
                'name': name,
                'cost': cost,
                'count': 1
            }
        }
    })
}
openBasket.addEventListener('click',function(){
    overlay.classList.toggle('disable')
    itemsContainer.innerHTML = ''
    for(let key in basket){
        let item = basketItem.cloneNode(true)
        item.style.display = 'flex'
        item.querySelector('.item__name').textContent = basket[key]['name']
        item.querySelector('.item__cost').textContent = basket[key]['cost'] + ' ₽'
        item.querySelector('.item__count').textContent = basket[key]['count']
        item.querySelector('.plus').dataset.id = key
        item.querySelector('.minus').dataset.id = key
        let plus = item.querySelector('.plus')
        let minus = item.querySelector('.minus')
        plus.addEventListener('click',function(){
            basket[key]['count']++
            item.querySelector('.item__count').textContent++
            console.log(basket)
        })
        minus.addEventListener('click',function(){
            basket[key]['count']--
            item.querySelector('.item__count').textContent--
            if(basket[key]['count']==0){
                itemsContainer.removeChild(item)
                delete basket[key]
            }
            console.log(basket)
        })
        itemsContainer.appendChild(item)
    }
})
closeBasket.addEventListener('click',function(){
    overlay.classList.toggle('disable')
})
exit.addEventListener('click',function(){
    overlay.classList.toggle('disable')
})
}
