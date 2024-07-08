const dailyBtn=document.getElementById('btn-1');
const weeklyBtn=document.getElementById('btn-2');
const monthlyBtn=document.getElementById('btn-3');
const crnt1=document.getElementById('crnt-1');
const crnt2=document.getElementById('crnt-2');
const crnt3=document.getElementById('crnt-3');
const crnt4=document.getElementById('crnt-4');
const crnt5=document.getElementById('crnt-5');
const crnt6=document.getElementById('crnt-6');
const prv1=document.getElementById('prv-1');
const prv2=document.getElementById('prv-2');
const prv3=document.getElementById('prv-3');
const prv4=document.getElementById('prv-4');
const prv5=document.getElementById('prv-5');
const prv6=document.getElementById('prv-6');

fetch('./data.json')
    .then(res =>res.json())
    .then(data =>{
        dailyBtn.addEventListener("click",function(){
            crnt1.innerText=data[0].timeframes.daily.current;
            crnt2.innerText=data[1].timeframes.daily.current;
            crnt3.innerText=data[2].timeframes.daily.current;
            crnt4.innerText=data[3].timeframes.daily.current;
            crnt5.innerText=data[4].timeframes.daily.current;
            crnt6.innerText=data[5].timeframes.daily.current;
            prv1.innerText=data[0].timeframes.daily.previous;
            prv2.innerText=data[1].timeframes.daily.previous;
            prv3.innerText=data[2].timeframes.daily.previous;
            prv4.innerText=data[3].timeframes.daily.previous;
            prv5.innerText=data[4].timeframes.daily.previous;
            prv6.innerText=data[5].timeframes.daily.previous;
        })

        weeklyBtn.addEventListener("click",function(){
            crnt1.innerText=data[0].timeframes.weekly.current;
            crnt2.innerText=data[1].timeframes.weekly.current;
            crnt3.innerText=data[2].timeframes.weekly.current;
            crnt4.innerText=data[3].timeframes.weekly.current;
            crnt5.innerText=data[4].timeframes.weekly.current;
            crnt6.innerText=data[5].timeframes.weekly.current;
            prv1.innerText=data[0].timeframes.weekly.previous;
            prv2.innerText=data[1].timeframes.weekly.previous;
            prv3.innerText=data[2].timeframes.weekly.previous;
            prv4.innerText=data[3].timeframes.weekly.previous;
            prv5.innerText=data[4].timeframes.weekly.previous;
            prv6.innerText=data[5].timeframes.weekly.previous;
        })

        monthlyBtn.addEventListener("click",function(){
            crnt1.innerText=data[0].timeframes.monthly.current;
            crnt2.innerText=data[1].timeframes.monthly.current;
            crnt3.innerText=data[2].timeframes.monthly.current;
            crnt4.innerText=data[3].timeframes.monthly.current;
            crnt5.innerText=data[4].timeframes.monthly.current;
            crnt6.innerText=data[5].timeframes.monthly.current;
            prv1.innerText=data[0].timeframes.monthly.previous;
            prv2.innerText=data[1].timeframes.monthly.previous;
            prv3.innerText=data[2].timeframes.monthly.previous;
            prv4.innerText=data[3].timeframes.monthly.previous;
            prv5.innerText=data[4].timeframes.monthly.previous;
            prv6.innerText=data[5].timeframes.monthly.previous;
        })

    })


