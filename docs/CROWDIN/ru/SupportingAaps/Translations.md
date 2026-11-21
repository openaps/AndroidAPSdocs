# Как переводить строки приложения AAPS и документации

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Для перевода статей документации перейдите по ссылке <https://crowdin.com/project/androidapsdocs> и залогиньтесь, используя вашу учетную запись GitHub

* Запросите участие в команде составителей документации. Для этого кликните по флагу желаемого языка, а затем нажмите кнопку "Join" ("Присоединиться") в правом верхнем углу следующей страницы. Пожалуйста, укажите свой язык, сообщите немного информации о себе, своем опыте с AAPS, о том, какую роль хотите получить - переводчика (translator) или корректора (proofreader) (указывайте корректора только если вы имеете опыт в переводах + опытный пользователь AAPS).

```{admonition} Ожидание одобрения :class: note

Одобрение выполняется человеком. Как некоммерческая организация мы не выставляем какие-либо сроки, но обычно одобрение занимает меньше 1 дня. Если вы не получили одобрения - пожалуйста, обратитесь к команде документации через Facebook или Discord (русскоязычные пользователи могут написать в группу AndroidApsGroup в Telegram).

    <br />* Когда мы вас одобрим, нажмите на флаг
       ![When we approve you, click the flag](../images/translation_flags.png)
    
    ## Перевод приложения
    
    (translations-translate-strings-for-AAPS-app)=
    ### Перевод строк приложения AAPS
    
    * Если вам все равно, какие строки переводить, просто нажмите кнопку "Translate All" ("Перевести всё"), чтобы начать. Будут показаны строки, которые нужно перевести.
    
       ![Click translate all](../images/translations-click-translate-all.png)
    
    * If you want to translate an individual file please search for the file via search dialog or tree structure and click on the filename to start the translation work on strings in that file.
    
       ![Click strings.xml](../images/translations-click-strings.png)
    
    * Переводите предложения слева: добавьте новый перевод или используйте предложенный вариант и отредактируйте его
    
       ![Translation app](../images/translations-translate.png)
    
    
    ### Корректура строк приложения AAPS
    
    * Корректоры начинают с выбора "Proofread" ("Корректура") на начальном экране языка.
    
       ![Proofreading mode app](../images/translations-proofreading-mode.png)
    
    
      и одобрить переведенный текст
    
       ![approve text](../images/translations-proofreading.png)
    
    Когда корректор одобряет перевод, он будет добавлен в следующую версию AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Перевод документации
    
    * Нажмите на название страницы документации, которую хотите перевести
    
    ![Click docs page](../images/translation_WikiPage.png)
    
    
    * Переводите предложение за предложением
    
        1. Желтым выделен текст, над которым вы сейчас работаете.
    
        1. Зеленым - уже переведенный текст. Вам не требуется переводить его.
    
        1. Красным выделен текст, который еще не переведен.
    
        1. Это исходный текст, над которым вы сейчас работаете
    
        1. Ваш перевод. Вы можете скопировать текст из поля выше или выбрать один из предложенных ниже.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Нажмите кнопку "save" ("Сохранить") чтобы сохранить свое предложение перевода. It will then be passed to a proofreader for final check.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * A translated page will not be published in docs before 
    
        1. перевод не будет проверен корректором
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. PR в Github не будет одобрен.
    
    В среднем вся процедура занимает от 1 до 3 дней, но в выходные и праздники могут быть задержки.
    
    ### Перевод ссылок
    
    ```{admonition} Ссылки больше не переводятся
    :class: note
    
    Ссылки больше не переводятся. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Вы переводите текст ссылки, отображаемый пользователю. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Корректорам следует обращать особое внимание вопросу правильности ссылок!

### Корректура

* Корректоры должны переключиться в режим Proofreading
    
    ![Режим коррекции документации](../images/translation_WikiProofreadingmode.png)
    
    и одобрить переведенный текст
    
    ![одобрить текст](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. Для ускорения процесса вы можете проинформировать команду о появлении нового перевода.