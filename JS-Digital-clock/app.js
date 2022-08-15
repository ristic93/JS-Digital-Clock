let hourElement = document.getElementById("hour");
let minElement = document.getElementById("min");
let secElement = document.getElementById("sec");
let periodElement = document.getElementById("period");

let dayElement = document.getElementById("day");
let dateElement = document.getElementById("date");
let monthElement = document.getElementById("month");
let yearElement = document.getElementById("year");


let clock = () => {

    let date = new Date();
    
    let hours = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); // 0 - 59
    let period = "AM"
    

    // for 12 hours clock
    // hours
    if ( hours == 0 ) {
        hours = 12;
    }

    if ( hours > 12 ) {
        hours = hours - 12;
        period = "AM"
    } else {
        period = "PM"
    }

    // Zero is added if the time is between 0 and 9
    hours = ( hours < 10 ) ? "0" + hours : newHours = hours;

    // Zero is added if minutes is between 0 and 9
    minutes = ( minutes < 10 ) ? "0" + minutes : newMinutes = minutes;

    // Zero is added if seconds is between 0 and 9
    seconds = ( seconds < 10 ) ? "0" + seconds : newSeconds = seconds;
 

    // install months and week day name
    const weeks = ["Sunday","Monday","Tuesday","Wednesday","Thirsday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    let dy = weeks[date.getDay()]; // for week day 
    let dd = date.getDate(); // for date
    let mm = months[date.getMonth()]; // for month
    let yy = date.getFullYear(); // for year
    
    
    hourElement.innerHTML = newHours + ":";
    minElement.innerHTML = newMinutes + ":";
    secElement.innerHTML = newSeconds + " ";
    periodElement.innerHTML = period;
    
    
    dayElement.innerHTML = dy + " / ";
    dateElement.innerHTML = dd + " ";
    monthElement.innerHTML = mm + " / ";
    yearElement.innerHTML = yy;   
}
    
    
    window.setInterval(() => {
    clock();
    }, 1000);