import flatten 'flattern';

const uniqSort = function(arr) {
  const breadcrumbs = {};
  const result = [];
  arr.forEach((v) => {
    if (!breadcrumbs[v]){
      breadcrumbs[v] = true;
      result.push(v)
    }    
  })
  return result.sort((a,b) => a - b);
};

const factorial = (n) => {
  if (n == 1)
    return 1;

  f = n * factorial(n-1)
  return f;
};

const times10 = (n) => n * 10
const cache = {}

const memoTimes10  = (n) => {
  if (n in cache){
    console.log("fetching from cache:", n)
    return cache[n]
  }else{
    console.log("calculation resutl")
    let result = times10(n)
    cache[n] = result
    return result
  }

}

var buildArray = function(target, n) {    
  let outPut = [];  
  for (i=1; i <= n; i++){
    if (target.length == 0) {break;} 
    let ix = target.indexOf(i);
    if (ix >= 0){      
      outPut.push("Push");         
      target.splice(ix,1);
    }else{
      outPut.push("Push");
      outPut.push("Pop");
    } 

  }
  return outPut;
};


console.log(flatten([1,2,[3,4,[5,6,7,[11,12,13]],8],9,10]));
console.log(buildArray([1,3],3));
console.log(buildArray([1,2,3],3));
console.log(buildArray([1,2],4));