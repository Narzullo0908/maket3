let fra = document.getElementById('fra')
let ger = document.getElementById('ger')
let eng = document.getElementById('eng')
let france = document.getElementById('france')
let germany = document.getElementById('germany')
let england = document.getElementById('england');
let link1 = document.getElementById('link1')
let link2 = document.getElementById('link2')
let link3 = document.getElementById('link3')
let m = document.getElementById('m')
let tepa = document.getElementById('tepa')
let block1 = document.getElementById('block1')
let t = block1.offsetTop - 105;
let block2 = document.getElementById('block2')
let i = block2.offsetTop - 50;
let block3 = document.getElementById('block3')
let u = block3.offsetTop - 50;
fra.addEventListener('click', function(){
    france.classList.remove('remove')
    germany.classList.add('remove')
    england.classList.add('remove')
    eng.classList.remove('bgc')
    ger.classList.remove('bgc')
    fra.classList.add('bgc')
})

ger.addEventListener('click', function(){
    france.classList.add('remove')
    germany.classList.remove('remove')
    england.classList.add('remove')
    eng.classList.remove('bgc')
    ger.classList.add('bgc')
    fra.classList.remove('bgc')
})

eng.addEventListener('click', function(){
    france.classList.add('remove')
    germany.classList.add('remove')
    england.classList.remove('remove')
    eng.classList.add('bgc')
    ger.classList.remove('bgc')
    fra.classList.remove('bgc')
})

link1.addEventListener('click', function(){
    window.scrollTo({
        top: t,
        left:0,
        behavior: "smooth"
    })
    // link1.classList.add('linka')
    // link2.classList.remove('linka')
    // link3.classList.remove('linka')
    
})
link2.addEventListener('click', function(){
    window.scrollTo({
        top: i,
        left:0,
        behavior: "smooth"
    })
    // link1.classList.remove('linka')
    // link2.classList.add('linka')
    // link3.classList.remove('linka')
    
})
link3.addEventListener('click', function(){
    window.scrollTo({
        top: u,
        left:0,
        behavior: "smooth"
    }) 
    // link1.classList.remove('linka')
    // link2.classList.remove('linka')
    // link3.classList.add('linka')   
        
})



tepa.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    });
})  

let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

document.addEventListener('scroll', function(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("u " + u)
    console.log("i " + i)
    console.log("t " + t)
    if (scrollTop > u-1) 
    {
        link3.classList.add('linka')
        link2.classList.remove('linka')
        link1.classList.remove('linka')
    }
    else if (scrollTop > i-1) {
        link3.classList.remove('linka')
        link2.classList.add('linka')
        link1.classList.remove('linka')
    }
    else if (scrollTop > t-1) {
        link3.classList.remove('linka')
        link2.classList.remove('linka')
        link1.classList.add('linka')
    }
    else {
        link3.classList.remove('linka')
        link2.classList.remove('linka')
        link1.classList.remove('linka')
    }
})