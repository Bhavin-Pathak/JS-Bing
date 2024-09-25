function showMessage() {
  console.log("Hello everyone!");
}

showMessage();

function subnb(a, b, c) {
  // body
  var d = a + b + c;

  return console.log(d);
}

subnb(1000, 102, 311);

let userName = "Shivam";

function showMessages() {
  let message = "Bhavin, " + userName + " Are Friends ??";
  console.log(message);
}

showMessages(); // Hello, John

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i); // a prime
  }
}

showPrimes(10);

let func = function (a, b, c, d, e) {
  return console.log(a + b + c + d + e);
};

func(15, 15, 15, 15, 20);

let sum = (a, b) => a + b;

console.log(sum(10, 20));

let double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log(double(3)); // 6
