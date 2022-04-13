import './index.css';
 import { Timer} from './example-unit';
 import {modeControl, increaseControl, lightControl, EditHourHtmlElement, EditMinuteHtmlElement,lightMode, darkMode} from './example-unit';

 // Créer une horloge
 const timer= new Timer();
 // initialiser l'horloge
 export let currentDate= new Date();
export function initialize(){
    let currentTimeDate = new Date();
    // check if dark mode is activated:
    
    if(timer.mode==0){ //Current time
        let hours: number  =  currentTimeDate.getHours();
        let minutes: number =  currentTimeDate.getMinutes();
        timer.setActualHour(hours)
        EditHourHtmlElement(hours)
        EditMinuteHtmlElement(minutes)
       // document.getElementById('hour').innerText= hours.toString()
       // document.getElementById('minute').innerText=minutes.toString()
    
    }else{
        if(timer.mode==1){ // When hour changed
               currentTimeDate.setHours(currentTimeDate.getHours()+ timer.getHour())
               let  hours= currentTimeDate.getHours()
               timer.setActualHour(hours)
               EditHourHtmlElement(hours)
        }else{
            if(timer.mode==2){ //When minutes are changed
                currentTimeDate.setMinutes(currentTimeDate.getMinutes()+ timer.getMinute())
               let  minutes= currentTimeDate.getMinutes()
               EditMinuteHtmlElement(minutes)
             //  document.getElementById('minute').innerText=minutes.toString()
            }else{
                alert("Vous avez désactiver les modifications")
            }
        }
    }
    if(timer.getLight()==1){ 
        if(timer.getActualHour()>20){ // we are at night
           darkMode();

        }else{
            lightMode();
        }
    }
    setTimeout(initialize,500)
}
 
initialize();
function initilizeButtons(){
    let modeBtn= document.getElementById("modeBtn")
    modeBtn.addEventListener("click", (e:Event) => modeControl(timer))
    let increaseBtn= document.getElementById("increaseBtn")
    increaseBtn.addEventListener("click", (e:Event) => increaseControl(timer))
    let lightBtn= document.getElementById("lightBtn")
    lightBtn.addEventListener("click", (e:Event) => lightControl(timer))
}
initilizeButtons()

