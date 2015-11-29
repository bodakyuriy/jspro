var matrix = [ [1,2,3], [4,5,6], [7,8,9], [12,44,39] ]
var arr = [];

for(var i=0; i<matrix.length; i++){
  
  var sum=0;
  
  
  for(var j=0; j<matrix[i].length; j++){
    
      sum = sum + parseInt(matrix[i][j]);
      
  }
  
  arr.push(sum);
  
}

var max = Math.max.apply(null, arr);
var index = arr.indexOf(max);
console.log("Індекс підмасива з найбільшою сумою елемнтів дорівнює "+index+", а їх сума рівна "+max);



function obscenelyLargeNumber(str, str2){
  
  var str = String(str);
  var str2 = String(str2)
  var arr = str.split('');
  var arr2 = str2.split('');
  var arr3 = [];

  var len = str.length - str2.length;
  
  for(var i = 0; i<arr.length; i++){
    
    if(i>=len){
      
      sum = parseInt(arr[i]) + parseInt(arr2[i-len]);

      if(String(sum).length === 2 & i !== 0){

        sum = String(sum).split('');
        last = sum.length - 1;
        sum = sum[last];
        sum = parseInt(sum)

        var lastElem = arr3.length - 1;
        arr3[lastElem] = arr3[lastElem] + 1;
        console.log(arr3[lastElem]);

      }

      arr3.push(sum);
      
    }else{
      
      arr3.push(parseInt(arr[i]));
      
    }
    
  }



  var str4 = arr3.join('')
  return str4;
  
};

obscenelyLargeNumber("222234543522", 11);





function arrayDiff(a1, a2) {
  
  var o1={}; 
  var o2={}; 
  var diff=[]; 
  var i; 
  var len; 
  var k;
  
  for(i=0, len=a1.length; i<len; i++){ 
    
    o1[a1[i]] = true; 
    
  }
  
  for(i=0, len=a2.length; i<len; i++){ 
    
    o2[a2[i]] = true; 
    
  }
  
  for(k in o1){ 
    
    if(!(k in o2)){ 
      
      diff.push(k); 
      
    } 
    
  }
  
  for(k in o2){
    
    if(!(k in o1)){ 
      
      diff.push(k); 
      
    } 
    
  }
  
  return diff;
}

var a1 = ['a', 'b', 'r', 't'];
var a2 = ['a', 'b', 'c', 'd'];

arrayDiff(a1, a2); // => ['c', 'd']
arrayDiff(a2, a1); // => ['c', 'd']