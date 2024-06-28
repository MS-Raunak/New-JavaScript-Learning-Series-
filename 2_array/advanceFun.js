//map():-Higher order fn used to perform some opeation with elemnts of an array and return new array without affecting the existing array
let arr = [2,4,6,8];

let resArr = arr.map((ele) => {
    return ele*ele;
})

//console.log(arr);// [ 2, 4, 6, 8 ]
//console.log(resArr);// [ 2, 4, 6, 8 ]

//flat(level): used to reduce level of  multidimensional array.level could be 1,2,..infinity
let mulArr = [1,2,3, [4,5,6, [7,8,9]]]
resArr = mulArr.flat(Infinity);//on infinite it will convert into a 1d array
//console.log(mulArr);
//console.log(resArr);

//filter(): Higher order fn used to filter elements from an array based on some specific conditiom
arr = [2,3,4,5,6,7,89,10];
resArr = arr.filter((ele)=>{
    return (ele%2===0);
})
//console.log(arr);//[2,3,4,5,6,7,89,10];
//console.log(resArr);//[ 2, 4, 6, 10 ]

//slice(): used to return portion of an array from given array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let resAnimal = animals.slice(0,3); //from index 0 to total 3
//console.log(animals);//['ant', 'bison', 'camel', 'duck', 'elephant'];
//console.log(resAnimal);//[ 'ant', 'bison', 'camel' ]

//splice():is used to change the contents of original array by removing/replacing existing element or adding new elements
const months = ['Jan', 'March', 'April', 'June'];
//months.splice(1,2)//remove from index 1 to total 2 elements from original array
//console.log(months);//[ 'Jan', 'June' ]

const another_months = ['Jan', 'March', 'April', 'June'];
//another_months.splice(0,1, "Feb");//remove from index 0 to total 1 element and insert Feb
//console.log(another_months);//[ 'Feb', 'March', 'April', 'June' ]

const anotherMonths = ['Jan', 'March', 'April', 'June'];
another_months.splice(1,0, "Feb");//remove from index 1 to total 0 element and insert Feb
console.log(another_months);//[ 'Jan', 'Feb', 'March', 'April', 'June' ]
/**
 * Different Functionality of splice function
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2)
    splice(start, deleteCount, item1, item2, …,  itemN)
 */