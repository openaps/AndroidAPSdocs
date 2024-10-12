# Open Humans Uploader

## Verilerinizi bilim için bağışlayın

Verilerinizi araştırma projelerine bağışlayarak topluluğa yardımcı olabilirsiniz! Bu bilim insanlarının işleri ilerletmesine, yeni bilimsel fikirler üretmesine ve açık kaynaklı kapalı döngü sistemlerine açıklığı teşvik etmesine yardımcı olur. AAPS is ready to synchronize your data with [Open Humans](https://www.openhumans.org), a platform allowing you to upload, connect, and store your personal data – such as genetics, activity and health data.

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

Nightscout URL'niz veya API secret şifreniz gibi gizli veya özel bilgileriniz yüklenmeyecektir.

## Kurulum

1. Henüz yapmadıysanız, hesabınızı [Open Humans](https://www.openhumans.org) üzerinde oluşturun. Dilerseniz mevcut Google veya Facebook hesaplarınızı yeniden kullanabilirsiniz.
2. [ Konfigürasyon ayarları ](../configuration/config-builder.md)'nda “Open Humans” eklentisini etkinleştirin.
3. Dişli çark düğmesini kullanarak ayarını açın. Yüklemeyi telefonun Wi-Fi kullandığı ve/veya şarj olduğu zamanlara sınırlayabilirsiniz.
4. Open Humans eklentisini açın (OH sekmesinden veya hamburger menüsünden) ve 'GİRİŞ'e tıklayın.

![Open Humans Config Builder](../images/OHUploader1.png)

5. Open Humans Uploader hakkında verilen bilgileri ve kullanım koşullarını dikkatlice okuyun.
6. Kutuyu işaretleyerek onaylayın ve 'GİRİŞ'e tıklayın.
7. Open Humans web sitesi açılacaktır. Kimlik bilgilerinizle giriş yapın.
8. Decide whether you want to hide your AAPS Uploader membership in your public Open Humans profile.
9. 'Projeyi yetkilendir' düğmesine tıklayın.

![Open Humans Terms of Use + Login](../images/OHUploader2.png)

10. AAPS'ye geri döndüğünüzde, girişin başarılı olduğunu belirten bir istem göreceksiniz.
11. Kurulumun tamamlanması için Open Humans Uploader eklentisini ve telefonu açık tutun.
12. Kapat'a tıkladıktan sonra üye kimliğinizi göreceksiniz. Kuyruk boyutları > 0 hala yüklenecek verilerin olduğunu gösterir.
13. Open Humans'a veri yüklemeyi durdurmak istiyorsanız 'ÇIKIŞ'ı tıklayın.
14. Android bildirimi, yüklemeyi çalıştırma hakkında sizi bilgilendirecektir.

![Open Humans finish setup](../images/OHUploader3.png)

15. Verilerinizi [ Open Humans Web Sitesi ](https://www.openhumans.org) 'ne giriş yaparak yönetebilirsiniz.

![Open Humans manage data](../images/OHWeb.png)

## Verilerinizi paylaşmanın yolları

### ['OPEN' projesi](https://www.open-diabetes.eu/)

'OPEN' projesi, sayısı her geçen gün artan diyabetli ve çeşitli sağlık sistemleri ile insanlar üzerinde kendin yap yapay pankreas sistemlerinin (DIY APS) etkileri etrafında bir kanıt temeli oluşturmak için hasta inovasyoncuları, klinisyenleri, sosyal bilimcileri, bilgisayar bilimcileri ve hasta organizasyonlarını bir araya getiren uluslararası ve sektörler arası bir konsorsiyumdan oluşuyor. Daha fazla ayrıntı için lütfen [web sitelerine](https://www.open-diabetes.eu/) bakınız.

Eylül 2020 'OPEN' projesi, Open Humans'a yüklediğiniz verileri bağışlama seçeneği de dahil olmak üzere bir [anket](https://survey.open-diabetes.eu/) başlattı. Verilerinizi 'OPEN' projesine nasıl bağışlayacağınız konusunda bir [öğretici video](https://open-diabetes.eu/en/open-survey/survey-tutorials/) kendi sitesinde ve anketin içinde mevcuttur.

### [OpenAPS Veri Ortaklığı](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Veri Ortaklığı, DIYAPS topluluğundan araştırma için veri setlerini paylaşmanın basit bir yolunu sağlamak için oluşturuldu. Veriler hem geleneksel araştırma çalışmaları oluşturacak geleneksel araştırmacılarla hem de kendi araştırma projelerinin bir parçası olarak verileri gözden geçirmek isteyen topluluktan grup veya bireylerle paylaşılır. The OpenAPS Data Commons uses the 'Open Humans' platform to enable people to easily upload and share their data from DIYAPS including AAPS, Loop, and OpenAPS.

Verilerinizi aşağıdaki üç yoldan biriyle Open Humans'a yükleyebilirsiniz:

1. use the AAPS uploader option to get your data into Open Humans
2. verilerinizi Open Humans'a yüklemek için Nightscout Veri Aktarımını kullanabilirsiniz
3. veri dosyalarını Open Humans'a manuel olarak yükleyebilirsiniz.

Bir hesap oluşturduktan ve verilerinizin Open Humans'a akışını sağladıktan sonra, isterseniz verilerinizi araştırma için bağışlamak üzere OpenAPS Veri Ortaklarına da katıldığınızdan emin olun.

## Kullanım Şartları

Bu verilerinizi [Open Humans](https://www.openhumans.org)'a yükleyen açık kaynaklı bir araçtır. Açık izniniz olmadan verilerinizi üçüncü taraflarla paylaşma hakkımız yoktur. Projenin ve uygulamanın aldığı veriler, rastgele bir kullanıcı kimliği aracılığıyla tanımlanır ve yalnızca bu sürece ilişkin yetkilendirmenizle birlikte bir Open Humans hesabına güvenli bir şekilde iletilir. Yükleme verilerinizi istediğiniz zaman [www.openhumans.org](https://www.openhumans.org) üzerinden yüklemeyi durdurabilir ve silebilirsiniz. Veri alan bazı projelerin bunu desteklemeyebileceğini unutmayın.

Ayrıca Bakınız [Open Humans Kullanım Koşulları](https://www.openhumans.org/terms/).

## Veri Gizliliği

Open Humans, her proje için size sayısal bir kimlik atayarak gizliliğinizi korumaya özen gösterir. Bu projelerin sizi tanımasını sağlar ancak sizi tanımlamaz. The Application ID uploaded by AAPS is similar and only helps administrate the data. Daha fazla bilgi için:

- [Open Humans Veri Kullanımı Politikası](https://www.openhumans.org/data-use/)
- [Open Humans GDPR](https://www.openhumans.org/gdpr/)
