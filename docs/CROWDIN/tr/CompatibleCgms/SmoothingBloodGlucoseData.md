# Kan şekeri verilerini yumuşatma

**KŞ** verileri dalgalı/gürültülü ise **AAPS** insülini yanlış dozlayabilir. Bunun sonucunda yüksek veya düşük KŞ olabilir. CGM'nizde hatalar görürseniz veya dalgalı veriler alırsanız, sorun çözülene kadar döngüyü devre dışı bırakmanız önemlidir. CGM'nize bağlı olarak bu sorunların nedeni, **AAPS** içindeki CGM yapılandırması (aşağıda açıklandığı gibi) veya CGM sensörünün yerleştirildiği bölgeyle ilgili bir sorun olabilir (bu durumda CGM sensörünü değiştirmeniz gerekebilir).

## AAPS içinde verileri yumuşatma

**AAPS**, verileri CGM uygulaması yerine **AAPS** içinde yumuşatma seçeneği sunar. **Menüyü** (☰) açın, [**Konfigürasyon**](../SettingUpAaps/ConfigBuilder.md) ve ardından **Yumuşatma** öğesini seçin. Dört seçenek vardır ve aynı anda yalnızca biri etkin olabilir: **Yumuşatma yok**, **Üstel yumuşatma**, **Ortalama yumuşatma** ve **Kokusuz Kalman Filtresi**.

![Konfigürasyon > Yumuşatma](../images/v4/Configuration/configuration_smoothing.png)

### Exponential smoothing

Genel olarak başlangıç için önerilen seçenek budur, çünkü gürültüyü gidermede en agresif seçenektir ve en son değeri yeniden yazar. Ancak diğer özel öneriler için aşağıdaki tabloya bakın.

### Average smoothing

Bu seçenek, daha önce bazı CGM platformlarında kullanılan geriye dönük yumuşatmaya (back smoothing) benzer şekilde çalışır. KŞ değerindeki son değişikliklere daha hızlı tepki verir; bu nedenle gürültülü CGM verilerine yanlış tepki verme olasılığı daha yüksektir.

### Yumuşatma yok

Bu seçeneği yalnızca CGM verileriniz, **AAPS**'e gönderilmeden önce toplayıcı uygulamanız tarafından düzgün şekilde yumuşatılıyorsa kullanın.

### Kokusuz Kalman Filtresi (UKF)

Bu seçenek, gelen (gürültülü olabilecek) ölçümlerden gerçek glikoz değerinizi ve değişim hızını sürekli olarak tahmin etmek için istatistiksel bir model kullanır. Sensörünüzün o anki gürültü düzeyine otomatik olarak uyum sağlar. Ayrıca ani aykırı ölçümleri algılar ve reddeder. Üstel ve Ortalama yumuşatmaya göre daha gelişmiş bir seçenektir. Sabit bir yöntem kullanmak yerine yumuşatmanın sensörünüzün değişen gürültü düzeyine kendini uyarlamasını istiyorsanız kullanışlıdır.

(smoothing-xdrip-dexcom-g6)=

## Yumuşatma kullanımı için öneriler

Yumuşatma yöntemini, örneğin sensör yaşına bağlı olarak, **Yumuşatmayı değiştir** [Otomasyon eylemi](#automations-automation-action) ile otomatik olarak da değiştirebilirsiniz.

|               |    Üstel     |  Average   | Yumuşatma yok |
| ------------- |:------------:|:----------:|:-------------:|
| G5/G6/ONE     | Gürültülüyse |            |   Önerilir    |
| G7/ONE+/Stelo | Gürültülüyse | Kararlıysa |               |

Libre sensörleri gürültülüdür ve yumuşatma gerektirebilir. xDrip doğrudan bağlantısı veya yamalı uygulama veri kaynağı (Juggluco dahil, başka bir uygulamadan veri alma) kullanıldığında [yumuşatma zaten uygulamanın içinde yapılır](#libre2-value-smoothing-raw-values).

| Sensör / Veri kaynağı |  Juggluco   | xDrip doğrudan | xDrip köprü | xDrip yamalı uygulama |
| --------------------- |:-----------:|:--------------:|:-----------:|:---------------------:|
| Libre 1/14 gün/Pro    | Uygulanamaz |  Uygulanamaz   |   Average   |      Uygulanamaz      |
| Libre 2/2+ (AB)       |   Average   |      None      |   Average   |         None          |
| Libre 2/2+/3/3+       |   Average   |  Uygulanamaz   | Uygulanamaz |         None          |
