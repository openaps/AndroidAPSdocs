# dev 分支( 開發環境 )

<font color="#FF0000"><strong>注意：</strong></font>
dev 分支僅用於 AAPS 的進一步開發。 應在另一台手機上用於測試，<font color="#FF0000"><strong>而不是實際循環！</strong></font>

AAPS 的最穩定版本是[Master 分支](https://github.com/nightscout/AndroidAPS/tree/master)中的版本。 建議在實際循環中保持在 Master 分支。

AAPS 的開發版本僅適用於能處理堆棧追蹤、查找日誌文件，甚至啟動調試器以生成對開發人員有幫助的錯誤報告的開發者和測試者（簡言之：知道自己在做什麼而不需要協助的人）。 因此，許多未完成的功能都被停用了。 要啟用這些功能，請在 /AAPS/extra 目錄中建立名為`engineering_mode`的文件，以啟用**工程模式**。 啟用工程模式可能會完全破壞循環。

但是，dev 分支是一個不錯的地方，可以查看正在測試的功能，並幫助解決錯誤，並反饋新功能在實際中的效果。 通常人們會在舊手機和幫浦上測試 dev 分支，直到他們確信他是穩定的——使用他完全是自擔風險。 在測試任何新功能時，請記住你是在選擇測試一個仍在開發中的功能。 請自行承擔風險並謹慎行事以確保安全。

如果你發現錯誤或認為使用 dev 分支時發生了問題，請查看[問題標籤](https://github.com/nightscout/AndroidAPS/issues)，看看是否有其他人發現，或者如果沒有，請自己添加。 你在這裡分享的資訊越多越好（不要忘記你可能需要分享你的[日誌檔案](../GettingHelp/AccessingLogFiles.md)）。 新功能也可以在[Discord](https://discord.gg/4fQUWHZ4Mw)上討論。

開發版本有一個過期日期。 當使用他滿意時，這似乎不便，但他有其作用。 當單一開發版本流傳時，更容易跟踪人們報告的錯誤。 開發人員不希望出現三個開發版本在外流傳，其中一些錯誤在某些版本中已經修復，而其他版本則未修復，而人們仍然繼續報告已經解決的錯誤。

(github-pr-test)=

## Test items in a pull request (GitHub CI actions deploy)

Available from 3.3.2.1.dev

- Suitable for testers or those helping with testing.

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.youtube.com/embed/REQ7RqzoUkM"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

![aaps_ci_pr_ci](C:\Data\50 - My Projects\AAPS\OpenAPS\AndroidAPSdocs\docs\EN\images\Building-the-App\CI\aaps_ci_pr_ci.png)

- PR number: Please enter the PR number that you want to test.

- PR reference types: PR reference types include two options:
    
    - head:
    - Fetches the actual content from the PR author’s branch (i.e., the original commit history without any merge operations).
    - This is equivalent to the original state of the PR branch, as if it were fetched directly from a fork or feature branch.
    
    - merge:
    
    - Fetches the result of GitHub’s pre-simulated merge of the PR into the target branch (e.g., dev).
    - This is a virtual merge commit automatically created by GitHub.
    - This commit only exists when the PR has no conflicts and is mergeable.
    
    - variant:
    
    - Please refer to <variant>
    
    (variant)=
    
    ### variant
    
    - Select the variant you need: 
        - fullRelease: For regular pump usage with full functionality.
        - [aapsclient、aapsclient2](../RemoteFeatures/RemoteControl.md#aapsclient) For caregivers (requires [Nightscout](../SettingUpAaps/Nightscout.md))。
        - pumpcontrol
        - Text ending with “Debug” indicates that the APK will be built in debug mode, which is useful for troubleshooting.