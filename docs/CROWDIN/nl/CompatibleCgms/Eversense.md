# Eversense

Er zijn vier verschillende manieren om de metingen van Eversense te lezen:

- ESEL companion-modus
- ESEL patched-modus
- xDrip companion-app
- Notificatielezer (ingebouwd in **AAPS**)

## ESEL

Download en installeer de [ESEL-app](https://github.com/BernhardRo/Esel/tree/master/apk) volgens deze [instructies](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- Open in ESEL rechtsboven het menu met de drie puntjes (⋮) en selecteer **Settings** (ook te vinden in het ☰-menu). In de instellingen:
  - Zet "Send to AAPS and xDrip" aan
  - Zet "Send to Nightscout" **uit**
  - De BG-gegevens van Eversense kunnen veel ruis hebben. Daarom is het aan te raden om "Smooth Data" in ESEL aan te zetten.

![ESEL Broadcast](../images/ESEL.png)

### Companion-modus

Leest de gegevens uit de notificaties van de Eversense-app (werkt met de standaard Eversense-app, beschikbaar sinds ESEL-versie 3.0.1).

1. Gebruik de officiële Eversense-app uit de Google Play Store
   - Optioneel, maar nodig voor backfilling (ontbrekende gegevens aanvullen): meld je aan bij je Eversense-account
   - Zet bij Sync de automatische synchronisatie (Auto synchronization) aan
2. Configuratie van ESEL:
   - Zet de instelling "Get data from patched Eversense App" uit
   - Voor backfilling: zet "Fill missing data from eversensedms.com" aan
   - Vul als e-mailadres en wachtwoord je aanmeldgegevens van Eversense in
3. Stel "MM640g" in als BG-bron in [**Configuratie → BG bron**](#Config-Builder-bg-source).

### Aangepaste (patched) Eversense-app

 Hiervoor is een aangepaste (patched) versie van de Eversense-app nodig (werkt volledig offline, ook backfilling).

1. Verwijder de Eversense-app (Waarschuwing: je lokale historische gegevens (ouder dan 1 week) gaan verloren!)

2. Installeer de [aangepaste Eversense-app](https://cr4ck3d3v3r53n53.club) en gebruik deze zoals de maker beschrijft

   - Start de Eversense-app, meld je aan, maak verbinding met je zender en gebruik de app net als de normale app.

3. Configuratie van ESEL:

   - Zet de instelling "Get data from patched Eversense App" aan



![ESEL Broadcast](../images/ESELpatch.png)

Als je ESEL voor het eerst gebruikt met een nieuwe installatie van Eversense, kan het tot 15 min duren voordat je eerste waarden in xDrip verschijnen!

4. Stel "MM640g" in als BG-bron in [**Configuratie → BG bron**](#Config-Builder-bg-source).

## xDrip

xDrip kan notificaties van de app van de fabrikant lezen, net zoals ESEL. Geen backfilling beschikbaar.

- Download en installeer xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- In xDrip moet je “Companion App” selecteren als gegevensbron.
- Selecteer xDrip in [**Configuratie → BG bron**](#Config-Builder-bg-source).
- Pas de instellingen van xDrip aan volgens de uitleg op de pagina [xDrip-instellingen](../CompatibleCgms/xDrip.md).
- Zet [Exponentieel vloeiend maken](../CompatibleCgms/SmoothingBloodGlucoseData.md) aan in AAPS.

## Notificatielezer

**AAPS** kan de glucosewaarden direct lezen uit de notificaties van de officiële Eversense-app, zonder een andere app ertussen. Geen backfilling beschikbaar.

- Selecteer **Notificatielezer** in [**Configuratie → BG bron**](#Config-Builder-bg-source) en geef **AAPS** toegang tot notificaties als daarom wordt gevraagd.
- Zorg dat de Eversense-app de actuele glucosewaarde in de notificatie toont.

```{warning}
BG-waarden komen niet altijd elke 5 minuten binnen en er kunnen dubbele waarden voorkomen.
```