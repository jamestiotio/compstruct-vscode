# compstruct-vscode

VSCode Extension for Computation Structures Courseware (jsim, tmsim, bsim)

<p align="center"><a href="https://marketplace.visualstudio.com/items?itemName=jamestiotio.compstruct-vscode&ssr=false#review-details"><img src="https://vsmarketplacebadge.apphb.com/rating-star/jamestiotio.compstruct-vscode.svg?style=for-the-badge&colorA=FBBD30&colorB=F2AA08"/></a> <a href="https://marketplace.visualstudio.com/items?itemName=jamestiotio.compstruct-vscode"><img src="https://vsmarketplacebadge.apphb.com/downloads-short/jamestiotio.compstruct-vscode.svg?style=for-the-badge&colorA=5DDB61&colorB=4BC74F&label=DOWNLOADS"/></a> <a href="https://marketplace.visualstudio.com/items?itemName=jamestiotio.compstruct-vscode"><img src="https://vsmarketplacebadge.apphb.com/installs-short/jamestiotio.compstruct-vscode.svg?style=for-the-badge&colorA=8a2be2&colorB=7f26cc&label=INSTALLS"/></a></p>

## Installation

You can install this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jamestiotio.compstruct-vscode) or from the [Open VSX Registry](https://open-vsx.org/extension/jamestiotio/compstruct-vscode)!

## Description

This repository hosts a [Visual Studio Code](https://code.visualstudio.com/) [extension](https://marketplace.visualstudio.com/VSCode) with rich language support for the courseware used in the (labs of) Computation Structures module (both MIT 6.004 and SUTD 50.002): jsim, tmsim and bsim.

These tools were originally developed by MIT:

-   JSim is a netlist simulator language which serves as a circuit simulator design environment.
-   BSim is a Beta ALU architecture simulator. The β is a RISC processor design (general-purpose 32-bit architecture) used for the course.
-   TMSim is a Turing Machine simulator.

## Features

-   [x] Syntax Highlighting
-   [ ] Semantic Highlighting
-   [ ] Linting (Syntax & Style Error Checking)
-   [ ] Refactoring
-   [ ] Debugging
-   [ ] IntelliSense (Hover Information, Parameter Info, Auto-Completion & Content Assist)
-   [x] Code Navigation (Folding)
-   [ ] Code Navigation (Definition Jumps)
-   [x] Code Formatting (Comment Toggling, Auto-Indentation, Bracket-Matching, Bracket-Autoclosing & Bracket-Autosurrounding)
-   [x] Snippet Completion (Auto Code Completion)
-   [ ] Language Configuration

You can request for more features by submitting an issue!

Feel free to also contribute via submitting a pull request! For contributors, please check the included tool documentations in the [`docs`](https://github.com/jamestiotio/compstruct-vscode/tree/main/docs) folder for your reference when further developing this extension!

## Requirements

This section will describe any requirements and dependencies for this extension, as well as how to install and configure them for this extension to work properly.

## Extension Settings

This section will list out the settings contributed by this extension.

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
