const modes=document.getElementById('modeSwitch');
const body=document.getElementsByClassName('container')[0];
const text = document.querySelectorAll('.clockcontainer span');
const sw=document.getElementById('stopwatch');
const clockbox=document.querySelectorAll('.box');

modes.addEventListener("click",function(){
    if(modes.src.endsWith("brightness-high-fill.svg")){
        modes.src="moon-fill.svg"
        modes.height="40";
        modes.width="40";
        body.style.backgroundColor='rgb(59,61,61)';
        body.style.background='linear-gradient(90deg, rgba(59,61,61,1) 0%, rgba(0,0,0,1) 100%';
        text.forEach(span => {
            span.style.color = 'white';
          })
        body.style.transition='2s';
    }
    else{
        modes.src="brightness-high-fill.svg"
        body.style.background='linear-gradient(90deg, rgba(177,185,185,1) 0%, rgba(240,238,231,1) 100%)';
        body.style.color= 'rgb(90,95,99)';
        text.forEach(span => {
            span.style.color = 'rgb(90,95,99)'; 
            // span.style.transition='2s';
          })
        text.style.transition='2s';
    }
})

sw.addEventListener("click",function(){
    clockbox.forEach(box => {
        box.style.height="60px"; 
        box.style.width="60px"; 
        box.style.position="relative"
        box.style.left="100px"
        box.style.fontSize="30px"
      })
    text.forEach(span => {
        span.style.fontSize="30px"
      })
})






function displayTime(){
    var dateTime =new Date();
    var hour=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    
    document.getElementById('hours').innerHTML=hour;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('secs').innerHTML=sec;

}
setInterval(displayTime,10);


