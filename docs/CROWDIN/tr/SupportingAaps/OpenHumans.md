# Open Humans Uploader

## Verilerinizi bilim için bağışlayın

Verilerinizi araştırma projelerine bağışlayarak topluluğa yardımcı olabilirsiniz! Bu, bilim insanlarının iyiliği başkalarına aktarmasına, yeni bilimsel fikirler geliştirmesine ve açık kaynaklı kapalı döngü sistemlerini daha bilinir hale getirmesine yardımcı olur. AAPS, verilerinizi [Open Humans](https://www.openhumans.org) ile senkronize etmeye hazırdır. Open Humans; genetik, aktivite ve sağlık verileri gibi kişisel verilerinizi yüklemenize, bağlamanıza ve saklamanıza olanak tanıyan bir platformdur.

Verilerinize ne olduğu ve verilerinize erişmelerine izin vererek hangi projeleri desteklemek istediğiniz konusunda tam kontrol sizde olur. Katıldığınız projeye bağlı olarak veriler, onlar tarafından farklı şekillerde ve ölçüde değerlendirilir ve kullanılır.

Aşağıdaki veriler Open Humans hesabınıza yüklenecektir:

- Glikoz değerleri
- Bakım Portalı etkinlikleri (notlar hariç)
- Yayma Bolus
- Profil değişimleri
- Toplam günlük doz
- Geçici bazallar
- Geçici hedefler
- Tercihler
- Uygulama sürümü
- Cihaz modeli
- Ekran Ölçüleri

Nightscout URL'niz veya API secret'ınız gibi gizli veya özel bilgileriniz yüklenmez.

## Kurulum

1. Henüz yapmadıysanız, hesabınızı [Open Humans](https://www.openhumans.org) üzerinde oluşturun. Dilerseniz mevcut Google veya Facebook hesaplarınızı yeniden kullanabilirsiniz.
2. **Open Humans** eklentisini [**Konfigürasyon** > **İletişim**](../SettingUpAaps/ConfigBuilder.md) bölümünde etkinleştirin.

![Konfigürasyon > İletişim bölümünde etkinleştirilmiş Open Humans](../images/OHUploader1.png)

3. **Open Humans** kartında **Ayarlar**'a dokunun. Yüklemeleri, telefonun Wi-Fi kullandığı (**Sadece WiFi**) ve/veya şarj olduğu (**Yalnızca şarj olurken**) zamanlarla sınırlayabilirsiniz.

![Sadece WiFi ve Yalnızca şarj olurken seçenekleriyle Open Humans ayarları](../images/OHUploader_settings.png)

4. **Open Humans** kartında **Eklentiyi aç**'a, ardından **Kurulum**'a dokunun.

![Kurulum düğmesiyle Open Humans eklenti ekranı](../images/OHUploader_setup.png)

5. **Open Humans'a hoş geldiniz** ekranında **İleri**'ye dokunun. **Onay** ekranını dikkatlice okuyun: bu ekran kullanım koşullarını ve hangi verilerin yüklenip hangilerinin yüklenmediğini gösterir.
6. **Anladım ve kabul ediyorum.** (1) seçeneğini açın ve **Open Humans için Giriş Yapın** (2) düğmesine dokunun.

![AAPS'teki Open Humans hoş geldiniz ve onay ekranları](../images/OHUploader2.png)

7. Open Humans web sitesi açılacaktır. Kimlik bilgilerinizle giriş yapın.
8. Herkese açık Open Humans profilinizde AAPS Uploader üyeliğinizi gizlemek isteyip istemediğinize karar verin (1).
9. **Authorize project** (projeyi yetkilendir) düğmesine tıklayın (2).

![Open Humans web sitesinde giriş ve proje yetkilendirmesi](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
Yukarıdaki ekran görüntüleri Open Humans web sitesinin eski bir sürümünü gösterir ve hâlâ eski proje adını, **AndroidAPS Uploader**'ı kullanır. Adımlar aynıdır.
```

10. **AAPS**'e döndüğünüzde **Son rötuşlar** ekranı devam etmek isteyip istemediğinizi sorar. **Devam et**'e dokunun.
11. **Bitirdik!** yazısı görünene kadar bekleyin, ardından **Kapat**'a dokunun. Bundan sonra telefonunuz zaman zaman arka planda veri yükler.
12. **Open Humans** eklenti ekranında artık **Proje Üye Kimliği**'niz görünür. Yüklemeyi hemen başlatmak istiyorsanız **Şimdi yükle**'ye dokunun.
13. Open Humans'a veri yüklemeyi durdurmak istiyorsanız **Çıkış**'a dokunun.
14. Bir Android bildirimi, devam eden yükleme hakkında sizi bilgilendirir.

![Open Humans kurulumunu bitirme](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
Yukarıdaki ekran görüntüsü eski bir **AAPS** sürümüne aittir. **AAPS** 4'te onay ekranları **Son rötuşlar** ve **Bitirdik!** ekranlarıdır, kuyruk boyutu yoktur ve düğmeler **Şimdi yükle** ile **Çıkış**'tır.
```

15. Verilerinizi [Open Humans web sitesine](https://www.openhumans.org) giriş yaparak yönetebilirsiniz.

![Open Humans veri yönetimi](../images/OHWeb.png)

## Verilerinizi paylaşmanın yolları

### ['OPEN' projesi](https://www.open-diabetes.eu/)

'OPEN' projesi; hasta yenilikçilerini, klinisyenleri, sosyal bilimcileri, bilgisayar bilimcilerini ve hasta savunuculuğu kuruluşlarını uluslararası ve sektörler arası bir konsorsiyumda bir araya getirir. Amaç, giderek daha fazla diyabetli kişinin kullandığı kendin yap yapay pankreas sistemlerinin (DIY APS) çeşitli yönlerini araştırmaktır. Daha fazla ayrıntı için lütfen [web sitelerine](https://www.open-diabetes.eu/) bakınız.

Eylül 2020'de 'OPEN' projesi, Open Humans'a yüklediğiniz verileri bağışlama seçeneği de dahil olmak üzere bir [anket](https://survey.open-diabetes.eu/) başlattı. Verilerinizi 'OPEN' projesine nasıl bağışlayacağınızı anlatan bir [rehber](https://open-diabetes.eu/en/open-survey/survey-tutorials/), projenin sitesinde ve anketin içinde bulunur.

### [OpenAPS Veri Ortaklığı](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Veri Ortaklığı, DIYAPS topluluğundan araştırma için veri setlerini paylaşmanın basit bir yolunu sağlamak için oluşturuldu. Veriler hem geleneksel araştırma çalışmaları oluşturacak geleneksel araştırmacılarla hem de kendi araştırma projelerinin bir parçası olarak verileri gözden geçirmek isteyen topluluktan grup veya bireylerle paylaşılır. OpenAPS Veri Ortaklığı, AAPS, Loop ve OpenAPS dahil DIYAPS sistemlerinden gelen verilerin kolayca yüklenmesi ve paylaşılması için 'Open Humans' platformunu kullanır.

Verilerinizi aşağıdaki üç yoldan biriyle Open Humans'a yükleyebilirsiniz:

1. verilerinizi Open Humans'a yüklemek için AAPS yükleyici seçeneğini kullanabilirsiniz
2. verilerinizi Open Humans'a yüklemek için Nightscout Veri Aktarımını kullanabilirsiniz
3. veri dosyalarını Open Humans'a manuel olarak yükleyebilirsiniz.

Bir hesap oluşturduktan ve verileriniz Open Humans'a akmaya başladıktan sonra, isterseniz verilerinizi araştırma için bağışlamak üzere OpenAPS Veri Ortaklığı'na da katılmayı unutmayın.

## Kullanım Şartları

Bu verilerinizi [Open Humans](https://www.openhumans.org)'a yükleyen açık kaynaklı bir araçtır. Açık izniniz olmadan verilerinizi üçüncü taraflarla paylaşma hakkımız yoktur. Projenin ve uygulamanın aldığı veriler, rastgele bir kullanıcı kimliği aracılığıyla tanımlanır ve yalnızca bu sürece ilişkin yetkilendirmenizle birlikte bir Open Humans hesabına güvenli bir şekilde iletilir. İstediğiniz zaman [www.openhumans.org](https://www.openhumans.org) üzerinden yüklemeyi durdurabilir ve yüklenen verilerinizi silebilirsiniz. Veri alan bazı projelerin bunu desteklemeyebileceğini unutmayın.

Ayrıca [Open Humans Kullanım Koşulları](https://www.openhumans.org/terms/) sayfasına bakın.

## Veri Gizliliği

Open Humans, her proje için size sayısal bir kimlik atayarak gizliliğinizi korumaya özen gösterir. Bu sayede projeler sizi tanıyabilir, ancak kimliğinizi belirleyemez. AAPS'in yüklediği Uygulama Kimliği de benzerdir ve yalnızca verilerin yönetimine yardımcı olur. Daha fazla bilgi için:

- [Open Humans Veri Kullanımı Politikası](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
