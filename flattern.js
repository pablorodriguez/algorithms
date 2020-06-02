

const flatten = function(arr){
  someNewArray = arr.reduce((acc, item) => {
    if (Array.isArray(item)){
      acc = acc.concat(flatten(item));
    }else{
      acc.push(item);
    }
    return acc;
  },[]);
  return someNewArray;
};

default export flatten;
