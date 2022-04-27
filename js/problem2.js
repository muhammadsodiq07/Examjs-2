let problem2 = [1,-3,12,-1,3,-4,-2,1-7];
let n = true;

if(problem2[0] < 0){
  for(let i = 0; i < problem2.length; i++){
    if(i % 2 == 0 &&  problem2[i]> 0){
      n = i;
      break;
    } else if(i % 2 == 1 && problem2[i] < 0) {
      n = i;
      break;
    }
  }
} else {
  for(let i = 0; i < problem2.length; i++){
    if(i % 2 == 0 && problem2[i] < 0){
      n = i;
      break;
    } else if(i % 2 == 1 && problem2[i] > 0) {
      n = i;
      break;
    }
  }
}
console.log(n);