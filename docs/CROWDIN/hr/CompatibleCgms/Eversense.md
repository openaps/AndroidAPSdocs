# Eversense

There are four different methods to access the readings from Eversense:

- ESEL u načinu companion
- ESEL u zakrpanom načinu (patched)
- xDrip companion app
- Notification Reader (built into **AAPS**)

## ESEL

Nabavite i instalirajte [aplikaciju ESEL](https://github.com/BernhardRo/Esel/tree/master/apk) prema ovim [uputama](https://github.com/BernhardRo/Esel?tab=readme-ov-file#esel).

- In ESEL, open the three dots menu (⋮) at the top right and select **Settings** (also available from the ☰ menu). In the settings:
  - Omogućite „Send to AAPS and xDrip“
  - **Onemogućite** „Send to Nightscout“
  - Budući da podaci GUK-a iz Eversensea mogu imati šum, preporučuje se u ESEL-u omogućiti „Smooth Data“.

![ESEL Broadcast](../images/ESEL.png)

### Način companion (Companion Mode)

Čita podatke iz obavijesti aplikacije Eversense (radi sa standardnom aplikacijom Eversense, dostupno od verzije ESEL-a 3.0.1).

1. Koristite službenu aplikaciju Eversense iz trgovine Google Play
   - Neobavezno, ali potrebno za nadopunu podataka koji nedostaju: prijavite se na svoj Eversense račun
   - U Sync omogućite Auto synchronization
2. Konfiguracija ESEL-a:
   - Onemogućite postavku „Get data from patched Eversense App“
   - Za nadopunu podataka koji nedostaju: omogućite „Fill missing data from eversensedms.com“
   - Kao adresu e-pošte i lozinku unesite svoje podatke za prijavu na Eversense
3. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

### Zakrpana aplikacija Eversense

 Treba zakrpanu verziju aplikacije Eversense (radi potpuno bez interneta, uključujući nadopunu podataka koji nedostaju).

1. Deinstalirajte aplikaciju Eversense (Upozorenje: vaši lokalni povijesni podaci (stariji od 1 tjedna) bit će izgubljeni!)

2. Instalirajte [zakrpanu aplikaciju Eversense](https://cr4ck3d3v3r53n53.club) i koristite je kako opisuje dobavljač

   - Pokrenite aplikaciju Eversense, prijavite se, povežite se sa svojim odašiljačem i koristite je kao običnu aplikaciju.

3. Konfiguracija ESEL-a:

   - Omogućite postavku „Get data from patched Eversense App“



![ESEL Broadcast](../images/ESELpatch.png)

If you run ESEL with a fresh installation of Eversense for the first time, it can take up to 15min until your first values appear in xDrip!

4. Set "MM640g" as BG source in [**Configuration → BG Source**](#Config-Builder-bg-source).

## xDrip

xDrip can read notifications from the vendor app, like ESEL does. Nadopuna podataka koji nedostaju nije dostupna.

- Download and install xDrip: [xDrip](https://github.com/NightscoutFoundation/xDrip)
- As data source in xDrip “Companion App” must be selected.
- Odaberite xDrip u [**Konfiguracija → Izvor GUK-a**](#Config-Builder-bg-source).
- Prilagodite postavke xDripa prema objašnjenjima na stranici [Postavke xDripa](../CompatibleCgms/xDrip.md).
- Omogućite [eksponencijalno zaglađivanje](../CompatibleCgms/SmoothingBloodGlucoseData.md) u AAPS-u.

## Čitač obavijesti

**AAPS** can read the glucose values directly from the notifications posted by the official Eversense app, without any other app in between. Nadopuna podataka koji nedostaju nije dostupna.

- Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and grant **AAPS** access to notifications when asked.
- Make sure the Eversense app shows the current glucose value in its notification.

```{warning}
Očitanja GUK-a ne stižu uvijek svakih 5 minuta i mogu se pojaviti duplikati.
```