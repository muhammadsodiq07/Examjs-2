let a = [1, "t", 15, "t"];
let x = [];

a.forEach((item) => {
  if (a != "") x.push(a[0]);
  a = a.filter((el) => {
    return a[0] != el;
  })
})

let c = [2, 4];
let y = [];

c.forEach((item) => {
  if (c != "") y.push(c[0]);
  c = c.filter((el) => {
    return c[0] != el;
  })
})

let d = [...x, ...y];
console.log(d);