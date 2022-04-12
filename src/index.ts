import './index.css';

 import { Diagram} from './example-unit';
function initialize(){
    const timer= new  Diagram();
    let heure= timer.actualHour
    let minute= timer.actualMinute
    var inputValue = (document.getElementById('hour').innerText)
    document.getElementById('hour').innerText=heure.toString()
    document.getElementById('minute').innerText=minute.toString()
     console.log('number is', heure, inputValue );
}

initialize();
