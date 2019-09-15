# Nightscout

## Security considerations

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### Nastavení Nightscoutu

You can deny public access to your Nightscout site by using [authentication roles](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

### Nastavení AndroidAPS

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs. If you are using [NS profile](../Configuration/Config-Builder#ns-profile) the profiles will be synced between AAPS and Nightscout despite the setting "upload only".

* Tap 3-dot menu on top right corner on your AAPS homescreen.
* Select "Preferences".
* Scroll down and tap "Advanced settings".
* Activate "NS upload only

![Nightscout pouze nahrávání](../images/NSsafety.png)

### Further security settings

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.rst).

## Manual Nightscout setup

Předpokládá se, že Nightscout stránky už máte, pokud ne, tak navštivte stránku [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) pro návod k založení. Následující pokyny jsou nastavení, která potřebujete provést v Nightscoutu pro správnou funkčnost AndroidAPS. Je nutné, aby byl váš Nightscout verze alespoň 10 (zobrazeno jako 0.10...), zkontrolujte tedy, jestli provozujete [poslední verzi](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie), jinak se vám V AAPS zobrazí chybová zpráva. Některým uživatelům se při smyčce překračuje Azure kvóta zdarma, proto je hostování na Heroku doporučená volba.

* Běžte na https://herokuapp.com/

* Klikněte na název své aplikace.

* Klikněte na "Application settings" (Azure) nebo "Settings" > "Reveal Config Variables" (Heroku)

* Přidejte nebo upravte proměnné takto:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Pro [hlídání pumpy](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) lze nastavit různé alarmy, doporučujeme zejména % nabití baterie: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Volitelné: Následující 'časovače' lze nastavit pro barevné odlišení v záložce Péče v AAPS: 
    * `BAGE_WARN` = `480` (Upozornění po x hodinách od poslední výměny baterie zaznamenané v Ošetření)
  * `BAGE_URGENT` = `504` (Urgentní varování po x hodinách od poslední výměny baterie zaznamenané v Ošetření)
  * `CAGE_WARN` = `40` (Upozornění po x hodinách od poslední výměny kanyly zaznamenané v Ošetření)
  * `CAGE_URGENT` = `48` (Urgentní varování po x hodinách od poslední výměny kanyly zaznamenané v Ošetření)
  * `IAGE_WARN` = `144` (Varování po x hodinách od poslední výměny zásobníku s inzulinem zaznamenané v Ošetření)
  * `IAGE_URGENT` = `192` (Urgentní varování po x hodinách od poslední výměny zásobníku s inzulinem zaznamenané v Ošetření)
  * `SAGE_WARN` = `160` (Upozornění po x hodinách od poslední výměny senzoru zaznamenané v Ošetření)
  * `SAGE_URGENT` = `168` (Urgentní varování po x hodinách od poslední výměny senzoru zaznamenané v Ošetření)

![Azure](../../images/nightscout1.png)

* Klikněte na "Save" ve vrchní části panelu.

## Poloautomatickíé zřízení Nightscoutu

Tuto službu nabízí kolega looper Martin Schiftan a v současnosti je zdarma. Pokud se vám služba líbí, můžete zvážit odeslání drobného příspěvku (odkaz v navigačním panelu vlevo).

**Výhody**

* Nightscout si pomocí této služby můžete nainstalovat pomocí několika málo kliknutí a ihned jej začít používat. 
* Téměř žádná manuální práce, protože Martin se snaží celou administraci zautomatizovat.
* Všechna nastavení lze provádět prostřednictvím uživatelsky přívětivého webového rozhraní. 
* Tato služba obsahuje rovněž automatické kontroly bazálů prostřednictvím nástroje Autotune. 
* Server se nachází v Německu.

<http://ns.10be.de/en/index.html>