function add(){
 var x = Number(document.getElementById('input3').value);
 var y = Number(document.getElementById('input4').value);
 var xFormatted = x.toString().replace('、', '.');
 var yFormatted = y.toString().replace('、', '.');
 alert(y/(x*x));
}
