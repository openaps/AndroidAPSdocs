# Jak tłumaczyć AndroidAPS i dokumentację

* Przejdź pod adres <https://crowdin.com/project/androidaps> lub <https://crowdin.com/project/androidapsdocs> i zaloguj się przy użyciu swojego konta na Githubie

* Wyślij prośbę o dołączenie do zespołu dokumentacji. Aby to zrobić, kliknij flagę wybranego języka, a następnie kliknij przycisk "Join" w prawym górnym rogu kolejnej strony. W komentarzu zaproszenia podaj język, napisz o sobie i o tym jakie masz doświadczenie z AAPS oraz czy chcesz zostać tłumaczem czy korektorem (tylko osoby doświadczone w tłumaczeniu + zaawansowani użytkownicy AndroidAPS).

* Kiedy Cię zaakceptujemy, kliknij flagę ![Kiedy Cię zaakceptujemy, kliknij flagę](./images/translation_flags2019.png)

## Tłumacz teksty w aplikacji AndroidAPS

* Kliknij strings.xml
    
    ![Kliknij strings.xml](./images/translations-click-strings.png)

* Przetłumacz zdania po lewej stronie przez dodanie nowego tekstu tłumaczenia lub kliknij automatyczne tłumaczenie, które stanie się bazą do Twoich zmian
    
    ![Tłumaczenie aplikacji](./images/translations-translate.png)

* Korektorzy tekstu muszą przejść do trybu korekty
    
    ![Tryb korekty aplikacji](./images/translations-proofreading-mode.png)
    
    i zatwierdzić przetłumaczone teksty
    
    ![Zatwierdzanie tekstów](./images/translations-proofreading.png)

Kiedy korektor zatwierdzi tłumaczenie, zostanie ono dodane do następnej wersji AndroidAPS. Na początku dobrze byłoby przejrzeć istniejące tłumaczenia, które nie zostały jeszcze zatwierdzone i sprawdzić błędy lub zatwierdzić je, jeśli są poprawne.

## Tłumacz dokumentację

* Kliknij nazwę strony dokumentacji, którą chcesz przetłumaczyć
    
    ![Wybór strony do przetłumaczenia](./images/translation_WikiPage.png)

* Przetłumacz zdanie po zdaniu
    
    1 Nieprzetłumaczony tekst jest wyświetlany po lewej stronie na czerwonym tle.
    
    2 Możesz skopiować propozycję tłumaczenia do pola edycji klikając na propozycję.
    
    3 Edytuj zaproponowane tłumaczenie lub napisz je sam od podstaw.
    
    4 Naciśnij przycisk "SAVE" aby zapisać
    
    ![Tłumaczenie dokumentacji](./images/translation_WikiTranslate.png)

* Przetłumaczona strona nie zostanie opublikowana w dokumentach dopóki tłumaczenie nie będzie sprawdzone i zatwierdzone przez korektora.

### Tłumacz odnośniki do nagłówków

* When an internal link leads only to a certain page (i.e. ../Usage/Profiles.md) no translation is necessary.
* Internal links to a certain headline (i.e. ..//Usage/Profiles.md#percentage) must be translated as the headline in the other language is different from the English original.
* Jeśli przetłumaczysz nagłówek, możesz go przekształcić w kotwicę odnośnika (część po # - tj. #procent) przekształcając wszystkie litery na małe litery, znaki specjalne lub diakrytyczne ("ogonki", "umlauty" itp.) na standardowe znaki (łacińskie odpowiedniki), zastępując spacje znakiem minus (-) i pomijając znaki interpunkcyjne.
    
    Oto kilka przykładów:
    
    * Czym jest System Zamkniętej Pętli z AndroidAPS? \---> #czym-jest-system-zamknietej-petli-z-androidaps
    * Aktualizacja & Zmiany dokumentów \---> #aktualizacja-zmiany-dokumentow
    * Plik AAPS-.apk \---> #plik-aaps-apk

* Sprawdź czy twój odnośnik działa tak jak zamierzałeś. Jeśli kieruje na nowo przetłumaczony nagłówek, możliwe że będziesz musiał poczekać do następnej kompilacji, aby sprawdzić poprawność składni i działania odnośnika. W takim przypadku nie zapomnij o ustawieniu sobie przypomnienia w kalendarzu / lub w aplikacji typu todo, aby wrócić do tematu.

#### Jak tłumaczyć odnośniki w plikach Markdown (.md)

At the moment two [markup languages](./make-a-PR.html#code-syntax) are used in docs. Podczas gdy pliki napisane w składni reStructuredText (.rst) zawsze pokazują adres odnośnika w Crowdin, dla plików w składni Markdown (.md) być może będziesz musiał aktywować wyświetlanie znaczników HTML, aby przetłumaczyć adres odnośnika.

* * *

**Upewnij się, że w tagach HTML nie używasz spacji na ich początku ani na końcu!**

![Crodwin - tag HTML bez znaków spacji](./images/Crowdin_HTMLtag.png)

* * *

Jeśli odnośniki są wyświetlane w Crowdin w ten sposób

![Crowdin - brak wyświetlania znaczników HTML](./images/CrowdinShowURL1.png)

kliknij na ikonkę koła zębatego, aby otworzyć ustawienia, wybierz "Show" i kliknij "Save".

![Crowdin - jak włączyć wyświetlanie znaczników HTML](./images/CrowdinShowURL2.png)

Links will then be shown in standard HTML format and can be translated considering the rules mentioned [above](./translations.html#translate-headline-links).

![Crowdin - wyświetlanie znaczników HTML](./images/CrowdinShowURL3.png)

## Korekta

* Korektorzy tekstu muszą przejść do trybu korekty
    
    ![Tryb korekty dokumentacji](./images/translation_WikiProofreading.png)
    
    i zatwierdzić przetłumaczone teksty
    
    ![Zatwierdzanie tekstów](./images/translations-proofreading.png)

* Kiedy korektor zatwierdzi tłumaczenie, zostanie ono dodane do następnej wersji dokumentacji. Aby przyspieszyć proces, możesz poinformować zespół dokumentacji o nowych tłumaczeniach.