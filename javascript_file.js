var numArray = [29 , 56 , 78, 34 , 01];
var greatest = numArray[0];
var result =greatestNumber(numArray);
alert(result); 


function greatestNumber(numArray)
{
 for( var i=0; i< numArray.length; i++)
 {
     
    if(numArray[i] > greatest)
     {
         greatest = numArray[i];
     }
    
     
 }
 return greatest;
}