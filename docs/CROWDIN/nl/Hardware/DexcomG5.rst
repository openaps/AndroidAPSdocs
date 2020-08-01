Dexcom G5
**************************************************
Dexcom G5 met xDrip+
==================================================
* Als dat nog niet is ingesteld, download dan`xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ en volg de instructies voor Nightscout `G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_.
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON.  Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.
* Selecteer xdrip in Configurator (instellingen in AndroidAPS).
* Als AAPS geen BG-waarden ontvangt wanneer de telefoon in vliegtuigmodus staat, gebruik dan 'Identify receiver' (Identificeer ontvanger) zoals beschreven op de `xDrip+ instellingen pagina <../Configuration/xdrip.html>`_.

G5 met aangepaste Dexcom G5 app
==================================================
* Download de apk van `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, en kies de versie die je nodig hebt (mg/dl of mmol/l versie, voor G5).

   * Map 2.3 is voor gebruikers van AndroidAPS 2.3, map 2.4 voor gebruikers van AAPS 2.5.1.
   * Open https://play.google.com/store/search?q=dexcom%20g5 op jouw computer. Regio wordt weergegeven in URL.
   
   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Regio in Dexcom G5 URL

* Stop sensor en verwijder de originele Dexcom app, als dat nog niet gedaan is.
* Installeer de gedownloade apk
* Start sensor
* Selecteer Dexcom App (aangepast) in ConfigBuilder (instelling in AndroidAPS).
* Als je de Dexcom app wilt gebruiken om aan de zender te koppelen, maar ook gebruik wilt maken van xDrip alarmen zet dan óók de xDrip+ app op je telefoon en kies in xDrip hamburger menu > instellingen > hardware gegevensbron > 640G /EverSense. De Dexcom app stuurt de waardes door dmv 'local broadcast' (lokaal uitzenden) naar xDrip+, je hebt hierbij geen internet nodig.
