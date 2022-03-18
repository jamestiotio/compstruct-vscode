'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import * as vscode from 'vscode';
import { BSIM_LANGUAGE, JSIM_LANGUAGE } from './common/constants';
import { checkAndDisplayBtns, runJar } from './utils';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
    let statusBarBsim = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarBsim.command = "compstruct-vscode.bsimTerminal";
    statusBarBsim.text = "$(play) Run BSim";
    context.subscriptions.push(statusBarBsim);

    let statusBarJsim = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarJsim.command = "compstruct-vscode.jsimTerminal";
    statusBarJsim.text = "$(play) Run JSim";
    context.subscriptions.push(statusBarJsim);

    // Check configuration and display buttons accordingly
    checkAndDisplayBtns(statusBarJsim, statusBarBsim);

    // Callback on settings changed
    vscode.workspace.onDidChangeConfiguration(event => {
        let affected = event.affectsConfiguration("compstruct-vscode.statusBarButton");
        if (affected) {
            checkAndDisplayBtns(statusBarJsim, statusBarBsim);
        }
    })

    context.subscriptions.push(vscode.commands.registerCommand('compstruct-vscode.jsimTerminal', () => {
        runJar(JSIM_LANGUAGE);
	}));

    context.subscriptions.push(vscode.commands.registerCommand('compstruct-vscode.bsimTerminal', () => {
        runJar(BSIM_LANGUAGE);
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {

}
