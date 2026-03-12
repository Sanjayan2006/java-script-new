let num=[14,64,25,57,9,47,34,25,75,93,18,5,3,76,35,]
let hello=[23,50,70,90,100,45]
let q1=num.filter(
    numbers=>numbers%2==0
)
console.log(q1)


let q2=num.filter(
    numbers=>numbers%2==1
)
console.log(q2)


let q3=num.find(
    numbers=>numbers>50
)
console.log(q3)


let q4=num.some(
    numbers=>numbers==25
)
console.log(q4)


let q5=num.some(
    numbers=>numbers<0
)
console.log(q5)


let q6=num.every(
    numbers=>numbers>=0
)
console.log(q6)


let q7=num.slice(0,5);
console.log(q7)


let q8=num.slice(-3);
console.log(q8)


let q9=num.concat(hello);
console.log(q9);



let q10=num.some(
    numbers=>numbers===numbers
)
console.log(q10)




//Q11
console.log(hello.indexOf(100));


let q12=num.some(
    numbers=>numbers>10
)
console.log(q12)
console.log(num)





let q13=hello.filter(
    numbers=>numbers%7==0
)
console.log(q13)


let q14=hello.every(
    numbers=>numbers>100
)
console.log(q14)



let Name=["Sanjay","Sri","Asopan","Kayal","Diyani","Nila"]
let q15=Name.find(
    Name=>Name.length>5
)
console.log(q15)




let Name1=["Sanjay"," " ,"Sri","Asopan","Kayal"," ","Diyani","Nila"]
let q16=Name1.some(
    Name1=>Name1==" "
)

console.log(q16)



let q17=hello.filter(
    numbers=>numbers%3==0
)
console.log(q17)