function obscenelyLargeNumber(str, str2){
  
  var str = String(str);
  var str2 = String(str2);
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

obscenelyLargeNumber("9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", "7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777");



