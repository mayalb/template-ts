export class Diagram {
  actualHour: number
  actualMinute:number
  mode:number
  increase: number
  light: boolean
  constructor() {
    let today = new Date();
    this.actualHour=today.getHours();
    this.actualMinute=today.getMinutes();
    this.mode=0
    this.increase=0
    this.light=true
  }

  getActualHour(): number {
    return this.actualHour;
  }
  getActualMinute(): number {
    return this.actualMinute;
  }
  incrementHour():void{
    this.actualHour++
  }
  incrementMinute():void{
    this.actualMinute++
  }
}
