//empty set
//const myList=[ ];
//console.log(myList)
// arrray of numbers 
//const numberArray=[2,4,6,7,8];
//console.log(numberArray)
function average(n){
    var s=0;
    for(var i=0; i<n.lenght;i++){
        s=s+n[i];
    }
    return s/n.length;
}
const n=[4,5,6,7,4]
console.log(average(n))