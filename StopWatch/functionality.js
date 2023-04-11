const modes=document.getElementById('modeSwitch');
const body=document.querySelector('body');

modes.addEventListener('click',function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        // body.style.backgroundColor='rgb(59,61,61)';
        body.style.background='linear-gradient(90deg, rgba(177,185,185,1) 0%, rgba(240,238,231,1) 100%)';
        body.style.color= 'rgb(90, 95, 99)';
        body.style.transition='2s';
    }
    else{
        body.style.backgroundColor='rgb(59,61,61)';
        body.style.background='linear-gradient(90deg, rgba(59,61,61,1) 0%, rgba(0,0,0,1) 100%';
        body.style.color= 'white';
        body.style.transition='2s';
    }
});
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


