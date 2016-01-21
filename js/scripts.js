var counted = [];
var countby = function(numb1, numb2) {
  for(var i = 0; i < numb1; i+=numb2) {
     if (i > 0){
       counted.push(i);
     }
   }
   return counted;
}
