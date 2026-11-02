# Nightscout

(Nightscout-security-considerations)=

## Sikkerhetshensyn

Nightscout er rapporterings- og overvåkingsserveren til **AAPS**: **AAPS** laster opp dataene dine dit, og du eller omsorgspersonene dine ser på dem på Nightscout-nettstedet eller i følger-apper. Det inneholder de medisinske dataene dine, profilene og behandlingene dine, så det er verdt å tenke på hvordan du sikrer Nightscout-nettstedet ditt.

I **AAPS** 4 går ikke fjernstyring gjennom Nightscout-nettstedet. Mens klientstyring er på ([herdet modus](#client-master-control-hardened-mode)), blir behandlinger eller mål som skrives rett inn i Nightscout, **ikke brukt** av **AAPS**. Fjernkommandoer kommer i stedet fra en sammenkoblet **AAPSClient** – se [Hovedenhet ↔ klientstyring](#client-master-control).

Vær svært forsiktig hvis du bruker Nightscout som BS-kilde for AAPS.

### Nightscout-innstillinger

Du kan nekte offentlig tilgang til Nightscout-nettstedet ditt ved å bruke [autentiseringsroller](https://nightscout.github.io/nightscout/security): pass på at du bare deler URL-en din med et `readable`-token, aldri med et `admin`-token.

Nightscout `API_SECRET` er hovedpassordet til nettstedet ditt: ikke del det offentlig.

(Nightscout-aaps-settings)=

### AAPS-innstillinger

Å godta data fra Nightscout (profilendringer, behandlinger, ...) er valgfritt og slått av som standard. Bryterne som beskrives under, er skjult mens klientstyring er på (herdet modus) og i [Enkelmodus](#preferences-simple-mode).

* Du finner innstillingene for **Synkronisering** i NSClientV3-pluginen enten via 1) **Innstillinger** (tannhjulet på hovedskjermen) -> **NSClientV3** -> **Synkronisering**, eller 2) **Konfigurasjon** (☰-menyen) -> **Kommunikasjon** -> «**Innstillinger**» under NSClientV3.
* Slå på «Last opp data til NS».
* «Last opp BS-data til NS» ligger i innstillingene for BS-kilden din (**Konfigurasjon → BS-kilde → Innstillinger**). Slå den på, med mindre BS-kilden for AAPS er Nightscout: i så fall skal du **ikke** slå den på.
* Ikke slå på «Motta BS-data fra NS» med mindre Nightscout er BS-kilden din.

#### Ikke synkroniser fra Nightscout

Lar du alle «Motta … fra NS»-valgene stå av, er du sikker på at ingen endring i Nightscout blir brukt av AAPS:

![Bare opplasting til Nightscout](../images/preferences/settings_nsclient_sync.png)

#### Godta endringer fra Nightscout

Når du slår på disse valgene, kan du endre AAPS-innstillinger via Nightscout, for eksempel endre og bytte profil, sette midlertidige mål og legge til karbohydrater som AAPS tar hensyn til. De vises bare når klientstyring og Enkelmodus er av.  
Merk at insulinbehandlinger bare brukes til beregninger, som «Ikke gi bolus, bare registrer».

![Mottaksvalg for Nightscout slått på](../images/NSsafety3.png)

### Flere sikkerhetsinnstillinger

Hold telefonen din oppdatert som beskrevet i [sikkerhet først](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Manuelt oppsett av Nightscout

Vi går ut fra at du allerede har et Nightscout-nettsted. Hvis ikke, gå til [Nightscout](http://nightscout.github.io/nightscout/new_user/)-siden for full veiledning i oppsett. Instruksjonene under er innstillinger du også må legge til på Nightscout-nettstedet ditt. Nightscout-nettstedet ditt må være minst versjon 15, så sjekk at du kjører [nyeste versjon](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), ellers får du en feilmelding i AAPS-appen.

* [Rediger variablene dine](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Legg til eller rediger variablene slik:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Du kan sette opp ulike alarmer for [overvåking av pumpen](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring). Spesielt batteriprosent anbefales: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Lagre endringene. Nightscout-nettstedet ditt skal nå kunne vise pillene (statusboksene). Du kan tvinge fram standardvisning ved å legge dem til i `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout-piller](../images/nightscout1.png)

## Nightscout som betalt SaaS (programvare som tjeneste)

Bruk leverandørens nettgrensesnitt til å sette variablene. Kontakt leverandørens kundestøtte om nødvendig.