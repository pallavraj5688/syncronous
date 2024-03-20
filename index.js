// console.log("pallav")

// // console.log("mohan")
// setTimeout(()=>{
//    console.log("rohan")
// },4000)

// console.log("chitransh")

//-------------------------------------------------------------------------------------------
// let a=10;
// let b= 0;

// setTimeout(()=>{
//     b=10;
// },2000)
// console.log(a+b)

//----------------------REsolve in promises--------------------------------------------
// let  p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10);
//     },2000)
// })
// p1.then((data)=>{
//     b=data
//     console.log(a+b)
// })
// // console.log(a+b)
//--------------------------------------------------------------------------------------------
//----------------------Resolve in promises---------------------------------------------------
let a=10;
let b=20;

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(b);
    },4000)
})
p1.then((data)=>{
    b=data
    console.log(a+b)
})