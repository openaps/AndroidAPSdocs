# Configurer AAPS sur votre montre Wear OS

Les instructions ci-dessous s'appliquent à l'apk **AAPS Wear** que vous devez construire (voir [ici](../WearOS/BuildingAapsWearOS.md) si vous ne l'avez pas encore fait) car vous avez construit l'apk **AAPS** du téléphone.

Vous pouvez également utiliser certaines informations pour l'apk **AAPSClient** et **PumpControl** **Wear** qui sont directement disponibles dans [GitHub](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4). Chaque application **Wear** ne communiquera qu'avec son application de téléphone correspondante. Par exemple : l'application **AAPSClient Wear** ne peut être utilisée que pour afficher les données de **AAPSClient** et pas celles d'**AAPS**.

## Versions Wear OS et compatibilité

### Wear OS 3

Installez l'apk **AAPS Wear** en utilisant [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV), Easy Fire Tools (décrit ci-dessous) ou ADB.  
Aucune limitation dans les opérations **AAPS Wear**.

(BuildingAapsWearOs-WearOS5)=

### Wear OS 4 et montres Galaxy mises à jour vers Wear OS 5

Par example: GW4, GW5, GW6

Installez l'apk **AAPS Wear** en utilisant [Wear Installer 2](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV), Easy Fire Tools (décrit ci-dessous) ou ADB.  
Aucune limitation dans les opérations **AAPS Wear**.

```{admonition} Android Wear OS 5
:class: warning
**LES MISES A JOUR FUTURES DE FIRMWARE RISQUENT PROBABLEMENT DE SUPPRIMER LA COMPATIBILITE DES CADRANS AAPS : DESACTIVEZ LES MISES A JOUR DE LA MONTRE**.
```

### Montres Galaxy avec installation usine Wear OS 5 ou supérieures

 Par example: GW7, GW Ultra

```{admonition} Android Wear OS 5
:class: warning
L'installation des cadrans AAPS doit être effectué avec [Wear Installer 2](https://www.youtube.com/watch?v=yef_qGvcCnk) après avoir installé l'application sur la montre.<br>
Un changement accidentel du cadran AAPS vers un autres cadran nécessitera de refaire la procédure d'installation ci-dessous.<br>
Le changement des paramètres spécifiques des cadrans comme : SombreDark, Séparateur Invisible, etc. n'est possible que via l'application AAPS montre.<br><br>
**LA MISE A JOUR DES FIRMWARE SUPPRIMERA LA COMPATIBILITE AVEC LES CADRANS AAPS : DESACTIVEZ LES MISES A JOUR DE LA MONTRE**.
```

Envisagez alternativement [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) avec une complication.

### Montre Pixel avec Wear OS 5

Non compatible avec les cadrans AAPS.  
Considérez [GlucoDataHandler](https://play.google.com/store/apps/details?id=de.michelinside.glucodatahandler) avec une complication.

## Comment configurer une SmartWatch Samsung Galaxy 4 avec **AAPS**

Cette section suppose que vous êtes totalement nouveau dans les Smartwatches, et vous donne l'orientation de base d'une montre classique, la **Galaxy Watch 4**, suivi d'un guide étape par étape pour configurer **AAPS** sur la montre.

_This guide assumes the Samsung Galaxy watch you are setting up is running Wear OS version 3 or lower._ If you are setting up a watch running Wear OS 4/OneUI 5 or later, you will need to use a new ADB pairing process, this is explained in the Samsung software on your phone and will be updated here in due course.

Here are basic setup guides for the [Galaxy Watch 5](https://www.youtube.com/watch?v=Y5upzOIxwTU) and [Galaxy Watch 6](https://www.youtube.com/watch?v=D6bq20KzPW0)

## Basic smartwatch familiarity

After basic setup of your watch according to the video above, go to the playstore on the phone and download the following apps: "Galaxy Wearable" “Samsung” and either “Easy Fire tools” or "Wear Installer 2".

There are plenty of 3rd party YouTube videos which will help you with getting familiar with your new smartwatch, for example:

[https://www.youtube.com/watch?v=tSVkqWNmO2c](https://www.youtube.com/watch?v=tSVkqWNmO2c)

The app “Galaxy Wearable” also has an instruction manual section in it. Open galaxy wearable on the phone, search for the watch, attempt to pair the watch with the phone. Depending on your version, this may prompt you to install a further 3rd app “galaxy watch 4 plugin” from the playstore (takes a while to download). Install this on the phone, and then attempt to pair the watch and phone again in the wearable app. Go through a series of menus and tick various preferences.

## Setting up a Samsung account

You need to make sure that the email account you use to set up the Samsung account has a date-of-birth such that the user is age 13+, as otherwise the Samsung permissions are really difficult to approve. If you have given your child under 13 a Gmail account and are using that email address, you cannot simply change it to an adult account. One way around this is to modify the current date-of-birth to make the current age 12 years and 363 days old. The following day, the account will be converted to an adult account, and you can progress with the setup of the Samsung account.

(remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)=

## Transferring the **AAPS** Wear app onto your **AAPS** phone

Loading the Wear.apk from Android Studio to your phone can be done either by:

a)  using a USB cable to put the **AAPS** wear apk file onto the phone, and then “side-load” it to the watch. Transfer Wear.apk to the phone via USB into the downloads folder; or

b)  cut and paste Wear.apk from Android Studio onto your Gdrive.


You can use either Wear Installer 2 or Easy Fire tools to side-load AAPS onto the watch. Here we recommend Wear Installer 2, because the instructions and process in the video are so clear and well-explained.

## Using Wear Installer 2 to side-load **AAPS** Wear from the phone onto the watch

 ![image](../images/43577a66-f762-4c11-a3b3-4d6d704d26c7.png)

Wear Installer 2, developed by [Malcolm Bryant](https://www.youtube.com/@Freepoc) can be downloaded from Google Play onto your phone and can be used to side-load the AAPS wear app onto the watch. The app includes a handy ‘how to sideload’ [video.](https://youtu.be/abgN4jQqHb0?si=5L7WUeYMSd_8IdPV)

```{tip}
For Wear OS 5 watches follow [this video](https://www.youtube.com/watch?v=yef_qGvcCnk).
See troubleshooting tips [below](#BuildingAapsWearOs-WearOS5-TShoot).
```

This provides all the necessary detail (best to open the video on a separate device so you can watch it whilst setting up the phone).

As mentioned in the video, once complete, switch ADB debugging off on the watch, to avoid draining the smartwatch battery.

Alternatively, but not for Wear OS 5, you can:

```{admonition} Use Easy Fire tools to side-load the **AAPS** wear on the watch
:class: dropdown

1)   Download _Easy Fire Tools_ from playstore onto phone 

![image](../images/81ceb8f3-dfa6-468b-b9d0-c31b885bc104.png)

2)  Make yourself a developer in the watch (once set up and connected to phone): 

Go to settings >about watch (bottom option) >- software info > software version. 

Rapidly tap on “ software version” until a notification appears that the watch is now in "developer mode". Return to the top of settings menu, scroll to the bottom
 and see “developer options” below “about watch”. 

In “developer options”, turn on “ADB debugging” and “wireless debugging”. The latter option then reveals the IP address of the watch, the final two digits of which changes each time the watch is paired with a new phone. It will be something like: **167.177.0.20.** 5555 (ignore the last 4 digits). Note that the last two digits (here, “20”) of this address will change every time you change to a new phone handset for AAPS.  

![24-10-23, watch ADB debug pic](../images/643f4e8b-09f3-4a8d-8277-76b1839a5c3a.png)

STEP 3)     Enter IP address _e.g._ **167.177.0.20** into Easy Fire tools on the phone (go into the left hamburger, settings and enter the IP address). Then click the plug socket icon on the top right.  

![image](../images/b927041f-cc53-4cde-9f77-11cd517c9be0.png)


![image](../images/00b2fb8b-5996-4b71-894e-516d63469e1b.png)


STEP 4) Follow the instructions [here](https://wearablestouse.com/blog/2022/01/04/install-apps-apk-samsung-galaxy-watch-4/?utm_content=cmp-true) to side-load (i.e. transfer)  Wear.apk onto the smartwatch using Easy Fire tools

Click side "plug-in" socket in the app, in order to upload Wear OS.apk onto the smartwatch: 

![image](../images/d1bc4c9d-d5ef-4402-a9a2-a51ed242eff3.png)


 Next step > accept the authorisation request on the smartwatch


![image](../images/2c398a34-b865-4aa1-9c53-d83dfef052a7.png)

```

(BuildingAapsWearOs-WearOS5-TShoot)=

### General troubleshooting recommendations for Wear OS 5

- Do not use Wi-Fi Tethering. That won't work.
- You do not need to enable adb debugging on the phone (only on the watch). Disable adb debugging on the Phone.
- Make sure you are connecting to your local network where phone and watch can see each other (do not use your Wi-Fi guest network to connect).
- For GW7 you need to install using Wear Installer as it gives you the option to select the AAPS(Custom) watchface on installation.
- Make sure both watch and phone are on the same network and Wi-Fi device. Especially Wi-Fi repeaters or access points may create problems.
- Make sure to be near your main router, then restart both phone and watch.

**Pairing :**

- Watch: Wireless Debugging: note the IP address.
- Wear Installer: Enter the IP on the in Wear Installer app.
- Select Pair new, note the pairing code and port number displayed.
- Wear Installer: enter the paring code + space + port number.
- Wear installer should report pairing was successful. If it does not, exit the Wear Installer, then try again.

Once paired you should be able to install the AAPS wear apk:

- Exit/close, then restart Wear Installer.
- On wireless debug, note the IP and Port number and make sure you check/enter the IP and port number in Wear Installer.
- Note: the port number is different from the one used for pairing!

## Setting up the connection between the watch and the phone from **AAPS**

The final step is to configure **AAPS** on the phone to interact with **AAPS** Wear” on the watch. To do this, enable the Wear plugin in Config Builder:

* Go to the **AAPS** app on the phone

* Select > Config Builder in the left-hand Hamburger tab

* Tick for Wear selection under General

![Wear OS](../images/WearOS.png)

To change to a different **AAPS**  watchface, press on the home screen of the watch and it will come to “customise”. Then swipe right until you get to all the **AAPS**  faces.

If the **AAPS** Wear.apk has been successfully side-loaded onto the smartwatch, it will look like this:


![24-10-23, successful galaxy watch photo](../images/628e46d8-c7dc-4741-9eba-ae83f396c04c.png)

### Troubleshooting the **AAPS** watch- **AAPS** phone communication

1.  If EasyFire tools does not connect or if you are receiving ‘authorisation failed’ > check IP address has been correctly entered.
2.  Check that the smartwatch is connected to the internet (and not just connected to the phone via Bluetooth).
3.  Check that the **AAPS** Phone and smartwatch are paired or linked in Samsung app.
4.  It may also help to do a hard restart of Phone and smartwatch (meaning turning phone on and off)
5.  Assuming you have managed to download the Wear.apk onto your phone but you are not receiving any BG data, _check_ that you have side-loaded the correct **AAPS** apk version onto the watch. If your AAPS wear.apk version is listed as any of the following: a) “wear-AAPSClient-release’; b) ‘wear-full-release.aab’; or c) the word ‘debug’ appears in the title, you have not selected the correct Wear OS apk version during the build.
6.  Check that your router is not isolating the devices from one another.

More troubleshooting tips can be found [here](https://freepoc.org/wear-installer-help-page/#:~:text=If%20you%20are%20having%20problems,your%20phone%20and%20your%20watch.)

(WearOS_changing-to-AAPS-watchface)=

## Sélectionnez un cadran AAPS sur votre montre WearOS

Il existe plusieurs cadrans de montre disponibles dans la version standard de l'APK AAPS pour Wear OS. Une fois que vous avez installé l'APK AAPS Wear sur votre montre, ils seront disponibles. Voici les étapes pour en sélectionner un :

1. Sur votre montre (WearOS uniquement), appuyez longuement sur votre cadran actuel pour faire apparaître l'écran de sélection du cadran et faites défiler complètement vers la droite jusqu'à ce que vous voyiez le bouton "Ajouter un cadran de montre" et sélectionnez-le

![Screenshot_20231123_124657_sysui](../images/efd4268f-0536-4a31-9ba1-f98108f32483.png)

2. Faites défiler vers le bas de la liste jusqu'à ce que vous voyez la section "Téléchargées" et trouvez "AAPS (Perso)" et cliquez sur le milieu de l'image pour l'ajouter à votre shortlist de cadrans. Ne vous inquiétez pas de l'apparence actuelle de la montre "AAPS (Perso)", nous sélectionnerons votre skin préféré à l'étape suivante.

![Screenshot_20231123_124619_sysui](../images/036dc7c4-6672-46c8-b604-8810a16a2eb3.png)

3. Maintenant, ouvrez AAPS sur votre téléphone et allez au plugin Wear (activez-le dans la Configuration (dans le bloc Synchronisation) si vous ne le voyez pas dans vos plugins actuels en haut).

![Screenshot_20231123_090941_AAPS](../images/5df23fa3-791b-4c9a-999a-251391a82835.png)

4. Cliquez sur le bouton « Charger le Cadran » et sélectionnez le cadran que vous voulez

![Screenshot_20231123_130410_AAPS](../images/adde2eca-1df7-4382-b9ab-346819c35d9d.png)

5. Vérifiez sur votre montre, le cadran de "AAPS (Perso)" devrait maintenant afficher l'apparence que vous avez sélectionnée. Attendre quelques secondes si nécessaire. You may now customize the complications, etc. by long pressing the watchface and then pressing the "Customize" button on the watchface image.

## Cadran AAPS v2 - Légende

![Légende du cadran AAPS v2](../images/Watchface_Legend.png)

A - temps écoulé depuis le dernier calcul de la boucle

B - lecture du capteur MGC

C - nombre de minutes depuis la dernière lecture MGC

D - changement par rapport à la dernière lecture MGC (en mmol ou mg/dl)

E - variation moyenne des lectures MGC depuis 15 minutes

F - niveau de batterie du téléphone

G - débits de basal (en U/h ou en % pendant un DBT)

H - BGI (blood glucose interaction) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

I - glucides (glucides actifs | e-glucides à venir)

J - Insuline Active (bolus | basal)