# Omnipod DASH

Bu talimatlar **Omnipod DASH** nesil pompayı yapılandırmak içindir **(Omnipod Eros DEĞİL)**. Omnipod sürücüsü, 3.0 sürümünden itibaren AndroidAPS'nin (AAPS) bir eklentisi olarak mevcuttur.

**Bu yazılım bir DIY (Kendin Yap) yapay pankreas çözümünün bir parçasıdır ve bir ürün değildir, ancak nasıl kullanılacağı da dahil olmak üzere sistemi okumanızı, öğrenmenizi ve anlamanızı gerektirir. Yazılımla yaptıklarınızdan yalnızca siz sorumlusunuz.**

## Omnipod DASH specifications

**Omnipod DASH**'ın özellikleri ve onu **Omnipod EROS**'dan ayıran özellikler şunlardır:

* DASH podları mavi bir iğne kapağıyla tanımlanır (EROS'un şeffaf bir iğne kapağı vardır). Podlar, fiziksel boyutlar açısından birbirinin aynıdır
* Bağlantı için ayrı bir BLE bağlantı/köprü cihazına gerek yoktur (RileyLink, OrangeLink veya EmaLink gerekmez).
* BT connection only when needed, connects to send command and disconnects right after !
* Artık "köprü cihazına bağlantı yok / pod" hataları yok
* AAPS komutları göndermek için pod erişilebilirliğini bekleyecek
* Aktifleştirmede, AAPS yeni bir DASH podunu bulacak ve bağlayacaktır.
* Beklenen menzil: 5-10 metre (YMMV)

## Hardware/Software Requirements

* Yeni bir **Omnipod DASH Pod** (Mavi iğne kapağıyla anlaşılır)

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* BLE Bluetooth bağlantısına sahip **Uyumlu Android telefon**
   -  Tüm telefon donanımları ve Android sürümlerinin çalışması garanti edilmez. Please check [**DASH Tested phones**](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY) or just try with your phone and tell us the result (phone reference and geographical region, Android version, worked / some difficulties / did not work).
   -  **For some phone models, this might be an issue** : **Be aware that AAPS Omnipod Dash driver Connects with the Dash POD via Bluetooth every time it sends a command, and it disconnects right after. The Bluetooth connections might be disturbed by other devices linked to the phone that is running AAPS, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.**
   -  **Version 3.0 or newer of AndroidAPS built and installed** using the [**Build APK**](../Installing-AndroidAPS/Building-APK.html#) instructions.
* [**Sürekli Glikoz İzleme (CGM)**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

Bu talimatlar, yeni bir pod oturumu başlattığınızı varsayacaktır; durum böyle değilse, lütfen sabırlı olun ve bir sonraki pod değişikliğinizde bu işleme başlayın.

## Başlamadan önce

**ÖNCE GÜVENLİK** - bir hatadan kurtulamayacağınız bir ortamda bu işlemi denemeyin (ekstra pod, insülin ve telefon cihazları olmazsa olmazdır).

**AAPS Dash sürücüsü podunuzu etkinleştirdikten sonra Omnipod Dash PDM'niz artık çalışmayacaktır.** Önceden Dash podunuza komut göndermek için Dash PDM'nizi kullanıyordunuz. Bir Dash podu, yalnızca tek bir cihazın kendisiyle iletişim kurmak için komutlar göndermesine izin verir. Podu başarıyla etkinleştiren cihaz, o andan itibaren onunla iletişim kurmasına izin verilen tek cihazdır. Bu Android telefonunuzla AAPS Dash sürücüsü aracılığıyla bir Dash podunu etkinleştirdiğinizde, **PDM'nizi artık o podla kullanamayacağınız anlamına gelir**. Android telefonunuzdaki AAPS Dash sürücüsü artık vekil PDM'nizdir.

*Bu PDM'nizi atmanız gerektiği anlamına GELMEZ, yedek olarak ve örneğin telefonunuz kaybolduğunda veya AAPS düzgün çalışmadığında acil durumlar için bir kenarda tutmanız önerilir.*

**Podunuz, AndroidAPS'ye bağlı olmadığında insülin vermeyi durdurmaz**. Varsayılan bazal oranlar, geçerli etkin profilde tanımlandığı gibi etkinleştirme sırasında poda programlanır. AndroidAPS çalışır durumda olduğu sürece, maksimum 120 dakika boyunca çalışan bazal oran komutları gönderir. Herhangi bir nedenle pod herhangi bir yeni komut almadığında (örneğin, Pod - telefon mesafesi nedeniyle iletişimin kesilmesi) pod otomatik olarak varsayılan bazal oranlarına geri dönecektir.

**30 dk Bazal Oranı Profilleri AndroidAPS'de DESTEKLENMEZ.** **AndroidAPS Profili, 30 dakikalık bir bazal oran zaman dilimini desteklemiyor.** AndroidAPS'de yeniyseniz ve bazal oran profilinizi ilk kez oluşturuyorsanız, yarım saatlik bazal oranların desteklenmediğini ve başlangıç için bazal oran profilinizi saatlik olarak ayarlamanız gerekeceğini lütfen unutmayın. Örneğin, 09:30'da başlayan ve 11:30'da biten 2 saatlik bir süresi olan 1,1 birimlik bir bazal oranınız varsa, bu çalışmayacaktır. Bu 1,1 birim bazal oranını 9:00-11:00 veya 10:00-12:00 zaman aralığına değiştirmeniz gerekecektir. Omnipod Dash donanımının kendisi 30 dakikalık bazal oran profili artışlarını desteklese de, AndroidAPS şu anda algoritmalarıyla bunları hesaba katamıyor.

## Enabling the Dash Driver in AAPS

Dash sürücüsünü AAPS'de **iki şekilde** etkinleştirebilirsiniz:

### Option 1: New installations

AndroidAPS'yi ilk kez kurarken, **Kurulum Sihirbazı**, AndroidAPS'yi yüklemeniz için size rehberlik edecektir. Pompa seçimine ulaştığınızda “DASH” seçeneğini seçin.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

Şüphe duyduğunuzda, AndroidAPS'yi kurduktan sonra “Sanal Pompa”yı ve daha sonra “DASH”ı da seçebilirsiniz (bkz. seçenek 2).

### Seçenek 2: Konfigürasyon ayarları

Mevcut bir kurulumda, Konfigürasyon ayarları altında **DASH** pompasını seçebilirsiniz:

Sol üst köşede **hamburger menüsü** seçilip **Konfigürasyon ayarları (1)**\ ➜\ **Pompa**\ ➜\ **Dash**\ ➜**Dişli Çark (3)** Dash satırındaki ** radyo butonu (2)** seçilir.

**Dişli çark (3)**'ın yanındaki **onay kutusu (4)**'nun seçilmesi, Dash menüsünün AAPS arayüzünde **DASH** başlıklı bir sekme olarak görüntülenmesini sağlar. Bu kutuyu işaretlemek, AAPS kullanırken DASH komutlarına erişiminizi kolaylaştıracaktır.

**NOT:** [**Dash ayarlarına**](#dash-settings) erişmenin daha hızlı bir yolunu, aşağıda bu dokümantasyonun Dash ayarları kısmında bulabilirsiniz.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Omnipod Sürücü Seçiminin Doğrulanması

Eğer kutucuğu (4) işaretlediyseniz, AAPS'de Dash pompasını etkinleştirdiğinizi doğrulamak için, **Giriş** sekmesinde **sola kaydırarak** **DASH** sekmesine ulaşmanız gerekir. Kutucuğu işaretlemediyseniz, sol üstteki hamburger menüsünde pompalar kısmında DASH satırında bulacaksınız.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## Dash Configuration

Lütfen **sola kaydırıp** tüm pod işlevlerini yönetebileceğiniz **DASH** sekmesine ulaşın.(bu işlevlerden bazıları etkin bir pod oturumu olmadan etkinleştirilmez veya görünmez):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) Refresh Pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) Pod Yönetimi (Etkinleştir, Devre Dışı Bırak, Test bip sesini çal ve Pod geçmişi)

### Pod Etkinleştirme

1. **DASH** sekmesine gidin. **POD YNTM (1)** butonuna ve ardından **Pod Etkinleştir (2) **butonuna tıklayın.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. **Podu Doldur** ekranı görüntülenir. Yeni bir podu en az 80 ünite insülinle doldurun ve podun kullanıma hazır olduğunu belirten iki bip sesini dinleyin. 3 gün boyunca ihtiyacınız olan toplam insülin miktarını hesaplarken, pod hazırlamanın ilave 3-10 ünite kullanacağını lütfen göz önünde bulundurun.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Yeni podun ve AAPS yüklü telefonun birbirine yakın olduğundan emin olun ve **İleri** butonunu tıklayın.

**NOT**: Aşağıdaki hata mesajını almanız durumunda (bu olabilir), panik yapmayın. **TEKRAR DENE** butonunu tıklayın. Çoğu durumda etkinleştirme başarıyla devam eder.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_pod_error.png)

3. **Pod'u Başlat** ekranında, pod hazırlanmaya başlar (pod kendini hazırlarken bir tıklama ve ardından bir dizi tıkırtı sesi duyarsınız).  Başarılı kullanıma hazırlamanın ardından yeşil bir onay işareti gösterilecek ve **İleri** butonu aktif olacaktır. Pod hazırlama işlemini tamamlamak ve **Pod Ekle** ekranını görüntülemek için **İleri** butonunu tıklayın.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Ardından, yeni podun infüzyon bölgesini hazırlayın. Podun plastik iğne kapağını çıkarın. Poddan dışarı çıkan bir şey görürseniz, işlemi iptal edin ve yeni bir pod ile başlayın. Her şey yolunda görünüyorsa, yapışkanın arkasındaki beyaz kağıdı çıkarın ve podu vücudunuzdaki seçtiğiniz bölgeye uygulayın. Bitirdiğinizde, **İleri** butonunu tıklayın.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. **Pod Ekle** iletişim kutusu şimdi görünecektir. **Kanülü vücudunuza yerleştirmeye hazırsanız Tamam düğmesini tıklayın**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. **Tamam**'a bastıktan sonra, Dash podunun yanıt vermesi ve kanülü yerleştirmesi biraz zaman alabilir (en fazla 1-2 dakika), bu yüzden sabırlı olun.

 *NOT: Kanül takılmadan önce, kanül yerleştirme noktasının etrafındaki cildi sıkıştırmak iyi bir uygulamadır. Bu iğnenin düzgün bir şekilde yerleştirilmesini sağlar ve tıkanıklık oluşturma şansınızı azaltır.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. Başarılı bir kanül yerleştirilmesinden sonra yeşil bir onay işareti görünür ve **İleri** butonu aktif olur. **İleri** butonunu tıklayın.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. **Pod etkinleştirildi** ekranı görüntülenir. Yeşil **Bitti** düğmesini tıklayın. Tebrikler! Artık yeni bir aktif pod oturumu başlattınız.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. **Pod yönetimi** menüsünde şimdi **Pod Etkinleştir (1)** butonu <em x-id"3"=>devre dışı</em> olmalı ve **Pod'u Devre Dışı Bırak (2)** butonu *aktif olmalıdır.*. Bunun nedeni, bir podun artık etkin olması ve o anda etkin olan podu devre dışı bırakmadan ek bir pod etkinleştirememenizdendir.

    **DASH** sekme ekranına dönmek için telefonunuzdaki geri düğmesini tıklayın. Şimdi aktif pod oturumunuz için mevcut bazal oran, pod rezervuar seviyesi, iletilen insülin, pod hataları ve uyarılar dahil Pod bilgileri görüntülenecektir.

    Görüntülenen bilgilerle ilgili daha fazla ayrıntı için bu dokümantasyonun [**DASH Sekmesi**](#dash-tab) bölümüne gidin.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

Podu etkinleştirdikten SONRA ayarları dışa aktarmak akıllıca olacaktır. Bunu her pod değişikliğinde yapın ve ayda bir dışa aktarılan dosyayı internet sürücünüze (cloud) kopyalayın. [**Dışarı aktarma ayarları dokümantasyonuna bakabilirsiniz **](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html?highlight=exporting#export-import-settings).


### Pod'u Devre Dışı Bırakma

Normal koşullar altında, bir podun beklenen ömrü üç gündür. (72 saat) Pod sona erme uyarısından sonra ek 8 saattlik süre ile toplam 80 saat olabilir.

Bir Podu devre dışı bırakmak (süre sonundan veya bir pod hatasından dolayı):

1. **DASH** sekmesine gidin, **POD YNTM (1)** butonunu tıklayın, **pod yönetimi** ekranında **Pod'u Devre Dışı Bırak (2)** butonunu tıklayın.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. **Pod'u Devre Dışı Bırak** ekranında, podu devre dışı bırakma işlemini başlatmak için **İleri** butonunu tıklayın. Devre dışı bırakmanın başarılı olduğuna dair poddan bir onay bip sesi alacaksınız.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg) ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. Başarılı bir şekilde devre dışı bırakmanın ardından yeşil bir onay işareti görünecektir. Pod devre dışı ekranını görüntülemek için **İleri** butonunu tıklayın. Etkin oturum devre dışı bırakıldığı için artık podunuzu çıkartabilirsiniz.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. **Pod Yönetimi** ekranına dönmek için yeşil butona tıklayın.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Artık **Pod Yönetimi** menüsündesiniz; **DASH** sekmesine dönmek için telefonunuzdaki geri butonuna basın. **Pod durumu:** alanında bir **Aktif pod yok** mesajının görüntülendiğini doğrulayın.

![Deactivate_Pod_7](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_7.png) ![Deactivate_Pod_8](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_8.jpg)

### İnsülin İletimini Sürdür

**Not**: Profil geçişleri sırasında dash, yeni bazal profili ayarlamadan önce iletimi askıya almalıdır. İki komut arasında iletişim başarısız olursa, iletim askıya alınabilir. Daha fazla ayrıntı için sorun giderme bölümündeki [**İletim askıya alındı**](#delivery-suspended) konusunu okuyun.

Aktif şu anda askıya alınmış Pod'unuzun insülin iletimini yeniden başlatma talimatı vermek için bu komutu kullanın. Komut başarıyla işlendikten sonra insülin, aktif bazal profilden geçerli zamana dayalı olarak mevcut bazal oranı kullanarak normal iletimi sürdürecektir. Pod bolus, GBO ve SMB için komutları tekrar kabul edecektir.

1. **DASH** sekmesine gidin ve **Pod durumu (1)** satırında **ASKIYA ALINDI** mesajının görünmesi gerekir, ardından mevcut podun normal insülin iletimini sürdürmesi talimatını vermek için **İLETİME DEVAM ET (2)** butonuna basın. **Pod Durumu (3)** satırında **İleme Devam Et** mesajı görüntülenir.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. İletimi sürdür komutu başarılı olduğunda, bir onay iletişim kutusu **İnsülin iletimi yeniden başlatıldı.** mesajını görüntüler. Onaylamak ve devam etmek için **Tamam**'ı tıklayın.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. **DASH** sekmesi, **Pod durumu (1)** satırını **ÇALIŞIYOR** olarak günceller ve **İletime Devam Et** butonu artık görüntülenmez.

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Silencing Pod Alerts

*NOT - ALARMLARI SUSTUR butonu yalnızca **DASH** sekmesinde pod sona erme veya düşük rezervuar uyarısı tetiklendiğinde kullanılabilir. Alarmları Sustur butonu görünmüyorsa ve poddan bip sesleri duyuyorsanız, 'Pod durumunu yenilemeyi' deneyin.*

Aşağıdaki süreç, aktif 72 saatlik (3 gün) pod süresi sona ermeden önce uyarı süresi sınırına ulaştığında pod bip seslerini nasıl onaylayacağınızı ve kapatacağınızı gösterecektir. Bu uyarı zaman sınırı, Dash uyarıları ayarında **Kapanmadan kaç saat önce?** satırında tanımlanır. Bir pod'un maksimum ömrü 80 saattir (3 gün 8 saat), ancak Insulet 72 saat (3 gün) sınırının aşılmamasını önermektedir.

1. Tanımlanan **Kapanmadan kaç saat önce?** uyarı süresi sınırına ulaşıldığında, pod sona erme zamanına yaklaştığını size bildirmek için uyarı bip sesleri çıkaracak ve yakında pod değişikliği gerekecektir. Bunu **DASH** sekmesinde doğrulayabilirsiniz, **Pod Sona Erme: (1)** satırı tam zamanı gösterecektir. Pod'un süresi dolar (etkinleştirmeden 72 saat sonra) ve bu süre geçerse metin **kırmızı** olacaktır. **Etkin pod alarmları (2)** satırında, **Pod'un süresi yakında dolacak** durum mesajı görüntülenir. Bu aynı zamanda **ALARMLARI SUSTUR (3)** butonunun görüntülenmesini de tetikler.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. **DASH** sekmesine gidin ve **ALARMLARI SUSTUR (2)** butonuna basın. AAPS, pod sona erme uyarı bip seslerini devre dışı bırakmak için pod'a komutu gönderir ve **Pod durumu (1)** satırını **BİLİNEN UYARILAR ** olarak günceller.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Uyarıların **başarıyla devre dışı bırakılması** üzerine, etkin pod tarafından **2 bip** sesi verilir ve bir onay iletişim kutusunda **Etkin alarmlar susturuldu.** mesajı görüntülenir. İletişim kutusunu onaylamak ve kapatmak için **Tamam** butonunu tıklayın.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. **DASH** sekmesine gidin. **Etkin Pod Alarmları** satırında, uyarı mesajı artık görüntülenmez ve etkin pod artık sona erme uyarısı bip sesi vermez.

### Pod Geçmişini Görüntüle

Bu bölüm, aktif pod geçmişinizi nasıl gözden geçireceğinizi ve farklı eylem kategorilerine göre nasıl filtreleyeceğinizi gösterir. Pod geçmişi aracı, üç günlük (72 - 80 saat) ömrü boyunca şu anda etkin olan pod'unuza yönelik eylemleri ve sonuçları görüntülemenize olanak tanır.

Bu özellik, pod'a gönderilen bolusların, GBO'larin ve bazal komutların doğrulanmasında yardımcı olur. Kalan kategoriler, genel olarak sorunları gidermek ve bir arızaya yol açan olayların sırasını belirlemek için kullanışlıdır.

*NOT:* **Yalnızca son komut belirsiz olabilir**. **son 'belirsiz' komut 'onaylanan' veya 'reddedilen'** olana kadar yeni komutlar *gönderilmeyecektir*. Belirsiz komutları 'düzeltmenin' yolu, **'pod durumunu yenilemek'**tir.

1. **DASH** sekmesine gidin ve **POD YNTM (1)** butonuna basarak **Pod Yönetimi** menüsüne gidin ve ardından pod geçmişi ekranına erişmek için **Pod geçmişi (2)** butonuna basın.

![Pod_history_1](../images/DASH_images/Pod_History/Pod_history_1.jpg) ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. **Pod geçmişi ** ekranında, **All (1)** (Tümü) varsayılan kategorisi ile tüm pod **Eylemleri (3)** ve **Sonuçları (4)** **Tarih ve Saat (2)** ters kronolojik sırada görüntülenir. Ana AAPS arayüzünde **DASH** sekmesine dönmek için telefonunuzun **geri butonunu 2 kez** kullanın.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

## DASH Tab

Aşağıda, ana AAPS arayüzündeki **DASH** sekmesindeki simgelerin ve durum satırlarının düzeninin ve anlamının bir açıklaması bulunmaktadır.

*NOT: **DASH** sekmesi durum satırları raporunda herhangi bir mesaj varsa (belirsiz), bunu temizlemek ve pod durumunu yenilemek için Yenile butonuna basmanız gerekir.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Alanlar

* **Bluetooth Adresi:** Bağlı Pod'un mevcut bluetooth adresini görüntüler.
* **Bluetooth Durumu:** Mevcut bağlantı durumunu görüntüler.
* **Sıra Numarası:** Etkin POD'un sıra numarasını görüntüler.
* **Firmware Versiyonu:** Etkin bağlantının firmware sürümünü görüntüler.
* **Pod üzerindeki zaman:** Bölmedeki geçerli saati görüntüler.
* **Pod Sona Erme:** Pod'un süresinin dolacağı tarih ve saati görüntüler.
* **Pod durumu:** Pod durumunu görüntüler.
* **Son bağlantı:** Pod ile son iletişimin zamanını görüntüler.

   - *Biraz önce* - 20 saniyeden kısa bir süre önce.
   - *Bir dakikadan kısa bir süre önce* - 20 saniyeden uzun, ancak 60 saniyeden kısa bir süre önce.
   - *1 dakika önce* - 60 saniyeden uzun ancak 120 saniyeden kısa (2 dakika)
   - *XX dakika önce* - XX değeriyle tanımlanan 2 dakikadan daha uzun bir süre önce

* **Son bolus:** Etkin pod'dan gönderilen son bolus miktarını ve ne kadar süre önce verildiğini parantez içinde görüntüler.
* **Bazal oranı:** Bazal oran profilinden geçerli zaman için programlanmış bazal oranı görüntüler.
* **Geçici bazal oranı:** Şu anda çalışmakta olan Geçici Bazal Oranı aşağıdaki biçimde görüntüler

   - {Units per hour} @{TBR start time}  ({minutes run}/{total minutes TBR will be run})
   - *Örnek:* 0,00Ü/s @18:25 ( 90/120 dakika)

* **Rezervuar:** Rezervuarda 50 üniteden fazla insülin olduğuda 50+Ü'den fazla kalanı gösterir. 50 Ü'nin altında, tam birimler görüntülenir.
* **Toplam iletilen:** Rezervuardan iletilen toplam insülin ünite miktarını görüntüler. Bu miktar etkinleştirme ve hazırlama için kullanılan insülini de içerir.
* **Hatalar:** Karşılaşılan son hatayı görüntüler. Geçmiş hatalar ve daha ayrıntılı bilgiler için [Pod geçmişini](#view-pod-history) ve günlük dosyalarını inceleyin.
*  **Etkin pod alarmları:** Etkin pod alarmlarını gösteren satırdır.

### Butonlar


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : İletişimi güncellemek için aktif pod'a bir yenileme komutu gönderir.

   * Use to refresh the pod status and dismiss status fields that contain the text (uncertain).
   * See the Troubleshooting section below for additional information.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

   * Button is displayed only when pod time is past expiration warning time.
   * Upon successful dismissal, this icon will no longer appear.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod.

### Pod Yönetim Menüsü

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (0)** button from the **DASH** tab. ![DASH_Tab_2](../images/DASH_images/DASH_Tab/DASH_Tab_2.png) ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 1 - [**Activate Pod**](#activate-pod) : Primes and activates a new pod.
* 2 - [**Deactivate Pod**](#deactivate-pod) : Deactivates the currently active pod.
* 3 - **Play Test Beep** : Plays a single test beep on the pod when pressed.
* 4 - [**Pod history**](#view-pod-history) : Displays the active pod activity history.

## Dash Settings

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. **Dişli çark (3)**'ın yanındaki **onay kutusu (4)**'nun seçilmesi, Dash menüsünün AAPS arayüzünde **DASH** başlıklı bir sekme olarak görüntülenmesini sağlar.

![Dash_settings_1](../images/DASH_images/Dash_settings/Dash_settings_1.png) ![Dash_settings_2](../images/DASH_images/Dash_settings/Dash_settings_2.png)

**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Ayar grupları aşağıda listelenmiştir; aşağıda açıklanan çoğu giriş için bir geçiş anahtarı aracılığıyla etkinleştirebilir veya devre dışı bırakabilirsiniz:

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### Onay Bildirimleri

Bolus, bazal, SMB ve GBO iletimi ve değişiklikleri için pod üzerinden onay bip sesleri sağlar.

* **Bolus beeps enabled:** Enable or disable confirmation beeps when a bolus is delivered.
* **Basal beeps enabled:** Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.
* **SMB beeps enabled:** Enable or disable confirmation beeps when a SMB is delivered.
* **TBR beeps enabled:** Enable or disable confirmation beeps when a TBR is set or canceled.

### Alarmlar

Provides AAPS alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Pod uyarılarının etkinleştirildiğini otomatik olarak onaylamadıkça, bildirimin reddedilmesi uyarıyı KAPATMAZ. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.

### Bildirimler

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPs is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.
* **Sound when delivery suspended notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when suspend delivery was successfully delivered.

### Diğer

* **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

## Eylemler (EYLEM) Sekmesi

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod Dash pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** filds will have their **age reset** to 0 days and 0 hours **after each pod change**. Bu Omnipod pompasının yapılış ve çalışma şekli nedeniyle yapılır. Pod, kanülü doğrudan pod uygulama bölgesinde deriye yerleştirdiği için, Omnipod pompalarında geleneksel hortum kullanılmaz. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours). The **pump battery** and **insulin reservoir** are self contained inside of each pod.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Insulin level displayed is the amount reported by Omnipod DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The omnipod DASH overview tab will display as described the below:

  * **Above 50 Units** - The Pod reports more than 50 units currently in the reservoir.
  * **Below 50 Units** - The amount of insulin remaining in the reservoir as reported by the Pod.

Additional note:
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Daha yeni sürümler, 50 ünite üzerinde olduğunda 50+ değerini bildirir.

## Sorun giderme

### Delivery suspended

  * There is no suspend button anymore. If you want to "suspend" the pod, you can set a zero TBR for x minutes.
  * During profile switches, dash must suspend delivery before setting the new basal profile. If communication fails between the two commands, then delivery can stay suspended. When this happens:
     - There will be no insulin delivery, that includes Basal, SMB, Manual bolusing etc.
     - There might be notification that one of the commands is unconfirmed: this depends on when the failure happened.
     - AAPS will try to set the new basal profile every 15 minutes.
     - AAPS will show a notification informing that the delivery is suspended every 15min, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#resume-delivery) button will be active if the user chooses to resume delivery manually.
     - If AAPS fail to resume delivery on its own (this happens if the Pod is unreachable, sound is muted, etc), the pod will start beeping 4 time every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20minutes.
  * For unconfirmed commands, "refresh pod status" should confirm/deny them.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### Pod Hataları

Pod'lar Pod'un kendisiyle ilgili donanım sorunları da dahil olmak üzere çeşitli sorunlar nedeniyle ara sıra başarısız oluyor. AAPS onaylanmış bir kullanım şekli olmadığından, bunları Insulet'e bildirmemek en iyi seçenektir. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### 49 numaralı Pod hatasını önleme

Bu hata bir komut için yanlış bir pod durumu veya bir insülin iletim komutu sırasındaki bir hata ile ilgilidir. This is when the driver and Pod disagree on the actual state. The Pod (out of a build-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### Pompaya Ulaşılamıyor Uyarıları

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### Export  Settings

Exporting AndroidAPS settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling AndroidAPS or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore AndroisAPS settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active Pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### Import Settings

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. Make sure you are importing settings that were recently exported with the currently active Pod.
2. Import your settings
3. Check all preferences

**Importing (no active Pod session)**

1. Importing any recent export should work (see above)
2. Import your settings.
3. Check all preferences.
4. You may need to **Deactivate** the "non exixting" pod if the imported settings included any active pod data.

### Importing settings that contain Pod state from an inactive Pod

When importing settings containing data for a Pod that is no longer active, AndroidAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old Pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new Pod.

### Reinstalling AndroidAPS

When uninstalling AndroidAPS you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make also sure that you have an export for the current Pod session or you will lose the currently active Pod when importing older settings.

1. Ayarlarınızı dışa aktarın ve bir kopyasını güvenli bir yerde saklayın.
2. Uninstall AndroidAPS and restart your phone.
3. Install the new version of AndroidAPS.
4. Import your settings
5. Verify all preferences (optionally import settings again)
6. Activate a new Pod
7. When done: Export current settings

### Updating AndroidAPS to a newer version

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. Export your settings.
2. Install  the new AndroidAPS version.
3. Verify the installation was successful
4. RESUME the Pod or activate a new Pod.
5. When done: Export current settings.

### Omnipod sürücü uyarıları

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. Karşılaşabileceğiniz başlıca uyarıların bir özeti aşağıda listelenmiştir:

* No active Pod No active Pod session detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically be silenced.
* Pod suspended Informational alert that Pod has been suspended.
* Setting basal profile failed : Delivery might be suspended! Lütfen Omnipod sekmesindeki Pod durumunu manuel olarak güncelleyin ve gerekirse teslimi devam ettirin.. Informational alert that the Pod basal profile setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* SMB bolusunun başarılı olup olmadığı doğrulanamıyor. Bolus'un başarılı olmadığından eminseniz, SMB girişini Tedaviler'den manuel olarak kaldırmalısınız. Alert that the SMB bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.
* "Görev bolus/GBO/SMB"nin tamamlanıp tamamlanmadığı belirsizse, lütfen başarılı olup olmadığını manuel olarak doğrulayın.

## Where to get help for Omnipod DASH driver

All of the development work for the Omnipod DASH driver is done by the community on a **volunteer** basis; we ask that you to remember that fact and use the following guidelines before requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#androidaps* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../Usage/Accessing-logfiles.html).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**
