# Jak przetłumaczyć teksty dla aplikacji AAPS lub dokumentacji

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Aby tłumaczyć dokumentację, przejdź do <https://crowdin.com/project/androidapsdocs> i zaloguj się swoim kontem GitHub

* Wyślij prośbę o dołączenie do zespołu dokumentacji. Aby to zrobić, kliknij flagę wybranego języka, a następnie przycisk „Join” w prawym górnym rogu następnej strony. Podaj język, napisz kilka słów o sobie i swoim doświadczeniu z AAPS oraz czy chcesz być tłumaczem czy korektorem (korektor: tylko osoby z doświadczeniem w tłumaczeniu i zaawansowani użytkownicy AAPS).

```{admonition} Czas na zatwierdzenie :class: note

Zatwierdzenie jest robione ręcznie. Jako organizacja non-profit nie gwarantujemy czasu obsługi (SLA), ale zwykle zatwierdzenie trwa krócej niż 1 dzień. Jeśli tak się nie stanie, skontaktuj się z zespołem dokumentacji przez Facebook lub Discord.

    <br />* Gdy zatwierdzimy twoją prośbę, kliknij flagę
       ![Gdy zatwierdzimy twoją prośbę, kliknij flagę](../images/translation_flags.png)
    
    ## Tłumaczenie aplikacji
    
    (translations-translate-strings-for-AAPS-app)=
    ### Tłumaczenie tekstów aplikacji AAPS
    
    * Jeśli nie masz preferencji, które teksty chcesz tłumaczyć, po prostu kliknij przycisk „Translate All”, aby zacząć. Zobaczysz teksty, które trzeba przetłumaczyć.
    
       ![Kliknij Translate All](../images/translations-click-translate-all.png)
    
    * Jeśli chcesz przetłumaczyć pojedynczy plik, znajdź go przez pole wyszukiwania lub drzewo plików i kliknij nazwę pliku, aby zacząć tłumaczyć teksty w tym pliku.
    
       ![Kliknij strings.xml](../images/translations-click-strings.png)
    
    * Tłumacz zdania po lewej stronie: dodaj nowy przetłumaczony tekst albo użyj sugestii i ją popraw
    
       ![Tłumaczenie aplikacji](../images/translations-translate.png)
    
    
    ### Korekta tekstów aplikacji AAPS
    
    * Korektorzy zaczynają od wybrania „Proofread” na stronie głównej języka.
    
       ![Tryb korekty aplikacji](../images/translations-proofreading-mode.png)
    
    
      i zatwierdzają przetłumaczone teksty
    
       ![Zatwierdzanie tekstu](../images/translations-proofreading.png)
    
    Gdy korektor zatwierdzi tłumaczenie, zostanie ono dodane do następnej wersji AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Tłumaczenie dokumentacji
    
    * Kliknij nazwę strony dokumentacji, którą chcesz przetłumaczyć
    
    ![Kliknij stronę dokumentacji](../images/translation_WikiPage.png)
    
    
    * Tłumacz zdanie po zdaniu
    
        1. Tekst na żółtym tle to tekst, nad którym teraz pracujesz.
    
        1. Tekst na zielonym tle został już przetłumaczony. Nie musisz robić tego ponownie.
    
        1. Tekst na czerwonym tle to tekst, który trzeba jeszcze przetłumaczyć.
    
        1. To tekst źródłowy, nad którym teraz pracujesz
    
        1. To tłumaczenie, które przygotowujesz. Możesz skopiować tekst z góry lub wybrać jedną z sugestii poniżej.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Kliknij przycisk „save”, aby zapisać propozycję tłumaczenia. It will then be passed to a proofreader for final check.
    
    ![Tłumaczenie dokumentacji](../images/translation_WikiTranslate.png)
    
    * Przetłumaczona strona nie zostanie opublikowana w dokumentacji, zanim
    
        1. tłumaczenie zostanie sprawdzone przez korektora
    
        1. zakończy się synchronizacja między Crowdin i GitHubem (raz na godzinę), która tworzy PR na GitHubie.
    
        1. PR na GitHubie zostanie zatwierdzony.
    
    Zwykle trwa to 1–3 dni, ale w okresie świąt i wakacji może trwać trochę dłużej.
    
    ### Tłumaczenie linków
    
    ```{admonition} Linki nie są już tłumaczone
    :class: note
    
    Linki nie są już tłumaczone. Kiedyś była tu osobna sekcja, ale już jej nie ma. Po przejściu na Markdown i myst_parser tworzymy etykiety w tekście angielskim i automatycznie przenosimy je do innych języków.
    
    

Tłumaczysz tekst, który jest wyświetlany jako link. Uważaj, aby **nie** usunąć linku, który jest oznaczony parą tagów `<0></0>` (albo innymi numerami, jeśli w akapicie jest więcej linków).

Korektor musi zwrócić na to szczególną uwagę!

### Korekta

* Korektorzy muszą przełączyć się na tryb korekty
    
    ![Tryb korekty w dokumentacji](../images/translation_WikiProofreadingmode.png)
    
    i zatwierdzić przetłumaczone teksty
    
    ![Zatwierdzanie tekstu](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. Aby przyspieszyć proces, możesz poinformować zespół dokumentacji o nowych tłumaczeniach.