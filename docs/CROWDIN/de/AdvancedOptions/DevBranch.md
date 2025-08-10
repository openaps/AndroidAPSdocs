# Entwickler-Version (dev branch)

<font color="#FF0000"><strong>Achtung:</strong></font>
Der 'Dev Branch' dient ausschließlich der Weiterentwicklung von AAPS. Er darf nur auf einem separaten Smartphone zu Testzwecken, <font color="#FF0000"><strong>nicht für das tatsächliche Loopen</strong></font> verwendet werden.

Die aktuelle, getestete und stabile AAPS-Version ist im [Master Branch](https://github.com/nightscout/AndroidAPS/tree/master). Es wird dringend empfohlen, nur den Master branch für das tatsächliche Loopen zu verwenden.

Achtung: Die Entwicklungsversion (Dev Branch) von AAPS ist für Entwickler sowie Tester bestimmt, die mit Stacktraces, Log-Dateien und dem Debugger umgehen können, um Fehlerberichte erstellen zu können, die Entwicklern beim Beheben der Fehler helfen (kurzum: Personen, die wissen, was sie tun und eigentverantwortlich arbeiten können). Aus diesem Grunde sind unfertige Features deaktiviert. Um dieses Feature zu enablen, aktiviere den **Engineering Mode** indem Du einen leeren File mit dem Namen `engineering_mode` im Verzeichnis /AAPS/extra auf dem Smartphone anlegst. Das Aktivieren dieser Features kann dazu führen, dass der Loop überhaupt nicht mehr funktioniert.

Im Dev branch sieht man, welche Funktionen gerade getestet werden. Damit können Fehler ausgebügelt und Feedback darüber gegeben werden, wie die neuen Funktionen in der Praxis funktionieren. Meist wird die Entwickler-Version auf einem alten Telefon mit einer separaten Pumpe getestet bis es stabil läuft. Jede Benutzung des dev branch erfolgt auf eigene Gefahr! Wenn Du neue Funktionen ausprobierst mache Dir immer bewusst, dass Du Funktionen verwendest, die sich noch in Entwicklung befinden und nicht final freigegeben sind. Tue dies auf eigene Gefahr und mit der gebotenen Sorgfalt, um Deine eigene Sicherheit zu gewährleisten.

Wenn Du einen Fehler gefunden hast oder glaubst, dass etwas falsch berechnet wurde, dann sehe im [issues tab](https://github.com/nightscout/AndroidAPS/issues) nach, um zu sehen, ob schon jemand diesen Fehler bemerkt hat, falls nicht, kannst Du einen neuen Issue öffnen. Je mehr Informationen Du dabei mitlieferst, desto besser/schneller kann der Fehler reproduziert und behoben werden. Vergiss nicht, die [Protokolldateien](../GettingHelp/AccessingLogFiles.md) anzufügen. Die neuen Funktionen können auch auf [discord](https://discord.gg/4fQUWHZ4Mw) diskutiert werden.

Eine Entwickler-Version hat ein Ablaufdatum. Das scheint unpraktisch, wenn es zufriedenstellend genutzt wird, aber es dient einem Zweck. Wenn eine einzelne Dev-Version die Runden macht, ist es einfacher, Fehler zu verfolgen, die Leute melden. Die Entwickler wollen nicht in einer Position sein, in der es drei Versionen von dev im Umlauf sind, in denen Fehler behoben werden müssen und Testuser Fehler, die schon behoben wurden in der aktuellsten Dev-Version, in guter Absicht nochmals melden.

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