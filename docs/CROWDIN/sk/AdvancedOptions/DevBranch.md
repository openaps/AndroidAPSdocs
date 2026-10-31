# Vývojová vetva

```{warning}
Vetva dev slúži iba na ďalší vývoj AAPS. Mala by sa používať na samostatnom telefóne na testovanie, <font color="#FF0000">**nie na skutočné používanie okruhu!**</font>
```

Najstabilnejšia verzia AAPS na používanie je vo [vetve master](https://github.com/nightscout/AndroidAPS/tree/master). Na skutočné používanie okruhu sa odporúča zostať na vetve master.

Vývojová (dev) verzia AAPS je iba pre vývojárov a testerov, ktorým nerobí problém pracovať s výpismi zásobníka (stacktrace), prechádzať log súbory a prípadne spustiť debugger, aby vytvorili hlásenia o chybách užitočné pre vývojárov (skrátka: ľudí, ktorí vedia, čo robia, bez pomoci iných!). Preto je veľa nedokončených funkcií vypnutých. Ak chcete tieto funkcie zapnúť, zapnite **Engineering Mode** (vývojársky režim) tak, že v priečinku /AAPS/extra vytvoríte súbor s názvom `engineering_mode`. Zapnutie režimu Engineering Mode môže okruh úplne pokaziť.

Vetva dev je však dobré miesto, kde vidíte, ktoré funkcie sa testujú, môžete pomôcť odstrániť chyby a dať spätnú väzbu o tom, ako nové funkcie fungujú v praxi. Ľudia často testujú vetvu dev na starom telefóne a pumpe, kým si nie sú istí, že je stabilná – akékoľvek jej použitie je na vaše vlastné riziko. Pri testovaní nových funkcií pamätajte, že ste sa rozhodli testovať funkciu, ktorá je ešte vo vývoji. Robíte to na vlastné riziko a s náležitou starostlivosťou o svoju bezpečnosť.

Ak nájdete chybu alebo si myslíte, že sa pri používaní vetvy dev stalo niečo nesprávne, pozrite si [kartu issues](https://github.com/nightscout/AndroidAPS/issues), či ju už niekto iný nenašiel, alebo ju sami pridajte, ak nie. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md)). O nových funkciách sa dá diskutovať aj na [Discorde](https://discord.gg/4fQUWHZ4Mw).

Verzia dev má dátum ukončenia platnosti. Keď ju používate k spokojnosti, môže sa to zdať nepohodlné, ale má to svoj účel. When a single dev version is doing the rounds, it is easier to keep track of bugs that people are reporting. Vývojári sa nechcú dostať do situácie, keď sú v obehu tri verzie dev, v niektorých sú chyby opravené a v iných nie, a ľudia stále hlásia už opravené chyby.

(branch-ci-test)=

## Testovanie konkrétnej vetvy (branch-ci)

Ak chcete zostaviť testovaciu vetvu, zvoľte branch-ci, ktorý vám umožní vybrať konkrétnu vetvu na vytvorenie APK. Tento spôsob môžete použiť, keď potrebujete testovať vetvu dev.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Testovanie zmien z pull requestu (nasadenie cez GitHub CI actions)

Dostupné od 3.3.2.1.dev

- Vhodné pre testerov alebo tých, ktorí pomáhajú s testovaním.

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

- Target repository: repozitár, ktorý obsahuje PR, vo formáte owner/repo. Ponechajte predvolenú hodnotu **nightscout/AndroidAPS**, ak vám nepovedali, aby ste použili iný repozitár (to by mali robiť iba vývojári).

- PR number: Zadajte číslo PR, ktorý chcete testovať.

- PR reference types: Typy odkazu na PR majú dve možnosti:
    
    - head:
    - Stiahne skutočný obsah z vetvy autora PR (t. j. pôvodnú históriu commitov bez akéhokoľvek zlúčenia).
    - Zodpovedá to pôvodnému stavu vetvy PR, ako keby bola stiahnutá priamo z forku alebo z vetvy s funkciou (feature branch).
    
    - merge:
    
    - Stiahne výsledok zlúčenia PR do cieľovej vetvy (napr. dev), ktoré GitHub vopred nasimuloval.
    - Je to virtuálny merge commit, ktorý GitHub vytvorí automaticky.
    - Tento commit existuje iba vtedy, keď PR nemá žiadne konflikty a dá sa zlúčiť.
    
    - variant:
    
    - Pozrite [variant](#browserbuild-variant)