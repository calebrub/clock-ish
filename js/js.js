function progres(){
    let timeNow = new Date()
    let time = {
        second : timeNow.getSeconds(),
        minute : timeNow.getMinutes(),
        hour : timeNow.getHours(),
    }
    let timeElement = document.getElementById('time')
    setInterval(()=>{
         time  = addSecond(time);
        
        timeElement.innerHTML = `${stringfy(time.hour)}:${stringfy(time.minute)}:${stringfy(time.second)}`
        console.log(addSecond(time))
    }, 1000)

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

progres()