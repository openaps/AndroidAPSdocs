# Com traduir textos de l'aplicació AAPS o de la documentació

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Per a la documentació, aneu a <https://crowdin.com/project/androidapsdocs> i inicieu la sessió amb el vostre compte de GitHub

* Envieu una sol·licitud per unir-vos a l'equip de la documentació. Per fer-ho, feu clic a la bandera de l'idioma que vulgueu i després al botó «Join» a la cantonada superior dreta de la pàgina següent. Indiqueu l'idioma, doneu una mica d'informació sobre vosaltres i la vostra experiència amb AAPS, i si voleu ser traductors o revisors (només persones amb experiència en traducció i usuaris avançats d'AAPS).

```{admonition} Temps d'aprovació :class: note

L'aprovació és un pas manual. Com a organització sense ànim de lucre no oferim cap termini garantit (SLA), però en general l'aprovació es fa en menys d'1 dia. Si no és així, contacteu amb l'equip de la documentació per Facebook o Discord.

    <br />* Quan us aprovem, feu clic a la bandera
       ![When we approve you, click the flag](../images/translation_flags.png)
    
    ## Traducció de l'aplicació
    
    (translations-translate-strings-for-AAPS-app)=
    ### Traduir textos de l'aplicació AAPS
    
    * Si no teniu preferència pels textos que traduïu, seleccioneu el botó «Translate All» per començar. Us mostrarà els textos que cal traduir.
    
       ![Click translate all](../images/translations-click-translate-all.png)
    
    * Si voleu traduir un fitxer concret, cerqueu-lo amb el diàleg de cerca o amb l'estructura en arbre i feu clic al nom del fitxer per començar a traduir els textos d'aquest fitxer.
    
       ![Click strings.xml](../images/translations-click-strings.png)
    
    * Traduïu les frases a la part esquerra afegint un text traduït nou, o feu servir i editeu un suggeriment
    
       ![Translation app](../images/translations-translate.png)
    
    
    ### Revisar textos de l'aplicació AAPS
    
    * Els revisors comencen seleccionant «Proofread» des de la pantalla inicial de l'idioma.
    
       ![Proofreading mode app](../images/translations-proofreading-mode.png)
    
    
      i aproven els textos traduïts
    
       ![approve text](../images/translations-proofreading.png)
    
    Quan un revisor aprova una traducció, s'afegeix a la propera versió d'AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Traducció de la documentació
    
    * Feu clic al nom de la pàgina de la documentació que voleu traduir
    
    ![Click docs page](../images/translation_WikiPage.png)
    
    
    * Traduïu frase per frase
    
        1. El text groc és el text en què esteu treballant ara.
    
        1. El text verd ja està traduït. No cal que el torneu a traduir.
    
        1. El text vermell és el text que encara s'ha de traduir.
    
        1. Aquest és el text original en què esteu treballant ara
    
        1. Aquesta és la traducció que esteu preparant. Podeu copiar el text de dalt o triar un dels suggeriments de sota.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Premeu el botó «Save» per desar una proposta de traducció. It will then be passed to a proofreader for final check.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * Una pàgina traduïda no es publicarà a la documentació abans que
    
        1. la traducció s'ha revisat
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. la PR a GitHub s'ha aprovat.
    
    En general això triga 1–3 dies, però durant les vacances pot trigar una mica més.
    
    ### Traducció dels enllaços
    
    ```{admonition} Els enllaços ja no es tradueixen
    :class: note
    
    Els enllaços ja no es tradueixen. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Traduïu el text que representa l'enllaç. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Els revisors hi han de prestar una atenció especial!

### Revisió

* Els revisors han de canviar al mode de revisió (Proofreading)
    
    ![Mode de revisió de la documentació](../images/translation_WikiProofreadingmode.png)
    
    i aprovar els textos traduïts
    
    ![aprovar el text](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. Per accelerar el procés, podeu informar l'equip de la documentació de les traduccions noves.