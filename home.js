setInterval(glow, 32);

var x = document.querySelectorAll(".heading");
var y = 0;

function glow()
{
    var val = "0px 0px "+ y +"px rgba("+ y +"0,0,1)"
    x[0].style.textShadow = val;
    y++;
    if(y>100)
        y=0;
}