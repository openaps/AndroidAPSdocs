# Ako prekladať reťazce aplikácie AAPS alebo dokumentácie

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Pre dokumentáciu navštívte <https://crowdin.com/project/androidapsdocs> a prihláste sa pomocou svojho účtu GitHub

* Pošlite tímu dokumentácie žiadosť o pripojenie. Kliknite na vlajku požadovaného jazyka a potom na tlačidlo „Join“ v pravom hornom rohu ďalšej stránky. Uveďte jazyk, napíšte niečo o sebe a svojich skúsenostiach s AAPS a či chcete byť prekladateľom alebo korektorom (iba ľudia so skúsenosťami s prekladom + pokročilí používatelia AAPS).

```{admonition} Čas na schválenie :class: note

Schválenie je ručný krok. Ako nezisková organizácia neposkytujeme SLA (zaručený čas odozvy), ale schválenie zvyčajne prebehne do 1 dňa. Ak nie, kontaktujte tím dokumentácie cez Facebook alebo Discord.

    <br />* Keď vás schválime, kliknite na vlajku
       ![Keď vás schválime, kliknite na vlajku](../images/translation_flags.png)
    
    ## Preklad aplikácie
    
    (translations-translate-strings-for-AAPS-app)=
    ### Preklad reťazcov aplikácie AAPS
    
    * Ak nemáte preferencie, ktoré reťazce prekladať, na začiatok jednoducho vyberte tlačidlo „Translate All“. Zobrazia sa vám reťazce, ktoré treba preložiť.
    
       ![Kliknite na Translate All](../images/translations-click-translate-all.png)
    
    * Ak chcete preložiť jednotlivý súbor, vyhľadajte ho cez vyhľadávanie alebo v stromovej štruktúre a kliknutím na názov súboru začnite prekladať reťazce v tomto súbore.
    
       ![Kliknite na strings.xml](../images/translations-click-strings.png)
    
    * Prekladajte vety na ľavej strane: pridajte nový preložený text alebo použite a upravte návrh
    
       ![Preklad aplikácie](../images/translations-translate.png)
    
    
    ### Korektúra reťazcov aplikácie AAPS
    
    * Korektori začnú tak, že na domovskej obrazovke jazyka vyberú „Proofread“.
    
       ![Režim korektúry – aplikácia](../images/translations-proofreading-mode.png)
    
    
      a schváľte preložené texty
    
       ![schválenie textu](../images/translations-proofreading.png)
    
    Keď korektor schváli preklad, pridá sa do najbližšej verzie AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Preklad dokumentácie
    
    * Kliknite na názov stránky dokumentácie, ktorú chcete preložiť
    
    ![Kliknite na stránku dokumentácie](../images/translation_WikiPage.png)
    
    
    * Prekladajte vetu po vete
    
        1. Žltý text je text, na ktorom práve pracujete.
    
        1. Zelený text je už preložený. Nemusíte ho prekladať znova.
    
        1. Červený text je zostávajúci text, ktorý treba preložiť.
    
        1. Toto je zdrojový text, na ktorom práve pracujete
    
        1. Toto je preklad, ktorý pripravujete. Text môžete skopírovať zhora alebo vybrať jeden z návrhov nižšie.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Stlačte tlačidlo „save“ a uložte návrh prekladu. It will then be passed to a proofreader for final check.
    
    ![Preklad dokumentácie](../images/translation_WikiTranslate.png)
    
    * Preložená stránka sa v dokumentácii zverejní až vtedy, keď
    
        1. korektor preklad skontroluje
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. je PR na GitHube schválený.
    
    Zvyčajne to trvá 1–3 dni, ale počas sviatkov to môže trvať o niečo dlhšie.
    
    ### Preklad odkazov
    
    ```{admonition} Odkazy sa už neprekladajú
    :class: note
    
    Odkazy sa už neprekladajú. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Prekladáte text, ktorý predstavuje odkaz. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Na to sa musia korektori osobitne pozrieť!

### Korektúra

* Korektori sa musia prepnúť do režimu korektúry (Proofreading)
    
    ![Režim korektúry – dokumentácia](../images/translation_WikiProofreadingmode.png)
    
    a schváliť preložené texty
    
    ![schválenie textu](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. Ak chcete proces urýchliť, môžete tím dokumentácie informovať o nových prekladoch.