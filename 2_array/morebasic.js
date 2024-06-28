let arr= [1,2,3,4,5];

//#####includes() return boolean value whether the given ele present in existing arr or not
//console.log(arr.includes(5));//true
//console.log(arr.includes(50));//false

//#####indexOf() return index val if given ele present if not present then it will return -1
//console.log(arr.indexOf(1));//0th index
//console.log(arr.indexOf(10));//-1

//######at(index) take index val and return ele on that position
//console.log(arr.at(4)); //5

//######concat() used to concat multiple array together in single new array
//let arr2 = [7,9,6,8];
//console.log(arr.concat(arr2));

//#####reverse() used to reverse original array
const months = ['Jan', 'March', 'April', 'June'];
//months.reverse();
//console.log(months);//[ 'June', 'April', 'March', 'Jan' ]

//#####toReversed() used to reverse given array's elements and return new array
const another_months = ['Jan', 'March', 'April', 'June'];
const resMonths = months.toReversed();
//console.log(another_months);//['Jan', 'March', 'April', 'June'];
//console.log(another_months);//[ 'June', 'April', 'March', 'Jan' ]

//#####reduce(): higher order fn, used to reduce the array of elements in a single value
const nums = [2,4,6,8];
let initialVal = 0;
let reducedVal = nums.reduce((accumulator, cuurentVal)=> {
    return accumulator +cuurentVal;
}, 0)

//console.log(reducedVal);//20

//#####join(): join all elements into a single elements based on specified delimeter
const elements = ['Fire', 'Air', 'Water'];
let res = elements.join(); //by default delimeter will be comma(,)
//console.log(res); // Fire,Air,Water
res=elements.join("");
//console.log(res);//FireAirWater
res=elements.join("-");
//console.log(res);//Fire-Air-Water

//####toString() is used to convert array elements into the string included comma(,)
const array1 = [1, 2, 'a', '1a'];
res = array1.toString();
console.log(res);//"1,2,a,1a"




