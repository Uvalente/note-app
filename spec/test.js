(function(exports) {
  function Test(value) {
    this.value = value
  }

  Test.prototype.toEqual = function(thingToTest) {
    if (this.value === thingToTest) {
      console.log('Test PASSED')
    } else {
      console.log('Test FAILED')
    }
  }

  var expect = function (value) {
    return new Test(value)
  }

  exports.expect = expect
})(this)
