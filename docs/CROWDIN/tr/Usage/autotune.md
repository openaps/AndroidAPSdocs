# Otoayar eklentisi nasıl kullanılır? (sadece geliştirici sürümünde)

Otoayar algoritması hakkında daha fazla ayrıntıyı [OpenAPS dokümantasyonu](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)nda bulabilirsiniz.

Otoayar eklentisi, AAPS içindeki OpenAPS otoayar algoritmasının uygulanmasıdır.

**Şu anda otoayar eklentisi yalnızca mühendislik modundaki geliştirici sürümünde mevcuttur.**

## Otoayar kullanıcı arabirimi

![Otoayar varsayılan ekranı](../images/Autotune/Autotune_1.png)

- Ayarlamak istediğiniz giriş profilini Profil açılır menüsünden seçebilirsiniz (varsayılan olarak mevcut etkin profiliniz seçilidir)
  - Not: Her yeni profil seçiminde, önceki sonuçlar kaldırılacak ve Gün Ayar parametreleri varsayılan değere ayarlanacaktır.
- Ayar günleri, profilinizi ayarlamak için hesaplamada kullanılan gün sayısını içermektedir. Minimum değer 1 gün ve maksimum değer 30 gündür. Doğru yinelemeli ve sorunsuz sonuçlar elde etmek için bu sayı çok küçük olmamalıdır (her hesaplama için 7 günden fazla)
  - Not: Ayar günleri parametresini her değiştirdiğinizde, önceki sonuçlar kaldırılacaktır
- Son Çalıştırma, en son geçerli hesaplamanızı kurtaran bir bağlantıdır. Otoayarı o gün başlatmadıysanız veya yukarıdaki hesaplama parametresinin değiştirilmesiyle önceki sonuçlar kaldırıldıysa, en son başarılı çalıştırmanın parametrelerini ve sonuçlarını kurtarabilirsiniz.
- Uyarı size örneğin seçilen profil hakkında bazı bilgiler gösterir (birkaç Kİ değeriniz veya birkaç İDF değeriniz varsa)
  - Not: Otomatik ayar hesaplaması yalnızca tek bir Kİ ve tek bir İDF değeriyle çalışır. Şu anda bir sirkadiyen Kİ veya sirkadiyen İDF'yi ayarlamak için mevcut bir OtoAyar algoritması yoktur. Giriş profilinizin birkaç değeri varsa, profilinizi ayarlamak için dikkate alınan ortalama değeri uyarı bölümünde görebilirsiniz.
- Check Input Profile button open the Profile Viewer to allow you a quick verification of your profile (Units, DIA, IC, ISF, basal and target)
  - Not: OtoAyar, yalnızca Kİ (tek değer), İDF (tek değer) ve bazal (sirkadiyen varyasyonlu) ayarlarınızı yapacaktır. Units, DIA and target will remain unchanged in output profile.

- "OtoAyarı Çalıştır", seçili profil ve ayarlama gün sayısı ile OtoAyar hesaplamasını başlatır
  - Not: Otomatik ayar hesaplaması uzun sürebilir. Başlatıldıktan sonra, başka bir görünüme (ev, ...) geçebilir ve sonuçları görmek için daha sonra otoayar eklentisinde geri dönebilirsiniz

![Otoayar Çalışmayı başlat](../images/Autotune/Autotune_2.png)

- Ardından çalıştırma sırasında aşağıda ara sonuçları göreceksiniz

  - Not: Çalıştırma sırasında ayarlar kilitlenir, bu nedenle artık seçilen giriş profilini veya gün sayısını değiştiremezsiniz. Diğer parametrelerle başka bir çalıştırma başlatmak istiyorsanız mevcut hesaplamanın bitmesini beklemeniz gerekecektir.

  ![Otoayar çalışıyor](../images/Autotune/Autotune_3.png)

- OtoAyar hesaplaması bittiğinde, sonucu (Ayarlanmış profil) ve aşağıda dört buton göreceksiniz.

![Otoayar Sonucu](../images/Autotune/Autotune_4.png)

- Girdi profilini ("Profil" sütunu), çıktı profilini ("Ayar" sütunu) ve her değer için varyasyon yüzdesini ("%" Sütunu) her zaman karşılaştırmak önemlidir.

- Bazal oranlar için "kayıp gün" sayısına da sahipsiniz. Otoayarın bu dönemde bazal oranı ayarlamak için "Bazal" olarak kategorize edilmiş yeterli veriye sahip olmadığı durumlarda (örneğin, her yemekten sonra karbonhidrat emilimi durumunda) eksik günleriniz olacaktır. Bu sayı, özellikle bazal önemli olduğunda (örneğin gece veya öğleden sonra) mümkün olduğunca düşük olmalıdır.

- "Profilleri karşılaştır" butonu, profil karşılaştırıcı görünümünü açar. Giriş profili mavi ve çıkış profili ("Ayarlanmış" olarak adlandırılır) kırmızıdır.

  - Not: Aşağıdaki örnekte, giriş profilinin Kİ ve İDF için sirkadiyen değişimi vardır, ancak hesaplanan çıktı profilinin tek bir değeri vardır. Bir sirkadiyen çıktı profili almanız sizin için önemliyse aşağıdaki [Sirkadiyen Kİ veya İDF profiline](#circadian-ic-or-isf-profile) bakın.

  ![Otoayar profil karşılaştırma](../images/Autotune/Autotune_5.png)

- Sonuçlara güveniyorsanız, (giriş profili ile çıktı profili arasında düşük yüzdeli farklılık) "Profili etkinleştir" düğmesine tıklayabilir ve ardından doğrulamak için Tamam'a tıklayabilirsiniz.

  - Ayarlanmış profili etkinleştirin, Yerel profil eklentinizde otomatik olarak yeni bir "Ayarlanmış" profil oluşturacaktır.
  - Yerel profil eklentinizde zaten "Ayarlanmış" (Tuned) adlı bir profiliniz varsa, bu profil aktivasyondan önce hesaplanan Otoayar profiliyle güncellenecektir.

  ![Otoayar profil etkinleştirme](../images/Autotune/Autotune_6.png)

- Ayarlanmış profilin gerektiğini düşünüyorsanız (örneğin, bazı varyasyonların çok önemli olduğunu düşünüyorsanız), "Yerel profile kopyala" düğmesine tıklayabilirsiniz.

  - Yerel profil eklentisinde "Ayarlanmış" ön ekine ve çalıştırmanın tarih ve saatine sahip yeni bir profil oluşturulacak

![Otoayar yerel profile kopyalama](../images/Autotune/Autotune_7.png)

- Ardından, Ayarlanmış profilini düzenlemek için yerel profili seçebilirsiniz (Yerel profil eklentisini açtığınızda varsayılan olarak seçilecektir)

  - yerel profildeki değerler ancak kullanıcı arabiriminde pompa kapasitenize yuvarlanır

  ![Otoayar yerel profil güncelleme](../images/Autotune/Autotune_8.png)

- Giriş profilinizi Otoayar sonuçlarıyla değiştirmek isterseniz, "Giriş profilini güncelle" düğmesine tıklayın ve açılan pencereyi Tamam ile onaylayın

  - Not: "Giriş profilini güncelle"den sonra "Profili etkinleştir"e tıklarsanız, varsayılan "Ayarlanmış" profili değil, güncellenmiş profilinizi etkinleştirirsiniz.

  ![Otoayar giriş profilini güncelleme](../images/Autotune/Autotune_9.png)

- Giriş profilinizi güncellediyseniz, "Giriş profilini güncelle" butonunun yerini "Giriş profilini geri al" butonu alır (aşağıdaki ekran görüntüsüne bakın). Bu şekilde, Yerel profil eklentisindeki mevcut giriş profilinizin zaten son çalıştırmanın sonucunu içerip içermediğini hemen görebilirsiniz. Ayrıca, bu buton ile otoayar sonucu olmadan giriş profilinizi kurtarma olanağına da sahipsiniz.

  ![Otoayar giriş profilini güncelleme](../images/Autotune/Autotune_10.png)



## OtoAyar ayarları

(autotune-plugin-settings)=

### Otoayar eklenti ayarları

![Otoayar varsayılan ekranı](../images/Autotune/Autotune_11.png)

- Otomasyon ile Profil değiştirme (varsayılan Kapalı): aşağıdaki [Otoayarı bir otomasyon kuralıyla çalıştırma](#run-autotune-with-an-automation-rule) bölümüne bakın. Bu ayarı Açık olarak değiştirirseniz, giriş profili Ayarlanmış profil tarafından otomatik olarak güncellenecek ve etkinleştirilecektir.
  - **Dikkatli Olun, Ayarlanmış profilin güncellenmesi ve etkinleştirilmesinden sonra döngünüzü iyileştirdiğine güvenmeli ve takip eden birkaç gün boyunca bunu doğrulamalısınız.**

- UAM'ı bazal olarak kategorize et (varsayılan Açık): Bu ayar, herhangi bir karbonhidrat girmeden AndroidAPS kullanan kullanıcılar içindir (Tam UAM). (Kapalı olduğunda) UAM'ın bazal olarak kategorize edilmesini önleyecektir.
  - Not: Bir gün boyunca tespit edilen en az bir saatlik karbonhidrat emiliminiz varsa, bu ayar ne olursa olsun (Açık veya Kapalı) "UAM" olarak sınıflandırılan tüm veriler bazal olarak kategorize edilir.
- Veri gün sayısı (varsayılan 5): Bu ayar ile varsayılan değer tanımlayabilirsiniz. Otoayar eklentisinde her yeni profil seçtiğinizde, Ayar günleri parametresi bu varsayılan değerle değiştirilecektir.
- Ortalama sonucu sirkadiyen Kİ/İDF olarak uygulayın (varsayılan Kapalı): aşağıdaki [Sirkadiyen Kİ veya İDF profiline](#circadian-ic-or-isf-profile) bakın.

### Diğer ayarlar

- Otoayar, varyasyonu sınırlandırmak için Maks. otoduyarlılık oranı ve Min. otoduyarlılık oranı da kullanır. Bu değerleri; Konfigürasyon ayarları > Hassasiyet algılama eklentisi > Ayarlar > Gelişmiş Ayarlarda görebilir ve ayarlayabilirsiniz.

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_12.png)



## Gelişmiş özellik

(circadian-ic-or-isf-profile)=

### Sirkadiyen Kİ veya İDF profili

- Profilinizde önemli Kİ ve/veya İDF varyasyonlarınız varsa ve sirkadiyen zamanınıza ve varyasyonunuza tamamen güveniyorsanız, "Sirkadiyen İK/İDF'de ortalama sonucu uygula" ayarını yapabilirsiniz.

  - Otoayar hesaplamasının her zaman tek bir değerle yapılacağını ve sirkadiyen varyasyonun Otoayar tarafından ayarlanmayacağına dikkat edin. Bu ayar yalnızca sirkadiyen değerlerinizde Kİ ve/veya İDF için hesaplanan ortalama değişimi uygular.

- Ortalama varyasyonu uygula Kapalı (solda) ve Açık (sağda) ile Ayarlanmış profilin altındaki ekran görüntüsüne bakın

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_13.png)



(run-autotune-with-an-automation-rule)=

## Otomasyon kuralı ile Otoayar çalıştırma

İlk adım, otomasyon kuralı için doğru tetikleyiciyi Otoayar tanımlamaktır:

Not: Bir otomasyon kuralının nasıl ayarlanacağı hakkında daha fazla bilgi için [buraya](./Automation.md) bakın.

- Yinelenen Zaman Tetikleyicisi'ni seçmelisiniz: sadece günde bir kez otomatik olarak çalıştırın ve Otoayar günlük olarak çalıştırılacak şekilde tasarlanmıştır (bir gün sonraki her yeni çalışma için profil modifikasyonu minik olmalıdır)

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_16.png)

- Sonuçları kontrol edebilmek için Otoayarı gün boyunca çalıştırmak daha iyidir. Gece boyunca Otoayarı çalıştırmak istiyorsanız, bir sonraki Otoayar hesaplamasına şu anki gün de dahil tetikleme için saat 4 veya daha sonrasını seçmeniz gerekir.

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_17.png)

- Ardından listede "Otoayarı Çalıştır" eylemini seçebilirsiniz

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_18.png)

- Ardından, çalıştırmanız için gerekli parametreleri ayarlamak için Otoayar eylemini seçebilirsiniz. Varsayılan parametreler "Aktif Profil", Otoayar eklentisi tercihlerinde tanımlanan varsayılan ayar günleri değeridir ve tüm günler seçilir.

  ![Otoayar varsayılan ekranı](../images/Autotune/Autotune_19.png)

- Birkaç gün sonra, Otoayar sonuçlarına tam olarak güveniyorsanız ve değişiklik yüzdesi düşükse, [ Otoayar Ayarları ](#autotune-plugin-settings) "Profili değiştirme Otomasyonu" modifiye edilerek hesaplamadan sonra ayarlanan profil otomatik olarak güncellenebilir ve etkinleştirebilir.

## Ipuçları ve Püf noktaları

Otoayar, veritabanınızda bulunan bilgilerle çalışır, bu nedenle AAPS yeni bir telefona henüz yüklendiyse, ilgili sonuçları almak için yeterli günle Otoayarı başlatmadan önce birkaç gün beklemeniz gerekecektir.

Otoayar sadece bir yardımdır, hesaplanan profille hemfikir olup olmadığınızı düzenli olarak kontrol etmek önemlidir. Herhangi bir şüpheniz varsa, Otoayar (örneğin gün sayısını) ayarlarını değiştirin veya yerel profildeki sonuçları kopyalayın ve kullanmadan önce profili ayarlayın.

Her zaman Otoayarı birkaç gün manuel olarak kullanın ve uygulamadan önce sonuçları kontrol edin. Ve yalnızca, Otoayar sonuçlarına tam olarak güvendiğinizde ve önceki profil ile hesaplanan profil arasında değerler, otomasyonu kullanmaya başladığınızdan bu yana küçükse kullanın. (Daha önce değil)

- Otoayar, bazı kullanıcılar için çok iyi çalışabilir ve bazıları için çalışmaz, bu nedenle ** Otoayara güvenmiyorsanız, kullanmayın **

Otoayarın neden bu değişiklikleri önerdiğini anlamak (veya anlamaya çalışmak) için otoayar sonuçlarını analiz etmek de önemlidir.

- Profil direncinizin bir artışı veya azalması olabilir (örneğin, İDF ve Kİ değerlerinin azalmasıyla ilişkili toplam bazal artışı). Otoduyarlılık % 100'ün üzerinde (daha fazla agresif) veya% 100'ün altında (daha hassassınız) sonraki birkaç gün ile ilişkilendirilebilir.
- Bazen Otoayar, bazal oranlar ve Kİ/İDF arasında farklı bir denge önerir (önceki düşük bazal ve daha agresif Kİ/İDF için)

Aşağıdaki durumlarda Otoayar kullanmayı tavsiye etmiyoruz:

- Tüm karbonhidratları girmiyorsanız
  - Bir hipoglisemideki karbonhidrat düzeltmesini girmezseniz, Otoayar, KŞ değerinizde anlaşılmaz bir artış görecek ve 4 saat önceden bazal oranlarınızı arttıracaktır. Özellikle de gece yarısı hipodan kaçınmanız gerekirken tam tersi olabilir. Bu yüzden tüm karbonhidraları, özellikle hipo için yapılan düzeltmeleri girmek önemlidir.
- Gün boyunca UAM tespit edilen çok fazla periyot varsa.
  - Tüm karbonhidratlarınızı girdiniz ve karbonhidratlarınızı doğru tahmin ettiniz mi?
  - Tüm UAM dönemleri (bir gün boyunca karbonhidrat girmezseniz ve bazal devre dışı bırakıldığı için UAM kategorize edilmezse) bazal olarak kategorize edilir ve bu bazalınızı çok artırabilir (gerekenden çok daha fazla)

- Karbonhidrat emiliminiz çok yavaş: Karbonhidrat emiliminizin çoğu min_5m_carbimpact parametresi ile hesaplanıyorsa (bu periyotları AKRB eğrisinin üst kısmında küçük bir turuncu nokta ile görebilirsiniz), AKRB hesaplaması yanlış olabilir ve yanlış sonuçlara yol açabilir.
  - Spor yapıyorsanız, genellikle daha hassassınız ve kan şekeriniz çok fazla yükselmez, bu nedenle egzersiz sırasında veya sonrasında, yavaş karbonhidratlı bazı dönemler görmek normaldir. Ancak çok sık beklenmedik yavaş karbonhidrat emiliminiz varsa, o zaman bir profil ayarlamasına (daha yüksek Kİ değeri) veya biraz yüksek bir min_5m_carbimpact'e ihtiyacınız olabilir.
- "Çok kötü günler" geçiriyorsunuz, örneğin, aralığın içine inebilmek için yüksek miktarda insülinle birkaç saat hiperglisemide kalmışsınız veya bir sensör değişikliğinden sonra uzun süre yanlış kan şekeri değerleriniz olmuş.
- Değişiklik yüzdesi çok önemliyse
  - Daha sorunsuz sonuçlar almak için gün sayısını artırmayı deneyebilirsiniz.
