function bmi710(){
 var x = Number(document.getElementById('input5').value);
 var y = Number(document.getElementById('input6').value);
 if('y/(x*x)' < 1.8)
  {alert('低体重');}
  else if('y/(x*x)' < 25)
  {alert('普通');}
  else{alert('肥満');}
}
