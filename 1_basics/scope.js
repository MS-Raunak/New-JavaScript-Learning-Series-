/**
 * Scope in Js
 * ===========
 * In javascript scope refers to the accesibility of variables, function and any other identifier.
 * I defines the context where those elements are usable.
 * Introduced in ES6
 * 
 * There are 3 types of Scope
 * 1. Global Scope:
 * =================
 * Variables declared outside of any function are globally scoped.
 * They are accessible from anywhere in your code, which can lead to naming conflicts and 
 * unintended side effects.
 * 
 * 2. Function Scope(local scope):
 * ===============================
 * Variables and functions declared inside a function are only accessible within that function and its nested functions (if any).
 * This helps prevent naming conflicts and promotes better code organization.
 * 
 * 3. Block Scope (Introduced with let and const):
 * ================================================
 * A more recent addition to JavaScript, introduced with let and const keywords.
 * The scope is limited to the curly braces {} of a block statement (if, for, while loops, etc.).
 * Variables declared with let or const within a block are only accessible within that block and not outside of it.
 * This provides a finer-grained control over variable accessibility and reduces the risk of unintended modifications.
 */

 //1.Global Scope 
 let gloabalVar = 10;

 function foo() {
    let localVar=20;
    var localVar2=30;
    console.log(`Global Var: ${gloabalVar}\nLocal Var: ${localVar}\nLocal Var2: ${localVar2} inside the function inside the function`);
 }
 //console.log(localVar2); //Local variable can't be accessible outside the function
 //foo();

 if(true) {
    const c=10;
     let d=20; 
 }

 //console.log(c, d); //Not accessible