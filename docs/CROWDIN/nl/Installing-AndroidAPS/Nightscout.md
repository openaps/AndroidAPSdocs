# Nightscout

(Nightscout-security-considerations)=

## Veiligheidsoverwegingen

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### Nightscout instellingen

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

### AndroidAPS instellingen

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs.

* Tik op 3 stipjes in de rechterbovenhoek van AAPS overzicht scherm.
* Selecteer "Instellingen".
* Scroll naar beneden en kies "Geavanceerde instellingen".
* Activeer "Alleen NS-upload".

![Nightscout upload only](../images/NSsafety.png)

### Aanvullende veiligheidsmaatregelen

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## Nightscout aanmaken

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Ga naar https://herokuapp.com/

* Klik op jouw App Service naam

* Klik op "Application settings" (Azure) of op "Settings" > "Reveal Config Variables" (Heroku)

* Voeg onderstaande variabelen toe of verander ze naar:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Je kunt verschillende alarmen instellen voor [monitoring the pump ](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery% raden we sowieso aan om te activeren: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Klik op "Save" aan de bovenkant van het scherm.

## Nightscout aanmaken via ns.10be.de

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Benefits**

* Je kunt hiermee Nightscout met een paar klikken installeren en meteen gebruiken. 
* Je hoeft minder dingen zelf in te stellen omdat Martin dat al voor jou gedaan heeft.
* Alle instellingen kunnen via een gebruiksvriendelijke website worden gemaakt. 
* Ook kun je hiermee je basaalstanden automatisch laten checken dmv Autotune. 
* The servers are located in Germany and Finland.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.