    //    Analog clock

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
       
       
       
     //    Analog clock end 
       
    //     start digital clock

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
    seconds = (seconds < 10 ) ? `0${seconds}` : seconds;

    let time = `${hours}:${minutes}:${seconds} ${amPm}`
    document.querySelector(".child-digital-clock p").innerText = time;
}

setInterval(showTime , 1000);

        // digital clock end

const modal = document.getElementById("myModal");
const btn = document.getElementById("modalBtn-right");
const closeBtn = document.querySelector(".close-btn");

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

        // modal section end 

const convert = document.getElementById("convertType");
const day = document.getElementById("dayType");
const month = document.getElementById("monthType");
const year = document.getElementById("yearType"); 

document.addEventListener("click" , convertType);

function convertType() {
    
}

function dayType() {

}

function monthType() {

}

function yearType() {

}