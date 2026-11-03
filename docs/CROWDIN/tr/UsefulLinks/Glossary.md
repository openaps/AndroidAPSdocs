# Sözlük

**AAPS** = AndroidAPS, Android uygulamasının adıdır.

**AAPSClient** = bakım verenler için takipçi uygulaması. Takipçi telefonda kullanıcının **AAPS**'ini, kullanıcının **Nightscout** sitesi üzerinden takip eder. **AAPS** telefonuyla eşleştirildikten sonra onu uzaktan da kontrol eder. **NSClient** ile karıştırılmamalıdır. Daha fazla bilgi → [Wiki - 'AAPSClient uygulaması'](../RemoteFeatures/AapsClient.md) ve [Ana birim ↔ İstemci kontrolü](#client-master-control).

**Aktivite** (activity) = insülin aktivitesi; AİNS'in azalma hızını gösterir. Bkz. [Wiki - 'İES'](#Config-Builder-insulin-dia) ve ilgili **BGI**.

**AID** = Automated Insulin Delivery (otomatik insülin iletimi). Klinik uygulamada ve araştırmalarda, **CGM** verilerini kullanarak insülin iletimini otomatik olarak ayarlayan sistemler için genel olarak kullanılan terim. **APS** ve **kapalı döngü** aynı anlama gelir → ayrıca bkz. **OS-AID**.

**APS** = Artificial Pancreas System (yapay pankreas sistemi) → ayrıca bkz. **AID**.

**AMA** = Advanced Meal Assist (Gelişmiş Öğün Yardımı). Yemek bolusundan sonra **AAPS**'in kullanıcının bazalını daha agresif artırmasını sağlayan bir algoritma. Daha fazla bilgi → [Wiki - 'Gelişmiş Öğün Yardımı (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**Ayarlama faktörü** (adjustment factor) = **Dinamik İDF** içinde kullanılır. Kullanıcının **Ayarlar** bölümünde %1 ile %300 arasında belirlenen bir değerdir. Bu, **GTD** değeri üzerinde bir çarpan olarak etki eder. Bkz. [Wiki - Dinamik İDF ayarlama faktörü](#dyn-isf-adjustment-factor)

**Android Auto** = Android akıllı telefonun bazı özelliklerini, **AAPS** de dahil, arabanın ekranında gösteren bir sistem. Daha fazla bilgi → [Wiki - 'Android Auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (Android uygulama paketi). Bir yazılım yükleme dosyası. Daha fazla bilgi → [Wiki - 'APK oluşturma'](../SettingUpAaps/BuildingAaps.md).

**Autosens** (uygulamada Otoduyarlılık) = insüline duyarlılığın 24 saatlik ve 8 saatlik zaman aralığında vb. hesaplanması. Daha fazla bilgi → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = **Nightscout** web uygulamasını barındırmak için bir bulut bilişim platformu → ayrıca bkz. **Nightscout**.

**BAT** = düşük pompa pili için durum ışığı. **AAPS** ana ekranının durum satırında gösterilir → ayrıca bkz. **CAN** / **RES** / **SEN**.

**BG** (uygulamada KŞ) = blood glucose (kan şekeri).

**BGI** = blood glucose impact (uygulamada Kan Şekeri Etkisi). **KŞ**'nin yalnızca insülin aktivitesine göre ne kadar yükselmesi veya düşmesi 'gerektiği'.

**KŞ kaynağı** (BG source) = kan şekeri verilerinin kaynağını yapılandırmak için bir AAPS ayarı. Bkz. [Wiki - KŞ kaynağı](#Config-Builder-bg-source)

**Köprü** (bridge) = **FGM**'yi **CGM**'ye dönüştüren ek bir cihaz.

**BR** = Basal Rate (bazal oran). **KŞ**'yi sabit bir düzeyde tutmak için belirli bir zaman diliminde verilen insülin miktarı. → ayrıca bkz. **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (kendi Dexcom uygulamanızı oluşturun). Kullanıcının Dexcom G6 sensör verilerini okumak için kendi Dexcom uygulamasını oluşturma yöntemi.

**CAGE** = Cannula AGE (kanül yaşı). Kullanıcının **Hazırla/doldur** careportal kayıtlarına göre **AAPS** ana ekranında ve Nightscout'ta gösterilir → ayrıca bkz. **Nightscout**.

**CAN** = zamanı geçmiş kanül değişimi için durum ışığı. **AAPS** ana ekranının durum satırında gösterilir → ayrıca bkz. **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (sürekli glikoz monitörü) → ayrıca bkz. **FGM**.

**Kapalı döngü** (closed loop) = kullanıcının onayını gerektirmeden, **AAPS** algoritmasına ve kullanıcının **Profil** ayarlarına göre bazal iletimini otomatik olarak ayarlayan bir kapalı döngü sistemi. Daha fazla bilgi → [Wiki - 'kapalı döngü'](#KeyAapsFeatures-ClosedLoop) ve ayrıca bkz. **HCL** / **FCL**.

**COB** (uygulamada AKRB) = Carbs On Board (aktif karbonhidrat). Bu, kullanıcının sindirimi için şu anda mevcut olan karbonhidrat miktarıdır → ayrıca bkz. IOB.

**CSF** = Carbs Sensitivity Factor (karbonhidrat duyarlılık faktörü). Yani emilen 1 g karbonhidratın kullanıcının **KŞ**'sini ne kadar yükselttiği.

**DIA** (uygulamada İES) = Duration of Insulin Action (insülin etki süresi). Daha fazla bilgi → [Wiki - 'İES'](#Config-Builder-insulin-dia) ve ayrıca bkz. → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time (yaz saati uygulaması). Bkz. [Wiki - Saat dilimi değişikliği ve yaz saati uygulaması](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dinamik İDF (Dynamic ISF veya DynISF)** = kullanıcının **GTD** ve **KŞ** değerlerine göre insülin duyarlılık faktörünü (**İDF**) dinamik olarak uyarlayan bir **AAPS** özelliği.

**eCarbs** (uygulamada yKarb) = extended Carbs (yayma karbonhidrat). Birkaç saate yayılmış karbonhidratlar (örneğin yağ/protein için). Bu, **AAPS**'in insülini yayma bolus gibi dağıtmasını sağlar. Daha fazla bilgi → [Wiki - 'Yayma karbonhidratlar'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (tam kapalı döngü). Kullanıcıdan yemek zamanı girişi gerektirmeyen bir döngü: karbonhidrat sayımı yok, yemek bolusu yok. Daha fazla bilgi → [Wiki - 'tam kapalı döngü'](../AdvancedOptions/FullClosedLoop.md) ve ayrıca bkz. **HCL**.

**FGM** = Flash Glucose Monitor (flaş glikoz monitörü), örneğin Abbott Freestyle Libre. Daha fazla bilgi → [Wiki - 'KŞ kaynağı'](#Config-Builder-bg-source) ve ayrıca bkz. 'CGM'.

**git** = **AAPS** kaynak kodunu saklamak ve indirmek için kullanılan bir araç.

**GitHub** = **AAPS** kaynak kodunu ve sürüm kontrolünü (dosyalardaki değişiklikleri izleme ve özellikle ekipler için bu dosyalar üzerindeki çalışmayı düzenleme) barındıran web tabanlı bir hizmet. Uygulamayı da oluşturabilir. **APK** güncellemeleri için de gereklidir. Daha fazla bilgi → [Wiki - 'APK güncelleme'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = Freestyle Libre'den değerleri toplayan bir uygulama.

**HCL (Hybrid Closed Loop, hibrit kapalı döngü)** = öğün aralarında insülin iletimini otomatik yapan, ancak öğünler için kullanıcının yine de bolus yapmasını gerektiren bir döngü. Günlük kullanımdaki sistemlerin neredeyse tamamı, **AAPS** de dahil, hibrit kapalı döngüdür → ayrıca bkz. **FCL** / **Kapalı döngü**.

**IC (I:C, ICR, CR, carb ratio)** = Insulin to Carb ratio (uygulamada Karbonhidrat İnsülin Oranı). Kısaltma tersini düşündürse de bu değer geleneksel olarak g/Ü birimindedir.

**IOB** (uygulamada AİNS) = Insulin On Board (aktif insülin). Kullanıcının vücudunda etkin olan insülin. Bkz. [Wiki - Aktif İnsülin (AİNS)](#aaps-screens-iob)

**ISF** (uygulamada İDF) = Insulin Sensitivity Factor (insülin duyarlılık faktörü). Bir ünite insülinin sonucunda KŞ'de beklenen düşüş. Birim mg/dL/Ü veya mmol/L/Ü'dir. Bunlar dönüştürme yapılmadan birbirine eşit değildir!

**Anahtar deposu (keystore veya JKS)** = Java Key Store; **AAPS** oluşturmanız (ve yeniden oluşturmanız) için gereken kişisel geliştirici sertifikalarınızın ve anahtarlarınızın saklandığı şifrelenmiş bir dosya.

**LGS** = Low Glucose Suspend (Düşük Glikoz Duraklatma). Bkz. [Wiki - Düşük Glikoz Duraklatma](#KeyAapsFeatures-LGS)

**LineageOS** = akıllı telefonlar vb. için ücretsiz ve açık kaynaklı işletim sistemi. Accu-Chek Combo kullanıyorsanız bkz. [Wiki - Combo pompası](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Günlük dosyaları** (log files) = **AAPS**'in kullanıcının işlemlerine ait kayıtları (sorun giderme ve hata ayıklama için faydalıdır). Daha fazla bilgi → [Wiki - 'günlük dosyaları'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maksimum toplam AİNS (IOB). Bu bir güvenlik özelliğidir ve **AAPS**'in kullanıcının ayarlarının üzerinde insülin vermesini önler. Daha fazla bilgi → [Wiki - 'OpenAPS'in aşamayacağı maksimum toplam AİNS'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = karbonhidrat emilimi kullanıcının kanının tepkilerine göre belirlenemediğinde, varsayılan karbonhidrat azalmasını hesaplayan bir güvenlik özelliği. Daha fazla bilgi → [Wiki - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = **CGM** verilerine erişmek ve bunları raporlamak için açık kaynaklı bir proje. Kullanıcının **AAPS** verileri için merkezi veri noktasıdır. Kullanıcının geçmiş **Nightscout** verilerini görmek için raporlar oluşturabilir; örneğin tahmini HbA1c, hedef aralıktaki süre veya yüzdelik grafiğiyle verilerde örüntü arama vb.

**Nightscout** → ayrıca bkz. **Nightscout Reporter**. Bu, özellikle çocuklarının diyabet yönetimini takip eden ebeveynler için faydalıdır.

**Nightscout Reporter Tool** = Nightscout web uygulamasının verilerinden PDF raporları oluşturan bir araç. Bkz. Facebook'ta 'Nightscout Reporter', 'NS Reporter'.

**NSClient** (**NSClientV3**) = **Nightscout** ile veri senkronize eden **AAPS** eklentisi (**Konfigürasyon** → **İletişim**). Takipçi uygulaması olan **AAPSClient** ile aynı şey değildir. Daha fazla bilgi → [Wiki - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (açık yapay pankreas sistemi); AAPS'in öncülü olan proje ve AAPS'in temeli.

**Açık döngü sistemi** (open loop) = ayarlamalar öneren bir **AAPS** özelliği. Bu ayarlamaları kullanıcının **AAPS** üzerinde elle yapması gerekir. Daha fazla bilgi → [Wiki - 'Açık döngü'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = duyarlılık algılama ve "referans tasarım uygulaması sürüm 0/1" (reference design implementation version 0/1). OpenAPS'in arkasındaki temel algoritmadır. Daha fazla bilgi → [Wiki - 'duyarlılık algılama'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (açık kaynak otomatik insülin iletimi). **AAPS**, **OpenAPS**, Loop veya Trio gibi açık kaynaklı yazılımlarla oluşturulmuş bir **AID** sistemi. Bu sistemler sağlık kuruluşları (FDA, NHS vb.) tarafından resmi olarak onaylanmamıştır → ayrıca bkz. **AID**.

**Tepe zamanı** (peak time) = verilen insülinin en yüksek etkiyi gösterdiği zaman. Daha fazla bilgi → [Wiki - 'İnsülin etki süresi (İES) ve tepe'](#Config-Builder-insulin-dia).

**PH** = Pump History (pompa geçmişi). Buna **AAPS** tedavi geçmişinden ulaşabilirsiniz: ana ekranın sol üstündeki **menüyü** (☰) açın ve **Tedaviler** seçeneğini seçin.

**Tahminler** (predictions) = farklı hesaplamalara dayanarak gelecekteki **KŞ** tahminleri. Daha fazla bilgi → [Wiki - 'tahmin çizgileri'](#aaps-screens-prediction-lines).

**Profil** (profile) = kullanıcının temel tedavi ayarları (bazal oran, **İES**, **IC**, **İDF**, **KŞ** hedefi). **AAPS** yalnızca **AAPS** içinde oluşturulan profilleri kullanır (**Yönet** → **Profil**), ancak **Nightscout** **profilleri** **AAPS**'e kopyalanabilir (senkronize edilebilir). Daha fazla bilgi → [Wiki - 'AAPS profiliniz'](../SettingUpAaps/YourAapsProfile.md).

**Profil değişimi** (profile switch) = kullanıcının **Profilinin**, **AAPS** içinde kayıtlı başka bir **Profile** (geçici olarak) değiştirilmesi.

**Profil yüzdesi** (profile percentage) = seçilen bir süre için kullanıcının **Profiline** uygulanan (geçici) yüzde artış veya azalış.

**RES** = zamanı geçmiş rezervuar değişimi için durum ışığı. **AAPS** ana ekranının durum satırında gösterilir → ayrıca bkz. **BAT** / **CAN** / **SEN**.

**RileyLink** = Bluetooth Low Energy (BLE) ile 916 MHz (eski Medtronic pompaları için) veya 433 MHz (Omnipod Eros pompaları için) kablosuz iletişim arasında köprü kuran açık kaynaklı bir donanım cihazı.

**SAGE** = sensor age (sensör yaşı). Kullanıcının **Sensör yerleştirme** careportal kayıtlarına göre **AAPS** ana ekranında ve **Nightscout**'ta gösterilir → ayrıca bkz. **Nightscout**.

**SEN** = zamanı geçmiş sensör değişimi için durum ışığı. **AAPS** ana ekranının durum satırında gösterilir → ayrıca bkz. **BAT** / **CAN** / **RES**.

**Duyarlılık algılaması** (sensitivity detection) = egzersiz, hormonlar vb. sonucunda insüline duyarlılığın hesaplanması. ayrıca bkz. → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Sensör gürültüsü** (sensor noise) = **CGM** okumalarının kararsız olmasını ve "zıplayan" **KŞ** değerlerini tanımlamak için kullanılan bir terim. Daha fazla bilgi → [Wiki - 'Kan şekeri verilerini yumuşatma'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (Süper Mikro Bolus). **KŞ**'yi düzeltmek için insülini daha hızlı veren bir **AAPS** özelliği. Daha fazla bilgi → [Wiki - '**SMB**'](#Open-APS-features-super-micro-bolus-smb) ve ayrıca bkz. **UAM**.

**Süperbolus** (super bolus) = **KŞ**'yi daha hızlı düzeltmek için bazal insülinin bolusa kaydırılması.

**TBB** = total base basal (toplam temel bazal: 24 saat içindeki bazal oranlarının toplamı) → ayrıca bkz. **TBR** / **TDD**.

**TBR** (uygulamada GBO) = temporary basal rate (geçici bazal oranı) → ayrıca bkz. **TBB** / **TDD**.

**TDD** (uygulamada GTD) = total daily dose (günlük toplam doz: günlük bolus + bazal) → ayrıca bkz. **TBB** / **TBR**.

**TT** (uygulamada GH) = temporary target (geçici hedef): kullanıcının **KŞ** hedefinin (aralığının) örneğin yemek veya spor için geçici olarak yükseltilmesi veya düşürülmesi. Daha fazla bilgi → [Wiki - 'geçici hedefler'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (bildirilmemiş öğünler). Yemek, adrenalin veya diğer etkiler nedeniyle **KŞ** düzeyindeki belirgin artışın algılanması ve buna göre ayarlama yapılması girişimi. Daha fazla bilgi → [Wiki - 'UAM'](#enable-uam) ve ayrıca bkz. **SMB**.

**Sanal pompa** (virtual pump) = bir **AAPS** özelliği. Kullanıcının **AAPS** işlevlerini denemesini sağlar ya da pompa modeli için **AAPS** sürücüsü olmayan diyabetli kişilerin (PWD) **AAPS**'i açık döngü olarak kullanmasına imkân verir → ayrıca bkz. **Açık döngü**.

**Duvar kağıdı** (wallpaper) = **AAPS** arka plan resmi, bkz. telefonlar sayfası.

**xDrip** = **CGM** sistemlerini okumak için açık kaynaklı yazılım.

**Sıfır geçici bazal** (zero-temp) = %0 geçici bazal oranı (bazal insülin verilmez).

→ ayrıca bkz. [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)