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

* Çevirmek istediğiniz doküman sayfasının adını tıklayın
    
    ![Click docs page](./images/translation_WikiPage.png)

* Cümle cümle çevirin
    
    1 Çevrilmemiş metin sol tarafta kırmızı arka plan ile gösterilir.
    
    2 Altta çeviri tekliflerini tıklayarak düzenleme alanına bir teklif kopyalayabilirsiniz.
    
    3 Teklifi düzenleyin veya çeviriyi kendiniz yazın.
    
    4 Kaydet'e tıklayın
    
    ![Translation docs](./images/translation_WikiTranslate.png)

* Çevrilmiş bir sayfa, redaksiyondan önce dokümantasyonda yayınlanmayacaktır.

### Başlık bağlantılarını çevir

* Dahili bir bağlantı yalnızca belirli bir sayfaya yönlendirdiğinde (yani ../Usage/Profiles.html) çeviri gerekli değildir.
* Belirli bir başlığa (ör. ..//Usage/Profiles.html#percentage) verilen dahili bağlantılar, diğer dildeki başlık İngilizce olduğu için çevrilmelidir.
* Bir başlığı çevirecekseniz, (# işaretinden sonraki kısım, ör. #percentage) tüm harfleri küçük harfe çevirerek, özel karakterleri standart karakterlere dönüştürerek, boşlukları - (eksi işareti) ile değiştirerek ve noktalama işaretlerini atlayarak bunu bir bağlantı metnine dönüştürebilirsiniz.
    
    İşte bazı örnekler:
    
    * Kapalı Döngü Sistemi AndroidAPS ile uyumlu muydu? \---> #androidaps-ile-kapali-döngü-sistemi-nedir
    * Doküman Güncellemeleri & değişiklikler \---> #doküman-güncellemeleri-değişiklikler
    * AAPS-.apk tarih \---> #aaps-apk-tarih

* Bağlantınızın istendiği gibi çalışıp çalışmadığını kontrol edin. Yeni çevrilmiş bir başlığa bağlantı veriyorsa, doğru bağlantı sözdizimini kontrol edebilmek için bir sonraki derlemeye kadar beklemeniz gerekebilir. Bu durumda takvim / yapılacaklar uygulamanızda bir hatırlatma yapmayı unutmayın.

#### Markdown dosyalarında (.md) bağlantı çevirisi

Şu anda dokümanlarda iki [işaretleme dili](./make-a-PR#code-syntax) kullanılmaktadır. Whereas files written in reStructuredText syntax (.rst) always show link address in Crowdin, for files in Markdown syntax (.md) you might have to activate HTML tag displaying in order to translate the link address.

* * *

**Make sure not to use space character at within HTML tags at the beginning or the end!**

![Crodwin - HTML tag without space character](./images/Crowdin_HTMLtag.png)

* * *

Crowdin'de bağlantılar bu şekilde görüntüleniyorsa

![Crowdin - no HTML tag display](./images/CrowdinShowURL1.png)

ayarları açmak için dişli çarka tıklayın, "Göster"i seçin ve "Kaydet"e tıklayın.

![Crowdin - show HTML tag display](./images/CrowdinShowURL2.png)

Bağlantılar daha sonra standart HTML biçiminde gösterilir ve [yukarıda](./translations#translate-headline-links) belirtilen kurallar dikkate alınarak çevrilebilir.

![Crowdin - HTML tag display](./images/CrowdinShowURL3.png)

## Redaksiyon

* Redaktörler redaksiyon moduna geçerek
    
    ![Proofreading mode docs](./images/translation_WikiProofreading.png)
    
    çevrilmiş metinleri onaylayabilirler
    
    ![approve text](./images/translations-proofreading.png)

* Redaktör bir çeviriyi onayladığında, sonraki doküman derlemesine eklenecektir. Süreci hızlandırmak için dokümantasyon ekibini yeni çeviriler hakkında bilgilendirebilirsiniz.