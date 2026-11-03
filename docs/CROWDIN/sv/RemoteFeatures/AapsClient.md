(aapsclient-app)=
# Appen AAPSClient

**AAPSClient** är tillbehörsappen till **AAPS**: en hjälpapp för en andra telefon – oftast en anhörigs – som **följer** personen som använder **AAPS**. Från och med **AAPS** version 4 kan den anhöriga också **styra** loopen på distans med signerade kommandon. Båda telefonerna kommunicerar via din **Nightscout**-webbplats. Det behövs ingen direkt anslutning mellan telefonerna.

```{admonition} Wording used on this page
:class: note
- **Klient** = en telefon som kör **AAPSClient**.
- **Huvudenhet** = **AAPS**-huvudtelefonen som har pumpen och kör loopen.
```

```{admonition} Which devices can run AAPSClient?
:class: note
From **AAPS** version 4, **AAPSClient** runs on Android phones and tablets, on Wear OS watches and on computers (Windows, Mac and Linux). On an iPhone there is no ready-made download: you build the app yourself. See the [table of downloads by device](#aapsclient-platforms).
```

```{contents} Table of contents
:depth: 2
:local: true
```

## Vad AAPSClient är (och inte är)

**AAPSClient** ser ut och känns som **AAPS**, men har **ingen egen loop**:

- Den innehåller **ingen APS-algoritm**, inga **Mål** och **inga pumpdrivrutiner** – den doserar aldrig själv.
- De plugins som bara används av huvudappen (**SMS-kommunikation**, **Tidepool**, **Open Humans**) finns inte heller med.
- Det den *innehåller*: synkronisering med **NSClientV3**, plugins för BG-källor, sändning till **xDrip+** och kopplingarna till **Wear OS** / **Garmin** – allt som behövs för att följa och vidarebefordra kommandon. En **Garmin**-klocka som är ansluten till en klient kan visa data, men kolhydrater som den skickar registreras inte och den kan inte koppla från eller återansluta pumpen: klienten visar ett meddelande, och du anger dem i stället i **AAPS**.

Allt som du startar från **AAPSClient** kontrolleras, begränsas, bekräftas och **utförs av huvudenheten** (telefonen med pumpen). Sidan [Styrning huvudenhet ↔ klient](ClientMasterControl.md) förklarar hur detta fungerar: hur du parkopplar de två telefonerna, hur huvudenheten skriver bekräftelsetexten som du ser, hur en bolus som startas på klienten ges och vad som händer när huvudenheten är offline.

## Versioner: AAPSClient, AAPSClient2 och AAPSClient3

Upp till tre klientappar kan installeras sida vid sida på samma följartelefon, och var och en följer en **annan** person: **AAPSClient** (gul uggleikon), **AAPSClient2** (blå uggla) och – nytt i **AAPS** version 4 – **AAPSClient3** (grön uggla). De fungerar på exakt samma sätt. Bara namnet och färgen skiljer sig (appikonen, widgetens bakgrund och statusavsnittet på huvudskärmen), så att du kan skilja dem åt. Varje app är parkopplad med sin egen huvudenhet. Se [Om AAPSClient, AAPSClient2 och AAPSClient3](#remotecontrol-aapsclient-versions) för mer information.

(aapsclient-platforms)=
## Skaffa appen

All the ready-made files are in the *Assets* list of the latest release on [GitHub](https://github.com/nightscout/AndroidAPS/releases/) (click *Assets* at the bottom of the release to expand it). In the table, *x.y.z* stands for the version number. Choose the file that matches your device:

| Enhet                   | File to download                    | Anteckningar                                                                                                                                                                                 |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Android phone or tablet | `app-aapsclient-release_x.y.z.apk`  | Install it like the main app: see [Download and installation of AAPSClient](#RemoteControl_aapsclient) and [Transferring and installing](../SettingUpAaps/TransferringAndInstallingAaps.md). |
| Wear OS watch           | `wear-aapsclient-release_x.y.z.apk` | Goes with the AAPSClient app on the phone. See [Wear OS smartwatch](../WearOS/WearOsSmartwatch.md).                                                                                          |
| Windows computer        | `AAPSClient-x.y.z.msi`              | Open the file to install.                                                                                                                                                                    |
| Mac                     | `AAPSClient-x.y.z.dmg`              | See the note on macOS below the table.                                                                                                                                                       |
| Linux (Debian, Ubuntu)  | `aapsclient_x.y.z_amd64.deb`        | Install it with your package manager.                                                                                                                                                        |
| iPhone                  | inga                                | There is no App Store version and no download. You build the app yourself, see [AAPSClient on an iPhone](#aapsclient-iphone).                                                                |

**Following two people?** Each file above also exists as *aapsclient2* / *AAPSClient2*. It is a second client app that installs next to the first one, so one device can follow two people (see [About AAPSClient, AAPSClient2 and AAPSClient3](#remotecontrol-aapsclient-versions)). **AAPSClient3** is not in the release assets: build it yourself ([build variants](#browserbuild-variant)).

**Files to ignore:** the *pumpcontrol* files (`app-pumpcontrol-release_…`, `wear-pumpcontrol-release_…`) are not a client. Leave them out.

**Mac: the first start.** The app is not notarized by Apple, so macOS blocks it the first time you open it. Click *Done*, then open *System Settings → Privacy & Security*, scroll down and click *Open Anyway*.

**Computer: how to connect.** A computer has no camera, so the QR code cannot be scanned. Set up **Nightscout** in the client, then on the master add the client with a **PIN** and type the 8-digit PIN in the client (**Pair with master**). See [Pairing with the master](#aapsclient-pairing-with-the-master).

**Same version everywhere.** The master and all its clients must run the same **AAPS** version. When you update the master, update the clients too.

(aapsclient-iphone)=
### AAPSClient on an iPhone

There is no **AAPSClient** in the App Store and no ready-made file to download, so you build the app yourself:

- You need a Mac with **Xcode** and an Apple developer account.
- The project is the `ios` folder of the [AndroidAPS repository on GitHub](https://github.com/nightscout/AndroidAPS/tree/master/ios).
- A build for a real iPhone is signed with your own Apple developer team. A build for the iPhone simulator does not need one.
- There is no step-by-step guide yet. This page will be updated when there is one.

The iPhone version pairs with the master like the others. Unlike the computer versions, the iPhone can scan the master's QR code with its camera.

## Första start: en kortare installationsguide

Vid första starten kör **AAPSClient** samma **Installationsguide** som du känner igen från **AAPS**, men med mycket färre steg – på en följartelefon ställer du inte in profil, insulin, pump, APS eller mål:

1. **Välkommen**, **licensavtal**, **behörigheter** och **huvudlösenord** – samma som i huvudappen, se [Installationsguiden i AAPS](../SettingUpAaps/SetupWizard.md).
2. Klienten frågar **inte** efter **enheter** eller **LÅG-/HÖG-markeringar**: den hämtar dem från huvudtelefonen så snart den är ansluten till Nightscout. Du kan se dem senare i **Inställningar**, där en liten **telefonikon** visar att de är [synkroniserade med huvudtelefonen](#client-master-config-prefs). De kan bara redigeras när huvudenheten går att nå.
3. **Ställ in från huvudenheten** – öppna **Hantera → Auktoriserade klienter** på huvudenheten, lägg till den här telefonen med en **QR-kod** och tryck på **Skanna QR-kod** här. En enda skanning ställer in Nightscout med en egen token för den här telefonen och, om koden även parkopplar, parkopplas också telefonen. Telefonen tar också det namn som den lades till med på huvudenheten som sitt instansnamn (bokstäver med accenter blir vanliga bokstäver, ”Miloš” blir ”Milos”). **När koden har skannats är installationen klar**: guiden stängs, eftersom nästa steg bara skulle visa vad koden har gjort. Hoppa över detta steg om du inte har någon QR-kod. (Not on a computer: it has no camera, see [Getting the app](#aapsclient-platforms).)

   ![Steget Ställ in från huvudenheten med knappen Skanna QR-kod](../images/v4/AapsClient/aapsclient_wizard_from_master.png)

4. **Kommunikation** – listan med plugins visar bara det som en följare behöver (NSClientV3, xDrip+, Klocka (Wear), Externa hjälpappar, Garmin). Om du inte skannade någon QR-kod, aktivera **NSClientV3** och ange **samma Nightscout-URL** som på huvudtelefonen och en åtkomsttoken, med **websockets** aktiverade – precis som beskrivs i [Synkronisering](#RemoteControl_aapsclient).

   ![Steget Kommunikation på klienten](../images/v4/AapsClient/aapsclient_wizard_communication.png)

5. **Parkoppla med huvudenheten** – detta steg finns **bara** på klienten. Det ansluter den här enheten till huvudenheten via den säkra kommandokanalen med PIN-koden, och tar det namn som telefonen lades till med på huvudenheten, på samma sätt som QR-koden. **När parkopplingen är klar är installationen klar.** Du kan också hoppa över steget och parkoppla när som helst senare via **Hantera → Parkoppla med huvudenheten**.

   ![Steget Parkoppla med huvudenheten i klientens guide](../images/v4/AapsClient/aapsclient_wizard_pair_step.png)

6. **Vem använder den här telefonen?** – bara om du inte parkopplade i guiden: namnet på personen som använder den här telefonen. Namnet skiljer den här instansen från andra i rapporter och vid synkronisering.

(aapsclient-pairing-with-the-master)=

## Parkoppla med huvudenheten

Öppna **Hantera → Auktoriserade klienter** på **huvudenheten** och lägg till en klient. Det finns två sätt att parkoppla:

- **Med en QR-kod** (snabbast, om telefonen har en kamera): skanna koden i guidesteget ”**Ställ in från huvudenheten**” eller via **Hantera → Parkoppla med huvudenheten → Skanna QR-kod**, och bekräfta med ”**Använd**”. Det ställer också in Nightscout.
- **Med PIN-koden**: öppna guidesteget ovan på **klienten** (eller **Hantera → Parkoppla med huvudenheten**), skriv in engångs-PIN-koden som visas på huvudenheten och tryck på ”**Parkoppla**”. Klienten visar sedan vem den kommer att lita på – bekräfta med ”**Parkoppla**”:

![Bekräftelse på klienten innan parkopplingen slutförs](../images/v4/AapsClient/aapsclient_pair_confirm.png)

Om du parkopplar från guiden avslutas installationen när parkopplingen har lyckats, och huvudskärmen öppnas. På huvudenheten visas klienten som **Aktiv** i listan [Auktoriserade klienter](#client_master_master_setup). Efteråt visar **Hantera → Parkoppla med huvudenheten** ”*Redan parkopplad*”, telefonens roll och om härdat läge är på:

![Hantera → Parkoppla med huvudenheten på en parkopplad klient: Redan parkopplad, Roll: Vårdgivare, Härdat läge på](../images/v4/ClientMaster/pair_with_master_client.png) Hela parkopplingen, säkerhetsdetaljer och felsökning finns på [Styrning huvudenhet ↔ klient](#client_master_client_setup).

Efter parkopplingen får klienten en egen Nightscout-token från huvudenheten (om huvudenheten har en administratörstoken), med bara de rättigheter som en klient behöver, och slutar använda den token som du kanske har angett. **AAPSClient** skriver aldrig själv behandlingar eller BG till Nightscout: allt den gör skickas till huvudenheten, som skriver det. Se [Klientens egen Nightscout-token](#client-master-control-own-token).

Huvudenheten bestämmer vad den här telefonen får göra med hjälp av dess **[roll](#client-master-control-roles)** (Skrivskyddad, Måltider, Vårdgivare eller Administratör). **Hantera → Parkoppla med huvudenheten** visar telefonens roll.

## Huvudskärmen

Klientens huvudskärm speglar loopen som den följer:

![Huvudskärmen i AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

- **BG, grafer, IOB/COB och profil** kommer från Nightscout, precis som huvudenheten laddade upp dem.
- **Loopstatusen** som visas är **huvudenhetens** (en klient har ingen egen loop). Tills klienten har fått huvudenhetens körläge från Nightscout visar chipet för körläge ett **frågetecken** (okänt).
- **Statuskortet** visar reservoar och batteri för **pumpen som följs** och uppladdarens batteri, hämtade från enhetsstatusen i Nightscout – en klient har ingen pump, så det finns ingen lokal pumpstatus och ingen pumphantering någonstans i appen.
- Det nedre fältet visar **Behandlingar**, **Scener** och **Hantera** när klienten är parkopplad (bara **Hantera** före parkopplingen) – det finns inga flikar för pump eller mål.

## Behandlingar och åtgärder

Allt under **Hantera** fungerar som i huvudappen, med en viktig skillnad: på en klient är åtgärder som skulle ändra behandlingen (bolus, kolhydrater, tillfälliga målvärden, scener …) **dolda tills enheten är parkopplad**, och när den är parkopplad **skickas de vidare till huvudenheten** för bekräftelse och utförande – se [Använda fjärrstyrning](#client-master-control).

Posten **Profil** är undantaget: den visas även på en klient som **inte är parkopplad**, men öppnas **skrivskyddad** – klienten visar de profiler som den får via Nightscout (den behöver dem för sina egna beräkningar), utan knappar för att redigera eller aktivera. När klienten är **parkopplad** synkroniseras profillistan med huvudenheten, och du kan redigera och aktivera profiler från klienten som vilken annan fjärråtgärd som helst.

På en klient som **inte är parkopplad** visar **Hantera** bara **Profil** och **Parkoppla med huvudenheten**:

![Skärmen Hantera på en klient som inte är parkopplad: bara Profil och Parkoppla med huvudenheten](../images/v4/AapsClient/aapsclient_manage_unpaired.png)

Den röda banderollen ”*Huvudenheten kan inte nås. Redigering är inaktiverad tills anslutningen är återställd.*” visas också på en klient som inte är parkopplad. Det är normalt: det finns ännu ingen huvudenhet att nå. Banderollen försvinner när klienten är parkopplad och huvudenheten är online.

När klienten är parkopplad visas behandlingsåtgärderna:

![Skärmen Hantera på en parkopplad klient, med posten Parkoppla med huvudenheten](../images/v4/AapsClient/aapsclient_manage.png)

Det finns **ingen post för Pump** – en klient har ingen pump.

Om huvudenheten inte går att nå visas samma banderoll på en parkopplad klient: behandlingsåtgärderna är nedtonade, och allt du försöker göra stoppas innan det skickas. Klienten märker att huvudenheten är offline när du försöker göra en åtgärd, och aktiverar åtgärderna igen när huvudenheten är online igen.

![Skärmen Hantera på en parkopplad klient medan huvudenheten är offline: åtgärderna är nedtonade under banderollen](../images/v4/AapsClient/aapsclient_manage_master_offline.png)

## Inställningar som synkroniseras med huvudenheten

Den aktiva **konfigurationen** av plugins och många **inställningar** hålls synkroniserade mellan huvudenheten och dess parkopplade klienter. Synkroniserade poster är markerade med en liten **telefonikon** och är inaktiverade (med banderollen ”*Huvudenhet kan inte nås*”) medan huvudenheten inte går att nå. Detta beskrivs i [Ändra konfiguration och inställningar](#client-master-config-prefs).

## AAPSClient på en smartklocka

En klocka med Wear OS kan parkopplas med **klient**-telefonen. Klockans åtgärder skickas via klienten till huvudenheten. Se [Wear OS](../WearOS/WearOsSmartwatch.md) och [alternativen för smartklockor under fjärrstyrning](#RemoteControl_smartwatches).
