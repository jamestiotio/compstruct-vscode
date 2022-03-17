import * as vscode from 'vscode';
import { BSIM_LANGUAGE, JSIM_LANGUAGE } from './common/constants';

export async function runJar(jarname: string) {
    // Find .jar files recursively in each workspace and in all directories
    // Run .jar with currently open file
    const workspaceFolders = vscode.workspace.workspaceFolders?.map(folder => folder.uri) || [];
    if (workspaceFolders.length == 0) {
        vscode.window.showErrorMessage("No workspace folder opened!");
    } else {
        let foundJar;
        for (const folder of workspaceFolders) {
            foundJar = await findJarAndRun(folder, jarname);
        }
        if (!foundJar) {
            vscode.window.showErrorMessage(`Unable to find ${jarname}.jar`)
        }
    }

}

async function findJarAndRun(uri: vscode.Uri, jarname: string) {
    // Find terminal if exists
    let terminal;
    for (const term of vscode.window.terminals) {
        const name = term.name;
        if (name === jarname) {
            terminal = term;
        }
    }
    if (!terminal) {
        terminal = vscode.window.createTerminal(jarname);
    }

    const jarUri = await findJar(uri, jarname);

    if (jarUri) {
        // Get filename of current file
        const filepath = vscode.window.activeTextEditor?.document.uri.fsPath;
        if (!filepath) {
            terminal?.sendText(`java -jar ${jarUri.fsPath}`);
        } else {
            terminal?.sendText(`java -jar ${jarUri.fsPath} ${filepath}`);
        }

        return true;
    }

    return false;
}

async function findJar(uri: vscode.Uri, jarname: string) : Promise<vscode.Uri | null>{
    const dir = await vscode.workspace.fs.readDirectory(uri);
    let folders: string[] = [];

    // Find jarname.jar (case insensitive finding) in root
    const filename = jarname + ".jar"
    for (let i=0; i<dir.length; i++) {
        if (filename.toLowerCase() == dir[i][0].toLowerCase()) {
            return vscode.Uri.joinPath(uri, `/${filename}`);
        }
        if (dir[i][1] == 2) folders.push(dir[i][0]);
    }

    // Find jarname.jar in folders
    for (let i=0; i<folders.length; i++) {
        const folderUri = vscode.Uri.joinPath(uri, `/${folders[i]}`)
        const jarUri = await findJar(folderUri, jarname);
        if (jarUri) return jarUri;
    }

    return null;
}

export function checkAndDisplayBtns(jsimBtn: vscode.StatusBarItem, bsimBtn: vscode.StatusBarItem) {
    // Check user configuration
    const statusBarBtnConfig = vscode.workspace.getConfiguration("compstruct-vscode.statusBarButton");
    const bsimEnable = statusBarBtnConfig.get("BSim");
    const jsimEnable = statusBarBtnConfig.get("JSim");

    // Add status bar button
    if (bsimEnable) {
        bsimBtn.show();
    } else {
        bsimBtn.hide();
    }
    if (jsimEnable) {
        jsimBtn.show();
    } else {
        jsimBtn.hide();
    }
}
