let palindrome=[];
let arr=["madam","man","pop","1221"];


(function (arr){
for (let i=0; i<arr.length;i++)
{    let newarr=arr[i].split("").reverse().join("");
    if (arr[i]===newarr)
    {
        palindrome.push(arr[i]);
    }
}
console.log(palindrome);
}(arr));
