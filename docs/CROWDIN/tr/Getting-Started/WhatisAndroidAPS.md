# AndroidAPS ile kapalı döngü sistemi nedir?

AndroidAPS, bir Android akıllı telefonda yapay pankreas sistemi (APS) görevi gören bir uygulamadır. Yapay pankreas sistemi nedir? Canlı bir pankreasın yaptığını yapmayı amaçlayan (otomatik olarak kan şekerini sağlıklı sınırlar içinde tutmak) bir yazılım programıdır.

Bir APS, biyolojik pankreasın yaptığı kadar iyi yapamaz, ancak ticari olarak mevcut cihazları ve basit ve güvenli yazılımları kullanarak tip 1 diyabetin daha kolay yönetilmesini sağlayabilir. Bu cihazlar, AndroidAPS'yi kan şekeri seviyelerinizden haberdar etmek için bir Sürekli Glikoz Monitörü (CGM) ve uygun insülin dozlarını vermek için AndroidAPS tarafından kontrol edilen bir insülin pompası içerir. Uygulama, bu cihazlarla bluetooth üzerinden iletişim kurar. Dozaj hesaplamalarını, binlerce kullanıcısı olan ve milyonlarca saatlik kullanımı birikmiş olan OpenAPS adı verilen başka bir yapay pankreas sistemi için geliştirilmiş bir algoritma ya da kurallar dizisi kullanarak yapmaktadır.

Bir uyarı notu: AndroidAPS, herhangi bir ülkede herhangi bir tıbbi otorite tarafından düzenlenmemiştir. AndroidAPS'yi kullanmak aslında kendi üzerinizde tıbbi bir deney yapmaktır. Sistemin kurulumu kararlılık ve teknik bilgi gerektirir. Başlangıçta teknik bilgiye sahip değilseniz, sonunda kesinlkle olacaktır. İhtiyacınız olan tüm bilgiler bu belgelerde, başka bir yerde çevrimiçi olarak veya daha önce yapmış olanlardan bulunabilir - onlara Facebook gruplarında veya diğer forumlarda sorabilirsiniz. Birçok kişi AndroidAPS'yi başarıyla oluşturdu ve şimdi tamamen güvenli bir şekilde kullanıyor, ancak her kullanıcının şunları yapması önemlidir:

- Sistemin nasıl çalıştığını tam olarak anlamak için sistemi kendiniz kurun
- Bireysel diyabet ayarlarını diyabet ekibi ile birlikte en iyi şekilde çalışacak şekilde ayarlar
- Sistemin düzgün çalıştığından emin olmak için bakımını yapar ve izler

```{note}
**Sorumluluk Reddi ve Uyarı**

- Burada açıklanan tüm bilgiler, düşünce ve kodlar yalnızca bilgilendirme ve eğitim amaçlıdır. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. Nightscout ve AndroidAPS'i kendi sorumluluğunuzda kullanın. Tıbbi kararlar almak için bilgileri veya kodu kullanmayın.
- github.com'dan alınan kodun kullanımı herhangi bir garanti veya resmi destek içermez. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.
- Tüm ürün ve şirket adları, ticari markalar, hizmet markaları, tescilli ticari markalar ve tescilli hizmet markaları ilgili sahiplerinin mülkiyetindedir. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

Lütfen unutmayın - bu projenin [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) veya [Medtronic](https://www.medtronic.com/) ile hiçbir ilişkisi yoktur ve bunlar tarafından desteklenmemektedir.
```

Meydan okumaya hazırsanız, lütfen okumaya devam edin.

## AndroidAPS'nin arkasındaki birincil hedefler

- Dahili güvenliği olan bir uygulama. Oref0 ve oref1 olarak bilinen algoritmaların güvenlik özelliklerini okumak için [burayı ](https://openaps.org/reference-design/) tıklayın.
- Yapay pankreas ve Nightscout ile tip 1 diyabeti yönetmek için hepsi bir arada uygulama
- Kullanıcıların gerektiğinde modülleri kolayca ekleyebileceği veya çıkarabileceği bir uygulama
- Belirli konumlar ve diller için farklı sürümleri olan bir uygulama.
- Açık ve kapalı döngü modunda kullanılabilen bir uygulama
- Tamamen şeffaf bir uygulama: kullanıcılar parametreleri girebilir, sonuçları görebilir ve nihai kararı verebilir
- Belirli pompa sürücülerinden bağımsız olan ve kullanıcıların kendi kendilerine kullanmadan önce güvenle deney yapabilmeleri için bir "sanal pompa" içeren bir uygulama
- Nightscout ile yakından entegre edilmiş bir uygulama
- Kullanıcının güvenlik kısıtlamalarını kontrol ettiği bir uygulama

## Nasıl başlanır

Tabii ki, buradaki tüm bu içerikler çok önemlidir, ancak başlangıçta oldukça kafa karıştırıcı olabilir. [Modüle Genel Bakış](../Module/module.md) ve [Hedefler](../Usage/Objectives.html) iyi bir yönlendirme sağlar.
