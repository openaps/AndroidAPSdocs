# Vzdálené ovládání AAPS
Existují čtyři vysoce účinné nástroje pro vzdálené řízení **AAPS**:

1) [SMS commands](RemoteControl_SMS-Commands) (follower phone can be either Android or iOS), 2) [AAPSClient](RemoteControl_aapsclient) (follower phone is Android) 3) [Nightscout](RemoteControl_nightscout) (Android, iOS or other computer/device).  
4) [Smartwatches](RemoteControl_smartwatches) (Android)

The first three are mostly appropriate for caregivers/parents, but smartwatches are very useful for caregivers/parents **and** for adults with diabetes themselves.

![image](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

(RemoteControl_SMS-Commands)=

## 1) SMS příkazy

See the dedicated [SMS Commands](../RemoteFeatures/SMSCommands.md) page.

(RemoteControl_aapsclient)=
## 2) AAPSClient

_Všimněte si, že **NSClient** byl nahrazen **AAPSClient** pro AAPS verze 3.2 a vyšší. Pro více informací zkontrolujte poznámky k verzi._

Pro verze **AAPS**, které jsou starší než AAPS 3.2, pokud máte Android telefon pečovatele/rodiče, můžete si aplikaci [**AAPSClient**](https://github.com/nightscout/AndroidAPS/releases/) přímo stáhnout a nainstalovat. **AAPSClient** vypadá velmi podobně jako samotná aplikace **AAPS** a poskytuje tak pečovateli nástroj na vzdálené ovládání **AAPS**.

![NSCLIENT_ 2024-05-17 134512](../images/6c66a27c-21d7-4c43-ac66-001669c0634f.png)


Existují 2 verze apk, které lze stáhnout [zde](https://github.com/nightscout/AndroidAPS/releases/), **AAPSClient** & **AAPSClient2**, mezi kterými je drobný, ale důležitý rozdíl, jak je vysvětleno níže.

**AAPSClient** můžete nainstalovat do jednoho telefonu nebo do více telefonů sledujících osob (např. telefonu sledujícího rodiče 1 a telefonu sledujícího rodiče 2), aby měli oba pečovatelé přístup a vzdálené ovládání telefonu pacienta **AAPS**.

Pokud pečovatel potřebuje druhou kopii **AAPSClient** ke vzdálenému ovládání dalšího pacienta s Nightscout účtem, může kromě **AAPSClient** nainstalovat navíc **AAPSClient2**. **AAPSClient 2** umožňuje jedinému poskytovateli péče nainstalovat aplikaci **AAPSClient** dvakrát na stejný telefon pečovatele, aby měl současný přístup a ovládání k dvěma různým pacientům.

Chcete-li stáhnout **AAPSClient**, přejděte na [tuto stránku](https://github.com/nightscout/AndroidAPS/releases/) a klepněte na soubor **“app-AAPSClient-release_x.x.x.x”** (může to být novější verze než ta zobrazená na snímku níže):

![image](../images/remote_control_and_following/AAPSClient_download_02.png)

Pak jděte na _stáhnout_ na vašem počítači. On Windows, -downloads_ will show the right hand ribbon:

![image](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

Po stažení klikněte na _zobrazit ve složce_, abyste nalezli soubor.

**AAPSClient** apk může být buď:

Zkopírován do telefonu pečovatele pomocí USB kabelu nebo přetáhnut do adresáře Google drive, připojeného do telefonu pečovatele. Následně klikněte na soubor "app_AAPSClient-release. apk".

### Nastavení synchronizace - AAPSClient a AAPS (pro verzi 3.2.0.0 a vyšší)

Once __AAPSClient__ apk is installed on the follower phone, the user must ensure their ‘Preferences’ in Config Builder are correctly set up and aligned with __AAPS__ for Nightscout 15 (see Release Notes [here](../Maintenance/UpdateToNewVersion)). Níže uvedený příklad poskytuje pokyny pro synchronizaci pro NSClient a NSClientV3 pomocí Nightscout15, ale jsou k dispozici i jiné možnosti s __AAPS__ (například xDrip+).

V rámci „Synchronizace“ v „Config builderu“ může uživatel zvolit synchronizační možnosti pro __AAPS__ i sledující telefon:

- Option 1: NSClient (also known as ‘v1’) - which synchronizes the user’s data with Nightscout; or

- Option 2: NSClientV3 (also referred to as ‘v3’).- which synchronizes the user’s data with Nightscout using v3 API.

![AAPS1_Screenshot 2024-05-17 133502](../images/4bdfed7e-3b2f-4fe8-b6db-6fcf0e5c7d98.png)

Uživatel musí zajistit, aby __oba__ telefony AAPS i AAPS Client byly synchronizovány pomocí stejné volby a to buď v1 nebo v3:

Možnost 1: v1 pro oba telefony:

- Vložte adresu vašeho Nightscoutu

- Zadejte své API heslo

Možnost 2: v1 pro oba telefony:

- Zadejte Nightscout URL na záložce NSClientV3

- Zadejte svůj přístupový token NS na záložce „Config Builder“. Následujte prosím poznámky [zde](https://nightscout.github.io/nightscout/security/#create-a-token)

Pokud zvolíte Websockety (což je volitelné), ujistěte se, že jsou aktivovány nebo deaktivovány pro oba telefony, jak __AAPS'__, tak __AAPSClienta__. Aktivace Websockets v __AAPS__ a ne v __AAPSClient__ (nebo naopak) způsobí, že __AAPS__ přestane fungovat. Povolením websockets umožníte rychlejší synchronizaci s Nightscoutem, ale může to vést k větší spotřebě baterie.

![WB2_Screenshot 2024-05-17 140548](../images/d9a7dc5-b3ea-4bf3-9286-313f329b1966.png)


Uživatelé by měli zajistit, že jak __AAPSClient__, tak __AAPS__ zobrazují „připojeno“ na záložce „NSClient" a že lze přepnout 'Profil' nebo 'Dočasný cíl' správně aktivovat v __AAPS__ po jejich výběru v __AAPSClient__.

Uživatelé by měli také zajistit, že jsou sacharidy jsou zaznamenány v obou aplikacích na kartě „Ošetření“, jinak by to mohlo naznačovat chybu v uživatelském nastavení.

### Troubleshooting 'NS access token' configuration issues

The precise 'NS access token' configuration may differ depending upon whether your Nightscout provider is a paid for hosted site or not.

If you are struggling with **AAPS** v3 to accept the 'NS access token' and using a paid for hosted Nightscout site, you may wish to first liaise with your Nightscout provider on how to resolve the 'NS access token' difficulties. Otherwise, please reach out to the **AAPS** group but please double check that you have correctly followed the notes before doing so [here](https://nightscout.github.io/nightscout/security/#create-a-token).

### Vlastnosti AAPSClienta zahrnují:

| Tab / Hamburger     | Features                                                                                                                                                                                              |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Action** Tab      | - Profile Switch <br>- Temp Target<br>- BG Check<br>- CGM Sensor Insert<br>- Note<br>- Exercise<br>- Announcement<br>- Question?<br>- History Browser |
| **Food** Tab        |                                                                                                                                                                                                       |
| **Treatments** Tab  | - Check Treatments delivered including bolus and carbs entered                                                                                                                                        |
| **Maintenance** Tab | - Export and Import Settings                                                                                                                                                                          |
| **Profile** Tab     | - Creating new profile<br>- Profile switch                                                                                                                                                      |

**AAPSClient** umožňuje pečovateli provádět vzdáleně všechna nastavení, která umožňuje **AAPS** (s výjimkou posílání bolusů), prostřednictvím mobilních dat nebo internetu. Hlavními výhodami **AAPSClient** jsou rychlost a jednoduchost, s jakou mohou pečovatelé/rodiče použít ke vzdálenému ovládání **APPS**. __AAPSClient__ _může_ být mnohem rychlejší než posílání SMS příkazů, které vyžadují ověření. Příkazy zadané v **AAPSClient** jsou nahrány do Nightscoutu.

Remote control through **AAPSClient** is only recommended if your synchronization is working well (_i.e._ you don’t see unwanted data changes like self-modification of TT, TBR etc) see [release notes for Version 2.8.1.1](#important-hints-2-8-1-1) for further details.

### AAPSClient a možnosti chytrých hodinek

Chytré hodinky mohou být velmi užitečným nástrojem pro správu **AAPS** vašeho dítěte. K dispozici je několik možností. Je-li na telefonu rodičů nainstalován **AAPSClient**, lze na kompatibilní chytré hodinky připojené k rodičovskému telefonu nainstalovat [**AAPSClient WearOS aplikaci**](https://github.com/nightscout/AndroidAPS/releases/). Na hodinkách pak bude zoubrazována aktuální glykémiie, stav smyčky, a bude možné zadávat sacharidy, dočasné cíle a změny profilu. Z aplikace WearOS ale nebude možné posílat bolusy. You can read more about Smartwatches [here](#4-smartwatches).

(RemoteControl_nightscout)=
## 3) Nightscout

Obdobně jako je Nightscout je serverem v cloudu, existuje také vyhrazená **Nightscout** aplikace, kterou lze stáhnout přímo z App Store na vašem iPhone. If you have an Android follower phone, there is not a dedicated Nightscout app and it is better to use [**AAPSClient**](#2-aapsclient), or, if you only want to follow, and not send treatments you can download and install the [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch) app from the Playstore.

Jakmile máte na telefonu nainstalovanou **Nightscout** aplikaci na vašem iPhone, otevřete aplikaci, následujte instrukce a zadejte Nightscout adresu (viz níže vlevo). Přesná podoba se může lišit v závislosti na tom, jak je hostován Váš NightScout. (_např._ http://youraddresshere.herokuapp.com). Poté zadejte váš Nightscout API secret (viz níže vlevo). Pokud nejste požádáni o vložení API hesla, pak ho musíte zadat po kliknutí na zámek v horní části aplikace:

![image](../images/remote-control-24.png)

Více informací o nastavení je k dispozici přímo z [Nightscout](https://nightscout.github.io/nightscout/discover/)

When you first log in, you will have a very simple display. Customize the display options, by selecting the “hamburger” in the top right and scrolling down:

![image](../images/remote-control-25.png)

Posuňte se dolů na „Nastavení“. Možná si budete přát změnit "měřítko" na "lineární", protože výchozí zobrazení glykémie je logaritmické, a pod "vykreslovat bazál" vyberte "výchozí" tak, aby se podávané bazály zobrazily.

![image](../images/remote-control-25b.png)

Select your desired options. Uncheck alarms if you use an alternative app for alarms.

![image](../images/remote-control-26.png)

Pokračovat v posouvání dolů, dokud se nedostanete k „zobrazit pluginy“.

Musíte se ujistit, že je zaškrtnuta možnost "Portál péče" a můžete také vybrat k zobrazení další hodnoty (nejužitečnější jsou: IOB, portál péče, pumpa, stáří kanyly a inzulínu, bazální profil a OpenAPS).

Důležité je nyní kliknout na „uložit“ v dolní části obrazovky, aby se tyto změny projevily.

![image](../images/remote-control-27.png)

Po stisknutí tlačítka "Uložit" se aplikace vrátí na hlavní obrazovku Nightscout, která bude vypadat takto:

1. Current glucose value
2. Information on AAPS system status - touch the individual tabs on the screen to display more detail. Add or remove these display options using hamburger menu.
3. Recent glucose trace with treatments (carbs, boluses) displayed
4. Longer-term glucose trace
5. "Hamburger" menu for setting display options, generating reports, editing profiles and Nightscout admin tools
6. "**+**" menu for entering treatments to send to AAPS.
7. Select different time period to display
8. Basal insulin profile
9. Green line = historical glucose Blue lines = predicted glucose

![image](../images/remote-control-28.png)

Podívejte se podrobněji do levého horního menu aplikace Nightscout:

1. Careportal retrospective edit
2. Turn on/off alarms
3. Hamburger - for setting preferences
4. Careportal - Log treatment - to send changes to AAPS

![Horní lišta Nightscout](../images/remote-control-29.png)

Na této obrazovce je na šedých kartách k dispozici velké množství informací o stavu **AAPS** systému (a ještě více informací se zobrazí při klepnutí na záložku):

1. 5min glucose trend
2. Bolus wizard preview
3. Press on Basal to see your current profile and basal information
4. Time since latest CGM reading in AAPS
5. **Pump**: insulin, battery % and when AAPS last connected to it
6. Last time AAPS refreshed - if this is longer than 5 mins it can indicate a connection issue between AAPS phone and pump/CGM
7. Press on IOB to see split of basal and bolus insulin
8. Insulin age in reservoir
9. Stáří kanyly
10. Battery status of AAPS phone
11. Size of your database. If it gets too full (DIY Nightscout only - hosted services just ignore) you may start having connectivity issues. You can delete data to reduce the size of the number in the Admin tools menu (via hamburger).

![image](../images/remote-control-30.png)

![image](../images/remote-control-31.png)

Press "refresh" at the bottom of the page to close the popup.

### Odesílání ošetření prostřednictvím Nightscout aplikace do AAPS

K nastavení odesílání ošetření z **Nigthscout** aplikace do **AAPS**, přejděte na AAPS telefonu do aplikace **AAPS** a otevřete záložku **AAPSClient**. Otevřete tříbodové menu na pravé straně a vyberte položku AAPSClient Nastavení- synchronizace a vyberte v menu příslušné možnosti. Vyberte příjem jednotlivých příkazů (dočasných cílů atd.) a také synchronizaci profilů. Pokud se zdá, že se data nesynchronizují, přejděte zpět na záložku AAPSClient, zvolte „plnou synchronizaci“ a počkejte několik minut.

Nightscout na Vašem iPhone má všechny funkce jako Nightscout na vašem PC. Umožňuje vám posílat množství příkazů do **AAPS** aplikace, ale neumožňuje posílat bolusy.

### Zrušení negativního inzulínu, aby se zabránilo opakování hypoglykémií

Ačkoli nemůžete přímo posílat inzulínový bolus, můžete prostřednictvím Nightscout "oznámit" inzulín jako "korekční bolus", i když není doručen. Protože AAPS nyní bere tento falešný bolus v úvahu, oznámení podaného inzulínu ve skutečnosti zajišťuje, že se AAPS chová _méně agresivně_. Díky tomu se hodí ke zručení efektu negativního inzulínu a tak předcházet nízkým glykémiím v případě, že je profil příliš silný (na příklad z důvodu předchozího svičení). Toto si budete chtít zkontrolovat za přítomnosti **AAPS** telefonu, pokud se liší vaše nastavení **Nightscoutu**.

![24-10-23, zrušení negativního inzulinu NS](../images/0af1dbe4-8aca-466b-816f-8e63758208ca.png)


Některé z nejužitečnějších **Nightscout** příkazů je popsáno v níže uvedené tabulce.

#### Příkazová tabulka Nightscoutu

| Most commonly used treatments                             | Function, example of when command is useful                                                                                                                                                                                                               |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Correction bolus**                                      | Allows you to announce **but <u>not</u> bolus** insulin.<br>Very useful for cancelling negative insulin to prevent a hypo,<br>for example in the middle of the night, if the profile has been too strong.                                     |
| **Carb correction**                                       | Announce carbs now                                                                                                                                                                                                                                        |
| **Temporary Target**<br>**Temporary Target cancel** | Allows temp targets to be set and cancelled.<br>Note that cancelling does not always work,<br>in this instance you can set a new target for a short time period (2 min)<br>which will then revert back to the normal target afterwards. |
| **Přepínání profilu**                                     | Allows you to check the current profile which is running,<br>and switch to another profile, either permanently,<br>or for a defined length of time (mins).                                                                                    |



| Less widely used commands                                                                                                           | Function, example of when command is useful                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **BG check**                                                                                                                        | Send a BG check to AAPS.                                                                                                                                                 |
| **Snack bolus**<br>**Meal bolus**<br>**Combo bolus**                                                                    | Can announce carbs (plus proteins and fat)<br> from 60 min in the past to 60 min in the future.<br>Combo bolus allows insulin announcement at the same time. |
| **Announcement**<br>**Note**<br>**Question**<br>**Exercise**<br>**Open APS offline**<br>**DAD alert** | Add these info notes (DAD = diabetic dog alert).                                                                                                                         |
| **Pump site change**<br>**Battery change**<br>**Insulin cartridge change**                                              | Announces these pump changes.                                                                                                                                            |
| **CGM sensor start**<br>**CGM sensor insert**<br>**CGM sensor stop**                                                    | Announces these CGM changes.                                                                                                                                             |
| **Temp basal start**<br>**Temp basal end**                                                                                    | Most useful in open looping.                                                                                                                                             |

Přečtěte si více o možnostech **Nightscoutu** [zde](https://nightscout.github.io/)

### Tipy, jak nejlépe využít aplikaci Nightscout

1). Pokud se na stránce „zaseknete“ a chcete znovu zobrazit hlavní obrazovku, stačí kliknout na tlačítko „obnovit“ (dole uprostřed) a to vás dostane zpět na domovskou stránku **Nightscout** s grafem glykémie.

Chcete-li zobrazit aktuální profil, který běží na telefonu, můžete stisknout různé ikony na obrazovce nad grafem. Více informací (aktuální sacharidový poměr, citlivost, časové pásmo atd.) můžete vidět po stisknutí tlačítka "basal" a "OpenAPS" a zobrazíte informace o profilu, aktuálním cíli atd. Také lze sledovat stav baterie telefonu i inzulínové pumpy. BWP poskytuje informace o tom, co se podle algoritmu stane v budoucnu, vzhledem k hodnotám IOB a COB.

#### Ostatní ikony v nabídce: co znamená tužka (editace)?

Můžete (technicky) použít editační tužku pro přesunutí nebo odstranění bolusu nebo korekce z posledních 48 hodin.

Více o tom je [zde](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Ačkoli to může být použito ke smazání oznámených (ale ne bolusovaných) sacharidů, v praxi to nefunguje dobře ve spolupráci s **AAPS** a doporučujeme takové provádět přímo v **AAPS** aplikaci.

(RemoteControl_smartwatches)=
## 4) Chytré hodinky

### Option 1) Controlling AAPS from a Wear OS Watch

![Wear Remote 1](../images/Wear_Remote1.png)

Once you have [setup **AAPS** on your watch](../WearOS/BuildingAapsWearOS.md), extensive details about the smartwatch faces and their functions can be found in [Operation of Wear AAPS on a Smartwatch](../WearOS/WearOsSmartwatch.md).

Na hodinkách je možné spustit následující funkce:

* set a temporary target

* use the bolus calculator (calculation variables can be defined in settings on the phone)

* administer eCarbs

* administer a bolus (insulin + carbs)

* watch settings

* status

* check pump status

* check loop status

* check and change profile, CPP (Circadian Percentage Profile = time shift + percentage)

* show TDD (Total daily dose = bolus + basal per day)

* Remote bolus where the caregiver and T1D child are in different locations (this is possible for the **AAPS** watch and **AAPS** phone providing both devices are connected to the network)

#### Communication from caregivers to the watch using other apps (like WhatsApp)

It is possible to add additional apps to the watch, like WhatsApp, for messaging (for example) between caregivers and kids. Je důležité mít s telefonem propojený pouze JEDEN Google účet, jinak hodinky nebudou přenášet data. Abyste mohli mít účet Samsung, musí vám být alespoň 13 let, a účet musíte mít nastavený se stejnou e-mailovou adresou, jako je použita v Android telefonu.

A video explaining getting WhatsApp setup for messaging on the Galaxy 4 watch (you can’t get full functionality of WhatsApp) is shown [here](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

Making adjustments in both the **Galaxy wearable** app on the **AAPS** phone and the watch makes it possible for WhatsApp messages to announce with a slight vibration, and also for the WhatsApp message to display over the existing watchface.

### Možnost 2) **AAPS** na hodinkách, pro dálkové ovládání **AAPS** v telefonu

Podobně jako můžete používat sledovací telefon s AAPSClient, Nightscout nebo SMS příkazy (odkaz na oddíly), chytré hodinky je možné použít ke vzdálenému ovládání **AAPS** a poskytnutí kompletní dat profilu. Klíčovým rozdílem oproti používání sledovacího telefonu je, že chytré hodinky jsou s **AAPS** propojeny přes bluetooth a není vyžadován ověřovací kód. As a side-note, if both smartwatch and **AAPS** phone linked by bluetooth are also on a Wi-Fi/Cellular data network, the watch will also interact with the **AAPS** phone, giving a longer range of communication. To zahrnuje vzdálené podání bolusu, kde pečovatel s **AAPS** hodinkami a dítě s T1D (s **AAPS** telefonem) jsou na různých místech, což může být užitečné v situacích, kdy je dítě s T1D ve škole.

Dálkové ovládání pomocí chytrých hodinek je proto často užitečné v těchto situacích:

a)  **AAPSClient**/Nightscout/**SMS** příkazy nemohou fungovat; nebo

b) uživatel se chce vyhnout potřebě autentizace (jak je požadováno pro sledovací telefon se zadáním dat, výběrem TT nebo zadáním sacharidů).

Chytré hodinky musí mít systém **Android wear** (ideálně 10 nebo vyšší), aby mohl ovládat **AAPS**. Please check the technical specifications of the watch, and check the [Phones page](../Getting-Started/Phones.md). Pokud si nejste jistí, vyhledejte si informace ve v **AAPS** skupinách na Facebook/Discord.

Konkrétní návody jak nastavit **AAPS** na Samsung Galaxy Watch 4 (40 mm) jsou uvedeny níže. Hodinky [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0) jsou také oblíbenou volbou. If you have experience of setting up a different smartwatch which you think would be useful to others, please add it into these pages [edit the documentation](../SupportingAaps/HowToEditTheDocs.md) to share your findings with the wider **AAPS** community.

### Možnost 3) AAPSClient na hodinkách ke vzdálenému řízení **AAPS** na telefonu

![Wear Remote 2](../images/Wear_Remote2.png)

Software pro hodinky, **AAPSClient** Wear apk, je možné stáhnout přímo z [Github](https://github.com/nightscout/AndroidAPS/releases/).

Pro stažení softwaru klikněte na požadovanou aplikaci (na tomto snímku obrazovky by fungoval buď **wear-aapsclient-release_3.2.0.** nebo **wear-aapsclient2-release_3.2.0.**; existují dvě verze v případě, že potřebujete druhou kopii pro hodinky druhého pečovatele):

![image](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


"Uložte" nebo "Uložte jako" stažený soubor na vhodné místo na vašem počítači:


![image](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






The **AAPSClient** wear apk can be transferred to your phone and side-loaded onto the watch in the same way as the **AAPS** Wear app, as detailed in [Transferring the Wear app onto your AAPS phone](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)  









