Freestyle Libre 3
**************************************************

The Freestyle Libre 3 system can automatically report dangerous blood glucose levels. The Libre3 Sensor sends the current blood sugar level to a receiver (reader or smartphone) every minute. De ontvanger geeft een alarm indien nodig. With a modified Libre 3 app, Juggluco app and the xDrip+ app, you can continuously receive and display your blood sugar level on your smartphone. It's even possible to receives older data out of the sensor memory (two hours minutely glucose and two weeks once per 5 minute history data.) This is sendt to Juggluco.

De sensor kan worden gekalibreerd dmv een verschuiving van -40 mg/dl tot +20 mg/dl (-2,2 mmol/l tot +1,1 mmol/l) om te corrigeren voor verschillen tussen vingerpietmetingen en sensorwaardes.

Current limitations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  It's currently not confirmed if this solution is working with US version of the Freestyle Libre 3 sensors!
-  The app will only work for arm64 systems (64 bit systems). Most modern phones are supported. If you are unsure, just try to install the patch and try to start the app.
-  If you have a rooted system, you need to cover the root. Here you got some instructions: `link <https://www.reddit.com/r/Freestylelibre/comments/s22vlr/comment/hw2p4th/?utm_source=share&utm_medium=web2x&context=3>`_.
-  Juggluco (required app to receive the libre3 readings) does only support English, Dutch and Italian languages. The patched Libre3 app does support: ar, de, es, fr, hi, in, it, ja, ko, my, nl, pt, ru, th, tr and vi.

Step 1: Download and setup the patched LibreLink-App
==================================================

Download the patched .apk file `here <https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Patched%20Apk/Libre%203_v3.3.0_apkfab.com.apk>`_ or `here <https://apkfab.com/libre-3/com.freestylelibre3.app.de/apk?h=142cfbb2e0b1f10cd280408b10c5a5127e46e00e78d7775dae382529921487e9>`_ and install it on your phone.

After you successfully installed the app on your phone, open the app. If you see any warning like the one below, you can ignore it. (The app is working with any EU sensor)

.. image:: ../images/libre3/step_1.jpg
   :alt: LibreLink warning

If you are on the screen “Create an Account”, you got the option to create a LibreView account. This might be a good option, as you got the possibility to re-enable a sensor with a different app. It also allows you to share the BG data to LibreView. I you don’t like to, just press “Skip” at the top right.

.. image:: ../images/libre3/step_2.jpg
   :alt: LibreView account

Plese select your Unit of Messurement on this screen. You can change it later as well.

.. image:: ../images/libre3/step_3.jpg
   :alt: Measurement Unit selection

If you got a Popup, asking for “Ignore battery optimisation?”, click “ALLOW”. This will keep the Libre3 app running in the background.

.. image:: ../images/libre3/step_4.jpg
   :alt: Disable battery optimisations

Now you should have set up the Libre3 app. Let’s continue with the connection to Juggluco

Step 2: Connect Libre3 with Juggluco
==================================================

Open the Libre3 sidebar and select Juggluco.

.. image:: ../images/libre3/step_5.jpg
   :alt: Juggluco menu

Within the Juggluco menu, ensure "Port" is set to 7117 and click “Add Connection” on the bottom.

.. image:: ../images/libre3/step_6.jpg
   :alt: Juggluco overview

Now, fill in everything, according to the image below:

.. image:: ../images/libre3/step_7.jpg
   :alt: Libre Juggluco setup

It you are done, click on “Save” to confirm your setttings. Awesome, you can close the Libre3 app now!

Step 3: Setup Juggluco
==================================================

Download the Juggluco .apk file `here <https://github.com/maheini/FreeStyle-Libre-3-patch/raw/main/Juggluco-solution/versions/latest/Juggluco.apk>`_ or `here <https://apkfab.com/juggluco/tk.glucodata/apk?h=1fc401ff9fbe7f56e6a0a7068fed6da96592b13757c3b05cddff893d813e18fd>`_ and install it on your phone.

Now let’s open the app. You will be greeted with this screen below. Just click the “Without sensor” button.

.. image:: ../images/libre3/step_8.jpg
   :alt: Juggluco welcome screen

After that, you get a short introduction text. Click on “OK”.

.. image:: ../images/libre3/step_9.jpg
   :alt: Juggluco instroduction screen

Ok, let’s setup Juggluco! The app itself doesn’t have the best Interface, but it’s a very useful app. To open the settings, click anywhere on the top left screen. Now you should see this menu below. Select “Settings”.

.. image:: ../images/libre3/step_10.jpg
   :alt: Juggluco settings menu

Within the settings, you can configure the data-connection to xDrip. Click on “Send to xDrip” and press “OK”.

.. image:: ../images/libre3/step_11.jpg
   :alt: Juggluco settings

Press on the top left center within the Juggluco app. A new menu should pop up. Please select “Mirror”.

.. image:: ../images/libre3/step_12.jpg
   :alt: Juggluco connection menu

You should see this screen. Please check the port settings on the top right corner, which should be set to "8795" and after that, tap on "Add Connection". (Keep in mind, within the Juggluco app the ports are switched) 

.. image:: ../images/libre3/step_13.jpg
   :alt: Juggluco connection screen

Now let’s fill in all the settings as shown below and your password according to your Libre3 password. If you did that - press “Save” to confirm.

.. image:: ../images/libre3/step_14.jpg
   :alt: Juggluco connection settings

Well done! You can now try to press the “Sync” button within the previous menu. After some time, Juggluco should receive the blood glucose values automatically from Libre3 app.

Now start the Libre3 sensor with the patched app by simply scanning the sensor. Zorg ervoor dat je alle instellingen als volgt hebt ingesteld. You can use a sensor that was already used with the original Libre3 app if you specify the same LibreView account name. You have to press "Start New Sensor" and  scan the sensor. If you want to go back to the unpatched Libre 3 app, you have to do the same.

Verplichte instellingen voor een succesvolle sensor start:

-  NFC enabled / BT enabled
-  memory and location permission enabled
-  location service enabled
-  automatic time and time zone setting
-  set at least one alarm in the patched app

Houd er rekening mee dat de locatieservice een telefooninstelling is. Dit is niet de app locatie toestemming; de app moet je daarnaast ook nog locatie toestemming verlenen!

Step 4: Finally set up xDrip
==================================================

De glucosewaarden komen op de smartphone binnen op de xDrip+ app. 

* Als je dit nog niet al had gedaan, download dan de app en installeer een van de nieuwste 'nightly builds' vanaf `deze locatie <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* In xDrip+ selecteer "Libre2 (patched App)" als gegevensbron
* Indien nodig typ dan "BgReading:d,xdrip libre_receiver:v" onder Less Common Settings->Extra Logging Settings->Extra tags for logging (in het Nederlands: Minder Algemene Instellingen-> Extra logboekinstellingen-> Extra tags voor loggen). Dit logt extra foutmeldingen voor het oplossen van problemen, de meesten van ons zullen dit niet nodig hebben.
* In xdrip ga naar Settings > Interapp Compatibility > Broadcast Data Locally en selecteer ON. Deze instelling zorgt ervoor dat de xDrip app op jouw telefoon jouw waardes direct naar de AndroidAPS app (ook op jouw telefoon) doorstuurt en je dus geen internetverbinding nodig hebt.
* In xdrip ga naar Instellingen > Interapp Settings > Accept Treatments selecteer OFF.
* Om te zorgen dat AAPS de glucosewaardes ontvangt van xDrip+ moet je onder Settings > Interapp Settings > Identify Receiver '"info.nightscout.androidaps" < ../Configuration/xdrip.html#identificeer-ontvanger-identify-receiver>`_ invullen.
* Als je AndroidAPS wilt gebruiken om te kalibreren ga dan in xdrip naar Instellingen > Interapp settings > Accept Calibrations en selecteer ON.  Je kunt ook de opties aanpassen aan jouw behoefte in Instellingen > Minder vaak voorkomende instellingen > Advanced Calibration Settings.

.. image:: ../images/Libre2_Tags.jpg
  :alt: xDrip+ LibreLink logging

Step 5: Start sensor within xDrip
==================================================

In xDrip + start je de sensor met "Start Sensor" en "not today". 

Dit zorgt ervoor dat de Libre2 sensor niet opnieuw een "start" commando oid zal ontvangen. Dit is gewoon om aan te geven aan xDrip+ dat een nieuwe sensor de glucosewaardes aanlevert. Indien beschikbaar, voer twee glucosewaardes in (gemeten met vingerprik, met stabiele bloedsuiker, handjes gewassen etc) voor de initiële kalibratie. De bloedglucose waarden moeten nu elke 5 minuten in xDrip+ binnenkomen. Gemiste waarden, bijv. omdat je te ver weg van je telefoon was, zullen niet achteraf worden aangevuld. Eens gemist, blijft gemist.

Na een sensorwissel zal xDrip+ automatisch de nieuwe sensor detecteren en alle kalibratiegegevens verwijderen. Je kunt je bloedglucose meten dmv vingerprik na activering en een nieuwe kalibratie invoeren (zie hiervoor).

Step 6: Configure AndroidAPS (for looping only)
==================================================

* In AndroidAPS ga naar Configurator > BG Bron en vink 'xDrip+' aan. 
* Als AAPS geen BG-waarden ontvangt wanneer de telefoon in vliegtuigmodus staat, gebruik dan 'Identify receiver' (Identificeer ontvanger) zoals beschreven op de `xDrip+ instellingen pagina <../Configuration/xdrip.html#identificeer-ontvanger-identify-receiver>`_.

Tot nu toe kun je met Libre 2 als BG bron 'Activeer SMB altijd' en 'Activeer SMB na koolhydraten' in het SMB algoritme niet aanzetten. De BG waarden van Libre 2 zijn niet betrouwbaar genoeg om die functies veilig te gebruiken (alle overige SMB functies zijn overigens wél gewoon te gebruiken). Zie `Filteren van glucosewaardes <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ voor meer details.

Problemen oplossen en andere tips
==================================================

Troubleshooting Libre3 no readings
--------------------------------------------------

-  Android location service is not granted - please enable it in the system settings
-  automatic time and time zone not set - please change the settings accordingly
-  Bluetooth is switched off - please switch on

Troubleshooting Libre3 -> Juggluco connection
--------------------------------------------------

-  Ensure if Libre3 is receiving any readings
-  Check your settings & password again
-  Click “Sync” within Libre3->Juggluco and “Sync” and “Reinit” button within Juggluco->Mirror
-  It is possible that sometimes after configuring everything, you have to force close Libre3 and restart it.
-  Wait some time or try to force close Juggluco
-  Older versions of Juggluco (below 2.9.6) will not send back-filled data from the Libre3 sensor to connected devices (for example Juggluco on WearOS.) It is possible that you have to press "Resend Data" on within the patched Libre 3 app (Juggluco menu) for this.

Further help
--------------------------------------------------

Original instructions: `jkaltes website <http://jkaltes.byethost16.com/Juggluco/libre3/>`_

Additional Github repo: `Github link <https://github.com/maheini/FreeStyle-Libre-3-patch>`_