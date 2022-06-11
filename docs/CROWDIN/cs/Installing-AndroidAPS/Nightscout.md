# Nightscout

## Bezpečnostní pokyny

Kromě sledování může být Nightscout použit také k ovládání AAPS. Tj. můžete nastavit dočasné cíle nebo přidat budoucí sacharidy. Tyto informace budou sbírány AAPS a bude to fungovat odpovídajícím způsobem. Proto stojí za to přemýšlet o zabezpečení Nightscout webové stránky.

### Nastavení Nightscoutu

Můžete odepřít veřejný přístup k serveru Nightscout pomocí [ověřovacích rolí](https://nightscout.github.io/nightscout/security).

### Nastavení AndroidAPS

V nastavení AAPS existuje funkce pouze nahrávání do NS (ne synchronizace). Tím AAPS nebude provádět změny zadané v Nightscoutu, jako jsou dočasné cíle nebo budoucí sacharidy.

* Klepněte na menu (3 tečky v pravém horním rohu) na hlavní obrazovce AAPS.
* Zvolte „Nastavení“.
* Posuňte se dolů a klepněte na „Rozšířená nastavení“.
* Aktivujte možnost „pouze nahrávání do NS“

![Nightscout pouze nahrávání](../images/NSsafety.png)

### Další nastavení zabezpečení

Udržujte svůj telefon aktualizovaný, jak je popsáno v části [bezpečnost na prvním místě](../Getting-Started/Safety-first.rst).

## Ruční nastavení Nightscoutu

Předpokládá se, že Nightscout stránky už máte, pokud ne, tak navštivte stránku [Nightscout](http://nightscout.github.io/nightscout/new_user/) pro návod k založení. Následující pokyny jsou nastavení, která potřebujete provést v Nightscoutu pro správnou funkčnost AndroidAPS. Je nutné, aby byl váš Nightscout verze alespoň 10 (zobrazeno jako 0.10...), zkontrolujte tedy, jestli provozujete [poslední verzi](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), jinak se vám v AAPS zobrazí chybová zpráva. U některých uživatelů dochází při používání smyčky k překročení kvóty pro bezplatné používání Azure, proto je hostování na Heroku doporučená volba.

* Běžte na https://herokuapp.com/

* Klikněte na název své aplikace.

* Klikněte na "Application settings" (Azure) nebo "Settings" > "Reveal Config Variables" (Heroku)

* Přidejte nebo upravte proměnné takto:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Pro [hlídání pumpy](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) lze nastavit různé alarmy, doporučujeme zejména % nabití baterie: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Klikněte na "Save" ve vrchní části panelu.

## Poloautomatickíé zřízení Nightscoutu

Kolega smyčkař Martin Schiftan nabízel poloautomatizované nastavení Nightscoutu spoustu let zdarma. Vzhledem k tomu, že se počet uživatelů zvýšil a náklady se zvýšily, musel začít od října 2021 požadovat malý poplatek – počínaje 4,17 EUR měsíčně.

**Výhody**

* Nightscout si pomocí této služby můžete nainstalovat pomocí několika málo kliknutí a ihned jej začít používat. 
* Téměř žádná manuální práce, protože Martin se snaží celou administraci zautomatizovat.
* Všechna nastavení lze provádět prostřednictvím uživatelsky přívětivého webového rozhraní. 
* Tato služba obsahuje rovněž automatické kontroly bazálů prostřednictvím nástroje Autotune. 
* Servery jsou umístěny v Německu a Finsku.

<https://ns.10be.de/en/index.html>

Alternativou může být <https://t1pal.com/> – začíná na 11,99 USD za měsíc. V neposlední řadě existuje služba nightscout.cz, kterou provozuje Martin Škarecký (prozatím zdarma, drobný pravidelný příspěvek by však velmi ocenil (servery, instalace, údržba a správa něco stojí)).