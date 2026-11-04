# Dexcom G6 och ONE

## Grunderna först

-   Följ de allmänna rekommendationerna för CGM-hygien och sättning av sensorn [här](../CompatibleCgms/GeneralCGMRecommendation.md).

## Allmänna tips för att loopa med G6 och ONE

- Nyare sändare kallas Firefly. Sensorer kan inte startas om utan att man tar bort sändaren, och sändaren kan inte återställas. De ger inte heller några rådata.

- Om du startar om sensorer ska du vara beredd att kalibrera och hålla ett öga på variationen.

- Förblötläggning (pre-soak) av G6/ONE med fabrikskalibrering ger troligen varierande resultat. Om du förblötlägger (pre-soak) sensorn behöver du troligen kalibrera den för att få bäst resultat.

Läs mer i [artikeln](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) som Tim Street publicerat på [www.diabettech.com](https://www.diabettech.com).

## Om du använder G6 eller ONE med xDrip

- Om du inte redan har gjort det: ladda ned [xDrip](https://github.com/NightscoutFoundation/xDrip) och ställ in den enligt [sidan om xDrip-inställningar](../CompatibleCgms/xDrip.md).
- Välj xDrip i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).
- Sändarna för Dexcom G6 och ONE kan vara anslutna samtidigt till Dexcom-mottagaren (eller i stället till pumpen t:slim) och till en app i din telefon.
- Om du använder xDrip som mottagare ska du först avinstallera Dexcom-appen. **Du kan inte ansluta xDrip och Dexcom-appen till sändaren samtidigt!**
- Om du behöver Clarity och vill dra nytta av larmen i xDrip kan du använda [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (bara G6) med lokal sändning (local broadcast) till xDrip.
- Du kan också använda xDrip som följeslagarapp (companion app) till den officiella Dexcom-appen, men BG-värdena kan då komma med fördröjning.
- Med nuvarande sändare använder xDrip alltid sändarens [inbyggda algoritm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html). Det finns ingen anledning att stänga av den. [Förebyggande omstarter](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) fungerar bara på gamla sändare (firmware 1.6.5.25 eller äldre), där de behövs för att sensorn inte ska stoppa efter 10 dagar. Nyare sändare (Firefly) ignorerar dem. Läs [Starta om en sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) innan du försöker göra en omstart.
- Allt som gäller själva sensorn och sändaren beskrivs på [xDrips Dexcom-sida](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Om du använder G6 med Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA är nu en mycket gammal version av appen och kan inte uppdateras.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) kan skicka data lokalt (local broadcast) till AAPS och/eller xDrip

-   Med den här appen kan du använda din Dexcom G6 med vilken Android-telefon som helst.
-   Avinstallera den ursprungliga Dexcom-appen eller den patchade Dexcom-appen om du har använt någon av dem tidigare (**stoppa inte** sensorn som är igång)
-   Installera den nedladdade apk-filen
-   Ange sensorkoden och sändarens serienummer i den patchade appen.
-   I telefonens inställningar går du till apps > Dexcom G6 > permissions > additional permissions och trycker på 'Access Dexcom app'.
-   Efter en kort stund bör BYODA fånga upp signalen från sändaren.

### Inställningar för AAPS

-   Välj **BYODA** i [**Konfiguration → BG-källa**](#Config-Builder-bg-source).

-   Om du inte får några värden: välj en annan datakälla och välj sedan **BYODA** igen. Då frågas efter de behörigheter som behövs för anslutningen mellan AAPS och BYODA-sändningen.

### Inställningar för xDrip

-   Välj '640G/Eversense' som datakälla.
-   Kommandot 'start sensor' måste köras i xDrip för att du ska få värden. Detta påverkar inte din nuvarande sensor som styrs av Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Felsökning för G6 och ONE

### Felsökning specifik för Dexcom G6/ONE

-   Scrolla ned till **Troubleshooting** [här](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Allmän felsökning

Allmän felsökning för CGM finns [här](#general-cgm-troubleshooting).

### Ny sändare med en sensor som är igång

Om du byter sändare under en pågående sensorsession kan du försöka ta bort sändaren utan att skada sensorns fäste. En video finns [här](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Om du i stället väljer [den här lösningen](https://youtu.be/tx-kTsrkNUM) måste du vara försiktig så att du inte [skadar sensorns kontakter](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) med remsan.
