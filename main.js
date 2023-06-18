    //    analog clock

const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const timeInterval = 6 ;


    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg )';
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg )';
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2 ) + 'deg )';
    
    
}

setInterval(getTime , 1000);
       
       
       
    //    analog clock end 
       
    // digital clock

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amPm = "AM"

    if(hours === 0) {
        hours = 12;
    }
    if(hours > 12) {
        hours -= 12;
        amPm = "PM"
    }

    hours = (hours < 10 ) ? `0${hours}` : hours;
    minutes = (minutes < 10 ) ? `0${minutes}` : minutes;
    second = (seconds < 10 ) ? `0${seconds}` : seconds;

    let time = `${hours}:${minutes}:${seconds} ${amPm}`
    document.querySelector(".digital-clock").innerText = time;
}

setInterval(showTime , 1000);

        // digital clock end
