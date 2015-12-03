function obscenelyLargeNumber(str, str2){
  
  if(str.length>str2.length){
    var num1 = str;
    var num2 = str2;
  }else{
    var num1 = str2;
    var num2 = str;
  }
  
  var str = String(str);
  var str2 = String(str2);
  var arr = num1.split('');
  var arr2 = num2.split('');
  var arr3 = [];
  var num1;
  var num2;
 
  var len = num1.length - num2.length;

  for(var i = 0; i<arr.length; i++){
    
    if(i>=len){
      
      sum = parseInt(arr[i]) + parseInt(arr2[i-len]);

      if(String(sum).length === 2 & i !== 0){

        sum = String(sum).split('');
        last = sum.length - 1;
        sum = sum[last];
        sum = parseInt(sum);

        var lastElem = arr3.length - 1;
        arr3[lastElem] = arr3[lastElem] + 1;

      }

      arr3.push(sum);
      
    }else{
      
      arr3.push(parseInt(arr[i]));
      
    }
    
  }


  var str4 = arr3.join('');
  
  return str4;
  
 
  
};

obscenelyLargeNumber('21', '999999999999999999999999999999999999999999');