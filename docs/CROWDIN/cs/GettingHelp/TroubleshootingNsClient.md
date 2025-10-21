(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Řešení problémů s NSClientem

NSClient je závislý na stabilní komunikaci s Nightscoutem. Nestabilní připojení vede k chybám synchronizace a velké spotřebě dat.

Pokud nepotřebujete sledovat někoho v Nightscoutu, můžete pozastavit NSClienta, budete tak šetřit baterii telefonu. Můžete také nastavit, aby se NSClient připojoval pouze při připojení na Wi-Fi a/nebo v průběhu nabíjení.

* Jak zjistit, že je spojení nestabilní?

Běžte do záložky NSClient v AAPS a pozorujte výpisy protokolu (log). Správné chování je, když obdržíte PING zhruba každých 30 sekund a v logu nejsou téměř žádné zprávy o restartu spojení. Pokud vidíte hodně restartů, je se spojením problém.

Since AAPS version 2.0, when such behavior is detected, NSClient is paused for 15 minutes and the message "NSClient malfunction" is displayed on the main Overview screen.

* Restart

Co byste měli zkusit jako první krok je restart obojího: Nightscoutu i telefonu, abyste zjistili, jestli je problém trvalý

Pokud máte Nightscout hostovaný na Heroku, můžete ho restartovat takto: Přihlašte se do Heroku, klikněte na jméno své nightscoutí aplikace, klikněte na nabídku 'More' a pak na 'Restart all dynos'.

Pokud máte Nightscout hostovaný jinde, postupujte dle dokumentace k vašemu hostingu.

* Problémy s telefonem

Android může váš telefon přepínat do režimu spánku. Check if you have an exception for AAPS in your phones power options to allow it to run in the background all the time.

Odzkoušejte NSClient znovu na místě, kde budete mít silný signál.

Zkuste jiný telefon.

* Nightscout

Pokud máte Nightscout hostovaný na Azure, tak spoustě lidí pomohl při problémech s připojením jeho přesun na Heroku.

Problémy s připojením do Azure lze také vyřešit nastavením HTTP protokolu na verzi 2.0 a zapnutím Websockets v Aplikačním nastavení

* No BG reading from Nightscout

If AAPS connects to Nightscout correctly but does BG displays as N/A. Go to NSCLIENT tab, press the 3 dot menu top right, Click NSClient Preferences -> Synchronization turn on "Receive/backfill CGM data".

* Pokud se vám stále zobrazuje chyba...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../SupportingAaps/OpenHumans.md).