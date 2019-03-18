foo; // undefined
var foo = function() {
  console.log('foo1');
};

foo(); // foo1，foo赋值

var foo = function() {
  console.log('foo2');
};

foo(); // foo2，foo重新赋值

foo(); // foo2
function foo() {
  console.log('foo1');
}

foo(); // foo2

function foo() {
  console.log('foo2');
}

foo(); // foo2

foo(); // foo2
var foo = function() {
  console.log('foo1');
};

foo(); // foo1，foo重新赋值

function foo() {
  console.log('foo2');
}

foo(); // foo1

function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;
}

foo(1);

//
var aminals = function() {};
aminals.prototype = {
  definedAnimal: function(type) {
    var animal;
    switch (type) {
      case 'dog':
        animal = new dog();
        break;
      case 'cat':
        animal = new cat();
    }
  },
};

var dog = function() {};

dog.prototype = {};

var cat = function() {};
