(bluetoothtroubleshooting-bluetooth-related-issues)=

# Problemi s Bluetoothom

Neki korisnici imaju probleme s neuspjelom aktivacijom Omnipod DASH-a, s vezom Medtrum Nano pumpe i s drugim greškama Pod-a koje su povezane s Bluetoothom. Mnogi od tih problema imaju jedan od sljedećih uzroka.

Neki od tih problema vjerojatno vrijede i za druge Bluetooth inzulinske pumpe. Medtrum Nano ima poznate probleme s dopuštenjem za uređaje u blizini, kao i Omnipod DASH.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Omnipod se ne može pokrenuti na Androidu 16
- Android 16 needs at a minimum **AAPS** version 3.3.2.1 for the Omnipod DASH to work correctly, as this version has fixes added to specifically address known problems introduced in Android 16 for Omnipod.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Optimizacija baterije za Bluetooth

Newer versions of Android have enabled Battery optimisation for the system Bluetooth app. Poznato je da to uzrokuje probleme s Bluetooth pumpama i CGM-ovima.

If you followed the [Setup Wizard](../SettingUpAaps/SetupWizard.md) and followed the configuration settings in the [Bluetooth Battery Optimisation](#setup-wizard-bluetooth-battery-optimisation) section then this setting should be correct, however if you followed an older version of this guide it's possible you have not changed this setting.

Verify this is correctly configured if you have pump and CGM disconnections.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Aplikacije koje koriste Android dopuštenje „Uređaji u blizini“ mogu uzrokovati prekide veze i probleme s aktivacijom Pod-a

Android vam omogućuje da putem dopuštenja odredite što svaka aplikacija smije raditi ili čemu smije pristupiti na vašem telefonu. Za svaku instaliranu aplikaciju možete dopustiti ili zabraniti određena dopuštenja, npr. pristup datotekama na uređaju, pristup Bluetoothu, traženje uređaja u blizini itd.

**AAPS** requires a number of specific permissions to function, one which is required to ensure that Pods work is the "Nearby devices" permission. I mnoge druge aplikacije trebaju ovo dopuštenje. Zajednica je primijetila da neke aplikacije, kada dobiju ovo dopuštenje, na nekim uređajima uzrokuju probleme pri aktivaciji novih Pod-ova.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Aplikacije koje koriste dopuštenje „Uređaji u blizini“ i za koje je poznato da su uzrokovale probleme:

Za aplikacije s ovog popisa u zajednici se na jednom ili više mjesta raspravljalo da uzrokuju probleme s uređajima Omnipod DASH, a ponekad i s Medtrum Nano.

```{admonition} Updating the list
:class: note
Javite se korisniku @XiTatiON na Discord kanalu #omnipod-dash ako želite predložiti aplikacije za ovaj popis.
```

- **myBMW** Aplikacija MyBMW ometala je Medtrum Nano i Omnipod DASH. Aplikacija MyBMW samo jednom pita za dopuštenje „pronalaženje uređaja u blizini“. Ako ga ne dopustite, aplikacija i dalje radi potpuno ispravno

- **Amazon Alexa**  Removing "Nearby devices" for Alexa app resolved problem for some people but will break the ability to pair Matter IoT devices

- **MINI app**  Appears the app is based on myBMW app and might mirror its behavior as a result

- **BM2** Solar Battery Monitoring app, used in some camper van and camping solar setups: when the app was running, it prevented activation of a new Pod. Force Stopping the app while activating a new pod is a workaround to the issue. Nakon toga pokretanje aplikacije nije ometalo rad Dash-a (na Pixelu 8 Pro s Androidom 16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Kako oduzeti dopuštenje „Uređaji u blizini“ drugim aplikacijama:
If you are facing issues activating a new Pod and you are running on the correct supported version of **AAPS** for your version of Android, it may be necessary to revoke the permission for other apps while activating a new Pod.

Follow this procedure to revoke the "Nearby device" permission for all apps except **AAPS**:

```{admonition} Menus and settings
:class: note
Snimke zaslona i upute u ovom vodiču su s čistog (Vanilla) Androida 16 na Google Pixelu 8 Pro. Other manufacturers and devices will likely not exactly match these menus and settings descriptions, adjust the steps to suit the device you have and if you are stuck see [Where to get help for dash](#omnipod-dash-where-to-get-help-for-dash) section on how to reach out to the community for support.
```

1. Na telefonu otvorite Android postavke, pomaknite se prema dolje i dodirnite **Sigurnost i privatnost (1)**.

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Pomaknite se prema dolje i dodirnite **Kontrole privatnosti (1)**.

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Dodirnite **Upravitelj dopuštenja (1)**.

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Pomaknite se prema dolje i dodirnite **Uređaji u blizini (1)**.

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Na popisu aplikacija dodirnite aplikaciju kojoj želite oduzeti dopuštenje **Uređaji u blizini**.

   U ovom vodiču oduzimamo dopuštenje aplikaciji **Android Auto (1)**.

   Da ne biste uništili još Pod-ova, savjetujemo da na početku oduzmete dopuštenje svim aplikacijama osim **AAPS-a**.

```{admonition} Which app to select?
:class: tip
Ako ne znate koja aplikacija uzrokuje problem, onemogućite dopuštenje svima (provjerite i popis poznatih problematičnih aplikacija i počnite s njima). Ako si možete priuštiti nekoliko uništenih Pod-ova, prije svake nove aktivacije Pod-a dopustite dopuštenje jednoj novoj aplikaciji, dok ne pronađete koja točno aplikacija uzrokuje probleme s Pod-om. Ako pronađete nove problematične aplikacije, javite nam na Discord kanalu #omnipod-dash.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Da oduzmete dopuštenje, dodirnite **Nemoj dopustiti (1)**, a zatim **Svejedno nemoj dopustiti (2)** (Don't allow anyway). Ako je sve ispravno, kao odabranu opciju vidjet ćete **Nemoj dopustiti (3)**. Sada se možete vratiti u izbornik **Uređaji u blizini** dodirom na **strelicu natrag (4)** i po potrebi promijeniti ovu postavku i za druge aplikacije.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### Kako ponovno dopustiti dopuštenje „Uređaji u blizini“ sistemskim i drugim aplikacijama:

1. If required Reference the **"How to revoke 'Nearby device' permissions for other apps"** section on how to get to the app privacy settings, then once in the **Nearby device** configuration proceed to 2.

2. Na popisu aplikacija dodirnite aplikaciju kojoj želite dopustiti dopuštenje **Uređaji u blizini**.

   U ovom vodiču dopuštenje vraćamo aplikaciji **Android Auto (1)**.

   Primijetit ćete da nakon oduzimanja dopuštenja aplikacije **Android Auto (1)** nema na popisu aplikacija. To je zato što je **Android Auto** **sistemska aplikacija**, a sistemske aplikacije su prema zadanim postavkama skrivene.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Da prikažete skrivene sistemske aplikacije, dodirnite **izbornik s tri točke (⋮) (1)** u gornjem desnom kutu, a zatim **„Prikaži sustav“ (2)** (Show system). Sada biste na popisu trebali vidjeti skrivenu sistemsku aplikaciju **Android Auto (3)**.

```{admonition} Find your app
:class: tip
Ako je aplikaciji dopuštenje oduzeto, pomaknite se prema dolje dok ne vidite popis aplikacija bez dopuštenja, niže na popisu.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Follow the guidance in **"How to revoke 'Nearby device' permissions for other apps"** in reverse to re-enable permissions for each app.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15: česti problemi s Bluetooth vezom

Nakon nadogradnje Androida ili prelaska na noviji telefon **AAPS** često gubi Bluetooth vezu s pumpom. Problem privremeno nestane nakon ponovnog pokretanja telefona. Ako koristite **Omnipod DASH**, a vaš telefon ima Android 15, uključivanje postavke **Trajno Bluetooth uparivanje (bonding)** može poboljšati stabilnost Bluetooth veze. Da je uključite:

```{admonition} Android 16
:class: warning
Uključite **Trajno Bluetooth uparivanje (bonding)** samo na Androidu 15 i samo ako imate probleme s vezom. NE uključujte bonding na Androidu 16.
```

1. Otvorite [postavke Dash-a](#omnipod-dash-settings): otvorite zaslon pumpe DASH putem **Upravljanje** > **Pumpa** i dodirnite ikonu **Postavke** (zupčanik) u gornjem desnom kutu.

   ![Zaslon pumpe DASH](../images/v4/Pumps/dash_pump_screen.png)

2. Otvorite odjeljak **Napredne postavke** i uključite **Trajno Bluetooth uparivanje (bonding)**.

   ![Trajno Bluetooth uparivanje (bonding) u odjeljku Napredne postavke](../images/v4/Pumps/dash_settings_advanced.png)

3. Ako telefon prikaže zahtjev za uparivanje, prihvatite ga.

4. Ponovno pokrenite telefon.
