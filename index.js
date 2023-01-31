let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
const links = document.querySelector(".links");
const btn = document.querySelector("#btn");

let change = document.getElementById("btn")
let am = "AM"

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    if(h > 12 && links.classList.contains("am")){
        h = h - 12;
        am = "PM"
    }
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()

change.addEventListener("click", function(){

    links.classList.toggle("am")
    if(links.classList.contains("am")){
        links.textContent = am
        btn.textContent = "24 Hour"

    }
    else{
        links.textContent = ""
        btn.textContent = "12 Hour"
    }
} )
