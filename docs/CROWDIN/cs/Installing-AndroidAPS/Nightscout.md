# Nightscout

## Bezpečnostní pokyny

Kromě sledování může být Nightscout použit také k ovládání AAPS. Tj. můžete nastavit dočasné cíle nebo přidat budoucí sacharidy. Tyto informace budou sbírány AAPS a bude to fungovat odpovídajícím způsobem. Proto stojí za to přemýšlet o zabezpečení Nightscout webové stránky.

### Nastavení Nightscoutu

Můžete odepřít veřejný přístup k serveru Nightscout pomocí [ověřovacích rolí](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

### Nastavení AndroidAPS

V nastavení AAPS existuje funkce pouze nahrávání do NS (ne synchronizace). Tím AAPS nebude provádět změny zadané v Nightscoutu, jako jsou dočasné cíle nebo budoucí sacharidy. Pokud používáte [NS Profil](../Configuration/Config-Builder#ns-profile), budou profily synchronizovány mezi AAPS a Nightscoutem i přes nastavení „pouze nahrávání“.

* Klepněte na menu (3 tečky v pravém horním rohu) na hlavní obrazovce AAPS.
* Zvolte „Nastavení“.
* Posuňte se dolů a klepněte na „Rozšířená nastavení“.
* Aktivujte možnost „pouze nahrávání do NS“

![Nightscout pouze nahrávání](../images/NSsafety.png)

### Další nastavení zabezpečení

Udržujte svůj telefon aktualizovaný, jak je popsáno v části [bezpečnost na prvním místě](../Getting-Started/Safety-first.rst).

## Ruční nastavení Nightscoutu

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Je nutné, aby byl váš Nightscout verze alespoň 10 (zobrazeno jako 0.10...), zkontrolujte tedy, jestli provozujete [poslední verzi](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie), jinak se vám V AAPS zobrazí chybová zpráva. Některým uživatelům se při smyčce překračuje Azure kvóta zdarma, proto je hostování na Heroku doporučená volba.

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