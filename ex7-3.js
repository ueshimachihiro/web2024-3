function add(){
 var x = Number(document.getElementById('input3').value);
 var y = Number(document.getElementById('input4').value);
 var xFormatted = x.toString().replace('、', '.');
 var yFormatted = y.toString().replace('、', '.');
 var result = Number(xFormatted)
 var result = Number(yFormatted)
 alert(y/(x*x));
}
