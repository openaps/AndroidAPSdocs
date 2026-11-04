# Nightscout

(Nightscout-security-considerations)=

## Säkerhetsöverväganden

Nightscout är rapport- och övervakningsservern för **AAPS**: **AAPS** laddar upp dina data dit, och du eller dina anhöriga tittar på dem på Nightscout-webbplatsen eller i följarappar. Där finns dina medicinska data, profiler och behandlingar, så det är värt att tänka på hur du skyddar din Nightscout-webbplats.

I **AAPS** 4 går fjärrstyrning inte via Nightscout-webbplatsen. När klientstyrning är på ([härdat läge](#client-master-control-hardened-mode)) **används inte** behandlingar eller målvärden som skrivs in direkt i Nightscout av **AAPS**. Fjärrkommandon kommer i stället från en parkopplad **AAPSClient** – se [Styrning huvudenhet ↔ klient](#client-master-control).

Var mycket försiktig om du använder Nightscout som BG-källa i AAPS.

### Inställningar för Nightscout

Du kan stänga av allmän åtkomst till din Nightscout-webbplats med [behörighetsroller](https://nightscout.github.io/nightscout/security): dela bara din URL med en token med rollen `readable`, aldrig med en token med rollen `admin`.

`API_SECRET` i Nightscout är huvudlösenordet för din webbplats: dela det inte öppet.

(Nightscout-aaps-settings)=

### Inställningar i AAPS

Att ta emot data från Nightscout (profiländringar, behandlingar, ...) är valfritt och avstängt som standard. Brytarna som beskrivs nedan är dolda när klientstyrning är på (härdat läge) och i [enkelt läge](#preferences-simple-mode).

* Öppna inställningarna för **Synkronisering** i pluginet NSClientV3 på ett av två sätt: 1) **Inställningar** (kugghjulsikonen på huvudskärmen) -> **NSClientV3** -> **Synkronisering**, eller 2) **Konfiguration** (menyn ☰) -> **Kommunikation** -> "**Inställningar**" under NSClientV3.
* Aktivera "Ladda upp data till NS".
* "Ladda upp BG-data till NS" finns i inställningarna för din BG-källa (**Konfiguration → BG-källa → Inställningar**). Aktivera det, utom när Nightscout är BG-källan i AAPS: då ska du **inte** aktivera det.
* Aktivera inte "Ta emot CGM-data från NS" om inte Nightscout är din BG-källa.

#### Synkronisera inte från Nightscout

Om alla alternativ "Ta emot … från NS" är avstängda använder AAPS inga ändringar från Nightscout:

![Bara uppladdning till Nightscout](../images/preferences/settings_nsclient_sync.png)

#### Ta emot ändringar från Nightscout

Om du aktiverar de här alternativen kan du ändra inställningar i AAPS via Nightscout, till exempel ändra och byta profiler, ställa in tillfälliga målvärden och lägga till kolhydrater som AAPS sedan räknar med. De visas bara när klientstyrning och enkelt läge är avstängda.  
Observera att insulinbehandlingar bara används för beräkningar, som "Ge inte bolus, logga bara".

![Alternativen för att ta emot från Nightscout aktiverade](../images/NSsafety3.png)

### Fler säkerhetsinställningar

Håll din telefon uppdaterad så som det beskrivs i [Säkerheten först](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Manuell inställning av Nightscout

Vi utgår från att du redan har en Nightscout-webbplats. Om inte, gå till sidan om [Nightscout](http://nightscout.github.io/nightscout/new_user/) för fullständiga instruktioner om hur du ställer in den. Instruktionerna nedan är inställningar som du också behöver lägga till på din Nightscout-webbplats. Din Nightscout-webbplats måste ha minst version 15. Kontrollera att du kör den [senaste versionen](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), annars får du ett felmeddelande i AAPS-appen.

* [Ändra dina variabler](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Lägg till eller ändra variablerna så här:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Du kan ställa in olika larm för [övervakning av pumpen](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring). Vi rekommenderar särskilt larm för batteriets procent: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Spara ändringarna. Din Nightscout-webbplats ska nu kunna visa ”pillren” (pills, små statusrutor). Du kan visa dem som standard genom att lägga till dem i `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout-piller (pills)](../images/nightscout1.png)

## Nightscout som betald SaaS (Software as a Service, programvara som tjänst)

Använd leverantörens webbgränssnitt för att ställa in variablerna. Kontakta leverantörens support vid behov.