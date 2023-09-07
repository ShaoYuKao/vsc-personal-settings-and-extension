const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('personalChangeSettings.change', function () {
		// 獲取設定對象
        let configuration = vscode.workspace.getConfiguration();
		
		// IDE 介面字體大小
        configuration.update('window.zoomLevel', 1, vscode.ConfigurationTarget.Global);

		// 編輯區字體大小
        configuration.update('editor.fontSize', 16, vscode.ConfigurationTarget.Global);

		// 與 Tab 相等的空格數量。
        configuration.update('editor.tabSize', 2, vscode.ConfigurationTarget.Global);

		// 控制主要提要欄位和活動列的位置。它們可以顯示在工作台的左側或右側。次要提要欄位則會顯示在工作台的另一端。
		configuration.update('workbench.sideBar.location', "right", vscode.ConfigurationTarget.Global);

		// 預設行尾字元。(換行符號)
		configuration.update('files.eol', "\n", vscode.ConfigurationTarget.Global);

		// 斷行顯示
		configuration.update('editor.wordWrap', "on", vscode.ConfigurationTarget.Global);

		// 在捲軸上開啟 MiniMap (小地圖)功能
		configuration.update('editor.minimap.enabled', false, vscode.ConfigurationTarget.Global);

		// MiniMap 渲染實際字元
		// configuration.update('editor.minimap.renderCharacters', false, vscode.ConfigurationTarget.Global);

		// 開啟連字符號
		// configuration.update('editor.fontLigatures', true, vscode.ConfigurationTarget.Global);

		// 刪除檔案時確認
		// configuration.update('explorer.confirmDelete', false, vscode.ConfigurationTarget.Global);

		// 拖曳移動檔案彈出確認視窗
		// configuration.update('explorer.confirmDragAndDrop', false, vscode.ConfigurationTarget.Global);

		// 存檔時進行自動排版
		// configuration.update('editor.formatOnSave', false, vscode.ConfigurationTarget.Global);

		// 顯示空白字元
		configuration.update('editor.renderWhitespace', "boundary", vscode.ConfigurationTarget.Global);

		// 顯示縮排線
		configuration.update('editor.renderIndentGuides', true, vscode.ConfigurationTarget.Global);

		// 離開視窗焦點時自動儲存
		// configuration.update('files.autoSave', "onWindowChange", vscode.ConfigurationTarget.Global);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
