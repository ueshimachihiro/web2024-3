function bmi710(){
 var x = Number(document.getElementById('input5').value);
 var y = Number(document.getElementById('input6').value);
 if(document.getElementById('y/(x*x)').value < 1.8)
  {alert('低体重');}
  else if(document.getElementById('y/(x*x)').value < 25)
  {alert('普通');}
  else{alert('肥満');}
}
