const searchButton = document.querySelector('.btn');
const input = document.querySelector('.input')
const search = document.querySelector('.search')
searchButton.addEventListener('click', ()=>{
    search.classList.toggle('active')
})