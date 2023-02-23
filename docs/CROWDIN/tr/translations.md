# AndroidAPS uygulaması veya dokümantasyon için dizeler (strings) nasıl çevrilir?

* Uygulamada kullanılan dizeler için <https://crowdin.com/project/androidaps> adresine gidin ve GitHub hesabınızı kullanarak giriş yapın
* Dokümantasyon için lütfen <https://crowdin.com/project/androidapsdocs> adresini ziyaret edin ve GitHub hesabınızı kullanarak giriş yapın

* Dokümanlar ekibine katılma isteği gönderin. Bunu yapmak için istediğiniz dilin bayrağına ve ardından sonraki sayfanın sağ üst köşesindeki "join" katıl düğmesine tıklayın. Lütfen dili belirtin ve çevirmen veya redaktör olmak istiyorsanız (yalnızca çeviri konusunda yetenekli kişiler + ileri düzey AndroidAPS kullanıcıları) AAPS deneyiminiz ve kendiniz hakkında biraz bilgi verin.

```{admonition} Onay Zamanı :class: not

Onay manuel bir adımdır. Kâr amacı gütmeyen kuruluş olarak SLA'lar sağlamıyoruz ancak genel olarak onay < 1 gün içinde yapılacaktır. Aksi taktirde lütfen Facebook veya Discord aracılığıyla doküman ekibiyle iletişime geçin.

    <br />* When we approve you, click the flag
       ![When we approve you, click the flag](./images/translation_flags.png)
    
    ## Translation of the app
    
    (translations-translate-strings-for-androidaps-app)=
    ### Translate strings for AndroidAPS app
    
    * If you have no preference for strings you translate just select the "Translate All" button to start. Size çevrilmesi gereken dizeleri gösterecektir.
    
       ![Click translate all](./images/translations-click-translate-all.png)
    
    * If you want to translate an individual file please search for the file via search dialog or tree structure and click on the filename to start the translation work on strings in that file.
    
       ![Click strings.xml](./images/translations-click-strings.png)
    
    * Translate sentences on left side by adding new translated text or use & edit suggestion 
    
       ![Translation app](./images/translations-translate.png)
    
    
    ### Proofread strings for AndroidAPS app
    
    * Proofreaders start by selecting "Proofread" when starting from the language home screen.
    
       ![Proofreading mode app](./images/translations-proofreading-mode.png) 
    
    
      and approve translated texts 
    
       ![approve text](./images/translations-proofreading.png)
    
    When a proofreader approves a translation it will be added to the next version of AndroidAPS.
    
    (translations-translation-of-the-documentation)=
    ## Translation of the documentation
    
    * Click the name of the docs page you want to translate
    
    ![Click docs page](./images/translation_WikiPage.png)
    
    
    * Translate sentences by sentence
    
        1. The yellow text is the text you are working at the moment.
    
        1. The green text is already translated. You don't need to do this again.
    
        1. The red text is the remaining text which have to be translated.
    
        1. This is the source text you are working on at the moment
    
        1. This is the translation you are preparing. You can copy the text from above or select one of the suggestions below.
    
        1. These are the suggestion for a translation. Especially you can see how much Crowdin rates this as a fit or if it was already just in the past and come up through text rearrangements but not content change.
        1. Press the "save" button to save a proposal for the translation. It will then promoted to a proofreader for final check.
    
    ![Translation docs](./images/translation_WikiTranslate.png)
    
    * A translated page will not be published in docs before 
    
        1. the translation is proofread
    
        1. the sync run between Crowdin and Github finished (once an hour) which creates an PR for Github.
    
        1. the PR in Github was approved.
    
    In general this needs 1 - 3 days but might during holiday take a little bit longer.
    
    ### Bağlantılı çeviriler
    
    ```{admonition} Bağlantılar artık çevrilmiyor
    :class: not
    
    Bağlantılar artık çevrilmiyor. Geçmişte burada bir başlığımız vardı ama bu, Markdown'a ve myst_parser'a geçiş yoluyla gitti, biz açıkça ingilizce metinde etiketler oluşturuyoruz ve bu etiketleri başlık altında dillere yayıyoruz.
    
    

Bağlantıyı temsil eden metni çeviriyorsunuz. Lütfen bir çift `<0></0>` etiketiyle temsil edilen veya bir paragrafta başka bir sayı varsa bağlantıyı **kaldırmamaya** dikkat etmelisiniz.

Bu bağlantılar ve karakter çiftleri için dokümanı kontrol edip göz atmak redaktörlerin işidir!

### Redaksiyon

* Redaktörler redaksiyon moduna geçerek
    
    ![Doküman redaksiyon modu](./images/translation_WikiProofreadingmode.png)
    
    çevrilmiş metinleri onaylayabilirler
    
    ![metni onayla](./images/translations-proofreading.png)

* Redaktör bir çeviriyi onayladığında, sabit bir takvim olmamakla birlikte, tatil günleri dışında yaklaşık haftada bir kez gerçekleşecek bir sonraki doküman güncellemesine eklenecektir. Süreci hızlandırmak için dokümantasyon ekibini yeni çeviriler hakkında bilgilendirebilirsiniz.