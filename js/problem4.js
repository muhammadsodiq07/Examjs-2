let i = "Python";

function rev(i) {
    let l = "";
    for (let k = i.length - 1; k >= 0; k--) {
        l += i[k];
    }
    return l;
}
console.log(rev(i));


