{
//assigning variable without declaring, this will throw an error as the strict mode is enabled.
"use strict";
b = 200;
console.log(b);
}

{
//assigning variable without declaring, this will not throw error as the strict mode is not enabled.
a = 100;
console.log(`value of a is ${a}`);

let c = 300;
console.log(`value of c is ${c}`);
}
