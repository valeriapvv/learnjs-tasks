/* Почему наедаются оба хомяка? */
'use strict';

let hamster = {
  stomach: [],

  eat(food) {
    if (!this.hasOwnProperty('stomach')) {
      this.stomach = [];
    }

    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat("apple");
lazy.eat("oats");

alert(speedy.stomach); // apple
alert(lazy.stomach);  // oats
