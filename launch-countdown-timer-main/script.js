const timer = () => {
    const countDate = new Date("January 1, 2022 00:00:00").getTime();
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