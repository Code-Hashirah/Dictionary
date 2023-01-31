setInterval(()=>{
    let newDate= new  Date();
    let month=newDate.getMonth()
    let day=newDate.getDay();
    let date=newDate.getDate();
    let hours=newDate.getHours();
    let minutes=newDate.getMinutes();
    let seconds=newDate.getSeconds();
    const Months=['January','Febuary','March','April','May','June'];
    const Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    document.getElementById('day').innerHTML=`${Days[day]} ${Months[month]} - ${date}`
    document.getElementById('time').innerHTML=`${hours}: ${minutes}: ${seconds}`, 1000,
     1000
})