# What is a closed loop system with AAPS?

AAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. Yapay pankreas sistemi nedir? Canlı bir pankreasın yaptığını yapmayı amaçlayan (otomatik olarak kan şekerini sağlıklı sınırlar içinde tutmak) bir yazılım programıdır.

Bir APS, biyolojik pankreasın yaptığı kadar iyi yapamaz, ancak ticari olarak mevcut cihazları ve basit ve güvenli yazılımları kullanarak tip 1 diyabetin daha kolay yönetilmesini sağlayabilir. Those devices include a continuous glucose monitor (CGM) to tell AAPS about your blood sugar levels and an insulin pump which AAPS controls to deliver appropriate doses of insulin. Uygulama, bu cihazlarla bluetooth üzerinden iletişim kurar. Dozaj hesaplamalarını, binlerce kullanıcısı olan ve milyonlarca saatlik kullanımı birikmiş olan OpenAPS adı verilen başka bir yapay pankreas sistemi için geliştirilmiş bir algoritma ya da kurallar dizisi kullanarak yapmaktadır.

A note of caution: AAPS is not regulated by any medical authority in any country. Using AAPS is essentially carrying out a medical experiment on yourself. Sistemin kurulumu kararlılık ve teknik bilgi gerektirir. Başlangıçta teknik bilgiye sahip değilseniz, sonunda kesinlkle olacaktır. İhtiyacınız olan tüm bilgiler bu belgelerde, başka bir yerde çevrimiçi olarak veya daha önce yapmış olanlardan bulunabilir - onlara Facebook gruplarında veya diğer forumlarda sorabilirsiniz. Many people have successfully built AAPS and are now using it entirely safely, but it is essential that every user:

- Sistemin nasıl çalıştığını tam olarak anlamak için sistemi kendiniz kurun
- Bireysel diyabet ayarlarını diyabet ekibi ile birlikte en iyi şekilde çalışacak şekilde ayarlar
- Sistemin düzgün çalıştığından emin olmak için bakımını yapar ve izler

```{note}
**Sorumluluk Reddi ve Uyarı**

- Burada açıklanan tüm bilgiler, düşünce ve kodlar yalnızca bilgilendirme ve eğitim amaçlıdır. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. Nightscout ve AAPS'i kendi sorumluluğunuzda kullanın. Tıbbi kararlar almak için bilgileri veya kodu kullanmayın.
- github.com'dan alınan kodun kullanımı herhangi bir garanti veya resmi destek içermez. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.
- Tüm ürün ve şirket adları, ticari markalar, hizmet markaları, tescilli ticari markalar ve tescilli hizmet markaları ilgili sahiplerinin mülkiyetindedir. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

Lütfen unutmayın - bu projenin [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) veya [Medtronic](https://www.medtronic.com/) ile hiçbir ilişkisi yoktur ve bunlar tarafından desteklenmemektedir.
```

Meydan okumaya hazırsanız, lütfen okumaya devam edin.

## Primary goals behind AAPS

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
