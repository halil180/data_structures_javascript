const stack = []
stack.push("dog")
stack.push("cat")
stack.push("people")
stack.pop()

////peek
console.log(stack.at(-1)) // ES6 
//or 
console.log(stack[stack.length - 1]) //classic javascript 