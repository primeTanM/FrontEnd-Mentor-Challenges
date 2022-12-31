const timer = () => {
    const countDate = new Date("January 1, 2023 00:00:00").getTime();
    // const countDate = new Date("December 31, 2022 23:51:00").getTime();

    const now = new Date().getTime();

    const difference = countDate - now;
    
    const seconds = 1000;  //milliseconds
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 60;

    const displayDays = Math.floor(difference / days);
    const displayHours = Math.floor((difference % days) / hours);
    const displayMinutes = Math.floor((difference % hours) / minutes);
    const displaySeconds = Math.floor((difference % minutes) / seconds);

    var firework = document.querySelector(".party");
    var arrived = document.querySelector(".arrived");
    var arriving = document.querySelector(".arriving");
    var hny = document.querySelector(".hny");
    var timer = document.querySelector(".timer");

    if(difference <= 0){
        firework.style.visibility = 'visible';
        arrived.style.visibility = 'visible';
        hny.style.visibility = 'visible';
        arriving.remove();
        timer.remove();
    }
    
    if (displayDays < 10) {
        document.getElementById('days').innerText = '0' + displayDays;
    }else {
        document.getElementById('days').innerText = displayDays;
    }


    
    if (displayHours < 10) {
        document.getElementById('hours').innerText = '0' + displayHours;
    }else {
        document.getElementById('hours').innerText = displayHours;
    }


    
    if (displayMinutes < 10) {
        document.getElementById('minutes').innerText = '0' + displayMinutes;
    }else {
        document.getElementById('minutes').innerText = displayMinutes;
    }


    if (displaySeconds < 10) {
        document.getElementById('seconds').innerText = '0' + displaySeconds;
    }else {
        document.getElementById('seconds').innerText = displaySeconds;
    }
    

}

setInterval(timer, 1000);