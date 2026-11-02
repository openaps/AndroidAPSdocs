# Nightscout

(Nightscout-security-considerations)=

## Veiligheidsoverwegingen

Nightscout is de server van **AAPS** voor rapporten en volgen op afstand: **AAPS** uploadt je gegevens ernaar, en jij of je verzorgers bekijken ze op de Nightscout-website of in volg-apps. Er staan je medische gegevens, profielen en behandelingen op. Het is dus verstandig om je Nightscout-website goed te beveiligen.

In **AAPS** 4 gaat bediening op afstand niet via de Nightscout-website. Zolang client besturing aan staat ([beveiligde modus](#client-master-control-hardened-mode)), worden behandelingen of streefdoelen die je direct in Nightscout invoert **niet toegepast** door **AAPS**. Commando's op afstand komen in plaats daarvan van een gekoppelde **AAPSClient** — zie [Master ↔ Client besturing](#client-master-control).

Wees uiterst voorzichtig als je Nightscout gebruikt als BG-bron voor AAPS.

### Nightscout-instellingen

Je kunt openbare toegang tot je Nightscout-site blokkeren met [authenticatierollen](https://nightscout.github.io/nightscout/security): deel je URL alleen met een `readable` token, nooit met een `admin` token.

De Nightscout `API_SECRET` is het hoofdwachtwoord van je site: deel het niet openbaar.

(Nightscout-aaps-settings)=

### AAPS-instellingen

Gegevens uit Nightscout accepteren (profielwijzigingen, behandelingen, ...) is optioneel en staat standaard uit. De schakelaars hieronder zijn verborgen zolang client besturing aan staat (beveiligde modus) en in [eenvoudige modus](#preferences-simple-mode).

* Open de instellingen voor **Synchronisatie** van de NSClientV3-plugin via 1) **Instellingen** (tandwielicoon op het hoofdscherm) -> **NSClientV3** -> **Synchronisatie**, of 2) **Configuratie** (☰ menu) -> **Communicatie** -> "**Instellingen**" onder NSClientV3.
* Zet "Upload data naar NS" aan.
* "Upload BG-gegevens naar NS" staat in de instellingen van je BG-bron (**Configuratie → BG bron → Instellingen**). Zet het aan, behalve als Nightscout je BG-bron voor AAPS is: zet het in dat geval **niet** aan.
* Zet "Ontvang CGM gegevens van NS" niet aan, behalve als Nightscout je BG-bron is.

#### Niet synchroniseren vanuit Nightscout

Keeping all the "Receive … from NS" options disabled makes sure no Nightscout change will be used by AAPS:

![Alleen uploaden naar Nightscout](../images/preferences/settings_nsclient_sync.png)

#### Wijzigingen uit Nightscout accepteren

Als je deze opties aanzet, kun je AAPS-instellingen via Nightscout wijzigen, zoals profielen aanpassen en wisselen, tijdelijke streefdoelen en koolhydraten toevoegen. AAPS houdt daar dan rekening mee. Ze worden alleen getoond als client besturing en eenvoudige modus uit staan.  
Let op: insulinebehandelingen worden alleen gebruikt voor berekeningen, zoals bij "Geen bolus geven, alleen registreren".

![Ontvangstopties van Nightscout aangezet](../images/NSsafety3.png)

### Aanvullende veiligheidsmaatregelen

Houd je telefoon up-to-date, zoals beschreven in [Veiligheid eerst](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Nightscout handmatig instellen

We gaan ervan uit dat je al een Nightscout-site hebt. Zo niet, ga dan naar de [Nightscout](http://nightscout.github.io/nightscout/new_user/)-pagina voor de volledige instructies om die op te zetten. De instructies hieronder zijn instellingen die je ook aan je Nightscout-site moet toevoegen. Je Nightscout-site moet minstens versie 15 zijn. Controleer dus of je de [nieuwste versie](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) gebruikt, anders krijg je een foutmelding in je AAPS-app.

* [Pas je variabelen aan](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Voeg onderstaande variabelen toe of verander ze naar:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Je kunt verschillende alarmen instellen voor [het bewaken van de pomp](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring). Vooral een alarm voor de batterij in % raden we aan: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Sla de wijzigingen op. Je Nightscout-site kan nu de pillen tonen. Je kunt ze standaard laten tonen door ze toe te voegen aan `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout-pillen](../images/nightscout1.png)

## Nightscout als betaalde SaaS-dienst (Software as a Service)

Stel de variabelen in via de webinterface van je aanbieder. Neem zo nodig contact op met de klantenservice van je aanbieder.