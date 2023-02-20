# AndroidAPS ile kapalı döngü sistemi nedir?

AndroidAPS, bir Android akıllı telefonda yapay pankreas sistemi (APS) görevi gören bir uygulamadır. Yapay pankreas sistemi nedir? Canlı bir pankreasın yaptığını yapmayı amaçlayan (otomatik olarak kan şekerini sağlıklı sınırlar içinde tutmak) bir yazılım programıdır.

Bir APS, biyolojik pankreasın yaptığı kadar iyi yapamaz, ancak ticari olarak mevcut cihazları ve basit ve güvenli yazılımları kullanarak tip 1 diyabetin daha kolay yönetilmesini sağlayabilir. Bu cihazlar, AndroidAPS'yi kan şekeri seviyelerinizden haberdar etmek için bir Sürekli Glikoz Monitörü (CGM) ve uygun insülin dozlarını vermek için AndroidAPS tarafından kontrol edilen bir insülin pompası içerir. Uygulama, bu cihazlarla bluetooth üzerinden iletişim kurar. Dozaj hesaplamalarını, binlerce kullanıcısı olan ve milyonlarca saatlik kullanımı birikmiş olan OpenAPS adı verilen başka bir yapay pankreas sistemi için geliştirilmiş bir algoritma ya da kurallar dizisi kullanarak yapmaktadır.

Bir uyarı notu: AndroidAPS, herhangi bir ülkede herhangi bir tıbbi otorite tarafından düzenlenmemiştir. AndroidAPS'yi kullanmak aslında kendi üzerinizde tıbbi bir deney yapmaktır. Sistemin kurulumu kararlılık ve teknik bilgi gerektirir. Başlangıçta teknik bilgiye sahip değilseniz, sonunda kesinlkle olacaktır. İhtiyacınız olan tüm bilgiler bu belgelerde, başka bir yerde çevrimiçi olarak veya daha önce yapmış olanlardan bulunabilir - onlara Facebook gruplarında veya diğer forumlarda sorabilirsiniz. Birçok kişi AndroidAPS'yi başarıyla oluşturdu ve şimdi tamamen güvenli bir şekilde kullanıyor, ancak her kullanıcının şunları yapması önemlidir:

- Builds the system themselves so that they thoroughly understand how it works
- Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
- Maintains and monitors the system to ensure it is working properly

```{note}
**Disclaimer and Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout şu anda HIPAA gizlilik uyumluluğu için herhangi bir girişimde bulunmamaktadır. Nightscout ve AndroidAPS'i kendi sorumluluğunuzda kullanın. Tıbbi kararlar almak için bilgileri veya kodu kullanmayın.
- github.com'dan alınan kodun kullanımı herhangi bir garanti veya resmi destek içermez. Ayrıntılar için lütfen bu deponun LİSANSINI gözden geçirin.
- Tüm ürün ve şirket adları, ticari markalar, hizmet markaları, tescilli ticari markalar ve tescilli hizmet markaları ilgili sahiplerinin mülkiyetindedir. Kullanımları bilgi amaçlıdır ve onlar tarafından herhangi bir bağlantı veya onay anlamına gelmez.

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).
```

Meydan okumaya hazırsanız, lütfen okumaya devam edin.

## AndroidAPS'nin arkasındaki birincil hedefler

- An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (<https://openaps.org/reference-design/>)
- An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
- An app to which users can easily add or remove modules as needed
- An app with different versions for specific locations and languages.
- An app which can be used in open- and closed-loop mode
- An app that is totally transparent: users can input parameters, see results, and make the final decision
- An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves
- An app closely integrated with Nightscout
- An app in which the user is in control of safety constraints

## Nasıl başlanır

Tabii ki, buradaki tüm bu içerikler çok önemlidir, ancak başlangıçta oldukça kafa karıştırıcı olabilir. A good orientation is given by the [Module Overview](../Module/module.md) and the [Objectives](../Usage/Objectives.html).
