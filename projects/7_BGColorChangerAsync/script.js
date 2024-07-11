let start = document.getElementById('start');
let stop = document.getElementById('stop');
let colorCode = document.getElementById('colCode');
let  intervalId;

//Method to generate Random Color
function generateRandomColor() {
    let colorCode = "0123456789ABCDEF";
    let colorHexCode="#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random()*16);
        colorHexCode+=colorCode[randomIndex];
    }
    
    return colorHexCode;
}

//Change background Color every Second
function changeBgColor() {
    let randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor
    colorCode.innerHTML = randomColor;
}

//Start Changing Color in every second
function startChangeBgColor() {
    if(intervalId==null){
        intervalId = setInterval(changeBgColor, 1000)
    }
}

//Stop Changing BAckground Color
function stopChangeColor() {
    clearInterval(intervalId);
    intervalId=null;
}

//Click start button
start.addEventListener('click', startChangeBgColor);

//Click Stop button
stop.addEventListener('click', stopChangeColor);