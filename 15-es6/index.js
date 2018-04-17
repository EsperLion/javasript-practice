let range = {
  from: 5, 
  to: 15,
  [Symbol.iterator] () {

    let from = this.from;
    let to = this.to;

    return {
      next () {

        if (from >= to) return { done: true }
        else return { value: from++ }

      }
    }
  }
};

for(let num of range) {
  console.log(`-> ${num}`);
}