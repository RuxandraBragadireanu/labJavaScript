function multiplicator(element) {
    return 2 * element;
}

Array.prototype.map = function (callback) {
    var results = [];
    for (var i = 0; i < this.length; i++)
      results.push(callback(this[i]));
    return results;
  }


console.log([1,2,3].map(multiplicator)); // [2,4,6]