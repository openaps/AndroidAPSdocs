# Oppdatere med en nettleser (fork)

```{tip}
Har du bygget AAPS med **AAPS Builder**? Da trenger du ikke denne siden: se [Oppdatering av AAPS med AAPS Builder](#aaps-builder-updates).
```

## Bygg selv i stedet for å laste ned

**AAPS** kan ikke lastes ned, på grunn av regelverket for medisinsk utstyr. Det er lovlig å bygge appen til eget bruk, men du må ikke gi en kopi til andre! Se [FAQ-siden](../UsefulLinks/FAQ.md) for detaljer.

```{note}
Hvis du vil oppgradere **AAPS** med en nettleser for første gang: kopier sikkerhetskopien av keystore-filen din til Google Drive. Følg deretter [prosedyren for nettleserbygg av **AAPS**](../SettingUpAaps/BrowserBuild.md) i stedet for denne veiledningen. I stedet for å lage en ny keystore-fil må du velge den du har kopiert fra datamaskinen din.
Dette trenger du bare gjøre den første gangen; ved senere oppgraderinger kan du følge denne veiledningen.
```

```{tip}
**Bytte til AAPS Builder?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) er det enklere nettleserbygget: ingen fork å synkronisere, og du laster ned appen direkte fra GitHub. Du trenger ikke bytte: denne veiledningen virker fortsatt. Hvis du bytter, må du først hente en kopi av keystore-filen din fra forken din, som forklart i [Kommer du fra det forrige nettleserbygget](#aaps-builder-from-fork). Ellers kan ikke det nye bygget oppdatere AAPS på telefonen din.
```

## Oversikt over oppdatering til en ny versjon av AAPS med en nettleser

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Hvis du får problemer, se den egne siden om [feilsøking av nettleserbygg](../GettingHelp/BrowserBuildTroubleshooting.md).

### Eksporter innstillingene dine

Eksporter innstillingene fra den **AAPS**-versjonen du har på telefonen nå. Du trenger dem kanskje ikke, men det er bedre å være på den sikre siden.

Se siden [Lage og gjenopprette sikkerhetskopier](ExportImportSettings.md) hvis du ikke husker hvordan du gjør dette.

(Update-to-new-version-update-your-repo)=
### Oppdater GitHub-repositoryet ditt

[Logg inn på GitHub](https://github.com/login).

1. Velg Repositories.
2. Bla nedover og velg ditt eget AndroidAPS-repository.

![Velg AndroidAPS-repositoryet](../images/update/CI/GitHubUpdate1.png)

3. Kontroller at du bruker din egen kopi av AndroidAPS (Forked from nightscout/AndroidAPS)
4. Trykk på Sync Fork for å oppdatere den (antallet commits bak kan være et annet enn på bildet)



![Synkroniser AndroidAPS-repositoryet](../images/update/CI/GitHubUpdate2.png)

5. Trykk på Update Branch

![Oppdater AndroidAPS-repositoryet](../images/update/CI/GitHubUpdate3.png)

Merk: hvis du ved en feil har endret kopien din av AndroidAPS, ser du dette skjermbildet. Forkast alle endringer (commits) for å gå tilbake til den utgitte versjonen.

![Forkast uønskede endringer](../images/update/CI/GitHubUpdate4.png)

Du har nå synkronisert (oppdatert) din egen kopi med den nyeste utgivelsen av Android APS. Bra jobba.

![Repositoryet er synkronisert](../images/update/CI/GitHubUpdate5.png)

### Kjør arbeidsflyten for å bygge den signerte APK-filen

1. I GitHub-kopien din av AndroidAPS velger du Actions.
2. Utvid All Workflows.
3. Velg AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Bla nedover og trykk på Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. La grenen stå på master. I **Select AAPS Version** kontrollerer du at **4.0.0**, den nyeste versjonen øverst i listen, er valgt. Hvis forken din ikke er oppdatert, er den forhåndsvalgte versjonen en eldre versjon: hvis du kjører arbeidsflyten med skjemaet slik det åpnes, bygger du den eldre versjonen på nytt, og appen din blir ikke oppdatert. Velg [varianten](#browserbuild-variant) (fullRelease), og trykk så på Run workflow.

   ```{note}
   Listen over versjoner er en del av arbeidsflyten i forken din. Hvis **4.0.0** mangler, er forken din ikke synkronisert ennå: gå tilbake til [Oppdater GitHub-repositoryet ditt](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Du ser meldingen Workflow run was successfully requested. Oppdater nettlesersiden, så kan du følge med på hvordan bygget går. Når handlingen er ferdig, viser AAPS CI-handlingen en grønn hake. Du har nå bygget den oppdaterte versjonen av Android APS. Det betyr at APK-filene for hovedenheten og klokken nå lagres direkte i Google Drive (som vist nedenfor). APK-filen for AAPSClient kan lastes ned fra Github > nightscout > AndroidAPS [her](https://github.com/nightscout/AndroidAPS/releases)


![Følg med på arbeidsflyten](../images/update/CI/GitHubActions4.png)


### Installer AAPS APK-filen

1. Åpne Google Drive
2. Gå inn i AAPS, velg mappen for den nye versjonen, og der finner du både telefon- og Android Wear-versjonen.

![Plassering i Google Drive](../images/update/CI/GitHubActions5.png)

```{note}
Fra september 2026 kan Googles [Android-utviklerverifisering](#android-developer-verification) blokkere installering av APK-filen ved å trykke på filen, avhengig av hvilket land du er i. Gratis løsninger er forklart på den siden.
```

Fortsett [her](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Feilsøking

Hvis noe går galt, ikke få panikk.

Pust rolig!

Sjekk så om problemet ditt allerede er beskrevet: se [Feilsøking av AAPS Builder](#aaps-builder-troubleshooting) hvis du bygger med **AAPS Builder**, ellers [Nettleserbygg: feilsøking](#aaps-ci-troubleshooting).

Hvis du trenger mer hjelp, ta kontakt med andre **AAPS**-brukere på [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) eller [Discord](https://discord.gg/4fQUWHZ4Mw).
