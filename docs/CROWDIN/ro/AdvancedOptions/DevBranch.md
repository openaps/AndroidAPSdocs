# Ramura de dezvoltare

```{warning}
Ramura dev este doar pentru dezvoltarea în viitor a AAPS. Ar trebui folosită pe un telefon separat pentru testare <font color="#FF0000">**nu pentru bucla propriu-zisă!**</font>
```

Cea mai stabilă versiune de AAPS este cea din [Ramura principală](https://github.com/nightscout/AndroidAPS/tree/master). Este recomandat să rămâneți pe ramura principală pentru folosirea propriu-zisă a buclei.

Versiunea dev a AAPS este doar pentru dezvoltatori și cei care testează care sunt confortabili cu urmărirea stivei, cu căutarea în fișierele de jurnal și poate cu pornirea depanatorului pentru a produce rapoarte de erori care sunt de ajutor pentru dezvoltatori (pe scurt: oameni care știu ce fac fără a fi ajutați!). Prin urmare, multe caracteristici nefinalizate sunt dezactivate. Pentru a activa aceste caracteristici, intrați în **Modul inginerie** prin crearea unui fișier numit `engineering_mode` în dosarul /AAPS/extra. Activarea modului de inginerie poate strica complet bucla.

Cu toate acestea, versiunea dev este un loc bun pentru a vedea care sunt funcțiile testate și pentru a ajuta la remedierea erorilor și a oferi sugestii cu privire la funcționarea practică a noilor caracteristici. Adesea, oamenii vor testa ramura dev pe un telefon vechi și pe o pompă până când vor avea încredere că este stabilă - orice utilizare a acesteia este pe propriul risc. Când testați orice caracteristici noi, țineți minte că alegeți să testați o caracteristică încă în dezvoltare. Faceți acest lucru pe propriul risc & cu grija cuvenită pentru a vă menține în siguranță.

Dacă găsiți o eroare sau credeți că s-a întâmplat ceva greșit atunci când folosiți ramura Dev, atunci vedeți [secțiunea probleme](https://github.com/nightscout/AndroidAPS/issues) pentru a verifica dacă altcineva a găsit-o sau pentru a o adăuga chiar dumneavoastră dacă nu a fost semnalată încă. Cu cât puteți partaja mai multe informații aici cu atât mai bine (nu uitați că poate fi nevoie să partajați [fișierele de jurnal](../GettingHelp/AccessingLogFiles.md)). Noile caracteristici pot fi de asemenea discutate pe [discord](https://discord.gg/4fQUWHZ4Mw).

O versiune dev are o dată de expirare. Acest lucru pare deranjant atunci când o folosiți în mod satisfăcător, dar servește unui scop. Când o singură versiune de dezvoltator circulă, este mai ușor să urmărești erorile pe care oamenii le raportează. Dezvoltatorii nu doresc să se afle într-o poziție în care circulă trei versiuni de dev unde erorile sunt reparate în unele și în altele nu, iar oamenii continuă să le raporteze pe cele corectate.

(branch-ci-test)=

## Testează o ramură specifică (branch-ci)

Pentru a construi o ramură de testare, selectați branch-ci, care vă permite să alegeți o ramură specifică pentru crearea APK. Puteți utiliza această metodă atunci când aveți nevoie să testați ramura de dezvoltare.

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

- Target repository: the repository that contains the PR, in the format owner/repo. Leave the default **nightscout/AndroidAPS** unless you were told to use another repository (only developers should do this).

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