(reinstall-aaps)=
# AAPS opnieuw installeren met een nieuwe keystore

Elke **AAPS**-apk is ondertekend met een **keystore**. Een update installeert alleen over je huidige **AAPS** heen als deze met **dezelfde keystore** is ondertekend: dan blijven al je instellingen en gegevens bewaard. Daarom is het aan te raden om de keystore en het wachtwoord op een veilige plek te bewaren.

Als je een apk probeert te installeren die met een andere keystore is ondertekend dan eerst, krijg je een foutmelding dat de installatie is mislukt!

(reinstall-aaps-when)=
## Wanneer moet je opnieuw installeren?

Je moet **AAPS** verwijderen en opnieuw installeren als je nieuwe apk met een andere keystore is ondertekend, bijvoorbeeld:

- Je kunt je oude keystore of het wachtwoord niet meer vinden.
- Je hebt een nieuwe keystore gemaakt, bijvoorbeeld met [optie 1 van bouwen in de browser](../SettingUpAaps/BrowserBuildKeystore.md) of met **Create a new key** in [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md).
- Je bouwt op een nieuwe computer en hebt je keystore daar niet naartoe gekopieerd.

Heb je je keystore nog, dan heb je deze pagina niet nodig: gebruik de keystore opnieuw en [werk **AAPS** bij](../Maintenance/UpdateToNewVersion.md) zonder te verwijderen.

(reinstall-aaps-before)=
## Voordat je begint

- Als je **AAPS** verwijdert, worden alle instellingen, je [doelen](../SettingUpAaps/CompletingTheObjectives.md) en de huidige verbinding met de pomp gewist. Je krijgt ze terug door je **instellingenbestand** te importeren. Zorg dus dat je een recent bestand hebt.
- Het instellingenbestand bevat niet je geschiedenis van behandelingen en glucose. Als je naar [Nightscout](../SettingUpAaps/SettingUpTheReportingServer.md) uploadt, kun je deze na het opnieuw installeren terugladen (stap 8).
- Je hebt je [**Hoofdwachtwoord**](#Preferences-master-password) nodig: het instellingenbestand is daarmee versleuteld.
- **Gebruikers van Omnipod en Medtrum:** lees eerst [Pompen zonder slang](#ExportImportSettings-tubeless-pumps). Je instellingenbestand moet geëxporteerd zijn tijdens de pod of patch die je nu draagt.
- [Stel zo nodig je CGM/BG-bron (ontvanger) in](../Getting-Started/CompatiblesCgms.md) voordat je begint.

(reinstall-aaps-steps)=
## Stappen

De afbeeldingen tonen een overstap van **AAPS** 3.4 (stap 1 tot 3) naar **AAPS** 4 (stap 6 tot 8). Andere versies zien er iets anders uit.

(reinstall-aaps-export)=
### 1. Exporteer je instellingen

Exporteer je instellingen met de **AAPS** die nu op je telefoon staat. Zie [Instellingen exporteren](#ExportImportSettings-Settings-Export) voor meer informatie.

In **AAPS** 3.4: open **Onderhoud** en tik op **Export opties**. Vink onder **Gebruikersinstellingen** de optie **Lokale opslag** aan en tik op **OK**.

*Let op: je kunt ook [Cloud opslag](#preferences-maintenance-cloud) gebruiken voor een extra reservekopie. Dat is een goed idee, maar houd Lokale opslag aan om je instellingen snel terug te kunnen zetten.*

![Export opties met Gebruikersinstellingen op Lokale opslag](../images/ReinstallAaps/reinstall_export_options_local.png)

Op de knop staat nu **Exporteer instellingen (lokaal)**. Tik erop.

![Onderhoud met de knop Exporteer instellingen (lokaal)](../images/ReinstallAaps/reinstall_export_settings_local.png)

**AAPS** toont de naam van het bestand dat het gaat maken. Tik op **OK**, typ je hoofdwachtwoord en tik op **OK**.

![Bevestiging van Exporteer instellingen met de bestandsnaam](../images/ReinstallAaps/reinstall_export_confirm.png)

In **AAPS** 4: open **Onderhoud**, kies de chip **Lokaal** naast **Exporteer instellingen** en tik op **Exporteer instellingen**.

(reinstall-aaps-copy)=
### 2. Kopieer het instellingenbestand van je telefoon af

Het bestand staat in de map **preferences** van je [**AAPS**-map](#SetupWizard-StoragePermission), met een naam zoals `2026-10-13_222735_full.json`. Kopieer of upload het naar een andere plek (bijvoorbeeld je computer of een cloudopslagdienst...). Normaal blijft het bestand na het verwijderen op je telefoon staan, maar bewaar voor de zekerheid ook ergens anders een kopie.

(reinstall-aaps-nightscout-before)=
### 3. Synchroniseren met Nightscout

Deze stap is niet verplicht, maar wel aan te raden als je [DynISF](#Open-APS-features-DynamicISF) gebruikt: je kunt dan meteen verder met de huidige instellingen, in plaats van 5 dagen te wachten tot de plugin genoeg gegevens heeft. NSClient V3 moet [ingeschakeld en ingesteld](../SettingUpAaps/SettingUpTheReportingServer.md) zijn.

Zorg dat Nightscout al je gegevens heeft voordat je verwijdert.

Open **NSClient**, tik onderaan het scherm op de knop **Volledige synchronisatie** en daarna op **OK**.

![NSClient-scherm met de knop Volledige synchronisatie](../images/ReinstallAaps/reinstall_ns_fullsync_menu_before.png)

*Let op: hoe lang het duurt, hangt af van je Nightscout-hostingdienst.*

![Bevestiging van Volledige synchronisatie](../images/ReinstallAaps/reinstall_ns_fullsync_confirm.png)

**AAPS** biedt daarna aan om de database op te schonen. **OK** verwijdert gegevens ouder dan 3 maanden van de telefoon. Daardoor gaat het synchroniseren veel sneller. **Annuleren** synchroniseert zonder op te schonen. De database op de telefoon wordt bij het verwijderen toch gewist, dus beide zijn goed.

![Vraag om de database op te schonen](../images/ReinstallAaps/reinstall_ns_fullsync_cleanup.png)

Laat **AAPS** draaien tot het synchroniseren klaar is.

(reinstall-aaps-build)=
### 4. De nieuwe apk bouwen

[Bouw](../SettingUpAaps/BuildingAaps.md) een nieuwe ondertekende apk met je nieuwe keystore en zet deze over naar je telefoon.

(reinstall-aaps-uninstall)=
### 5. AAPS verwijderen

Tik in je telefoon bij **Instellingen** > **Apps** > **AAPS** op **Verwijderen** en bevestig met **OK**.

![App-info van AAPS met de knop Verwijderen](../images/ReinstallAaps/reinstall_uninstall_appinfo.png)

(reinstall-aaps-install)=
### 6. De nieuwe AAPS installeren en starten

[Installeer](../SettingUpAaps/TransferringAndInstallingAaps.md) de nieuwe apk en start **AAPS**. De [Setup Wizard](../SettingUpAaps/SetupWizard.md) vraagt om de machtigingen die **AAPS** nodig heeft: tik voor elke machtiging op **Toestaan**. Hiermee wordt ook de [batterij optimalisatie](#setup-wizard-bluetooth-battery-optimisation) weer uitgezet.

![Lijst Vereiste machtigingen van de Setup Wizard](../images/ReinstallAaps/reinstall_permissions.png)

Kies bij **AAPS map** dezelfde **AAPS**-map als eerst (de map waar de map **preferences** in staat), tik op **Deze map gebruiken** en op **Toestaan**.

![De bestaande AAPS-map kiezen](../images/ReinstallAaps/reinstall_aaps_directory.png)

Als **AAPS** je geëxporteerde instellingen vindt, toont de Setup Wizard het scherm [Opgeslagen instellingen gevonden](#setup-wizard-import-settings), waar je ze kunt importeren. Je kunt de wizard ook sluiten en importeren vanuit **Onderhoud**, zoals hieronder beschreven.

(reinstall-aaps-import)=
### 7. Je instellingen importeren

Staat het instellingenbestand niet meer op je telefoon, kopieer het dan terug naar de map **preferences** van je **AAPS**-map.

Open het menu (☰) > **Onderhoud**, kies de chip **Lokaal** naast **Importeer instellingen** en tik op **Importeer instellingen**.

![Onderhoud met Importeer instellingen](../images/ReinstallAaps/reinstall_maintenance_import.png)

De lijst toont elk bestand met de **AAPS**-versie en hoe oud het is. Kies het bestand dat je in stap 1 hebt geëxporteerd.

![Lijst met instellingenbestanden om te importeren](../images/ReinstallAaps/reinstall_import_file_list.png)

Je hoeft in de nieuwe **AAPS** niet eerst een hoofdwachtwoord in te stellen. Typ het hoofdwachtwoord dat je bij het exporteren hebt gebruikt in **Ontsleutelingswachtwoord** en tik op **Ontsleutelen**. **Het bestand is versleuteld met een ander wachtwoord** is normaal: de nieuwe **AAPS** kent je wachtwoord nog niet. De import zet het terug, samen met je andere instellingen.

![Ontsleutelingswachtwoord voor het instellingenbestand](../images/ReinstallAaps/reinstall_import_password.png)

Vink **Vervang ook de pompinstellingen** aan: zonder dit worden je pomp en de pompinstellingen niet teruggezet. Gebruikers van Omnipod en Medtrum: vink dit alleen aan als het bestand is geëxporteerd tijdens je huidige pod of patch (zie [Pompen zonder slang](#ExportImportSettings-tubeless-pumps)).

![Vervang ook de pompinstellingen aangevinkt](../images/ReinstallAaps/reinstall_import_replace_pump.png)

Tik op **Importeren**, dan op **OK** om de instellingen toe te passen, en nog eens op **OK** bij **Instellingen zijn toegepast**.

![Bevestiging om geïmporteerde instellingen toe te passen](../images/ReinstallAaps/reinstall_import_apply.png)

(reinstall-aaps-nightscout-after)=
### 8. Je geschiedenis terughalen uit Nightscout

Open het menu (☰) > [**Configuratie**](../SettingUpAaps/ChangeAapsConfiguration.md) > **Communicatie** en tik op **Plug-in openen** onder **NSClientV3**. Controleer of de status **Verbonden** toont. Als dat niet zo is, zie [Problemen met NSClient oplossen](TroubleshootingNsClient.md).

![Communicatie met de knop Plug-in openen van NSClientV3](../images/ReinstallAaps/reinstall_ns_open_plugin.png)

Tik onderaan het scherm op de knop **Volledige synchronisatie** en op **OK**. De database is nieuw, dus je kunt de vraag over opschonen beantwoorden zoals je wilt.

![NSClientV3-scherm met de knop Volledige synchronisatie](../images/ReinstallAaps/reinstall_ns_fullsync_menu_after.png)

**AAPS** laadt je gegevens uit Nightscout. Het logboek toont **Full sync finished** als het klaar is.

![NSClientV3-logboek met Full sync finished](../images/ReinstallAaps/reinstall_ns_fullsync_finished.png)

(reinstall-aaps-check)=
### 9. Controleren en verder loopen

Controleer of je pomp verbonden is en of je CGM-waarden binnenkomen. Ga daarna verder met loopen.

(reinstall-aaps-afterwards)=
## Daarna

Gebruik vanaf nu altijd je nieuwe keystore, en bewaar deze met het wachtwoord op een veilige plek, niet op je telefoon. Zie [Back-ups maken](../Maintenance/ExportImportSettings.md).
