# Версия разработчиков

<font color="#FF0000"><strong> Внимание: </strong></font>
Версия разработчиков -только для дальнейшего развития AndroidAPS. Она должна использоваться на отдельном телефоне для тестирования <font color="#FF0000"><strong> а не для реального цикла!</strong></font>

Самая стабильная версия AndroidAPS для обычного пользователя - [ Master branch ](https://github.com/nightscout/AndroidAPS/tree/master) (мастер-ветка). Рекомендуется оставаться на версии Master для реального использования.

Версия dev AndroidAPS - только для разработчиков и тестировщиков, которые умеют работать с stacktraces, просматривать файлы журналов, запускать отладчик для создания отчетов об ошибках, которые помогают разработчикам (короче говоря: для людей, которые знают, что делают без посторонней помощи!). Поэтому многие незавершенные функции отключены. Чтобы включить эти функции, войдите в ** режим разработчика**, создав файл ` engineering_mode ` в каталоге /AAPS/extra . Включение инженерного режима может полностью нарушить работу цикла.

Тем не менее, версия разработчиков-хорошее место для того, чтобы понять, какие функции тестируются, помочь исправлению ошибок и дать отзыв о том, как работают новые функции. Часто люди тестируют версию Dev на старом телефоне и помпе до тех пор, пока они не уверены, что версия стабильна -любое ее использование на их собственный риск. При тестировании новых функций помните, что они по-прежнему в процессе разработки. Делайте это на свой страх и риск & с должной осмотрительностью, чтобы сохранить себя в безопасности.

Если вы нашли ошибку или думаете, что что-то пошло не так в версии dev, просмотрите [вкладку проблемы](https://github.com/nightscout/AndroidAPS/issues) и проверьте, не столкнулся ли с проблемой кто-либо еще, и, если нет, добавьте ее сами. Чем больше информации вы можете здесь разместить, тем лучше (не забывайте, что от вас могут понадобиться [лог-файлы](../GettingHelp/AccessingLogFiles.md). Новые функции можно также обсудить в [ discord ](https://discord.gg/4fQUWHZ4Mw).

Версия Dev имеет дату окончания срока действия. Это кажется неудобным при удовлетворительной работе, но служит определенной цели. Когда в цикле единичная версия dev, легче отслеживать ошибки, о которых сообщают люди. Разработчики не хотят, чтобы существовало три версии dev, где в одной ошибки исправлены, а в другой нет. и люди продолжают сообщать об уже исправленных.

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