# Development branch (ontwikkelversie)

```{warning}
De dev branch is alleen bedoeld voor de verdere ontwikkeling van AAPS. Gebruik hem op een aparte telefoon om te testen, <font color="#FF0000">**niet om echt mee te loopen!**</font>
```

De meest stabiele versie van AAPS staat in de [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Blijf voor echt gebruik van de loop op de Master branch.

De dev versie van AAPS is alleen voor ontwikkelaars en testers die goed overweg kunnen met stacktraces, logbestanden kunnen doorzoeken en misschien de debugger starten om bugrapporten te maken waar de ontwikkelaars iets aan hebben (kort gezegd: mensen die weten wat ze doen, zonder hulp!). Daarom zijn veel functies die nog niet af zijn uitgeschakeld. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in the directory /AAPS/extra. Het inschakelen van de Engineering Mode kan de loop helemaal laten stoppen met werken.

Toch is de dev branch een goede plek om te zien welke functies worden getest. Je kunt er helpen bugs op te lossen en feedback geven over hoe de nieuwe functies in de praktijk werken. Vaak zullen mensen de Dev-branch testen met een oude telefoon en pomp totdat ze er vertrouwen in hebben dat die versie stabiel is - gebruik ervan is op jouw eigen risico. Als je nieuwe functies test, onthoud dan dat je bewust kiest om een functie te testen die nog in ontwikkeling is. Doe dit op je eigen risico & met de nodige voorzichtigheid om jezelf veilig te houden.

Vind je een bug, of denk je dat er iets fout is gegaan bij het gebruik van de dev branch? Kijk dan in het [issues-tabblad](https://github.com/nightscout/AndroidAPS/issues) of iemand anders het al heeft gevonden. Zo niet, voeg het dan zelf toe. Hoe meer informatie je hier kunt delen, hoe beter (vergeet niet dat je misschien je [logbestanden](../GettingHelp/AccessingLogFiles.md) moet delen). De nieuwe functies kun je ook bespreken op [Discord](https://discord.gg/4fQUWHZ4Mw).

Een dev versie heeft een vervaldatum. Dat lijkt lastig als alles goed werkt, maar het heeft een doel. Als er maar één dev versie in omloop is, is het makkelijker om de gemelde bugs bij te houden. De ontwikkelaars willen niet dat er drie dev versies in omloop zijn, waarbij bugs in sommige versies zijn opgelost en in andere niet, en mensen de opgeloste bugs blijven melden.

(branch-ci-test)=

## Een bepaalde branch testen (branch-ci)

Om een test-branch te bouwen kies je branch-ci. Daarmee kun je een bepaalde branch kiezen om de APK van te maken. Je kunt deze methode gebruiken als je de dev branch moet testen.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Onderdelen van een pull request testen (GitHub CI actions deploy)

Beschikbaar vanaf 3.3.2.1.dev

- Geschikt voor testers of voor mensen die helpen met testen.

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://geo.dailymotion.com/player/x9rdx1q.html?video=x9rdx1q&loop=true&mute=true"
          loading="lazy"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_pr_ci.png)

- Target repository: de repository met de PR, in de vorm owner/repo. Laat de standaardwaarde **nightscout/AndroidAPS** staan, tenzij je gevraagd is een andere repository te gebruiken (alleen ontwikkelaars horen dat te doen).

- PR number: vul het nummer in van de PR die je wilt testen.

- PR reference types: er zijn twee soorten PR-referenties:
    
    - head:
    - Haalt de echte inhoud op uit de branch van de auteur van de PR (dus de oorspronkelijke commitgeschiedenis, zonder merge).
    - Dit is gelijk aan de oorspronkelijke staat van de PR branch, alsof je die direct uit een fork of feature branch haalt.
    
    - merge:
    
    - Haalt het resultaat op van de merge die GitHub vooraf simuleert van de PR in de doel-branch (bijv. dev).
    - Dit is een virtuele merge commit die GitHub automatisch maakt.
    - Deze commit bestaat alleen als de PR geen conflicten heeft en gemerged kan worden.
    
    - variant:
    
    - Zie [variant](#browserbuild-variant)