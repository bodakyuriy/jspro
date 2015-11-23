var CACHE = new Object();

ariphmetic = function(operation, a, b){
 
  var result;
  var cache = a.toString() + '' + operation + '' + b.toString();
 
  if(CACHE[cache]){
    
    result = CACHE[cache]+' cache';
    
    return console.log(result);
    
  }else{
    
    switch(operation){
      case "+": result = a + b; break;
      case "-": result = a - b; break;
      case "*": result = a * b; break;
      case "/": result = a / b; break;
      default: console.log("The operation must to be only: \"+\", \"-\", \"*\", \"/\"");
    }
    
    CACHE[cache] = result;
    
    return console.log(result);
    
  }
  
}

ariphmetic('+',3,6);
ariphmetic('+',3,6);

ariphmetic('/',21,3);
ariphmetic('/',21,3);
