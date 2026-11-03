# Uppladdning till Open Humans

## Donera dina data till forskningen

Du kan hjälpa communityn genom att donera dina data till forskningsprojekt! Det hjälper forskare att föra kunskapen vidare, ta fram nya vetenskapliga idéer och göra slutna loopsystem med öppen källkod mer kända. AAPS kan synkronisera dina data med [Open Humans](https://www.openhumans.org), en plattform där du kan ladda upp, koppla ihop och lagra dina personliga data – till exempel genetiska data, aktivitetsdata och hälsodata.

Du har full kontroll över vad som händer med dina data och vilka projekt du vill stödja genom att ge dem tillgång till dina data. Beroende på vilket projekt du har gått med i utvärderas och används dina data på olika sätt och i olika omfattning.

Följande data laddas upp till ditt Open Humans-konto:

- Blodsockervärden
- Careportal-händelser (utom anteckningar)
- Förlängda bolusar
- Profilbyten
- Total daglig dos (TDD)
- Tillfälliga basaler
- Tillfälliga målvärden
- Preferences
- Programversion
- Enhetsmodell
- Skärmdimensioner

Hemlig eller privat information, till exempel din Nightscout-URL eller API secret, laddas inte upp.

## Ställa in

1. Skapa ett konto på [Open Humans](https://www.openhumans.org) om du inte redan har ett. Om du vill kan du använda ditt befintliga Google- eller Facebook-konto.
2. Aktivera pluginet **Open Humans** i [**Konfiguration** > **Kommunikation**](../SettingUpAaps/ConfigBuilder.md).

![Open Humans aktiverat i Konfiguration > Kommunikation](../images/OHUploader1.png)

3. Tryck på **Inställningar** på kortet **Open Humans**. Du kan begränsa uppladdningen till tider när telefonen använder Wi-Fi (**Endast WiFi**) och/eller laddas (**Endast vid laddning**).

![Inställningar för Open Humans med Endast WiFi och Endast vid laddning](../images/OHUploader_settings.png)

4. Tryck på **Öppna plugin** på kortet **Open Humans** och tryck sedan på **Ställ in**.

![Skärmen för pluginet Open Humans med knappen Ställ in](../images/OHUploader_setup.png)

5. Tryck på **Nästa** på skärmen **Välkommen till Open Humans**. Läs skärmen **Samtycke** noga: den visar användarvillkoren och vilka data som laddas upp och inte laddas upp.
6. Slå på **Jag förstår och godkänner.** (1) och tryck på **Logga in på Open Humans** (2).

![Skärmarna Välkommen och Samtycke för Open Humans i AAPS](../images/OHUploader2.png)

7. Webbplatsen för Open Humans öppnas. Logga in med dina inloggningsuppgifter.
8. Välj om du vill dölja ditt medlemskap i AAPS Uploader i din offentliga Open Humans-profil (1).
9. Klicka på **Authorize project** (godkänn projektet) (2).

![Inloggning och godkännande av projektet på webbplatsen för Open Humans](../images/OHUploader_web.png)

```{admonition} Older screenshot
:class: note
Skärmbilderna ovan visar en äldre version av webbplatsen för Open Humans och använder fortfarande det gamla projektnamnet **AndroidAPS Uploader**. Stegen är desamma.
```

10. Tillbaka i **AAPS** frågar skärmen **Avslutande detaljer** om du vill fortsätta. Tryck på **Fortsätt**.
11. Vänta tills **Vi är klara!** visas och tryck sedan på **Stäng**. Från och med nu laddar telefonen upp data i bakgrunden då och då.
12. Skärmen för pluginet **Open Humans** visar nu ditt **Projektmedlems-ID**. Tryck på **Ladda upp nu** om du vill starta en uppladdning direkt.
13. Tryck på **Logga ut** om du vill sluta ladda upp data till Open Humans.
14. En Android-avisering visar att en uppladdning pågår.

![Open Humans – slutför konfigurationen](../images/OHUploader3.png)

```{admonition} Older screenshot
:class: note
Skärmbilden ovan är från en tidigare **AAPS**-version. I **AAPS** 4 heter bekräftelseskärmarna **Avslutande detaljer** och **Vi är klara!**, det finns ingen köstorlek och knapparna heter **Ladda upp nu** och **Logga ut**.
```

15. Du kan hantera dina data genom att logga in på [webbplatsen för Open Humans](https://www.openhumans.org).

![Open Humans – hantera data](../images/OHWeb.png)

## Möjligheter att dela data

### [Projektet 'OPEN'](https://www.open-diabetes.eu/)

Projektet 'OPEN' samlar ett internationellt konsortium från flera sektorer: patienter som är innovatörer, läkare och vårdpersonal, samhällsvetare, datavetare och patientorganisationer. Tillsammans undersöker de olika sidor av gör-det-själv-system för artificiell bukspottkörtel (DIY APS), som används av allt fler personer med diabetes. Mer information finns på deras [webbplats](https://www.open-diabetes.eu/).

I september 2020 startade projektet 'OPEN' en [enkät](https://survey.open-diabetes.eu/) där du också kunde donera data som du har laddat upp till Open Humans. En [guide](https://open-diabetes.eu/en/open-survey/survey-tutorials/) om hur du donerar dina data till projektet 'OPEN' finns på deras webbplats och i själva enkäten.

### [OpenAPS Data Commons](https://www.openhumans.org/activity/openaps-data-commons/)

OpenAPS Data Commons skapades för att det ska vara enkelt att dela datamängder från DIYAPS-communityn med forskningen. Data delas både med vanliga forskare som gör traditionella forskningsstudier och med grupper eller personer från communityn som vill granska data i sina egna forskningsprojekt. OpenAPS Data Commons använder plattformen 'Open Humans' så att personer enkelt kan ladda upp och dela sina data från DIYAPS, bland annat AAPS, Loop och OpenAPS.

Du kan få in dina data i Open Humans på ett av tre sätt:

1. använd uppladdningsalternativet i AAPS för att få in dina data i Open Humans
2. använd Nightscout Data Transfer för att få in dina data i Open Humans
3. ladda upp datafiler till Open Humans för hand.

När du har skapat ett konto och dina data börjar komma in i Open Humans, se till att också gå med i OpenAPS Data Commons om du vill donera dina data till forskningen.

## Användarvillkor

Det här är ett verktyg med öppen källkod som kopierar dina data till [Open Humans](https://www.openhumans.org). Vi förbehåller oss inga rättigheter att dela dina data med tredje part utan ditt uttryckliga tillstånd. De data som projektet och appen tar emot identifieras med ett slumpmässigt användar-ID och överförs bara på ett säkert sätt till ett Open Humans-konto om du har godkänt det. Du kan när som helst sluta ladda upp och radera dina uppladdade data via [www.openhumans.org](https://www.openhumans.org). Observera att en del projekt som tar emot data kanske inte stöder detta.

Se även [användarvillkoren för Open Humans](https://www.openhumans.org/terms/).

## Dataskydd

Open Humans skyddar din integritet genom att ge dig ett nummer-ID för varje projekt. Det gör att projekten kan känna igen dig, men inte veta vem du är. App-ID:t som AAPS laddar upp fungerar på liknande sätt och används bara för att administrera data. Mer information finns här:

- [Open Humans policy för dataanvändning (Data Use Policy)](https://www.openhumans.org/data-use/)
- [Open Humans och GDPR](https://www.openhumans.org/gdpr/)
