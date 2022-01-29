# AndroidAPS ve dokümantasyon nasıl çevrilir

* <https://crowdin.com/project/androidaps> veya <https://crowdin.com/project/androidapsdocs> adresine gidin ve GitHub hesabınızı kullanarak giriş yapın

* Dokümanlar ekibine katılma isteği gönderin. Bunu yapmak için istediğiniz dilin bayrağına ve ardından sonraki sayfanın sağ üst köşesindeki "join" katıl düğmesine tıklayın. Lütfen dili belirtin ve çevirmen veya redaktör olmak istiyorsanız (yalnızca çeviri konusunda yetenekli kişiler + ileri düzey AndroidAPS kullanıcıları) AAPS deneyiminiz ve kendiniz hakkında biraz bilgi verin.

* Sizi onayladığımızda bayrağa tıklayın ![When we approve you, click the flag](./images/translation_flags2019.png)

## AndroidAPS uygulaması için dizeleri (strings) çevir

* strings.xml üzerine tıkla
    
    ![strings.xml üzerine tıkla](./images/translations-click-strings.png)

* Sol taraftaki cümleleri, yeni çevrilmiş metin ekleyerek veya & öneriyi düzenleyerek çevirebilirsiniz
    
    ![Translation app](./images/translations-translate.png)

* Redaktörler redaksiyon moduna geçerek
    
    ![Proofreading mode app](./images/translations-proofreading-mode.png)
    
    çevrilmiş metinleri onaylayabilirler
    
    ![approve text](./images/translations-proofreading.png)

Redaktör bir çeviriyi onayladığında, AndroidAPS'in sonraki sürümüne eklenecektir. Diğer çevirilere başlamadan, henüz onaylanmayan mevcut çevirileri de gözden geçirip, yanlış olup olmadığını kontrol etmek veya doğruysa onaylamak ileride karışıklığı önler ve zaman kazanmanıza yardımcı olur.

## Dokümantasyon sayfalarını çevirme

* Click the name of the docs page you want to translate
    
    ![Click docs page](./images/translation_WikiPage.png)

* Translate sentences by sentence
    
    1 Çevrilmemiş metin sol tarafta kırmızı arka plan ile gösterilir.
    
    2 You can copy a proposal to the edit field by clicking on the proposal.
    
    3 Edit the proposal or write the translation yourself.
    
    4 Kaydet'e tıklayın
    
    ![Translation docs](./images/translation_WikiTranslate.png)

* A translated page will not be published in docs before the translation is proofread.

### Başlık bağlantılarını çevir

* Dahili bir bağlantı yalnızca belirli bir sayfaya yönlendirdiğinde (yani ../Usage/Profiles.html) çeviri gerekli değildir.
* Internal links to a certain headline (i.e. ..//Usage/Profiles.html#percentage) must be translated as the headline in the other language is different from the English original.
* If you translate a headline you can transform this into the anchor link (part after # - i.e. #percentage) by turning all letters to lower case, transforming special characters to standard characters, replacing spaces by - (minus sign) and skipping punctuation marks.
    
    Here are some examples:
    
    * Was ist ein Closed Loop System mit AndroidAPS? \---> #was-ist-ein-closed-loop-system-mit-androidaps
    * Docs Updates & Änderungen \---> #docs-updates-anderungen
    * AAPS-.apk Datei \---> #aaps-apk-datei

* Check your link if it is working as intended. If it is linking to a new translated headline you may have to wait until next build to be able to check correct link syntax. In this case do not forget to make a reminder in your calendar / todo app.

#### Link translation in Markdown files (.md)

At the moment two [markup languages](./make-a-PR#code-syntax) are used in docs. Whereas files written in reStructuredText syntax (.rst) always show link address in Crowdin, for files in Markdown syntax (.md) you might have to activate HTML tag displaying in order to translate the link address.

* * *

**Make sure not to use space character at within HTML tags at the beginning or the end!**

![Crodwin - HTML tag without space character](./images/Crowdin_HTMLtag.png)

* * *

If links are displayed like this in Crowdin

![Crowdin - no HTML tag display](./images/CrowdinShowURL1.png)

click on the cogwheel to open settings, select "Show" and click "Save".

![Crowdin - show HTML tag display](./images/CrowdinShowURL2.png)

Links will then be shown in standard HTML format and can be translated considering the rules mentioned [above](./translations#translate-headline-links).

![Crowdin - HTML tag display](./images/CrowdinShowURL3.png)

## Redaksiyon

* Redaktörler redaksiyon moduna geçerek
    
    ![Proofreading mode docs](./images/translation_WikiProofreading.png)
    
    çevrilmiş metinleri onaylayabilirler
    
    ![approve text](./images/translations-proofreading.png)

* Redaktör bir çeviriyi onayladığında, sonraki doküman derlemesine eklenecektir. Süreci hızlandırmak için dokümantasyon ekibini yeni çeviriler hakkında bilgilendirebilirsiniz.