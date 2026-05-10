# Ramura de dezvoltare

```{warning}
Dev branch is for the further development of AAPS only. It should be used on a separate phone for testing <font color="#FF0000">**not for actual looping!**</font>
```

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). It is advised to stay on the Master branch for actual looping.

The dev version of AAPS is only for developers and testers comfortable dealing with stacktraces, looking through log files and maybe firing up the debugger to produce bug reports that are helpful to the developers (in short: people that know what they are doing without being assisted!). Therefore many unfinished features are disabled. To enable these features enter **Engineering Mode** by creating a file named `engineering_mode` in directory /AAPS/extra . Enabling the engineering mode might break the loop entirely.

However, the Dev branch is a good place to see what features are being tested and to help iron out the bugs and give feedback on how the new features work in practice. Often people will test the Dev branch on an old phone and pump until they are confident it is stable - any use of it is at your own risk. When testing any new features, remember that you are choosing to test a still-in-development feature. Do so at your own risk & with due diligence to keep yourself safe.

If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/nightscout/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md). The new features can also be discussed on [discord](https://discord.gg/4fQUWHZ4Mw).

A dev version has an expiration date. This seems inconvenient when using it satisfactorily, but serves a purpose. When a single dev version doing the rounds, it is easier to keep track of bugs that people are reporting. The developers do not want to be in a position where there are three versions of dev in the wild where bugs are fixed in some and not others, and people continue to report the fixed ones.

(branch-ci-test)=

## Test a specific branch (branch-ci)

To build a test branch, select branch-ci, which allows you to choose a specific branch for APK creation. You can use this method when you need to test the dev branch.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Elemente de test într-o propunere de modificare (GitHub CI actions deploy)

Available from 3.3.2.1.dev

- Este adecvat pentru testatori sau pentru cei care contribuie la testare.

```{eval-rst}
.. raw:: html

    <!--crowdin: exclude-->
    <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
      <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
        <iframe
          src="https://www.dailymotion.com/embed/video/x9rdx1q"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
        </iframe>
      </div>
    </div>
```

![aaps_ci_pr_ci](../images/Building-the-App/CI/aaps_ci_pr_ci.png)

- Numărul PR: Vă rugăm să introduceți numărul PR pe care doriți să-l testați.

- Tipuri de referință PR: tipurile de referință PR includ două opțiuni:
    
    - head:
    - Preia conținutul real din ramura autorului PR, adică istoricul original al comiterii fără operațiuni de îmbinare).
    - Aceasta este echivalentă cu starea originală a ramurei PR, ca și cum ar fi fost preluată direct de pe o copie derivată sau o ramură cu caracteristici.
    
    - fuzionare:
    
    - Preia rezultatul fuzionării presimulate a PR a GitHub-ului în ramura țintă (de exemplu, dev).
    - Aceasta este o comitere de îmbinare virtuală creată automat de GitHub.
    - Această confirmare există doar atunci când cererea de integrare nu are conflicte și poate fi îmbinată.
    
    - variant:
    
    - Please refer to [variant](#browserbuild-variant)