# 2-3 Reading File using Path

## Introduction

In this lesson, we'll learn how to read a file using its file path in a Node.js application. We'll leverage the `fs` (File System) module along with the `path` module to construct the file path dynamically and ensure cross-platform compatibility.

## Steps

1. **Import the Modules**: Begin by importing the `fs` and `path` modules.

    ```javascript
    const fs = require('fs');
    const path = require('path');
    ```

2. **Construct the File Path**: Use the `path.join()` method to construct the file path by joining the directory path and the file name.

    ```javascript
    const filePath = path.join(__dirname, 'filename.txt');
    ```

    Replace `'filename.txt'` with the name of the file you want to read.

3. **Read the File**: Use the `fs.readFile()` method to read the contents of the file. Pass the constructed file path and encoding as arguments.

    ```javascript
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:', data);
    });
    ```

## Conclusion

By using the `path` module to construct file paths and the `fs` module to read file contents, you can effectively read files in a Node.js application regardless of the operating system. This approach ensures flexibility and compatibility, making your code robust and maintainable.
