function summ(i = 0) {
  let total = i;
  var t = function(n = 0) {
    if (i != 0) {
      total += n
    }
    return t
  }
  t.valueOf = function() {
    return Number(total)
  }
  return t
}

console.log("summ=", summ(2)(2)(1)() == 5)
