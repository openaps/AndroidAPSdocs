# Open Humans Uploader

## Verilerinizi bilim için bağışlayın

Verilerinizi araştırma projelerine bağışlayarak topluluğa yardımcı olabilirsiniz! Bu bilim insanlarının işleri ilerletmesine, yeni bilimsel fikirler üretmesine ve açık kaynaklı kapalı döngü sistemlerine açıklığı teşvik etmesine yardımcı olur. AndroidAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

Verilerinize ne olduğu ve verilerinize erişmelerine izin vererek hangi projeleri desteklemek istediğiniz konusunda tam kontrol sizde olur. Katıldığınız projeye bağlı olarak veriler, onlar tarafından farklı şekillerde ve ölçüde değerlendirilir ve kullanılır.

Aşağıdaki veriler Open Humans hesabınıza yüklenecektir:

- Glucose values
- Careportal events (except notes)
- Extended boluses
- Profile switches
- Total daily doses
- Temporary basals
- Temp targets
- Tercihler
- Application version
- Device model
- Screen dimensions

Nightscout URL'niz veya API secret şifreniz gibi gizli veya özel bilgileriniz yüklenmeyecektir.

## Kurulum

1. Create your account on [Open Humans](https://www.openhumans.org) if not already done. Dilerseniz mevcut Google veya Facebook hesaplarınızı yeniden kullanabilirsiniz.
2. Enable the “Open Humans” plugin in [Config Builder](../Configuration/Config-Builder.md).
3. Dişli çark düğmesini kullanarak ayarını açın. Yüklemeyi telefonun Wi-Fi kullandığı ve/veya şarj olduğu zamanlara sınırlayabilirsiniz.
4. Open Humans eklentisini açın (OH sekmesinden veya hamburger menüsünden) ve 'GİRİŞ'e tıklayın.

```{image} ../images/OHUploader1.png
:alt: Open Humans Konfigürasyon Ayarları
```

5. Open Humans Uploader hakkında verilen bilgileri ve kullanım koşullarını dikkatlice okuyun.
6. Kutuyu işaretleyerek onaylayın ve 'GİRİŞ'e tıklayın.
7. Open Humans web sitesi açılacaktır. Kimlik bilgilerinizle giriş yapın.
8. Herkese açık Open Humans profilinizde AndroidAPS Yükleyici üyeliğinizi gizlemek isteyip istemediğinize karar verin.
9. 'Projeyi yetkilendir' düğmesine tıklayın.

```{image} ../images/OHUploader2.png
:alt: Open Humans Kullanım Koşulları + Giriş
```

10. AAPS'ye geri döndüğünüzde, girişin başarılı olduğunu belirten bir istem göreceksiniz.
11. Kurulumun tamamlanması için Open Humans Uploader eklentisini ve telefonu açık tutun.
12. Kapat'a tıkladıktan sonra üye kimliğinizi göreceksiniz. Queue sizes > 0 shows that there is still data to be uploaded.
13. Open Humans'a veri yüklemeyi durdurmak istiyorsanız 'ÇIKIŞ'ı tıklayın.
14. Android bildirimi, yüklemeyi çalıştırma hakkında sizi bilgilendirecektir.

```{image} ../images/OHUploader3.png
:alt: Open Humans kurulumu bitir
```

15. You can manage your data by logging in to the [Open Humans website](https://www.openhumans.org).

```{image} ../images/OHWeb.png
:alt: Open Humans verilerinizi yönetin
```

## Verilerinizi paylaşmanın yolları

### [The 'OPEN' project](https://www.open-diabetes.eu/)

'OPEN' projesi, sayısı her geçen gün artan diyabetli ve çeşitli sağlık sistemleri ile insanlar üzerinde kendin yap yapay pankreas sistemlerinin (DIY APS) etkileri etrafında bir kanıt temeli oluşturmak için hasta inovasyoncuları, klinisyenleri, sosyal bilimcileri, bilgisayar bilimcileri ve hasta organizasyonlarını bir araya getiren uluslararası ve sektörler arası bir konsorsiyumdan oluşuyor. For more details see their [website](https://www.open-diabetes.eu/).

September 2020 the 'OPEN' project launched a [survey](https://survey.open-diabetes.eu/) including the option to donate data you uploaded to Open Humans. A [tutorial](https://open-diabetes.eu/en/open-survey/survey-tutorials/) how to donate your data to the 'OPEN' project is available on their site and within the survey itself.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Veri Ortaklığı, DIYAPS topluluğundan araştırma için veri setlerini paylaşmanın basit bir yolunu sağlamak için oluşturuldu. Veriler hem geleneksel araştırma çalışmaları oluşturacak geleneksel araştırmacılarla hem de kendi araştırma projelerinin bir parçası olarak verileri gözden geçirmek isteyen topluluktan grup veya bireylerle paylaşılır. OpenAPS Veri Ortaklığı, insanların AndroidAPS, Loop ve OpenAPS dahil olmak üzere DIYAPS'den verilerini kolayca yüklemelerini ve paylaşmalarını sağlamak için 'Open Humans' platformunu kullanır.

Verilerinizi aşağıdaki üç yoldan biriyle Open Humans'a yükleyebilirsiniz:

1. verilerinizi Open Humans'a yüklemek için AndroidAPS yükleyici seçeneğini kullanabilirsiniz
2. verilerinizi Open Humans'a yüklemek için Nightscout Veri Aktarımını kullanabilirsiniz
3. veri dosyalarını Open Humans'a manuel olarak yükleyebilirsiniz.

Bir hesap oluşturduktan ve verilerinizin Open Humans'a akışını sağladıktan sonra, isterseniz verilerinizi araştırma için bağışlamak üzere OpenAPS Veri Ortaklarına da katıldığınızdan emin olun.

## Kullanım Şartları

This is an open source tool that will copy your data to [Open Humans](https://www.openhumans.org). Açık izniniz olmadan verilerinizi üçüncü taraflarla paylaşma hakkımız yoktur. Projenin ve uygulamanın aldığı veriler, rastgele bir kullanıcı kimliği aracılığıyla tanımlanır ve yalnızca bu sürece ilişkin yetkilendirmenizle birlikte bir Open Humans hesabına güvenli bir şekilde iletilir. You can stop uploading and delete your upload data at any time via [www.openhumans.org](https://www.openhumans.org). Veri alan bazı projelerin bunu desteklemeyebileceğini unutmayın.

Also see [Open Humans Terms of Use](https://www.openhumans.org/terms/).

## Veri Gizliliği

Open Humans, her proje için size sayısal bir kimlik atayarak gizliliğinizi korumaya özen gösterir. Bu projelerin sizi tanımasını sağlar ancak sizi tanımlamaz. AndroidAPS tarafından yüklenen Uygulama Kimliği benzerdir ve yalnızca verilerin yönetilmesine yardımcı olur. Daha fazla bilgi için:

- [Open Humans Data Use Policy](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
