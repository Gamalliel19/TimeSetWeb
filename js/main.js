// DOM element

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');


// Options
const showAmPm = true;


// show time

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // Set PM atau AM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hours format
    hour = hour % 12 || 12;

    // output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

   

    setTimeout(showTime, 1000);

}
// add zero
function addZero(n){
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}
// set background and greeting
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
// check hour
    if(hour < 12){
        // morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')"
        greeting.textContent = 'Selamat Pagi, '

    }else if(hour < 18){
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Selamat Siang, ';
    }else{
        // evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Selamat Malam, ';
        document.body.style.color = 'white';
    }
}


// Get name
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent='[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

// setname
function setName(e){
    if(e.type === 'keypress'){
// make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }

}

// Get focus
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent='[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

// setFocus
function setFocus(e){
    if(e.type === 'keypress'){
// make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }

}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// run
getFocus();
getName();
showTime();
setBgGreet();