# Ramura de dezvoltare

```{warning}
Dev branch is for the further development of AAPS only. It should be used on a separate phone for testing <font color="#FF0000">**not for actual looping!**</font>
```

The most stable version of AAPS to use is that in the [Master branch](https://github.com/nightscout/AndroidAPS/tree/master). Este recomandat să rămâneți pe ramura principală pentru folosirea propriu-zisă a buclei.

Versiunea dev a AAPS este doar pentru dezvoltatori și cei care testează care sunt confortabili cu urmărirea stivei, cu căutarea în fișierele de jurnal și poate cu pornirea depanatorului pentru a produce rapoarte de erori care sunt de ajutor pentru dezvoltatori (pe scurt: oameni care știu ce fac fără a fi ajutați!). Prin urmare, multe caracteristici nefinalizate sunt dezactivate. Pentru a activa aceste caracteristici, intrați în **Modul inginerie** prin crearea unui fișier numit `engineering_mode` în dosarul /AAPS/extra. Activarea modului de inginerie poate strica complet bucla.

Cu toate acestea, versiunea dev este un loc bun pentru a vedea care sunt funcțiile testate și pentru a ajuta la remedierea erorilor și a oferi sugestii cu privire la funcționarea practică a noilor caracteristici. Adesea, oamenii vor testa ramura dev pe un telefon vechi și pe o pompă până când vor avea încredere că este stabilă - orice utilizare a acesteia este pe propriul risc. Când testați orice caracteristici noi, țineți minte că alegeți să testați o caracteristică încă în dezvoltare. Faceți acest lucru pe propriul risc & cu grija cuvenită pentru a vă menține în siguranță.

If you find a bug or think something wrong has happened when using the Dev branch, then view the [issues tab](https://github.com/nightscout/AndroidAPS/issues) to check whether anyone else has found it, or add it yourself if not. Cu cât puteți partaja mai multe informații aici cu atât mai bine (nu uitați că poate fi nevoie să partajați [fișierele de jurnal](../GettingHelp/AccessingLogFiles.md)). The new features can also be discussed on [discord](https://discord.gg/4fQUWHZ4Mw).

O versiune dev are o dată de expirare. Acest lucru pare deranjant atunci când o folosiți în mod satisfăcător, dar servește unui scop. Când o singură versiune de dezvoltator circulă, este mai ușor să urmărești erorile pe care oamenii le raportează. Dezvoltatorii nu doresc să se afle într-o poziție în care circulă trei versiuni de dev unde erorile sunt reparate în unele și în altele nu, iar oamenii continuă să le raporteze pe cele corectate.

(branch-ci-test)=

## Test a specific branch (branch-ci)

To build a test branch, select branch-ci, which allows you to choose a specific branch for APK creation. You can use this method when you need to test the dev branch.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Elemente de test într-o propunere de modificare (GitHub CI actions deploy)

Disponibil de la 3.3.2.1.dev

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
    
    - Vă rugăm să consultați [varianta](#browserbuild-variant)