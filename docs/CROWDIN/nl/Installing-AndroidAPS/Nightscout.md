# Nightscout instellen

We gaan er vanuit dat je al een Nightscout site hebt, zo niet bezoek de pagina [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) voor volledige instructies voor het instellen vraag hulp in de facebook groep "CGM in the cloud Nederlands". Of scroll naar onderen op deze pagina naar het kopje ns.10be. de. De onderstaande instructies zijn instellingen die je ook moet toevoegen aan je Nightscout site. Jouw Nightscout-site moet ten minste versie 10 (weergegeven als 0.10...) zijn, dus controleer of je werkt met de [nieuwste versie](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) anders krijg je een foutmelding op je AAPS app. Voor sommige mensen verbruikt Azure meer data dan hun gratis versie toelaat, dus raden we aan om Heroku te gebruiken.

* Ga naar https://herokuapp.com/

* Klik op jouw App Service naam

* Klik op "Application settings" (Azure) of op "Settings" > "Reveal Config Variables" (Heroku)

* Voeg onderstaande variabelen toe of verander ze naar:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Je kunt verschillende alarmen instellen voor [monitoring the pump ](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery% raden we sowieso aan om te activeren: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Optional: The following 'timers' can be set for the coloring in the AAPS careportal: 
    * `BAGE_WARN` = `480` (Warning after x hours since last Battery Changed Event in Careportal)
  * `BAGE_URGENT` = `504` (Urgent warning after x hours since last Battery Changed Event in Careportal)
  * `CAGE_WARN` = `40` (Warning after x hours since last Cannula Changed Event in Careportal)
  * `CAGE_URGENT` = `48` (Urgent warning after x hours since last Cannula Changed Event in Careportal)
  * `IAGE_WARN` = `144` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `IAGE_URGENT` = `192` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `SAGE_WARN` = `160` (Warning after x hours since the last CGM Sensor Insert Event in Careportal)
  * `SAGE_URGENT` = `168` (Urgent Warning after x hours since the last CGM Sensor Insert Event in Careportal)

![Azure](../../images/nightscout1.png)

* Klik op "Save" aan de bovenkant van het scherm.

## ns.10be.de

Deze service wordt aangeboden door een Duitse collega looper Martin Schiftan en is op dit moment gratis. Je kunt hiermee Nightscout met een paar klikken installeren en meteen gebruiken. Hij heeft het aanmaken van een Nightscout site zoveel mogelijk geauomatiseerd zodat je zelf nog heel weinig handmatig hoeft in te stellen. Alle instellingen kunnen via een gebruiksvriendelijke website worden gemaakt. Ook kun je hiermee je basaalstanden automatisch laten checken dmv Autotune. De server staat in Duitsland.

<http://ns.10be.de/en/index.html>