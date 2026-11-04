# Tidepool

Tidepool är ett verktyg från tredje part som samlar in data om BG, insulin och kolhydrater (och de anteckningar du lägger till dina behandlingar). Du kan använda det för att analysera och dela dessa data med ditt vårdteam. Sedan AAPS version 3.2 kan Tidepool användas i stället för Nightscout för att uppfylla en del av mål 1. Den kan också användas tillsammans med Nightscout som en extra rapportplattform som passar bra i vården. Det kan vara ett bra val för barn som använder AAPS och vill ha fjärrövervakning och fjärrstyrning med Nightscout, men också en rapportplattform som deras vårdteam känner sig mer bekväma med.

Det är viktigt att förstå att Tidepool bara är till för rapportering. Det är INTE en app för att följa i realtid. Om du behöver följare utöver AAPS-huvudtelefonen måste du också ställa in Nightscout.

Obs! Organisationen Tidepool har fått FDA-godkännande för iOS-produkten Loop och släppt den på marknaden. Det arbetet har inget att göra med deras plattform för datarapporter eller med AAPS.


## Steg 1 - Skapa ett Tidepool-konto

- Gå till [tidepool.org](https://www.tidepool.org/)

- Välj “Personal Sign Up” (personlig registrering) eller “Sign Up” (registrera dig)

- Välj en e-postadress och ett lösenord och skriv ner dem

- Välj “Personal Account” (personligt konto) och klicka på “Continue” (fortsätt)

- Fyll i avsnittet med patientinformation och godkänn användarvillkoren

- Bekräfta din e-postadress enligt instruktionerna i mejlet som du får


## Steg 2 - Anslut AAPS till Tidepool

- Öppna **menyn** (☰) i det övre vänstra hörnet av huvudskärmen och välj "**Konfiguration**"

- Öppna kategorin "**Kommunikation**" och aktivera "**Tidepool**":

![Aktivera Tidepool](../images/v4/Tidepool/tidepool_enable.png)

- Tryck på "**Öppna plugin**" under Tidepool och tryck sedan på ikonen **Logga in** (en pil som går in i en dörr) i det övre högra hörnet

- Ett webbläsarfönster öppnas med Tidepools inloggningssida. Logga in med e-postadressen och lösenordet som du skapade i steg 1 ovan:

![Tidepools inloggningssida](../images/v4/Tidepool/tidepool_login.png)

- När inloggningen har lyckats stängs webbläsaren och Tidepool-skärmen visar statusen "**Ansluten**". Loggen nedanför visar datauppladdningarna. Om inloggningen misslyckas, kontrollera att dina inloggningsuppgifter är rätt och att du har bekräftat din e-postadress hos Tidepool.

![Tidepool ansluten](../images/v4/Tidepool/tidepool_status.png)

- Öppna "**Anslutningsinställningar**" i "**Inställningar**" för Tidepool-pluginet. Som standard är "**Använd Nightscouts anslutningsinställningar**" på, så Tidepool laddar upp under samma villkor som du har ställt in för Nightscout. Stäng av det om du vill ha andra villkor för Tidepool, till exempel för att ladda upp till Tidepool bara via Wi-Fi och under laddning, medan Nightscout också använder mobildata.

![Anslutningsinställningar med Använd Nightscouts anslutningsinställningar på](../images/v4/Tidepool/tidepool_connection_settings.png) ![Separata anslutningsinställningar för Tidepool](../images/v4/Tidepool/tidepool_connection_settings_separate.png)

Mer hjälp om hur du använder dina data när de har laddats upp till Tidepool finns här: [https://www.tidepool.org/viewing-your-data](https://www.tidepool.org/viewing-your-data)

(tidepool-menu)=
## Tidepool-knapparna

I det övre högra hörnet av Tidepool-skärmen:

- Ikonen **Logga in** eller **Logga ut** — ansluter till eller kopplar från ditt Tidepool-konto. Bara en av dem visas: **Logga in** när du är utloggad, **Logga ut** när du är inloggad. **AAPS** ber dig bekräfta innan du loggas ut.
- Kugghjulsikonen — Tidepool-inställningarna.

Knapparna längst ned på Tidepool-skärmen:

- "**Ladda upp nu**" — laddar upp nya data direkt i stället för att vänta på nästa automatiska uppladdning.
- "**Full synkronisering**" — laddar upp all data som finns sparad i **AAPS** igen.
- "**Rensa all data**" — raderar **all** data som **AAPS** har laddat upp till ditt Tidepool-konto. Det går inte att ångra. Använd det bara för att ta bort felaktiga eller dubbla data, och kör sedan "**Full synkronisering**" för att ladda upp dina data igen.
- "**Töm logg**" — tömmer loggen som visas på Tidepool-skärmen.

![Tidepool-skärmen och dess knappar](../images/v4/Tidepool/tidepool_menu.png)

I Tidepool visas data som har laddats upp av **AAPS** 4 under enhetsnamnet **AAPS**. Se [Vad har ändrats i AAPS v4](#v4changes-tidepool) om du har använt Tidepool med en äldre version. 
