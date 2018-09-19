
function fib(n){
	var c,a=1,b=1;

	if(n<3){
		return 1;
	}else{
	for(var i=2;i<n;i++){
	 c=(a+b);
	 a=b;
	 b=c;
	}}
	return c;
}
function changehtml(){
	answer.innerHTML = v.value + "-e число Фибоначчи = " + fib(v.value)
}
var v = document.getElementById("fib");
var r = document.getElementById("res");
var answer = document.getElementById("output");
r.onclick = function (){if(v.value<1){
	answer.innerHTML = "порядковый номер не может быть меньше 1";		
	}else 
	changehtml();}