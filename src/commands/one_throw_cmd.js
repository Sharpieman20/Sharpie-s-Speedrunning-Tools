var p="$(query)"; 

var i = p.split(" "); 
var a=Math.abs;
var g=Math.sign;
var q=Math.sqrt;

var x=parseFloat(i[6]);
var z=parseFloat(i[8]);
var f=parseFloat(i[9]);
f%=360;
if (f < 0) {
    f += 360;
}
f -= 180;

var r=(90-f)*(Math.PI/180);

var b=8-a(x%16)+16;
var l=[];
var s=0;

while (s<11904){
    var d=b*g(f);
    x+=d;
    z+=d*-Math.tan(r);
    var v=a(a(z%16)-8)+.5;
    s=q(x*x+z*z);
    if (s > 1408) {
        l.push({k:x,v:v,j:v*v*q(1+l.length),r:z});
    }
    b=16;
}

l.sort(function(u,i){return u.j-i.j;});
var h=l.shift();
(h.k).toFixed(0)+", "+(h.r).toFixed(0)