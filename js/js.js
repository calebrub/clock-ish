
let timeNow = new Date()
var time = {
    second : timeNow.getSeconds(),
    minute : timeNow.getMinutes(),
    hour : timeNow.getHours(),
}
let isMilitaryTime = true;

let timeElement = document.getElementById('time')
let military = document.getElementById('24hrs')
let not_military = document.getElementById('12hrs')

setInterval(()=>{
    console.log(time, isMilitaryTime)
        time  = addSecond(time);
    
    timeElement.innerHTML = `${stringfy(togleTime(time.hour, isMilitaryTime))}:${stringfy(time.minute)}:${stringfy(time.second)}`
}, 1000)


function to24Hr(){
    console.log("called")
    military.className = "active"
    not_military.className = ""
    isMilitaryTime  = true

}

function togleTime(time, isMilitaryTime){
    if(!isMilitaryTime){
        if(time > 12)
            time -= 12
        else
            time += 12    
    }
    return time
}

function to12Hr(){
    console.log("called")
    not_military.className = "active"
    military.className = ""
    isMilitaryTime  = false

}

function stringfy(number){
    return number < 10 ? '0' + number : number
}

function addSecond(time){
    if (time.second === 59){
        time.second = 0
      return addMinute(time)
    }else {
        time.second++
        return time
    }
}

function addMinute(time){
    if (time.minute === 59){
        time.minute = 0
        time.second = 0
      return addHour(time)
    }else {
        time.minute++
        return time
    }
}

function addHour(time){
    if (time.hour === 23){
        time.hour = 0
        time.minute = 0
        time.second = 0
      return time
    }else {
        time.hour++
        return time
    }
}