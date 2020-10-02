# Nightscout

## Saugumo svarba

Be ataskaitų, Nightscout taip pat gali būti naudojamas kontroliuoti AAPS. T.y. galite nustatyti laikinus tikslus ar pridėti būsimus angliavandenius. Ši informacija bus įkelta į AAPS ir ši veiks atitinkamai. Todėl yra verta pagalvoti kaip apsaugoti savo Nightscout svetainę.

### Nightscout parametrai

Galite uždrausti viešą prieigą prie jūsų Nightscout svetainės, naudodami [atpažinimo vaidmenis](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

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

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Jūsų Nightscout svetainė turi būti bent versijos 10 (ekrane rodoma 0.10...), todėl prašome patikrinti, ar turite [naujausią versiją](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie), priešingu atveju gausite klaidos pranešimą, jūsų AAPS programoje. Kai kurie žmonės mano, kad uždaras ciklas išnaudoja daugiau vietos, nei azure suteikiama nemokama kvota, todėl heroku laiko geresniu pasirinkimu.

* Eikite į https://herokuapp.com/

* Spustelėkite jūsų Programos Paslaugos pavadinimą.

* Spustelėkite taikomosios programos nustatymus (azure), arba Parametrai > "Atskleisti konfigūracijos kintamuosius (heroku)

* Pridėti arba redaguoti kintamuosius taip:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Įvairius aliarmus galima nustatyti [pompos stebėsena](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), baterijos % ypač rekomenduojami: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../../images/nightscout1.png)

* Spustelėkite "Išsaugoti" skydelio viršuje.

## Pusiau automatinis Nightscout diegimas

Ši paslauga teikiama kolegos, uždaro ciklo naudotojo, Martin Schiftan šiuo metu nemokamai. Jei jums patinka ši paslauga, galite nusiųsti jam nedidelį atlygį (nuoroda navigacijos kairėje pusėje).

**Privalumai**

* Galite įdiegti Nightscout keliais paspaudimais ir iškart naudoti. 
* Sumažinti rankų darbą, nes Martin bando automatizuoti administravimą.
* Visi nustatymai gali būti atliekami per patogią internetinę sąsają. 
* Paslauga apima automatinį valandinės bazės patikrinimą, naudojant Autotune. 
* Serveris yra Vokietijoje.

<http://ns.10be.de/en/index.html>