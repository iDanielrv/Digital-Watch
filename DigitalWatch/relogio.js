

const hourText = document.getElementById("painelText");


const relogio = setInterval(function time(){
    console.log('batata');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    (hours < 10) ? hours = "0" + hours: hours

    if (minutes < 10) minutes = "0" + minutes;

    (seconds < 10) ? seconds = "0" + seconds: seconds

    hourText.innerHTML = `${hours}`+`:`+`${minutes}`+`:`+`${seconds}`;
   
}, 1000);

//console.log(hours);
//console.log(minutes);
//console.log(seconds);

//setInterval(function() {
   //hourText.innerHTML = `${hours}:${minutes}:${seconds}`; 
