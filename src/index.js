module.exports = function toReadable(number){
  const num = new Map(
    [
      [0, "zero"],[1, "one"],[2, "two"],[3, "three"],[4, "four"],[5, "five"],[6, "six"],
      [7, "seven"],[8, "eight"],[9, "nine"],[10, "ten"],[11, "eleven"],[12, "twelve"],
      [13, "thirteen"],[14, "fourteen"],[15, "fifteen"],[16, "sixteen"],[17, "seventeen"],
      [18, "eighteen"],[19, "nineteen"],[20, "twenty"],[30, "thirty"],[40, "forty"],
      [50, "fifty"],[60, "sixty"],[70, "seventy"],[80, "eighty"],[90, "ninety"],
    ]
)
  let newNum = number;
  let str = "";

  if (Math.trunc(newNum / 100) > 0) {
    str = str.concat(num.get(Math.trunc(newNum / 100)), " hundred ");
      newNum %= 100;
  };

  if (Math.trunc(newNum / 10) > 1) {
    str = str.concat(num.get(Math.trunc(newNum / 10) * 10), " ");
      newNum %= 10;
  } else if (Math.trunc(newNum / 10) === 1) {
      return str.concat(num.get(newNum), " ").trim();
  }

  if (newNum || number === 0) {
    str = str.concat(num.get(newNum), " ");
  }
  return str.trim();
}