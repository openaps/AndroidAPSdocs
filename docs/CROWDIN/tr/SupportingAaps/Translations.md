# How to translate strings for the AAPS app or the documentation

* For the strings used in the app go to <https://crowdin.com/project/androidaps> and login using your GitHub account
* Dokümantasyon için lütfen <https://crowdin.com/project/androidapsdocs> adresini ziyaret edin ve GitHub hesabınızı kullanarak giriş yapın

* Dokümanlar ekibine katılma isteği gönderin. Bunu yapmak için istediğiniz dilin bayrağına ve ardından sonraki sayfanın sağ üst köşesindeki "join" katıl düğmesine tıklayın. Please specify language, give some information about you and your AAPS experience and if you want to be a translator or proofreader (only people skilled in translating + advanced AAPS users).

```{admonition} Onay Zamanı :class: not

Onay manuel bir adımdır. Kâr amacı gütmeyen kuruluş olarak SLA'lar sağlamıyoruz ancak genel olarak onay < 1 gün içinde yapılacaktır. Aksi taktirde lütfen Facebook veya Discord aracılığıyla doküman ekibiyle iletişime geçin.

    <br />* When we approve you, click the flag
       ![When we approve you, click the flag](../images/translation_flags.png)
    
    ## Translation of the app
    
    (translations-translate-strings-for-AAPS-app)=
    ### Translate strings for AAPS app
    
    * If you have no preference for strings you translate just select the "Translate All" button to start. Size çevrilmesi gereken dizeleri gösterecektir.
    
       ![Click translate all](../images/translations-click-translate-all.png)
    
    * If you want to translate an individual file please search for the file via search dialog or tree structure and click on the filename to start the translation work on strings in that file.
    
       ![Click strings.xml](../images/translations-click-strings.png)
    
    * Translate sentences on left side by adding new translated text or use & edit suggestion 
    
       ![Translation app](../images/translations-translate.png)
    
    
    ### Proofread strings for AAPS app
    
    * Proofreaders start by selecting "Proofread" when starting from the language home screen.
    
       ![Proofreading mode app](../images/translations-proofreading-mode.png) 
    
    
      and approve translated texts 
    
       ![approve text](../images/translations-proofreading.png)
    
    When a proofreader approves a translation it will be added to the next version of AAPS.
    
    (translations-translation-of-the-documentation)=
    ## Translation of the documentation
    
    * Click the name of the docs page you want to translate
    
    ![Click docs page](../images/translation_WikiPage.png)
    
    
    * Translate sentences by sentence
    
        1. Sarı metin, şu anda üzerinde çalıştığınız metindir.
    
        1. Yeşil metin zaten çevrilmiştir. Tekrar yapmana gerek yok.
    
        1. Kırmızı metin, çevrilmesi gereken metindir.
    
        1. Bu, şu anda üzerinde çalıştığınız kaynak metindir.
    
         1. Bu, hazırladığınız çeviridir. Yukarıdaki metni kopyalayabilir veya aşağıdaki önerilerden birini seçebilirsiniz.
    
        1. These are the suggestions for a translation. Especially you can see how much Crowdin rates this as a fit, or whether it was already translated in the past and only came back because the text was moved, not changed.
        1. Bir çeviri önerisini kaydetmek için "kaydet" düğmesine basın. It will then be passed to a proofreader for final check.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * A translated page will not be published in docs before 
    
        1. çeviri redaksiyonu
    
         1. the sync run between Crowdin and Github finished (once an hour) which creates a PR for GitHub.
    
        1. Github'daki PR onaylanır.
    
    Genel olarak bu 1 - 3 güne ihtiyaç duyar ancak tatil günlerinde biraz daha uzun sürebilir.
    
    ### Bağlantılı çeviriler
    
    ```{admonition} Bağlantılar artık çevrilmiyor
    :class: not
    
    Bağlantılar artık çevrilmiyor. In the past we had a topic here but this is gone as through migration to Markdown and the myst_parser we explicitly create labels in the english text and propagate these labels under the hood to the languages.
    
    

Bağlantıyı temsil eden metni çeviriyorsunuz. Please be careful **not** to remove the link, which is represented by a pair of `<0></0>` tags (or other numbers, if there are more links in one paragraph).

Bu bağlantılar ve karakter çiftleri için dokümanı kontrol edip göz atmak redaktörlerin işidir!

### Redaksiyon

* Redaktörler redaksiyon moduna geçerek
    
    ![Doküman redaksiyon modu](../images/translation_WikiProofreadingmode.png)
    
    çevrilmiş metinleri onaylayabilirler
    
    ![metni onayla](../images/translations-proofreading.png)

* When a proofreader approves a translation it will be added to the next docs build which happens in no fixed schedule on demand but around once a week except during holidays. Süreci hızlandırmak için dokümantasyon ekibini yeni çeviriler hakkında bilgilendirebilirsiniz.