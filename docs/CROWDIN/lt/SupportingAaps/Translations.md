# Kaip versti AAPS programėlės arba dokumentacijos tekstus

* Programėlės tekstams versti eikite į <https://crowdin.com/project/androidaps> ir prisijunkite su savo GitHub paskyra
* Dokumentacijai versti apsilankykite <https://crowdin.com/project/androidapsdocs> ir prisijunkite su savo GitHub paskyra

* Išsiųskite prašymą prisijungti prie dokumentacijos komandos. Norėdami tai padaryti, spauskite norimos kalbos vėliavą, o tada kito puslapio viršutiniame dešiniajame kampe spauskite mygtuką "Join" (prisijungti). Nurodykite kalbą, šiek tiek papasakokite apie save ir savo AAPS patirtį ir parašykite, ar norite būti vertėju, ar korektoriumi (korektoriais gali būti tik vertimo įgūdžių turintys ir patyrę AAPS naudotojai).

```{admonition} Patvirtinimo laikas :class: note

Patvirtinimas atliekamas rankiniu būdu. Esame ne pelno organizacija, todėl negarantuojame atsakymo laiko (SLA), bet paprastai patvirtiname per < 1 dieną. Jei ne, susisiekite su dokumentacijos komanda per Facebook arba Discord.

    <br />* Kai jus patvirtinsime, spauskite vėliavą
       ![Kai jus patvirtinsime, spauskite vėliavą](../images/translation_flags.png)
    
    ## Programėlės vertimas
    
    (translations-translate-strings-for-AAPS-app)=
    ### AAPS programėlės tekstų vertimas
    
    * Jei neturite pageidavimų, kuriuos tekstus versti, tiesiog spauskite mygtuką "Translate All" (versti viską) ir pradėkite. Bus parodyti tekstai, kuriuos reikia išversti.
    
       ![Spauskite Translate All](../images/translations-click-translate-all.png)
    
    * Jei norite versti atskirą failą, suraskite jį per paieškos langą arba medžio struktūrą ir spauskite failo pavadinimą. Taip pradėsite versti to failo tekstus.
    
       ![Spauskite strings.xml](../images/translations-click-strings.png)
    
    * Verskite sakinius kairėje pusėje: įrašykite naują vertimą arba panaudokite ir pataisykite pasiūlymą
    
       ![Programėlės vertimas](../images/translations-translate.png)
    
    
    ### AAPS programėlės tekstų korektūra
    
    * Korektoriai pradeda kalbos pradžios ekrane pasirinkdami "Proofread" (korektūra).
    
       ![Programėlės korektūros režimas](../images/translations-proofreading-mode.png)
    
    
      ir patvirtina išverstus tekstus
    
       ![patvirtinti tekstą](../images/translations-proofreading.png)
    
    Kai korektorius patvirtina vertimą, jis įtraukiamas į kitą AAPS versiją.
    
    (translations-translation-of-the-documentation)=
    ## Dokumentacijos vertimas
    
    * Spauskite dokumentacijos puslapio, kurį norite versti, pavadinimą
    
    ![Spauskite dokumentacijos puslapį](../images/translation_WikiPage.png)
    
    
    * Verskite sakinį po sakinio
    
        1. Geltonas tekstas – tai tekstas, kurį šiuo metu verčiate.
    
        1. Žalias tekstas jau išverstas. Jo dar kartą versti nereikia.
    
        1. Raudonas tekstas – tai likęs tekstas, kurį dar reikia išversti.
    
        1. Tai šaltinio tekstas, kurį šiuo metu verčiate
    
        1. Tai vertimas, kurį rengiate. Galite nukopijuoti tekstą iš viršaus arba pasirinkti vieną iš žemiau esančių pasiūlymų.
    
        1. Tai vertimo pasiūlymai. Čia ypač matysite, kiek, Crowdin vertinimu, pasiūlymas tinka, arba ar tekstas jau buvo išverstas anksčiau ir vėl atsirado tik todėl, kad buvo perkeltas, o ne pakeistas.
        1. Paspauskite mygtuką "save" (išsaugoti), kad išsaugotumėte vertimo pasiūlymą. Tada vertimą galutinai patikrins korektorius.
    
    ![Dokumentacijos vertimas](../images/translation_WikiTranslate.png)
    
    * Išverstas puslapis dokumentacijoje nebus paskelbtas, kol
    
        1. vertimą patikrino korektorius
    
        1. baigėsi Crowdin ir GitHub sinchronizavimas (kartą per valandą), kuris sukuria PR GitHub sistemoje.
    
        1. Github sistemoje buvo patvirtintas PR.
    
    Paprastai tai užtrunka 1–3 dienas, bet per atostogas gali užtrukti šiek tiek ilgiau.
    
    ### Nuorodų vertimas
    
    ```{admonition} Nuorodos nebeverčiamos
    :class: note
    
    Nuorodos nebeverčiamos. Anksčiau čia buvo atskiras skyrius, bet jo nebeliko: perėjus prie Markdown ir myst_parser, angliškame tekste aiškiai kuriame žymes (labels) ir automatiškai perkeliame jas į kitas kalbas.
    
    

Jūs verčiate tekstą, kuris rodomas kaip nuoroda. Būkite atsargūs ir **nepašalinkite** nuorodos, kurią žymi žymų pora `<0></0>` (arba kiti skaičiai, jei vienoje pastraipoje yra daugiau nuorodų).

Korektoriai turi į tai atkreipti ypatingą dėmesį!

### Korektūra

* Korektoriai turi pereiti į korektūros režimą (Proofreading)
    
    ![Dokumentacijos korektūros režimas](../images/translation_WikiProofreadingmode.png)
    
    and approve translated texts
    
    ![patvirtinti tekstą](../images/translations-proofreading.png)

* Kai korektorius patvirtina vertimą, jis įtraukiamas į kitą dokumentacijos kūrimą (build). Jis vyksta ne pagal tvarkaraštį, o pagal poreikį, maždaug kartą per savaitę, išskyrus atostogų laikotarpį. Kad procesas vyktų greičiau, galite pranešti dokumentacijos komandai apie naujus vertimus.