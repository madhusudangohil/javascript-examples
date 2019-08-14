function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

console.log('priting value from generator');
console.log(gen.next().value);
// expected output: 10
console.log(gen.next().value);
console.log(`-------------------------------`);

class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}

for(a of new Foo()){
  console.log(`printing value from class iterrator ${a}`);
}

console.log(`-------------------------------`);

let testnumbers = [1, 2, 3, 4, 5, 6, 7, 8];

function* evenNumbers(numbers) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) yield numbers[i];
  }
}

for (let n of evenNumbers(testnumbers)) {
  console.log(`priting even numbers ${n}`);
}
console.log(`-------------------------------`);

console.log('generator basics');
console.log(`-------------------------------`);

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let genrator = generateSequence();
console.log(genrator);

//the result of next() is always an object with two properties, value and done
let one = genrator.next();
console.log(JSON.stringify(one));