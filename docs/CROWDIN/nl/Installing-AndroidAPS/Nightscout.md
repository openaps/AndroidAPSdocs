# Nightscout

## Veiligheidsoverwegingen

Nightscout kan naast informatie en rapporten weergeven, ook worden gebruikt om AAPS aan te sturen. Dat wil zeggen dat je via Nightscout tijdelijke streefdoelen kunt instellen of toekomstige koolhydraten kunt invoeren. Deze informatie zal worden opgepikt door AAPS en zal worden meegenomen in de keuzes die het algortime maakt. Daarom is het verstandig om jouw Nightscout website te beveiligen.

### Nightscout instellingen

Je kunt openbare toegang tot jouw Nightscout-site blokkeren met behulp van de [authentication roles](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles) (verificatierollen).

### AndroidAPS instellingen

Er is een Alleen NS upload (geen synchronisatie) functie in de AAPS instellingen. Wanneer deze is ingeschakeld, zullen aanpassingen die zijn gemaakt in Nightscout, zoals tijdelijke streefdoelen of toekomstige koolhydraten, niet worden doorgegeven aan AAPS. Let op: als je een [NS profiel](../Configuration/Config-Builder#ns-profile) gebruikt, dan worden de profielen wél gesynchroniseerd tussen AAPS en Nightscout, ook al heb je de instelling "Alleen uploaden" ingeschakeld.

* Tik op 3 stipjes in de rechterbovenhoek van AAPS overzicht scherm.
* Selecteer "Instellingen".
* Scroll naar beneden en kies "Geavanceerde instellingen".
* Activeer "Alleen NS-upload".

![Alleen NS upload](../images/NSsafety.png)

### Aanvullende veiligheidsmaatregelen

Houd jouw telefoon up-to-date zoals beschreven bij [Allereerst de veiligheid](../Getting-Started/Safety-first.rst).

## Nightscout aanmaken

Deze omschrijving is voor het handmatig aanmaken en instellen van jouw eigen Nightscout. Een makkelijke, meer geautomatiseerde manier om dat te doen is via ns.10be.de en staat onderaan deze pagina beschreven. Hoe je verder Nightscout handmatig aanmaakt, staat beschreven op de [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) website. Wanneer je jouw Nightscout site eenmaal hebt aangemaakt, kun je verdergaan met onderstaande instructies. Dit zijn specifieke instellingen voor jouw Nightscout site zodat je hem kunt koppelen aan AndroidAPS. Jouw Nightscout site moet ten minste versie 10 zijn (wordt weergegeven als 0.10...), dus controleer of je werkt met de [nieuwste versie](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) anders krijg je een foutmelding op je AAPS app.

* Ga naar https://herokuapp.com/

* Klik op jouw App Service naam

* Klik op "Application settings" (Azure) of op "Settings" > "Reveal Config Variables" (Heroku)

* Voeg onderstaande variabelen toe of verander ze naar:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Je kunt verschillende alarmen instellen voor [monitoring the pump ](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), batterijpercentage raden we sowieso aan om te activeren: 
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

* Je kunt hiermee Nightscout met een paar klikken installeren en meteen gebruiken. 
* Je hoeft minder dingen zelf in te stellen omdat Martin dat al voor jou gedaan heeft.
* Alle instellingen kunnen via een gebruiksvriendelijke website worden gemaakt. 
* Ook kun je hiermee je basaalstanden automatisch laten checken dmv Autotune. 
* De server staat in Duitsland.

<http://ns.10be.de/en/index.html>