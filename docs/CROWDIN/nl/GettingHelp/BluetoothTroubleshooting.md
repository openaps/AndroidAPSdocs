(bluetoothtroubleshooting-bluetooth-related-issues)=

# Problemen met Bluetooth

Sommige gebruikers hebben problemen met mislukte activering van de Omnipod DASH, verbindingsproblemen met de Medtrum Nano en andere pod-fouten die met Bluetooth te maken hebben. Veel van deze problemen komen door een van de volgende oorzaken.

Sommige van deze problemen gelden waarschijnlijk ook voor andere Bluetooth-insulinepompen. De Medtrum Nano heeft, net als de Omnipod DASH, bekende problemen met de toestemming voor apparaten in de buurt.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Omnipod start niet met Android 16
- Android 16 needs at a minimum **AAPS** version 3.3.2.1 for the Omnipod DASH to work correctly, as this version has fixes added to specifically address known problems introduced in Android 16 for Omnipod.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## Batterijoptimalisatie van Bluetooth

In nieuwere versies van Android staat batterijoptimalisatie aan voor de Bluetooth-app van het systeem. Dit geeft bekende problemen met Bluetooth-pompen en -CGM's.

Als je de [Setup Wizard](../SettingUpAaps/SetupWizard.md) hebt gevolgd en de instellingen uit het hoofdstuk [Batterijoptimalisatie van Bluetooth](#setup-wizard-bluetooth-battery-optimisation) hebt gebruikt, zou deze instelling goed moeten staan. Heb je een oudere versie van deze handleiding gevolgd, dan heb je deze instelling misschien niet gewijzigd.

Controleer of dit goed is ingesteld als je pomp en CGM de verbinding verliezen.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## Apps die de Android-toestemming "Apparaten in de buurt" gebruiken, kunnen verbindingsverlies en problemen bij het activeren van een pod veroorzaken

Met een systeem van toestemmingen kun je in Android bepalen wat elke app op je telefoon mag doen of gebruiken. Voor elke geïnstalleerde app kun je bepaalde toestemmingen geven of weigeren, bijvoorbeeld toegang tot bestanden op het apparaat, toegang tot Bluetooth, zoeken naar apparaten in de buurt enz.

**AAPS** heeft een aantal specifieke toestemmingen nodig om te werken. Eén daarvan, nodig om pods te laten werken, is de toestemming "Apparaten in de buurt". Er zijn veel andere apps die deze toestemming ook nodig hebben. De community merkt dat een aantal apps met deze toestemming op sommige apparaten problemen kan geven bij het activeren van nieuwe pods.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### Apps die de toestemming "Apparaten in de buurt" gebruiken en waarvan bekend is dat ze problemen hebben gegeven:

Over de apps in deze lijst is op een of meer plaatsen in de community gemeld dat ze problemen geven met de Omnipod DASH, en soms ook met de Medtrum Nano.

```{admonition} Updating the list
:class: note
Stuur een bericht naar @XiTatiON in het Discord-kanaal #omnipod-dash om apps te bespreken die aan deze lijst moeten worden toegevoegd.
```

- **myBMW** MyBMW verstoorde de Medtrum Nano en de Omnipod DASH. De MyBMW-app vraagt maar één keer om de toestemming "apparaten in de buurt vinden". Als je die niet geeft, werkt de app nog steeds prima

- **Amazon Alexa**  Removing "Nearby devices" for Alexa app resolved problem for some people but will break the ability to pair Matter IoT devices

- **MINI-app**  Deze app lijkt gebaseerd op de myBMW-app en gedraagt zich daardoor misschien hetzelfde

- **BM2** Solar Battery Monitoring app, used in some camper van and camping solar setups: when the app was running, it prevented activation of a new Pod. Force Stopping the app while activating a new pod is a workaround to the issue. Daarna leek de app de werking van de Dash niet te verstoren (op een Pixel 8 Pro met Android 16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### Toestemming "Apparaten in de buurt" intrekken voor andere apps:
Heb je problemen met het activeren van een nieuwe pod en gebruik je de juiste ondersteunde versie van **AAPS** voor jouw Android-versie? Dan kan het nodig zijn om de toestemming voor andere apps in te trekken terwijl je een nieuwe pod activeert.

Volg deze stappen om de toestemming "Apparaten in de buurt" in te trekken voor alle apps behalve **AAPS**:

```{admonition} Menus and settings
:class: note
De screenshots en instructies in deze handleiding komen van een standaard Android 16 op een Google Pixel 8 Pro. Other manufacturers and devices will likely not exactly match these menus and settings descriptions, adjust the steps to suit the device you have and if you are stuck see [Where to get help for dash](#omnipod-dash-where-to-get-help-for-dash) section on how to reach out to the community for support.
```

1. Open de Android-instellingen op je telefoon, scroll omlaag en tik op **Beveiliging en privacy (1)**.

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. Scroll omlaag en tik op **Privacyopties (1)**.

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. Tik op **Rechtenbeheer (1)**.

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. Scroll omlaag en tik op **Apparaten in de buurt (1)**.

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. Zoek in de lijst met apps de app waarvoor je de toestemming **Apparaten in de buurt** wilt intrekken en tik erop.

   In deze handleiding trekken we de toestemming in voor **Android Auto (1)**.

   Om te voorkomen dat er nog meer pods kapotgaan, raden we iedereen aan om eerst de toestemming in te trekken voor alle apps behalve **AAPS**.

```{admonition} Which app to select?
:class: tip
Weet je niet welke app het probleem geeft? Schakel ze dan allemaal uit (kijk ook naar de lijst met bekende probleem-apps en begin daarmee). Als je onderweg een paar kapotte pods kunt missen, zet dan vóór elke nieuwe pod-activering de toestemming voor één app weer aan, tot je weet welke app precies de problemen met je pod geeft. Vind je nieuwe apps die problemen geven? Laat het ons dan weten in het Discord-kanaal #omnipod-dash.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. Om de toestemming in te trekken tik je op **Niet toestaan (1)** en daarna op **Toch niet toestaan (2)**. Als het goed is gegaan, zie je dat **Niet toestaan (3)** is geselecteerd. Je kunt nu teruggaan naar het menu **Apparaten in de buurt** met de **pijl terug (4)**, en zo nodig deze instelling ook voor andere apps wijzigen.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### Toestemming "Apparaten in de buurt" weer aanzetten voor systeem-apps en andere apps:

1. If required Reference the **"How to revoke 'Nearby device' permissions for other apps"** section on how to get to the app privacy settings, then once in the **Nearby device** configuration proceed to 2.

2. Zoek in de lijst met apps de app waarvoor je de toestemming **Apparaten in de buurt** wilt toestaan en tik erop.

   In deze handleiding staan we de toestemming toe voor **Android Auto (1)**.

   Je ziet dat **Android Auto (1)** na het intrekken van de toestemming niet meer in de lijst met apps staat. Dit komt doordat **Android Auto** een **systeem-app** is, en systeem-apps zijn standaard verborgen.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. Om verborgen systeem-apps te tonen, tik je rechtsboven op het **menu met drie puntjes (⋮) (1)** en daarna op **"Systeem tonen" (2)**. Je ziet nu de verborgen systeem-app **Android Auto (3)** in de lijst.

```{admonition} Find your app
:class: tip
Als de toestemming voor een app is ingetrokken, moet je omlaag scrollen tot je verderop de lijst met geweigerde apps ziet.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. Follow the guidance in **"How to revoke 'Nearby device' permissions for other apps"** in reverse to re-enable permissions for each app.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15: vaak problemen met de Bluetooth-verbinding

Na een Android-update of na de overstap naar een nieuwe telefoon verliest **AAPS** vaak de Bluetooth-verbinding met de pomp. Het probleem verdwijnt tijdelijk als je de telefoon herstart. Als je een **Omnipod DASH** gebruikt en je telefoon Android 15 heeft, kan het aanzetten van de instelling **Bluetooth bonding** de Bluetooth-verbinding stabieler maken. Zo zet je het aan:

```{admonition} Android 16
:class: warning
Zet **Bluetooth bonding** alleen aan op Android 15, en alleen als je verbindingsproblemen hebt. Zet bonding NIET aan op Android 16.
```

1. Open de [Dash-instellingen](#omnipod-dash-settings): open het DASH-pompscherm via **Beheren** > **Pomp** en tik rechtsboven op het pictogram **Instellingen** (tandwiel).

   ![Het DASH-pompscherm](../images/v4/Pumps/dash_pump_screen.png)

2. Open het onderdeel **Geavanceerde instellingen** en zet **Bluetooth bonding** aan.

   ![Bluetooth bonding in het onderdeel Geavanceerde instellingen](../images/v4/Pumps/dash_settings_advanced.png)

3. Als de telefoon om koppelen vraagt, accepteer dit dan.

4. Herstart je telefoon.
