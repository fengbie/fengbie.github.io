/*// noinspection JSIgnoredPromiseFromCall

// 这个语句的作用就是取代了BF原生的悬浮窗，不想要的话可以删掉（不确保没BUG）
document.addEventListener(
    'DOMContentLoaded',
    () => btf.snackbarShow = (text, time = 3500) => kms.pushInfo({text, time}, null)
)
*/


// 动态心跳
$(document).ready(function(e){
    $('.copyright').html('©2023 - 2023 <i class="fa-fw fas fa-heartbeat fa-beat" style="color: #f40053;"></i> By  starrim <div class="framework-info"> </div>');
})
$(document).ready(function(e){
    show_date_time();
})

//本站运行时间
function show_date_time(){
$('.framework-info').html('本站已运行<span id="span_dt_dt" style="color: #000;"></span>');
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("12/10/2023 0:26:07");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:#767ec1>'+daysold+'</font> 天 <font style=color:#f391a9>'+hrsold+'</font> 时 <font style=color:#fdb933>'+minsold+'</font> 分 <font style=color:#84b738>'+seconds+'</font> 秒';
}


