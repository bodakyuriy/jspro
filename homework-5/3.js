function arrayDiff(a1, a2){
  
  var o1={}; 
  var o2={}; 
  var diff=[]; 
  var i; 
  var k;
  
  for(var i=0; i<a1.length; i++){ 
    
    o1[a1[i]] = true; 
    
  }
  
  for(var i=0; i<a2.length; i++){ 
    
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

arrayDiff(a1, a2); 
arrayDiff(a2, a1); 