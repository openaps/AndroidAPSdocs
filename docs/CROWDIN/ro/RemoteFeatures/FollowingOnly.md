# Following AAPS (no interaction with the AAPS system)

In addition to the range of possibilities available for remotely controlling _and_ following **AAPS** which are described at [remote control](../RemoteFeatures/RemoteControl.md), there are several additional apps and devices which the community has developed, to simply follow numbers (glucose levels and other information), without interacting with **AAPS**.

A good overview of the extensive options available for following **AAPS** is at [Nightscout follower](https://nightscout.github.io/nightscout/downloaders/#) webpage.

```{contents} Table of contents
:depth: 1
:local: true
```

The most common strategies used in combination with **AAPS** are explained in more detail below.

## Smartphone apps

```{contents} These are some of the main “follower” apps used by **AAPS** users. All of these apps are “free”: 
:depth: 1
:local: true
```

### Dexcom Follow ([Android](https://play.google.com/store/apps/details?id=com.dexcom.follow.region2.mgdl) and [iOS](https://apps.apple.com/fr/app/dexcom-follow-mg-dl-dxcm2/id1032203080))

![imagine](../images/ded350b0-6012-4104-b21c-5d5bfd91aa65.png)

* Dexcom Follow is compatible with a wide range of handsets (both Android and iPhone). Dexcom Follow can be used even if you are not using the official Dexcom app to receive sensor data.

* Many caregivers are familiar with Dexcom Follow, preferring its clear interface over something more complicated.

* Dexcom Follow is very good for teachers/grandparents and people who know very little about diabetes and sugar levels. It has customisable alerts (BG level, what sound to play etc.). Alarms can be completely switched off if needed, which is very useful if you have a sensor which is still settling down and creating multiple fake lows.

#### Setting up Dexcom Follow: how-to-guide

If you use the unofficial Dexcom app BYODA for receiving sensor data, you may be able to send invites to followers from within the BYODA app.

You cannot send invite emails to Dexcom followers anymore from third-party apps. In xDrip+ the invite request will just result in the message “invite not sent”.

You must install the official Dexcom app, send the invite, and then uninstall the official app.

The steps to do this are as follows:

1)  Install the official “Dexcom” app on _any_ smartphone (Android/iPhone), this can be the Follower phone, if it is more convenient. 2)  Log in with your Dexcom username and password, this is the same login details you would use for Dexcom Clarity, if you are already a current Dexcom/Clarity customer. If you don’t have a Dexcom login, there is the option to create a new login at this point.   
3)  Swipe through the introduction menus. 4)  Add “no code” for the sensor code. 5)  Under Transmitter SN select “enter manually” and enter any valid transmitter code (use one of your expired transmitter codes, if you know one, so it doesn’t interfere with the running of your current transmitter, they follow a specific format of certain numbers and letters: “NLNNNL” and only use certain combinations, so it’s easiest to use one you already know is valid). 6)  Once the app is trying to find the transmitter and sensor, you will be able to invite followers: select the small three dots in the top left of the app, and add new follower. You can also use this if one of your followers has changed their handset and needs a fresh invite, here you can delete them from the follower list and resend a new invite email for them to use on their new handset. 7)  On the Follower phone, install Dexcom Follow by downloading it from the App Store (iPhone) or Play (Android). Set up the Dexcom Follow app, and you will be prompted to open your email to find the invite to be a Follower.    
8)  You can now delete the official Dexcom G6 app.

For Dexcom Follow, the sensor data is then exported from the **AAPS** phone either directly from BYODA, or from xDrip+, depending on which app you are using.


### [Nightguard](https://apps.apple.com/fr/app/nightguard/id1116430352) (iOS)

![imagine](../images/f2c7d330-9889-4526-9a5c-bbb012d804ab.png)

Pros (as reported by users):

* Available in the [app store](https://apps.apple.com/us/app/nightguard/id1116430352), simple, user-friendly interface.

* Swipe button or shake phone to snooze alarms at different intervals ranging from 5 min to 24 hours

* Customize alarms (high, low alerts, missed readings when no data for 15-45 minutes).

* Fast rise/drop over 2-5 consecutive readings (you choose). Can also choose the delta between two individual readings

* Smart snooze so doesn't alert if levels are moving in right direction

* There is a Care tab which appears to enable you to set a new temp target for a certain duration, delete the temp target or enter carbs.

Cons (as reported by users)

* Only available for iOS

* The TT shows as 5 mmol regardless of which TT level is set

* Never shows Temp Basal rate even though it shows TB

### [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) (Android)

![imagine](../images/855c3a74-e612-4a6f-8b63-18d286ea0a3f.png)


* Nightwatch markets itself as a Nightscout client and monitors the user’s Nightscout glucose levels on either Android phone or tablet.

* The app can be downloaded from [Google play](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) and displays BG data in real time.

* The user can be alerted with customised noisy low and high alarms set.

* BG data can be viewed in either mmol/L or mg/dL.

* It requires Android 5.0 and up.

* It has a dark Ul, large readings and buttons, designed for usage at night.

### xDrip+ (Android)

Puteți utiliza xDrip+ ca urmăritor.

#### Cu Nightscout

Setați xDrip+ ca urmăritor Nightscout. Veți primi glicemia și tratamentele, dar nu bazala.

![imagine](../images/remote_control_and_following/xDrip+_Nightscout_Follower.png)

#### Fără Nightscout - sursa datelor de glicemie în xDrip+

Dacă sursa de date **AAPS** este xDrip+ (sau dacă xDrip+ poate primi glicemia și de la o altă aplicație precum BYODA, Juggluco) îl poți folosi de la telefonul principal pentru a împărtăși date cu urmăritorii xDrip+, afișând glicemia, tratamente și ratele bazale.

![imagine](../images/remote_control_and_following/xDrip+_Master_Sync.png)

#### Fără Nightscout - xDrip+ aplicație companion pentru glicemii

În cazul în care sursa de date **AAPS** nu este xDrip+, dar puteți afișa date glicemice din sursa de date a aplicației companion, îl poți folosi de la telefonul principal pentru a partaja date cu adepții xDrip+, afișând glice, tratamente și tarife bazale.

![imagine](../images/remote_control_and_following/xDrip+_Companion_Sync.png)

### xDrip4iOS (iOS)

![imagine](../images/remote_control_and_following/xdrip4ios.jpg)

xDripSwift was created from porting the original xDrip app to iOS and evolved to "xDrip for iOS" written **xDrip4iOS** .

```{admonition} Further detail about how to attempt to obtain the original **xDrip4iOS** app
:class: dropdown
[grupul de Facebook xDrip4iOS](https://www.facebook.com/groups/853994615056838/announcements) este principala comunitate de suport pentru xDrip4iOS și Shuggah. **xDrip4iOS** can connect to many different CGM systems and transmitters and display blood glucose values, charts and statistics as well as provide alarms. It can also upload to Nightscout or act as a [follower app for Nightscout](https://xdrip4ios.readthedocs.io/en/latest/connect/follower/). 

"How can I get **xDrip4iOS** on my iPhone?"
There are two options:

1. If you have a Mac and an Apple Developer account (99 EUR/USD per year) you can build your own xDrip4iOS by [following the instructions](https://xdrip4ios.readthedocs.io/en/latest/install/build/).

If you want, you can then become a "releaser" and [share a Personal Testflight xDrip4iOS](https://xdrip4ios.readthedocs.io/en/latest/install/personal_testflight/) with up to 100 other people to help them.

2. You join the [xDrip4iOS Facebook group](https://www.facebook.com/groups/853994615056838/announcements) and read the pinned posts for current methods to get the app. **You should not ask for an invitation to the app** (read the group rules).
```



![imagine](../images/fae3ec63-2c2c-4152-ab42-97f9744a8f36.png)

"Ce este **Shuggah**?" Un grup de dezvoltatori ucraineni au copiat codul proiectului pentru xDrip4iOS (care este partajat public pe GitHub) și l-a lansat pe App Store sub un cont de afaceri. Versiunea de Shuggah nu este gestionată în niciun fel de dezvoltatorii xDrip4iOS.

Grupul de Facebook [xDrip4iOS](https://www.facebook.com/groups/853994615056838/announcements) sprijină xDrip4iOS și aplicațiile Apple Watch compatibile.

### [Sugarmate](https://apps.apple.com/fr/app/sugarmate/id1111093108) (iOS)

![imagine](../images/340cd555-a9e0-4a20-a131-36c078f5b8ea.png)

![imagine](../images/21b83c41-85c6-4619-a702-a65450768855.png)


[Sugarmate](https://sugarmate.io/) poate fi descărcat pe iPhone din magazinul de aplicații. Sugarmate este compatibil cu:
* Apple iPhone (Necesită software versiunea 13.0 sau mai târziu)
* Apple iPad (Necesită software versiunea 13.0 sau mai târziu)
* Google Android (salvați aplicația web pe ecranul de pornire)

S-a raportat de către utilizatorii Sugarmate că poate fi folosit cu Apple CarPlay în SUA pentru a afișa citirile de glucoză în timpul conducerii. Încă nu s-a stabilit dacă acest lucru este posibil în țările din afara SUA. Dacă știți mai multe despre asta, vă rugăm să adăugați aici detalii la documentație completând o cerere de tragere (link) care este rapidă și ușor de făcut.


### [Spike](https://spike-app.com/) (iOS)

![imagine](../images/1129ba00-8159-4940-936e-76fd4ae45a2d.png)

Spike poate fi folosit ca receptor primar sau ca aplicație urmăritor, furnizând glicemii, alarme și IOB și multe altele.

Website-ul și aplicația nu mai sunt dezvoltate. Sprijin poate fi găsit pe [Facebook](https://www.facebook.com/groups/1973791946274873) și [Gitter](https://gitter.im/SpikeiOS/Lobby).

## Ceas inteligent pentru **Monitorizarea AAPS** (date complete de profil sau numai glicemie) unde **AAPS** rulează pe un telefon.

Vedeți [aici](../Getting-Started/Watches.md).


## Dispozitive pentru urmărirea AAPS

```{contents} Devices include:
:depth: 1
:local: true
```

### Stivă M5

![imagine](../images/061edb52-56d2-45f4-b3da-82b2036d7bc6.png)

M5Stack este o cutie mică care poate fi programată pentru multe aplicații. Proiectul lui Martin [M5Stack NightscoutMon](https://github.com/mlukasek/M5_NightscoutMon/wiki) afișează valori și tendințe ale glicemiei senzorilor, IOB și COB. Este într-o cutie de plastic, dotată cu un ecran de culoare, slotul cardului microSD, 3 butoane, difuzor și baterie internă. Este un foarte bun monitor pentru glicemia și este relativ ușor de stabilit dacă ai un cont Nightscout. Utilizatorii îl rulează de obicei pe Wi-Fi-ul lor, dar unii utilizatori raportează că îl utilizează ca afișaj la motocicletă, printr-un hotspot Wi-Fi al telefonului.

### Sugarpixel

SugarPixel este un dispozitiv pentru un sistem secundar de alertă pentru afișarea glicemiei pentru monitorizarea continuă a glucozei, care se conectează cu aplicația Dexcom sau cu aplicația Nightscout pe telefonul inteligent al utilizatorului. Dispozitivul afișează valorile glicemiei în timp real. Acest monitor CGM hardware beneficiază de alerte audio cu tonuri aleatorii (care sunt incredibil de zgomotoase), alerte de vibrație pentru tulburările de auz, opțiuni de afișare personalizabile și urmărire nativă pentru mai mulți utilizatori.

![imagine](../images/39137beb-17cc-4c87-98b7-cf1831d484cb.png)

![imagine](../images/87883ebb-9683-4aa8-8014-49c2ca902c93.png)

* SugarPixel are multiple opțiuni de afișare, în mg/dL și mmol/L, pentru a se potrivi nevoilor utilizatorului, cu valori ale glucozei codate prin culori.
* Fața standard afișează glicemia, săgeata de tendință și delta. Delta este schimbarea cu + sau - de la ultima citire.
* SugarPixel poate fi personalizat pentru a fi utilizat la luminozitate redusă, folosind interfața Glicemie și Oră pentru a vizualiza valoarea glicemiei utilizatorului și ora curentă pe noptiera acestuia.
* Interfața Culoare a SugarPixel utilizează întregul ecran pentru a afișa o singură culoare ce reprezintă valoarea glicemiei (BG). Acest lucru permite utilizatorului să vadă citirile glicemiei la distanță prin fereastră în timp ce se joacă în curtea din spate, terasă sau piscină.
* Fața mare a glicemiei este utilă pentru utilizatorii nocturni care poartă ochelari sau lentile de contact.

### Ceas Nightscout pe Ulanzi TC001

**Nightscout Clock** este un software open source care rulează pe dispozitivul **Ulanzi TC001**. Se conectează cu serverele Dexcom sau Nightscout și afișează valorile glicemiei în timp real.

![Urmărirea ceasului Nightscout](../images/FollowingNightscoutClock.png)

* Ceasul acceptă atât unități mmol/l, cât și mg/dl și include alarme sonore.
* Several display available, see [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file#more-information-for-people-who-needs-it) for an overview.
* Setting up and configuring the device involves just a few simple steps. Once set up, it only requires power and Wi-Fi to function.
* The Ulanzi TC001 device is significantly cheaper than the SugarPixel to buy.
* The software along with installation instructions can be found on [Github nightscout-clock](https://github.com/ktomy/nightscout-clock?tab=readme-ov-file).
* It is developed and maintained by Artiom Kenibasov, offering support on the [Facebook AAPS Users group](https://www.facebook.com/groups/cgminthecloud/posts/8776932509094594/).

### PC (TeamViewer)
Some users find a full remote access tool like [TeamViewer](https://www.teamviewer.com/) to be helpful for advanced remote troubleshooting.
