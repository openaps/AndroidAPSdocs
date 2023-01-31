(profile-switch)=

# Profil değiştirme

Documentation about profiles in general can be found at [Config Builder - profile](../Configuration/Config-Builder.md#profile).

On starting your AAPS and selecting your profile, you will need to do a "Profile switch" event with zero duration (explained later). By doing this AAPS starts tracking history of profiles and every new profile change requires another "Profile switch" even when you change content of the profile in NS. Updated profile is pushed to AAPS immediately, but you need to switch the same profile again to start using these changes.

Internally AAPS creates snapshot of profile with start date and duration and is using it within selected period.

* Süre olarak sıfır sonsuz anlamına gelir. Bu profil, yeni "Profil değiştirme"ye kadar geçerlidir.
* x dakika süre, bu profilin x dakika kullanımı anlamına gelir. Bu süreden sonra "Profil değiştirme", önceki geçerli profile geri döner.

If you edited your profile inside the "local profile" tab you can activate the profile there which makes an implicit profile switch too.

To do a profile switch long-press on the name of your profile ("Tuned 03/11" in the picture below) on the homescreen of AndroidAPS.

![Do profile switch](../images/ProfileSwitch_HowTo.png)

Within the "profile switch" you can choose two additional changes which used to be part of the Circadian Percentage Profile:

## Yüzde

* Bu değer, tüm parametrelere aynı yüzdeyi uygular. 
* %130'a ayarlarsanız (yani %30 daha fazla insülin direnciniz var demektir), bazal oranı %30 artıracaktır. Ayrıca İDF ve KİO'yu da buna göre düşürür (bu örnekte 1,3'e bölün).
  
  ![Örnek profil değişim yüzdesi](../images/ProfileSwitchPercentage.png)

* Pompaya gönderilecek ve ardından varsayılan bazal oran olacaktır.

* Döngü algoritması (açık veya kapalı), seçilen yüzde profili üzerinde çalışmaya devam edecektir. Böylece, örneğin hormon döngüsünün farklı aşamaları için ayrı yüzde profilleri oluşturulabilir.

(time-shift)=

## Zaman kaydırma

![Profile switch percentage and timeshift](../images/ProfileSwitchTimeShift2.png)

* Zaman kaydırma, her şeyi girilen saat değerine göre günün her saatinde hareket ettirir. 
* Bu nedenle, örneğin, gece vardiyalarında çalışırken, saat değerini ne kadar geç/erken yatacağınıza veya ne kadar erken kalkacağınıza göre değiştirebilirsiniz.
* Profil ayarlarının mevcut saat ayarlarını nasıl değiştireceği her zaman sorulan bir sorudur. Bu süre ne kadarsa x saat kaydırılmalıdır. Bu nedenle, aşağıdaki örnekte açıklanan talimatların izleyin: 
  * Mevcut zaman: 12:00
  * **Pozitif** zaman kaydırma 
    * 2:00 **+10 s** -> 12:00
    * Pozitif zaman kayması nedeniyle normalde 12:00'de kullanılan ayarlar yerine 2:00'den itibaren olan ayarlar kullanılacaktır.
  * **Negatif** zaman kaydırma 
    * 22:00 **-10 s** -> 12:00
    * Negatif zaman kayması nedeniyle normalde 12:00'de kullanılan ayarlar yerine 22:00 (10 pm) ayarları kullanılacaktır.

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus2.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

(troubleshooting-profile-errors)=

## Profil Hatalarında Sorun Giderme

### 'Geçersiz profil' / 'Bazal Profil saatlere göre ayarlanmadı'

![Basal not aligned to the hour](../images/BasalNotAlignedToHours2.png)

* Saati olmayan bazal oranlarınız veya I:C oranlarınız varsa bu hata mesajları görünecektir. (DanaR ve DanaRS pompaları örneğin yarım saatlik değişiklikleri desteklemez.)
  
  ![Örnek profil saatlere göre ayarlanamadı](../images/ProfileNotAlignedToHours.png)

* Hata mesajında gösterilen tarih ve saati hatırlayın / not edin (yukarıdaki ekran görüntüsünde 26/07/2019 17:45).

* Tedaviler sekmesine gidin
* Profil Değiştirmeyi seçin
* Hata mesajından tarih ve saati bulana kadar kaydırın.
* Kaldır işlevini kullanın.
* Bazen yalnızca bir hatalı profil değiştirme yoktur. Bu durumda diğerlerini de kaldırın.
  
  ![Profil değişimini kaldırma](../images/PSRemove.png)

Alternatively you can delete the profile switch directly in mLab as described below.

### 'NS'den alınan profil değişimi ancak profil yerel olarak mevcut değil'

* İstenen profil Nightscout'tan doğru şekilde eşitlenmedi.
* Profil değişimini silmek için yukarıdaki talimatları izleyin

Alternatively you can delete the profile switch directly in mLab:

* Mlab koleksiyonunuza gidin
* Profil değiştirme'yi tedavilerde arama yapın
* Hatada belirtilen tarih ve saatteki profil değişimini silin. ![mlab](../images/mLabDeletePS.png)

### 'İES 3 saat çok kısa'

* Profilinizdeki insülin etki süreniz, AndroidAPS'in doğru olacağına inanmadığı bir değerde listeleniyorsa, bu hata mesajı görünecektir. 
* [Doğru İES'i seçin](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and hakkında bilgi edinin -why-it-matters/) ve bunu profilinizde düzenleyin, ardından devam etmek için bir [Profil Değiştirme](../Usage/Profiles) yapın.