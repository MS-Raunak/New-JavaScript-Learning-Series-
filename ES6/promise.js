/**
 * Promice is an object which is managed or handles Asynnchronous functionality
 * It takes one callback, callback accepts 2 parameters resolve and reject
 * If asynchrnous is resolved then it will executed in then block and if reject then executed in catch block
 */

function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const wokeUpEarly = false;

            if (wokeUpEarly) {
                resolve("Woke up early");
            }
            else{
                reject("You are lazy on the bed");
            }
        }, 500)
    })
}

function brush() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const brush= true;

            if (brush) {
                resolve("I have done the brush");
            }
            else{
                reject("You didn't brush");
            }
        }, 1000)
    })
}

function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const breakfast= true;

            if (brush) {
                resolve("I had breakfast");
            }
            else{
                reject("I didn't had breakfast");
            }
        }, 1500)
    })
}

function goToSchool() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const goToSchool = true;
            if(goToSchool){
                resolve("I am going to school")
            }
            else{
                reject("Today is holiday in the school");
            }
        }, 2000);
    })
}

wakeUp().then((value)=> {
            console.log(value);
            return brush();
        })
        .then(value => {
            console.log(value);
            return breakfast();
        })
        .then(value => {
            console.log(value);
            return goToSchool();
        })
        .then(value=> console.log(value))
        .catch(error => console.log(error))