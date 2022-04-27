let n = { x: 1, y: 2 };

function Problem5(obj) {
  let arr = [];
  for (let index in obj) {
    let a = [index, obj[index]];
    arr.push(a);
  }

  console.log(arr);
}
Problem5(n);

