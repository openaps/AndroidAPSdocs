# Příprava Nightscoutu

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

* Klikněte na "Save" ve vrchní části panelu.

## Semi-automated Nightscout setup

Tuto službu nabízí kolega looper Martin Schiftan a v současnosti je zdarma. If you like the service you can consider sending him a small donation (link in the navigation on the left side).

**Benefits**

* You can install Nightscout with a few clicks and use it directly. 
* Reduction of manual work as Martin tries to automate the administration.
* All settings can be made via a user-friendly web interface. 
* The service includes an automated basal rate check using Autotune. 
* The server is located in Germany.

<http://ns.10be.de/en/index.html>