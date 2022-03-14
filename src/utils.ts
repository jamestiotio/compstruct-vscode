import * as vscode from 'vscode';

export function runJar(jarname: string) {
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
