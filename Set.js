// const mySet1 = new Set()

// mySet1.add(1)
// mySet1.add(231)
// mySet1.add(1)
// console.log(mySet1)//Set(3) { 1, 2, 3 }
// console.log(mySet1.has(1))

///////////////////

function isSuperset(set, subset) {
    for (const elem of subset) {
      if (!set.has(elem)) {
        return false;
      }
    }
    return true;
  }
  
  function union(setA, setB) {
    // const _union = new Set(setA);
    // for (const elem of setB) {
    //   _union.add(elem);
    // }
    // return _union;

    return new Set([...setA,...setB])
  }
  
  function intersection(setA, setB) {
    const _intersection = new Set();
    for (const elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem);
      }
    }
    return _intersection;
  }
  
  function symmetricDifference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
      if (_difference.has(elem)) {
        _difference.delete(elem);
      } else {
        _difference.add(elem);
      }
    }
    return _difference;
  }
  
  function difference(setA, setB) {
    const _difference = new Set(setA);
    for (const elem of setB) {
      _difference.delete(elem);
    }
    return _difference;
  }
  
  // Examples
  const setA = new Set([1, 2, 3, 4])
  const setB = new Set([2, 3])
  const setC = new Set([3, 4, 5, 6])
  
  isSuperset(setA, setB)          // returns true
  union(setA, setC)               // returns Set {1, 2, 3, 4, 5, 6}
  intersection(setA, setC)        // returns Set {3, 4}
  symmetricDifference(setA, setC) // returns Set {1, 2, 5, 6}
  difference(setA, setC)          // returns Set {1, 2}


//   console.log(set.has(0)); // boolean - false
// console.log(arr.indexOf(0)); // -1
// console.log(set.has(1)); //true
// console.log(arr.indexOf(1)); //0