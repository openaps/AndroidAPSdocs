# Nightscout instellen

We gaan er vanuit dat je al een Nightscout site hebt, zo niet dan moet je dat eerst nog doen (een makkelijke manier om dat te doen is via ns.10be.de en staat onderaan deze pagina beschreven). Een andere manier om Nightscout aan te maken staat beschreven op de [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) website. Vraag zo nodig hulp in de facebook groep "CGM in the cloud Nederlands". Voor sommige mensen verbruikt Azure meer data dan hun gratis versie toelaat, dus raden we aan om Heroku te gebruiken. Wanneer je jouw Nightscout site eenmaal hebt aangemaakt, kun je verdergaan met onderstaande instructies. Dit zijn specifieke instellingen voor jouw Nightscout site zodat je hem kunt koppelen aan AndroidAPS. Jouw Nightscout site moet ten minste versie 10 zijn (wordt weergegeven als 0.10...), dus controleer of je werkt met de [nieuwste versie](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) anders krijg je een foutmelding op je AAPS app.

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
  * Optioneel: De volgende 'timers' kunnen worden ingesteld voor de kleuren in de AAPS Careportal: 
    * `BAGE_WARN` = `480` (Waarschuwing na x uren sinds laatste batterij wissel in careportal)
  * `BAGE_URGENT` = `504` (Urgente waarschuwing na x uren sinds laatste batterij wissel in careportal)
  * `CAGE_WARN` = `40` (Waarschuwing na x uren sinds laatste infuus wissel in careportal)
  * `CAGE_URGENT` = `48` (Urgente waarschuwing na x uren sinds laatste infuus wissel in careportal)
  * `IAGE_WARN` = `144` (Waarschuwing na x uren sinds laatste insuline ampul wissel in careportal)
  * `IAGE_URGENT` = `192` (Waarschuwing na x uren sinds laatste insuline ampul wissel in careportal)
  * `SAGE_WARN` = `160` (Waarschuwing na x uren sinds laatste CGM sensor ingebracht in careportal)
  * `SAGE_URGENT` = `168` (Urgente Waarschuwing na x uren sinds laatste CGM sensor ingebracht in careportal)

![Azure](../../images/nightscout1.png)

* Klik op "Save" aan de bovenkant van het scherm.

## Nightscout aanmaken via ns.10be.de

Deze service wordt aangeboden door een Duitse collega looper Martin Schiftan en is op dit moment gratis. Als je wilt dan zou je kunnen overwegen om hem een kleine donatie te sturen (via de link op zijn site, in de navigatiebalk aan de linkerkant).

**Voordelen van deze methode**

* Je kunt in een paar muisklikken een Nightscout site aanmaken. 
* Je hoeft minder dingen zelf in te stellen omdat Martin dat al voor jou gedaan heeft.
* Een overzichtelijke web-interface om jouw instellingen te bekijken en evt. aan te passen. 
* Ook kun je hiermee je basaalstanden automatisch laten checken dmv Autotune. 
* De server staat in Duitsland.

<http://ns.10be.de/en/index.html>