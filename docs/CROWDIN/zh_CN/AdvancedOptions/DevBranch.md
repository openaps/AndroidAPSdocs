# 开发分支

<font color="#FF0000"><strong>注意</strong></font>： 开发分支（Dev branch）仅用于AAPS的后续开发。 该版本应在备用手机上作测试用途，<font color="#FF0000"><strong>切勿用于实际闭环治疗！</strong></font>

AAPS最稳定的版本是[主分支（Master branch）版本](https://github.com/nightscout/AndroidAPS/tree/master)。 建议在实际闭环治疗中持续使用主分支版本。

AAPS开发版（dev version）仅适用于能够熟练处理堆栈跟踪（stacktraces）、查阅日志文件，并能启动调试器（debugger）生成有效开发者错误报告的人员——简言之，即无需协助即能独立操作的资深开发者与测试人员。 因此，诸多未完成功能已被禁用。 要启用这些功能，需通过在/AAPS/extra目录下创建名为`engineering_mode`的文件来进入**工程模式**。 启用工程模式可能导致整个闭环系统完全失效。

不过，开发分支（Dev branch）是了解正在测试中的功能、协助修复漏洞以及反馈新功能实际运行情况的理想平台。 用户常会在备用手机上测试开发分支（Dev branch），并通过泵注试验直至确认其稳定性——但任何使用行为均需自行承担风险。 在测试任何新功能时，请谨记您所测试的仍是处于开发阶段的功能。 请自行承担风险，并采取充分的安全防护措施。

若在使用开发分支（Dev branch）时发现程序漏洞或异常情况，请查看[问题标签页（issues tab）](https://github.com/nightscout/AndroidAPS/issues)确认是否已有其他用户提交相同问题；若无相关记录，请自行提交问题报告。 请尽可能详细地在此提供信息（切记可能需要分享您的[日志文件（log files）](../GettingHelp/AccessingLogFiles.md)），信息越详尽越好。 新功能的相关讨论也可在[Discord平台](https://discord.gg/4fQUWHZ4Mw)进行。

开发版（dev version）设有有效期限制。 这在使用满意时看似不便，但实为有特定设计目的。 如果只有一个开发版本，就更容易跟踪人们报告的错误。 开发者不希望出现三种不同版本的开发模式同时存在的情况，其中某些版本修复了漏洞，而其他版本没有修复，导致人们仍然报告已经修复的问题。

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