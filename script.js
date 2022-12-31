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