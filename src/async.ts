const exercise1 = ()=>{
const myPromise =  new Promise((resolve:Function) => {
  setTimeout(() => {
    console.log("-------------------------Exercise 1 ----------------------------");
    resolve('Success')
  }, 500)
})
async function getResult() {
  const result = await myPromise  
  console.log('Result:', result) // log: 'Result: Success'
}
getResult()
}
exercise1();

/* ---------------------------------------------- */
const exercise2 = ()=>{
  const myPromise =  new Promise((success:Function) => {
  setTimeout(() => {
    console.log("-------------------------Exercise 2 ----------------------------");
    success(3)
  }, 1000)
})

async function getResult() {
  const result = await myPromise 
  const result2 = result;
  console.log('Result:', result2) // log: 'Result: 3'
}

getResult()
}
exercise2();
/* ---------------------------------------------- */


const exercise3 = () =>{
  const myPromise = new Promise((resolve:Function, reject:Function)=>{
    setTimeout(()=>{
      console.log("-------------------------Exercise 3 ----------------------------");
      resolve(2)
    }, 1500)
  });
  async function getResult(){
    const result = await myPromise as number
    const result_2 = result + 1
    return result_2
  }
  getResult().then((pepito)=>{
    console.log("result:", pepito);    
  })  
}
exercise3()
/* ---------------------------------------------- */

const exercise4 = () =>{
const myPromise = new Promise((res:Function, rej:Function) =>{
  setTimeout(()=>{
    console.log("-------------------------Exercise 4 ----------------------------");
    rej("¡error!")
  }, 2000)
})
  async function getResult(){
    try{
      const result = await myPromise;
      console.log(result);      
    }
    catch(error){
      console.log(error)
    }
  }
getResult();
}
exercise4()

/* ---------------------------------------------- */

const exercise5 = () =>{
  const myPromise = new Promise((resolve:Function)=>{
    setTimeout(()=>{
      console.log("-------------------------Exercise 5 ----------------------------");
      resolve("Success")
    },2500)
  })

  async function getData(){
    const data = await myPromise
    .then((data)=>{
      console.log("I'm trying know that var data have: "+data);    
      return `This is a ${data}`
    })
    .then((data)=>{
      console.log(data)
    })
  }
  getData()
}
exercise5();


/* ---------------------------------------------- */
const exercise6 = () =>{
 const myPromise = new Promise((success:Function, reject:Function)=>{
  setTimeout(()=>{
    if(Math.random()>= 0.5){
      console.log("-------------------------Exercise 6 ----------------------------");
      success(1)
    }else{
       console.log("-------------------------Exercise 6 ----------------------------");
      reject("An error has ocurred, gg")
    }
  },3000)
 })

 async function getDataNumber(){
   const dataNumber = await myPromise
   .then((data)=>{
     return Number(data) + 1 /* duda. ¿este casting esta bien hecho? */
   })
   .then((data)=>{
     console.log(data);     
   })
   .catch((err) => {
    console.log(err)
  })
 }
 getDataNumber()
}
exercise6()