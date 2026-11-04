# Jelly

## Jelly Star Mini

**Vlastnosti**

* Android 13
* 8 GB RAM

**Výhody**

* Je naozaj malý.
* Aj keď to ľuďom poviete, nemusia ho považovať za bežný smartfón a ľahšie ho prijmú ako výnimku tam, kde telefóny zvyčajne nie sú povolené.

**Nevýhody**

* Odporúča sa iba skúseným používateľom okruhu. Niektoré nastavenia sa nedajú ľahko rozpoznať: zo skúsenosti s veľkým telefónom s Androidom a AAPS musíte vedieť, ako a kde sa čo nachádza. Niektoré tlačidlá AAPS sú malé a ťažko sa na ne ťuká: potrebujete presný dotyk, nie hrubé prsty.
* Dá sa používať iba ako telefón pre okruh (LooperPhone). Je lepšie mať vo vrecku aj bežný smartfón. 

### Optimalizácia výdrže batérie

Jelly má silné optimalizačné funkcie, ktoré **musíte** pre AAPS vypnúť (aj pre ostatné aplikácie DIY, ako BYODA, xDrip, OOP2, Juggluco atď.).

![](../images/Jelly_Settings1.png)

Funkciu Intelligent assistance môžete nechať zapnutú, ale **pre aplikácie DIY musí byť vypnutá**.

![](../images/Jelly_Settings2.png)

Pre senzory Libre môžete zapnúť NFC.

![](../images/Jelly_Settings3.png)

### Optimalizácia výdrže batérie

Aby sa zabránilo rušeniu **AAPS**, treba na Jelly Star vypnúť obmedzenie „Využitie batérie“ (battery usage) tak, že pre **AAPS** vyberiete „Bez obmedzení“ (unrestricted) (aj pre ostatné **aplikácie DIY**, ako BYODA, xDrip, OOP2, Juggluco atď.).

![Jelly_BatterY_1ACA756A-2EC4-4623-B8C4-2CEB9D230A93](../images/JellyStarMini1.jpg)

### Google Play Protect

Nezabudnite vypnúť Google Play Protect.

### Vzdialené pripojenie pre Wear apk

Pri niektorých inteligentných hodinkách, napríklad Samsung Galaxy, musí byť v aplikácii Galaxy Wearable v časti Advanced features (Rozšírené funkcie) **zapnuté** „Remote connection“ (Vzdialené pripojenie), aby ste mohli používať Jelly, **Wear.apk** a **AAPS** na diaľku cez Wi-Fi.

![Galaxy Wearable, Rozšírené funkcie, Vzdialené pripojenie zapnuté](../images/wearos/galaxy_wearable_remote_connection.png)