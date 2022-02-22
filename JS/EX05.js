var pg=[]
var pt=parseFloat(prompt("primeiro termo:"))
var r=parseFloat(prompt("razão:"))
var qt=parseInt(prompt("quantidade de termos:"))

pg[0]=pt
for(var a=1, t=0; a<qt; a++){
    t=pg[a-1]*r
    pg.push(parseFloat(t))

}
alert("resultado é:" +pg)