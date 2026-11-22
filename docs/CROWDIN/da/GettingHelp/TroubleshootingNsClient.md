(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Fejlfinding af NSClient

NSClient har brug for en stabil forbindelse til Nightscout. En ustabil forbindelse giver synkroniseringsfejl og højt dataforbrug.

Hvis ingen følger dig på Nightscout, kan du sætte NSClient på pause for at spare batteri, eller du kan sætte NSClient op, så den kun forbinder via Wi-Fi og/eller under opladning.

* Hvordan finder du en ustabil forbindelse?

Åbn NSClient-skærmen (**Konfiguration** > **Kommunikation** > **NSClientV3** > **Åbn plugin**), og hold øje med **Status** og loggen. Når websockets er aktiveret, bør status blive ved med at være »connected« (forbundet), næsten uden beskeder om genforbindelse i loggen. Hvis du ser mange genforbindelser, er der et problem.

* Genstart

Som første trin skal du genstarte Nightscout og derefter din telefon for at se, om problemet er permanent.

Hvis din Nightscout er hostet på Heroku, kan du genstarte Nightscout sådan: Log ind på Heroku, klik på navnet på din Nightscout-app, klik på menuen 'More', og derefter 'Restart all dynos'.

For andre hosts skal du følge vejledningen fra din host.

* Problemer med telefonen

Android kan sætte din telefon i dvaletilstand. Kontroller, om AAPS har en undtagelse i telefonens strømindstillinger, så appen altid må køre i baggrunden.

Kontroller NSClient igen et sted med et stærkt netværkssignal.

Prøv en anden telefon.

* Nightscout

Hvis dit site er hostet på Azure, har mange oplevet færre forbindelsesproblemer efter at være flyttet til Heroku.

En løsning på forbindelsesproblemer i Azure er at sætte HTTP protocol til 2.0 og Websockets til ON i Application settings

    {admonition} Fjernstyring kræver websockets
    :class: important
    Websockets er **påkrævet** for fjernstyring fra **AAPSClient**, på begge telefoner. Hvis websocket-forbindelsen bliver ved med at falde ud, virker fjernstyring ikke. Datasynkronisering virker stadig, men langsommere. Din Nightscout-host skal understøtte websockets.

* Ingen BS-værdier fra Nightscout

Hvis **AAPS** forbinder korrekt til Nightscout, men BS vises som N/A: åbn **Synkronisering** i [NSClientV3-indstillingerne](#Preferences-nsclient), og slå **Modtag CGM-data fra NS** til. Denne mulighed er skjult, mens klientstyring er slået til ([hærdet tilstand](#client-master-control-hardened-mode)); kontroller i så fald, at **NSClient BS** er valgt i **Konfiguration** → **BS-kilde**.

* Hvis du stadig får en fejl ...

Kontroller størrelsen på din database i MongoDB (eller med database size-pluginet i Nightscout). Hvis du bruger den gratis plan i MongoDB, betyder 496MB, at den er fuld og skal ryddes op. [Følg denne vejledning fra Nightscout for at kontrollere størrelsen på din database og rydde data op](https://nightscout.github.io/troubleshoot/troubleshoot/#database-full).

Før du sletter data fra din database, og hvis du ikke allerede har sat det op, bør du overveje at donere dine AAPS-data til Open Humans-projektet (til forskning). Vejledningen står på [siden om konfiguration af Open Humans](../SupportingAaps/OpenHumans.md).