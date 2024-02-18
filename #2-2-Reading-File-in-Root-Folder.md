# 2-2 Reading File in Root Folder

## Introduction

In this lesson, we'll explore how to read a file located in the root folder of a Node.js application. We'll use the `fs` (File System) module to perform this operation asynchronously.

## Steps

1. **Import the Module**: Begin by importing the `fs` module, which is a built-in module in Node.js, used for file system operations.

    ```javascript
    const fs = require('fs');
    ```

2. **Read the File**: Use the `fs.readFile()` method to read the contents of the file. Provide the path to the file as the first argument and specify the encoding (e.g., 'utf8') as the second argument to receive a readable string.

    ```javascript
    fs.readFile('filename.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:', data);
    });
    ```

    Replace `'filename.txt'` with the name of the file you want to read.

## Conclusion

You've learned how to read a file located in the root folder of your Node.js application using the `fs` module. This method is asynchronous, allowing your application to continue executing other tasks while waiting for the file to be read. Remember to handle errors appropriately to ensure robustness in your code.
