function clock() {
    let secDots = document.getElementById('secDots');
    let minDots = document.getElementById('minDots');
    let hrDots = document.getElementById('hrDots');
    
    var date = new Date();
    var hours = date.getHours() % 12
    // convert to 12-hour format
    var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    hours = hours === 0 ? 12 : hours; 
    // handle midnight (0 hours)
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // -------- secondsDots
    var secondsDots = '';
    for(var i = 1; i < 61; i++){
        var rotation = i * 6; //Drehen Sie jede Linie um 6 Grad
        if ( i === seconds){
            secondsDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            secondsDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }
    // -------- minutesDots
    var minutesDots = '';
    for(var i = 1; i < 61; i++){
        var rotation = i * 6; //Drehen Sie jede Linie um 6 Grad
        if ( i === minutes){
            minutesDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            minutesDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }
    // -------- hoursDots
    var hoursDots = '';
    for(var i = 1; i < 61; i++){
        var rotation = i * 6; //Drehen Sie jede Linie um 6 Grad
        if ( i === hours){
            hoursDots += '<div class="dot active" style="transform: rotate('+rotation+'deg)"></div>';
        }
        else{
            hoursDots += '<div class="dot" style="transform: rotate('+rotation+'deg)"></div>';
        }
    }

    secDots.innerHTML = secondsDots + '<b>' + ampm + '</b>' + '<h2>' + 
                        zero(seconds) + '<br><span>Seconds</span></br></h2>';
    minDots.innerHTML = minutesDots + '<h2>' + zero(minutes) + '<br><span>Minutes</span></br></h2>';
    hrDots.innerHTML = hoursDots + '<h2>' + zero(hours) + '<br><span>Hours</span></br></h2>';

    // add Zero in singel digit number
    function zero(number){
        if (number < 10){
            return '0' + number;
        }
        return number;
    }

}
setInterval(clock,1000);