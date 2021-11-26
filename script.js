// hr,min and sec are variables to contain time
var hr=0;
var min=0;
var sec=0;
// state shows whether stopwatch is running or not
// false state means its not running
var state=false;
let cur=document.getElementById("start");
function start(){
    // if state is false then start timer that is call function stopwatch()
    if(state!=true){
        state=true;
        cur.style.cursor="not-allowed"
        stopwatch();
    }
}
// in stop function change the state of stopwatch 
function stop(){
    state=false;
    cur.style.cursor="pointer"
}
// Reset function changes the innertext of hour,minute and second
function reset(){
    state=false;
    cur.style.cursor="pointer"
    hr=0;
    min=0;
    sec=0;
    document.getElementById("hour").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("second").innerHTML="00";

}
// setTimeout is used to recursively call this function in every 1 sec
//  and increment the value of hr,min and sec accordingly.
function stopwatch(){
    if(state==true){
        sec++;
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
            sec=0;
        }
        if(hr<10)
        document.getElementById("hour").innerHTML="0"+hr;
        else
        document.getElementById("hour").innerHTML=hr;
        if(min<10)
        document.getElementById("minute").innerHTML="0"+min;
        else
        document.getElementById("minute").innerHTML=min;
        if(sec<10)
        document.getElementById("second").innerHTML="0"+sec;
        else
        document.getElementById("second").innerHTML=sec;

        setTimeout("stopwatch()",1000);
    }
}