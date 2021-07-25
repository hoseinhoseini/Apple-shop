// Define Variable
let shoppingCard = document.querySelector('.shopping-card-box').firstElementChild
let searchIcon = document.querySelector('.search-icon-box').firstElementChild
let searchIconSecond = document.querySelector('.search-box img')
let shoppingList = document.querySelector('.shopping-card-list')
let searchBox = document.querySelector('.search-box')


// Add EnventListener For Shopping List
shoppingCard.addEventListener('click', showShoppingList)
shoppingCard.addEventListener('dblclick', closeShoppingList)

// Add EnventListener For Search Box
searchIcon.addEventListener('click', showSearchIcon)
searchIconSecond.addEventListener('click', closeSearchIcon)



// Functions
function showShoppingList() {
    shoppingList.style.transform = 'scale(1)'
    searchBox.style.display = 'none'
    searchIcon.style.display = 'inline'
}
function closeShoppingList() {
    shoppingList.style.transform = 'scale(0)'
    searchIcon.style.display = 'inline'
}
function showSearchIcon() {
    searchBox.style.display = 'inline'
    shoppingList.style.transform = 'scale(0)'
    searchIcon.style.display = 'none'
}
function closeSearchIcon() {
    searchBox.style.display = 'none'
    searchIcon.style.display = 'inline'
}

