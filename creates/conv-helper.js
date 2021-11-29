const conv = require('jaconv');
module.exports = class ConvHelper {
  static async conv2hepburn(target) {
    return {
      roman: conv.toHebon(conv.toHiragana(target)).toLowerCase()
    }
  }
}