=====================================================
 AndroidAPS Omnipod İnsülin Pompası Sürücü Dokümantasyonu
=====================================================

Bu talimatlar, Omnipod Eros nesil pompayı yapılandırmak içindir (**Omnipod Dash** DEĞİL). Omnipod sürücüsü, 2.8 sürümünden itibaren AndroidAPS'nin (AAPS) bir eklentisi olarak mevcuttur.

**Bu yazılım bir DIY (Kendin Yap) yapay pankreas çözümünün bir parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

.. içerik:: 
   :backlinks: giriş
   :depth: 2

Donanım ve Yazılım Gereksinimleri
==================================

*  **Pod İletişim Cihazı** 

  AndroidAPS Omnipod Eros sekmesi üzerinden yapılandırıp etkinleştirdiğiniz, telefonunuz ile Eros podları arasında iletişimi sağlayan cihaz.

   -  |OrangeLink|  `OrangeLink Websitesi <https://getrileylink.org/product/orangelink>`_    
   -  |RileyLink| `433MHz RileyLink <https://getrileylink.org/product/rileylink433>`__
   -  |EmaLink|  `Emalink Websitesi <https://github.com/sks01/EmaLink>`__ - `Contact Info <mailto:getemalink@gmail.com>`__
   -  |DiaLink|  DiaLink - `İletişim Bilgileri <mailto:Boshetyn@ukr.net>`__     
   -  |LoopLink|  `LoopLink Websitesi <https://www.getlooplink.org/>`__ - `Contact Info <https://jameswedding.substack.com/>`__ - Test edilmedi

*  |Android_Phone|  **Cep Telefonu** 

  AndroidAPS'yi çalıştıracak ve Pod iletişim cihazına kontrol komutları gönderecek eklenti.

      + Desteklenen 'Omnipod sürücüsü Android telefon <https://docs.google.com/spreadsheets/d/1eNtXAWwrdVtDvsvXaR_72wgT9ICjZPNEBq8DbitCv_4/edit>'__, AAPS 2.8 sürümü ile ve ilgili 'bileşen kurulumu <../index.html#component-setup>'__

* |Omnipod_Pod| **İnsülin İletim Cihazı** 

  AndroidAPS kurulu telefonunuz tarafından Pod iletişim cihazına gönderilen komutları yorumlayacak bileşen.

      + Yeni bir Omnipod podu (Eros  - **DASH DEĞİL**)

Bu talimatlar, yeni bir pod oturumu başlattığınızı varsayar; durum böyle değilse, lütfen sabırlı olun ve bir sonraki pod değişikliğinizde bu işlemle başlamaya çalışın.

Başlamadan önce
================

**ÖNCE GÜVENLİK** - bu işlemi bir hatadan kurtaramayacağınız bir ortamda denemeyin (ekstra pod, insülin, şarj edilmiş RileyLink ve telefon cihazları olmazsa olmazlardır).

**Omnipod PDM'niz, AAPS Omnipod sürücüsü podunuzu etkinleştirdikten sonra artık çalışmayacaktır**. Önceden Omnipod Eros Podunuz'a komutlar göndermek için Omnipod PDM'nizi kullanıyordunuz. Bir Omnipod Eros podu, yalnızca tek bir cihazın kendisine iletişim göndermesine izin verir. Podu başarıyla etkinleştiren cihaz, o andan itibaren onunla iletişim kurmasına izin verilen tek cihazdır. Bu AAPS Omnipod sürücüsü aracılığıyla RileyLink'inizle bir Omnipod Eros podunu etkinleştirdiğinizde, ** artık PDM'niz ile podunuzu kullanamayacağınız anlamına gelir**. RileyLink'li AAPS Omnipod sürücüsü artık bir nevi yeni PDM'niz olur. *Bu, PDM'nizi çöpe atmanız gerektiği anlamına GELMEZ, yedek olarak saklamanız şiddetle önerilir ve AAPS düzgün çalışmadığı acil durumlar için gereklidir.*

**Birden çok RileyLink yapılandırabilirsiniz, ancak bir seferde yalnızca bir seçili RileyLink bir podla iletişim kurabilir.** AAPS Omnipod sürücüsü, RileyLink yapılandırmasına birden çok RileyLink ekleme özelliğini destekler, ancak iletişim göndermek ve almak için kullanılmak üzere bir seferde yalnızca bir RileyLink seçilebilir.

**RileyLink kapsama alanı dışındayken podunuz kapanmaz.** RileyLink'iniz kapsama alanı dışında olduğunda veya sinyalin aktif podunuz ile iletişim kurması engellendiğinde, podunuz bazal insülin iletmeye devam edecektir. Bir podu etkinleştirdikten sonra, AAPS'de tanımlanan bazal profil yeni poda programlanacaktır. Pod ile teması kaybederseniz, bu bazal profile geri dönecektir. RileyLink menzile girip bağlantıyı yeniden kurana kadar yeni komutlar veremezsiniz.

**30 dakikalık Bazal Oran Profilleri AndroidAPS'de DESTEKLENMEZ.** AndroidAPS'de yeniyseniz ve bazal oran profilinizi ilk kez oluşturuyorsanız, lütfen saatlik bazal oran profilinizi ayarlayın ve yarım saatlik bazal oranların desteklenmediğini unutmayın. Örneğin, 09:30'da başlayan ve 11:30'da biten 2 saatlik bir süresi olan 1,1 ünitelik bir bazal oranınız varsa, bu çalışmayacaktır.  Bu 1,1 ünite bazal oranını 9:00-11:00 veya 10:00-12:00 zaman aralığına güncellemeniz gerekecektir.  30 dakikalık bazal oran profili artışları Omnipod donanımının kendisi tarafından desteklense de, AndroidAPS şu anda algoritmaları ile bunları hesaba katamamaktadır.

AAPS'de Omnipod Sürücüsünü Etkinleştirme
===================================

Omnipod sürücüsünü AAPS'de **iki şekilde** etkinleştirebilirsiniz:

Seçenek 1: Kurulum Sihirbazı
--------------------------

AndroidAPS'nin yeni bir sürümünü yükledikten sonra **Kurulum Sihirbazı** otomatik olarak başlayacaktır.  Bu aynı zamanda sürüm yükseltme sırasında da ortaya çıkacaktır.  Ayarlarınızı önceki bir kurulumdan kaydettiyseniz (dışarı aktarma), Kurulum Sihirbazından çıkıp eski ayarlarınızı içeri aktarabilirsiniz.  Yeni kurulumlar için aşağıdan ilerleyin.

Sağ üst köşede bulunan **AAPS Kurulum Sihirbazı (2)** aracılığıyla **üç nokta menü (1)** ve **Pompa** ekranına gelene kadar sihirbaz menülerinde ilerleyin. Ardından **Omnipod radyo düğmesini (3)** seçin.

    |Enable_Omnipod_Driver_1|  |Enable_Omnipod_Driver_2|

Aynı ekranda, pompa seçiminin altında, **Omnipod Sürücü Ayarları** görüntülenir, **RileyLink Konfigürasyonu** altında **Ayarlanmadı** metnine basarak RileyLink cihazınızı ekleyin. 

**RileyLink Seçimi** ekranında **Tara** düğmesine basın ve mevcut tüm Bluetooth cihazlarını tarayarak ve listeden RileyLink cihazınızı bulup seçin. Doğru seçildiğinde, seçtiğiniz RileyLink ve mac adresinin de bulunduğu Omnipod sürücü ayarlarının görüntülendiği pompa sürücüsü seçim ekranına dönersiniz. 

**Kurulum Sihirbazının** geri kalanına devam etmek için **İleri** düğmesine basın. Seçilen RileyLink'in başlatılması ve **İleri** düğmesinin etkin hale gelmesi bir dakika kadar sürebilir.

Pod iletişim cihazınızın nasıl kurulacağına ilişkin ayrıntılı adımlar aşağıda `RileyLink Kurulum Bölümü <#rileylink-setup>`__ içinde listelenmiştir.

**VEYA**

Seçenek 2: Konfigürasyon ayarları
----------------------------

Sol üst köşedeki **hamburger menüsü** aracılığıyla **Konfigürasyon ayarları(1)** ➜\ **Pompa**\ ➜\ **Omnipod** altında **Omnipod** başlıklı **radyo düğmesini (2)** seçerek. **Ayarlar Dişlisi (3)** yanındaki **onay kutusunun (4)** seçilmesi, Omnipod menüsünün **OMNIPOD** veya **POD** başlıklı AAPS arayüzünde bir sekme olarak görüntülenmesini sağlar. Bu, bu belgede **Omnipod (POD)** sekmesi olarak anılır.

    **NOT:** **Omnipod ayarlarına** erişmenin daha hızlı bir yolu, aşağıda bu belgenin `Omnipod Ayarları <#omnipod-settings>`__ bölümünde bulunabilir.

    |Enable_Omnipod_Driver_3| |Enable_Omnipod_Driver_4|

Omnipod Sürücü Seçiminin Doğrulanması
----------------------------------------

*Not: Kurulum Sihirbazından RileyLink'inizi seçmeden erken çıktıysanız, Omnipod Sürücüsü etkinleştirilir ancak yine de RileyLink'inizi seçmeniz gerekir.  Omnipod (POD) sekmesi aşağıdaki gibi görünecektir*

AAPS'de Omnipod sürücüsünü etkinleştirdiğinizi doğrulamak için **Giriş** sekmesinden sola kaydırın**, burada artık bir **Omnipod** veya **POD** sekmesi göreceksiniz.

Enable_Omnipod_Driver_5

Omnipod Kanfigürasyonu
======================

Lütfen tüm pod ve RileyLink işlevlerini yönetebileceğiniz **Omnipod (POD)** sekmesine **sola kaydırın** (bu işlevlerden bazıları etkin bir pod oturumu olmadan etkinleştirilmez veya görünmez):

    |refresh_pod_status| Pod bağlantısını ve durumunu yenileyin

    |pod_management| Pod Yönetimi (Etkinleştir, Devre Dışı Bırak, Test bip sesini çal, RileyLink İstatistikleri ve Pod geçmişi)

RileyLink Kurulumu
---------------

RileyLink'inizi Kurulum Sihirbazında veya yukarıdaki adımlarda zaten başarılı bir şekilde eşleştirdiyseniz, aşağıdaki `Bir Pod Bölümünü Etkinleştirme <#activating-a-pod>`__ bölümüne ilerleyin.

*Not: RileyLink'in bağlı olmadığının göstergesi, GİRİŞ sekmesindeki İnsülin ve Hesap Makinesi düğmelerinin eksik olmasıdır. Bu, RileyLink'e aktif olarak bağlanıp, AAPS başladıktan sonraki ilk 30 saniye boyunca da böyle olacaktır.*

1. RileyLink'inizin tam olarak şarj edildiğinden ve açık olduğundan emin olun.

2. Omnipod sürücüsünü seçtikten sonra, **Konfigürasyon ayarları (1)** arasından RileyLink'inizi belirleyin ve seçin ➜\ **Pompa**\ ➜\ **Omnipod**\ ➜\ **Dişli Simgesi (Ayarlar) (2)* * ➜\ **RileyLink Yapılandırması (3)**, **Ayarlanmadı** veya **MAC Adresi (varsa)** metnine basarak.   

    RileyLink pilinizin şarjlı olduğundan ve AAPS'nin MAC adresiyle tanıyabilmesi için telefonunuzun `` <#optimal-omnipod-and-rileylink-positioning>`__ (~30 cm veya daha az) yakınına yerleştirildiğinden emin olun. Seçildikten sonra, ilk pod oturumunuzu etkinleştirmek için ilerleyebilirsiniz. Ana AAPS arayüzüne dönmek için telefonunuzdaki geri düğmesini kullanın.

    |RileyLink_Setup_1| |RileyLink_Setup_2|

3. **RileyLink Seçimi** ekranında bir bluetooth taraması başlatmak için **Tara (4)** düğmesine basın. **Mevcut Bluetooth cihazları listesinden RileyLink'inizi (5)** seçin.

    |RileyLink_Setup_3| |RileyLink_Setup_4|

4. Başarılı bir seçimden sonra, **şu anda seçili RileyLink\'in MAC Adresini (6) listeleyen Omnipod Ayarları sayfasına dönersiniz.** 

    |RileyLink_Setup_5|

5. **Omnipod (POD)** sekmesinde **RileyLink Durumu (1)**'nin **Bağlı olarak göründüğünü doğrulayın.** **Pod durumu (2)** alanında **Etkin Pod yok **; değilse, lütfen önceki adımı deneyin veya bunun bağlantıyı yenileyip yenilemediğini görmek için AAPS'den çıkın.

    |RileyLink_Setup_6|

Pod Etkinleştirme
----------------

Bir podu etkinleştirmeden önce lütfen Omnipod ayarlarında RileyLink bağlantınızı doğru şekilde yapılandırdığınızdan ve bağlandığınızdan emin olun

*HATIRLATICI: Güvenlik önlemleri nedeniyle pod aktivasyonu eşleştirmesi için pod iletişimi sınırlı mesafede gerçekleşir. Eşleştirmeden önce Pod'un radyo sinyali daha zayıftır, ancak eşleştirildikten sonra tam sinyal gücünde çalışacaktır. Bu prosedürler sırasında, podunuz* `<#optimal-omnipod-and-rileylink-positioning>`__ (~30 cm veya daha az) yakınında olduğundan, ama RileyLink'in üzerinde veya hemen yanında olmadığından emin olun.*

1. **Omnipod (POD)** sekmesine gidin ve **POD YNTM (1)** düğmesini ve ardından **Podu Etkinleştir (2)**'yi tıklayın.

    |Activate_Pod_1| |Activate_Pod_2|

2. **Podu Doldur** ekranı görüntülenir. Yeni bir podu en az 80 birim insülinle doldurun ve podun kullanıma hazır olduğunu belirten iki bip sesini dinleyin. 3 gün boyunca ihtiyacınız olan toplam insülin miktarını hesaplarken, pod hazırlamanın ilave12 ile 15 ünite kullanacağını lütfen göz önünde bulundurun. 

    |Activate_Pod_3|

    Yeni pod ve RileyLink'in birbirine yakın (~30 cm veya daha az) olduğundan emin olun ve **İleri** düğmesini tıklayın.

3. **Pod Başlat** ekranında, podu doldurmaya başlar (pod kendini hazırlarken bir tıklama ve ardından bir dizi tıklama sesi duyarsınız). RileyLink etkinleştirilmekte olan podun kapsama alanı dışındaysa, bir hata mesajı alırsınız **Pod'dan yanıt yok**. Bu olursa, `RileyLink'i <#optimal-omnipod-and-rileylink-positioning>`__ (~30 cm veya daha yakına) yaklaştırın, ancak podun üstüne veya çok yakınına değil **Yeniden Dene (1)** düğmesine basın.

    |Activate_Pod_4| |Activate_Pod_5|

4. Başarılı kullanıma hazırlamanın ardından yeşil bir onay işareti gösterilecek ve **İleri** düğmesi etkinleştirilecektir. Pod hazırlama başlatma işlemini tamamlamak için **İleri** düğmesine tıklayın ve **Podu Ekle** ekranını görüntüleyin.

    |Activate_Pod_6|

5. Ardından, yeni podun infüzyon bölgesini hazırlayın. Podun plastik iğne kapağını ve beyaz kağıt desteğini yapışkandan çıkarın ve Pod'u vücudunuzda genellikle seçtiğiniz bölgeye uygulayın. Bittiğinde, **İleri** düğmesini tıklayın.

    |Activate_Pod_7|

6. **Pod Ekle** iletişim kutusu şimdi görünecektir. **YALNIZCA kanülü yerleştirmeye hazırsanız Tamam düğmesini tıklayın**.

    |Activate_Pod_8|

7. **Tamam**'a bastıktan sonra, Omnipod'un yanıt vermesi ve kanülü (en fazla 1-2 dakika) yerleştirmesi biraz zaman alabilir, bu yüzden sabırlı olun.

    RileyLink etkinleştirilmekte olan podun kapsama alanı dışındaysa, bir hata mesajı alırsınız **Pod'dan yanıt yok**. Bu meydana gelirse, RileyLink'i Pod'un üstüne veya hemen yanına değil ama yanına yaklaştırın (~30 cm veya daha az) ve **Yeniden Dene** düğmesini tıklayın.

    RileyLink Bluetooth kapsama alanı dışındaysa veya telefonla aktif bir bağlantısı yoksa, bir hata mesajı alırsınız **RileyLink'ten yanıt yok**. Bu olursa, RileyLink'i telefona yaklaştırın ve **Yeniden Dene** düğmesini tıklayın.

    *NOT: Kanül takılmadan önce cildi kanül yerleştirme noktasının yakınında sıkıştırmak iyi bir uygulamadır. Bu iğnenin düzgün bir şekilde yerleştirilmesini sağlar ve tıkanıklık oluşturma şansınızı azaltır.*

    |Activate_Pod_9|

    |Activate_Pod_10| |Activate_Pod_11|

8. Yeşil bir onay işareti görünür ve başarılı bir kanül yerleştirilmesinden sonra **İleri** düğmesi etkinleştirilir. **İleri** düğmesine tıklayın.

    |Activate_Pod_12|

9. **Pod etkinleştirildi** ekranı görüntülenir. Yeşil **Bitti** düğmesine tıklayın. Tebrikler! Artık yeni bir aktif pod oturumu başlattınız.

    |Activate_Pod_13|

10. **Pod yönetimi** menü ekranı şimdi **Podu Etkinleştir (1)** düğmesi *devre dışı* ve **Podu Devre Dışı Bırak (2)** düğmesi *etkin* olarak görüntülenmelidir. Bunun nedeni, bir podun artık etkin olması ve o anda etkin olan podu devre dışı bırakmadan ek bir pod etkinleştirememenizdendir.

    **Omnipod (POD)** sekme ekranına dönmek için telefonunuzdaki geri düğmesini tıklayın; bu ekran artık aktif pod oturumunuz için geçerli bazal oran, pod rezervuar seviyesi, iletilen insülin, pod hataları ve uyarılar dahil Pod bilgilerini görüntüleyecektir.

    Görüntülenen bilgiler hakkında daha fazla ayrıntı için bu belgenin `Omnipod (POD) Sekmesi <#omnipod-pod-tab>`__ bölümüne gidin.

    |Activate_Pod_14| |Activate_Pod_15|

Pod'u Devre Dışı Bırakma
------------------

Normal şartlar altında toplam 80 saatlik pod kullanımı için, üç günlük (72 saat) pod kullanım ömrüne ilaveten, sona erme uyarısından sonra 8 saat daha çalışmalıdır.

Bir Podu devre dışı bırakmak (süre sonundan veya bir pod hatasından dolayı):

1. **Omnipod (POD)** sekmesine gidin, **POD YNTM (1)** düğmesine tıklayın, **Pod yönetimi** ekranında **Pod'u Devre Dışı Bırak (2)** düğmesine tıklayın.

    |Deactivate_Pod_1| |Deactivate_Pod_2|

2. **Podu Devre Dışı Bırak** ekranında, önce RileyLink'in poda yakın olduğundan, ama podun üstünde veya hemen yanında olmadığından emin olun, ardından işlemi başlatmak için **İleri** düğmesini tıklayarak podu devre dışı bırakın.

    |Deactivate_Pod_3|

3. **Pod Devre Dışı Bırakılıyor** ekranı görünecek ve podun devre dışı bırakmanın başarılı olduğuna dair bir onay bip sesi alacaksınız.

    |Deactivate_Pod_4|

    **EĞER devre dışı bırakma başarısız olursa** ve bir onay bip sesi almazsanız, **RileyLink'ten yanıt yok** veya **Pod mesajından yanıt yok** alabilirsiniz. Devre dışı bırakmayı tekrar denemek için lütfen **Yeniden Dene (1)** düğmesini tıklayın. Devre dışı bırakma işlemi başarısız olmaya devam ederse, lütfen **Pod'u At (2)** düğmesini tıklayarak Pod'u iptal edin. Etkin oturum devre dışı bırakıldığı için artık podunuzu kaldırabilirsiniz. Pod'unuzda çığlık atan bir alarm varsa, **Pod'u Sil (2)** düğmesi onu susturmayacağından (bir iğne veya ataş kullanarak) manuel olarak susturmanız gerekebilir.
	
	|Deactivate_Pod_5| |Deactivate_Pod_6|

4. Başarılı bir şekilde devre dışı bırakmanın ardından yeşil bir onay işareti görünecektir. Pod devre dışı ekranını görüntülemek için **İleri** düğmesine tıklayın. Etkin oturum devre dışı bırakıldığı için artık podunuzu kaldırabilirsiniz.

    |Deactivate_Pod_7|

5. **Pod yönetimi** ekranına dönmek için yeşil düğmeye tıklayın.

    |Deactivate_Pod_8|

6. Artık **Pod yönetimi** menüsüne döndünüz, **Omnipod (POD)** sekmesine dönmek için telefonunuzdaki geri düğmesine basın. **RileyLink Durumu:** alanının **Bağlandı** rapor ettiğini ve **Pod durumu:** alanının **Etkin pod yok** mesajı gösterdiğini doğrulayın.

    |Deactivate_Pod_9| |Deactivate_Pod_10|

İnsülin İletimini Askıya Alma ve Devam Ettirme
----------------------------------------

Aşağıdaki süreç, insülin pompası iletimini nasıl askıya alacağınızı ve devam ettireceğinizi gösterecektir.

*NOT - bir ASKIYA AL düğmesi* görmüyorsanız, Omnipod (POD) sekmesinde görüntülenmesi etkinleştirilmemiştir. **Diğerleri** altındaki `Omnipod ayarları <#omnipod-settings>`__ içindeki **Omnipod sekmesinde **Teslimatı Askıya Al düğmesini göster** ayarını etkinleştirin.

İnsülin İletimini Askıya Alma Durdurma
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Etkin podu askıya alınmış duruma getirmek için bu komutu kullanın. Bu askıya alınmış durumda, pod artık herhangi bir insülin iletmeyecektir. Bu komut orijinal Omnipod PDM'nin etkin bir poda verdiği askıya alma işlevini taklit eder.

1. **Omnipod (POD)** sekmesine gidin ve **ASKIYA AL (1)** düğmesini tıklayın. Askıya alma komutu, RileyLink'ten aktif poda gönderilir ve **ASKIYA AL (3)** düğmesi grileşir. **Pod durumu (2)**, **İLETİMİ ASKIYA AL**'ı görüntüler.

    |Suspend_Insulin_Delivery_1| |Suspend_Insulin_Delivery_2|

2. Askıya alma komutu RileyLink tarafından başarıyla onaylandığında, bir onay iletişim kutusu **Tüm insülin iletimi askıya alındı** mesajını görüntüler. Onaylamak ve devam etmek için **Tamam**'a tıklayın.

    |Suspend_Insulin_Delivery_3|

3. Aktif Pod'unuz şimdi tüm insülin iletimini askıya aldı. **Omnipod (POD)** sekmesi, **Pod durumunu (1)** **Askıya alındı** olarak güncelleyecektir. **ASKIYA AL** düğmesi yeni bir **Teslimatı Sürdür (2)** düğmesine dönüşecektir

    |Suspend_Insulin_Delivery_4|

İnsülin İletimini Sürdür
~~~~~~~~~~~~~~~~~~~~~~~~~

Aktif şu anda askıya alınmış Pod'unuzun insülin iletimini yeniden başlatma talimatı vermek için bu komutu kullanın. Komut başarıyla işlendikten sonra insülin, aktif bazal profilden geçerli zamana dayalı olarak mevcut bazal oranı kullanarak normal iletimi sürdürecektir. Pod bolus, GBO ve SMB için komutları tekrar kabul edecektir.

1. **Omnipod (POD)** sekmesine gidin ve **Pod durumu (1)** alanında **Askıya alındı** görüntülendiğinden emin olun, ardından mevcut pod'unuzun normal insülin iletimini sürdürme talimatı verme sürecini başlatmak için **İletimi Sürdür (2)** düğmesine basın. **Pod durumu (3)** alanında **DEVAM TESLİMİ** mesajı görüntülenerek, RileyLink'in aktif olarak askıya alınmış pod'unuza komut gönderdiğini gösterir.

    |Resume_Insulin_Delivery_1| |Resume_Insulin_Delivery_2|

2. İletimi sürdür komutu RileyLink tarafından başarıyla onaylandığında, bir onay iletişim kutusu **İnsülin iletimi devam ettirildi** mesajını görüntüler. Onaylamak ve devam etmek için **Tamam**'a tıklayın.

    |Resume_Insulin_Delivery_3|

3. **Omnipod (POD)** sekmesi, **Pod durumu (1)** alanını **ÇALIŞIYOR** olarak gösterecek şekilde güncelleyecek ve **Teslimatı Sürdür** düğmesi şimdi **ASKIYA AL (2)** gösterecektir.

    |Resume_Insulin_Delivery_4|

Pod Uyarılarını Onaylamak
------------------------

*NOT - bir BİLGİ UYARILARI düğmesi görmüyorsanız, bunun nedeni SADECE pod sona erme veya düşük rezervuar uyarısı tetiklendiğinde Omnipod (POD) sekmesinde koşullu olarak görüntülenmesidir.*

Aşağıdaki süreç, etkin pod süresi 72 saatlik (3 gün) pod sona ermeden önce uyarı süresi sınırına ulaştığında meydana gelen pod bip seslerini nasıl onaylayacağınızı ve kapatacağınızı göstermektedir. Bu uyarının zaman sınırı, **Kapanmadan önceki saatler** Omnipod uyarıları ayarında tanımlanmıştır. Bir pod'un maksimum ömrü 80 saattir (3 gün 8 saat), ancak Insulet 72 saat (3 gün) sınırının aşılmamasını önermektedir.

*NOT - Omnipod Uyarılarında "Pod uyarılarını otomatik olarak onayla" ayarını etkinleştirdiyseniz, bu uyarı ilk kez meydana geldikten sonra otomatik olarak işlenir ve uyarıyı manuel olarak kapatmanız GEREKMEZ.*

1. Tanımlanan **Kapanmadan önceki saatler** uyarı süresi sınırına ulaşıldığında, pod sona erme süresinin yaklaştığını size bildirmek için uyarı bip sesleri çıkaracak ve yakında bir pod değişikliği gerekecektir. Bunu **Omnipod (POD)** sekmesinde doğrulayabilirsiniz, **Pod'un süresi doluyor: (1)** alanı, pod süresinin tam olarak ne zaman biteceğini (etkinleştirmeden 72 saat sonra) gösterecek ve metin ** kırmızıya** dönecektir. Bu süre geçtikten sonra, **Aktif Pod uyarıları (2)** alanının altında, **Pod'un süresi yakında dolacak** durum mesajının görüntülenecektir. Bu tetikleyici **BİLGİ UYARILARI (3)** düğmesini görüntüler. Bir **sistem bildirimi (4)** ayrıca size yaklaşan pod sona erme tarihi hakkında bilgi verecektir

    |Acknowledge_Alerts_1| |Acknowledge_Alerts_2|

2. **Omnipod (POD)** sekmesine gidin ve **BİLGİ UYARILARI (2)** düğmesine basın (uyarıları onaylayın). RileyLink, pod sona erme uyarı bip seslerini devre dışı bırakmak için pod'a komut gönderir ve **Pod durumu (1)** alanını **BİLGİLENDİRME UYARILARI** ile günceller.

    |Acknowledge_Alerts_3|

3. Uyarıların **başarılı bir şekilde devre dışı bırakılması** üzerine, aktif pod tarafından **2 bip** verilir ve bir onay iletişim kutusu **Uyarıları etkinleştir onaylandı** mesajını görüntüler. İletişim kutusunu onaylamak ve kapatmak için **Tamam** düğmesini tıklayın.

    |Acknowledge_Alerts_4|

    RileyLink, onay uyarıları komutu işlenirken pod'un menzili dışındaysa, bir uyarı mesajı 2 seçenek görüntüleyecektir. **Sessiz (1)** bu geçerli uyarıyı susturur. **Tamam (2)** bu uyarıyı onaylayacak ve kullanıcının uyarıları tekrar kabul etmeyi denemesine izin verecektir.

    |Acknowledge_Alerts_5|

4. **Omnipod (POD)** ana sekmesine gidin, **Aktif Pod uyarıları** alanı altında, uyarı mesajı artık görüntülenmez ve aktif pod artık pod sona erme uyarı bip sesleri vermez.

Pod Geçmişini Görüntüle
----------------

Bu bölüm, aktif pod geçmişinizi nasıl gözden geçireceğinizi ve farklı eylem kategorilerine göre nasıl filtreleyeceğinizi gösterir. Pod geçmişi aracı, üç günlük (72 - 80 saat) ömrü boyunca şu anda etkin olan pod'unuza yönelik eylemleri ve sonuçları görüntülemenize olanak tanır.

Bu özellik ile verilen bolusları, GBO'larını, bazal değişiklikleri doğrulamak için kullanışlıdır ancak tamamlandıklarından emin olamayabilirsiniz. Kalan kategoriler, genel olarak sorunları gidermek ve bir arızaya yol açan olayların sırasını belirlemek için kullanışlıdır.

*NOT:*
**Belirsiz** komutlar pod geçmişinde görünecektir, ancak yapıları gereği doğruluğunu garanti edemezsiniz.

1. **Omnipod (POD**) sekmesine gidin ve **Pod yönetimi** menüsüne erişmek için **POD YNTM (1)** düğmesine basın ve ardından **Pod geçmişi (2)** düğmesine basın. Pod geçmişi ekranına erişin.

    |Pod_History_1| |Pod_History_2|

2. **Pod geçmişi** ekranında, tüm podların **Tarih ve Saatini (2)** gösteren varsayılan **Tümü (1)** kategorisi görüntülenir **Eylemler (3)** ve ** Sonuçlar (4)** ters kronolojik sıradadır. Ana AAPS arayüzündeki **Omnipod (POD)** sekmesine dönmek için telefonunuzun **geri düğmesini 2 kez** kullanın.

    |Pod_History_3| |Pod_History_4|

RileyLink Ayarlarını ve Geçmişini Görüntüle
-----------------------------------

Bu bölüm, aktif pod ve RileyLink ayarlarının yanı sıra her birinin iletişim geçmişinin nasıl gözden geçirileceğini gösterir. Bu özellik, bir kez erişildiğinde iki bölüme ayrılır: **Ayarlar** ve **Geçmiş**.

Bu özelliğin birincil kullanımı, pod iletişim cihazınızın bir süre sonra telefonunuzun Bluetooth kapsama alanı dışında kalması ve **RileyLink durumunun** **RileyLink'e ulaşılamadığını** bildirmesidir. **Omnipod (POD)** ana sekmesindeki **REFRESH** düğmesi, Omnipod ayarlarında halihazırda yapılandırılmış RileyLink ile Bluetooth iletişimini manuel olarak yeniden kurmaya çalışır.

**Omnipod (POD)** ana sekmesindeki **YENİLE** düğmesinin pod iletişim cihazına olan bağlantıyı geri yüklememesi durumunda, manuel yeniden bağlantı için lütfen aşağıdaki ek adımları izleyin.

Pod İletişim Bluetooth İletişim Aygıtını Manuel Olarak Yeniden-kurun
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Omnipod (POD)** sekmesinden **RileyLink Durumu: (1)** **RileyLink'e ulaşılamıyor** bildirdiğinde **Pod Yönetimi**'ne gitmek için **POD YNTM (2)** menü düğmesine basın. **Pod Yönetimi** menüsünde, aktif olarak bir RileyLink bağlantısı arayan bir bildirimin göründüğünü göreceksiniz, **RileyLink ayarları** ekranına erişmek için **RileyLink istatistikleri (3)** düğmesine basın.

    |RileyLink_Bluetooth_Reset_1| |RileyLink_Bluetooth_Reset_2|

2. **RileyLink (2)** bölümünün altındaki **RileyLink Ayarları (1)** ekranında, **Bağlantı Durumu ve Hata: (3)** alanlarında hem Bluetooth bağlantı durumunu hem de hatayı onaylayabilirsiniz. *Bluetooth hatası* ve *RileyLink'e ulaşılamıyor* durumu göstermelidir. Sağ alt köşedeki **yenile (4)** düğmesine basarak manuel Bluetooth yeniden bağlantısını başlatın.

    |RileyLink_Bluetooth_Reset_3|
    
    Bluetooth yenileme komutu işlenirken pod iletişim cihazı yanıt vermiyorsa veya telefonun kapsama alanı dışındaysa, 2 seçenekli bir uyarı mesajı görüntülenir.

   * **Sessiz (1)** bu geçerli uyarıyı susturur.
   * **Tamam (2)** bu uyarıyı onaylayacak ve kullanıcının Bluetooth bağlantısını yeniden kurmayı denemesine izin verecektir.
	
    |RileyLink_Bluetooth_Reset_4|	
	
3. **Bluetooth bağlantısı** yeniden kurulmazsa, telefonunuzdaki Bluetooth işlevini manuel olarak **kapatıp** tekrar **açmayı** deneyin.

4. Başarılı bir RileyLink Bluetooth yeniden bağlantısından sonra **Bağlantı Durumu: (1)** alanı **RileyLink hazır** olarak bildirmelidir. Tebrikler, artık yapılandırılmış pod iletişim cihazınızı (örn. RileyLink) AAPS'ye yeniden bağladınız!

    |RileyLink_Bluetooth_Reset_5|

Pod İletişim Cihazı (örn. RileyLink) ve Aktif Pod Ayarları
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Bu ekran, hem halihazırda yapılandırılmış pod iletişim cihazı hem de aktif olan Omnipod Eros pod için bilgi, durum ve ayar yapılandırma bilgilerini sağlayacaktır. 

1. ** Omnipod (POD) ** sekmesine gidin ve ** Pod yönetimi ** menüsüne erişmek için ** POD YNTM (1) ** düğmesine basın, ardından ** RileyLink istatistikleri (2) ** düğmesine basın. şu anda yapılandırılmış ** RileyLink (3) ** ve aktif pod ** Cihaz (4) ** ayarlarınızı görüntüleyin.

    |RileyLink_Statistics_Settings_1| |RileyLink_Statistics_Settings_2|

    |RileyLink_Statistics_Settings_3|
    
RileyLink (3) alanı
++++++++++++++++++++

	* **Adres:** Omnipod Ayarlarında tanımlanan seçili pod iletişim cihazının MAC adresi.
	* **İsim:** Telefonunuzun Bluetooth ayarlarında tanımlanan seçili pod iletişim cihazının Bluetooth tanımlama adı.
	* **Pil Seviyesi:** Bağlı pod iletişim cihazının mevcut pil seviyesini gösterir
	* **Bağlı Cihaz:** Şu anda pod iletişim cihazıyla iletişim kuran Omnipod pod modeli
	* **Bağlantı Durumu**: Pod iletişim cihazı ile AAPS çalıştıran telefon arasındaki Bluetooth bağlantısının mevcut durumu.
	* **Bağlantı Hatası:** Pod iletişim cihazı ile ilgili bir hata varsa Bluetooth bağlantı detayları burada görüntülenecektir.
	* **Pod yazılımı:** Aktif olarak bağlı pod iletişim cihazında kurulu mevcut yazılım sürümüdür.

Cihaz (4) alanı - Aktif Pod ile
++++++++++++++++++++++++++++++++++++++

	* **Cihaz Tipi:** Pod iletişim cihazı ile iletişim kuran cihazın tipi (Omnipod pod pompası)
	* **Cihaz Modeli:** Pod iletişim cihazına bağlı aktif cihazın modeli (Omnipod podunun mevcut model adı, yani Eros)
	* **Pompa Seri Numarası:** Şu anda etkinleştirilmiş olan bölmenin seri numarası
	* **Pompa Frekansı:** Pod iletişim cihazının ayarladığı iletişim radyo frekansı, kendisi ve pod arasındaki iletişimi etkinleştirmek için.
	* **Son Kullanılan frekans:** Pod'un, pod iletişim cihazıyla iletişim kurmak için kullandığı bilinen son radyo frekansı.
	* **Son Cihaz İletişimi:** Pod ile pod iletişim cihazı (örn. RilyLink) arasında yapılan son iletişimin tarihi ve saati.
	* **Yenile düğmesi** Bu sayfadaki ayarları manuel olarak yenileyin.

RileyLink ve Aktif Pod Geçmişi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Bu ekran RileyLink'in veya o anda bağlı olan pod içinde olduğu veya gerçekleştirdiği her durum veya eylemin ters kronolojik sırayla bilgi sağlar. Tüm geçmiş yalnızca o anda etkin olan pod için kullanılabilir, bir bölme değişikliğinden sonra bu geçmiş silinecek ve yalnızca yeni etkinleştirilen podun olayları kaydedilecek ve gösterilecektir.

1. **Omnipod (POD)** sekmesine gidin ve **Pod Yönetimi** menüsüne erişmek için **POD YNTM (1)** düğmesine basın, ardından **Pod Geçmişi (2)** düğmesine basın. **Ayarlar** ve **Geçmiş** ekranını görüntüleyin. RileyLink'in ve o anda aktif olan pod oturumunun tüm geçmişini görüntülemek için **GEÇMİŞ (3)** metnine tıklayın.

    |RileyLink_Statistics_History_1| |RileyLink_Statistics_History_2|

    |RileyLink_Statistics_History_3|
    
Alanlar
++++++
    
   * **Tarih ve Saat**: Her etkinliğin zaman damgası ters kronolojik sırayla.
   * **Aygıt:** Geçerli eylemin veya durumun atıfta bulunduğu cihaz.
   * **Durum veya Eylem:** Cihaz tarafından gerçekleştirilen mevcut durum veya eylem.

Omnipod (POD) Sekmesi
=================

Aşağıda, ana AAPS arayüzündeki **Omnipod (POD)** sekmesindeki simgelerin ve durum alanlarının düzeninin ve anlamının bir açıklaması bulunmaktadır.

*NOT: Omnipod (POD) sekmesi durum alanlarındaki herhangi bir mesaj raporlanırsa (belirsiz), o zaman bunu temizlemek ve bölme durumunu yenilemek için Yenile düğmesine basmanız gerekir.*

   |Omnipod_Tab|

Alanlar
------

* **RileyLink Durumu:** RileyLink'in mevcut bağlantı durumunu görüntüler

   - *RileyLink Ulaşılamıyor* Pod iletişim cihazı, telefonun Bluetooth kapsama alanında değil, kapalı veya Bluetooth iletişimini engelleyen bir arıza var.
   - *RileyLink Hazır* - Pod iletişim cihazı açık ve Bluetooth bağlantısını aktif olarak başlatıyor
   - *Bağlı* - Pod iletişim cihazı açık, bağlı ve Bluetooth aracılığıyla aktif olarak iletişim kurabiliyor.

* **Pod adresi:** Etkin pod'un referans aldığı mevcut adresi görüntüler
* **LOT:** Etkin pod'un LOT numarasını görüntüler
* **TID:** Pod'un seri numarasını görüntüler.
* **Pod Versiyonu:** Ürün Yazılımı Sürümü, Etkin pod'un üretici yazılımı sürümünü görüntüler.
* **Pod Saati:** Etkin Pod'un geçerli saatini görüntüler.
* **Pod sona eriyor:** Etkin Pod'un süresinin dolacağı tarih ve saati görüntüler.
* **Pod durumu:** Etkin Pod'un durumunu görüntüler.
* **Son bağlantı:** Etkin Pod'la en son iletişimin sağlandığı zamanı görüntüler.

   - *Biraz Önce* - 20 saniyeden kısa bir süre önce.
   - *Bir dakikadan az bir süre önce* - 20 saniyeden daha uzun ama 60 saniyeden daha kısa süre önce.
   - *1 dakika önce* - 60 saniyeden uzun ancak 120 saniyeden az (2 dak)
   - *XX dakika önce* - XX değeriyle tanımlandığı şekilde 2 dakikadan daha fazla

* **Son bolus:** Etkin Pod'tan gönderilen son bolusun dozajını ve ne kadar süre önce verildiğini parantez içinde görüntüler.
* **Temel Bazal oranı:** Bazal oran profilinden geçerli zaman için programlanmış bazal oranı görüntüler.
* **Geçici bazal oranı:** Şu anda çalışmakta olan Geçici Bazal Oranı aşağıdaki biçimde görüntüler

   - Ünite / saat @ GBO'nın verildiği zaman (çalışma dakikası / GBO'nın çalıştırılacağı toplam dakika)
   - *Örnek:* 0,00Ü/sa @18:25 ( 90/120 dakika)

* **Rezervuar:** Rezervuarda 50 üniteden fazla kaldığında, 50+Ü'nin üzerinde kalanı görüntüler. Bu değerin altında tam birimler sarı metinle gösterilir.
* **Toplam iletilen:** Rezervuardan iletilen toplam insülin ünite sayısını görüntüler. *Pod mutlak kesinlikle hazırlanıp ve doldurulmadığı için bunun bir tahmin olduğunu unutmayın.*
* ** Hatalar: ** Karşılaşılan son hatayı görüntüler. `Pod geçmişi <#view-pod-history>`__, `RileyLink geçmişi <#rileylink-and-active-pod-history>`__ ve geçmiş hatalar ve daha ayrıntılı bilgiler için günlük log dosyalarını inceleyin.
* **Etkin pod uyarıları:** Şu anda çalışmakta olan etkin Pod'un uyarıları için ayrılmıştır. Genellikle pod son kullanma tarihi 72 saat sonraysa ve pod yerel bip sesleri çıkardığında kullanılır.

Simgeler
-----

* **REFRESH:**

    |refresh_pod_status|

    İletişimi güncellemek için aktif pod'a bir yenileme komutu gönderir

    Pod durumunu yenilemek ve metin içeren (belirsiz) durum satırlarını yenilemek için kullanın.

    See the `Troubleshooting section <#troubleshooting>`__ below for additional information.

* **POD MGMT:**

    |pod_management|

    Pod yönetimi menüsüne yönlendirir

* **ACK ALERTS:**

    |ack_alerts|

    Bu düğmeye basıldığında, pod sona erme biplerini ve bildirimlerini devre dışı bırakır.

    Button is displayed only when pod time is past expiration warning time
    Başarılı bir devre dışı bırakmanın ardından bu simge artık görünmeyecektir.

* **SET TIME:**

    |set_time|

    Basıldığında, pod'taki saat, telefonunuzdaki geçerli saatle güncellenir.

* **SUSPEND:**

    |suspend|

    Etkin pod'u askıya alır

* **RESUME DELIVERY:**

    |resume|

	Şu anda askıya alınmış, etkin pod'u devam ettirir


Pod Yönetim Menüsü
-------------------

Aşağıda, **Omnipod (POD)** sekmesinden erişilen **Pod Yönetimi** menüsündeki simgelerin düzeni ve anlamının bir açıklaması bulunmaktadır.

    |Omnipod_Tab_Pod_Management|

* **Activate Pod**

    |activate_pod|

    Yeni bir pod hazırlar ve etkinleştirir

* **Deactivate Pod**

    |deactivate_pod|

    Deactivates the currently active pod.

    A partially paired pod ignores this command.

    Use this command to deactivate a screaming pod (error 49).

    If the button is disabled (greyed out) use the Discard Pod button.

* **Play test beep**

    |play_test_beep|

    Basıldığında pod'tan tek bir test bip sesi çalar.

* **Discard pod**

    |discard_pod|

    Basıldığında, yanıt vermeyen bir Pod'un Pod durumunu devre dışı bırakacak ve iptal edecektir.

    Düğme yalnızca, uygun şekilde devre dışı bırakma artık mümkün olmadığı zaman, çok özel durumlarda görüntülenir:

	* **pod tam olarak eşlenmemişse** ve bu nedenle devre dışı bırakma komutlarını yok sayar.
	*Adımlar arasındaki eşleştirme işlemi sırasında **pod takıldı** hatası alındığında
	* **pod hiçbir şekilde eşleşmez.** ise

* **Pod history**

    |pod_history|

    Etkin Pod'un etkinlik geçmişini görüntüler

* **RileyLink stats:**

    |rileylink_stats|

    Geçerli ayarları ve RileyLink Bağlantı geçmişini gösteren RileyLink İstatistikleri ekranına gider

	* **Ayarlar** - RileyLink ve aktif pod ayarları bilgilerini görüntüler
	* **Geçmiş** - RileyLink ve Pod iletişim geçmişini görüntüler

* **Reset RileyLink Config**

    |reset_rileylink_config|

    Bu düğmeye basıldığında, o anda bağlı olan pod iletişim cihazı (örn. RileyLink) yapılandırmasını sıfırlar.

	* İletişim başlatıldığında, belirli veriler RileyLink'e gönderilir ve ayarlanır

	    - Hafıza Kayıtları ayarlandı
	    - İletişim Protokolleri ayarlandı
	    - Ayarlı Radyo Frekansı ayarlandı

	* Bu tablonun sonundaki `ek notlar <#reset-rileylink-config-notes>`__ bölümüne bakın

* **Read pulse log:**

    |pulse_log|

    	Aktif pod sinyal günlüğünü panoya gönderir

*RileyLink Yapılandırma Sıfırlama Notları*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Bu özelliğin birincil kullanımı, o anda etkin olan pod iletişim cihazının yanıt vermediği ve iletişimin takılı kaldığı durumlardır.
* Pod iletişim cihazı (örn. RileyLink) kapatılıp tekrar açılırsa, pod iletişim cihazı konfigürasyonunda bu iletişim parametrelerini ayarlaması için **RileyLink Ayarlarını Sıfırla** düğmesine basılması gerekir.
* Bu YAPILMAYACAK OLURSA, pod iletişim cihazı kapatıldıktan sonra AAPS'nin yeniden başlatılması gerekecektir.
* Farklı pod iletişim cihazları arasında geçiş yaparken bu düğmeye basılması **GEREKMEZ**

Omnipod Ayarları
================

Omnipod sürücü ayarları, sol üst köşedeki **hamburger menüsü** **Konfigürasyon ayarları**\ ➜\ **Pump**\ ➜\ **Omnipod**\ ➜\ **Ayarlar Dişlisi ( 2)** **Omnipod** başlıklı **radyo düğmesini (1)** seçerek. **Ayarlar Dişlisi (2)** yanındaki **onay kutusunun (3)** seçilmesi, Omnipod menüsünün **OMNIPOD** veya **POD** başlıklı AAPS arayüzünde bir sekme olarak görüntülenmesini sağlar. Bu, bu belgede **Omnipod (POD)** sekmesi olarak anılır.

|Omnipod_Settings_1|

**NOT:** **Omnipod ayarlarına** erişmenin daha hızlı bir yolu, **Omnipod (POD)** sekmesinin sağ üst köşesindeki **3 noktalı menüye (1)** erişmek ve açılır menüden **Omnipod tercihleri (2)**'i seçmektir.

|Omnipod_Settings_2|

Ayar grupları aşağıda listelenmiştir; aşağıda açıklanan çoğu giriş için bir geçiş anahtarı aracılığıyla etkinleştirebilir veya devre dışı bırakabilirsiniz:

|Omnipod_Settings_3|

*NOT: Yıldız işareti (\*), bir ayarın varsayılan olarak etkin olduğunu belirtir.*

RileyLink
---------

Bir pod iletişim cihazının taranmasına izin verir. Omnipod sürücüsü aynı anda birden fazla pod iletişim cihazı seçemez.

* **OrangeLink/EmaLink/DiaLink tarafından bildirilen pil seviyesini göster:** OrangeLink/EmaLink/Dialink'in gerçek pil seviyesini bildirir. Tüm OrangeLink/EmaLink/DiaLink kullanıcılarının bu ayarı etkinleştirmesi **şiddetle önerilir**.

	+ Orijinal RileyLink ile ÇALIŞMAZ.
	+ RileyLink alternatifleriyle çalışmayabilir.
	+ Etkin - Desteklenen pod iletişim cihazları için mevcut pil seviyesini raporlar.
	+ Devre Dışı - n/a değerini gösterir.
* **Eylemlerde pil değişikliği kaydını etkinleştir:** Eylemler menüsünde, bu ayarı VE yukarıdaki pil raporlama ayarını etkinleştirdiyseniz pil değiştirme düğmesi etkinleştirilir.  Bazı pod iletişim cihazları artık değiştirilebilen normal pilleri kullanmaya imkan sağlarlar.  Bu seçenek, bunu not etmenize ve pil yaşı zamanlayıcılarını sıfırlamanıza olanak tanır.

Onay Bildirimleri
------------------

Bolus, bazal, SMB ve GBO iletimi ve değişiklikleri için pod üzerinden onay bip sesleri sağlar.

* **\*Bolus uyarıları etkin:** Bolus iletildiğinde onay biplerini etkinleştirin veya devre dışı bırakın.
* **\*Bazal uyarılar etkin:** Yeni bir bazal oran ayarlandığında, aktif bazal oran iptal edildiğinde veya mevcut bazal oran değiştirildiğinde onay uyarıları etkinleştirin veya devre dışı bırakın.
* **\*SMB uyarıları etkin:** Bir SMB teslim edildiğinde onay uyarıları etkinleştirin veya devre dışı bırakın.
* **GBO uyarılarını etkin:** Bir GBO ayarlandığında veya iptal edildiğinde onay uyarılarını etkinleştirin veya devre dışı bırakın.

Alarmlar
------

Tanımlanan eşik birimlerine dayalı olarak pod sona erme, kapatma, düşük rezervuar için AAPS uyarıları ve Nightscout duyuruları sağlar.

*Uyarı tetiklendikten sonra pod ilk iletişimden sonra her uyarı için AAPS bildiriminin DAİMA yayınlanacağını unutmayın. Pod uyarılarının etkinleştirildiğini otomatik olarak onaylamadıkça, bildirimin reddedilmesi uyarıyı KAPATMAZ. Uyarıyı MANUEL OLARAK kapatmak için Omnipod (POD) sekmesini ziyaret etmeli ve BİLGİ UYARILARI düğmesine basmalısınız.*
	
* **\*Süre sonu hatırlatıcısı etkin:** Kapanmadan önce tanımlanan saat süresine ulaşıldığında tetiklenecek şekilde ayarlanan pod sona erme hatırlatıcısını etkinleştirin veya devre dışı bırakın.
* **Kapanmadan önceki saatler:** Etkin Pod kapanmasının gerçekleşmesinden önceki saat sayısını tanımlar, bu daha sonra sona erme hatırlatıcı uyarısını tetikler.
* **\*Düşük rezervuar uyarısı etkin:** Ünite sayısı alanında tanımlandığı şekilde Pod'ta kalan ünite alt rezervuar sınırına ulaşıldığında devreye girecek uyarı etkinleştirin veya devre dışı bırakın.
* **Ünite sayısı:** Pod düşük rezervuar uyarısının tetikleneceği ünite birim sayısı.
* **Pod uyarılarını otomatik olarak kabul et:** Etkinleştirildiğinde, yine de bir bildirim verilecektir, ancak uyarının verilmesinden bu yana ilk pod iletişim temasından hemen sonra, artık otomatik olarak onaylanacak ve uyarı reddedilecektir.

Bildirimler
-------------

GBO, SMB veya bolus olaylarının başarılı olup olmadığı yani belirsiz olduğunda AAPS bildirimleri ve sesli telefon uyarıları sağlar. 

*NOT: Bunlar yalnızca bildirimlerdir, sesli uyarı yapılmaz.*

* **Belirsiz GBO bildirimleri için uyarım etkin:** Bir GBO'nin başarıyla ayarlanıp ayarlanmadığı AAPS belirsiz olduğunda sesli bir uyarı ve görsel bildirimi tetiklemek için bu ayarı etkinleştirin veya devre dışı bırakın.
* **\*Belirsiz SMB bildirimleri için uyarım etkin:** Bir SMB'nin başarıyla teslim edilip edilmediği AAPS belirsiz olduğunda sesli uyarı ve görsel bildirimi tetiklemek için bu ayarı etkinleştirin veya devre dışı bırakın.
* **\*Belirsiz bolus bildirimleri için uyarım etkin:** Bir bolusun başarıyla iletilip iletilmediği konusunda AAPS belirsiz olduğunda sesli bir uyarı ve görsel bildirimi tetiklemek için bu ayarı etkinleştirin veya devre dışı bırakın.
   
Diğer
-----

Hata ayıklamaya yardımcı olmak için gelişmiş ayarlar sağlar.
	
* **Omnipod sekmesinde İletimi Askıya Al düğmesini göster:** **Omnipod (POD)** sekmesindeki iletimi askıya al düğmesini gizleyin veya görüntüleyin.
* **Pod Yönetimi menüsünde Nabız günlüğü düğmesini göster:** **Pod Yönetimi** menüsünde nabız günlüğü düğmesini gizleyin veya görüntüleyin.
* **Pod Yönetimi menüsünde RileyLink İstatistikleri düğmesini göster:** **Pod Yönetimi** menüsünde RileyLink İstatistikleri düğmesini gizleyin veya görüntüleyin.
* **\*DST/Saat dilimi algılama etkinleştirildiğinde:** telefon DST yaz saati uygulamasının gözlemlendiği bir alanda kullanılıyorsa saat dilimi değişikliklerinin otomatik olarak algılanmasını sağlar.

Aktif Pod İletişim Aygıtını Değiştirme veya Çıkarma (RileyLink)
--------------------------------------------------------------------

Mevcut RileyLink'e (OrangeLink veya EmaLink gibi) birçok alternatif model veya aynı pod iletişim cihazının (RileyLink) birden çok/yedek versiyonuna ihtiyaç duyulduğunda, Omnipod Ayarı yapılandırmasından, seçilen pod iletişim cihazının (RileyLink) değiştirilmesi veya çıkarılması gerekli hale gelir. 

Aşağıdaki adımlar, Mevcut pod iletişim cihazının (RileyLink) **Kaldır**'manın yanı sıra yeni bir pod iletişim cihazının **Eklemesini** gösterecektir.  Hem **Kaldır** hem de **Ekle** adımlarını uygulamak, cihazınızı değiştirir.

1. Açılır menüden **Omnipod (POD)** sekmesinin sağ üst köşesindeki **3 noktalı menü (1)** öğesini ve **Omnipod tercihleri (2)** öğesini seçerek **RileyLink Seçimi** menüsüne erişin. **Omnipod Ayarları** menüsünde **RileyLink Yapılandırması (3)** altındaki **Ayarlanmadı** (herhangi bir cihaz seçilmemişse) veya **MAC Adresi** (bir cihaz varsa) metnine basın. **RileyLink Seçimi** menüsünü açın. 

    |Omnipod_Settings_2| |RileyLink_Setup_2|  

Halihazırda Seçili Olan Pod İletişim Aygıtını Kaldırın (RileyLink)
--------------------------------------------------------------

Bu işlem, seçili olan pod iletişim cihazının (RileyLink) Omnipod Sürücü ayarlarından nasıl kaldırılacağını gösterecektir.

1. **RileyLink Konfigürasyonu** altında, **RileyLink Seçimi** menüsünü açmak için **MAC Adresi (1)** metnine basın. 

    |RileyLink_Setup_Remove_1|

2. **RileyLink Seçimi** menüsünde **Şu anda seçili olan RileyLink'inizi (3)** kaldırmak için **Kaldır (2)** düğmesine basın

    |RileyLink_Setup_Remove_2|

3. Onay isteminde, cihazınızın kaldırılmasını onaylamak için **Evet (4)**'e basın.

    |RileyLink_Setup_Remove_3|
    
4. **Omnipod Ayarı** menüsüne dönersiniz, burada **RileyLink Yapılandırması** altında artık cihazın **Ayarlanmadı (5)** olduğunu göreceksiniz.  Tebrikler, seçtiğiniz pod iletişim cihazını başarıyla kaldırdınız.

    |RileyLink_Setup_Remove_4|

Halihazırda Seçili Olan Pod İletişim Aygıtını Ekleyin (RileyLink)
-----------------------------------------------------------

Bu işlem, Omnipod Sürücü ayarlarına yeni bir pod iletişim cihazının nasıl ekleneceğini gösterecektir.

1. **RileyLink Konfigürasyonu** altında, **RileyLink Seçimi** menüsünü açmak için **Ayarlanmadı (1)** metnine basın. 

    |RileyLink_Setup_Add_1|
    
2. Mevcut tüm Bluetooth cihazlarını taramaya başlamak için **Tara (2)** düğmesine basın.

    |RileyLink_Setup_Add_2|

3. Kullanılabilir cihazlar listesinden **RileyLink'inizi (3)** seçin ve yeni seçilen cihazınızın **MAC Adresini (4)** gösteren **Omnipod Ayarları** menüsüne dönersiniz.  Tebrikler, pod iletişim cihazınızı başarıyla seçtiniz.

    |RileyLink_Setup_Add_3| |RileyLink_Setup_Add_4|
    

Eylemler (EYLEM) Sekmesi
=================

Bu sekme, ana AAPS dokümantasyonunda açık bir şekilde anlatılmıştır, ancak bu sekmede, özellikle yeni bir pod takıldıktan sonra, Omnipod podunun hortum bazlı pompalardan nasıl farklı olduğuna dair özel birkaç nokta belirtilmektedir.

1. Ana AAPS arayüzünde **Eylemler (EYLEM)** sekmesine gidin.

2. **Bakım portalında (1)** bölümünün altında, aşağıdaki 3 alanın **yaşları** 0 gün ve 0 saate **her pod değişiminden sonra** olacaktır: **İnsülin** ve **Kanül**. Bu Omnipod pompasının yapılış ve çalışma şekli nedeniyle yapılır. **Pompa pili** ve **insülin deposu** her pod için bağımsızdır. Pod, kanülü doğrudan pod uygulama bölgesinde deriye yerleştirdiği için, Omnipod pompalarında geleneksel hortum kullanılmaz. *Bu nedenle, bir pod değişikliğinden sonra bu değerlerin her birinin yaşı otomatik olarak sıfırlanır.* **Pompa pil yaşı**, pod'ta pil her zaman pod'un ömründen daha uzun olacağından rapor edilmez (maksimum 80 saat).

  |Actions_Tab|

Dolum seviyeleri
------

**İnsülin Seviyesi**

Omnipod Eros Pod'daki insülin bildirim miktarı kesin değil.  Bunun nedeni, pod ne kadar insülin konulduğu tam olarak bilinmemekle birlikte, yalnızca pod doldurulurken 2 bip sesi tetiklendiğinde 85 üniteden fazla enjekte edilmiş olmasıdır. Bir Pod en fazla 200 ünite alabilir. Hazırlama, kesin bir süreç olmadığı için sapmalara da yol açabilir.  Bu faktörlerin her ikisiyle birlikte, Omnipod sürücüsü rezervuarda kalan insülinin en iyi yaklaşık değerini verecek şekilde yazılmıştır.  

  * **50 Ünitenin Üzerinde** - Şu anda rezervuarda 50'den fazla ünite olduğunda 50+Ü değeri bildirir.
  * **50 Ünitenin Altında** - Rezervuarda kalan insülinin yaklaşık hesaplanmış değerini bildirir. 
  * **SMS** - 50+Ü veya altı için sms bildirimi.
  * **Nightscout** - Nightscout'a (sürüm 14.07 ve daha eski) 50 üniteden fazla olduğunda 50 değerini yükler.  Daha yeni sürümler, 50 ünite üzerinde olduğunda 50+ değerini bildirir.


**Pil seviyesi**

Pil seviyesi bildirimi, OrangeLink, EmaLink veya DiaLink gibi pod iletişim cihazlarının mevcut pil düzeyini görüntülemek için etkinleştirilebilen bir ayardır.  RileyLink donanımı, pil seviyesini bildiremez.  Pil seviyesi, pod ile her iletişimden sonra rapor edilir, bu nedenle şarj olurken doğrusal bir artış gözlemlenmeyebilir.  El ile yenileme, mevcut pil seviyesini güncelleyecektir.  Desteklenen bir Pod iletişim cihazının bağlantısı kesildiğinde %0 değeri rapor edilecektir.

  * **RileyLink donanımı, pil seviyesini bildirme özelliğine sahip değildir** 
  * **Pil seviyesi değerlerini bildirmek için Omnipod ayarlarında "OrangeLink/EmaLink/DiaLink tarafından bildirilen pil seviyesini göster" Ayarı MUTLAKA etkinleştirilmelidir**
  * **Pil seviyesi raporlaması YALNIZCA OrangeLink, EmaLink ve DiaLink Cihazları için geçerlidir**
  * **Pil Düzeyi raporlaması diğer cihazlarda da çalışabilir (RileyLink hariç)**
  * **SMS** - Gerçek bir seviye mevcut olduğunda yanıt olarak mevcut pil seviyesini döndürür, n/a değeri döndürülmez
  * **Nightscout** - Gerçek bir seviye mevcut olduğunda pil seviyesi rapor edilir, n/a değeri rapor edilmez


Sorun giderme
===============

Pod Hataları
------------

Pod'lar Pod'un kendisiyle ilgili donanım sorunları da dahil olmak üzere çeşitli sorunlar nedeniyle ara sıra başarısız oluyor. AAPS onaylanmış bir kullanım şekli olmadığından, bunları Insulet'e bildirmemek en iyi seçenektir. Nedeni belirlemeye yardımcı olması için `burada <https://github.com/openaps/openomni/wiki/Fault-event-codes>`__ hata kodlarının bir listesi bulunmaktadır.

49 numaralı Pod hatasını önleme
--------------------------------

Bu hata bir komut için yanlış bir pod durumu veya bir insülin iletim komutu sırasındaki bir hata ile ilgilidir. Kullanıcıların **Konfigurasyon Ayarları**\ ➜\ **Genel**\ ➜\ **NSClient**\ ➜\ **dişli çark* altında **senkronizasyon\ adımından sadece **Verileri NS'a yükleyin\ seçeneğinin seçilmesi öneririz. Bu seçim olası arızaları önlemek içindir.

Pompaya Ulaşılamıyor Uyarıları
-----------------------

Pompaya erişilemiyor uyarılarının sağ üst taraftaki üç noktalı menüye gidip **Tercihler**\ ➜\ **Yerel Uyarılar**\ ➜\ ** öğesini seçerek **120 dakika** olarak yapılandırılması önerilir. Pompa ulaşılamaz eşiği [min]** ve bunu **120** olarak ayarlayın.

Önceki AAPS ayarlarını içe aktarın
----------------------------------

Ayarları içe aktarmanın, eski bir Pod durumunu içe aktarma olanağına sahip olduğunu lütfen unutmayın. Sonuç olarak, aktif bir Pod'u kaybedebilirsiniz. Bu nedenle dolayı **etkin bir Pod oturumu sırasında ayarları içe aktarmamanız** şiddetle tavsiye edilir.

1. Pod oturumunuzu devre dışı bırakın. Etkin bir pod oturumunuz olmadığına emin olun.
2. Ayarlarınızı dışa aktarın ve bir kopyasını güvenli bir yerde saklayın.
3. AAPS'nin önceki sürümünü kaldırın ve telefonunuzu yeniden başlatın.
4. AAPS'nin yeni sürümünü yükleyin ve etkin bir pod oturumunuz olmadığını doğrulayın.
5. Ayarlarınızı içe aktarın ve yeni podunuzu etkinleştirin.

Omnipod sürücü uyarıları
---------------------

Omnipod sürücüsünün **Genel Bakış sekmesinde** çeşitli farklı uyarılar sunduğunu, bunların çoğunun bilgi amaçlı olduğunu ve reddedilebileceğini, bazılarının ise tetiklenen uyarının nedenini çözmek için kullanıcıya bir eylemde bulunabileceğini unutmayın. Karşılaşabileceğiniz başlıca uyarıların bir özeti aşağıda listelenmiştir:

Aktif Pod Yok
~~~~~~~~~~~~~

Aktif bir Pod oturumu algılanamadı. Bu uyarı, **ERTELE**'ye basılarak geçici olarak kapatılabilir, ancak yeni bir pod etkinleştirilmediği sürece tetiklenmeye devam edecektir. Etkinleştirildiğinde bu uyarı otomatik olarak susacaktır.

Pod askıya alındı
~~~~~~~~~~~~~

Pod'un askıya alındığına dair bilgi uyarısı.

Bazal profil ayarlanamadı. İletim durdurulmuş olabilir! Lütfen Omnipod sekmesindeki Pod durumunu manuel olarak güncelleyin ve gerekirse teslimi devam ettirin..
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pod bazal profil ayarının başarısız olduğuna ve Omnipod sekmesinde *Yenile*'ye basmanız gerektiğine dair bilgi uyarısıdır.

SMB bolusunun başarılı olup olmadığı doğrulanamıyor. Bolus'un başarılı olmadığından eminseniz, SMB girişini Tedaviler'den manuel olarak kaldırmalısınız.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

SMB bolus başarısının doğrulanamadığına dair uyarı, SMB bolusunun başarılı olup olmadığını görmek için Omnipod sekmesindeki *Son bolus* alanını doğrulamanız ve değilse Tedaviler sekmesinden girdiyi kaldırmanız gerekir.

"Görev bolus/GBO/SMB"nin tamamlanıp tamamlanmadığı belirsizse, lütfen başarılı olup olmadığını manuel olarak doğrulayın.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

RileyLink ve Omnipod'un iletişim şekli nedeniyle, bir komutun başarıyla işlenip işlenmediğinin *belirsiz* olduğu durumlar meydana gelebilir. Kullanıcıyı bu belirsizlik hakkında bilgilendirme önemlidir.

Aşağıda, belirsiz bir bildirimin ne zaman ortaya çıkabileceğine dair birkaç örnek verilmiştir.

* **Bolus** - Belirsiz boluslar otomatik olarak doğrulanamaz. Bildirim, bir sonraki bolusa kadar kalacak ancak manuel Pod yenilemesi mesajı silecektir. *Varsayılan olarak, kullanıcının manuel olarak onaylaması gerektiğinden, bu tür bir bildirim için uyarı bip sesleri etkinleştirilir.*
**GBO'lar, Pod Durumları, Profil Anahtarları, Zaman Değişiklikleri** - manuel bir pod güncellemesi mesajı siler. Bu bildirim türü için varsayılan uyarı bip sesleri devre dışıdır.
* **Pod Zaman Sapması -** Pod zamanı ve telefonunuzun zamanı çok fazla saptığında, AAPS döngüsünün çalışması ve doğru tahminler ve dozaj önerileri yapması zordur. Pod ile telefon arasındaki zaman sapması 5 dakikadan fazlaysa, AAPS, HANDLE TIME CHANGE "ZAMAN DEĞİŞİKLİĞİ İŞLE mesajıyla Pod'un Pod durumu altında Askıya alınmış durumda olduğunu bildirir. Omnipod (POD) sekmesinin altında ek bir **Saati Ayarla** simgesi görünecektir. Saati Ayarla'yı tıklamak, Pod saati telefondaki saatle senkronize eder ve ardından normal pod işlemlerine devam etmek için 'RESUME DELIVERY' TESLİME DEVAM ET düğmesine tıklayabilirsiniz.

En İyi Uygulamalar
==============

En İyi Omnipod ve RileyLink Konumlandırılması
-----------------------------------------

Bir Omnipod pod ile iletişim kurmak için RileyLink'te kullanılan anten, 433 MHz sarmal spiral antendir. Yapı özelliklerinden dolayı, dikey duran anteni temsil eden z ekseni ile üç boyutlu bir halka gibi çok yönlü bir sinyal yayar. Bu özellikle pod etkinleştirme ve devre dışı bırakma rutinleri sırasında, RileyLink'in yerleştirilmesi için en uygun konumdırmanın olduğu anlamına gelir.

|Toroid_w_CS|

    *(Res 1. Çok yönlü bir modelde sarmal spiral antenin grafik çizimi*)

Hem emniyet hem de güvenlik endişeleri nedeniyle, pod *aktivasyonu*, bolus verme, GBO ayarlama veya yalnızca pod durumunu yenileme gibi diğer işlemlerden *yakın (~30 cm veya daha az)* bir mesafede yapılmalıdır. RileyLink anteninden sinyal iletiminin doğası gereği, podun doğrudan RileyLink'in üzerine veya hemen yanına yerleştirilmesi ÖNERİLMEZ.

Aşağıdaki resim, pod etkinleştirme ve devre dışı bırakma prosedürleri sırasında RileyLink'i konumlandırmanın en uygun yolunu göstermektedir. Pod başka pozisyonlarda aktif olabilir ama en başarılı olanı aşağıdaki resimdeki pozisyonu kullanarak elde edersiniz.

*Not: Pod en uygun şekilde yerleştirdikten sonra ve RileyLink iletişimi başarısız olursa, bunun nedeni, RileyLink anteninin iletim menzilini azaltan düşük pil seviyesi olabilir. Bu sorunu önlemek için, bu işlem sırasında RileyLink'in doğru şekilde şarj edildiğinden veya doğrudan bir şarj kablosuna bağlandığından emin olun.*

|Omnipod_pod_and_RileyLink_Position|

Omnipod sürücüsü için nereden yardım alınabilir
====================================

Omnipod sürücüsü için tüm geliştirme çalışmaları topluluk tarafından gönüllü olarak yapılır; Yardım talep ederken lütfen düşünceli olmanızı ve aşağıdaki yönergeleri kullanmanızı rica ediyoruz:

- **Seviye 0:** Sorun yaşadığınız işlevselliğin nasıl çalışması gerektiğini anladığınızdan emin olmak için bu belgenin ilgili bölümünü okuyun.
- **Seviye 1:** Bu belgeyi kullanarak çözemediğiniz sorunlarla hala karşılaşıyorsanız, lütfen `bu davet bağlantısını kullanarak **Discord**'daki *#androidaps* kanalına gidin  <https://discord.gg/4fQUWHZ4Mw>`__.
- **Seviye 2:** Sorununuzun daha önce rapor edilip edilmediğini görmek için mevcut sorunları arayın; değilse, lütfen yeni bir `sorun <https://github.com/nightscout/AndroidAPS/issues>`__ oluşturun ve `günlük dosyalarınızı (log) <../Usage/Accessing-logfiles.html>`__ ekleyin.
- **Sabırlı olun - topluluğumuzun üyelerinin çoğu iyi huylu gönüllülerden oluşur ve sorunları çözmek genellikle hem kullanıcılar hem de geliştiriciler için zaman ve sabır gerektirir.**



..
	Omnipod görüntü takma adları, daha fazla konumlandırma esnekliği ile görüntülere ada göre referans vermek için kaynak


..
	Arayüz simgeleri

..
	Omnipod (POD) Genel Bakış Sekmesi

.. |ack_alerts|                    image:: ../images/omnipod/ICONS/omnipod_overview_ack_alerts.png
.. |pod_management|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management.png
.. |refresh_pod_status|            image:: ../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png
.. |resume|               	   image:: ../images/omnipod/ICONS/omnipod_overview_resume.png
.. |set_time|                      image:: ../images/omnipod/ICONS/omnipod_overview_set_time.png
.. |suspend|                       image:: ../images/omnipod/ICONS/omnipod_overview_suspend.png

..
	Pod Yönetimi Sekmesi

.. |activate_pod|                  image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png
.. |deactivate_pod|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png
.. |discard_pod|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png
.. |play_test_beep|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png
.. |pod_history|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png
.. |pulse_log|                     image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pulse_log.png
.. |reset_rileylink_config|        image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png
.. |rileylink_stats|               image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png


..
	Eğitici Bölüm Görselleri
	
..
	Donanım ve Yazılım Gereksinimleri
.. |EmaLink|				image:: ../images/omnipod/EmaLink.png
.. |LoopLink|				image:: ../images/omnipod/LoopLink.png
.. |OrangeLink|				image:: ../images/omnipod/OrangeLink.png		
.. |RileyLink|				image:: ../images/omnipod/RileyLink.png
.. |DiaLink|				image:: ../images/omnipod/DiaLink.png
.. |Android_phone|			image:: ../images/omnipod/Android_phone.png	
.. |Omnipod_Pod|			image:: ../images/omnipod/Omnipod_Pod.png
	
..
		Bilgilendirme Uyarıları
.. |Acknowledge_Alerts_1|               image:: ../images/omnipod/Acknowledge_Alerts_1.png
.. |Acknowledge_Alerts_2|               image:: ../images/omnipod/Acknowledge_Alerts_2.png
.. |Acknowledge_Alerts_3|               image:: ../images/omnipod/Acknowledge_Alerts_3.png
.. |Acknowledge_Alerts_4|               image:: ../images/omnipod/Acknowledge_Alerts_4.png
.. |Acknowledge_Alerts_5|               image:: ../images/omnipod/Acknowledge_Alerts_5.png

..
	Eylemler Sekmesi
.. |Actions_Tab|                  		image:: ../images/omnipod/Actions_Tab.png

..
	Pod Etkinleştirme
.. |Activate_Pod_1|                     image:: ../images/omnipod/Activate_Pod_1.png
.. |Activate_Pod_2|                     image:: ../images/omnipod/Activate_Pod_2.png
.. |Activate_Pod_3|                     image:: ../images/omnipod/Activate_Pod_3.png
.. |Activate_Pod_4|                     image:: ../images/omnipod/Activate_Pod_4.png
.. |Activate_Pod_5|                     image:: ../images/omnipod/Activate_Pod_5.png
.. |Activate_Pod_6|                     image:: ../images/omnipod/Activate_Pod_6.png
.. |Activate_Pod_7|                     image:: ../images/omnipod/Activate_Pod_7.png
.. |Activate_Pod_8|                     image:: ../images/omnipod/Activate_Pod_8.png
.. |Activate_Pod_9|                     image:: ../images/omnipod/Activate_Pod_9.png
.. |Activate_Pod_10|                    image:: ../images/omnipod/Activate_Pod_10.png
.. |Activate_Pod_11|                    image:: ../images/omnipod/Activate_Pod_11.png
.. |Activate_Pod_12|                    image:: ../images/omnipod/Activate_Pod_12.png
.. |Activate_Pod_13|                    image:: ../images/omnipod/Activate_Pod_13.png
.. |Activate_Pod_14|                    image:: ../images/omnipod/Activate_Pod_14.png
.. |Activate_Pod_15|                    image:: ../images/omnipod/Activate_Pod_15.png

..
	Pod'u Devre Dışı Bırakma
.. |Deactivate_Pod_1|                   image:: ../images/omnipod/Deactivate_Pod_1.png
.. |Deactivate_Pod_2|                   image:: ../images/omnipod/Deactivate_Pod_2.png
.. |Deactivate_Pod_3|                   image:: ../images/omnipod/Deactivate_Pod_3.png
.. |Deactivate_Pod_4|                   image:: ../images/omnipod/Deactivate_Pod_4.png
.. |Deactivate_Pod_5|                   image:: ../images/omnipod/Deactivate_Pod_5.png
.. |Deactivate_Pod_6|                   image:: ../images/omnipod/Deactivate_Pod_6.png
.. |Deactivate_Pod_7|                   image:: ../images/omnipod/Deactivate_Pod_7.png
.. |Deactivate_Pod_8|                   image:: ../images/omnipod/Deactivate_Pod_8.png
.. |Deactivate_Pod_9|                   image:: ../images/omnipod/Deactivate_Pod_9.png
.. |Deactivate_Pod_10|                  image:: ../images/omnipod/Deactivate_Pod_10.png

..
	AAPS'de Omnipod Sürücüsünü Etkinleştirme
.. |Enable_Omnipod_Driver_1|            image:: ../images/omnipod/Enable_Omnipod_Driver_1.png
.. |Enable_Omnipod_Driver_2|            image:: ../images/omnipod/Enable_Omnipod_Driver_2.png
.. |Enable_Omnipod_Driver_3|            image:: ../images/omnipod/Enable_Omnipod_Driver_3.png
.. |Enable_Omnipod_Driver_4|            image:: ../images/omnipod/Enable_Omnipod_Driver_4.png
.. |Enable_Omnipod_Driver_5|            image:: ../images/omnipod/Enable_Omnipod_Driver_5.png

..
	RileyLink ve Omnipod podunu Optimal Olarak Konumlandırma
.. |Omnipod_pod_and_RileyLink_Position|	image:: ../images/omnipod/Omnipod_pod_and_RileyLink_Position.png
.. |Toroid_w_CS|                  		image:: ../images/omnipod/Toroid_w_CS.png

..
	Omnipod Ayarları
.. |Omnipod_Settings_1|                 image:: ../images/omnipod/Omnipod_Settings_1.png
.. |Omnipod_Settings_2|                 image:: ../images/omnipod/Omnipod_Settings_2.png
.. |Omnipod_Settings_3|                 image:: ../images/omnipod/Omnipod_Settings_3.png

..
	Omnipod Sekmesi
.. |Omnipod_Tab|                  		image:: ../images/omnipod/Omnipod_Tab.png
.. |Omnipod_Tab_Pod_Management|         image:: ../images/omnipod/Omnipod_Tab_Pod_Management.png

..
	Pod Geçmişi
.. |Pod_History_1|                  	image:: ../images/omnipod/Pod_History_1.png
.. |Pod_History_2|                  	image:: ../images/omnipod/Pod_History_2.png
.. |Pod_History_3|                  	image:: ../images/omnipod/Pod_History_3.png
.. |Pod_History_4|                  	image:: ../images/omnipod/Pod_History_4.png

..
	İnsülin İletimine Devam et
.. |Resume_Insulin_Delivery_1|          image:: ../images/omnipod/Resume_Insulin_Delivery_1.png
.. |Resume_Insulin_Delivery_2|          image:: ../images/omnipod/Resume_Insulin_Delivery_2.png
.. |Resume_Insulin_Delivery_3|          image:: ../images/omnipod/Resume_Insulin_Delivery_3.png
.. |Resume_Insulin_Delivery_4|          image:: ../images/omnipod/Resume_Insulin_Delivery_4.png

..
	RileyLink Bluetooth Sıfırla
.. |RileyLink_Bluetooth_Reset_1|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_1.png
.. |RileyLink_Bluetooth_Reset_2|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_2.png
.. |RileyLink_Bluetooth_Reset_3|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_3.png
.. |RileyLink_Bluetooth_Reset_4|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_4.png
.. |RileyLink_Bluetooth_Reset_5|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_5.png

..
	RileyLink Kurulumu
.. |RileyLink_Setup_1|                  image:: ../images/omnipod/RileyLink_Setup_1.png
.. |RileyLink_Setup_2|                  image:: ../images/omnipod/RileyLink_Setup_2.png
.. |RileyLink_Setup_3|                  image:: ../images/omnipod/RileyLink_Setup_3.png
.. |RileyLink_Setup_4|                  image:: ../images/omnipod/RileyLink_Setup_4.png
.. |RileyLink_Setup_5|                  image:: ../images/omnipod/RileyLink_Setup_5.png
.. |RileyLink_Setup_6|                  image:: ../images/omnipod/RileyLink_Setup_6.png

..
	RileyLink Kurulumu Aygıt Ekle
.. |RileyLink_Setup_Add_1|                  image:: ../images/omnipod/RileyLink_Setup_Add_1.png
.. |RileyLink_Setup_Add_2|                  image:: ../images/omnipod/RileyLink_Setup_Add_2.png
.. |RileyLink_Setup_Add_3|                  image:: ../images/omnipod/RileyLink_Setup_Add_3.png
.. |RileyLink_Setup_Add_4|                  image:: ../images/omnipod/RileyLink_Setup_Add_4.png

..
	RileyLink Kurulumu Aygıt Kaldır
.. |RileyLink_Setup_Remove_1|                  image:: ../images/omnipod/RileyLink_Setup_Remove_1.png
.. |RileyLink_Setup_Remove_2|                  image:: ../images/omnipod/RileyLink_Setup_Remove_2.png
.. |RileyLink_Setup_Remove_3|                  image:: ../images/omnipod/RileyLink_Setup_Remove_3.png
.. |RileyLink_Setup_Remove_4|                  image:: ../images/omnipod/RileyLink_Setup_Remove_4.png

..
	RileyLink İstatistik Geçmişi
.. |RileyLink_Statistics_History_1|     image:: ../images/omnipod/RileyLink_Statistics_History_1.png
.. |RileyLink_Statistics_History_2|     image:: ../images/omnipod/RileyLink_Statistics_History_2.png
.. |RileyLink_Statistics_History_3|     image:: ../images/omnipod/RileyLink_Statistics_History_3.png

..
	RileyLink İstatistik Ayarları
.. |RileyLink_Statistics_Settings_1|    image:: ../images/omnipod/RileyLink_Statistics_Settings_1.png
.. |RileyLink_Statistics_Settings_2|    image:: ../images/omnipod/RileyLink_Statistics_Settings_2.png
.. |RileyLink_Statistics_Settings_3|    image:: ../images/omnipod/RileyLink_Statistics_Settings_3.png

..
	İnsülin İletimini Askıya Al
.. |Suspend_Insulin_Delivery_1|         image:: ../images/omnipod/Suspend_Insulin_Delivery_1.png
.. |Suspend_Insulin_Delivery_2|         image:: ../images/omnipod/Suspend_Insulin_Delivery_2.png
.. |Suspend_Insulin_Delivery_3|         image:: ../images/omnipod/Suspend_Insulin_Delivery_3.png
.. |Suspend_Insulin_Delivery_4|         image:: ../images/omnipod/Suspend_Insulin_Delivery_4.png
