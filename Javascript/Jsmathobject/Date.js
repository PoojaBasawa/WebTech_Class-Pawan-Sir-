// Date Object
// Whenever we need to know about the date we should use date object gives information regarding day,month,year,minutes,hours,seconds and time zone.
var date=new Date()
console.log(date)

// method of date object
// 1. getDate() is used to get the current date.
var currentdate=date.getDate()
console.log(currentdate)

//2. getMonth() is used to get the current month.
let month=date.getMonth()
console.log(month)

//3. getDay() is used to get the current day.
let day=date.getDay()
console.log(day)

//4. getFullYear() is used to get the current year.
let year=date.getFullYear()
console.log(year)

//5. getHours() is used to get the current hours.
let hours=date.getHours()
console.log(hours)

//6. getMinutes() is used to get the current minutes.
let minutes=date.getMinutes()
console.log(minutes)

//7. getSeconds() is used to get the current seconds.
let seconds=date.getSeconds()
console.log(seconds)