let n = "4E6",
  a = 16;

function inputFunction(n) {
  switch (n) {
    case "A":return 10;
    case "B":return 11;
    case "C":return 12;
    case "D":return 13;
    case "E":return 14;
    case "F":return 15;
    default:return n;
  }
};
function One(n, a) {
  let b = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    b += inputFunction(n[i]) * a ** (n.length - i - 1);
  }
  return b;
}
console.log(One(n,a));