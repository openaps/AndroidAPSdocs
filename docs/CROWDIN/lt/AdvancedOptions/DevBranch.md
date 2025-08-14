# Development branch

<font color="#FF0000"><strong>Attention:</strong></font>
Dev branch is for the further development of AAPS only. Jis gali būti naudojamas tik atskirame išmaniajame telefone bandymo tikslais, <font color="#FF0000"><strong>o ne realiam ciklui</strong></font>

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Realiam cikui rekomenduojama naudoti tik Master branch.

The dev version of AAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Todėl daugelis nebaigtų funkcijų yra išjungtos. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in directory /AAPS/extra . Įjungę inžinerinį režimą, galite visiškai sugadinti ciklą.

Tačiau kūrėjo versija yra gera vieta pamatyti, kokios funkcijos yra tikrinamos, ir padėti pašalinti klaidas bei pateikti atsiliepimus apie tai, kaip naujos funkcijos veikia praktiškai. Dažnai žmonės išbando kūrėjo versiją su senu telefone ir pompa, kol įsitikina, kad versija stabili - už bet kokį jos naudojimą atsakingi esate tik jūs patys. Testuodami bet kokias naujas funkcijas, atminkite, kad nusprendėte išbandyti vis dar kuriamą funkciją. Darykite tai savo rizika, tačiau atsargiai, kad apsaugotumėte save.

Jei radote klaidą arba manote, kad naudojant kūrėjo versiją nutiko kažkas neprimtino, tada peržiūrėkite skirtuką [problemos](https://github.com/nightscout/AndroidAPS/issues) ir patikrinkite, ar kas nors kitas šią problemą rado, arba pridėkite patys, jei esate pirmasis. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md). The new features can also be discussed on [discord](https://discord.gg/4fQUWHZ4Mw).

A dev version has an expiration date. This seems inconvenient when using it satisfactorily, but serves a purpose. When a single dev version doing the rounds, it is easier to keep track of bugs that people are reporting. The developers do not want to be in a position where there are three versions of dev in the wild where bugs are fixed in some and not others, and people continue to report the fixed ones.

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

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_pr_ci.png)

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