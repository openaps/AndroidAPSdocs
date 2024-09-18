# 安裝 Git

## Windows

### 1. 下載 Git

- **在 Android Studio 下載多個更新期間，您必須保持線上狀態！**
- 任何版本的 Git 應該都可以正常運作。 例如：[https://git-scm.com/download/win](https://git-scm.com/download/win)
- 請記下安裝路徑。 您將在下一步中需要它。

```{admonition} make git.exe available via Windows PATH
:class: note

確保您可以在無需前置路徑的情況下調用 git.exe，因為 Android Studio 需要此來找到 git.exe。 之後會自動正確設置 git.exe 的路徑至 Android Studio 設定中。

```

![Git 安裝路徑](../images/Update_GitPath.png)

### 2. 在 Android Studio 中設置 Git 路徑

- 打開「文件」>「設置」

  ![Android Studio - 打開設置](../images/Update_GitSettings1.png)

- 點擊「版本控制」旁的小三角形（1），以打開子選單。

- 點擊「Git」（2）。

- 確保選擇了更新方法「合併」（3）。

- 透過點擊「測試」（4）按鈕檢查 Android Studio 是否可以自動定位到 git.exe 的路徑。

  ![Android Studio 設定](../images/AndroidStudio361_09.png)

- 如果自動設置成功，將顯示 Git 版本。

- 在對話框中點擊「確定」（1），然後在設置窗口中點擊「確定」（2）。

  ![Git 自動安裝成功](../images/AndroidStudio361_10.png)

- 如果找不到 git.exe 文件，請在對話框中點擊「確定」（1），然後點擊帶有三個點的按鈕（2）。

- 如果您不確定它的位置，請使用 Windows 資料夾的[搜索功能](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html)查找 git.exe。 您需要查找位於 bin 資料夾中的 git.exe。

- 選擇 git.exe 的路徑，並確保您選擇的是 **\\bin\\** 資料夾中的文件（3），然後點擊「確定」（4）。

- 點擊「確定」按鈕關閉設置窗口（5）。

  ![Git 自動安裝失敗](../images/AndroidStudio361_11.png)

### 3. 重新啟動

- 重新啟動您的 PC 以更新系統環境。

(git-install-check-git-settings-in-android-studio)=
### 4. 檢查 Android Studio 中的 Git 設置

- 打開 Android Studio 中的終端窗口

- 輸入`git --version`（不含引號且沒有空格）並按回車鍵

  ![git --version](../images/AndroidStudio_gitversion1.png)

- 如果 Git 已正確安裝並連線，您將收到一條類似以下的已安裝版本訊息：

  ![git 版本結果](../images/AndroidStudio_gitversion2.png)

## Mac

- 任何版本的 Git 應該都可以正常運作。 例如：[https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- 使用 Homebrew 安裝 Git：`` `$ brew install git` ``。
- 有關安裝 Git 的詳細訊息，請參閱[Git 官方文件](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)。
- 如果透過 Homebrew 安裝 Git，則無需更改任何偏好設定。 以防萬一：它們可以在這裡找到：Android Studio - 偏好設定。
