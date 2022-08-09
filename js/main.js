let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let code = document.querySelector('.code');


window.onscroll = ()=> {
    let value = scrollY; 
    stars.style.left = value +'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    if (value <= 67){
        code.style.fontSize = value + 'px';
        code.style.position ='fixed';
    }
    if (value >= 450) {
        code.style.display ='none';
    }else {
        code.style.display ='block';
    }
    if (value >= 101) {
        document.querySelector('.main').style.background =' linear-gradient(#376281,#10001f)';
    }else{
        document.querySelector('.main').style.background =' linear-gradient(#200016,#10001f)';
    }
    
}