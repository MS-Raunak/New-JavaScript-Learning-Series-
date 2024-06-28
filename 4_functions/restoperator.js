function m1(...nums) {
    console.log(nums[0]); //1
    console.log(nums); //[ 1, 2, 3 ]
}

//m1(1,2,3)


function m2(num1, num2, ...nums) {
    console.log(num1); //1
    console.log(num2);//2
    console.log(nums);//[3,4,5,6,7,8]
}

m2(1,2,3,4,5,6,7,8)
