# Nightscout

## Saugumo svarba

Be ataskaitų, Nightscout taip pat gali būti naudojamas kontroliuoti AAPS. T.y. galite nustatyti laikinus tikslus ar pridėti būsimus angliavandenius. Ši informacija bus įkelta į AAPS ir ši veiks atitinkamai. Todėl yra verta pagalvoti kaip apsaugoti savo Nightscout svetainę.

### Nightscout parametrai

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

### AndroidAPS parametrai

Taip pat NS turi tik įkėlimo (ne sinchronizavimo) funkciją AAPS nustatymuose. Ją pasirinkus, AAPS neįkels pakeitimų, atliktų Nightscout, tokių kaip laikini tikslai ar būsimi angliavandeniai. Jei naudojate [NS profilį](../Configuration/Config-Builder#ns-profile), profiliai bus sinchronizuojami tarp AAPS ir Nightscout nepaisant nustatymo "įkelti tik".

* Bakstelėkite 3-taškų meniu viršutiniame dešiniajame kampe savo AAPS pradžios ekrane.
* Pasirinkite "Nustatymai".
* Slinkite žemyn ir bakstelėkite "Išplėstiniai nustatymai".
* Aktyvuokite "Įkelti tik į NS"

![Įkelti tik į Nightscout](../images/NSsafety.png)

### Tolimesni saugumo nustatymai

Nuolat atnaujinkite savo telefoną, kaip aprašyta [Pirmiausia saugumas](../Getting-Started/Safety-first.rst).

## Rankinis Nightscout diegimas

Manoma, kad jūs jau turite Nightscout svetainę, jei ne, apsilankykite [Nightscout](http://nightscout.github.io/nightscout/new_user/) puslapyje gauti visas diegimo instrukcijas, instrukcijos žemiau reikalingos pridėti nustatymus į jūsų Nightscout puslapį. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Eikite į https://herokuapp.com/

* Spustelėkite jūsų Programos Paslaugos pavadinimą.

* Spustelėkite taikomosios programos nustatymus (azure), arba Parametrai > "Atskleisti konfigūracijos kintamuosius (heroku)

* Pridėti arba redaguoti kintamuosius taip:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Spustelėkite "Išsaugoti" skydelio viršuje.

## Pusiau automatinis Nightscout diegimas

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Privalumai**

* Galite įdiegti Nightscout keliais paspaudimais ir iškart naudoti. 
* Sumažinti rankų darbą, nes Martin bando automatizuoti administravimą.
* Visi nustatymai gali būti atliekami per patogią internetinę sąsają. 
* Paslauga apima automatinį valandinės bazės patikrinimą, naudojant Autotune. 
* The servers are located in Germany and Finland.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.