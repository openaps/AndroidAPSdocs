(food)=
# Yiyecek (yiyecek veritabanınız)

**Yiyecek** veritabanı, kaydettiğiniz yiyeceklerin kişisel listesidir. Her girdi bir yiyeceğin **karbonhidratını** (ve isterseniz yağını, proteinini, enerjisini ve bir kategorisini) saklar. Böylece sık yediğiniz şeyleri tek bir yerde tutabilir ve karbonhidratı önceden doldurulmuş kayıtlı bir yiyecekten bolus başlatabilirsiniz.

```{contents} Table of contents
:depth: 2
:local: true
```

---

## Yiyecek veritabanını açma

**Yönet** ekranını (alt gezinme çubuğu) açın ve **Yiyecek** (*“Yiyecek veritabanı kayıtlarını yönetin”*) seçeneğini seçin. **AAPS** v4'te Yiyecek **artık bir eklenti değildir**. Etkinleştirilecek bir şey yoktur; [Yönet paneli](#v4changes-manage) üzerinden açılan ayrı bir ekrandır.

---

## Yiyecek listesi

Yiyecekleriniz kaydırılabilir bir liste olarak gösterilir. Her satır yiyeceğin **adını**, **porsiyonunu / birimini / kategorisini** ve **karbonhidratını** gösterir:

![Arama ve ekleme düğmesi ile yiyecek veritabanı listesi](../images/v4/Food/food_list.png)

- **🔍 Ara** (üstte) — listeyi **ada** göre filtreler (büyük/küçük harf fark etmez).
- **Kategori filtresi** — çipler ile listeyi bir **kategoriye** daraltabilirsiniz. Bir kategori seçildiğinde, o kategori için **alt kategori** çipleri görünür. (Seçimi kaldırmak için seçili bir çipe tekrar dokunun.)
- **➕** (sağ altta) — yeni bir yiyecek ekler (aşağıya bakın).
- Bir yiyeceği **düzenlemek** için satırına dokunun.

Liste (veya geçerli filtre) boşsa ekranda **Veri yok** yazar.

---

## Yiyecek ekleme ve düzenleme

Eklemek için **➕** düğmesine, düzenlemek için mevcut bir satıra dokunun. Bir düzenleyici panel olarak açılır (**Yiyecek ekle** / **Yiyecek Düzenle**):

![Yiyecek düzenleyicisi — ad, kategori, porsiyon, karbonhidrat ve besin değerleri](../images/v4/Food/food_editor.png)

Alanlar şunlardır:

- **İsim** — zorunludur (bu alan olmadan kaydedemezsiniz).
- **Kategori** ve **Alt kategori** — isteğe bağlıdır, yiyecekleri gruplamak/filtrelemek için kullanılır.
- **Porsiyon** ve **Birim** — tipik porsiyon büyüklüğü. **Birim** için varsayılan değer **g**'dır.
- **Karb (g)** — yiyeceğin karbonhidrat miktarı.
- **Yağ (g)**, **Protein (g)**, **Enerji (kJ)** — isteğe bağlı besin değerleri.

Kaydetmek için **Kaydet**'e, değişiklikleri atmak için **Vazgeç**'e dokunun. Mevcut bir yiyeceği düzenlerken düzenleyicide bir **Sil** düğmesi de vardır.

```{admonition} Deleting is undoable
:class: note
Bir yiyeceği sildiğinizde **“Yiyecek silindi”** mesajı ve **Geri al** eylemi gösterilir. Böylece yanlışlıkla yapılan bir silme işlemi kolayca geri alınabilir.
```

---

## Bir yiyeceği bolus için kullanma

Her yiyecek satırında bir **hesaplayıcı** düğmesi vardır. Bu düğmeye dokunduğunuzda, yiyeceğin **karbonhidratı** önceden doldurulmuş ve yiyeceğin **adı** tedavi notu olarak eklenmiş şekilde **bolus sihirbazı** açılır. Böylece karbonhidratı yeniden yazmadan onaylayıp bolus verebilirsiniz.

```{admonition} The carbs value is used as-is
:class: note
Yiyeceğin kayıtlı **karbonhidrat** değeri doğrudan sihirbaza aktarılır. **AAPS** bu değeri porsiyonla veya ne kadar yediğinizle çarpmaz. Farklı bir miktar yediyseniz, onaylamadan önce sihirbazdaki karbonhidratı düzeltin. (Bolus sihirbazının veya karbonhidrat iletişim kutusunun *içinde* yiyecek seçici yoktur; buradaki yiyecek satırından başlarsınız.)
```

---

## Yiyecekler nereden gelir (Nightscout senkronizasyonu)

Yiyecek veritabanı **Nightscout** üzerinden paylaşılır, ancak **yalnızca tek yönde**:

- **İndirme:** **AAPS**, Nightscout sitenizin **yiyecek veritabanından** yiyecekleri **okur** ve yerel listeyi onunla senkronize tutar. Bu işlem NSClient senkronizasyonunun bir parçası olarak çalışır. Böylece eşleştirilmiş bir **istemci/takipçi** de aynı yiyeceklere sahip olur.
- **Yükleme:** **AAPS**, yiyecekleri **Nightscout'a** **göndermez** — NSClient yiyecek girdilerini yüklemeyi desteklemez. Bu nedenle **AAPS içinde** oluşturduğunuz veya düzenlediğiniz yiyecekler **o cihazda** kalır ve Nightscout'a ya da diğer cihazlarınıza aktarılmaz.

```{admonition} Maintain your shared list in Nightscout
:class: important
Yiyecekler **yalnızca indirildiği** için, tek bir yiyecek listesini telefonunuz, takipçiniz/[istemciniz](../RemoteFeatures/ClientMasterControl.md) ve kurulumunuzun geri kalanı arasında paylaşmanın yolu, listeyi **Nightscout**'ta (yerleşik yiyecek düzenleyicisi ile) tutmaktır. **AAPS** bu girdileri indirir. Yalnızca **AAPS**'te eklenen bir yiyecek o cihaza özeldir ve orada kalır: indirme, Nightscout girdilerini Nightscout kimliklerine göre eşleştirir. Bu yüzden bu girdileri ekler ve günceller, ancak yerel olarak oluşturduğunuz bir yiyeceğin üzerine asla yazmaz veya onu silmez (bir yiyecek yalnızca Nightscout'taki kopyası Nightscout'ta silindiğinde kaldırılır).

Yiyecek veritabanının ana birim ↔ istemci imzalı kontrol kanalının da bir parçası **olmadığını** unutmayın — yalnızca Nightscout verisi olarak aktarılır.
```

---

## Saatte yok

Yiyecek veritabanı bir **telefon** özelliğidir — bir **Wear OS saatte** yiyecek tarayıcısı, panel veya menü yoktur.

---


<!-- =====================================================================
     Screenshots captured from a real master device:
       - food_list.png    (Manage → Food: list row, search, add button)
       - food_editor.png  ("Add Food" editor: name/category/subcategory/portion/unit/carbs/fat/protein/energy)
     No food was created or deleted (the editor was cancelled).
     Sync facts code-verified: download via LoadFoodsWorker.getFoods(); upload disabled
     (DataSyncSelectorV3 processChangedFoods() commented out — "NSCv3 doesn't support food update").
     Maintainers: relocate page + images and fix cross-links as needed.
     ===================================================================== -->
