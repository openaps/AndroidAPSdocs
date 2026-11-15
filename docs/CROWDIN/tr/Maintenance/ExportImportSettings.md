# Yedek oluşturma ve geri yükleme

AAPS'i telefonunuza yüklediğinizde telefon, her gün güvendiğiniz bir "tıbbi cihaz" olur. Telefonunuz bozulduğunda, çalındığında veya kaybolduğunda kullanmak için bir acil durum yedek planınızın olması kesinlikle önerilir. Bu yüzden kendinize "Ya şöyle olursa?" diye sorarak hazırlık yapmanız çok önemlidir.

AAPS kurulumunuzu mevcut veya yeni bir telefona geri yüklemek için aşağıdaki öğeleri güvenli bir yerde (yani telefonunuzda değil) saklamanız önemlidir. En iyi yöntem, en az iki ayrı yedek tutmaktır: yerel bir sabit diskte, USB bellekte ve (tercihen) Google Drive veya Microsoft 365 OneDrive gibi bir bulut depolama alanında. Yedeklerinizi bulutta saklarsanız, kurulumunuzu her yerde ve her zaman geri yüklemek için gereken her şeye telefonunuzdan erişebilirsiniz.

İkinci bir yedek telefon edinmeyi ve yedek telefonun beklendiği gibi çalıştığından emin olmak için AAPS'i geri yüklemeyi denemeyi düşünün. Bu adım, acil durum planınızın işe yaradığından ve ana telefonunuz kullanılamaz hâle gelirse AAPS'i sorunsuz şekilde kullanmaya devam edebileceğinizden emin olmanızı sağlar.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
**AAPS** 4.0'dan beri ayarlar telefonda şifreli bir depoda tutulur ve Google yedeklemesine ve yeni bir telefona telefondan telefona aktarıma dahil edilmez. Ayarları taşımanın tek yolu, bu sayfada anlatılan ayar dışa aktarımıdır.
```

Geri yükleyebilmek için aşağıdaki öğelerin elinizde olması önemlidir:

- **Android Studio anahtar deposu dosyanız** ve ilgili **parolası**: AAPS .APK yükleme dosyasını (yeniden) oluşturmak için gereklidir.
- **AAPS yükleme .APK dosyasının** güncel bir kopyası
- Güncel bir **ayar dışa aktarma** dosyası: Önemli ayarları (görevleriniz dâhil!) geri yüklemek için.
- **AAPS ana parolanız**
- Ek yardımcı uygulamaların yedekleri: BYODA ve/veya xDrip gibi.
- Kurulumunuzla ilgili kişisel notlar.

Aşağıda yedeklenmesi önerilen öğeler yer alıyor.

## Yedek oluşturma

### APK'yı oluşturmak için kullandığınız bilgisayardaki anahtar deposu dosyası
Android Studio .APK yükleme dosyanızı oluştururken **.APK yükleme dosyasını imzalamak için anahtar deposu dosyasını ve parolasını** kullanır. Mevcut AAPS kurulumunuzu güncellemek için güncelleme .APK yükleme dosyasının ilk kurulumda kullanılan anahtar deposuyla imzalanması gerekir. Güncelleme sırasında tüm ayarlar ve AAPS veritabanı korunur. Bu olmadan önce mevcut uygulamayı kaldırmanız, ardından AAPS'i [yeniden yüklemeniz](#reinstall-aaps) ve yeniden yapılandırmanız gerektiğini unutmayın.

Anahtar deposunu ve ilgili parolayı saklamak, ileride APK'yı güncellemeyi çok kolaylaştırır; özellikle uygulamayı yeni bir bilgisayarda oluşturmanız gerekirse. Yeni bir APK oluştururken anahtar deposunun nasıl kullanılacağı hakkında ayrıntılar için [AAPS'i güncelleme](../Maintenance/UpdateToNewVersion.md) bölümüne bakın.

**Ne zaman yedeklenmeli:** Anahtar deposu, **AAPS** .APK yükleme dosyasını ilk kez oluşturduktan sonra yedeklenmelidir.

**Nasıl yedeklenir:** Anahtar deposu yolunuzu bulun. Hatırlamıyorsanız Android Studio'da **Build > APK > Next** seçerek bulabilirsiniz. Yol, “Key store path” alanında gösterilir. Dosya gezgininizle bu yola gidin ve anahtar deposu dosyanızın (dosya uzantısı `.jks`) bir kopyasını alın. Bilgisayarınız kullanılamaz hâle gelirse diye bunu güvenli bir bulut konumuna kaydedin. Anahtar deposu parolanızı (key store password), anahtar takma adınızı (key alias) ve anahtar parolanızı (key password) da not ettiğinizden emin olun.

### En son APK'nın kopyaları
Ana **AAPS** telefonunuz kaybolur veya hasar görürse, elinizde APK'nın bir kopyasının olması yeni bir telefonla **AAPS**'i hızla kullanmaya devam etmenizi sağlar. Not: Aşağıda anlatıldığı gibi tercihlerinizin de yedeklenmiş olması gerekir.

**Ne zaman yedeklenmeli:** Ana **AAPS** telefonunuza yüklediğiniz en son APK'nın bir yedeğini saklamalısınız. Herhangi bir nedenle eski sürüme geri dönmeniz gerekirse diye bir önceki sürümü de saklamak isteyebilirsiniz.

**Nasıl yedeklenir:** APK'yı Android Studio ile oluşturmak için kullandığınız bilgisayarda bir kopya saklayın. Ayrıca yükleme APK'sının bir kopyasını saklamak için bir bulut platformu kullanmanız önerilir. Gerektiğinde iki yedeği de nasıl bulacağınızı bildiğinizden emin olun. Bu yedekleri saklamak için ayrı klasörler oluşturmayı düşünün.

### AAPS ayar dosyası ('Tercihler' olarak da adlandırılır)

```{admonition} Where are preferences stored on my phone?
:class: tip
Ayarlarınızı, [AAPS kurulumu](#SetupWizard-StoragePermission) sırasında seçtiğiniz **AAPS Dizini** içinde bulabilirsiniz.</br>
**AAPS dizini** ayarını **Bakım** ekranından da değiştirebilirsiniz (**menü** (☰) > **Bakım**), bkz. [Yerel AAPS dizinini ayarlama](#preferences-maintenance-logdirectory).
```

APK yükleme dosyasının bir kopyası (yukarıya bakın) ve **Ayarlar** dosyanızla mevcut veya yeni bir telefonda hızla yeniden çalışmaya başlayabilirsiniz.

**Ayarlar** dosyası, AAPS uygulamasını kendi kurulumunuza uyarlamak için kullanılır. Bunlar **Konfigürasyon** ayarlarınız, görev durumunuz, üçüncü taraf iletişim ayarları (ör. Nightscout, Tidepool), otomasyonlar ve profiller gibi bilgileri içerir.

AAPS ayarlarını bir dosyaya dışa aktarmak, yapılandırmayı belirli bir zamandaki hâline geri yüklemenizi sağlar. Belirtildiği gibi, dışa aktarma dosyası tüm yapılandırma ayarlarının yanında görevlerinizin durumunu da içerir; AAPS'i **(yeniden) yüklerken** bunu geri yüklemeniz gerekir. Bu olmadan kapalı döngüyü etkinleştirmek için tüm görevleri baştan yeniden yapmanız gerekir. Ayar dosyaları, yapılandırma değişikliklerini geri almak için "bilinen son iyi" ayarları geri yüklemenizi de sağlar.

**AAPS ayarları ne zaman yedeklenmeli:**
* İlerlemenizi kaybetmemek için her görevi tamamladığınızda. _**Ayarlarınızın** bir kopyası olmadan, AAPS'i yeniden yüklemeniz veya telefonunuzu değiştirmeniz gerekirse tüm görevleri yeniden tamamlamanız gerekir._

* Yapılandırmanızda önemli değişiklikler yapmayı planladığınızda (SMB ayarlarını değiştirmek, insülin türünü değiştirmek, pompa değiştirmek, otomasyonlarda değişiklik yapmak gibi) **Ayarlarınızı** değişikliklerden önce ve sonra yedeklemelisiniz. Böylece hem en son ayarlarınız hem de değişikliklerden önceki hâlinin bir kopyası elinizde olur; gerekirse eski ayarlara geri dönebilirsiniz.

* Yalnızca hortumsuz pompa (Omnipod ve Medtrum gibi) kullanıcıları için: **Ayarlar** dosyası mevcut Pod'unuzun bağlantı bilgilerini içerir ve yeni bir telefonla bu Pod'a yeniden bağlanmak için kullanılabilir. Mevcut Pod'unuzu başlattıktan sonra dışa aktarılmış bir tercih dosyanız yoksa, telefonunuzu değiştirmeniz gerektiğinde yeni bir Pod başlatmanız gerekir.

**Elle yedekleme nasıl yapılır:**

1. **Ayarları** ilk kez içe veya dışa aktarıyorsanız [Ayarlar > Koruma](#Preferences-master-password) bölümünde bir ana parola belirlemeniz gerekir. Bir parola belirleyin ve bunu güvenli bir yere not edin. _Bu parola olmadan **Ayarlar** yedeklerinize erişemezsiniz._

2. **AAPS** ana ekranında **menüyü** (☰) açın > **Bakım**. Dosyanın nereye kaydedileceğini **Ayarları dışa aktar** yanındaki **Yerel** ve **Bulut** çipleriyle seçin (aşağıdaki **Ayarları dışa veya içe aktarma** bölümüne bakın), ardından **Ayarları dışa aktar** seçeneğine dokunun. **AAPS** dosyanın nereye gideceğini gösterir: **Yerel** için dosya adını, **Bulut** için **Google Drive**'ı. **Tamam**'a dokunun.

   ![Ayarları yerel bir dosyaya dışa aktarma](../images/Maintenance/export_settings_confirm_local.png)

   ![Ayarları Google Drive'a dışa aktarma](../images/Maintenance/export_settings_confirm_cloud.png)

   Yukarıda belirlediğiniz ana parolayı yazın ve **Tamam**'a dokunun.

   ![Dışa aktarma için ana parola](../images/Maintenance/export_settings_password.png)

   **Ayarlar dışa aktarıldı** (yerel) veya **Bulut aktarımı başarılı** (bulut) mesajı dışa aktarmayı onaylar.

   ![Ayarlar dışa aktarıldı mesajı](../images/Maintenance/export_settings_done_local.png)

   ![Bulut aktarımı başarılı mesajı](../images/Maintenance/export_settings_done_cloud.png)

3. Telefonunuzdaki dosya gezginiyle (genellikle “Dosyalar” veya “Dosyalarım” olarak adlandırılır) Dahili depolama > AAPS > preferences klasörüne gidin. Burada dışa aktarılan tüm tercih dosyalarının bir kopyasını görürsünüz. Dosya adı `YYYY-MM-DD_Time_appname.json` biçiminde olmalıdır. Bu dosyayı seçtiğiniz bulut platformuna yükleyin. Ardından bulut platformundan yerel bilgisayarınıza da bir kopya indirin.

(ExportImportSettings-Settings-Export)=

## Ayarları dışa aktarma

```{admonition} Where are preferences stored on my phone?
:class: tip
Ayarlarınızı, [AAPS kurulumu](#SetupWizard-StoragePermission) sırasında seçtiğiniz **AAPS Dizini** içinde bulabilirsiniz.</br>
**AAPS dizini** ayarını **Bakım** ekranından da değiştirebilirsiniz (**menü** (☰) > **Bakım**), bkz. [Yerel AAPS dizinini ayarlama](#preferences-maintenance-logdirectory).
```

Özellikle yapılandırma değişikliklerinden önce ve sonra ayarları düzenli olarak dışa aktarmanız önerilir. Dışa aktarmayı **elle veya (tercihen) otomasyonla** yapabilirsiniz. AAPS ana parolanızı not ettiğinizden ve ayar dosyalarınızı telefonunuzdan örneğin bir bulut depolama konumuna kopyalayarak yedeklediğinizden emin olun.

**Not**: _Dışa aktarılan ayarlar AAPS ana parolanızla şifrelenir: dışa aktarmada kullanılan ana parola olmadan ayar dosyasını içe aktaramazsınız!_

If you forgot your master password, you can [reset it](#FAQ-reset-master-password), but settings files exported with the old password still need the old one.

### Ayarları dışa veya içe aktarma
Ayarları dışa veya içe aktarmak için **menüyü** (☰) açın ve **Bakım**'ı seçin. **Dosya yönetimi** altında, **Ayarları dışa aktar** ve **Ayarları içe aktar** yanındaki **Yerel** ve **Bulut** çipleri, ayar dosyasının nereye kaydedileceğini veya nereden okunacağını seçer: **Yerel**, telefonunuzdaki AAPS dizinidir; **Bulut** ise bir [Bulut Dizini](#preferences-maintenance-cloud) ayarlandıktan sonra kullanılabilir. Bir çipe dokunmak onu açar veya kapatır; her zaman en az biri seçili kalır ve iki satır aynı seçimi paylaşır. Ardından başlatmak için **Ayarları dışa aktar** veya **Ayarları içe aktar** seçeneğinin kendisine dokunun.

![Ayarları dışa aktar ve Ayarları içe aktar satırlarını gösteren Bakım menüsü](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Ayarları dışa aktarmayı otomatikleştirme

Ayarları otomatik olarak dışa aktarmak için [(**bkz. Otomasyon**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) [**Ayarlar** > **Bakım**](#preferences-maintenance-settings) bölümünü açın, **Gözetimsiz Ayarlar Dışa Aktarımı** bölümünü genişletin ve **Otomatik ayar dışa aktarımını etkinleştir** seçeneğini açın.

Artık [Otomasyon](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) ile ayarları düzenli olarak (_örneğin_ her hafta) veya bir Pod değişiminden sonra dışa aktarabilirsiniz.

_**Not:** Ayarları içe aktarırken kullanıcının her zaman AAPS ana parolasını girmesi gerekir!_

![Otomatik ayar dışa aktarımını etkinleştir anahtarıyla Ayarlar > Bakım > Gözetimsiz Ayarlar Dışa Aktarımı](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Yeni bir telefonda veya yeni bir AAPS kurulumunda yedeklerinizden geri yükleme

```{admonition} Where are preferences stored on my phone?
:class: tip
Ayarlarınızı, [AAPS kurulumu](#SetupWizard-StoragePermission) sırasında seçtiğiniz **AAPS Dizini** içinde bulabilirsiniz.</br>
**AAPS dizini** ayarını **Bakım** ekranından da değiştirebilirsiniz (**menü** (☰) > **Bakım**), bkz. [Yerel AAPS dizinini ayarlama](#preferences-maintenance-logdirectory).</br>
**AAPS** bu dizine erişimi kaybederse (bu, yeniden yüklemeden veya uygulamanın depolama alanını temizledikten sonra olabilir), **AAPS dizinine erişim kaybedildi** bildirimini gösterir ve siz [dizini yeniden seçene](#preferences-maintenance-logdirectory) kadar ayarları telefona kaydetmeyi durdurur.
```

APK'nızın ve **Ayarlarınızın** yeni bir telefona yüklemek istediğiniz bir yedeği varsa veya herhangi bir nedenle mevcut telefonunuzda APK'yı silip yeniden yüklemeniz gerektiyse bu talimatları kullanın.

_**AAPS**'i aynı anahtar deposuyla oluşturulmuş bir APK ile güncelliyorsanız bu işlemi izlemeniz gerekmez. Yine de güncellemeyi uygulamadan önce bir yedek oluşturmanız önerilir._

**AAPS**'i özgün anahtar deponuzu kaybettikten veya değiştirdikten sonra güncelliyorsanız (örneğin anahtar deposunu aktarmadan yeni bir derleme bilgisayarı kullanıyorsanız), tüm ayarları yukarıda anlatıldığı gibi yedeklediğinizden emin olun ve ardından telefonunuzdaki mevcut **AAPS** sürümünü kaldırın. Tüm işlem için [Yeni bir anahtar deposuyla AAPS'i yeniden yükleme](#reinstall-aaps) bölümüne bakın.

Gerekirse aşağıdaki adımlardan önce [CGM/KŞ kaynağı alıcınızı kurun](../Getting-Started/CompatiblesCgms.md)

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
**Tercihler** dosyası, dışa aktardığınız anda etkin olan Pod veya Patch oturumunu içerir.
- **Her Pod veya Patch etkinleştirmesinden hemen sonra dışa aktarın** ve dosyayı telefonunuzun dışına kopyalayın.
- **Aynı telefon, Pod hâlâ çalışıyor:** **Pompa ayarlarını da değiştir** kutusunu işaretlemeyin. Mevcut Pod'unuz korunur ve yalnızca diğer ayarlar içe aktarılır.
- **Pod'u yeni telefon devralıyor:** **Pompa ayarlarını da değiştir** kutusunu işaretleyin ve yalnızca şu anda taktığınız Pod sırasında dışa aktarılmış bir dosya kullanın. Daha önceki bir Pod'a ait dosya mevcut Pod oturumunuzun yerine geçer ve yeni bir Pod başlatmanız gerekir.
- **Eski bir Pod oturumu yanlışlıkla içe aktarıldı:** **AAPS** o Pod'a ulaşmaya çalışmaya devam eder ve yeni bir Pod etkinleştiremezsiniz. Pod'u devre dışı bırakın; bu başarısız olursa Pod'u çıkarın (Omnipod DASH için örneğin [Pod'u çıkarma](#omnipod-dash-discard-pod) bölümüne bakın).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
Varsayılan olarak içe aktarma pompa ayarlarınıza dokunmaz: **Konfigürasyon** içinde seçili pompa, eşleştirmesi ve diğer tüm ayarları bu telefonda olduğu gibi kalır. İçe aktarma ekranındaki **Pompa ayarlarını da değiştir** kutusunu yalnızca aynı pompayı devralacak yeni bir telefona geri yükleme yaptığınızda işaretleyin. Dosyada olmayan ayarlar içe aktarma ile asla silinmez.
```

1. Yukarıdaki APK yedek kopyanızı kullanarak [yeni kurulum](../SettingUpAaps/TransferringAndInstallingAaps.md) talimatlarını izleyin

2. **AAPS**'i başlatın ve istenen tüm izinleri verin

3. Kurulum Sihirbazı'ndan çıkın. Gerekli tüm ayarları **Ayarlar** yedek kopyasından içe aktaracağız

4. **AAPS** ana ekranında **İzin ver**'e basın ve üstteki **Gerekli İzinler** panelinde listelenen tüm izinleri verin

5. **AAPS** ana ekranında, [Ayarlar > Koruma](#Preferences-master-password) bölümündeki ana parolayı yedeklerinizde kullandığınız parolayla aynı olacak şekilde ayarlayın.

6. Henüz yapmadıysanız [**AAPS dizinini** ayarlayın](#preferences-maintenance-logdirectory): **AAPS** ana ekranında **menüyü** (☰) açın > **Bakım** > **AAPS dizini**.

7. **AAPS** ana ekranında **menüyü** (☰) açın > **Bakım** > **Ayarları dışa aktar** > yukarıda belirlediğiniz ana parolayı yazın > **Tamam**. Bu, tercihler klasörü telefonunuzda henüz yoksa onu oluşturur.

8. **Tercihler** dosyanızın yedeğini bulut platformunuzdan indirin.

9. **AAPS Dizini** `/internal storage/AAPS` olarak ayarlandıysa, dosyayı indirilenler klasöründen `/internal storage/AAPS/preferences` klasörüne taşımak için dosya gezgininizi (genellikle “Dosyalar” veya “Dosyalarım” olarak adlandırılır) kullanın

10. **AAPS** ana ekranında **menüyü** (☰) açın > **Bakım** ve **Ayarları içe aktar** seçeneğine dokunun. Geri yüklemek istediğiniz tercih dosyasını seçin (en yenisi en üsttedir). Doğru tercih dosyasını seçtiğinizden emin olun; preferences klasöründeki (veya **Bulut** ile bulut dizinindeki) tüm .json dosyaları gösterilir.

    ![İçe aktarılacak ayar dosyalarının listesi](../images/Maintenance/import_settings_files.png)

    **AAPS** dosyanın ayrıntılarını gösterir. Yukarıda belirlediğiniz ana parolayı yazın ve **Şifreyi Çöz & Gözden geçir**'e dokunun.

11. Dosyanın şifresi çözüldükten sonra pompa ayarlarıyla ne yapacağınıza karar verin. Aynı pompayı devralan yeni bir telefonda, eşleştirme ve pompa ayarlarının dosyadan gelmesi için **Pompa ayarlarını da değiştir** kutusunu işaretleyin. Bu telefonun zaten eşleştirilmiş olduğu pompayı korumak için kutuyu işaretlemeden bırakın. Ardından **İçe aktar**'a dokunun.

    ![Pompa ayarlarını da değiştir kutusu ve İçe aktar düğmesiyle şifresi çözülmüş ayar dosyası](../images/Maintenance/import_settings_review.png)

12. **AAPS** **İçe aktarılan ayarlar uygulansın mı?** diye sorar ve kaç ayarın değişeceğini, kutuyu işaretlemediyseniz kaç pompa ayarının korunacağını söyler. Henüz hiçbir şey yazılmadı; bu nedenle **Vazgeç** telefonunuzu tam olarak önceki hâlinde bırakır. Uygulamak için **Tamam**'a dokunun.

    ![İçe aktarılan ayarları uygulama iletişim kutusu](../images/Maintenance/import_settings_apply.png)

13. **AAPS** içe aktarılan ayarları yeniden başlatmadan hemen uygular. Yalnızca ayarları değişen eklentiler yeniden başlatılır. Bu sırada **AAPS** **Ayarlar uygulanıyor…** gösterir; pompa meşgulse **Pompa bekleniyor...** gösterir ve pompa boşa çıkınca ayarları uygular. Pompa bir dakika sonra hâlâ meşgulse **AAPS** tekrar denemeyi önerir. **Ayarlar uygulandı** mesajı, içe aktarılan ayarların kullanımda olduğunu onaylar. İçe aktarma sırasında kuyruğa aldığınız tedaviler iptal edilir ve **AAPS** bunu size bildirir; böylece pompaya hiçbir şey iki kez gönderilmez.

    ![Ayarlar uygulandı mesajı](../images/Maintenance/import_settings_applied.png)

Dosyada **AAPS**'in bu sürümünde olmayan bir pompa seçiliyse **AAPS** **Sanal pompa**'ya geçer ve bunu size bildirir. **Konfigürasyon** içinde pompanızı yeniden seçin ve ayarlarını kontrol edin.

14. Yalnızca hortumsuz pompa (Omnipod ve Medtrum) kullanıcıları için: **Pompa ayarlarını da değiştir** kutusunu işaretlediyseniz ve **Tercihleriniz** şu anda kullandığınız Pod sırasında yedeklenmemişse, insülin iletimine başlamak için yeni bir Pod başlatmanız gerekir.

**Sorun giderme:** **AAPS** ana ekranından etkin bir profil ayarlayamıyorsanız sol üstteki **menüyü** (☰) açın > **Konfigürasyon** > **Pompa** > **Sanal pompa**'ya geçin > ardından kendi pompa türünüze geri dönün

### Dana RS kullanıcıları için not

- **Pompa ayarlarını da değiştir** kutusunu işaretlediyseniz pompa bağlantı ayarları da içe aktarılır: yeni telefonunuzdaki **AAPS** pompayı zaten "tanır" ve bu nedenle Bluetooth taraması başlatmaz.
- Lütfen yeni telefonu ve pompayı manuel olarak eşleştirin.