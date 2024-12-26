# System Information Logger

This script gathers and logs system information, such as the operating system type, memory details, and CPU specifications, and saves it to a standardized log file (`logs/system-info.txt`) using Node.js.

---

## Challenges

1. **Handling Object Data (`[object Object]` Issue)**:
   - Initially, the CPU details retrieved from `os.cpus()` were directly printed, resulting in `[object Object]`. This was due to attempting to stringify an array of objects without formatting the contents.
   
2. **Directory Management**:
   - Ensuring the `logs` directory exists before writing the log file was a critical challenge. Without proper handling, the script would throw an error if the directory was missing.
   
3. **Cross-Platform Compatibility**:
   - Using hardcoded paths (e.g., `"logs/system-info.txt"`) would result in issues on different operating systems. This required the use of the `path` module for creating standardized paths.

4. **File Operations**:
   - Understanding how to safely check for a directory's existence (`fs.existsSync`) and create directories recursively (`fs.mkdirSync`) were key challenges during development.

---

## Learnings

1. **Using the `os` Module**:
   - Learned how to retrieve system information such as memory, OS type, and CPU details using `os.totalmem()`, `os.freemem()`, and `os.cpus()`.

2. **Formatting Output**:
   - Gained insights into using `.map()` to iterate over arrays and format data, and `.join('\n')` to create a human-readable multiline string.

3. **File and Directory Management**:
   - Learned how to:
     - Check if a directory exists (`fs.existsSync`).
     - Create directories recursively (`fs.mkdirSync` with `{ recursive: true }`).
     - Write data to a file (`fs.writeFileSync`).

4. **Path Standardization**:
   - Understood the importance of `path.join()` for creating cross-platform file paths.

---

## Summary

This script provides a simple yet powerful demonstration of Node.js capabilities for:
- Gathering and formatting system-level information using the `os` module.
- Managing directories and files with the `fs` module.
- Creating cross-platform-compatible paths using the `path` module.

The script ensures the `logs/system-info.txt` file is created in a standardized location, regardless of the operating system. This is achieved through efficient error handling, modular code structure, and best practices for string formatting and file system management.
