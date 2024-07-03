const   hr=document.getElementById('hr'),
        mt=document.getElementById('mt'),
        sd=document.getElementById('sd'),
        tm=docuent.getElementById('tm');

setInterval(()=>{
    const time = new Date();
    let h=time.getHours(),
        m=time.getMinutes(),
        s=time.getSeconds();

    if(h <= 9) hr.textContent=`0${h}:`;
    else hr.textContent=`${h}:`;

    if(m <=9) mt.textContent=`0${m}:`;
    else hr.textContent=`${m}:`;

    if (s <=9) sd.textContent=`0${s}`;
    else sd.textContent = s;

    if(h > 11) tm.textContent = 'PM';
    else tm.textContent = 'AM';
}, 1000)