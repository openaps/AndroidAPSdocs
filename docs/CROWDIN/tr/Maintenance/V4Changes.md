(v4-changes)=
# AAPS v4'te neler değişti

Bu sayfa, **AAPS** v3 ile v4 arasındaki önemli **davranış değişikliklerini** toplar: farklı çalışan, yeri değişen veya kaldırılan şeyler. Böylece mevcut kullanıcılar güncelleme yaptıklarında ne bekleyeceklerini bilirler. Ayrıca [Sürüm notları](ReleaseNotes.md) ve [güncelleme kılavuzu](UpdateToNewVersion.md) sayfalarına bakın.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## NSClient v1 kaldırıldı

**AAPS** v3 ile **iki** Nightscout senkronizasyon eklentisi geliyordu:

- **NSClient**: eski istemci (eski Nightscout REST / socket.io API'si, *“v1”* olarak da bilinir) ve
- **NSClientV3**: daha yeni Nightscout **API v3** için istemci.

**AAPS** v4'te eski **NSClient (v1)** eklentisi **kaldırıldı**. Nightscout ile senkronizasyon için yalnızca **NSClientV3** kaldı.

```{admonition} What you need to do
:class: important
Siz (veya **AAPSClient** takipçiniz) hâlâ eski **NSClient (v1)** eklentisiyle senkronize ediyorsanız, güncellemeden önce veya sonra **NSClientV3**'e geçin:

- **[Konfigürasyon](../SettingUpAaps/ConfigBuilder.md) → İletişim → NSClientV3** bölümünü açın.
- **Nightscout URL**'nizi ve bir **erişim belirteci** girin (NSClientV3 eski API secret'ı *değil*, bir erişim belirteci kullanır; bkz. [belirteç oluşturma](https://nightscout.github.io/nightscout/security/#create-a-token)).
- Nightscout sitenizin **API v3**'ü desteklemesi gerekir (Nightscout 15 veya daha yeni).
- **websockets** kullanıyorsanız, bunları **hem** ana birimde hem de takipçide etkinleştirin veya devre dışı bırakın; asla yalnızca birinde değil.
- Websockets are **mandatory** for remote control from **AAPSClient**, on both phones.
```

Bu yalnızca uygulamanın Nightscout ile nasıl iletişim kurduğunu etkiler; Nightscout'taki verileriniz değişmez.

---

## Alt gezinme çubuğu: Tedaviler, Senaryolar ve Yönet

**AAPS** v3'te uygulamada bir sıra **sekme** ile geziniyordunuz (Genel Bakış, Eylemler, Tedaviler, …) ve birçok özellik, Config Builder'da etkinleştirdiğiniz **eklentilerdi** (**Eylemler**, **Otomasyon**, **Yiyecek**, …).

**AAPS** v4'te sekmeler kaldırıldı. Config Builder'da bir eklentiyi sekme olarak gösteren göz onay kutusu da kaldırıldı. Ana ekran **Genel Bakış** ekranıdır ve bir **alt gezinme çubuğu** size üç panel sunar. **Eylemler, Otomasyon ve Yiyecek artık eklenti değildir**: [Konfigürasyon](../SettingUpAaps/ConfigBuilder.md) bölümünde (Config Builder'ın yeni adı) etkinleştirilecek bir şey yoktur; işlevleri artık bu panellerdedir.

(v4changes-treatments)=
### Tedaviler: girme ve verme

**Tedaviler** paneli, bir tedaviyi kaydettiğiniz veya verdiğiniz yerdir: **Bolus sihirbazı**, **İnsülin** (manuel bolus), **Karbonhidrat**, **Tedavi** (insülin + karbonhidrat birlikte), **Kalibrasyon**, **CGM** (yapılandırılmışsa CGM uygulamanızı açar) ve **[Hızlı Asistan](../DailyLifeWithAaps/QuickWizards.md)** kayıtlarınız.

![Tedaviler alt paneli](../images/v4/BehavioralChanges/treatments_sheet.png)

Bir **Wear OS saatinde** aynı tedaviler, saatin **AAPS menüsünden** girilir (Bolus sihirbazı / Hesaplayıcı, yKarb, Tedavi, …):

![Saatin AAPS menüsündeki tedavi işlemleri](../images/v4/BehavioralChanges/treatments_watch.png)

### Senaryolar

Duruma göre ön ayarlarınız; bkz. [Senaryolar](../DailyLifeWithAaps/Scenes.md).

(v4changes-manage)=
### Yönet: yönetme ve etkinleştirme

**Yönet** paneli, diğer her şeyi yönettiğiniz ve etkinleştirdiğiniz yerdir: **[Profil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)**, **İnsülin ayarları** (insülin yapılandırmalarınız), **[Geçici Hedef](../DailyLifeWithAaps/TempTargets.md)**, **[Hızlı Asistan](../DailyLifeWithAaps/QuickWizards.md)** ön ayarları, **[Senaryolar](../DailyLifeWithAaps/Scenes.md)**, **Otomasyon**, **Yiyecek**, **Bölge Rotasyonu**, **Pompa**, **[Yetkili istemciler](../RemoteFeatures/ClientMasterControl.md)**; ayrıca eskiden *Eylemler* sekmesinde olan pompa işlemleri (**Yayma Bolus**, **Geçici bazalı iptal et**, **Hazırla/doldur**, **Sensör yerleştirme**, **Pompa Pil Değişimi**).

![Yönet alt paneli](../images/v4/BehavioralChanges/manage_sheet.png)

Mevcut tüm otomasyon kurallarınız ve yiyecek kayıtlarınız korunur; yalnızca bu özelliklere ulaşma şekliniz değişti.

(screens-action-tab)=
#### Eylemler sekmesi nereye gitti?

**AAPS** 3.x'te bir "Eylemler" sekmesi vardı. **AAPS** 4'te işlevleri başka yerlerdedir:

* **Profil değişimi** ve **Profil yüzdesi**: ana ekranda [profil adına](#aaps-screens-profile--target) dokunun veya **Yönet → Profil** yolunu kullanın. Bkz. [Profil yüzdesini değiştirme](#ProfileSwitch-change-percentage).
* **Geçici hedef**: ana ekranda [hedefe](#aaps-screens-profile--target) basın veya **Yönet → Geçici Hedef** yolunu kullanın.
* **Hazırla/doldur**, **Sensör yerleştirme**, **KŞ Kontrol** ve diğer careportal kayıtları: genişletilmiş [durum panelinde](#aaps-screens-careportal), **Yönet** içinde veya [Hızlı Başlatma](../DailyLifeWithAaps/QuickLaunch.md) düğmeleri olarak.
* **Geçmiş tarayıcısı**, **İstatistikler** (GTD): **menüde** (☰).

```{admonition} Profile switch and profile percentage
:class: note
**AAPS** v3'te profil adına uzun basmak profil değişimi penceresini açıyordu (yüzde, süre, Aktivite geçici hedefi). **AAPS** v4'te profil adına **dokunun** (veya **Yönet → Profil**), ardından aynı ayarları açmak için sağ alttaki yuvarlak **▶** düğmesine dokunun. Bkz. [Profil yüzdesini değiştirme](#ProfileSwitch-change-percentage).
```

---

(v4changes-read-only-management)=
## Ayarların güvenliği artık yönetim ekranlarını da kilitler

**AAPS** v3'te [Ayarların güvenliği](#Preferences-settings-protection) parolanızı yalnızca ayarları açtığınızda soruyordu. **Yerel Profil** sekmesinde profilleri parola olmadan yine de ekleyip düzenleyebiliyordunuz.

**AAPS** v4'te Ayarların güvenliği, yönetim ekranlarındaki düzenlemeyi de kapsar: **Profil**, **İnsülin ayarları**, **Geçici Hedef** ve **Hızlı Asistan**. Ayarlarınız kilitliyse, bu ekranlar **salt okunur** açılır:

- Kayıtlara göz atabilir ve onları **▶ Etkinleştir** ile etkinleştirebilir veya kullanabilirsiniz.
- **Ekle / Düzenle / Klon / Sil** düğmeleri **gizlidir**. Yalnızca üst çubuktaki **✏️ kalem**, düzenlemenin kilidini açabileceğinizi gösterir.

![Salt okunur Profil ekranı: altta yalnızca Etkinleştir, üst çubukta kalem](../images/v4/Profiles/profile_manage_readonly.png)

```{admonition} What you need to do
:class: important
Bir kaydı eklemek, düzenlemek, klonlamak veya silmek için üst çubuktaki **✏️ kaleme** dokunun ve ayarlar parolanızı girin (veya biyometrik doğrulamayı kullanın). Düğmeler görünür.

Ayarlarınızı korumanız gerekmiyorsa, Ayar korumasını **Ayarlar → Koruma** bölümünden kapatabilirsiniz.
```

---

(v4changes-active-insulin)=
## Kullanımdaki insülin düzenlenemez

**AAPS** v3'te kullandığınız insülinin İES'ini istediğiniz zaman değiştirebiliyordunuz.

**AAPS** v4'te **Yönet → İnsülin ayarları** içinde **AKTİF** olarak işaretlenen insülin gri görünür: onu düzenleyemez veya silemezsiniz.

Yükseltme yaptığınızda **AAPS**, v3 profil değişimlerinizin zaten kaydettiği insülini ve İES'i korur. İnsülini bilinen ama İES'i bilinmeyen eski kayıtlar bulursa, bunlar için varsayılan bir İES kullanır ve bir kez bir mesaj gösterir, örneğin *Eski kayıtlarda insülin süresi bilgisi bulunmadığından, Lyumjev için 9,0 saat değeri kullanılmıştır. İnsülin ayarlarınızı kontrol edin; halihazırda taşınmış olan kayıtlar sonradan güncellenmez.* Bu mesajı gördüğünüzde insülin ayarlarınızı kontrol edin.

```{admonition} What you need to do
:class: important
İES'i veya tepe zamanını değiştirmek için **+** ile yeni bir insülin ekleyin, ayarlayın, kaydedin ve **▶ Etkinleştir** ile etkinleştirin. Bkz. [Kullanımdaki insülini değiştirme](#Config-Builder-insulin-change-active).
```

---

(v4changes-remote-control)=
## AAPSClient uzaktan kontrolü eşleştirme gerektirir

**AAPS** v3'te **AAPSClient**, Nightscout'a careportal tedavileri yazarak **AAPS**'i kontrol ediyordu ve bolus veremiyordu.

**AAPS** v4'te istemci ve ana telefon bir kez **eşleştirilir** ve her komut imzalanır. Ana telefon her komutu kontrol eder ve onaylar; artık bir istemci bolus da verebilir.

- Her istemcinin, neler yapabileceğini sınırlayan bir **[rolü](#client-master-control-roles)** vardır.
- İstemci kontrolü açıkken ana telefon **[güçlendirilmiş moddadır](#client-master-control-hardened-mode)**: doğrudan Nightscout'a (web sitesi, diğer uygulamalar) yazılan tedaviler ve değişiklikler artık uygulanmaz.
- Her istemci, yalnızca ihtiyaç duyduğu haklara sahip **[kendi Nightscout belirtecini](#client-master-control-own-token)** alır.

```{admonition} What you need to do
:class: important
Her **AAPSClient**'ı ana telefonla eşleştirin: bkz. [Ana birim ↔ İstemci kontrolü](#client-master-control). Ana telefonda bir yönetici (admin) belirteci varsa, ana telefon tek bir taramayla istemciyi kuran ve eşleştiren bir QR kodu gösterir. Eskiden tedavileri Nightscout web sitesinde giriyorsanız, artık bunları eşleştirilmiş bir istemcide girin.
```

---

## Yinelenen KŞ verileri artık döngüyü Düşük Glikoz Duraklatma moduna geçirir

**AAPS** aynı KŞ değerini iki kez aldığında (alt çubuktaki KŞ kaynağı kısayolunda kırmızı bir uyarı işareti), eğiliminizi güvenilir şekilde hesaplayamaz, bu yüzden düzeltme insülini vermeyi durdurur.

**AAPS** v3'te bu arka planda sessizce oluyordu: döngünüz düzeltme yapamadığı hâlde yine **Kapalı Döngü** olarak görünüyordu.

**AAPS** v4'te bu değişiklik görünür. Kapalı döngü **Düşük Glikoz Duraklatma** moduna geçirilir ve döngü penceresi nedenini söyler: *"KŞ kaynağında iki katına çıkmış değerler nedeniyle LGS modu"*. **AAPS**, sizi düşüklere karşı korumak için bazalınızı yine de azaltabilir veya durdurabilir.

```{admonition} What you need to do
:class: important
Yinelenen değerleri bulun ve silin; bkz. [KŞ uyarı işareti](#aaps-screens-bg-warning-sign).

Bunlar silindikten sonra **AAPS** **Düşük Glikoz Duraklatma** modunda kalır. Kendiliğinden **Kapalı Döngü** moduna geri dönmez: döngü simgesine basılı tutun ve tekrar **Kapalı Döngü**'yü seçin.
```

---

(v4changes-tidepool)=
## Tidepool: veriler artık AAPS cihaz adı altında görünür

**AAPS** v3'te [Tidepool](../SettingUpAaps/Tidepool.md)'a yüklenen veriler Tidepool'da başka bir cihaz adı altında gösteriliyordu.

**AAPS** v4'te veriler **AAPS** cihaz adı altında gösterilir. Güncellemeden sonra **AAPS**, Tidepool'da yeni bir veri seti başlatır. Eski verileriniz Tidepool'da eski cihaz adı altında kalır.

```{admonition} What you need to do
:class: important
Genellikle hiçbir şey yapmanız gerekmez: yeni veriler doğrudan **AAPS** altında görünür.

Eski veriler hâlâ Tidepool'dayken "**Tam senkronizasyon**" işlemini **çalıştırmayın**: aynı veriler o zaman iki kez bulunur. Tüm verilerinizin yeni ad altında olmasını istiyorsanız, önce [Tidepool ekranındaki](#tidepool-menu) "**Tüm verileri sil**" düğmesini kullanın (bu, **AAPS** tarafından yüklenen eski verileri de siler), ardından "**Tam senkronizasyon**" çalıştırın. Yalnızca telefonunuzda **AAPS** içinde hâlâ saklanan veriler yeniden yüklenebilir.
```

---


<!-- =====================================================================
     This page is a growing list of v4 behavioral changes.
     Add new changes as their own "## " section, newest grouping as agreed.
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
