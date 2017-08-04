function name1(){
var bb= document.getElementById("name").value;
var cc= "";

for (var h=0;h<bb.length;h++){
if (bb.charAt(h)=="a"|| bb.charAt(h)=="e"|| bb.charAt(h)=="i"|| bb.charAt(h)=="o"|| bb.charAt(h)=="u"){
  cc = cc+"ub" + bb.charAt(h);
} else {
  cc+=bb.charAt(h);
}
}
alert(cc);
}
