let fruits = ["banana", "apple", "guava", "blackberry"];
fruits.sort();
console.log(fruits);//[ 'apple', 'banana', 'blackberry', 'guava' ]//sort based on alphabatic order

let arr2 = [10, 2, 30, 4, 50];
arr2.sort((a,b)=>{
    return a-b;
});
console.log(arr2); // Output: [2, 4, 10, 30, 50]

