(Troubleshooting-NSClient-troubleshooting-nsclient)=

# Устранение неисправностей клиента Nightscout

NSClient relies on stable communication with Nightscout. An unstable connection leads to synchronization errors and high data usage.

If nobody is following you on Nightscout you can choose to pause NSClient to save battery life or you can choose to setup NSClient so that it only connects when on Wi-Fi and/or during charging.

* Как обнаружить нестабильную связь?

Go to NSClient tab in AAPS and watch the log. The expected behavior is to receive a PING every ~30s and almost no reconnection messages. Если вы видите много повторных попыток соединения, то это свидетельство проблем со связью.

Since AAPS version 2.0, when such behavior is detected, NSClient is paused for 15 minutes and the message "NSClient malfunction" is displayed on the main Overview screen.

* перезапуск

В качестве первого шага попробуйте перезапустить Nightcout и затем телефон, чтобы понять, сохраняется ли проблема

Если Nightscout размещен на Heroku, вы можете перезапустить Nightscout так: зайдите в Heroku, нажмите на имя приложения, нажмите в меню «More», затем «Restart all dynos».

На других хостингах следуйте документации хостинга.

* Проблемы с телефоном

Android может перевести телефон в спящий режим. Check if you have an exception for AAPS in your phones power options to allow it to run in the background all the time.

Check the NSClient again when in strong network signal location.

Try another phone.

* Nightscout

If your site is hosted on Azure, many people have found that connection issues have improved since moving to Heroku.

A workaround to connection issues in Azure is to set in Application settings HTTP protocol to 2.0 and Websockets to ON

* No BG reading from Nightscout

If AAPS connects to Nightscout correctly but does BG displays as N/A. Go to NSCLIENT tab, press the 3 dot menu top right, Click NSClient Preferences -> Synchronization turn on "Receive/backfill CGM data".

* If you still get an error...

Check the size of your database in MongoDB (or via the database size plugin in nightscout). If you are using the free tier in MongoDB, 496MB means it is full and needs to be cleaned up. [Follow these Nightscout instructions for checking the size of your database and clearing out data](https://nightscout.github.io/troubleshoot/troublehoot/#database-full).

Before clearing data from your database and if you haven't already set it up, you should consider donating your AAPS data to the Open Humans project (for research). The instructions are on the [OpenHumans configuration page](../Configuration/OpenHumans).