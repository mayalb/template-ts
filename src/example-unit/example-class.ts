export class Timer {
  mode:number
  increaseMinCPT: number
  increaseHourCPT:number
  increase: boolean
  light: number // 0 if light mode 1 if dark
  actualHour:number
  constructor() {
    this.mode=0
    this.increaseMinCPT=0
    this.increaseHourCPT=0
    this.increase=false
    this.light=0
  }

  getHour(): number {
    return this.increaseHourCPT;
  }
  getMinute(): number {
    return this.increaseMinCPT;
  }
  getMode():number{
    return this.mode;
  }
  getIncrease():boolean{
    return this.increase;
  }
  setIncrease():void{
    this.increase=true
  }
  incrementHour():void{
    this.increaseHourCPT++
  }
  incrementMinute():void{
    this.increaseMinCPT++
  }
  resetMode():void{
    this.mode=0;
  }
  switchMode(): void{
    this.mode++
  }
  setLight():void{
    this.light++
  }
  getLight():number{
    return this.light
  }
  setActualHour(hour: number){
    this.actualHour=hour
  }
  getActualHour():number{
    return this.actualHour
  }
}
