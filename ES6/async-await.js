/**
 * async and await are the features in JavaScript that help handle 
 * asynchronous operations more easily and readably.
 * 
 * An async function is a function that returns a Promise.
 *  The async keyword is placed before a function declaration
 * 
 * The await keyword can only be used inside async functions. It makes JavaScript wait until
 *  the Promise is resolved and returns its result. 
 */

function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const wokeUpEarly = true;

            if (wokeUpEarly) {
                resolve("Woke up early");
            }
            else {
                reject("You are lazy on the bed");
            }
        }, 500)
    })
}

function brush() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const brush = true;

            if (brush) {
                resolve("I have done the brush");
            }
            else {
                reject("You didn't brush");
            }
        }, 1000)
    })
}

function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const breakfast = true;

            if (brush) {
                resolve("I had breakfast");
            }
            else {
                reject("I didn't had breakfast");
            }
        }, 1500)
    })
}

function goToSchool() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const goToSchool = false;
            if (goToSchool) {
                resolve("I am going to school")
            }
            else {
                reject("Today is holiday in the school");
            }
        }, 2000);
    })
}

async function dailyRoutine() {
    try {
        const wakeUpResult = await wakeUp();
        console.log(wakeUpResult);

        const brushResult = await brush();
        console.log(brushResult);

        const breakfastResult = await breakfast();
        console.log(breakfastResult);

        const goToSchoolResult = await goToSchool();
        console.log(goToSchool);
    } 
    catch (error) {
        console.log(error);
    }
}

dailyRoutine();