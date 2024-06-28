//this KEYWORD WITH REGULAR FUNCTION
function m1(params) {
    //console.log(this);//..global: [Circular *1],
    let name ="Chhaya";
    console.log(this.name); //undefined
}
//m1();

//this KEYWORD WITH FUNCTION EXPRESSION
const m2 = function() {
    //console.log(this);// global: [Circular *1],
    let name ="Chhaya";
    console.log(this.name); //undefined
}
//m2();

//this KEYWORD WITH LAMBDA FUNCTION
const m3 = () => {
    console.log(this);//{}
    let name ="Chhaya";
    console.log(this.name); //undefined
}
m3()