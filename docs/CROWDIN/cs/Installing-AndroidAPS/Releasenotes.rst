Poznámky k vydání
**************************************************
Postupujte prosím podle pokynů v `návodu k aktualizaci <../Installing-AndroidAPS/Update-to-new-version.html>`_. Na stránce popisující aktualizaci také můžete najít sekci řešení problémů, která řeší nejčastější problémy při aktualizaci.

Jakmile bude k dispozici nová aktualizace, obdržíte následující informace:

.. image:: ../images/AAPS_LoopDisable90days.png
  :alt: Informace o aktualizaci

Pak máte 60 dnů na aktualizaci. Pokud do těchto 60 dnů neaktualizujete AAPS, přepne se do LGS (low glucose suspend - viz `slovník <../Getting-Started/Glossary.html>`_) jako v `6. cíli <../Usage/Objectives.html>`_.

Pokud neaktualizujete do dalších 30 dní (90 dní od nového vydání) přejde AAPS na otevřenou smyčku.

Prosím pochopte, že tato změna není určena, aby vás otravovala, ale je to kvůli bezpečnostním důvodům. Nové verze AndroidAPS neposkytují pouze nové funkce, ale také důležité bezpečnostní opravy. Proto je důležité, aby každý uživatel aktualizoval co nejdříve.. Bohužel stále existují hlášení o chybách z velmi starých verzí, takže se jedná o pokus zlepšit bezpečnost pro každého uživatele a celou komunitu DIY. Děkujeme za pochopení.

Version 2.8.1.1
================
Release date: 12-01-2021

Důležitá poznámky
----------------------
* Option **NS_UPLOAD_ONLY** has been forced ON for all 2.8.1 users. 
* If you use NSClient to enter TT, carbs or profile switches you must turn it off in AAPS but **only in case your synchronization is working well** (ie. you don't see unwanted data changes like self modification of TT, TBR etc). 
* ATTENTION: DO NOT do this if you have any other app handle treatments ( like xDrip broadcast/upload/sync...).
* NS_UPLOAD_ONLY can only be turned off if engineering mode is enabled.

Major changes
----------------------
* RileyLink, Omnipod and MDT pump improvements and fixes
* forced NS_UPLOAD_ONLY
* fix for SMB & Dexcom app
* watchface fixes
* crash reporting improved
* gradle reverted to allow direct watchface instalation
* automation fixes
* RS driver improvement
* various crashes fixed
* UI fixes and improvements
* new translations

Verze 2.8.0
================
Datum vydání: 01. 01. 2021

Důležitá poznámky
----------------------
* **Minimální verze Androidu je teď 8.0.** Pro starší verze Androidu lze stále použít verzi 2.6.1.4 ze starého úložiště kódů. 
* `Cíle byly změněny. <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ **Finish not completed objectives before update.**
Umístění kódů bylo změněno na https://github.com/nightscout/AndroidAPS . Pokud se nevyznáte v práci s nástrojem git, nejjednodušší způsob aktualizace je odstranění staré verze a vytvoření `nového klonu kódu<../Installing-AndroidAPS/Building-APK.html>`_.
* K sestavení APK použijte `Android Studio 4.1.1 <https://developer.android.com/studio/>`_ nebo novější.

Hlavní nové funkce
----------------------
* `podpora Omnipod Eros <../Configuration/OmnipodEros.html>` _ @bartsopers @andyrozman @ktomy @samspycher @TeleRiddler @vanelsberg @eurenda and zvláštní díky @ps2 @itsmojo, dalším, kteří se ůčastnili vývoje ovladače pro Loop a @jlucasvt z GetRileyLink.org 
* `bolus advisor <../Configuration/Preferences.html#bolus-advisor>`_ & `eating reminder <../Getting-Started/Screenshots.html#eating-reminder>`_ @MilosKozak 
* `New watchface <../Configuration/Watchfaces.html#new-watchface-as-of-androidaps-2-8>`_ @rICTx-T1D
* Vylepšení připojení Dana RS @MilosKozak 
* Odstraněno chování "Nezměněné hodnoty CGM" v SMB pro nativní aplikaci Dexcom
* New `Low Ressolution Skin <../Configuration/Preferences.html#skin>`_
* Nový "Těhotný" typ pacienta <../Usage/Open-APS-features.html#overview-of-hard-coded-limits>`_ @Brian Quinon
* Nové rozložení NSClient pro tablety @MilosKozak 
* NSClient přenáší nastavení inzulinu, senzitivity a zobrazení přímo z hlavní AAPS @MilosKozak 
* `Preferences filter <../Configuration/Preferences.html>`_ @Brian Quinion
* Nové ikony pumpy@Rig22 @@teleriddler @osodebailar
* New `insulin type Lyumjev <../Configuration/Config-Builder.html#lyumjev>`_
* Vylepšení instalačního průvodce @MilosKozak 
* Zlepšení zabezpečení @dlvoy 
* Různé vylepšení a opravy @AdrianLxM @Philoul @swissalpine  @MilosKozak @Brian Chinon 

Verze 2.7.0
================
Datum vydání: 24. 09. 2020

**Ujistěte se, že jste zkontrolovali a upravili nastavení po přechodu na verzi 2.7, jak je popsáno** `zde <../Installing-AndroidAPS/update2_7.html>`_.

Abyste mohli pokračovat v používání `Automatizace <../Usage/Automation.html>`_, potřebujete alespoň spustit plnění `cíle 11 <../Usage/Objectives.html#objective-11-automation>`_ (všechny předchozí cíle musí být splněny, aby šlo spustit cíl 11). If for example you did not finish the exam in `objective 3 <../Usage/Objectives.html#objective-3-prove-your-knowledge>`_ yet, you will have to complete the exam before you can start `objective 11 <../Usage/Objectives.html#objective-11-automation>`_. Neovlivní to cíle, které jste již dokončili. Splněné cíle zůstanou zachovány!

Hlavní nové funkce
----------------------
* interní použití vkládání závislostí, aktualizací knihoven, kódu přepsaného do kotlinu @MilosKozak @AdrianLxM
* využití modulů pro pumpy Dana @MilosKozak
* `nový vzhled, výběr vzhledu <../Getting-Started/Screenshots.html>`_ @MilosKozak
* nový `vzhled stavových indikátorů <../Configuration/Preferences.html#status-lights>`_ @MilosKozak
* `multiple graphs support <../Getting-Started/Screenshots.html#section-f-main-graph>`_ @MilosKozak
* `Pomocník s profilem <../Configuration/profilehelper.html>`_ @MilosKozak
* vizualizace `dynamického nastavení cílové glykémie <../Getting-Started/Screenshots.html#visualization-of-dynamic-target-adjustment>`_ @Tornado-Tim
* nový `vzhled Nastavení <../Configuration/Preferences.html>`_ @MilosKozak
* vylepšení SMB algoritmu @Tornado-Tim
* `Režim pozastavení nízké glykémie <../Configuration/Preferences.html#aps-mode>`_ @Tornado-Tim
* `oznámení vyžadovaných sacharidů <../Configuration/Preferences.html#carb-required-notification>`_ @twain47 @Tornado-Tim
* odstraněn plugin Ošetření (přesunut do pluginu Akce) @MilosKozak
* `nový šifrovaný formát zálohy nastavení <../Usage/ExportImportSettings.html>`_ @dlvoy
* `nová SMS TOTP autentizace <../Children/SMS-Commands.html>`_ @dlvoy
* `nové SMS příkazy - PUMP CONNECT, DISCONNECT <../Children/SMS-Commands.html#commands>`_ @Lexsus
* lepší podpora nízkých bazálů na pumpách Dana @Mackwe
* drobná vylepšení pro pumpu Insight @TebbeUbben @MilosKozak
* `"System default" volba jazyka nastaveného v telefonu <../Configuration/Preferences.html#general>`_ @MilosKozak
* vektorové ikony @Philoul
* `set neutral temps for MDT pump <../Configuration/MedtronicPump.html#configuration-of-phone-androidaps>`_ @Tornado-Tim
* vylepšení prohlížení historie @MilosKozak
* odstraněn OpenAPS MA algoritmus @Tornado-Tim
* odstraněna Oref0 senzitivita @Tornado-Tim
* `Zabezpečení heslem nebo biometrií <../Configuration/Preferences.html#protection>`_ pro nastavení, bolus @MilosKozak
* `nový spouštěč automatizace (trigger) <../Usage/Automation.html>`_ @PoweRGbg
* `Open Humans nahrávač dat <../Configuration/OpenHumans.html>`_ @TebbeUbben @AdrianLxM
* Nová dokumentace @Achim

Verze 2.6.1.4
================
Datum vydání: 04. 05. 2020

K sestavení APK použijte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ nebo novější.

Hlavní nové funkce
----------------------
* Insight: Deaktivace vibrací na bolus pro firmware verze 3 - druhý pokus
* Jinak je stejná jako verze 2.6.1.3. Aktualizace není povinná. 

Verze 2.6.1.3
================
Datum vydání: 03. 05. 2020

K sestavení APK použijte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ nebo novější.

Hlavní nové funkce
-----
* Insight: Deaktivace vibrací na bolus pro firmware verze 3
* Jinak je stejná jako verze 2.6.1.2. Aktualizace není povinná. 

Verze 2.6.1.2
================
Datum vydání: 19. 04. 2020

K sestavení APK použijte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ nebo novější.

Hlavní nové funkce
-----
* Oprava pádů pro Insight
* Jinak je stejná jako verze 2.6.1.1. Pokud nejste ovlivněni touto chybou, nemusíte provádět upgrade.

Verze 2.6.1.1
================
Datum vydání: 06. 04. 2020

K sestavení APK použijte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ nebo novější.

Hlavní nové funkce
-----
* Řeší problém s příkazem SMS CARBS při použití Combo pumpy
* Jinak je stejná jako verze 2.6.1. Pokud nejste ovlivněni touto chybou, nemusíte provádět upgrade.

Verze 2.6.1
==============
Datum vydání: 21. 03. 2020

K sestavení APK použijte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ nebo novější.

Hlavní nové funkce
-----
* Povolit zadání pouze adresy https:// v nastavení NSClient
* Fixed `BGI <../Getting-Started/Glossary.html>`_ displaying bug on watches
* Fixed small UI bugs
* Fixed Insight crashes
* Fixed future carbs with Combo pump
* Fixed `LocalProfile -> NS sync <../Configuration/Config-Builder.html#upload-local-profiles-to-nightscout>`_
* Insight alerts improvements
* Improved detection of boluses from pump history
* Fixed NSClient connection settings (wifi, charging)
* Fixed sending of calibrations to xDrip

Verze 2.6.0
==============
Datum vydání: 29. 02. 2020

K sestavení APK použijte `Android Studio 3.6.1 <https://developer.android.com/studio/>`_ nebo novější.

Hlavní nové funkce
-----
* Drobné úpravy vzhledu (úvodní obrazovka...)
* Odstraněna karta/nabídka Péče - další podrobnosti `zde <../Usage/CPbefore26.html>`_
* Nový `plugin Místního profilu <../Configuration/Config-Builder.html#local-profile-recommended>`_

  * Do místního profilu lze nyní uložit více než 1 profil
  * Profily lze kopírovat a upravovat
  * Možnost nahrát profily do NS
  * Stará přepnutí profilu lze kopírovat do nového profilu v Místním profilu (včetně posunu času a procentuální změny)
  * Vertikální výběr hodnot pro cíle
* Odstraněn Jednoduchý profil
* Funkce `Rozloženého bolusu <../Usage/Extended-Carbs.html#id1>`_ - uzavřená smyčka bude deaktivována
* Plugin MDT: Opravena chyba s duplicitními záznamy
* Jednotky se nezadávají v profilu, ale v obecném nastavení aplikace
* Přidáno nové nastavení do průvodce spuštěním
* Jiné UI a interní vylepšení
* `Komplikace pro Wear <../Configuration/Watchfaces.html>`_
* Nové `SMS příkazy <../Children/SMS-Commands.html>`_ BOLUS-MEAL, SMS, CARBS, TARGET, HELP
* Opravená podpora jazyků
* Cíle: `Možnost vrátit se zpět <../Usage/Objectives.html#go-back-in-objectives>`_, Dialogové okno s ukazatelem průběhu
* Automatizace: `možnost třídění <../Usage/Automation.html#sort-automation-rules>`_
* Automatizace: opravena chyba, kdy byla automatizace spuštěna s vypnutou smyčkou
* Nový stavový řádek pro Combo
* Vylepšení trendových šipek
* Opravena synchronizace dočasných cílů s NS
* Nová položka Statistika
* Povolen Rozložený bolus v režimu otevřené smyčky
* Podpora výstrah systému Android 10
* Nové překlady

Verze 2.5.1
==================================================
Datum vydání: 31. 10. 2019

Please note the `important notes <../Installing-AndroidAPS/Releasenotes.html#important-notes>`_ and `limitations <../Installing-AndroidAPS/Releasenotes.html#is-this-update-for-me-currently-is-not-supported>`_ listed for `version 2.5.0 <../Installing-AndroidAPS/Releasenotes.html#version-2-5-0>`_. 
* Fixed a bug in the network state receiver that lead to crashes with many (not critical but would waste a lot of energy re-calculating things).
* New versioning that will allow to do minor updates without triggering the update-notification.

Verze 2.5.0
==================================================
Datum vydání: 26. 10. 2019

Důležité poznámky
--------------------------------------------------
* Please use `Android Studio Version 3.5.1 <https://developer.android.com/studio/>`_ or newer to `build the apk <../Installing-AndroidAPS/Building-APK.html>`_ or `update <../Installing-AndroidAPS/Update-to-new-version.html>`_.
* If you are using xDrip `identify receiver <../Configuration/xdrip.html#identify-receiver>`_ must be set.
* If you are using Dexcom G6 with the `patched Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ you will need the version from the `2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_.
* Glimp is supported from version 4.15.57 and newer.

Je tato aktualizace pro mě? Aktuálně NENÍ podporováno
--------------------------------------------------
* Android 5 and lower
* Poctech
* 600SeriesUploader
* Upravené Dexcom aplikace z adresáře 2.3

Hlavní nové funkce
--------------------------------------------------
* Interní změna targetSDK na 28 (Android 9), podpora jetpack
* RxJava2, Okthttp3, podpora Retrofit
* Old `Medtronic pumps <../Configuration/MedtronicPump.html>`_ support (RileyLink need)
* New `Automation plugin <../Usage/Automation.html>`_
* Allow to `bolus only part <../Configuration/Preferences.html#advanced-settings-overview>`_ from bolus wizard calculation
* Vykreslování aktivity inzulínu
* Úprava předpovědí IOB podle výsledku detekce senzitivity
* New support for patched Dexcom apks (`2.4 folder <https://github.com/dexcomapp/dexcomapp/tree/master/2.4>`_)
* Ověření podpisu
* Povolit vynechání cílů pro uživatele OpenAPS
* New `objectives <../Usage/Objectives.html>`_ - exam, application handling
   
   (If you started at least objective "Starting on an open loop" in previous versions exam is optional.)
* Opravena chyba v ovladačích Dana, kde byl hlášen nesprávný čas
* Fixed bug in `SMS communicator <../Children/SMS-Commands.html>`_

Verze 2.3
==================================================
Datum vydání: 25. 04. 2019

Hlavní nové funkce
--------------------------------------------------
* Důležitá bezpečnostní oprava pro Insight (opravdu důležité, pokud používáte Insight!)
* Oprava prohlížeče historie
* Oprava výpočtů delta
* Aktualizace překladů
* Kontrola verze a varování při updatu gradle
* Lepší automatické testování
* Oprava potenciálního pádu v AlarmSound Service (díky @lee-b !)
* Oprava vysílání dat glykémií (nyní funguje nezávisle na SMS oprávnění!)
* Nový nástroj pro kontrolu nové verze


Verze 2.2.2
==================================================
Datum vydání: 07. 04. 2019

Hlavní nové funkce
--------------------------------------------------
* Oprava Autosens: deaktivace dočasného cíle zvýší/sníží cíl
* Nové překlady
* Opravy ovladače pro Insight
* Oprava SMS pluginu


Verze 2.2
==================================================
Datum vydání: 29. 03. 2019

Hlavní nové funkce
--------------------------------------------------
* `DST fix <../Usage/Timezone-traveling.html#time-adjustment-daylight-savings-time-dst>`_
* Aktualizace Wear
* `SMS plugin <../Children/SMS-Commands.html>`_ update
* Návrat k předchozímu cíli.
* Zastavení smyčky, je-li úložiště telefonu plné


Verze 2.1
==================================================
Podpora Accu-Chek <0>Insight</0> (od Tebbe Ubben a JamOrHam)

Hlavní nové funkce
--------------------------------------------------
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_ support (by Tebbe Ubben and JamOrHam)
* Stavové indikátory na obrazovce přehledu (Nico Schmitz)
* Pomoc při přechodu na letní čas (Roumen Georgiev)
* Oprava zpracování názvů profilů z NS (Johannes Mockenhaupt)
* Oprava blokování UI (Johannes Mockenhaupt)
* Podpora aktualizované upravené aplikace pro G5 (Tebbe Ubben a Milos Kozak)
* Podpora zdrojů glykémie G6, Poctech, Tomato, Eversense (Tebbe Ubben a Milos Kozak)
* Oprava zakázání SMB z nastavení (Johannes Mockenhaupt)

Různé
--------------------------------------------------
* If you are using non default `smbmaxminutes` value you have to setup this value again


Verze 2.0
==================================================
Datum vydání: 03. 11. 2018

Hlavní nové funkce
--------------------------------------------------
* oref1/SMB support (`oref1 documentation <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_) Be sure to read the documentation to know what to expect of SMB, how it will behave, what it can achive and how to use it so it can operate smoothly.
* `_Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_ pump support
* Průvodce nastavením: provede vás procesem úvodního nastavení AndroidAPS

Nastavení k přizpůsobení při přechodu od AMA k SMB
--------------------------------------------------
* Cíl 10 musí být zahájen, aby byly SMB povolené (SMB záložka obecně ukazuje, která omezení jsou aktivní)
* maxIOB now includes _all_ IOB, not just added basal. To znamená, že pokud je k jídlu poslaný bolus 8 U a maxIOB je 7 U, tak SMB nic nepošle, dokud IOB neklesne pod 7 U.
* výchozí hodnota min_5m_carbimpact se změnila z 3 na 8 při přechodu od AMA k SMB. Pokud přecházíte z AMA na SMB, musíte toto nastavení změnit ručně
* Při vytváření AndroidAPS 2.0 apk mějte na paměti: Konfigurace na vyžádání není aktuální verzí pluginu Android Gradle podporována! Jestliže vytváření apk selže s chybou "on demand configuration", proveďte následující změnu:

   * Otevřete okno Preferences klepnutím na File > Settings (na platformě Mac, Android Studio > Preferences).
   * V levé části pak na Build, Execution, Deployment > Compiler.
   * Odtrhněte Configure on demand.
   * Klikněte na Apply nebo OK.

Hlavní stránka
--------------------------------------------------
* Horní pruh umožňuje pozastavení/zakázání smyčky, zobrazení/úpravu profilu a k zahájení/ukončení dočasných cílů (DC). DC používají výchozí nastavení. Nová možnost DC Hypoglykémie je vysoký dočasný cíl, který má smyčce zabránit, aby příliš agresivně překorigovala dokrmové sacharidy na odvrácení hypoglykémie.
* Tlačítka ošetření: staré tlačítko ošetření je stále dostupné, ale ve výchozím nastavení je skryté. Viditelnost tlačítek může být nově nastavitelná. New insulin button, new carbs button (including `eCarbs/extended carbs <../Usage/Extended-Carbs.html>`_)
* `Colored prediction lines <../Getting-Started/Screenshots.html#prediction-lines>`_
* Možnost zobrazit pole poznámky v dialogových oknech inzulínu/sacharidů/kalkulátoru/plnění, poznámka se pak nahrává do NS
* Aktualizované dialogové okno plnění umožňuje plnění samotné a navíc vložení ošetřujících vstupů pro výměnu kanyly a výměnu zásobníku

Hodinky
--------------------------------------------------
* Oddělená varianta sestavení byla zrušena, nyní se pro sestavení používá varianta full. Abyste mohli používat ovládání bolusů z hodinek, povolte nejdřív toto nastavení na telefonu
* Průvodce se nyní ptá jenom na sacharidy (a procenta, pokud je to povoleno v nastavení hodinek). Nyní lze konfigurovat v nastavení na telefonu, které parametry jsou zahrnuty do výpočtu
* potvrzení a informační zprávy nyní fungují také na wear 2.0
* Přidána volba eSacharidy v nabídce

Nové pluginy
--------------------------------------------------
* PocTech aplikace jako zdroj glykémie
* Upravená Dexcom aplikace jako zdroj glykémie
* Oref1 plugin citlivosti

Různé
--------------------------------------------------
* Nové výsuvné okno k zobrazení všech pluginů. Pluginy označené jako viditelné jsou nadále ve vrchním pruhu (oblíbené)
* Přepracovaná Konfigurace a Cíle, přídány popisky
* Nová ikona aplikace
* Spousty vylepšení a oprav chyb
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see _Local alerts_ in settings)
* Možnost ponechat obrazovku trvale zapnutou
* Možnost zobrazovat upozornění jako Android notifikace
* Rozšířené filtrování (dovolující mít povolené SMB i více než 6 h po jídle) je podporováno Dexcom upravenou aplikací a xDripem v nativním módu.
