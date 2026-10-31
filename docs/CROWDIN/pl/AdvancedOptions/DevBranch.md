# Gałąź rozwojowa (dev)

```{warning}
Gałąź dev służy tylko do dalszego rozwoju AAPS. Należy jej używać na osobnym telefonie do testów, <font color="#FF0000">**nie do prawdziwej pętli!**</font>
```

Najbardziej stabilna wersja AAPS jest w [gałęzi „master”](https://github.com/nightscout/AndroidAPS/tree/master). Do prawdziwej pętli zaleca się pozostać na gałęzi „master”.

Wersja dev AAPS jest tylko dla deweloperów i testerów, którzy dobrze radzą sobie ze stacktrace'ami, przeglądaniem plików logów i być może uruchamianiem debuggera, aby tworzyć zgłoszenia błędów pomocne dla deweloperów (w skrócie: dla osób, które wiedzą, co robią, bez niczyjej pomocy!). Dlatego wiele niedokończonych funkcji jest wyłączonych. Aby włączyć te funkcje, włącz **Tryb Inżynierski**: utwórz plik o nazwie `engineering_mode` w katalogu /AAPS/extra . Włączenie Trybu Inżynierskiego może całkowicie zepsuć działanie pętli.

Jednak gałąź dev to dobre miejsce, aby zobaczyć, jakie funkcje są testowane, pomóc w usuwaniu błędów i przekazać opinię, jak nowe funkcje działają w praktyce. Często ludzie testują gałąź dev na starym telefonie i starej pompie, dopóki nie są pewni, że jest stabilna. Każde użycie odbywa się na własne ryzyko. Gdy testujesz nowe funkcje, pamiętaj, że sam wybierasz testowanie funkcji, która jest wciąż w rozwoju. Robisz to na własne ryzyko i z należytą starannością, aby zadbać o swoje bezpieczeństwo.

Jeśli znajdziesz błąd lub uważasz, że podczas używania gałęzi dev coś poszło nie tak, sprawdź [zakładkę Issues](https://github.com/nightscout/AndroidAPS/issues), czy ktoś inny już go nie zgłosił. Jeśli nie, dodaj zgłoszenie sam. The more information you can share here the better (don't forget you may need to share your [log files](../GettingHelp/AccessingLogFiles.md)). O nowych funkcjach można też rozmawiać na [Discordzie](https://discord.gg/4fQUWHZ4Mw).

Wersja dev ma datę ważności. Wydaje się to niewygodne, gdy wszystko dobrze działa, ale ma swój cel. When a single dev version is doing the rounds, it is easier to keep track of bugs that people are reporting. Deweloperzy nie chcą sytuacji, w której w użyciu są trzy wersje dev, w niektórych błędy są naprawione, w innych nie, a ludzie dalej zgłaszają te już naprawione.

(branch-ci-test)=

## Testowanie wybranej gałęzi (branch-ci)

Aby zbudować gałąź testową, wybierz branch-ci. Pozwala to wybrać konkretną gałąź do utworzenia pliku APK. Możesz użyć tej metody, gdy chcesz przetestować gałąź dev.

![aaps_ci_branch_ci1](../images/Building-the-App/CI/aaps_ci_branch_ci1.png)

![aaps_ci_branch_ci2](../images/Building-the-App/CI/aaps_ci_branch_ci2.png)

(github-pr-test)=

## Testowanie zmian z pull requesta (wdrożenie przez GitHub CI actions)

Dostępne od wersji 3.3.2.1.dev

- Dla testerów lub osób, które pomagają w testach.

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

- Target repository: repozytorium, które zawiera PR, w formacie właściciel/repozytorium (owner/repo). Zostaw domyślne **nightscout/AndroidAPS**, chyba że kazano ci użyć innego repozytorium (powinni to robić tylko deweloperzy).

- PR number: wpisz numer PR, który chcesz przetestować.

- PR reference types: są dwie opcje typu odniesienia PR:
    
    - head:
    - Pobiera rzeczywistą zawartość z gałęzi autora PR (czyli oryginalną historię commitów bez żadnego scalania).
    - Odpowiada to oryginalnemu stanowi gałęzi PR, tak jakby pobrać ją bezpośrednio z forka lub gałęzi funkcji (feature branch).
    
    - merge:
    
    - Pobiera wynik scalenia PR z gałęzią docelową (np. dev), które GitHub wcześniej symuluje.
    - Jest to wirtualny commit scalający, który GitHub tworzy automatycznie.
    - Ten commit istnieje tylko wtedy, gdy PR nie ma konfliktów i można go scalić.
    
    - variant:
    
    - Zobacz [wariant](#browserbuild-variant)