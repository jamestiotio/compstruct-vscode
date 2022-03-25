# Change Log

All notable changes to the "compstruct-vscode" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.2.10]
-   Add proper detection for binary, hexadecimal, and octal numbers in JSim
-   Add memory device/subcircuit module snippet in JSim

## [0.2.9]
-   Fix `.jar` not found for some users due to whitespace in path

## [0.2.8]

-   Added commands to run JSim and BSim with currently opened file
-   Added status bar buttons to run the above commands
-   Added settings to allow users to disable status bar buttons
-   Added settings to disable finding `.jar` informative message

## [0.2.7]

-   Update CI workflow file to actually compile extension from TypeScript to JavaScript

## [0.2.6]

-   Update CI deployment Node version to v14.x

## [0.2.5]

-   Update main README to clearly separate the list of available features from upcoming features

## [0.2.4]

-   Allow extension to be downloaded, installed and executed in VS Code for the Web (GitHub Codespaces).

## [0.2.3]

-   Fix typo of result1 snippet body for TMSim

## [0.2.2]

-   Change extension banner color to achieve balance between satisfying WCAG AA accessibility standards and being web-safe

## [0.2.1]

-   Fix VSCode Marketplace workflow deployment file

## [0.2.0]

-   Add basic code folding capabilities
-   Improve auto-indentation, bracket-matching, bracket-autosurrounding and bracket-autoclosing
-   Separate language configuration files for clearer directory management
-   Add more snippets for TMSim and BSim
-   Fix indentation for JSim snippet configuration JSON file

## [0.1.3]

-   Add syntax highlighting for more BSim Beta macro instructions

## [0.1.2]

-   Fix wrong categorization of trailing characters after register constants in BSim

## [0.1.1]

-   Update README to reflect and link both options to install this extension

## [0.1.0]

-   Add official publishing support to both Visual Studio Code Marketplace and Open VSX Registry

## [0.0.9]

-   Add support for inline comments in TMSim
-   Better detection of constants in TMSim

## [0.0.8]

-   Fix detection of registers as constants in BSim

## [0.0.7]

-   Add better syntax highlighting support for BSim (hexadecimal constants, inline comments and macro statements)
-   Add syntax highlighting for inline comments for JSim

## [0.0.6]

-   Add initial syntax highlighting support for BSim (might still not support all possible syntaxes)

## [0.0.5]

-   Add multiple prefixes for snippets for convenience

## [0.0.4]

-   Auto-complete snippets that start with U+002E characters to also include the U+002E characters themselves so as to improve ergonomics

## [0.0.3]

-   Fix double starting U+002E characters for .subckt, .include and .connect snippets

## [0.0.2]

-   Initial support for snippets

## [0.0.1]

-   Initial release
-   Add syntax highlighting for JSim and TMSim files
