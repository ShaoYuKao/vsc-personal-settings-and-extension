# Visual Studio Code Personal Settings and Extension

## Extensions Included

- [Chinese (Traditional) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant)\
    將 Vscode 中文化的插件，可以在網路上搜尋教學安裝

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)\
    更改前端html 或 css 樣式的時候可以即時在瀏覽器預覽成果
    ```json
    {
        // 一般來說我們常用8080
        "liveServer.settings.port": 8080,
        // 不用每次開起LiveServer就跳出通知
        "liveServer.settings.donotShowInfoMsg": true,
    }
    ```

- [Chinese Lorem](https://marketplace.visualstudio.com/items?itemName=KevinYang.ctlorem)\
    VSCode 本身是有內建假字生成器(Lorem)，但是有時候我們會希望假字生成是中文的假字而不是英文，那麼這時候就可以使用 Chinese Lorem 這個套件，使用方法也很簡單，將原本的 `lorem` 改成 `ctlorem` + `tab` 就可以了。

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)\
    更改icon 的圖示，還可以更改資料夾的顏色讓分辨資料更方便

- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode)\
    程式碼截圖非常漂亮的話，那麼就是使用這個套件做的，使用方式基本上就是 `F1` 然後輸入 `Polacode` 就可以開始程式碼截圖。

## Extensions NOT Included but might be useful

You need to install the following extensions manually if you need:\
(如果需要，您需要手動安裝以下擴展：)

- [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)\
    能够帮助我们检查单词拼写是否出现错误，检查的规则遵循 camelCase (驼峰拼写法)

- [VS Code Snippet Generator](https://marketplace.visualstudio.com/items?itemName=dkultasev.vs-code-snippet-generator)

- [vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)\
    在 vscode 打開 PDF 檔案

- [Excel Viewer](https://marketplace.visualstudio.com/items?itemName=GrapeCity.gc-excelviewer)\
    資料分析的時候，常需要邊寫程式，邊打開原始資料 excel 檔案確認內容，Excel Viewer 能夠在 VSCode 中讀取 excel 檔案，也支援基本的功能 eg. Filter, Sort。

- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)\
    工作區域改變顏色。操作說明: [Peacock for VS Code：为你的窗口添上五彩斑斓的色彩](https://zhuanlan.zhihu.com/p/84175150)

- [Comment Translate](https://marketplace.visualstudio.com/items?itemName=intellsmi.comment-translate)\
    許多優秀的項目，都有豐富的注釋，使用者可以快速理解代碼意圖。但是如果使用者並不熟習注釋的語言，會帶來理解困難。 本外掛程式使用 Google、Bing、Baidu、AliCloud、DeepL等的 Translate API 翻譯 VSCode 的程式設計語言的注釋。

- [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)\
    程式碼轉圖片

- [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer)\
    在撰寫 Swagger OpenAPI 文件時可以方便地預覽

- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)\
    讓 VSCode 支援 YAML 格式

- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)\
    當您與您的團隊成員一起解決問題，並希望在編輯器上共同處理相同的程式碼時，這將幫助您將程式碼編輯器的控制權交給您的團隊成員，您可以同時處理它。

- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)\
    這個擴充套件允許你做一個HTTP請求，並在VSCode中直接檢視響應，而不是在兩個應用程式之間切換，這個擴充套件為你做這個工作。

## Extension Settings

## Preferences Settongs

> `File` => `Preferences` => `Settings`

- Terminal 選取預設殼層
    - Command Prompt：`"terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe"`
    - PowerShell：`"terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"`
    - Git Bash：`"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"`
    - Bash on Ubuntu (on Windows)：`"terminal.integrated.shell.windows": "C:\\Windows\\System32\\bash.exe"`

- 個人化全域設定檔
    - `Ctrl + Shift + P` 打開命令面板，然後輸入 "Personal Change Settings" 並執行命令。

    ```json
    {
        "window.zoomLevel": 1,
        "editor.fontSize": 16,
        "editor.tabSize": 2,
        "workbench.sideBar.location": "right",
        "files.eol": "\n",
        "editor.wordWrap": "on",
        "editor.minimap.enabled": false,
        "editor.renderWhitespace": "boundary"
    }
    ```

- keyboard shortcuts

| 命令                               | 按鍵繫節關係     |
| ---------------------------------- | ---------------- |
| editor.action.transformToUppercase | ctrl + shift + u |
| editor.action.transformToLowercase | ctrl + shift + l |


**Enjoy!**
