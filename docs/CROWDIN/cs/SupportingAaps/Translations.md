# Jak překládat texty pro aplikaci AAPS nebo dokumentaci

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Pro dokumentaci přejděte na <https://crowdin.com/project/androidapsdocs> a přihlaste se pomocí vašeho GitHub účtu

* Pošlete týmu dokumentace žádost o připojení. Klikněte na vlajku požadovaného jazyka a poté na tlačítko "Join" vpravo nahoře na následující stránce. Specifikujte prosím jazyk, uveďte nějaké informace o sobě a svých zkušenostech s AAPS a zda chcete být překladatel nebo korektor (pouze osoby se zkušeností s překlady + pokročilí uživatelé AAPS).

```{admonition} Čas na schválení :class: note

Schválení je nutné provést ručně. Jako nezisková organizace neposkytujeme SLA, ale obecně bude schválení provedeno za méně než jeden den. Pokud ne, kontaktujte prosím dokumentační tým prostřednictvím Facebooku nebo Discordu.

    <br />* Až vás schválíme, klikněte na vlajku
       ![When we approve you, click the flag](../images/translation_flags.png)
    
    ## Překlad aplikace
    
    (translations-translate-strings-for-AAPS-app)=
    ### Překlad textů pro aplikaci AAPS
    
    * Pokud nechcete překládat žádné konkrétní texty, začněte kliknutím na tlačítko „Translate All“. Zobrazí vám řetězce, které potřebují přeložit.
    
       ![Click translate all](../images/translations-click-translate-all.png)
    
    * Pokud chcete přeložit konkrétní soubor, najděte ho prosím prostřednictvím dialogu vyhledávání nebo stromové struktury a klikněte na název souboru, abyste mohli začít pracovat na překladu textů v souboru.
    
       ![Click strings.xml](../images/translations-click-strings.png)
    
    * Překládejte věty na levé straně: přidejte nový přeložený text, nebo použijte a upravte návrh
    
       ![Translation app](../images/translations-translate.png)
    
    
    ### Korektura textů pro aplikaci AAPS
    
    * Korektoři začínají výběrem „Proofread“ na domovské obrazovce jazyka.
    
       ![Proofreading mode app](../images/translations-proofreading-mode.png)
    
    
      a schvalují přeložené texty
    
       ![approve text](../images/translations-proofreading.png)
    
    Když korektor překlad schválí, bude přidán do příští verze AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Překlad dokumentace
    
    * Klikněte na název stránky dokumentace, kterou chcete přeložit
    
    ![Click docs page](../images/translation_WikiPage.png)
    
    
    * Překládejte větu po větě
    
        1. Žlutý text je text, na kterém právě pracujete.
    
        1. Zelený text je už přeložený. Ten už nemusíte překládat znovu.
    
        1. Červený text je zbývající text, který je potřeba přeložit.
    
        1. Toto je zdrojový text, na kterém právě pracujete
    
        1. Toto je překlad, který připravujete. Text můžete zkopírovat shora nebo vybrat jeden z návrhů níže.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Klikněte na tlačítko „Save“ a uložte návrh překladu. It will then be passed to a proofreader for final check.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * Přeložená stránka nebude v dokumentaci zveřejněna, dokud
    
        1. překlad je zkontrolován korektorem
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. PR na GitHubu byl schválen.
    
    Obvykle to trvá 1–3 dny, o svátcích to může trvat o něco déle.
    
    ### Překlad odkazů
    
    ```{admonition} Odkazy se už nepřekládají
    :class: note
    
    Odkazy se už nepřekládají. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Překládáte text, který odkaz představuje. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Korektoři na to musí dávat zvláštní pozor!

### Proofreading

* Korektoři se musí přepnout do režimu Proofreading
    
    ![Proofreading mode docs](../images/translation_WikiProofreadingmode.png)
    
    a schválit přeložené texty
    
    ![schválit text](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. Proces můžete urychlit, když tým dokumentace informujete o nových překladech.