# Vanliga frågor för loopare

Så lägger du till frågor i FAQ: Följ de här [instruktionerna](../SupportingAaps/HowToEditTheDocs.md)

## Allmänt

### Kan jag bara ladda ned installationsfilen för AAPS?

No. Det finns ingen apk-fil för AAPS att ladda ned. Du måste [bygga](../SettingUpAaps/BuildingAaps.md) den själv. Här är skälet:

AAPS används för att styra din pump och ge insulin. Enligt nuvarande regler i Europa är alla system i klass IIa eller IIb medicintekniska produkter som kräver godkännande (en CE-märkning), och det kräver olika studier och godkännanden. Det är olagligt att distribuera en medicinteknisk produkt som inte är godkänd. Liknande regler finns i andra delar av världen.

Regeln gäller inte bara försäljning (att få pengar för något) utan all distribution (även om något ges bort gratis). Att bygga en medicinteknisk produkt för eget bruk är det enda sättet att använda appen inom dessa regler.

Därför finns det inga apk-filer att ladda ned.

(FAQ-how-to-begin)=

### Hur börjar jag?

Börja med [Förberedelser inför start med AAPS](../Getting-Started/PreparingForAaps.md): där går du igenom allt nedan mer i detalj.

Först och främst måste du **skaffa hårdvarukomponenter som kan användas för loopning**:

* En [insulinpump som stöds](../Getting-Started/CompatiblePumps.md), 
* en [Android-telefon](../Getting-Started/Phones.md) (Apple iOS stöds inte av AAPS – du kan titta på [iOS Loop](https://loopkit.github.io/loopdocs/)) och
* ett [system för kontinuerlig glukosmätning (CGM)](../Getting-Started/CompatiblesCgms.md). 

För det andra måste du **ställa in dina programvarukomponenter**: [AAPS](../SettingUpAaps/BuildingAaps.md), [CGM/FGM-källa](../Getting-Started/CompatiblesCgms.md) och en [rapportserver](../SettingUpAaps/SettingUpTheReportingServer.md).

För det tredje måste du lära dig och **förstå OpenAPS reference design för att kontrollera dina behandlingsfaktorer**. Grundprincipen för en sluten loop är att din [basaldos och KH-kvot](../SettingUpAaps/YourAapsProfile.md) stämmer. Alla rekommendationer utgår från att ditt basalbehov är rätt inställt och att de toppar och dalar du ser beror på andra faktorer, som därför kräver tillfälliga justeringar (träning, stress osv.). De justeringar som den slutna loopen kan göra har begränsats av säkerhetsskäl (se högsta tillåtna tillfälliga basaldos i [OpenAPS Reference Design](https://openaps.org/reference-design/)). Därför vill du inte slösa den tillåtna doseringen på att rätta till en felaktig grundbasal. Om du till exempel ofta har låg tillfällig basal inför en måltid behöver din basal troligen justeras. Du kan använda [Autotune](#autotune-how-autotune-calculates-adjustments) för att låta en stor mängd data visa om och hur basaldoser och/eller ISF behöver justeras, och även om KH-kvoten behöver ändras. Du kan också testa och ställa in din basal på det [gammaldags sättet](https://integrateddiabetes.com/basal-testing/).

### Vilka praktiska frågor finns kring loopning?

#### Lösenordsskydd

Om du inte vill att dina inställningar ska kunna ändras lätt kan du skydda dem med ett lösenord, en PIN-kod eller telefonens biometriska autentisering (fingeravtryck, ansikte). Öppna **Inställningar** > **Skydd** > **Skydd för inställningar** och välj typ av skydd. På samma ställe kan du också skydda hela appen eller bara bolusar. Se [Skydd för inställningar](#Preferences-settings-protection) för mer information.

#### Smartklockor med Android Wear

Om du använder AAPS-klockappen för att ge bolus eller ändra inställningar måste varje begäran bekräftas på klockan: när du har skickat den visar klockan en sammanfattning med knappen **BEKRÄFTA**. Se [Styra AAPS från din smartklocka med Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(FAQ-disconnect-pump)=

#### Koppla från pumpen

Om du tar av pumpen för att duscha, bada, simma, träna eller göra annat måste du tala om för AAPS att inget insulin levereras, så att IOB blir rätt.

Pumpen kan kopplas från med [loopikonen](#AapsScreens-loop-status) på AAPS huvudskärm: tryck på den och välj **Koppla från pumpen** med den tid du behöver. Om aktiviteten tar längre tid än planerat, tryck på ikonen igen och välj en ny tid: du behöver inte återansluta först. Se [Koppla från pumpen för dusch eller aktivitet](#pumps-cannulas-disconnecting) för hur du undviker brist på insulin när pumpen är frånkopplad länge.

#### Rekommendationerna bygger inte på ett enda CGM-värde

Av säkerhetsskäl bygger rekommendationerna inte på ett enda CGM-värde utan på genomsnittlig delta. Om du missar några värden kan det därför ta ett tag efter att data kommer tillbaka innan AAPS börjar loopa igen.

#### Mer att läsa

Det finns flera bloggar med bra tips som hjälper dig att förstå det praktiska kring loopning. Några av dem finns inte längre på nätet: länkarna nedan som är märkta ”arkiverad kopia” öppnar en sparad kopia på Internet Archive.

    * [Fine-tuning Settings](https://web.archive.org/web/20171029031305/http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM (arkiverad kopia)
    * [Why DIA matters](https://web.archive.org/web/20231130035027/http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM (arkiverad kopia)
    * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
    * [Hormones and autosens](https://web.archive.org/web/20170902081839/http://seemycgm.com/2017/06/06/hormones-2/) See my CGM (arkiverad kopia)
    

(what-emergency-equipment-is-recommended-to-take-with-me)= (FAQ-emergency-equipment)=

### Vilken nödutrustning rekommenderas att ha med sig?

Du måste ha samma nödutrustning med dig som alla andra med typ 1-diabetes som använder insulinpump. När du loopar med AAPS rekommenderas det starkt att du har följande extra utrustning med dig eller i närheten:

* Batteripaket och kablar för att ladda din telefon, klocka och (om det behövs) BT-läsare eller länkenhet
* Pumpbatterier
* Tillgång till dina säkerhetskopior, både på telefonen och i molnet (t.ex. Google Drive, Dropbox), så att du kan ställa in AAPS igen på en annan telefon (se [Skapa och återställa säkerhetskopior](../Maintenance/ExportImportSettings.md)): 
  * den aktuella [apk-filen](../SettingUpAaps/BuildingAaps.md) för AAPS och för andra appar som du använder (t.ex. xDrip, Juggluco, BYODA).
  * din keystore-fil (från när du byggde apk-filen) och dess lösenord,
  * dina senaste exporterade inställningsfiler från AAPS och dina andra appar,
  * ditt huvudlösenord för **AAPS**: utan det kan du inte importera inställningsfilen.

(FAQ-organize-backups)=

#### Hur organiserar jag mina säkerhetskopior?

Exportera inställningarna mycket ofta: efter varje byte av pod eller reservoar, när du har ändrat din profil, när du har klarat ett mål, om du byter pump… Även om inget ändras, exportera en gång i månaden. Spara flera gamla exportfiler.

**AAPS** kan göra detta åt dig: appen kan exportera dina inställningar automatiskt (till exempel med en [automation](#ExportImportSettings-Automating-Settings-Export) efter varje podbyte) och spara exporten direkt i en molnmapp (Google Drive). Se [Skapa och återställa säkerhetskopior](../Maintenance/ExportImportSettings.md).

### Hur fäster jag CGM/FGM säkert?

Du kan tejpa den. Det finns flera förstansade ”overpatches” för vanliga CGM-system (sök på Google, eBay eller Amazon). Vissa loopare använder den billigare vanliga kinesiotejpen eller rocktape.

Du kan fästa den. Du kan också köpa överarmsband som håller fast CGM/FGM med ett band (sök på Google, eBay eller Amazon).

## APS-algoritm

### Varför visar OpenAPS AMA ”dia: 3” fast jag har en annan DIA i min profil?

När **OpenAPS AMA** är vald i **Konfiguration** > **APS** visar **Öppna plugin** de data som skickas till algoritmen. I avsnittet **Profil** är `dia` alltid 3,0 eller mindre:

![Skärmen för pluginet OpenAPS AMA med dia 3,0 i profildata](../images/screens/openaps_ama_plugin.png)

I AMA betyder DIA egentligen inte ”insulinets verkningstid”. Det är en parameter som tidigare var kopplad till DIA. Nu betyder den ”inom vilken tid korrigeringen ska vara klar”. Den har inget att göra med beräkningen av IOB. I OpenAPS SMB behövs den här parametern inte längre.

## Övriga inställningar

### Inställningar för Nightscout

(FAQ-nsclient-blocked)=

#### AAPSClient (eller AAPS) laddar inte upp data: ”Blockerad av…”. Vad kan jag göra?

Statusen för NSClient visar varför inga data skickas:

* **Blockerad av anslutningsinställningar**: anslutningsinställningarna tillåter inte den aktuella anslutningen. Du använder till exempel mobildata men bara WiFi är tillåtet, eller du är inte ansluten till något av de tillåtna WiFi-näten (SSID).
* **Blockerad av laddningsinställningar**: anslutningsinställningarna tillåter bara synkronisering medan telefonen laddas (eller bara på batteri), och det är inte fallet just nu.
* **Ingen anslutning**: telefonen har ingen internetanslutning.

Kontrollera [anslutningsinställningarna för NSClient](#Preferences-nsclient): **Använd mobildata**, **Använd roaming**, **Använd WiFi**, **WiFi SSID**, **Synkronisera på batteri** och **Synkronisera vid laddning**.

### Inställningar för CGM

(FAQ-advanced-filtering)=

#### Varför säger AAPS ”SMB alltid och SMB efter kolhydrater är inaktiverade eftersom den aktiva BG-källan inte stöder avancerad filtrering”?

**Aktivera SMB alltid** och **Aktivera SMB efter kolhydrater** kan bara användas med en [pålitlig BG-källa](#GettingStarted-TrustedBGSource): en sensor och en CGM-app som kan tala om för **AAPS** vilken sensor värdena kommer från. Med alla andra BG-källor stänger **AAPS** av de här två alternativen och visar det här meddelandet. Titta i listan över pålitliga källor och, om din sensor finns med, se till att du använder en av de CGM-appar som visas för den. Se även [Utjämning av blodsockerdata](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Pump

#### Batterier

Loopning kan tömma pumpens batteri snabbare än vanlig användning, eftersom systemet kommunicerar via Bluetooth mycket oftare än en användare gör manuellt. Det är bäst att byta batteri vid 25 %, eftersom kommunikationen då blir svår. Du kan ställa in varningslarm för pumpens batteri med variabeln PUMP_WARN_BATT_P på din Nightscout-sida. Knep för att få batteriet att räcka längre:

* minska tiden som LCD-skärmen är tänd (i pumpens inställningsmeny)
* minska tiden som bakgrundsbelysningen är tänd (i pumpens inställningsmeny)
* ställ in aviseringar på pip i stället för vibration (i pumpens inställningsmeny)
* tryck bara på knapparna på pumpen för att fylla på (byta reservoar). Använd AAPS för att se all historik, batterinivå och reservoarvolym.
* På vissa telefoner stängs AAPS-appen ofta för att spara energi eller frigöra RAM. När AAPS startas om upprättar den en Bluetooth-anslutning till pumpen vid varje start och läser in den aktuella basaldosen och bolushistoriken igen. Det drar batteri. Om du vill se om det händer, aktivera **Logga appstart** under **Avancerade inställningar** för NSClient: Nightscout får då en händelse varje gång AAPS startas om, och det gör det lätt att följa problemet. För att minska detta, stäng av batterioptimering för AAPS så att telefonen slutar stänga appen: se [batterisparläge](#FAQ-battery-savings) nedan.
* rengör batteripolerna med en spritservett så att inget vax eller fett från tillverkningen finns kvar.
* för [Dana R/RS-pumpar](../CompatiblePumps/DanaRS-Insulin-Pump.md) drar startproceduren en hög ström genom batteriet för att med avsikt bryta passiveringsskiktet (som förhindrar energiförlust under förvaring), men det lyckas inte alltid bryta det till 100 %. Ta antingen ur och sätt i batteriet 2-3 gånger tills det visar 100 % på skärmen, eller använd batterinyckeln för att kortsluta batteriet ett ögonblick innan du sätter i det, genom att hålla den mot båda polerna under en bråkdel av en sekund.
* se också fler tips för [vissa batterityper](#Accu-Chek-Combo-Tips-for-Basic-usage-battery-type-and-causes-of-short-battery-life)

#### Byta reservoar och kanyl

Reservoaren måste bytas direkt på pumpen, och sedan registreras bytet i **AAPS**. Följ [guiden för att byta pumpens reservoar och kanyl](#pumps-cannulas-changing-reservoir-and-cannula) steg för steg.

### Bakgrundsbild

Du hittar AAPS-bakgrundsbilden för din telefon på sidan [Telefoner](#Phones-phone-wallpaper).

### Daglig användning

Många av situationerna nedan kan förberedas en gång som en [scen](#scenes): en förinställning som byter profil, tillfälligt målvärde och andra inställningar med ett tryck. **AAPS** har färdiga mallar, till exempel *Träning*, *Sömn*, *Alkohol* eller *Bad*.

#### Hygien

(what-to-do-when-taking-a-shower-or-bath)=

##### Vad gör jag när jag duschar eller badar?

Du kan ta av pumpen när du duschar eller badar. Under den korta tiden behöver du den kanske inte, men du bör tala om för AAPS att du har kopplat från den, så att IOB-beräkningarna blir rätt. Se [beskrivningen ovan](#FAQ-disconnect-pump). Mallen *Bad* för [scener](#scenes) gör detta åt dig.

#### Arbete

Beroende på ditt arbete kan du välja att använda andra behandlingsfaktorer på arbetsdagar. Som loopare bör du överväga ett [profilbyte](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) för en vanlig arbetsdag. Du kan till exempel byta till en profil över 100 % om du har ett mindre fysiskt krävande arbete (t.ex. sitter vid ett skrivbord), eller under 100 % om du är aktiv och på fötterna hela dagen. Du kan också överväga ett högt eller lågt tillfälligt målvärde eller en [tidsförskjutning av din profil](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) när du arbetar mycket tidigare eller senare än vanligt, eller om du arbetar skift. Du kan också skapa en andra profil (t.ex. ”hemma” och ”arbetsdag”) och göra ett dagligt profilbyte till den profil du faktiskt behöver, eller spara dina inställningar för arbetsdagar som en [scen](#scenes).

### Fritidsaktiviteter

(FAQ-sports)=

#### Sport

Du måste ändra dina gamla träningsvanor från tiden före loopen. Om du bara äter en eller flera portioner kolhydrater för träningen som tidigare kommer det slutna loopsystemet att upptäcka dem och korrigera för dem.

Du får alltså mer aktiva kolhydrater, men samtidigt motverkar loopen dem och ger insulin.

När du loopar bör du prova de här stegen:

* Gör ett [profilbyte](#ProfileSwitch-change-percentage) under 100 %: tryck på profilnamnet på huvudskärmen, tryck på den runda knappen **▶** och ställ sedan in **Procent** och **Varaktighet**.
* Ställ in ett [tillfälligt målvärde Träning](#TempTargets-activity-temp-target) som ligger över ditt vanliga målvärde. Med en procent under 100 % och en varaktighet visar samma skärm **Aktivera** ett reglage **Tillfälligt målvärde / Träning** som startar båda samtidigt.
* Om du använder SMB, se till att [”Aktivera SMB vid högt tillfälligt målvärde”](#Open-APS-features-enable-smb-with-high-temp-targets) och [”Aktivera SMB alltid”](#Open-APS-features-enable-smb-always) är avstängda.

Det är viktigt att förbereda och följa upp de här inställningarna. Gör ändringarna i god tid före träningen och tänk på effekten av att musklerna fyller på sina förråd.

Mallarna *Träning* och *Natt efter träning* för [scener](#scenes) samlar de här inställningarna, så att du kan starta dem med ett tryck. Om du tränar regelbundet vid samma tid (t.ex. ett pass på ditt gym) kan du överväga att använda [automation](../DailyLifeWithAaps/Automations.md) för att starta profilbytet och TT, eller scenen. Platsbaserad automation kan också vara en idé, men det gör förberedelserna svårare.

Procenten för profilbytet, värdet för ditt tillfälliga målvärde för träning och den bästa tiden för ändringarna är individuella. Börja på den säkra sidan när du letar efter rätt värde för dig (börja med lägre procent och högre TT).

#### Sex

Du kan ta av pumpen för att vara ”fri”, men du bör tala om det för AAPS så att IOB-beräkningarna blir rätt. Se [beskrivningen ovan](#FAQ-disconnect-pump).

#### Att dricka alkohol

Det är riskabelt att dricka alkohol i läget sluten loop, eftersom algoritmen inte kan förutsäga hur alkoholen påverkar BG. Du måste själv hitta ditt sätt att hantera detta med hjälp av följande funktioner i AAPS:

* Stänga av läget sluten loop och behandla diabetesen manuellt eller
* ställa in höga tillfälliga målvärden och stänga av UAM, så att loopen inte ökar IOB på grund av en oannonserad måltid, eller
* gör ett [profilbyte](#ProfileSwitch-change-percentage) till tydligt under 100 % 

Mallen *Alkohol* för [scener](#scenes) är en utgångspunkt som du kan anpassa till ditt eget sätt.

När du dricker alkohol måste du alltid hålla ett öga på din CGM, så att du själv kan undvika en hypoglykemi genom att äta kolhydrater.

#### Sömn

##### Hur kan jag loopa på natten utan strålning från mobilnät och WiFi?

Många användare sätter telefonen i flygplansläge på natten. Om du vill att loopen ska stötta dig medan du sover, gör så här (det fungerar bara om din CGM-app körs på samma telefon som AAPS, till exempel xDrip, Juggluco eller BYODA; det fungerar INTE om du får BG-värdena via Nightscout):

1. Slå på flygplansläget i din telefon.
2. Vänta tills flygplansläget är aktivt.
3. Slå på Bluetooth.

Nu tar du inte emot samtal och du är inte ansluten till internet. Men loopen körs fortfarande.

Vissa har upptäckt problem med lokal broadcast (AAPS tar inte emot BG-värden från xDrip) när telefonen är i flygplansläge. I xDrip, gå till Settings > Inter-app settings > Identify receiver och ange `info.nightscout.androidaps`.

![xDrip Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

Om du vill ha andra inställningar på natten (till exempel ett högre målvärde) är mallen *Sömn* för [scener](#scenes) en bra utgångspunkt.

#### Resor

##### Hur hanterar jag byte av tidszon?

Med Dana R och Dana R Korean behöver du inte göra något. För andra pumpar, se sidan [Byte av tidszon och sommartid](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) för mer information.

### Medicinska frågor

#### Sjukhusvistelse

Om du vill dela information om AAPS och DIY-loopning med din vårdpersonal kan du skriva ut [guiden till AAPS för vårdpersonal](../UsefulLinks/ClinicianGuideToAaps.md).

#### Läkarbesök hos din diabetesläkare

##### Rapporter

Du kan antingen visa dina Nightscout-rapporter (https://YOUR-NS-SITE.com/report) eller titta i [Nightscout Reporter](https://nightscout-reporter.zreptil.de/).

## Vanliga frågor på Discord och svaren på dem...

### Mitt problem finns inte med här.

Se [Var kan jag få hjälp?](../GettingHelp/WhereCanIGetHelp.md) Om du har hittat lösningen själv, **påminn oss om att lägga till den i listan!**

### Bygga och installera

(FAQ-build-errors)=

#### Jag har problem eller fel när jag bygger appen.

Titta på felsökningssidan för det sätt du bygger **AAPS** på (se [Bygga AAPS](../SettingUpAaps/BuildingAaps.md)):

* bygge i webbläsaren: [Bygge i webbläsaren: felsökning](#aaps-ci-troubleshooting),
* bygge med Android Studio: [Felsökning av Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md).

(FAQ-build-error-file-name-too-long)=

#### Byggfel: filnamnet är för långt

Det här felet kan uppstå när du bygger med Android Studio: bygget stannar med ett fel som säger att filnamnet är för långt. Möjliga lösningar: Flytta källkoden till en katalog närmare rotkatalogen på din enhet (t.ex. "C:\src\AndroidAPS").

Från Android Studio: Se till att "Gradle" har synkroniserat och indexerat klart när du har öppnat projektet och hämtat från GitHub. Kör Build->Clean Project innan du kör Rebuild Project. Kör File->Invalidate Caches and Restart Android Studio.

(FAQ-running-dev-version)=

#### Varning: Du kör nu dev-versionen. Sluten loop inaktiverad

**AAPS** visar det här meddelandet när du kör en utvecklingsversion (dev) utan Engineering Mode: i en dev-version fungerar sluten loop bara i Engineering Mode.

Dev-versionen är till för test, inte för verklig loopning: läs [Utvecklingsgren](../AdvancedOptions/DevBranch.md) innan du går vidare.

Så slår du på Engineering Mode:

1. Lägg en fil med namnet `engineering_mode` i undermappen `extra` i din AAPS-katalog (den mapp du valde i installationsguiden, oftast `AAPS/extra`). Vilken fil som helst fungerar, bara den har rätt namn.
2. Starta om **AAPS** så att appen hittar filen.

Tips: Gör en kopia av en befintlig loggfil och byt namn på den till "engineering_mode" (obs: ingen filändelse!).

### Mål

#### Jag har fastnat på ett mål och behöver hjälp.

Läs först [Slutföra målen](../SettingUpAaps/CompletingTheObjectives.md). Om du fortfarande har fastnat, ta en skärmbild av frågan och svaren och lägg upp dem i AAPS-kanalen på Discord. Glöm inte att berätta vilka alternativ du väljer (eller inte väljer) och varför. Du får tips och hjälp, men du måste själv hitta svaren.

### Inställningar, lösenord och säkerhetskopior

(FAQ-reset-master-password)=

#### Hur återställer jag huvudlösenordet?

Om du har glömt ditt huvudlösenord kan du återställa det till pumpens serienummer:

1. Skapa en tom fil med namnet `PasswordReset` (ingen filändelse) i undermappen `extra` i din AAPS-katalog (oftast `AAPS/extra`).
2. Starta om **AAPS**. Pumpen måste vara ansluten: **AAPS** visar ”Väntar på pump…” och måste läsa pumpens serienummer inom 30 sekunder.
3. **AAPS** visar ”Lösenord sparat!”: ditt huvudlösenord är nu **pumpens serienummer**. Filen `PasswordReset` raderas automatiskt.
4. Öppna **Inställningar** > **Skydd** > **Huvudlösenord** och ställ in ett nytt lösenord.

Om pumpen inte nås i tid ändras ingenting: kontrollera anslutningen till pumpen och försök igen.

Detta återställer bara huvudlösenordet. Ett lösenord eller en PIN-kod för inställningar, appen eller bolus återställs inte, men du kan alltid använda huvudlösenordet i stället.

    {admonition} Gamla inställningsfiler
    :class: warning
    Inställningsfiler som exporterades med det gamla huvudlösenordet kan bara importeras med det gamla lösenordet.

(FAQ-where-are-settings-files)=

#### Var hittar jag inställningsfilerna?

Inställningsfilerna sparas i undermappen `preferences` i den AAPS-katalog som du valde i [installationsguiden](#SetupWizard-StoragePermission) (till exempel `/internal storage/AAPS/preferences`). Om du har ställt in en molnmapp (Google Drive) kan dina exporter också sparas där. Se [Skapa och återställa säkerhetskopior](../Maintenance/ExportImportSettings.md).

VARNING: Se till att du inte tappar bort ditt lösenord. Utan det kan du inte importera en krypterad inställningsfil!

(FAQ-import-settings-earlier-versions)=

#### Hur importerar jag inställningar från tidigare versioner av AAPS till AAPS v3 eller v4?

Du kan bara importera inställningar (i AAPS v3 eller v4) som har exporterats med AAPS v2.8x eller senare. Om du använde en version av AAPS som är äldre än v2.8x, eller om du behöver använda inställningsexporter som är äldre än v2.8x, måste du först installera AAPS v2.8. Importera de äldre inställningarna från v2.x i v2.8. När du har kontrollerat att allt är OK kan du exportera inställningarna från v2.8. Installera den aktuella versionen av AAPS och importera inställningarna från v2.8 i den.

Om du använder samma nyckel för att bygga den gamla och den nya versionen behöver du inte ens importera inställningarna. Du kan installera den nya versionen ovanpå den gamla.

Några nya mål har lagts till. Du måste klara av dem.

(FAQ-delete-treatments)=

#### Var kan jag radera behandlingar?

Öppna **menyn** (☰) och välj **Behandlingshistorik**. Tryck länge på en post för att markera den, tryck på fler poster om det behövs, tryck sedan på ikonen **papperskorg** och bekräfta. Se [Behandlingshistorik](#aaps-screens-treatments).

### Problem med telefon och anslutning

(FAQ-aaps-stops)=

#### AAPS stannar varje dag ungefär vid samma tid.

* Google Play Protect kan stänga av **AAPS** varje morgon på vissa telefoner. Om det händer, gå till inställningarna för Google Play och stäng av **Google Play Protect**.
* Leta efter ”rensningsappar” (t.ex. CCleaner) och avinstallera dem.
* Stäng av all batterioptimering för **AAPS** (se [batterisparläge](#FAQ-battery-savings) nedan).

(FAQ-battery-savings)=

#### Hur ställer jag in batterisparläget?

Telefonen kan pausa **AAPS** och tillhörande appar (CGM-app, Bluetooth) när du inte använder den. **AAPS** kan då inte göra sitt jobb, och Bluetooth-anslutningarna till sensorn och pumpen (eller RileyLink) kan stängas, vilket ger larm om att pumpen inte kan nås och kommunikationsfel.

Stäng av batterioptimering för **AAPS**, din CGM-app (t.ex. xDrip) och systemappen för Bluetooth. Hur du gör beror på telefonens märke, modell och Android-version:

* se [Batterioptimering](#generaltroubleshooting-android-related-issues) för telefoner från Pixel, Samsung och Huawei,
* i **AAPS**, öppna **menyn** (☰) > **Om** och tryck på **Döda inte min app?**, eller besök [Don't kill my app](https://dontkillmyapp.com/) för andra märken.

Om du inte är säker på att batterisparläget orsakar ditt problem kan du tillfälligt stänga av allt batterisparande på telefonen: batteriet tar slut snabbare, men du ser snabbt om problemet försvinner.

(FAQ-pump-unreachable-alerts)=

#### Larm om att pumpen inte kan nås flera gånger om dagen eller på natten.

Telefonen kanske pausar **AAPS** eller till och med Bluetooth, så att anslutningen till pumpen eller RileyLink förloras (se [batterisparläge](#FAQ-battery-savings) ovan).

Du kan också ändra när larmet ges: tryck på ikonen **Inställningar** (kugghjulet) uppe till höger på huvudskärmen och välj sedan **Lokala larm** > **Tröskel för otillgänglig pump** (30 till 300 minuter). Titta på sidan för din pump: vissa rekommenderar ett värde, t.ex. 120 minuter för [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md).

(FAQ-link-unresponsive)=

#### Min länkenhet/pump/pod svarar inte (RL/OL/EmaLink…)

Med vissa telefoner bryts Bluetooth-anslutningen till länkenheterna (RL/OL/EmaLink).

Vissa har också länkenheter som inte svarar (AAPS säger att de är anslutna, men länkenheterna kan inte nå eller styra pumpen).

Prova först knappen **Återställ RileyLink** på pumpskärmen (se sidan för din pump: [Medtronic](#MedtronicPump-what-to-do-if-i-loose-connection-to-rileylink-and-or-pump), [Omnipod Eros](#OmnipodEros-reset-rileylink-config-notes)). Om det inte hjälper är det enklaste sättet att få alla delar att fungera tillsammans:

1. Stäng av länkenheten.
2. Avsluta **AAPS** (**menyn** (☰) > **Avsluta**).
3. Tryck länge på ikonen för **AAPS**, öppna Androids **App info** (appinformation), tryck på **Force stop** (tvinga avslutning) och sedan **Storage** (lagring) > **Clear cache** (rensa cacheminnet) (rensa INTE lagring/data!).
4. I sällsynta fall kan vissa telefoner behöva startas om här. Du kan prova utan omstart.
5. Slå på länkenheten.
6. Starta **AAPS**.
7. På pumpskärmen, tryck på **Parkoppla RileyLink** och välj din länkenhet igen.

### Fjärrstyrning

(FAQ-aapsclient)=

#### Ställa in och använda fjärrappen AAPSClient

**AAPSClient** är en separat app som låter en anhörig följa och styra **AAPS** på distans. Sedan **AAPS** v4 krävs en engångsparkoppling mellan de två apparna för att styra **AAPS** från AAPSClient. Se:

* [Appen AAPSClient](#aapsclient-app): installation, första start och parkoppling,
* [Styrning huvudenhet ↔ klient](#client-master-control): vad som kan styras och hur parkopplingen fungerar,
* [AAPSClient på en smartklocka](#remotecontrol-smartwatches).

(FAQ-hardened-mode)=

#### Behandlingar som jag anger på Nightscout-webbplatsen används inte

Det är [härdat läge](#client-master-control-hardened-mode). Medan klientstyrning är på – i Enkelt läge är den alltid på – tar **AAPS** bara emot ändringar från parkopplade klienter, inte från Nightscout-webbplatsen eller andra appar. Ange dem i stället i en parkopplad **AAPSClient**.

### Larm och varningar

#### Jag har en röd varningsbricka (röd triangel) / AAPS vill inte aktivera sluten loop / Loopen stannar i LGS / Jag hade en gul triangel

Den röda varningsbrickan på genvägen till BG-källan är en säkerhetsfunktion i AAPS. Se [Varningstecken för BG](#aaps-screens-bg-warning-sign) för hela förklaringen.

En röd varningsbricka på genvägen till BG-källan i det nedre fältet (den röda triangeln i äldre versioner) betyder att du har dubbla BG-värden och att AAPS inte kan beräkna deltavärdena exakt. En sluten loop växlas till läget **Paus vid lågt blodsocker**: den minskar eller pausar fortfarande din basal för att skydda dig mot låga värden, men den ger inget korrigeringsinsulin. Du måste radera ett BG-värde av varje dubblerat värde för att ta bort varningen. Tryck på genvägen för att öppna din [skärm för BG-källan](#aaps-screens-bg-source): dubbletten är markerad i rött. Tryck länge på en rad som du vill radera, markera en av varje dubblerad rad och tryck på papperskorgsikonen. Du kan behöva återställa AAPS-databaserna om det finns för många dubbla BG-värden. I så fall förlorar du också statistik, IOB, COB och vald profil.

När varningen är borta går AAPS inte tillbaka till **Sluten loop** av sig själv. Tryck på loopikonen på huvudskärmen och välj **Sluten loop** igen.

Möjlig orsak till problemet: xDrip och/eller NS fyller i saknade BG-värden (backfill).

Den gula triangeln i äldre versioner betydde ojämn tid mellan BG-värdena (BG kom inte regelbundet var 5:e minut, eller BG-värden saknades). Det händer ofta med Libre eller efter byte av sändare på G6. **AAPS** 4 visar den inte längre: appen räknar om värdena i bakgrunden och loopen fungerar korrekt.

### Omnipod DASH

(FAQ-move-dash-pod)=

#### Kan jag flytta en aktiv DASH-pod till en annan telefon?

Podstatusen ingår i de exporterade inställningarna, så en aktiv pod kan flyttas till en annan telefon: exportera inställningarna precis före flytten och importera dem på den andra telefonen. Detta stöds inte officiellt och det finns en risk att du förlorar podden: om det går, prova när din pod ändå snart löper ut.

Läs först de här avsnitten:

* [Exportera och importera inställningar](#omnipod-dash-export-import) på sidan om Omnipod DASH, och [Slanglösa pumpar](#ExportImportSettings-tubeless-pumps): på den nya telefonen, markera **Byt även pumpinställningar** och använd en fil som exporterades medan du hade på dig din nuvarande pod,
* [Kassera en pod](#omnipod-dash-discard-pod), för att ta bort podden från den gamla telefonen efteråt. Håll den gamla telefonen i flygplansläge tills podden är kasserad, så att de två telefonerna aldrig talar med podden samtidigt.