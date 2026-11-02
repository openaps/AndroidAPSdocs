# Dexcom G7, ONE+ en Stelo


## Vooraf belangrijk

Let op: de G7-, ONE+- en Stelo-systemen maken de waarden niet vloeiend, anders dan de G6. Dat geldt zowel voor de app als voor de ontvanger. Meer details hierover vind je [hier](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Lees de suggesties voor de [methode voor vloeiend maken](../CompatibleCgms/SmoothingBloodGlucoseData.md) die je kunt gebruiken voor Dexcom G7/ONE+/Stelo
```

## 1. xDrip (directe verbinding met G7, ONE+ of Stelo)

- xDrip maakt zelf verbinding met de sensor: verwijder de Dexcom-app, want maar één app kan met de sensor verbonden zijn. Wil je de Dexcom-app houden, gebruik dan de [xDrip Companion App](#DexcomG7-xdrip-companion-app).
- Volg de instructies hier: [xDrip G7, ONE+ en Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). Je hebt een recente versie van xDrip nodig. Zie de gelinkte pagina voor de minimale versie.
- Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).

- Pas de instellingen van xDrip aan volgens de uitleg op de pagina [xDrip-instellingen](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (alleen G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA is nu een zeer oude versie van de app en kan niet bijgewerkt worden. Niet beschikbaar voor ONE+ of Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) ondersteunt lokale broadcast naar AAPS

-   Met deze app kun je je Dexcom G7 gebruiken met elke Android-smartphone.
-   Verwijder de originele Dexcom-app
-   Installeer de gedownloade apk
-   Voer de sensorcode in de aangepaste (patched) app in
-   After a short time BYODA should pick up the sensor signal.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ en Stelo)

De officiële Dexcom-app blijft met de sensor verbonden. xDrip leest de glucosewaarden uit de notificaties van de Dexcom-app en stuurt ze naar **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** ziet xDrip in de Companion App-modus niet als een [vertrouwde bron van BG-gegevens](#GettingStarted-TrustedBGSource): SMB's zijn niet altijd toegestaan.
```

### De notificaties van de Dexcom-app lezen

- Houd de Dexcom-app geïnstalleerd en verbonden met de sensor. De notificaties moeten zichtbaar blijven: zet ze niet op stil en verberg ze niet.
- Download en installeer [xDrip](https://github.com/NightscoutFoundation/xDrip). Gebruik in xDrip dezelfde glucose-eenheden als in de Dexcom-app.
- Ga in xDrip naar **Settings** > **Hardware Data Source** en selecteer **Companion App**.

  ![xDrip Hardware Data Source: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip vraagt toestemming om notificaties te lezen. Tik op **OK**, selecteer dan **xDrip** in de lijst en zet **Toegang tot meldingen toestaan** aan.

  ![Lijst met toegang tot meldingen](../images/xDrip_Companion_NotificationAccess1.png)

- Als **Toegang tot meldingen toestaan** grijs is (*Beheerd door beperkte instelling*), blokkeert Android dit omdat xDrip niet uit de Play Store is geïnstalleerd:

  ![Toegang tot meldingen beheerd door beperkte instelling](../images/xDrip_Companion_Restricted.png)

  Open de app-info van xDrip (druk lang op het xDrip-pictogram > **App-info**), tik rechtsboven op het menu met de drie puntjes en selecteer **Beperkte instellingen toestaan**. Ga dan terug naar het scherm voor toegang tot meldingen en sta de toegang toe.

  ![App-info: Beperkte instellingen toestaan](../images/xDrip_Companion_AllowRestricted.png)

  ![Toegang tot meldingen toegestaan voor xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- Metingen verschijnen in xDrip als de Dexcom-app een nieuwe waarde toont. Verschijnt er niets, dan moet je misschien een sensor starten in xDrip: dit heeft geen effect op de echte sensor. Stelo geeft in deze modus elke 15 minuten een meting.

### Companion Bluetooth (G7)

Als de Dexcom-app met een G7-sensor verbonden is, kan xDrip ook meeluisteren naar de metingen die de sensor via Bluetooth naar de Dexcom-app stuurt. xDrip koppelt niet met de sensor en je hoeft de sensorcode niet in te voeren: de Dexcom-app houdt de controle.

Met **Companion Bluetooth** krijgt xDrip de exacte tijd en trend van elke meting van de sensor, in plaats van het moment waarop de notificatie verscheen. Ook vult xDrip gaten op als de telefoon buiten bereik was (backfill).

- Ga in xDrip naar **Settings** > **Less common settings** > **Bluetooth Settings** en zet **Companion Bluetooth** aan.

  ![xDrip Bluetooth Settings: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- Dit werkt niet op alle telefoons en Android-versies. Zet het uit als je problemen ziet.
- Staat er nog een oude Dexcom-sensor in de Bluetooth-lijst van de telefoon, dan kan xDrip naar de verkeerde sensor luisteren: vergeet in Android **Instellingen** > **Verbonden apparaten** de sensoren die je niet meer gebruikt.
- Companion Bluetooth is gemaakt voor de G7. Vertrouw bij ONE+ en Stelo op de notificaties.

### Configuratie in AAPS

- Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).
- Pas de instellingen van xDrip aan volgens de uitleg op de pagina [xDrip-instellingen](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 en ONE+)

Versie 9.0+ nodig

- Schakel de app uit die eerder met de sensor verbonden was: verwijder de app of gebruik "Gedwongen stoppen". Zet de toestemming "Apparaten in de buurt" uit in de app-instellingen. Beperk het batterijgebruik van de app.

- Vergeet de sensor in de Bluetooth-instellingen: zoek in de Android-instellingen de sensor bij de gekoppelde apparaten en kies "Vergeten". De namen van Dexcom G7-sensoren beginnen met DXCM.

- Voorkom storing door andere sensoren: houd oude Dexcom-sensoren buiten het Bluetooth-bereik.

- Verbind de G7-sensor met Juggluco: open Juggluco → linker menu → Photo. Scan de datamatrix-code op de applicator van de G7-sensor. Wacht tot 5 minuten tot Juggluco de sensor vindt.

- Voorwaarden voor koppelen: ga akkoord met het koppelen van de sensor aan Juggluco. Zorg dat het scherm niet vergrendeld is tijdens het koppelen. Als het koppelen mislukt, wacht dan 5 minuten voordat je het opnieuw probeert.

- Uitzondering: Wear OS-horloges kunnen koppelen zonder op een akkoordknop te drukken.
