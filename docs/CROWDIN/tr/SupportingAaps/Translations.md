# How to translate strings for the AAPS app or the documentation

* Uygulamada kullanılan dizeler için <https://crowdin.com/project/androidaps> adresine gidin ve GitHub hesabınızı kullanarak giriş yapın
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
    
        1. Bunlar bir çeviri önerisidir. Özellikle Crowdin'in bunu ne kadar uyumlu olarak değerlendirdiğini veya geçmişte olup olmadığını ve metin düzenlemeleriyle ortaya çıkıp içerik değişikliği yapılıp yapılmadığını görebilirsiniz.
        1. Bir çeviri önerisini kaydetmek için "kaydet" düğmesine basın. Daha sonra son kontrol için redaktöre terfi ettirilecektir.
    
    ![Translation docs](../images/translation_WikiTranslate.png)
    
    * A translated page will not be published in docs before 
    
        1. çeviri redaksiyonu
    
         1. Crowdin ve Github arasındaki senkronizasyon (saatte bir) tamamlanır ve bu da Github için bir PR (çekme isteği) oluşturur.
    
        1. Github'daki PR onaylanır.
    
    Genel olarak bu 1 - 3 güne ihtiyaç duyar ancak tatil günlerinde biraz daha uzun sürebilir.
    
    ### Bağlantılı çeviriler
    
    ```{admonition} Bağlantılar artık çevrilmiyor
    :class: not
    
    Bağlantılar artık çevrilmiyor. Geçmişte burada bir başlığımız vardı ama bu, Markdown'a ve myst_parser'a geçiş yoluyla gitti, biz açıkça ingilizce metinde etiketler oluşturuyoruz ve bu etiketleri başlık altında dillere yayıyoruz.
    
    

Bağlantıyı temsil eden metni çeviriyorsunuz. Lütfen bir çift `<0></0>` etiketiyle temsil edilen veya bir paragrafta başka bir sayı varsa bağlantıyı **kaldırmamaya** dikkat etmelisiniz.

Bu bağlantılar ve karakter çiftleri için dokümanı kontrol edip göz atmak redaktörlerin işidir!

### Redaksiyon

* Redaktörler redaksiyon moduna geçerek
    
    ![Doküman redaksiyon modu](../images/translation_WikiProofreadingmode.png)
    
    çevrilmiş metinleri onaylayabilirler
    
    ![metni onayla](../images/translations-proofreading.png)

* Redaktör bir çeviriyi onayladığında, sabit bir takvim olmamakla birlikte, tatil günleri dışında yaklaşık haftada bir kez gerçekleşecek bir sonraki doküman güncellemesine eklenecektir. Süreci hızlandırmak için dokümantasyon ekibini yeni çeviriler hakkında bilgilendirebilirsiniz.