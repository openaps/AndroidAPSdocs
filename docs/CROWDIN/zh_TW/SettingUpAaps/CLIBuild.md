# 命令列建置說明

```{admonition} For users familiar with the command-line and git
:class: information

建置 AAPS 的最簡單方式是 [Browser build](./BrowserBuild.md) 替代方案。
```

已在 Fedora 與 Debian Linux 測試，其他系統只需最少的調整即可運作。

## 需求

請參閱[這個表格](#Building-APK-recommended-specification-of-computer-for-building-apk-file)以確認所需的最低 Java 版本。 透過系統的套件管理器安裝相應的 OpenJDK 套件。 例如在 Debian 中，套件名稱為 `openjdk-21-jdk`。 其中應包含 `javac` 與 `keytool` 可執行檔。

從 [Android Studio 頁面](https://developer.android.com/studio#command-line-tools-only)下載 *Android 指令列工具* 套件。 不需要安裝 Android Studio 本體。 更多關於安裝此套件的資訊可在 [sdkmanager 文件](https://developer.android.com/tools/sdkmanager)中找到。 套件安裝後，你需要手動設定兩個[環境變數](https://developer.android.com/tools/variables)：`ANDROID_HOME` 與 `PATH`。 最後，執行 `sdkmanager --licenses` 以完成安裝。

## 使用 Gradle wrapper 建置 AAPS

### 1. 產生用於簽署 AAPS 的 Java 金鑰庫檔案

如果你已經有用於簽署 AAPS 的金鑰庫檔案，請重複使用該檔案。

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

每次更新 AAPS 時，你都需要該金鑰庫檔案與通關密語。

### 2. 編譯 AAPS 的 APK 檔案

如果尚未複製，請複製該 git 儲存庫。 AAPS 使用 master 分支作為最新穩定版本，請確保你所在的分支／標籤是你要建置的版本。

在儲存庫中執行 `./gradlew :app:assembleFullRelease`。 這會自動下載 Gradle 與相依項，然後編譯程式碼。 建置成功後，未簽署的 APK 應位於 `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`。 系統也會在 `$ANDROID_HOME` 安裝一個 `apksigner` 可執行檔。 請再次更新你的 `PATH`。

### 3. 從未簽署的 APK 建立已簽署的 APK 檔案

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

切換到你的家目錄，並建立已簽署的 APK 檔案：

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

現在你已有 `app-full-release-signed.apk`，可用於安裝或升級。
