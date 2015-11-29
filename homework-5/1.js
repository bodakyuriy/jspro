var matrix = [4,8,3,5,7,9,-7,4,7,8,9,6,7,-9,10,4,3,4]; 
var arr = [];
var sum = 0;
for(var i=0; i<=matrix.length; i++){
  
  if(matrix[i] >= 0){
        
    sum = sum + parseInt(matrix[i]);
    str = sum + '+' + parseInt(matrix[i]);
        
  }else{
        
    arr.push(sum);
    sum = 0;
    
    continue;
        
  }
  
}

console.log(arr);
var max = Math.max.apply(null, arr);
var index = arr.indexOf(max);
console.log("Індекс підмасива з найбільшою сумою елемнтів дорівнює "+index+", а їх сума рівна "+max);
