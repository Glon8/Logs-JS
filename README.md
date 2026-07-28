# Logs-JS

A lightweight JavaScript logging utility designed to provide structured and consistent log output.

The utility simplifies debugging by including useful source information while keeping logs easy to read and maintain.

## Features

- Timestamped log entries
- Multiple log levels
- File and directory information
- Source line references
- Consistent log formatting
- Lightweight and easy to integrate

## Purpose

This utility is designed to improve the debugging experience by providing clearer context for application events, errors, and general logging.

## API Reference

By default, **Logs-JS** is enabled when initialized.

The library provides four functions for creating logs and controlling logging behavior:

| Function | Description |
|----------|-------------|
| `log(...args)` | Prints a log entry with the provided arguments. Accepts a regular log values and a custom format of Object, with tag and data fields. Supports custom tags and includes build in tags: `i` (info), `w` (warning), `e` (error). |
| `debugOff()` | Disables all log output. |
| `setDebug(state)` | Manually enables or disables logs. Accepts a boolean value (`true` to enable, `false` to disable). |
| `setProperties(settings)` | Controls additional log information by a object that include three parameters. Each parameter accepts a boolean value to enable or disable timestamp, path - file/directory paths, and line - source line references. |

### Examples

```javascript
log("Application started");
log({data: "Low memory warning", tag: "w"});

debugOff(); // Disable logs
setDebug(true);  // Enable logs

setProperties({ timestamp: true, path: true, line: false}); 
// Enable timestamps and paths, disable line references
```

## Installation

There are two ways to install **Logs-JS**:

### Option 1: Manual Installation

1. Download the **Logs-JS** files.
2. Add `logs.js` to your project.

### Option 2: NPM Installation
```
npm install git+https://github.com/Glon8/Logs-JS.git
```

Import logs functions to your project:
```javascript
import { log } from "./src/logs.js";
```

## Project Status

🚧 **In Progress**
