// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
// clean up the args (array)
const args = process.argv.slice(2);
console.log('args:', args);

// Edge case: We need at least 2 arguments
if (args.length < 2) {
  console.log(`Error: please enter at least 2 numbers`);
  process.exit(1);
}

// define an accumulator
let total = 0;

// iterate through each argument
for (let arg of args) {
  // Edge case: if the arg is not a number => output error message

  if (isNaN(Number(arg))) {
    console.log(`Error: please input only numbers`);
    // stop the execution
    // return;
    process.exit(1);
  }

  // Edge case: check if it is a whole number => skip it
  // arg % 1 === 0 => it's a whole number
  // parsInt
  // Number.isInteger()

  if (Number.isInteger(Number(arg))) {
    // add the argument to the total
    // typecasting into a number
    total += Number(arg);
    console.log('arg:', arg, 'total:', total, 'type:', typeof Number(arg));
  }
}
// output the total
console.log('Total:', total);
