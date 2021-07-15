export const utilities={
  getAge:(date: string)=>{
    if (date == undefined || date === '') { return 0 }
    const day = 86400000
  
    const today = new Date().getTime()
    const delta = today - parseInt(date)
    return Math.ceil(delta / day)
  },

  getDatePickerFormat:(date: string | number)=>{
    const tempDate = new Date(date)

    let year = tempDate.getFullYear()
    let month = getTwoDigitNumber(tempDate.getMonth()+ 1)
    let day = getTwoDigitNumber(tempDate.getDate())

    return year + '-' + month + '-' + day
  },

  getTwoDigitNumber:(num:number)=>getTwoDigitNumber(num),

  getDaysBetweenDate:(startDate: number, endDate: number)=>{
    let startTime = new Date(new Date(startDate).toLocaleDateString()).getTime()
    let endTime = new Date(new Date(startDate).toLocaleDateString()).getTime()
    const day = 86400000
    const delta = endTime-startTime
    return Math.floor(delta/day)
  },

  getHumanReadableDate: (time: number)=>{
    const date = new Date(time)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const thisYear = new Date().getFullYear()
    let monthDay = months[month] + ' ' + day

    if(new Date().getFullYear()!==year){
      monthDay = monthDay + ', ' + year
    }
    return monthDay
  },

  roundNumber:(num: number)=>{
    return Math.round(num * 10)/10
  }
}

const months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getTwoDigitNumber(num:number){
  if(num<10){return '0' + num}
  return num.toString()
}