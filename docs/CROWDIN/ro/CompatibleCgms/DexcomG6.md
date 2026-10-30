# Dexcom G6 și ONE

## Elemente de bază

-   Urmați recomandarea generală privind igiena și setarea senzorului de glicemie [aici](../CompatibleCgms/GeneralCGMRecommendation.md).

## Sugestii generale pentru buclă cu G6 și ONE

- Transmițătorii recenți se numesc Firefly. Senzorii nu pot fi reporniți fără a scoate transmițătorul, acesta nu se poate reseta, și nici nu generează date neprelucrate.

- Dacă reporniți senzorii, asigurați-vă că sunteți pregătit să îi calibrați și să urmăriți cu atenție variațiile.

- Preîmbibarea G6/ONE cu calibrarea din fabrică e probabil să determine variații ale rezultatelor. Dacă faceți preinserare, atunci pentru a obține cele mai bune rezultate, probabil că va trebui să calibrați senzorul.

Citiți mai multe in [articolul](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicat de către Tim Street la [www.diabettech.com](https://www.diabettech.com).

## If using G6 or ONE with xDrip

- If not already set up, download [xDrip](https://github.com/NightscoutFoundation/xDrip) and adjust its settings following the [xDrip settings page](../CompatibleCgms/xDrip.md).
- Select xDrip in [**Configuration → BG Source**](#Config-Builder-bg-source).
- Transmițătorii G6 și ONE pot fi conectați simultan la receptorul Dexcom (sau alternativ la pompa t:slim) și la o aplicație de pe telefonul dumneavoastră.
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings.
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Dacă utilizați G6 cu construită cu Build Your Own Dexcom App

```{admonition} Old app version
:class: avertisment
Dexcom BYODA este acum o versiune foarte veche a aplicației și nu poate fi actualizată.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip

-   Această aplicație vă permite să folosiți senzorul Dexcom G6 cu orice telefon inteligent Android.
-   Dezinstalați aplicația Dexcom originală sau aplicația Dexcom modificată dacă ați folosit anterior una dintre aceste aplicații (**nu opriți** senzorul care rulează în prezent)
-   Instalați apk-ul descărcat
-   Introduceți codul senzorului și numărul de serie al transmițătorului în aplicația modificată.
-   În setările telefonului mergeți la aplicații > Dexcom G6 > permisiuni > permisiuni suplimentare și apăsați pe 'Acces aplicație Dexcom'.
-   După o scurtă perioadă de timp, aplicația ar trebui să recepționeze semnalul de la transmițător.

### Setări pentru AAPS

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   Selectați '640G/Eversense' ca sursă de date.
-   Command 'start sensor' must be performed in xDrip in order to receive values. Acest lucru nu vă va afecta senzorul actual controlat de Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Depanare pentru G6 și ONE

### Depanare specifică Dexcom G6/ONE

-   Derulați în jos până la **Depanare** [aici](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Depanare generală

Depanare generală pentru CGMs se poate găsi [aici](#general-cgm-troubleshooting).

### Transmițător nou cu senzor în funcțiune

Dacă se întâmplă să schimbați transmițătorul în timpul unei sesiuni de senzor care funcționează, ați putea încerca să înlăturați transmițătorul fără a deteriora senzorul. Un videoclip poate fi găsit [aici](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Dacă optați pentru [această soluție](https://youtu.be/tx-kTsrkNUM) în schimb, trebuie să aveți grijă să evitați [deteriorarea contactelor senzorului](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) cu bandeleta.
