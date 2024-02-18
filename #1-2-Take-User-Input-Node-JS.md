# 1-2 Take User Input in Node.js

## Description

In this lesson, we'll learn how to take user input using Node.js, leveraging the `process.argv` array. This method allows us to access command-line arguments provided when running a Node.js script. We'll create a simple program that takes user input as command-line arguments and displays them.

## Steps

1. **Create a New File**: Open your text editor and create a new file named `userInput.js`.

2. **Write the Code**: Inside `userInput.js`, write the following JavaScript code:

    ```javascript
    // Get the command-line arguments
    const args = process.argv;

    // Extract user input from arguments
    const userInput = args.slice(2);

    // Display user input
    console.log("User Input:", userInput);
    ```

3. **Run the Script**: Open your terminal, navigate to the directory containing `userInput.js`, and run the script with additional arguments:

    ```bash
    node userInput.js argument1 argument2 argument3
    ```

    Replace `argument1`, `argument2`, `argument3`, etc., with your desired input.

4. **View Output**: The script will display the user input provided as command-line arguments.

## Conclusion

You've now learned how to take user input in a Node.js script using `process.argv`. This method enables interaction with users via the command line, opening up possibilities for building command-line applications and utilities.
