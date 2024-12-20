//date object
//whenever we need to know about the date we should use date object
//object gives information regarding day,month,year,minutes,hours,seconds and time zone

var date=new Date()
console.log(date)

//method of date object
//1.getDate() method is used to get the current date
var currentdate=date.getDate()
console.log(currentdate)

//2.getMoth() is used to get thr current month
let month=date.getMonth()
console.log(month)

//getDay() is used to get the current day
let day=date.getDay()
console.log(day)

//getFullYear( ) is used to print current year
let year=date.getFullYear()
console.log(year)

//getHours() is used to print current hour
let hour=date.getHours()
console.log(hour)

//getMinute() is used to print the current minutes
let minute=date.getMinutes()
console.log(minute)

//getSeconds() is used to print the current seconds
let second=date.getSeconds()
console.log(second)