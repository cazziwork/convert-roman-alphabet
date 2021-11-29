const conv = require('jaconv');
module.exports = class ConvHelper {
  static async conv2hepburn(first_name, last_name) {
    return {
      firstname: conv.toHebon(conv.toHiragana(first_name)).toLowerCase(),
      lastname: conv.toHebon(conv.toHiragana(last_name)).toLowerCase()
    }
  }
}