
let removeduplicate= function(arr){
   
       
  let n = arr.length;
  let res=[];
  
    for (let i=0; i<n; i++)
    {
      if(!res.includes(arr[i])){
      res.push(arr[i]);
      }
         
     }
     console.log(res);
 }
 

removeduplicate([2,9,5,8,4,3,2]);