function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm}:${ss} ${am_pm}`
    document.getElementById("time").innerHTML=fullTime
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else
    {
        mo="Dec"
    }
    var fulldate=dd+"/"+mo+"/"+yy
    document.getElementById("date").innerHTML=fulldate;
    switch(day)
    {
            case 0:
                day="Sunday"
                document.body.style.backgroundImage="url(0.jpg)"
                break;
            case 1:
                day="Monday"
                document.body.style.backgroundImage="url(1.jpg)"
                break;
            case 2:
                day="Tuesday"
                document.body.style.backgroundImage="url(2.jpg)"
                break;
            case 3:
                day="Wednesday"
                document.body.style.backgroundImage="url(3.jpg)"
                break;
            case 4:
                day="Thursday"
                document.body.style.backgroundImage="url(4.jpg)"
                break;
            case 5:
                day="Friday"
                document.body.style.backgroundImage="url(5.jpg)"
                break;
            case 6:
                day="saturday"
                document.body.style.backgroundImage="url(6.jpg)"
                break;
    }
    document.getElementById("day").innerHTML=day;
    document.getElementById("sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000) 
}
function greet()
{
    var Date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning"
        document.getElementById("bigvid").src=""
    }
    else if(hh>12 && hh<=16)
    {
        document.getElementById("GreetMessage").innerHTML="Good Afternoon"
        document.getElementById("bigvid").src="" 
        document.getElementById("bigvid").style.width="100%"
        document.getElementById("bigvid").style.bottom="-100px"
    }
    else if(hh>16 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Evening"
        document.getElementById("bigvid").src="" 
        document.getElementById("bigvid").style.width="100%"
        document.getElementById("bigvid").style.bottom="-100px"
    }
    else
    {
        document.getElementById("GreetMessage").innerHTML="Good Night"
        document.getElementById("bigvid").style.color="white"
        document.getElementById("bigvid").src="" 
        document.getElementById("bigvid").style.width="100%"
        document.getElementById("bigvid").style.bottom="-100px"
    }
}
greet()
function closeWind()
{
    document.getElementById("greet").style.display="none"
}
var a=setTimeout(closeWind,5000);