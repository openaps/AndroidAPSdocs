(global-search)=
# Genel arama

**AAPS** v4'te ana ekranın üstünde bir **genel arama** kutusu vardır. Bir kelime yazın; arama tüm uygulamaya aynı anda bakar — eklentiler, iletişim kutuları, ayar ekranları, tek tek tercihler — ve internete bağlıysanız **AndroidAPS dokümantasyonuna** da bakar. Bir ayarın veya ekranın nerede olduğunu hatırlamadan oraya gitmenin en hızlı yoludur.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Aramayı açma

**Genel Bakış** ekranının üstündeki (☰ menüsünün yanındaki) **🔍 Ara** alanına dokunun. Yazmaya başlayın; sonuçlar siz yazarken (kısa bir duraklamadan sonra) kategorilere göre gruplanmış olarak görünür:

![Kategorilere göre gruplanmış genel arama sonuçları](../images/v4/Search/search_results.png)

Kutuyu **✕** ile temizleyin veya aramayı cihazın **Geri** düğmesi ile kapatın.

---

## İngilizce *veya* kendi dilinizde arama

Bilmeniz gereken önemli nokta şudur: arama, **hem** **seçili dilinizdeki** metinde **hem de** orijinal **İngilizce** metinde eşleşme arar.

- Uygulamanız örneğin Almanca veya Çekçe ise, **yerelleştirilmiş** kelimeyi **veya** **İngilizce** kelimeyi yazabilirsiniz — ikisi de ayarı bulur.
- **Yerelleştirilmiş** başlıkta bir eşleşme en üst sırada yer alır, sonra **İngilizce** başlık, sonra yerelleştirilmiş ve İngilizce **açıklamalar** gelir.
- Eşleştirme **aksanları/işaretli harfleri** dikkate almaz (yani *ů*, *u* ile; *é*, *e* ile eşleşir) ve **büyük/küçük harf fark etmez**.

Bu sayede telefonunuz her şeyi çevrilmiş olarak gösterse bile, İngilizce yazılmış bir kılavuz veya forum gönderisi sizi yine doğru ayara götürür.

---

## Arama neleri kapsar

Sonuçlar şu kategorilere göre gruplanır:

- **Eklentiler** — sürümünüzde görünen her eklenti ([Konfigürasyon](../SettingUpAaps/ConfigBuilder.md) altında listelenenlerin aynısı). Her eklenti satırında **etkinleştirme anahtarı** bulunur, böylece bir eklentiyi doğrudan sonuçlardan etkinleştirebilir veya devre dışı bırakabilirsiniz — devre dışı (açılıp kapatılabilen) bir eklentinin satırına dokunmak onu etkinleştirir.
- **Diyaloglar** — tedavi/eylem ve yönetim ekranları (Bolus sihirbazı, İnsülin, Yayma Bolus, Kalibrasyon, Geçici Hedef, Profil, …). Sürümünüze uymayan ekranlar gösterilmez (örneğin ana birimde *Ana birimle eşleştir*, istemcide *Yetkili istemciler*).
- **Tercih kategorileri** — hem yerleşik (Genel, Görünüm, Koruma, Alarmlar, Bakım, …) hem de eklentilerden gelen ayar **ekranları** ve alt ekranları, ayrıca iletişim kutularından açılan küçük ayar grupları (Doldur düğmeleri, İnsülin/Karbonhidrat düğmesi adımları, durum ışığı eşikleri, sihirbaz ayarları, …).
- **Tercihler** — başlığı olan her **tek tek ayar**. Bunlar sürümünüze/modunuza göre filtrelenir, böylece yalnızca gerçekten geçerli olan ayarları görürsünüz (APS / NSClient / pompa kontrolü).
- **Dokümantasyon** — çevrim içi **AndroidAPS dokümantasyonundan** sayfalar (aşağıya bakın).

```{admonition} Settings that belong to a disabled plugin
:class: note
Eklentisi şu anda **devre dışı** olan bir tercih yine de gösterilir — **gri** ve dokunulamaz olarak — ve yanında *“… eklentisi devre dışı”* notu bulunur. Böylece ayarın var olduğunu ve ona ulaşmak için hangi eklentiyi etkinleştirmeniz gerektiğini görürsünüz.

![Devre dışı bir eklentiden gelen gri bir ayar](../images/v4/Search/search_disabled_plugin.png)
```

---

## Dokümantasyon sonuçları (çevrim içi)

Yerel arama çalışırken **AAPS**, aynı anda resmi **AndroidAPS dokümantasyonunda** (ReadTheDocs üzerinde barındırılır) da arama yapar. Eşleşen sayfalar en altta bir **Dokümantasyon** grubunda, her biri 📖 simgesi, bölüm başlığı ve kısa bir alıntı ile görünür:

![Alıntılarla birlikte dokümantasyon (wiki) sonuçları](../images/v4/Search/search_documentation.png)

- Dokümantasyon uygulamanızın diline çevrilmişse, **AAPS** çevrilmiş sayfalarda ve İngilizce sayfalarda aynı anda arama yapar. Önce sizin dilinizdeki sayfalar gelir, sonra daha önce bulunmamış İngilizce sayfalar.
- Bir dokümantasyon sonucuna dokunmak o sayfayı **tarayıcınızda** açar.
- Dokümantasyon araması **internet** gerektirir — çevrim dışıyken bunun yerine *“Belgelerde arama yapmak için internet bağlantısı gerekir”* notunu görürsünüz; yerel (uygulama içi) sonuçlar normal şekilde çalışmaya devam eder.

---

## Bir sonucu açma

Doğrudan oraya gitmek için bir sonuca dokunun:

- **Eklenti** → o eklentiyi açar.
- **Diyalog** → o ekranı veya iletişim kutusunu açar.
- **Tercih kategorisi** → o ayar ekranını açar.
- **Tercih** → ayarı **yerinde** açar (kendi ekranı içinde o ayara atlar).
- **Dokümantasyon** → sayfayı tarayıcınızda açar.

Ayarları ve korumalı eylemleri açmak, oraya elle gitmiş olsaydınız nasıl olacaksa aynı şekilde **[koruma](#Preferences-protection)** (PIN/parola) ayarınıza uyar. Bir sonuç üzerinde işlem yaptıktan sonra arama sonuçlarınıza dönmek için **Geri**'ye basabilirsiniz.

---

## İleri düzey kullanıcılar için kısayollar

İki özel sorgu, bütün bir kategoriyi tek seferde listeler:

- `%PLUGINS%` — **tüm** eklentileri listeler.
- `%DIALOGS%` — **tüm** iletişim kutularını/eylem ekranlarını listeler.

---

```{admonition} The index stays current
:class: note
Arama dizini ilk aramanızda oluşturulur ve sonrasında hazır tutulur. Dizin, **bir eklentiyi etkinleştirdiğinizde/devre dışı bıraktığınızda** veya **uygulama dilini değiştirdiğinizde** otomatik olarak yeniden oluşturulur, böylece sonuçlar her zaman mevcut kurulumunuzu yansıtır.
```

---


<!-- =====================================================================
     Screenshots captured from a real master device (query "bolus"):
       - search_results.png        (categorized local results: Dialogs / Preference categories / Preferences)
       - search_disabled_plugin.png (greyed-out preference from a disabled plugin)
       - search_documentation.png   (online ReadTheDocs results with 📖 icon + snippets)
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
