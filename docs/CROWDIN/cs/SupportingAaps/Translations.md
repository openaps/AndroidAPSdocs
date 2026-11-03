# Jak překládat texty pro aplikaci AAPS nebo dokumentaci

* Pro texty používané v aplikaci přejděte na <https://crowdin.com/project/androidaps> a přihlaste se pomocí vašeho GitHub účtu
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
    
        1. Toto jsou návrhy překladu. Hlavně zde uvidíte, jak dobře podle Crowdinu návrh odpovídá, nebo zda už byl text přeložen dříve a vrátil se jen proto, že byl přesunut, ne změněn.
        1. Klikněte na tlačítko „Save“ a uložte návrh překladu. Potom ho dostane korektor ke konečné kontrole.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * Přeložená stránka nebude v dokumentaci zveřejněna, dokud
    
        1. překlad je zkontrolován korektorem
    
        1. synchronizace mezi Crowdinem a GitHubem doběhla (jednou za hodinu) a vytvořila PR na GitHubu.
    
        1. PR na GitHubu byl schválen.
    
    Obvykle to trvá 1–3 dny, o svátcích to může trvat o něco déle.
    
    ### Překlad odkazů
    
    ```{admonition} Odkazy se už nepřekládají
    :class: note
    
    Odkazy se už nepřekládají. Dříve zde bylo téma k tomuto, ale to už neplatí: po přechodu na Markdown a myst_parser v anglickém textu výslovně vytváříme štítky (labels) a ty se automaticky přenášejí do ostatních jazyků.
    
    

Překládáte text, který odkaz představuje. Dávejte prosím pozor, abyste **neodstranili** odkaz, který představuje dvojice tagů `<0></0>` (nebo jiná čísla, pokud je v odstavci více odkazů).

Korektoři na to musí dávat zvláštní pozor!

### Proofreading

* Korektoři se musí přepnout do režimu Proofreading
    
    ![Proofreading mode docs](../images/translation_WikiProofreadingmode.png)
    
    a schválit přeložené texty
    
    ![schválit text](../images/translations-proofreading.png)

* Když korektor překlad schválí, bude přidán do příštího sestavení dokumentace. To probíhá podle potřeby bez pevného rozvrhu, ale přibližně jednou týdně, kromě svátků. Proces můžete urychlit, když tým dokumentace informujete o nových překladech.