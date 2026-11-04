(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Felsökning av NSClient

NSClient behöver en stabil kommunikation med Nightscout. En instabil anslutning leder till synkroniseringsfel och hög dataförbrukning.

Om ingen följer dig på Nightscout kan du pausa NSClient för att spara batteri. Du kan också ställa in NSClient så att den bara ansluter via Wi-Fi och/eller under laddning.

* Hur upptäcker man en instabil anslutning?

Öppna skärmen för NSClient (**Konfiguration** > **Kommunikation** > **NSClientV3** > **Öppna plugin**) och titta på **Status** och loggen. När websockets är aktiverade ska statusen hela tiden vara "connected", med nästan inga meddelanden om återanslutning i loggen. Om du ser många återanslutningar finns det ett problem.

* Restart

Som ett första steg: starta om Nightscout och sedan telefonen för att se om problemet finns kvar.

Om din Nightscout körs på Heroku kan du starta om Nightscout så här: logga in på Heroku, klicka på namnet på din Nightscout-app, klicka på menyn 'More' och sedan på 'Restart all dynos'.

För andra värdtjänster: följ dokumentationen från din värdtjänst.

* Problem med telefonen

Android kan sätta telefonen i viloläge. Kontrollera att AAPS har ett undantag i telefonens energiinställningar, så att appen alltid får köras i bakgrunden.

Kontrollera NSClient igen på en plats med stark nätverkssignal.

Prova en annan telefon.

* Nightscout

Om din webbplats körs på Azure har många märkt att anslutningsproblemen blev mindre efter flytten till Heroku.

En tillfällig lösning på anslutningsproblem i Azure är att i Application settings ställa in HTTP protocol på 2.0 och Websockets på ON

* Inga BG-värden från Nightscout

Om **AAPS** ansluter till Nightscout korrekt men BG visas som N/A: öppna **Synkronisering** i [NSClientV3-inställningarna](#Preferences-nsclient) och slå på **Ta emot CGM-data från NS**. Det här alternativet är dolt när klientstyrning är på ([härdat läge](#client-master-control-hardened-mode)). Kontrollera i så fall att **NSClient BG** är valt i **Konfiguration** → **BG-källa**.

* Om du fortfarande får ett fel...

Kontrollera storleken på din databas i MongoDB (eller med pluginet för databasstorlek i Nightscout). Om du använder gratisnivån i MongoDB betyder 496 MB att databasen är full och måste rensas. [Följ dessa instruktioner från Nightscout för att kontrollera storleken på databasen och rensa bort data](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Innan du rensar data från databasen bör du överväga att donera dina AAPS-data till projektet Open Humans (för forskning), om du inte redan har ställt in det. Instruktionerna finns på [sidan om konfiguration av OpenHumans](../SupportingAaps/OpenHumans.md).