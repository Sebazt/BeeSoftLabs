//example for TS
/* const promesa  = new Promise ((resolve:Function, reject:Function)=>{
  if(true){
    setTimeout (()=>{
        resolve("resolve retorna que todo esta bien y es el ultimo console.log ya que es una operación asincronca simulada por el setTimeOut()")
    },2000)
  }else{
    reject(Error("Reject me devuelve el error, algo salio mal"))
  }
})

promesa
  .then((resolve) =>{
    console.log(resolve)
  }).catch((error)=>{
    console.log(error)
  })
 */


const exercise_1 = () => {
  const myPromise = Promise.resolve(1);
  setTimeout(() => {
    myPromise.then((value) => {
      console.log("---------------Exercise 1----------------");
      console.log(value); // log: 1
    });

  }, 500);
};
exercise_1();


const exercise_2 = (value:number) =>{
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)  
    },1000)
})

myPromise.then((value) => {
  console.log("---------------Exercise 2----------------");
 console.log(value)  // log: 2
})}
exercise_2(2);




const exercise_3 = (value:number)=>{
const myPromise = new Promise((resolve:Function, reject:Function) => {
  setTimeout(() => {
    resolve(value);
  }, 1500);
   
})

myPromise
  .then((value) => {
    console.log("---------------Exercise 3----------------");
    console.log(value);
     
  })
  .catch((value) => {
   console.log(value + 2) // log: 4
  })
}
exercise_3(4);

const exercise_4 = ()=>{
  const myPromise = new Promise((resolve:Function, reject:Function) => {
    setTimeout(() => {
      reject("Error: Operation Failed");  
    }, 2000);
 
})

myPromise
  .catch((err) => {
     console.log("---------------Exercise 4----------------");
   console.log(err) // log: 'Error: Operation Failed'
  })
}
exercise_4()



const exercise_5 = () =>{
  const callback1 = (value: string) => console.log("Esto es un texto:", value);
  const callback2 = (value: any) => console.log("Esto es un numero:", value);

  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2500);
  });

  myPromise.then((value) => {
    console.log("---------------Exercise 5----------------");
    callback2(value);
  }); // log: Esto es un numero: 2`
}
exercise_5()
