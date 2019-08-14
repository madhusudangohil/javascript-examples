let f = function(name, age) {
  this.name = name;
  this.age = age;
};

let o = new f("madhu", 1);

f.prototype.test = function() {
  return "test";
};

console.log(f.prototype.test.prototype);

console.log(o.test());

function doSomething() {}
doSomething.prototype.foo = "bar";
console.info(doSomething.prototype);

console.log(f.hasOwnProperty("name"));
