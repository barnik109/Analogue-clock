var cv=document.getElementById('canvas');
var ct=canvas.getContext('2d');
var rd=canvas.height/2;
ct.translate(rd,rd);
rd*=0.90;
setInterval(clkdraw,1000);
function clkdraw()
{
    drawf(ct,rd);
    drawn(ct,rd);
    drawtime(ct,rd);
}
function drawf(ct,rd)
{
    ct.beginPath();
    ct.arc(0,0,rd,0,2*Math.PI)
    ct.fillStyle="yellow";
    ct.fill();
    var gd;
    gd=ct.createRadialGradient(0,0,rd*0.95,0,0,rd*1.05);
    gd.addColorStop(0,'#333');
    gd.addColorStop(0.5,'white');
    gd.addColorStop(1,'#333');
    ct.strokeStyle=gd;
    ct.lineWidth=rd*0.1;
    ct.stroke();
    ct.beginPath();
    ct.arc(0,0,rd*0.1,0,2*Math.PI);
    ct.fillStyle="#333";
    ct.fill();
}
function drawn()
{
    ct.font=rd*0.15+'px arial';
    ct.textBaseLine="middle";
    ct.textAlign="center";
    var n,ag;
    for(n=1;n<13;n++)
    {
    ag=n*Math.PI/6;
    ct.rotate(ag);
    ct.translate(0,-rd*0.85);
    ct.rotate(-ag);
    ct.fillText(n.toString(),0,0);
    ct.rotate(ag);
    ct.translate(0,rd*0.85);
    ct.rotate(-ag);
    }
}
function drawtime()
{
    var now= new Date();
    var hr= now.getHours();
    var mn= now.getMinutes();
    var sd=now.getSeconds();
    hr=hr%12;
    hr=(hr*Math.PI/6)+(mn*Math.PI/360)+(sd*Math.PI/(360*60));
    drhand(ct,hr,rd*0.5,rd*0.07);
    mn=(mn*Math.PI/30)+(sd*Math.PI/(30*60));
    drhand(ct,mn,rd*0.8,rd*0.07);
    sd=(sd*Math.PI/30);
    drhand(ct,sd,rd*0.9,rd*0.02);
}
function drhand(ct,p,l,w)
{
    ct.beginPath();
    ct.lineWidth=w;
    ct.lineCap="round";
    ct.moveTo(0,0);
    ct.rotate(p);
    ct.lineTo(0,-l);
    ct.stroke();
    ct.rotate(-p);
}
