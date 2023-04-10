function displayTime(){
    var dateTime =new Date();
    var hour=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    
    document.getElementById('hours').innerHTML=hour;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('secs').innerHTML=sec;

}
setInterval(displayTime,10)