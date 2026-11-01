# Как да превеждате текстовете за приложението AAPS или документацията

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* За документацията посетете <https://crowdin.com/project/androidapsdocs> и влезте с профила си в GitHub

* Изпратете заявка за присъединяване към екипа на документацията. За целта натиснете флага на желания език и след това бутона „Join“ в горния десен ъгъл на следващата страница. Моля, посочете езика, дайте малко информация за себе си и за опита си с AAPS и дали искате да сте преводач или коректор (коректори могат да са само хора с опит в превода, които са и напреднали потребители на AAPS).

```{admonition} Време за одобрение :class: note

Одобрението се прави ръчно. Като организация с нестопанска цел не даваме гаранции за срокове (SLA), но обикновено одобрението става за по-малко от 1 ден. Ако това не стане, моля, свържете се с екипа на документацията чрез Facebook или Discord.

    <br />* Когато ви одобрим, натиснете флага
       ![Когато ви одобрим, натиснете флага](../images/translation_flags.png)
    
    ## Превод на приложението
    
    (translations-translate-strings-for-AAPS-app)=
    ### Превод на текстовете в приложението AAPS
    
    * Ако нямате предпочитания кои текстове да превеждате, просто изберете бутона „Translate All“, за да започнете. Ще видите текстовете, които трябва да се преведат.
    
       ![Натиснете Translate All](../images/translations-click-translate-all.png)
    
    * Ако искате да преведете отделен файл, потърсете го чрез търсенето или дървовидната структура и натиснете името на файла, за да започнете превода на текстовете в него.
    
       ![Натиснете strings.xml](../images/translations-click-strings.png)
    
    * Превеждайте изреченията отляво, като добавите нов преведен текст или използвате и редактирате предложение
    
       ![Превод на приложението](../images/translations-translate.png)
    
    
    ### Коректура на текстовете в приложението AAPS
    
    * Коректорите започват, като изберат „Proofread“ от началния екран на езика.
    
       ![Режим Proofreading в приложението](../images/translations-proofreading-mode.png)
    
    
      и одобряват преведените текстове
    
       ![Одобряване на текст](../images/translations-proofreading.png)
    
    Когато коректор одобри превод, той ще бъде включен в следващата версия на AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Превод на документацията
    
    * Натиснете името на страницата от документацията, която искате да преведете
    
    ![Натиснете страница от документацията](../images/translation_WikiPage.png)
    
    
    * Превеждайте изречение по изречение
    
        1. Жълтият текст е текстът, върху който работите в момента.
    
        1. Зеленият текст вече е преведен. Не е нужно да го превеждате отново.
    
        1. Червеният текст е оставащият текст, който трябва да се преведе.
    
        1. Това е изходният текст, върху който работите в момента
    
        1. Това е преводът, който подготвяте. Можете да копирате текста отгоре или да изберете едно от предложенията отдолу.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Натиснете бутона „save“, за да запазите предложението си за превод. It will then be passed to a proofreader for final check.
    
    ![Превод на документацията](../images/translation_WikiTranslate.png)
    
    * Преведена страница няма да бъде публикувана в документацията, преди
    
        1. преводът да бъде проверен от коректор
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. PR в GitHub да бъде одобрен.
    
    Обикновено това отнема 1–3 дни, но по време на празници може да отнеме малко повече.
    
    ### Превеждане на връзки
    
    ```{admonition} Връзките вече не се превеждат
    :class: note
    
    Връзките вече не се превеждат. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Вие превеждате текста, който представлява връзката. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Задача на коректорите е да обърнат специално внимание на това!

### Коректура

* Коректорите трябва да превключат в режим Proofreading (коректура)
    
    ![Режим Proofreading за документацията](../images/translation_WikiProofreadingmode.png)
    
    и да одобряват преведените текстове
    
    ![Одобряване на текст](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. За да ускорите процеса, можете да уведомите екипа на документацията за новите преводи.