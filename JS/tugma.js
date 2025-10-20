let bir = document.getElementById('bir')
let ikki = document.getElementById('ikki')
let uch = document.getElementById('uch')
bir.addEventListener('click', function(){
    bir.classList.add('active')
    ikki.classList.remove('active')
    uch.classList.remove('active')
})
ikki.addEventListener
('click', function(){
    ikki.classList.add('active')
    bir.classList.remove('active')
    uch.classList.remove('active')
})
uch.addEventListener
('click', function(){
    uch.classList.add('active')
    ikki.classList.remove('active')
    bir.classList.remove('active')
    
})