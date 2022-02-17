<h1 align="center">Terminal-Styler</h1>
<p>
  <a href="https://www.npmjs.com/package/hex-dump" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/terminal-styler.svg">
  </a>
  <a href="https://github.com/orcun-gokbulut/terminal-styler#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/orcun-gokbulut/terminal-styler/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/orcun-gokbulut/terminal-styler/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL--3.0" src="https://img.shields.io/github/license/orcun-gokbulut/terminal-styler" />
  </a>
</p>

Simple but efficient utility npm package that allows you to generate colored and styled (bold, italic, underline, striked) strings that can be displayed in *nix terminals (Linux, BSDs, MacOS). 

In order to lower styling characters in the output, main mechanism designed as a stream instead of text transforming function.

Main class of the package is **TerminalStylerStream** class. This class gathers text inputs (with their corresponding styles) until end function is called. End function produces final output as string output. 

# Example Code

```typescript
import { TerminalStylerStream, TerminalColor } from "terminal-styler";

const stream = new TerminalStylerStream();

const errorMessage = "Unknown error occurred.";
stream.write(" RECEIVED ", { foregroundColor: TerminalColor.white, backgroundColor: TerminalColor.green, dim: false, bold: true, italic: true });
stream.write(" [MainFunction] ", { foregroundColor: TerminalColor.white, bold: true });
stream.write("Error: ", { foregroundColor: TerminalColor.red });
stream.write(errorMessage, null);

const output = stream.end();
console.log(output);
```

**Output:**

<p style="font-family: monospace">
<span style="background-color: green; font-style: italic; font-weight: bold;">&nbsp;RECEIVED&nbsp;</span> 
<span style="color: white; font-weight: bold;">[MainFunction] </span>
<span style="color: red"> Error: </span>
<span style="color: gray">Unknown error occurred.</span> 
</p>

# Installation

To install terminal-styler and it's typescript type declarations (.d.ts) your project;

```sh
npm install terminal-styler
```

# Referance
## TerminalColor Enumerator
```typescript
export enum TerminalColor
{
    default = -1,
    black   = 0,
    red     = 1,
    green   = 2,
    yellow  = 3,
    blue    = 4,
    magenta = 5,
    cyan    = 6,
    white   = 7,
    gray    = 8
};
```

### Description
Color enumerator which is used in TerminalColor object. Default value means do not change current terminal color.

<br/>

## TerminalStyle object
```typescript
export interface TerminalColor {
    foregroundColor?: Color;
    backgroundColor?: Color;
    dim?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
}
```

### Description
TerminalStyle object describes how to style and format (font attributes, colors) of the output. 

Smart defaults are already enforced when you pass this object to one of Options objects property. Therefore you can create this object and only define the options that you want to change.

### Members
 - **foregroundColor** *[optional, dont change]*: Sets text color of the output.
 - **backgroundColor** *[optional, default: dont change]*: Sets background color of the output.
 - **dim** *[optional, default: false]*: Darkens text color of the output.
 - **bold** *[optional, default: false]*: Sets output **bold**.
 - **underline** *[optional, default: false]*: Sets output <u>underlined</u>.
 - **strike** *[optional, default: false]*: Sets output ~~strikethroughed~~.

<br/>

##  TerminalStylerStream.write function
```typescript
export declare class TerminalStylerStream {
    public write(text: string, style: TerminalStyle | null): void;
}
```
### Description
This function uses style argument to format text argument content then appends styled text to output buffer.

### Parameters
- **text**: Input text that will be styled and appended to output buffer.
- **style** *[optional]*: Style of the text.

## Return
Does not return any value.

<br/>

##  TerminalStylerStream.end function
```typescript
export declare class TerminalStylerStream {
    public write(text: string, style: TerminalStyle | null): void;
}
```
### Description
This function uses style argument to format text argument content then appends styled text to output buffer.

### Parameters
- **text**: Input text that will be styled and appended to output buffer.
- **style** *[optional]*: Style of the text.

### Return
Does not return any value.


# Roadmap
- [x] Initial Implementation Done.
- [x] Author README.
- [x] Write Sample Code.
- [ ] Write Unit tests and Check Coverage.
- [ ] Removing runtime dependencies (colors). 

# Author

👤 **Y. Orçun GÖKBULUT**

* Github: [@orcun-gokbulut](https://github.com/orcun-gokbulut)
* E-mail: orcun.gokbulut@gmail.com


# 🤝 Contributing
Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/orcun-gokbulut/terminal-styler/issues). You can also take a look at the [contributing guide](https://github.com/orcun-gokbulut/terminal-styler/blob/master/CONTRIBUTING.md).


# 📝 License
Copyright © 2022 [Y. Orçun GÖKBULUT](https://github.com/orcun-gokbulut).<br />
This project is [GPL--3.0](https://github.com/orcun-gokbulut/terminal-styler/blob/master/LICENSE) licensed.
