let obj = {
  array: [15, 20, 12, 4, -13, 5],
  at(index) {
    if (this.array.length > 0) {
      if (index >= 0) {
        for (let i = 0; i < this.array.length; i++) {
          if (i == index) {
            console.log(this.array[i]);
          }
        }
      } else {
        for (let i = 0; i < this.array.length; i++) {
          if (i == Math.abs(index)) {
            console.log(this.array.reverse()[Math.abs(i)-1]);
          }
        }
      }
    }
  },
};
obj.at(-2);

