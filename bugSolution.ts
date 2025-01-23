function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

//Now the runtime error would be handled, making it more robust. 
try {
  let result = add("hello", 5); 
} catch (error) {
  console.error(error);
}

let correctResult = add(10,5); //Correct usage of the add function.