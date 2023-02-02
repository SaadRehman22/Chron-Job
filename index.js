const schedule=require('node-schedule');
const moment=require('moment')
const dateTime=new Date('Thu Jan 19 2023 14:12:15 GMT+0500');

// console.log(dateTime);

//Chron Job at particular date and time
schedule.scheduleJob(dateTime,()=>{

    // console.log("The Job runs @",new Date().toString());
    //we can send emails,notifications or can sotre a backup if requries.
})

//Chron job regular interval

//IT also has an option field of seconds(in first place).
//This will run every 3 second.
// schedule.scheduleJob('18 4 * * *',()=>{
//     const checkTime=moment().subtract(2,'')
//     // console.log(new Date().toLocaleString())
// })


schedule.scheduleJob('55 29 16 * * *',()=>{
    const momentCheck=moment().subtract(2,'minutes')
    console.log(momentCheck)
})
