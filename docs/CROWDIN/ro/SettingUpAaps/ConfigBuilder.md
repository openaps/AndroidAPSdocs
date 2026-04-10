# Configurarea Sistemului (Config Builder)

În funcție de setările dumneavoastră puteți deschide Configuratorul de Sistem printr-o filă din partea de sus a ecranului **AAPS** sau prin meniul hamburger.

![Deschidere Configurarea sistemului](../images/ConfBuild_Open_AAPS30.png)

**Configuratorul de Sistem** este o secțiune în care puteți porni sau opri diferitele opțiuni modulare. În imaginea de mai jos, casetele din partea stângă (A) îți permit să selectați modulele pe care vreți să le acivați. În mod implicit, la deschiderea Configuratorului de Sistem, secțiunile sunt ascunse pentru a afișa doar modulele active. Apăsați pe săgeată (G) pentru a afișa toate opțiunile disponibile. Casetele din partea dreaptă (C) vă permit să vizualizați modulele active ca o filă (E) în **AAPS**. În cazul în care caseta din dreapta nu este activată, poți ajunge la funcție folosind meniul hamburger (D) din stânga sus a ecranului. Vedeți [Filă sau meniul Hamburger](#tab-or-hamburger-menu) de mai jos.

Când există setări suplimentare disponibile în cadrul modulului, poți face clic pe rotița dințată (B), care te va duce la setările specifice din secțiunea de preferințe.

![Casuta Configurare sistem şi rotita](../images/ConfBuild_ConfigBuilder.png)

(Config-Builder-tab-or-hamburger-menu)=

## Fila sau meniul principal

Cu bifa de sub simbol puteți stabili cum să deschideți secțiunea corespunzătoare a programului.

![Fila sau meniul principal](../images/ConfBuild_TabOrHH.png)

```{contents}
:backlinks: entry
:depth: 2
```

(ConfigBuilder_Profile)=

## Profil

Acest modul nu poate fi dezactivat deoarece este o parte de bază a **AAPS**.

Vedeți [Profilul dumneavoastră AAPS](../SettingUpAaps/YourAapsProfile.md) pentru o înțelegere de bază a ceea ce este în interiorul **Profilului** dumneavoastră.

(Config-Builder-insulin)=

## Insulină

![Tip de insulină](../images/ConfBuild_Insulin_AAPS30.png)

Selectați tipul de insulină pe care o utilizați.

Mai multe informații pentru a înțelege Profilul Insulinei așa cum este indicat în **AAPS** [aici](#AapsScreens-insulin-profile).

### Diferențe între tipurile de insulină

* Toate opțiunile 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' și 'Free-Peak Oref' au formă exponențială.
* Pentru insuline cu durata de 'Acțiune-Rapidă', 'Ultra-Rapidă' și 'Lyumjev', DIA este singura variabilă pe care o poți modifica, durata până la vârf este prestabilită. 
* Opțiunea Insulină Fără-Vârf (Free-Peak) permite să ajustați atât DIA cât și durata până la vârf; trebuie să fie folosită numai de utilizatori avansați care cunosc efectele acestor setări. 
* [Graficul curbei de insulină](#AapsScreens-insulin-profile) vă ajută să înțelegeți diferitele curbe ale insulinei.

#### Oref Acțiune-Rapidă

![Tip de insulină Oref Acțiune-Rapidă](../images/ConfBuild_Insulin_RAO.png)

* recomandat pentru Humalog, Novolog şi Novorapid
* DIA = cel puțin 5 ore
* Maximum vârf = 75 minute după injectare (fix, nemodificabilă)

#### Oref Insulină-UltraRapidă

![Tip de insulină Oref cu acțiune ultra rapidă](../images/ConfBuild_Insulin_URO.png)

* recomandat pentru FIASP
* DIA = cel puțin 5 ore
* Maximum vârf = 55 minute după injecție (fix, nemodificabil)

(Configurator-lyumjev)=

#### Lyumjev

![Tipul insulinei Lyumjev](../images/ConfBuild_Insulin_L.png)

* profil special de insulină pentru Lyumjev
* DIA = cel puțin 5 ore
* Maximum vârf = 45 minute după injectare (fix, nemodificabil)

#### Oref Fără-Vârf

![Tipul insulinei Oref Fără-Vârf](../images/ConfBuild_Insulin_FPO.png)

* Cu tipul de profil "0ref Vârf-Liber" puteți introduce individual durata până la vârf. Pentru a face acest lucru, apăsați pe rotița dințată pentru a intra în setările avansate.
* DIA este setată automat la 5 ore dacă în profil nu se specifică o durată mai mare.
* Acest profil este recomandat în situația în care se utilizează o insulină neacoperită în aplicație sau atunci când se utilizează un amestec de insuline.

(Config-Builder-bg-source)=

## Sursă valoare glicemie

Selectați sursa de monitorizare a glicemiei din sânge pe care o folosiți. Vedeți pagina [Sursă glicemie](../Getting-Started/CompatiblesCgms.md) pentru mai multe informații despre configurare.

![Configurați sursa glicemiilor](../images/ConfBuild_BG.png)

* [xDrip+](../CompatibleCgms/xDrip.md)
* [Glicemie NSClient](../CompatibleCgms/CgmNightscoutUpload.md) - doar dacă știți ce faceți, vedeți [Sursă glicemie](../Getting-Started/CompatiblesCgms.md).
* [MM640g](../CompatibleCgms/MM640g.md)
* Glimp - only version 4.15.57 and newer are supported
* [Build Your Own Dexcom App (BYODA)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
* [Poctech](../CompatibleCgms/PocTech.md)
* Tomato App for MiaoMiao device
* [Glunovo App](https://infinovo.com/) for Glunovo CGM system
* [Ottai](../CompatibleCgms/OttaiM8.md)
* [Syai Tag](../CompatibleCgms/SyaiTagX1.md)
* Random BG: Generates random BG data (Demo mode only)

## Smoothing

![Smoothing](../images/ConfBuild_Smoothing.png)

See [Smoothing blood glucose data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

(Config-Builder-pump)=

## Pump

Select the pump you are using. See [Compatible pumps](../Getting-Started/CompatiblePumps.md) page for more setup information.

![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS33.png) ![Config Builder Pump selection](../images/ConfBuild_Pump_AAPS33-2.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
* Omnipod for [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash for [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* [Equil 5.3](../CompatiblePumps/Equil5.3.md)
* Virtual pump: open loop - **AAPS** suggestions only 
  * as you make you first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * for pump which doesn't have any driver yet

## Detectare Sensibilitate

Select the type of sensitivity detection. For more details of different designs please [read on here](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

You can view your sensitivity on the homescreen in an [additional graph](#AapsScreens-section-g-additional-graphs). You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](#objectives-objective8) in order to let Sensitivity Detection/[Autosens](#Open-APS-features-autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Setări absorbție

If you use Oref1 with **SMB** you must change **min_5m_carbimpact** to 8. The value is only used during gaps in **CGM** readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause **AAPS** to decay COB. At times when [carb absorption](../DailyLifeWithAaps/CobCalculation.md) can't be dynamically worked out based on your blood's reactions it inserts a default decay to your carbs. Basically, it is a failsafe.

(Config-Builder-aps)=

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA 
  * Advanced Meal Assist: older algorithm not recommended anymore.
  * In simple terms, the benefits are after you give yourself a meal bolus, the system can high-temp more quickly IF you enter carbs reliably.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus: most recent algorithm recommended for all users.
  * In contrast to AMA, SMB does not use temporary basal rates to control glucose levels, but mainly small **Super Micro Boluses**.
  * Note : It is recommended to use this algorithm from the beginning, even though you will not actually get SMBs delivered until [Objective 9](#objectives-objective9).

If switching from AMA to SMB algorithm, *min_5m_carbimpact* must be changed manually to **8** (default value for SMB) in [Preferences > Sensitivity detection > Sensitivity Oref1 settings](../SettingUpAaps/Preferences.md).

## Buclă

This module should not be disabled as it is a core part of **AAPS**.

## Constrângeri

### Obiective

**AAPS** are un program de învățare (o serie de obiective) pe care trebuie să îl parcurgeți pas cu pas. Acesta ar trebui să vă ghideze să configurați în siguranță un sistem de buclă închisă. Parcurgerea programului de instruire garantează că ați setat totul corect și înțelegeți exact face sistemul. Numai așa puteți avea încredere în sistem.

Vedeți pagina [Obiective](../SettingUpAaps/CompletingTheObjectives.md) pentru mai multe informații.

## Synchronization

În această secțiune, puteți alege dacă/unde doriți **AAPS** să trimită datele dumnevoastră.

### NSClient sau NSClientV3

Poate fi folosit ca un [server de raportare](../SettingUpAaps/SettingUpTheReportingServer.md) și/sau pentru [monitorizare de la distanță](../RemoteFeatures/RemoteMonitoring.md), [control de la distanță](../RemoteFeatures/RemoteControl.md).

Vedeți [Sincronizarea cu serverul de raportare](#SetupWizard-synchronization-with-the-reporting-server-and-more) pentru a te ajuta să alegeți între NSClient (v1) și NSClientV3.

### Tidepool

Poate fi folosit ca un [server de raportare](../SettingUpAaps/SettingUpTheReportingServer.md).

Vedeți [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Folosit pentru **trimite ** date, cum ar fi tratamente pentru xDrip+.

### Open Humans

Vedeți [Open Humans](../SupportingAaps/OpenHumans.md).

### Ceas

Monitorizează și controlează **AAPS** folosind ceasul cu Android WearOS (vedeți [pagina Afișaj Ceas](../WearOS/WearOsSmartwatch.md)).

### Samsung Tizen

Transmitere de date către aplicația Samsung G-Watch Wear (TizenOS).

### Garmin

Conexiune la dispozitivul Garmin (Fenix, Edge…)

## Tratamente

În fila Tratamente (Treat) puteți vedea tratamentele care au fost încărcate în Nightscout. Dacă doriți să modificați sau să ștergeți date introduse (spre exemplu când ați mâncat mai puțini carbohidrați decât ați estimat), selectați 'Ștergeți' și scrieți noua valoare (schimbați și ora, dacă este necesar) prin butonul carbohidrați din ecranul principal<0>.</p> 

## General

### Privire de ansamblu

Acesta este [ecranul principal](#AapsScreens-the-homescreen) din **AAPS** și nu poate fi dezactivat.

#### Afișați câmpul pentru note în dialogurile de tratamente

Alegeți dacă vreți sau nu să aveți câmpul pentru note atunci când introduceți tratamente.

#### Lumini de stare

Alegeți dacă doriți să aveți [lumini de stare ](#Preferences-status-lights) în privirea de ansamblu pentru vârsta canulei, vârsta insulinei, vârsta senzorului, vârsta bateriei, nivelul rezervorului sau nivelul bateriei. Când nivelul de avertizare este atins, culoarea luminii de stare va comuta la galben. La atingerea nivelului critic culoarea luminii de stare va fi roșie.

#### Setări avansate

**Livrează parțial bolusul calculat de Asistentul Rapid **: Când utilizează SMB (super micro bolus), multe persoane vor să nu primească 100% bolusul de insulină necesar, ci doar parțial (spre exemplu 75 %) și permit SMB prin UAM (unattended meal detection = detectarea automată a mesei) să facă restul. În această setare, puteți alege o valoare implicită pentru procentajul cu care asistentul de bolus ar trebui să calculeze. Dacă în această setare valoarea implicită este stabilită la 75% și ar trebui să bolusați 10u, Asistentul va propune un bolus de doar 7,5 unități.

**Activați funcționalitatea super bolus în asistent ** (Este diferită de *super micro bolus*!): Utilizați cu precauție și nu activați până nu știți cu adevărat ce face. Practic, bazala pentru următoarele două ore este adăugată la bolus și se activează în următoarele două ore o bazală temporară zero. **Funcțiile buclei AAPS vor fi dezactivate - așa că utilizați cu grijă! Dacă utilizați SMB funcțiile de buclă AAPS vor fi dezactivate în funcție de setările dumneavoastră din ["Maximul de minute de bazală pentru a limita SMB la"](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), dacă nu utilizați SMB funcțiile de buclă vor fi dezactivate pentru două ore.** Detalii despre super bolus pot fi găsite [aici](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

(Config-Builder-actions)=

### Acțiuni

O filă care oferă mai multe butoane pentru a întreprinde [acțiuni](#screens-action-tab) în **AAPS**.

### Automatizare

O filă pentru gestionarea [Automatizărilor](../DailyLifeWithAaps/Automations.md), disponibilă începând cu [Obiectivul 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### Comunicator SMS

Permite aparținătorilor să controleze de la distanță anumite funcții ale **AAPS**prin SMS, vezi [Comenzi SMS](../RemoteFeatures/SMSCommands.md) pentru mai multe informații privind configurarea.

### Mâncare

Afișați presetările alimentare definite în baza de date Nightscout, vezi [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) pentru mai multe informații despre configurare.

Notă: Intrările nu pot fi utilizate în calculatorul **AAPS**. (Numai vizualizare)

(Config-Builder-wear)=

### Ceas

Monitorizați și controlați AAPS folosind ceasul Android Wear (vedeți [pagina Afișaj Ceas](../WearOS/WearOsSmartwatch.md)). Utilizați setările (rotiță dințată) pentru a stabili variabilele care ar trebui luate în considerare la calcularea bolusului dat de ceas (spre exemplu tendința de 15 minute, COB...).

If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### Autotune

You can enable Autotune, see [here](../AdvancedOptions/Autotune.md).

### Maintenance

Access this tab to export / import settings.

### Configurarea Sistemului (Config Builder)

This current tab.