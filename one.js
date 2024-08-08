var myAtoi = function (s) {
  let res = "";
  for (let x of s) {
    if (x >= "a" && x <= "z") {
      return "0";
    } else if (x == "" || x == "0") {
      continue;
    } else {
      res += x;
    }
  }
  console.log(res)
};
myAtoi("1337c0d3");
