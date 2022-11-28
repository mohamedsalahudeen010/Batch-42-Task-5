let arrayRot= function(arr,k){
    if(k>0){
    for(let i=1; i<=k ;i++){
      arr.unshift(arr.pop());
      
    }
    }
    return arr;
};
console.log(arrayRot([1,2,8,6,9,5,7,4,5],5));