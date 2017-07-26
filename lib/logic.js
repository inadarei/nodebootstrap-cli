const log    = require('metalogger')();

class Something {

    constructor(text) {
      this.text = text;
    }

    say() {
      console.log(this.text);
    }
}

module.exports = Something;