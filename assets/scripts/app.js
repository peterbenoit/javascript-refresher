// import { apikey } from "./utils";    // using export specific variable/methods
// import apikey from "./utils";        // using export default
// console.log(apikey);

// import { apikeyA, apikeyB } from "./utils";
// console.log(apikeyA, apikeyB);
// // or
// import * as util from "./utils.js";
// console.log(util.apikeyA, util.apikeyB);
// or
import { apikeyA as A, apikeyB as B } from "./utils";
console.log(A, B);

const utils = {
  name: "Max",
  age: 34,
  greet(prompt) {
    return `${prompt} ${this.name}`;
  },
};
console.log(utils.greet("hello"));

class Utils {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(prompt) {
    console.log(`${prompt} ${this.name}`);
  }
}

const usr = new Utils();
usr.age = 34;
usr.name = "Headroom";
usr.greet("hello");
