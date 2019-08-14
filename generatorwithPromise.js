function multiplyWithDelay(r, callback) {
  let m = r * 10;
  setTimeout(() => {
    callback(null, m);
  }, 1000);
}

function multiplyWithDelayPromise(r){
  return new Promise((resolve)=>{
    multiplyWithDelay(r, (e, d)=>{
      resolve(d);
    });
  });
}

function* multiply(records) {

  for(let i =0; i< records.length; i++)
   {
      if(records[i] % 3 === 0)
        yield multiplyWithDelayPromise(records[i]);
   };    
}

async function* multiplyAsync(records) {

  for(let i =0; i< records.length; i++)
   {
      if(records[i] % 3 === 0)
        yield await multiplyWithDelayPromise(records[i]);
   };    
}


console.log(`------------Generator-------------------`);
let records = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let multipliedRecords =   multiply(records);

let firstRec = multipliedRecords.next();
firstRec.value.then(r=>console.log(r));

console.log(`-------------Async Generators------------------`);

( async() => {
let multipliedRecordsAsync = multiplyAsync(records);
for await (let m of multipliedRecordsAsync)
console.log(m);
}
)();
