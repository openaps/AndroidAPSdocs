# Fjernovervåking

![Overvåking av barn](../images/KidsMonitoring.png)

__AAPS__ har flere funksjoner for fjernovervåking av barn med type 1-diabetes, og gjør det også mulig å sende instruksjoner til __AAPS__ som fjernkommandoer. På samme måte kan __AAPSClient__ også brukes til fjernovervåking for å følge __AAPS__ hos partneren eller vennen din.

## Funksjoner

- Barnets pumpe styres av barnets telefon med __AAPS__.
- Omsorgspersoner kan følge med på alle relevante data, som blodsukkerverdier, aktive karbohydrater, aktivt insulin osv., med **AAPSClient-apk-en** på Android-telefonen sin (en iPhone-versjon av **AAPSClient** er under utvikling, se [AAPSClient](AapsClient.md)). Innstillinger som endres i __AAPS__, synkroniseres med __AAPSClient__, og omvendt.
- Omsorgspersoner kan få alarmer ved å bruke **xDrip-appen i følgermodus** på Android-telefonen sin, hvis xDrip er satt opp som hjelpeapp.
- Fjernstyring av __AAPS__ med [SMS-kommandoer](../RemoteFeatures/SMSCommands.md) er sikret med tofaktorautentisering.
- Fjernstyring gjennom __AAPSClient__ bruker den signerte kommandokanalen som kom i **AAPS** 4: klienten må først **pares** med hovedenheten (med en QR-kode eller en PIN-kode), og hver kommando bekreftes og utføres av hovedenheten. Hver omsorgspersons telefon kan få sin egen [rolle](#client-master-control-roles), fra kun lesing til full styring — se [Hovedenhet ↔ klientstyring](#client-master-control).

## Verktøy og apper for fjernovervåking

- [Nightscout](https://nightscout.github.io/) i nettleser (hovedsakelig visning av data).
- [__AAPSClient__](AapsClient.md) er en nedstrippet versjon av __AAPS__ som kan følge hovedenhetens __AAPS__ og, når den er **sammenkoblet**, sende fjernkommandoer: karbohydrater, __midlertidige mål__, __profilbytter__ og til og med boluser (se [Hovedenhet ↔ klientstyring](#client-master-control)). Det finnes 3 apper: [AAPSClient, AAPSClient2 & AAPSClient3 til nedlasting](https://github.com/nightscout/AndroidAPS/releases/), så en omsorgsperson kan følge opptil tre ulike personer fra den samme telefonen (for eksempel to barn med type 1, hver med sin egen Nightscout-konto og sin egen __AAPS__-hovedenhet).
- Dexcom Follow hvis du bruker den originale Dexcom-appen (bare BS-verdier).
- [xDrip](../CompatibleCgms/xDrip.md) i følgermodus (hovedsakelig BS-verdier og **alarmer**).
- [Sugarmate](https://sugarmate.io/) eller [Spike](https://spike-app.com/) på iOS (hovedsakelig BS-verdier og **alarmer**).
- Noen brukere synes et fullt fjerntilgangsverktøy som [TeamViewer](https://www.teamviewer.com/) er nyttig til avansert feilsøking på avstand.

## Smartklokke-alternativer

En smartklokke kan være et svært nyttig verktøy for å håndtere __AAPS__ hos barn med type 1-diabetes. Det finnes et par ulike alternativer:

- Alternativ 1 – Hvis __AAPSClient__ er installert på omsorgspersonens telefon, kan [AAPSClient WearOS-appen](https://github.com/nightscout/AndroidAPS/releases/) installeres på en kompatibel smartklokke som er koblet til omsorgspersonens telefon. Den viser gjeldende __BS__, loop-status og bolushistorikk, og lar deg registrere karbohydrater, __midlertidige mål__ og __profil__-endringer. Hvis klienten er **sammenkoblet** med hovedenheten, kan klokken også starte en **bolus**: kommandoen sendes videre gjennom klienten til hovedenheten, som bekrefter og gir den (se [Hovedenhet ↔ klientstyring](#client-master-control)).
- Alternativ 2 – [AAPS WearOS-appen](../WearOS/WearOsSmartwatch.md) kan også bygges og installeres på en kompatibel smartklokke som er koblet til barnets telefon, men som omsorgspersonen har på seg. Dette gir alle funksjonene som er nevnt ovenfor, i tillegg til muligheten til å gi insulinbolus direkte, uten å måtte ta telefonen fra barnet.
- Alternativ 3 – Bare visning: en klokke som **AAPS** ikke støtter direkte (Xiaomi, Amazfit eller en Wear OS-klokke som viser en komplikasjon), kan vise blodsukker, IOB, COB og loop-status gjennom en hjelpeapp som WatchDrip+ eller GlucoDataHandler, matet av pluginen **Eksterne hjelpeapper** på **AAPS**- eller **AAPSClient**-telefonen den er koblet til. Se [Eksterne hjelpeapper](#watches-external-companion-apps).

## Ting å tenke på

- Ta høyde for tidsforsinkelsen mellom hovedenhet og følger på grunn av tiden det tar å laste opp og ned, og at __AAPS__-hovedtelefonen bare laster opp etter at loopen har kjørt.
- Hva er beredskapsplanen din hvis fjernstyringen ikke virker (_for eksempel_ nettverksproblemer eller tapt Bluetooth-forbindelse)? Tenk alltid over hva som skjer med **AAPS** hvis du plutselig ikke kan sende en ny kommando. **AAPS** overskriver pumpens basal, ISF og IK med verdiene fra den gjeldende profilen. Bruk bare midlertidige profilbytter (_det vil si_ med en fast varighet) hvis du bytter til en sterkere insulinprofil, i tilfelle fjernforbindelsen din blir brutt. Da går pumpen tilbake til den opprinnelige profilen når tiden er ute.
