import { Timer} from "./example-class";

export function modeControl(timer: Timer){
    console.log('Nous avons cliqué mode' );
    let mode: number= timer.mode
    if(mode>= 2){
        timer.resetMode()
        alert("Vous avez désactiver les modifications")
    }else{
        timer.switchMode()
    }

}
export function increaseControl(timer: Timer){
    if(timer.getMode()==1){ //increase hours
        timer.incrementHour()
    }else{
        if(timer.getMode()==2){
            timer.incrementMinute()
        }else{
            alert("Veuillez changer le mode")
        }
        
    }
   
}
export function lightControl(timer:Timer){
   // Activate Dark mode
       timer.setLight()
       if(timer.getLight()>1){ //Desactivate light button
           timer.light=0;
       }
}
export function EditHourHtmlElement(hours:number){
    document.getElementById('hour').innerText= hours.toString()
}
export function EditMinuteHtmlElement(minutes:number){
    document.getElementById('minute').innerText= minutes.toString()
}
export function lightMode(){
    document.getElementById("timer").style.color='#f5f6f6'
    document.getElementById("body").style.backgroundColor = "#202020";
    document.getElementById("h1").style.color = "#202020";
    document.getElementById("h4").style.color = "#202020";
    document.getElementById("modeBtn").style.backgroundColor = "#202020";
    document.getElementById("modeBtn").style.color = "#f5f6f6";
    document.getElementById("increaseBtn").style.backgroundColor = "#202020";
    document.getElementById("increaseBtn").style.color = "#f5f6f6";
    document.getElementById("lightBtn").style.backgroundColor = "#202020";
    document.getElementById("lightBtn").style.color = "#f5f6f6";
}

export function darkMode(){
    document.getElementById("timer").style.color='#40E0D0'
    document.getElementById("body").style.backgroundColor = "#202020";
    document.getElementById("modeBtn").style.backgroundColor = "#f5f6f6";
    document.getElementById("modeBtn").style.color = "#202020";
    document.getElementById("increaseBtn").style.backgroundColor = "#f5f6f6";
    document.getElementById("increaseBtn").style.color = "#202020";
    document.getElementById("lightBtn").style.backgroundColor = "#f5f6f6";
    document.getElementById("lightBtn").style.color = "#202020";
}