let time = document.querySelector(".time")
let year = document.querySelector(".year")

setInterval((
    function timer(){
        let now = new Date();
        time.innerHTML = now.toLocaleTimeString();
        let display = now.getHours();
        if(display >= 00 && display < 03){
            year.style.display = "block"
            time.style.display = "none"
        }else{
            year.style.display = "none"
            time.style.display = "block"
        }
    }
    ), 1000)

let det = document.querySelector(".det")
setInterval((
    function details(){
        let nows = new Date();
        let hour = nows.getHours();
        let mins = nows.getMinutes();
        let conHour = 24 - hour -1
        let conMin = 60 - mins
        det.innerHTML = `${conMin} minute(s) to 2023`
        if(hour == 00){
            det.style.display = "none";
        }else{
            det.style.display = "block";
        }
    }
), 1000)