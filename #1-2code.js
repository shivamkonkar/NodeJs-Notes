// Get the command-line arguments
const args = process.argv;

// Extract user input from arguments since argument at 0 and 1 are not required
const userInput = args.slice(2);

// Display user input
console.log("User Input:", userInput);
