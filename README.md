# compstruct-vscode

VSCode Extension for Computation Structures Courseware (jsim, tmsim, bsim)

Forked from https://github.com/jamestiotio/compstruct-vscode. Credits to the original project for syntax highlighting and code formatting.

## Installation

You can install this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=iangohy.compstruct-vscode-fork).

## Description

This repository hosts a [Visual Studio Code](https://code.visualstudio.com/) [extension](https://marketplace.visualstudio.com/VSCode) with rich language support for the courseware used in the (labs of) Computation Structures module (both MIT 6.004 and SUTD 50.002): jsim, tmsim and bsim.

These tools were originally developed by MIT:

-   JSim is a netlist simulator language which serves as a circuit simulator design environment.
-   BSim is a Beta ALU architecture simulator. The β is a RISC processor design (general-purpose 32-bit architecture) used for the course.
-   TMSim is a Turing Machine simulator.

## Features
-   [x] Syntax Highlighting
-   [x] Code Navigation (Folding)
-   [x] Code Formatting (Comment Toggling, Auto-Indentation, Bracket-Matching, Bracket-Autoclosing & Bracket-Autosurrounding)
-   [x] Snippet Completion (Auto Code Completion)
-   [x] One click to run current file in JSim/BSim (.jar files have to be in same directory as currently open file)


## Requirements

This section will describe any requirements and dependencies for this extension, as well as how to install and configure them for this extension to work properly.

Currently, only [Microsoft Visual Studio Code](https://code.visualstudio.com/) (or its vendor-neutral open-source alternatives) is needed to run this extension. As more features are added to this extension, more requirements might be needed in the future, so do keep a lookout!

## Extension Settings

This section will list out the settings contributed by this extension. Coming soon!

## Known Issues

This section will call out known issues to help limit users opening duplicate issues against this extension.

### JSim Continuation Lines Detection Issue

Multiline detection which spans across newline characters (and indicated by lines starting with the character `+`) might not be supported yet by the TextMate grammar engine as elaborated [here](https://github.com/microsoft/vscode-textmate/issues/32). To add support for this feature, might need to migrate to Monarch instead of TextMate or implement a more sophisticated, real-time detector using TypeScript. Dynamic programmatic analysis could also be done via implementing a language server (which would be the ideal choice going forward, instead of simply only relying on declarative features).

### Syntax Highlighting for Negative Numbers

More work needs to be done since attempts of using regular expressions to syntax-highlight negative numbers (i.e. including the hyphens) did not work as intended.

## Additional Resources

Here are some available useful resources (such as syntax highlighting for other editors and official MIT source code for JSim, BSim and TMSim online editors):

-   [BSim Syntax Highlighting on Emacs](https://github.com/nexaitch/bsim-mode)
-   [BSim Syntax Highlighting on Vim](https://github.com/JSeam2/BSimSyntaxHighlighting)
-   [JSim and TMSim Syntax Highlighting on Atom](https://github.com/tjjjwxzq/language-jsim)
-   [Old MIT 6.004 Courseware Materials](https://github.com/terman/6.004_courseware)
-   [Newer Latest MIT 6.004 Browser-Based Online Courseware Tools](https://github.com/6004x)
