let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let AmPm = document.getElementById("am")

let change = document.getElementById("btn")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = "AM"
    
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
    AmPm.textContent = am;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()

change.addEventListener("click", function(){
    
    
})