# Back-ups maken en terugzetten

Als je AAPS op je telefoon installeert, wordt die telefoon een "medisch hulpmiddel" waar je elke dag op vertrouwt. Het is sterk aan te raden om een noodplan met back-ups te hebben voor als je telefoon kapotgaat, gestolen wordt of kwijtraakt. Daarom is het belangrijk om je voor te bereiden door jezelf af te vragen: "Wat als...?"

Om je AAPS-installatie terug te zetten op een bestaande of nieuwe telefoon, is het belangrijk om de volgende dingen op een veilige plek te bewaren (dus: niet op je telefoon). Het beste is om ten minste twee aparte back-ups te bewaren: op een lokale harde schijf, een USB-stick en (bij voorkeur) in cloudopslag zoals Google Drive of Microsoft 365 OneDrive. Als je je back-ups in de cloud bewaart, heb je altijd alles vanaf je telefoon bij de hand om je installatie overal en altijd terug te zetten.

Overweeg een tweede telefoon als reserve aan te schaffen en het terugzetten van AAPS te oefenen, zodat je zeker weet dat de reservetelefoon goed werkt. Zo weet je zeker dat je noodplan werkt en dat je zonder problemen verder kunt met AAPS als je AAPS-telefoon niet meer beschikbaar is.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

Om terug te kunnen zetten, is het belangrijk dat je de volgende dingen bij de hand hebt:

- Je **Android Studio keystore-bestand** en het bijbehorende **wachtwoord**: nodig om het AAPS .APK-installatiebestand (opnieuw) te bouwen.
- Een recente kopie van het **AAPS .APK-installatiebestand**
- Een recent bestand met **geëxporteerde instellingen**: om belangrijke instellingen terug te zetten (inclusief je doelen!).
- Je **AAPS hoofdwachtwoord**
- Back-ups van extra hulpprogramma's: zoals BYODA en/of xDrip.
- Persoonlijke notities over je installatie.

Hieronder staan de dingen waarvan je het beste een back-up kunt bewaren.

## Back-ups maken

### Keystore-bestand van de computer waarmee je de APK hebt gebouwd
Als je je .APK-installatiebestand bouwt in Android Studio, gebruikt het het **keystore-bestand en wachtwoord om het .APK-installatiebestand te ondertekenen**. Om je huidige AAPS-installatie bij te werken, moet het .APK-installatiebestand van de update ondertekend zijn met dezelfde keystore als bij de eerste installatie. Bij het bijwerken blijven alle instellingen en de AAPS-database bewaard. Zonder dit moet je eerst de huidige app verwijderen en AAPS daarna [opnieuw installeren](#reinstall-aaps) en opnieuw instellen.

Als je de keystore en het bijbehorende wachtwoord goed bewaart, wordt het bijwerken van de APK later veel eenvoudiger, vooral als je de app op een nieuwe computer moet bouwen. Zie het onderdeel [AAPS bijwerken](../Maintenance/UpdateToNewVersion.md) voor meer informatie over het gebruik van de keystore bij het bouwen van een nieuwe APK.

**Wanneer een back-up maken:** maak een back-up van de keystore nadat je het **AAPS** .APK-installatiebestand voor de eerste keer hebt gebouwd.

**Hoe een back-up maken:** zoek het pad van je keystore. Weet je het niet meer? Dan vind je het in Android Studio via **Build > APK > Next**. Het pad staat bij “Key store path”. Ga met je bestandsbeheerder naar dit pad en maak een kopie van je keystore-bestand (met de extensie `.jks`). Bewaar het op een veilige plek in de cloud, voor het geval je computer niet meer beschikbaar is. Noteer ook je keystore-wachtwoord (key store password), je key alias en je key password.

### Kopieën van de meest recente APK
Als je **AAPS**-telefoon kwijtraakt of kapotgaat, kun je met een kopie van de APK snel weer verder met **AAPS** op een nieuwe telefoon. Let op: je hebt ook een back-up van je instellingen nodig, zoals hieronder beschreven.

**Wanneer een back-up maken:** bewaar altijd een back-up van de meest recente APK die je op je **AAPS**-telefoon hebt geïnstalleerd. Je kunt ook één eerdere versie bewaren, voor het geval je om welke reden dan ook naar die versie terug moet.

**Hoe een back-up maken:** bewaar een kopie op de computer waarmee je de APK in Android Studio bouwt. Het is daarnaast aan te raden om een kopie van de installatie-APK op een cloudplatform te bewaren. Zorg dat je weet waar je beide back-ups kunt vinden als je ze nodig hebt. Overweeg aparte mappen te maken om deze back-ups in te bewaren.

### AAPS-instellingenbestand (ook wel 'Preferences' genoemd)

```{admonition} Where are preferences stored on my phone?
:class: tip
Je vindt je instellingen in de **AAPS map** die je hebt gekozen tijdens de [AAPS-installatie](#SetupWizard-StoragePermission).</br>
Je kunt de **AAPS map** ook wijzigen op het scherm **Onderhoud** (**menu** (☰) > **Onderhoud**), zie [De lokale AAPS map instellen](#preferences-maintenance-logdirectory).
```

Met een kopie van het APK-installatiebestand (zie hierboven) en je **Instellingen**-bestand ben je snel weer aan de slag op een bestaande of nieuwe telefoon.

Het **Instellingen**-bestand wordt gebruikt om de AAPS-app aan te passen aan jouw installatie. Ze bevatten onder meer je **Configuratie**-instellingen, de status van je doelen, instellingen voor communicatie met andere diensten (bijv. Nightscout, Tidepool), automatiseringen en profielen.

Als je de AAPS-instellingen naar een bestand exporteert, kun je de configuratie later terugzetten naar hoe die op dat moment was. Zoals gezegd bevat het exportbestand naast alle configuratie-instellingen ook de status van je doelen. Die moet je terugzetten als je AAPS **(opnieuw) installeert**. Zonder dit moet je alle doelen opnieuw doorlopen om de gesloten loop te kunnen gebruiken. Met instellingenbestanden kun je ook de "laatst goed werkende" instellingen terugzetten om wijzigingen in de configuratie ongedaan te maken.

**Wanneer een back-up van de AAPS-instellingen maken:**
* Elke keer als je een doel hebt afgerond, zodat je je voortgang niet kwijtraakt. _Zonder kopie van je **Instellingen** moet je alle doelen opnieuw doorlopen als je AAPS opnieuw moet installeren of je telefoon moet vervangen._

* Ben je van plan grote wijzigingen in je configuratie te maken (SMB-instellingen wijzigen, ander insulinetype, andere pomp, automatiseringen aanpassen)? Maak dan een back-up van je **Instellingen** vóór en na de wijzigingen. Zo heb je je meest recente instellingen én een kopie van hoe ze vóór de wijzigingen waren, voor het geval je ze terug moet zetten.

* Tubeless pumps (Such as Omnipod and Medtrum) users only: the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. Heb je geen kopie van je instellingen die is geëxporteerd nadat je je huidige pod hebt gestart? Dan moet je een nieuwe pod starten als je je huidige telefoon moet vervangen.

**Handmatig een back-up maken:**

1. If this is your first time importing or exporting **Settings** you will need to set a master password in [Settings > Protection](#Preferences-master-password). Stel een wachtwoord in en bewaar het op een veilige plek. _Zonder dit wachtwoord heb je geen toegang tot je back-ups van de **Instellingen**._

2. Open in het hoofdscherm van **AAPS** het **menu** (☰) > **Onderhoud**. Kies waar het bestand wordt opgeslagen met de chips **Lokaal** en **Cloud** naast **Exporteer instellingen** (zie **Instellingen exporteren of importeren** hieronder) en tik daarna op **Exporteer instellingen**. **AAPS** laat zien waar het bestand naartoe gaat: de bestandsnaam bij **Lokaal**, **Google Drive** bij **Cloud**. Tik op **OK**.

   ![Instellingen exporteren naar een lokaal bestand](../images/Maintenance/export_settings_confirm_local.png)

   ![Instellingen exporteren naar Google Drive](../images/Maintenance/export_settings_confirm_cloud.png)

   Typ het hoofdwachtwoord dat je hierboven hebt ingesteld en tik op **OK**.

   ![Hoofdwachtwoord voor de export](../images/Maintenance/export_settings_password.png)

   **Instellingen geëxporteerd** (lokaal) of **Export naar de cloud geslaagd** (cloud) bevestigt de export.

   ![Melding Instellingen geëxporteerd](../images/Maintenance/export_settings_done_local.png)

   ![Melding Export naar de cloud geslaagd](../images/Maintenance/export_settings_done_cloud.png)

3. Ga met de bestandsbeheerder op je telefoon (meestal “Bestanden” of “Mijn bestanden” genoemd) naar Interne opslag > AAPS > preferences. Hier zie je een kopie van alle geëxporteerde instellingenbestanden. De bestandsnaam is `YYYY-MM-DD_Time_appname.json`. Upload dit bestand naar het cloudplatform van je keuze. Download daarna vanuit het cloudplatform ook een kopie naar je eigen computer.

(ExportImportSettings-Settings-Export)=

## Instellingen exporteren

```{admonition} Where are preferences stored on my phone?
:class: tip
Je vindt je instellingen in de **AAPS map** die je hebt gekozen tijdens de [AAPS-installatie](#SetupWizard-StoragePermission).</br>
Je kunt de **AAPS map** ook wijzigen op het scherm **Onderhoud** (**menu** (☰) > **Onderhoud**), zie [De lokale AAPS map instellen](#preferences-maintenance-logdirectory).
```

Het is aan te raden om regelmatig de instellingen te exporteren, vooral vóór en na het wijzigen van de configuratie. Je kunt **handmatig of (bij voorkeur) via een automatisering** exporteren. Noteer je AAPS hoofdwachtwoord en maak een back-up van je instellingenbestanden door ze van je telefoon te kopiëren, bijvoorbeeld naar cloudopslag.

**Let op**: _De geëxporteerde instellingen worden versleuteld met je AAPS hoofdwachtwoord: zonder het hoofdwachtwoord dat bij het exporteren is gebruikt, kun je het instellingenbestand niet importeren!_

### Instellingen exporteren of importeren
Om instellingen te exporteren of te importeren, open je het **menu** (☰) en kies je **Onderhoud**. Onder **Bestandsbeheer** kies je met de chips **Lokaal** en **Cloud** naast **Exporteer instellingen** en **Importeer instellingen** waar het instellingenbestand wordt opgeslagen of vandaan wordt gelezen: **Lokaal** is de AAPS map op je telefoon, **Cloud** is beschikbaar zodra er een [Cloud map](#preferences-maintenance-cloud) is ingesteld. Tik op een chip om hem aan of uit te zetten; er blijft altijd minstens één gekozen, en beide rijen gebruiken dezelfde keuze. Tik daarna op **Exporteer instellingen** of **Importeer instellingen** zelf om te beginnen.

![Menu Onderhoud met de rijen Exporteer instellingen en Importeer instellingen](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Instellingen automatisch exporteren

To automate settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) open [**Settings** > **Maintenance**](#preferences-maintenance-settings), expand **Unattended Settings Export** and switch on **Enable automated settings export**.

Je kunt nu een [Automatisering](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) instellen die de instellingen exporteert, regelmatig (_bijv._ elke week) of na een podwissel.

_**Let op:** bij het importeren van instellingen moet je altijd het AAPS hoofdwachtwoord invoeren!_

![Instellingen > Onderhoud > Automatisch instellingen exporteren met de schakelaar Schakel automatische instellingen export in](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Je back-ups terugzetten op een nieuwe telefoon of een nieuwe installatie van AAPS

```{admonition} Where are preferences stored on my phone?
:class: tip
Je vindt je instellingen in de **AAPS map** die je hebt gekozen tijdens de [AAPS-installatie](#SetupWizard-StoragePermission).</br>
Je kunt de **AAPS map** ook wijzigen op het scherm **Onderhoud** (**menu** (☰) > **Onderhoud**), zie [De lokale AAPS map instellen](#preferences-maintenance-logdirectory).</br>
Als **AAPS** geen toegang meer heeft tot die map (dit kan gebeuren na een herinstallatie of na het wissen van de opslag van de app), toont het de melding **De toegang tot de AAPS map is verloren** en slaat het geen instellingen meer op de telefoon op, totdat je [de map opnieuw kiest](#preferences-maintenance-logdirectory).
```

Gebruik deze instructies als je een back-up van je APK en **Instellingen** hebt die je op een nieuwe telefoon wilt zetten, of als je de APK om een of andere reden moest verwijderen en opnieuw installeren op je huidige telefoon.

_Werk je **AAPS** bij met een APK die met dezelfde keystore is gebouwd? Dan hoef je deze stappen niet te volgen. Toch is het aan te raden om een back-up te maken voordat je de update installeert._

Werk je **AAPS** bij nadat je je oorspronkelijke keystore bent kwijtgeraakt of hebt vervangen (bijv. een nieuwe computer om te bouwen, zonder de keystore over te zetten)? Maak dan eerst een back-up van alle instellingen zoals hierboven beschreven, en verwijder daarna de bestaande versie van **AAPS** van je telefoon. Zie [AAPS opnieuw installeren met een nieuwe keystore](#reinstall-aaps) voor de volledige procedure.

Stel, indien nodig, [je CGM/BG-bron (ontvanger) in](../Getting-Started/CompatiblesCgms.md) voordat je de stappen hieronder volgt

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Het **Instellingen**-bestand bevat de sessie van de pod of patch die actief was toen je het exporteerde.
- **Exporteer direct na elke activering van een pod of patch** en kopieer het bestand van je telefoon.
- **Zelfde telefoon, pod loopt nog:** laat **Vervang ook de pompinstellingen** uitgevinkt. Je huidige pod blijft behouden en alleen de andere instellingen worden geïmporteerd.
- **Nieuwe telefoon neemt de pod over:** vink **Vervang ook de pompinstellingen** aan, en gebruik alleen een bestand dat is geëxporteerd tijdens de pod die je nu draagt. Een bestand van een eerdere pod vervangt je huidige podsessie, en dan moet je een nieuwe pod starten.
- **Per ongeluk een oude podsessie geïmporteerd:** **AAPS** blijft proberen die pod te bereiken en je kunt geen nieuwe pod activeren. Deactiveer hem; als dat mislukt, gooi hem dan weg (zie bijvoorbeeld [Een pod weggooien](#omnipod-dash-discard-pod) voor Omnipod DASH).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
Standaard laat een import je pompinstellingen met rust: de pomp die gekozen is in **Configuratie**, de koppeling en alle andere instellingen van de pomp blijven zoals ze op deze telefoon zijn. Vink **Vervang ook de pompinstellingen** op het importscherm alleen aan als je terugzet op een nieuwe telefoon die dezelfde pomp moet overnemen. Instellingen die niet in het bestand staan, worden nooit door een import verwijderd.
```

1. Gebruik de back-up van je APK van hierboven en volg de instructies voor een [nieuwe installatie](../SettingUpAaps/TransferringAndInstallingAaps.md)

2. Start **AAPS** en geef alle gevraagde machtigingen

3. Sluit de Setup Wizard af. We importeren alle benodigde instellingen uit de back-up van de **Instellingen**

4. Druk in het hoofdscherm van **AAPS** op **Toestaan** en sta alle machtigingen toe die in het paneel **Vereiste machtigingen** bovenaan staan

5. Stel in het hoofdscherm van **AAPS** het hoofdwachtwoord in via [Instellingen > Beveiliging](#Preferences-master-password). Gebruik hetzelfde wachtwoord als bij je back-ups.

6. Heb je het nog niet gedaan? [Stel dan de **AAPS map** in](#preferences-maintenance-logdirectory): open in het hoofdscherm van **AAPS** het **menu** (☰) > **Onderhoud** > **AAPS map**.

7. Open in het hoofdscherm van **AAPS** het **menu** (☰) > **Onderhoud** > **Exporteer instellingen** > typ het hoofdwachtwoord dat je hierboven hebt ingesteld > **OK**. Hiermee wordt de map preferences aangemaakt als die nog niet op je telefoon bestaat.

8. Download de back-up van je **Instellingen**-bestand van je cloudplatform.

9. Verplaats het bestand met je bestandsbeheerder (meestal “Bestanden” of “Mijn bestanden” genoemd) van je downloads naar `/internal storage/AAPS/preferences` als je **AAPS map** is ingesteld op `/internal storage/AAPS`

10. Open in het hoofdscherm van **AAPS** het **menu** (☰) > **Onderhoud** en tik op **Importeer instellingen**. Kies het instellingenbestand dat je wilt terugzetten (het nieuwste staat bovenaan). Zorg dat je het juiste instellingenbestand kiest: alle .json-bestanden uit de map preferences (of uit de cloud map, bij **Cloud**) worden getoond.

    ![Lijst met instellingenbestanden om te importeren](../images/Maintenance/import_settings_files.png)

    **AAPS** toont de gegevens van het bestand. Typ het hoofdwachtwoord dat je hierboven hebt ingesteld en tik op **Ontsleutelen & controleren**.

11. Als het bestand is ontsleuteld, beslis je wat er met de pompinstellingen moet gebeuren. Op een nieuwe telefoon die dezelfde pomp overneemt, vink je **Vervang ook de pompinstellingen** aan, zodat de koppeling en de pompinstellingen uit het bestand komen. Laat het vakje uitgevinkt om de pomp te houden waarmee deze telefoon al gekoppeld is. Tik daarna op **Importeren**.

    ![Ontsleuteld instellingenbestand met het vakje Vervang ook de pompinstellingen en de knop Importeren](../images/Maintenance/import_settings_review.png)

12. **AAPS** vraagt **Geïmporteerde instellingen toepassen?** en laat zien hoeveel instellingen er veranderen en, als je het vakje uitgevinkt liet, hoeveel pompinstellingen behouden blijven. Er is nog niets opgeslagen, dus met **Annuleren** blijft je telefoon precies zoals hij was. Tik op **OK** om toe te passen.

    ![Apply imported settings dialog](../images/Maintenance/import_settings_apply.png)

13. **AAPS** past de geïmporteerde instellingen direct toe, zonder opnieuw op te starten. Alleen de plugins waarvan de instellingen zijn veranderd, worden opnieuw gestart. Terwijl dit loopt, toont **AAPS** **Instellingen toepassen…**; als de pomp bezig is, toont het **Wacht op pomp…** en past het de instellingen toe zodra de pomp vrij is. Is de pomp na één minuut nog steeds bezig, dan biedt **AAPS** aan om het opnieuw te proberen. De melding **Instellingen zijn toegepast** bevestigt dat de geïmporteerde instellingen worden gebruikt. Een behandeling die in de wachtrij stond terwijl de import liep, wordt geschrapt en **AAPS** meldt dat die is geannuleerd, zodat er niets twee keer naar de pomp wordt gestuurd.

    ![Melding Instellingen zijn toegepast](../images/Maintenance/import_settings_applied.png)

Als het bestand een pomp kiest die deze versie van **AAPS** niet heeft, schakelt **AAPS** over naar de **Virtuele Pomp** en meldt het dat. Kies je pomp opnieuw in **Configuratie** en controleer de instellingen ervan.

14. Alleen voor gebruikers van pompen zonder slang (Omnipod en Medtrum): heb je **Vervang ook de pompinstellingen** aangevinkt en is de back-up van je **Instellingen** niet gemaakt tijdens de pod die je nu gebruikt? Dan moet je een nieuwe pod starten om insuline toe te dienen.

**Probleemoplossing:** lukt het niet om een actief profiel in te stellen vanuit het hoofdscherm van **AAPS**? Open dan het **menu** (☰) linksboven > **Configuratie** > **Pomp** > kies **Virtuele Pomp** > kies daarna weer je eigen pomptype

### Tip voor Dana RS gebruikers

- Als je **Vervang ook de pompinstellingen** hebt aangevinkt, worden ook de verbindingsinstellingen van de pomp geïmporteerd: **AAPS** op je nieuwe telefoon "kent" de pomp dan al en start daarom geen Bluetooth-scan.
- Koppel de nieuwe telefoon handmatig met de pomp.