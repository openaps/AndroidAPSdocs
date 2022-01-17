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

* **Last bolus:** Displays the dosage of the last bolus sent to the active pod and how long ago it was issued in parenthesis.
* **Base Basal rate:** Displays the basal rate programmed for the current time from the basal rate profile.
* **Temp basal rate:** Displays the currently running Temporary Basal Rate in the following format

   - Ünite / saat @ GBO'nın verildiği zaman (çalışma dakikası / GBO'nın çalıştırılacağı toplam dakika)
   - *Örnek:* 0,00Ü/sa @18:25 ( 90/120 dakika)

* **Reservoir:** Displays over 50+U left when more than 50 units are left in the reservoir. Bu değerin altında tam birimler sarı metinle gösterilir.
* **Toplam iletilen:** Rezervuardan iletilen toplam insülin ünite sayısını görüntüler. *Pod mutlak kesinlikle hazırlanıp ve doldurulmadığı için bunun bir tahmin olduğunu unutmayın.*
* ** Hatalar: ** Karşılaşılan son hatayı görüntüler. `Pod geçmişi <#view-pod-history>`__, `RileyLink geçmişi <#rileylink-and-active-pod-history>`__ ve geçmiş hatalar ve daha ayrıntılı bilgiler için günlük log dosyalarını inceleyin.
*  **Active pod alerts:** Reserved for currently running alerts on the active pod. Genellikle pod son kullanma tarihi 72 saat sonraysa ve pod yerel bip sesleri çıkardığında kullanılır.

Simgeler
-----

.. liste-table:: 
      
    * - |refresh_pod_status|
      - **YENİLE:** 
			
	İletişimi güncellemek için aktif pod'a bir yenileme komutu gönderir
			 
	* Pod durumunu yenilemek ve metni içeren (belirsiz) durum alanlarını yenilemek için bu seçeneği kullanın.
	* Ek bilgi için aşağıdaki `Sorun giderme <#troubleshooting>`__ bölümüne bakın.
    * - |pod_management|  	 
      - **POD YNTM:**

	Pod yönetimi menüsüne yönlendirir   
    * - |ack_alerts|		 
      - **BİLGİ UYARILARI:**
   			 
	Bu düğmeye basıldığında, pod sona erme biplerini ve bildirimlerini devre dışı bırakır. 
			 
	* Bu düğme, yalnızca pod'un geçerli saati pod sona erme tarihinden sonraysa görüntülenir
	* Başarılı bir şekilde görevden alma durumunda, bu simge artık görünmeyecektir.			 
    * - |set_time|	 
      - **SAATİ AYARLA:**
   
	Basıldığında, pod'taki saat, telefonunuzdaki geçerli saatle güncellenir.
    * - |suspend|  		 
      - **ASKIYA AL:**
   
	Etkin pod'u askıya alır
    * - |resume|	 
      - **İLETİME DEVAM ET:**
   
	Şu anda askıya alınmış, etkin pod'u devam ettirir


Pod Yönetim Menüsü
-------------------

Aşağıda, **Omnipod (POD)** sekmesinden erişilen **Pod Yönetimi** menüsündeki simgelerin düzeni ve anlamının bir açıklaması bulunmaktadır.

|Omnipod_Tab_Pod_Management|

.. liste-table:: 

    * - |activate_pod|
      - **Pod Etkinleştir**
   
        Primes and activates a new pod
    * - |deactivate_pod|
      - **Deactivate Pod**
 
        Deactivates the currently active pod.
		 
	*  A partially paired pod ignores this command.
	*  Use this command to deactivate a screaming pod (error 49).
	*  If the button is disabled (greyed out) use the Discard Pod button.
    * - |play_test_beep|
      - **Play test beep**
 
 	Plays a single test beep on the pod when pressed.
    * - |discard_pod|
      - **Discard pod**

	Deactivates and discards the pod state of an unresponsive pod when pressed.
			      
	Button is only displayed when very specific cases are met as proper deactivation is no longer possible:

	* A **pod is not fully paired** and thus ignores deactivate commands.
	* A **pod is stuck** during the pairing process between steps
	* A **pod simply does not pair at all.**
    * - |pod_history|
      - **Pod history** 
   
   	Displays the active pod activity history
    * - |rileylink_stats|
      - **RileyLink stats:**
   
        Navigates to the RileyLink Statistics screen displaying current settings and RileyLink Connection history

	* **Settings** - displays RileyLink and active pod settings information
	* **History** - displays RileyLink and Pod communication history
    * - |reset_rileylink_config|
      - **Reset RileyLink Config** 
   
   	When pressed this button resets the currently connected pod communication device configuration. 
			      
	* When communication is started, specific data is sent to and set in the RileyLink 
			      
	    - Memory Registers are set
	    - Communication Protocols are set
	    - Tuned Radio Frequency is set
				
	* See `additional notes <#reset-rileylink-config-notes>`__ at the end of this table
    * - |pulse_log|
      - **Read pulse log:** 
    
    	Sends the active pod pulse log to the clipboard		    

*Reset RileyLink Config Notes*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* The primary usage of this feature is when the currently active pod communication device is not responding and communication is in a stuck state.
* If the pod communication device is turned off and then back on, the **Reset RileyLink Config** button needs to be pressed, so that it sets these communication parameters in the pod communication device configuration.
* If this is NOT done then AAPS will need to be restarted after the pod communication device is power cycled.
* This button **DOES NOT** need to be pressed when switching between different pod communication devices

Omnipod Ayarları
================

The Omnipod driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder**\ ➜\ **Pump**\ ➜\ **Omnipod**\ ➜\ **Settings Gear (2)** by selecting the **radio button (1)** titled **Omnipod**. Selecting the **checkbox (3)** next to the **Settings Gear (2)** will allow the Omnipod menu to be displayed as a tab in the AAPS interface titled **OMNIPOD** or **POD**. Bu, bu belgede **Omnipod (POD)** sekmesi olarak anılır.

|Omnipod_Settings_1|

**NOTE:** A faster way to access the **Omnipod settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu.

|Omnipod_Settings_2|

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

|Omnipod_Settings_3|

*NOTE: An asterisk (\*) denotes the default for a setting is enabled.*

RileyLink
---------

Allows for scanning of a pod communication device. The Omnipod driver cannot select more than one pod communication device at a time.

* **Show battery level reported by OrangeLink/EmaLink/DiaLink:** Reports the actual battery level of the OrangeLink/EmaLink/Dialink. It is **strongly recommended** that all OrangeLink/EmaLink/DiaLink users enable this setting.

	+  DOES NOT work with the original RileyLink.
	+  May not work with RileyLink alternatives.
	+  Enabled - Reports the current battery level for supported pod communication devices.
	+  Disabled - Reports a value of n/a.
* **Enable battery change logging in Actions:** In the Actions menu, the battery change button is enabled IF you have enabled this setting AND the battery reporting setting above.  Some pod communication devices now have the ability to use regular batteries which can be changed.  This option allows you to note that and reset battery age timers.

Confirmation beeps
------------------

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **\*Bolus beeps enabled:** Enable or disable confirmation beeps when a bolus is delivered.
* **\*Basal beeps enabled:** Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.
* **\*SMB beeps enabled:** Enable or disable confirmation beeps when a SMB is delivered.
* **TBR beeps enabled:** Enable or disable confirmation beeps when a TBR is set or canceled.

Alerts
------

Provides AAPS alerts and Nightscout announcements for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the Omnipod (POD) tab and press the ACK ALERTS button.*
	
* **\*Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **\*Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.
* **Automatically acknowledge Pod alerts:** When enabled a notification will still be issued however immediately after the first pod communication contact since the alert was issued it will now be automatically acknowledged and the alert will be dismissed.

Notifications
-------------

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus events were successful. 

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPs is uncertain if a TBR was successfully set.
* **\*Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
* **\*Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.
   
Diğer
-----

Hata ayıklamaya yardımcı olmak için gelişmiş ayarlar sağlar.
	
* **Show Suspend Delivery button in Omnipod tab:** Hide or display the suspend delivery button in the **Omnipod (POD)** tab.
* **Show Pulse log button in Pod Management menu:** Hide or display the pulse log button in the **Pod Management** menu.
* **Show RileyLink Stats button in Pod Management menu:** Hide or display the RileyLink Stats button in the **Pod Management** menu.
* **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

Switching or Removing an Active Pod Communication Device (RileyLink)
--------------------------------------------------------------------

With many alternative models to the original RileyLink available (such as OrangeLink or EmaLink) or the need to have multiple/backup versions of the same pod communication device (RileyLink), it becomes necessary to switch or remove the selected pod communication device (RileyLink) from Omnipod Setting configuration. 

The following steps will show how to **Remove** and existing pod communication device (RileyLink) as well as **Add** a new pod communication device.  Executing both **Remove** and **Add** steps will switch your device.

1. Access the **RileyLink Selection** menu by selecting the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu. On the **Omnipod Settings** menu under **RileyLink Configuration (3)** press the **Not Set** (if no device is selected) or **MAC Address** (if a device is present) text to open the **RileyLink Selection** menu. 

    |Omnipod_Settings_2| |RileyLink_Setup_2|  

Remove Currently Selected Pod Communication Device (RileyLink)
--------------------------------------------------------------

This process will show how to remove the currently selected pod communication device (RileyLink) from the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **MAC Address (1)** text to open the **RileyLink Selection** menu. 

    |RileyLink_Setup_Remove_1|

2. On the **RileyLink Selection** menu the press **Remove (2)** button to remove **your currently selected RileyLink (3)**

    |RileyLink_Setup_Remove_2|

3. At the confirmation prompt press **Yes (4)** to confirm the removal of your device.

    |RileyLink_Setup_Remove_3|
    
4. You are returned to the **Omnipod Setting** menu where under **RileyLink Configuration** you will now see the device is **Not Set (5)**.  Congratulations, you have now successfully removed your selected pod communication device.

    |RileyLink_Setup_Remove_4|

Add Currently Selected Pod Communication Device (RileyLink)
-----------------------------------------------------------

This process will show how to add a new pod communication device to the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **Not Set (1)** text to open the **RileyLink Selection** menu. 

    |RileyLink_Setup_Add_1|
    
2. Press the **Scan (2)** button to start scanning for all available Bluetooth devices.

    |RileyLink_Setup_Add_2|

3. Select **your RileyLink (3)** from the list of available devices and you will be returned to the **Omnipod Settings** menu displaying the **MAC Address (4)** of your newly selected device.  Congratulations you have successfully selected your pod communication device.

    |RileyLink_Setup_Add_3| |RileyLink_Setup_Add_4|
    

Actions (ACT) Tab
=================

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the following 3 fields will have their **age reset** to 0 days and 0 hours **after each pod change**: **Insulin** and **Cannula**. This is done because of how the Omnipod pump is built and operates. The **pump battery** and **insulin reservoir** are self contained inside of each pod. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours).

  |Actions_Tab|

Levels
------

**Insulin Level**

Reporting of the amount of insulin in the Omnipod Eros Pod is not exact.  This is because it is not known exactly how much insulin was put in the pod, only that when the 2 beeps are triggered while filling the pod that over 85 units have been injected. A Pod can hold a maximum of 200 units. Priming can also introduce variance as it is not and exact process.  With both of these factors, the Omnipod driver has been written to give the best approximation of insulin remaining in the reservoir.  

  * **Above 50 Units** - Reports a value of 50+U when more than 50 units are currently in the reservoir.
  * **Below 50 Units** - Reports an approximate calculated value of insulin remaining in the reservoir. 
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Newer versions will report a value of 50+ when over 50 units.


**Battery Level**

Battery level reporting is a setting that can be enabled to return the current battery level of pod communication devices, such as the OrangeLink, EmaLink or DiaLink.  The RileyLink hardware is not capable of reporting its battery level.  The battery level is reported after each communication with the pod, so when charging a linear increase may not be observed.  A manual refresh will update the current battery level.  When a supported Pod communication device is disconnected a value of 0% will be reported.

  * **RileyLink hardware is NOT capable of reporting battery level** 
  * **"Show battery level reported by OrangeLink/EmaLink/DiaLink" Setting MUST be enabled in the Omnipod settings to report battery level values**
  * **Battery level reporting ONLY works for OrangeLink, EmaLink and DiaLink Devices**
  * **Battery Level reporting MAY work for other devices (excluding RileyLink)**
  * **SMS** - Returns current battery level as a response when an actual level exists, a value of n/a will not be returned
  * **Nightscout** - Battery level is reported when an actual level exists, a value of n/a will not be reported


Troubleshooting
===============

Pod Failures
------------

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be found `here <https://github.com/openaps/openomni/wiki/Fault-event-codes>`__ to help determine the cause.

Preventing error 49 pod failures
--------------------------------

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. We recommend users to switch to the Nightscout client to *upload only (Disable sync)* under the **Config Builder**\ ➜\ **General**\ ➜\ **NSClient**\ ➜\ **cog wheel**\ ➜\ **Advanced Settings** to prevent possible failures.

Pump Unreachable Alerts
-----------------------

It is recommended that pump unreachable alerts be configured to **120 minutes** by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]** and setting this to **120**.

Import Settings from previous AAPS
----------------------------------

Please note that importing settings has the possibility to import an outdated Pod status. As a result, you may lose an active Pod. It is therefore strongly recommended that you **do not import settings while on an active Pod session**.

1. Deactivate your pod session. Verify that you do not have an active pod session.
2. Export your settings and store a copy in a safe place.
3. Uninstall the previous version of AAPS and restart your phone.
4. Install the new version of AAPS and verify that you do not have an active pod session.
5. Import your settings and activate your new pod.

Omnipod driver alerts
---------------------

please note that the Omnipod driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

No active Pod
~~~~~~~~~~~~~

No active Pod session detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically silenced.

Pod suspended
~~~~~~~~~~~~~

Informational alert that Pod has been suspended.

Setting basal profile failed. Delivery might be suspended! Please manually refresh the Pod status from the Omnipod tab and resume delivery if needed..
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Informational alert that the Pod basal profile setting has failed, and you will need to hit *Refresh* on the Omnipod tab.

Unable to verify whether SMB bolus succeeded. If you are sure that the Bolus didn't succeed, you should manually delete the SMB entry from Treatments.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alert that the SMB bolus success could not be verified, you will need to verify the *Last bolus* field on the Omnipod tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.

Uncertain if "task bolus/TBR/SMB" completed, please manually verify if it was successful.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Due to the way that the RileyLink and Omnipod communicate, situations can occur where it is *uncertain* if a command was successfully processed. The need to inform the user of this uncertainty was necessary.

Below are a few examples of when an uncertain notification can occur.

* **Boluses** - Uncertain boluses cannot be automatically verified. The notification will remain until the next bolus but a manual pod refresh will clear the message. *By default alerts beeps are enabled for this notification type as the user will manually need to verify them.*
* **TBRs, Pod Statuses, Profile Switches, Time Changes** - a manual pod refresh will clear the message. By default alert beeps are disabled for this notification type.
* **Pod Time Deviation -** When the time on the pod and the time your phone deviates too much then it is difficult for AAPS loop to function and make accurate predictions and dosage recommendations. If the time deviation between the pod and the phone is more than 5 minutes then AAPS will report the pod is in a Suspended state under Pod status with a HANDLE TIME CHANGE message. An additional **Set Time** icon will appear at the bottom of the Omnipod (POD) tab. Clicking Set Time will synchronize the time on the pod with the time on the phone and then you can click the RESUME DELIVERY button to continue normal pod operations.

Best Practices
==============

Optimal Omnipod and RileyLink Positioning
-----------------------------------------

The antenna used on the RileyLink to communicate with an Omnipod pod is a 433 MHz helical spiral antenna. Due to its construction properties it radiates an omni directional signal like a three dimensional doughnut with the z-axis representing the vertical standing antenna. This means that there are optimal positions for the RileyLink to be placed, especially during pod activation and deactivation routines.

|Toroid_w_CS|

    *(Fig 1. Graphical plot of helical spiral antenna in an omnidirectional pattern*)

Because of both safety and security concerns, pod *activation* has to be done at a range *closer (~30 cm away or less)* than other operations such as giving a bolus, setting a TBR or simply refreshing the pod status. Due to the nature of the signal transmission from the RileyLink antenna it is NOT recommended to place the pod directly on top of or right next to the RileyLink.

The image below shows the optimal way to position the RileyLink during pod activation and deactivation procedures. The pod may activate in other positions but you will have the most success using the position in the image below.

*Note: If after optimally positioning the pod and RileyLink communication fails, this may be due to a low battery which decreases the transmission range of the RileyLink antenna. To avoid this issue make sure the RileyLink is properly charged or connected directly to a charging cable during this process.*

|Omnipod_pod_and_RileyLink_Position|

Where to get help for Omnipod driver
====================================

All of the development work for the Omnipod driver is done by the community on a volunteer basis; we ask that you please be considerate and use the following guidelines when requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#androidaps* channel on **Discord** by using `this invite link <https://discord.gg/4fQUWHZ4Mw>`__.
-  **Level 2:** Search existing issues to see if your issue has already been reported; if not, please create a new `issue <https://github.com/nightscout/AndroidAPS/issues>`__ and attach your `log files <../Usage/Accessing-logfiles.html>`__.
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**



..
	Omnipod image aliases resource for referencing images by name with more positioning flexibility


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
	Pod Management Tab

.. |activate_pod|                  image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png
.. |deactivate_pod|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png
.. |discard_pod|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png
.. |play_test_beep|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png
.. |pod_history|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png
.. |pulse_log|                     image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pulse_log.png
.. |reset_rileylink_config|        image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png
.. |rileylink_stats|               image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png


..
	Instructional Section Images
	
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
		Acknowledge Alerts
.. |Acknowledge_Alerts_1|               image:: ../images/omnipod/Acknowledge_Alerts_1.png
.. |Acknowledge_Alerts_2|               image:: ../images/omnipod/Acknowledge_Alerts_2.png
.. |Acknowledge_Alerts_3|               image:: ../images/omnipod/Acknowledge_Alerts_3.png
.. |Acknowledge_Alerts_4|               image:: ../images/omnipod/Acknowledge_Alerts_4.png
.. |Acknowledge_Alerts_5|               image:: ../images/omnipod/Acknowledge_Alerts_5.png

..
	Actions Tab
.. |Actions_Tab|                  		image:: ../images/omnipod/Actions_Tab.png

..
	Activate Pod
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
	Deactivate Pod
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
