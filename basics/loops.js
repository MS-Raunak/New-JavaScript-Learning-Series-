
//While Loops
// let i=0; 
// while (i<5) {
//     console.log(i);
//     i++
// }

//do-while loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while (i<10);

// //For loop
// for(let i=1; i<=5; i++) {
//     console.log(i);
// }
    
// //for..of loop: it is specially designed to iterate iterable ojects like arrays or strings.
// const colors = ["red", "green", "blue"];

// for(const color of colors) {
//     console.log("Color: ", color);
// }

//for..in loop: it is iterate enumrable properties of an object
// const person = {name: "Chhaya", age:30};
// for (const key in person) {
//     console.log(key, "=" ,person[key]);
// }

/**
 * Choosing the Right Loop:

* Use for loops when you know the exact number of iterations beforehand.
* Use while loops when the condition for continuing the loop can change dynamically.
* Use do-while loops when you need the code block to run at least once.
* Use for...of loops for iterating over arrays, strings, or other iterable objects.
* Use for...in loops for iterating over the properties of an object (use with caution due to potential 
*   issues with non-own properties).



Differentiate 	for...of	for...in
*
*for..of:
==========
1- for...of: Designed specifically for iterating over iterable objects. These include arrays, strings, maps, sets, and some custom iterable objects. It provides access to the values within the iterable.
 - for...in: Iterates over the enumerable properties of an object (including inherited properties). It provides access to the property names (keys), not the values directly.

2- for...of: Generally follows the insertion order for iterables like arrays and strings. However, the exact order might not be guaranteed for all iterables (e.g., maps or sets).
 - for...in: The order of iteration for object properties is not guaranteed and might vary across different JavaScript engines. It's not recommended to rely on a specific order when using for...in.

3- for...of: Doesn't iterate over properties of the object itself, only the values within the iterable.
- for...in: Iterates over all enumerable properties, including those inherited from the prototype chain. This can sometimes lead to unexpected behavior if you're not careful. 
 */

/*break and continue:
===================
break keywordnis used to terminate the loop and jump the control outside of loop
continu keyword is used to skip the current iteration and jump to the next iteration
*/
//print till 3
// for (let i = 1; i <= 5; i++) {
//     if(i>3) break;
//     console.log(i);
// }
// console.log("break executed..");

//print till 5 by skipping 3
for (let i = 1; i <= 5; i++) {
    if(i==3) continue;
    console.log(i);
}
