'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
    console.log("activated!")
    // Add status bar button
    let statusBarJsim = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    let statusBarBsim = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	statusBarJsim.command = "compstruct-vscode.jsimTerminal";
    statusBarBsim.command = "compstruct-vscode.bsimTerminal";
    statusBarJsim.text = "$(play) Run JSim";
    statusBarBsim.text = "$(play) Run BSim";
    statusBarJsim.show();
    statusBarBsim.show();
	context.subscriptions.push(statusBarJsim);
    context.subscriptions.push(statusBarBsim);

    context.subscriptions.push(vscode.commands.registerCommand('compstruct-vscode.jsimTerminal', () => {
        runJar("jsim")
	}));

    context.subscriptions.push(vscode.commands.registerCommand('compstruct-vscode.bsimTerminal', () => {
        runJar("bsim")
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {

}

function runJar(jarname: string) {
    // Find terminal if exists
    let terminal;
    for (const term of vscode.window.terminals) {
        const name = term.name
        if (name === jarname) {
            terminal = term;
        }
    }
    if (!terminal) {
        terminal = vscode.window.createTerminal(jarname);
    }
    const filepath = vscode.window.activeTextEditor?.document.uri.fsPath;
    if (!filepath) {
        terminal?.sendText(`java -jar ${jarname}.jar`)
    } else {
        const filenames = filepath?.split("/")
        const filename = filenames[filenames.length - 1];
        console.log("filepath", vscode.window.activeTextEditor?.document.uri.fsPath);
        terminal?.sendText(`java -jar ${jarname}.jar ${filename}`);
    }
}
