# Vzdálené ovládání AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

Existují čtyři vysoce účinné nástroje pro vzdálené řízení **AAPS**:

1) [SMS příkazy](#RemoteControl_SMS-Commands) (telefon sledujícího může mít Android nebo iOS), 2) [AAPSClient](#RemoteControl_aapsclient) (telefon sledujícího má Android; verze pro iPhone se vyvíjí) 3) [Nightscout](#RemoteControl_nightscout) (Android, iOS nebo jiný počítač/zařízení), hlavně pro sledování: viz poznámku o [ovládání z klienta](#client-master-control) v této části.  
4) [Chytré hodinky](#RemoteControl_smartwatches) (Android)

První tři možnosti jsou vhodné hlavně pro pečovatele/rodiče, ale chytré hodinky jsou velmi užitečné pro pečovatele/rodiče **i** pro dospělé s diabetem.

![obrázek](../images/remote_control_and_following/AAPS_overview_remote_control_01.png)

(RemoteControl_SMS-Commands)=

## 1) SMS příkazy

Viz samostatnou stránku [SMS příkazy](../RemoteFeatures/SMSCommands.md).

(RemoteControl_aapsclient)=
## 2) AAPSClient

**AAPSClient** vypadá velmi podobně jako samotné **AAPS** a nabízí pečovateli stejné obrazovky a tlačítka pro vzdálené posílání příkazů do **AAPS**:

![Domovská obrazovka AAPSClient](../images/v4/AapsClient/aapsclient_home.png)

(remotecontrol-aapsclient-versions)=
### O AAPSClient, AAPSClient2 a AAPSClient3

Klientská aplikace má 3 verze: **AAPSClient**, **AAPSClient2** a **AAPSClient3**. Fungují stejně. Jediný rozdíl je v tom, že je lze nainstalovat vedle sebe na stejný telefon sledujícího.

Pečovatel, který sleduje jednu osobu, potřebuje jen **AAPSClient**. Pro sledování a vzdálené ovládání druhé osoby (s vlastním webem **Nightscout** a vlastním telefonem s **AAPS**) nainstalujte také **AAPSClient2** a pro třetí osobu **AAPSClient3**. Každá aplikace se nastavuje a [páruje](#aapsclient-pairing-with-the-master) samostatně, s webem **Nightscout** a telefonem s **AAPS** osoby, kterou sleduje.

Aby se aplikace daly rozlišit, mají některé prvky jinou barvu: žlutou u **AAPSClient**, modrou u **AAPSClient2** a zelenou u **AAPSClient3**. Jsou to ikona aplikace, pozadí widgetu a část se stavem **AAPS** na domovské obrazovce aplikace. <br/> Poznámka: průhlednost pozadí widgetu lze nastavit v konfiguraci widgetu. Při nízké neprůhlednosti je barva špatně vidět.

![Barvy widgetu a části se stavem u AAPSClient, AAPSClient2 a AAPSClient3](../images/remote_control_and_following/AAPSClient_and_AAPSClient2.png)

### Stažení a instalace

**AAPSClient** můžete nainstalovat do jednoho telefonu nebo do více telefonů sledujících osob (např. telefonu sledujícího rodiče 1 a telefonu sledujícího rodiče 2), aby měli oba pečovatelé přístup a vzdálené ovládání telefonu pacienta **AAPS**.

Pro stažení **AAPSClient** přejděte do [repozitáře na GitHubu](https://github.com/nightscout/AndroidAPS/releases/) a klikněte na soubor **„app-AAPSClient-release_x.x.x.x“** (může jít o novější verzi, než je na snímku obrazovky níže):

![obrázek](../images/remote_control_and_following/AAPSClient_download_02.png)

Pak na počítači otevřete _stažené soubory_. On Windows, _downloads_ will show in the right hand ribbon:

![obrázek](../images/remote_control_and_following/AAPSClient_download_folder_03.png)

Po stažení klikněte na _zobrazit ve složce_, abyste nalezli soubor.

**AAPSClient** apk může být buď:

Přenesen USB kabelem do telefonu sledujícího; nebo Přetažen do složky na Disku Google a potom přidán do telefonu sledujícího klepnutím na soubor „app-AAPSClient-release“.

Pokud potřebujete **AAPS** pro sebe a **AAPSClient** pro sledování někoho jiného, musíte si **AAPSClient** sestavit sami, místo stažení z repozitáře na GitHubu, jak je popsáno výše. Důvodem je, že na jeden telefon nelze nainstalovat **AAPS** i **AAPSClient**, pokud jsou podepsány jiným klíčem. <br/> Pro vlastní sestavení **AAPSClient** postupujte stejně jako při [běžném sestavení AAPS](../SettingUpAaps/BuildingAaps.md). Na stránce **Generate signed App Bundle or APK** vyberte **aapsclientRelease** místo **fullRelease**.

Stejné pravidlo platí, když na jeden telefon sledujícího instalujete více klientských aplikací (**AAPSClient**, **AAPSClient2**, **AAPSClient3**): všechny musí být podepsány **stejným klíčem**. Jinak Android odmítne nainstalovat druhou z nich (chyba `INSTALL_FAILED_DUPLICATE_PERMISSION`).

### Synchronizace: nastavení AAPSClient a AAPS

Once the __AAPSClient__ apk is installed on the follower phone, make sure **NSClientV3** is set up the same way on both phones for Nightscout 15 (see the [update notes](../Maintenance/UpdateToNewVersion.md)). Příklad níže ukazuje nastavení synchronizace s NSClientV3 a Nightscoutem 15; v __AAPS__ jsou k dispozici i jiné zdroje dat (např. xDrip).

V **Konfigurace** > **Komunikace** uživatel synchronizuje svá data s Nightscoutem přes __NSClientV3__ (s API v3), nastavený stejně v __AAPS__ i v telefonu sledujícího.

![Konfigurace > Komunikace s vybraným NSClientV3](../images/v4/Configuration/configuration_communication.png)

Uživatel musí zajistit, aby byly telefon s AAPS i telefon s AAPSClient synchronizované __oba__, tím že na každém nastaví NSClientV3. Na telefonu sledujícího to místo toho jde udělat naskenováním QR kódu, který zobrazí **AAPS**, viz [Párování AAPSClient s AAPS](#remotecontrol-pairing) níže:

- Zadejte **URL Nightscoutu** v **Nastavení** NSClientV3

- Ve stejném nastavení zadejte **Přístupový token Nightscoutu**. Postupujte prosím podle pokynů [zde](https://nightscout.github.io/nightscout/security/#create-a-token). Na telefonu s **AAPS** použijte **admin token**: s ním **AAPS** vytvoří vlastní token pro každý telefon sledujícího.

- Zapněte **Použít websockety** na **obou** telefonech. Na telefonu s **AAPS** jsou websockety pro vzdálené ovládání **nutné**: bez nich **AAPS** nemůže přijímat příkazy z **AAPSClient**. Na obou telefonech také zrychlují synchronizaci, za cenu mírně vyšší spotřeby baterie.

![Nastavení > NSClientV3 s URL Nightscoutu, přístupovým tokenem Nightscoutu a Použít websockety](../images/preferences/settings_nsclient.png)


Uživatel by měl ověřit, že __AAPSClient__ i __AAPS__ ukazují na obrazovce **NSClientV3** každého telefonu stav „připojeno“. V tuto chvíli **AAPSClient** sleduje **AAPS** (glykémie, ošetření, profil), ale zatím ho nemůže ovládat: spárujte oba telefony podle popisu níže.

(remotecontrol-pairing)=
### Párování AAPSClient s AAPS (vzdálené ovládání)

Od **AAPS** verze 4 ovládá **AAPSClient** aplikaci **AAPS** přes zabezpečené **spárované** spojení. Samotná synchronizace nestačí: dokud telefony nejsou spárované, **AAPSClient** ukazuje jen **Spravovat** s **Profilem** jen pro čtení a **Párovat s hlavním zařízením**.

1. Na telefonu s **AAPS** otevřete **Spravovat → Autorizovaní klienti** a zapněte **Povolit ovládání z klienta** (ve výchozím stavu je vypnuto, ve Zjednodušeném režimu je vždy zapnuto).
2. Klepněte na **+**, zadejte název telefonu sledujícího, zvolte způsob nastavení a vyberte jeho **roli**:
   - **QR kód: Nightscout a párování** — **AAPS** zobrazí QR kód, který jedním naskenováním nastaví Nightscout v telefonu sledujícího a spáruje ho. K tomu je potřeba admin token v nastavení NSClientV3 na telefonu s **AAPS**.
   - **PIN** — pro telefon sledujícího bez fotoaparátu, který je už připojený k Nightscoutu: poznamenejte si jednorázový **PIN** (platí asi dvě minuty).
3. Na telefonu s **AAPSClient** naskenujte kód (v Průvodci nastavením nebo přes **Spravovat → Párovat s hlavním zařízením → Naskenovat QR kód**), nebo otevřete **Spravovat → Párovat s hlavním zařízením** a zadejte PIN. Potvrďte.

Telefon sledujícího se pak v seznamu **Autorizovaní klienti** zobrazí jako **Aktivní** a **AAPSClient** ukáže **Ošetření**, **Scény** a **Spravovat**. Telefon sledujícího dostane vlastní token Nightscoutu jen s právy, která potřebuje. Celý postup se snímky obrazovky a řešením problémů najdete na stránce [Ovládání master ↔ klient](#client_master_master_setup).

Ověřte, že nastavení funguje: zadejte sacharidy v **AAPSClient**, potvrďte zobrazené množství a zkontrolujte, že se záznam objeví v **Ošetření** na obou telefonech.

(remotecontrol-nightscout-access-token)=

### Řešení problémů s nastavením „Přístupového tokenu Nightscoutu“

Přesné nastavení „Přístupového tokenu Nightscoutu“ se může lišit podle toho, zda je váš Nightscout placená hostovaná služba, nebo ne.

Pokud máte potíže s tím, aby **AAPS** přijal „Přístupový token Nightscoutu“, a používáte placenou hostovanou službu Nightscout, můžete se nejprve obrátit na svého poskytovatele Nightscoutu, jak potíže s „Přístupovým tokenem Nightscoutu“ vyřešit. Jinak se prosím obraťte na skupinu **AAPS**, ale předtím si znovu ověřte, že jste správně postupovali podle pokynů [zde](https://nightscout.github.io/nightscout/security/#create-a-token).

### Co AAPSClient nabízí

Po spárování nabízí **AAPSClient** pečovateli téměř stejné obrazovky jako samotné **AAPS**:

- **Ošetření**: bolus inzulínu, sacharidy a bolusová kalkulačka.
- **Scény**: spouštění a zastavování [scén](../DailyLifeWithAaps/Scenes.md).
- **Spravovat**: profily, nastavení inzulínu, dočasné cíle, Rychlý bolus, automatizace, potraviny, rotace míst aplikace, párování a běžící dočasný bazál.
- **Hlavní nabídka**: historie ošetření, prohlížeč historie, statistiky, údržba, konfigurace.

V **AAPSClient** není žádná pumpa ani cíle. Podrobný popis najdete na stránce [Aplikace AAPSClient](AapsClient.md).

**AAPSClient** umožňuje pečovateli provádět na dálku přes mobilní síť nebo internet většinu úprav, které jsou povoleny přímo v **AAPS**, **včetně bolusů inzulínu**. Každý příkaz je podepsán a poslán přes Nightscout do telefonu s **AAPS**, který ho ověří podle svých vlastních dat, omezí ho, zobrazí vám vlastní potvrzení a teprve potom ho provede. **AAPSClient** _může_ být mnohem rychlejší než [SMS příkazy](../RemoteFeatures/SMSCommands.md), hlavně u příkazů, které by vyžadovaly ověření.

Ošetření zadaná do Nightscoutu jinak (například přes webovou stránku Nightscoutu) se nepoužijí, dokud je zapnuté ovládání z klienta: **AAPS** je pak v [zabezpečeném režimu](#client-master-control-hardened-mode) a přijímá změny jen od spárovaných klientů. Když je ovládání z klienta vypnuté, použijí se jen tehdy, pokud jsou zapnuté odpovídající možnosti **Přijímat** v [části Synchronizace v předvolbách NSClient](#Preferences-nsclient-synchronization).

Vzdálené ovládání přes **AAPSClient** doporučujeme jen tehdy, když vaše synchronizace funguje dobře (_tj._ nevidíte nechtěné změny dat, jako je samovolná změna DC, TBR atd.).

### AAPSClient a možnosti chytrých hodinek

Chytré hodinky mohou být velmi užitečným nástrojem pro správu **AAPS** vašeho dítěte. K dispozici je několik možností. Pokud je **AAPSClient** nainstalován v telefonu pečovatele, můžete [aplikaci **AAPSClient WearOS**](https://github.com/nightscout/AndroidAPS/releases/) stáhnout a nainstalovat do kompatibilních chytrých hodinek, které jsou připojené k telefonu rodiče. Zobrazí aktuální glykémii a stav smyčky. Jakmile je **AAPSClient** spárován s **AAPS**, akce z hodinek (včetně bolusů, sacharidů, dočasných cílů a změn profilu) se předávají přes **AAPSClient** do **AAPS**, který je potvrdí a provede: viz [Wear OS na klientovi](#clientmastercontrol-wear-os-on-a-client). Více o chytrých hodinkách [můžete číst zde](#remotecontrol-smartwatches).

(RemoteControl_nightscout)=
## 3) Nightscout

Kromě toho, že Nightscout je server v „cloudu“, existuje také samostatná aplikace **Nightscout**, kterou lze stáhnout přímo z App Store do vašeho iPhonu. Pokud máte jako telefon sledujícího Android, samostatná aplikace Nightscout pro něj neexistuje a je lepší použít [**AAPSClient**](#2-aapsclient). Pokud chcete jen sledovat a neposílat ošetření, můžete si z Obchodu Play stáhnout a nainstalovat aplikaci [Nightwatch](https://play.google.com/store/apps/details?id=se.cornixit.nightwatch).

Jakmile máte aplikaci **Nightscout** na iPhonu nainstalovanou, otevřete ji, postupujte podle pokynů a zadejte adresu svého Nightscoutu (viz níže vlevo). Přesná podoba se může lišit podle toho, jak je hostován váš Nightscout. (_např._ http://youraddresshere.herokuapp.com). Poté zadejte váš Nightscout API secret (viz níže vpravo). Pokud nejste požádáni o vložení API hesla, pak ho musíte zadat po kliknutí na zámek v horní části aplikace:

![obrázek](../images/remote-control-24.png)

Více informací o nastavení je k dispozici přímo z [Nightscout](https://nightscout.github.io/nightscout/discover/)

Po prvním přihlášení uvidíte velmi jednoduché zobrazení. Možnosti zobrazení si upravte: vyberte nabídku („hamburger“) vpravo nahoře a posuňte se dolů:

![obrázek](../images/remote-control-25.png)

Posuňte se dolů na „Nastavení“. Možná si budete přát změnit "měřítko" na "lineární", protože výchozí zobrazení glykémie je logaritmické, a pod "vykreslovat bazál" vyberte "výchozí" tak, aby se podávané bazály zobrazily.

![obrázek](../images/remote-control-25b.png)

Vyberte požadované možnosti. Pokud pro alarmy používáte jinou aplikaci, zrušte zaškrtnutí alarmů.

![obrázek](../images/remote-control-26.png)

Pokračovat v posouvání dolů, dokud se nedostanete k „zobrazit pluginy“.

Musíte se ujistit, že je zaškrtnuta možnost "Portál péče" a můžete také vybrat k zobrazení další hodnoty (nejužitečnější jsou: IOB, portál péče, pumpa, stáří kanyly a inzulínu, bazální profil a OpenAPS).

Důležité je nyní kliknout na „uložit“ v dolní části obrazovky, aby se tyto změny projevily.

![obrázek](../images/remote-control-27.png)

Po stisknutí tlačítka "Uložit" se aplikace vrátí na hlavní obrazovku Nightscout, která bude vypadat takto:

1. Aktuální hodnota glykémie
2. Informace o stavu systému AAPS – klepnutím na jednotlivé karty na obrazovce zobrazíte více podrobností. Tyto možnosti zobrazení přidáte nebo odeberete v nabídce („hamburger“).
3. Nedávný průběh glykémie se zobrazenými ošetřeními (sacharidy, bolusy)
4. Dlouhodobější průběh glykémie
5. Nabídka („hamburger“) pro nastavení možností zobrazení, vytváření reportů, úpravu profilů a nástroje pro správu Nightscoutu
6. Nabídka „**+**“ pro zadávání ošetření (kdy je **AAPS** použije, viz [níže](#RemoteControl_nightscout-treatments)).
7. Výběr jiného časového období k zobrazení
8. Profil bazálního inzulínu
9. Zelená čára = historické hodnoty glykémie Modré čáry = predikovaná glykémie

![obrázek](../images/remote-control-28.png)

Podívejte se podrobněji do levého horního menu aplikace Nightscout:

1. Zpětná úprava v careportalu
2. Zapnutí/vypnutí alarmů
3. Nabídka („hamburger“) – pro nastavení předvoleb
4. Careportal – zaznamenání ošetření (kdy je **AAPS** použije, viz [níže](#RemoteControl_nightscout-treatments))

![Horní lišta Nightscout](../images/remote-control-29.png)

Na této obrazovce je na šedých kartách k dispozici velké množství informací o stavu **AAPS** systému (a ještě více informací se zobrazí při klepnutí na záložku):

1. Trend glykémie za 5 minut
2. Náhled bolusové kalkulačky
3. Klepnutím na Basal zobrazíte aktuální profil a informace o bazálu
4. Čas od posledního měření CGM v AAPS
5. **Pumpa**: inzulín, baterie v % a kdy se k ní AAPS naposledy připojil
6. Kdy se AAPS naposledy obnovil – pokud je to déle než 5 minut, může to ukazovat na problém se spojením mezi telefonem s AAPS a pumpou/CGM
7. Klepnutím na IOB zobrazíte rozdělení na bazální a bolusový inzulín
8. Stáří inzulínu v zásobníku
9. Stáří kanyly
10. Stav baterie telefonu s AAPS
11. Velikost vaší databáze. Pokud se příliš zaplní (jen u vlastního Nightscoutu – placené hostované služby to neřeší), mohou začít problémy s připojením. Data můžete smazat a velikost zmenšit v nabídce Admin tools (přes „hamburger“).

![obrázek](../images/remote-control-30.png)

![obrázek](../images/remote-control-31.png)

Vyskakovací okno zavřete klepnutím na „refresh“ v dolní části stránky.

(RemoteControl_nightscout-treatments)=
### Odesílání ošetření prostřednictvím Nightscout aplikace do AAPS

V **AAPS** 4 je podporovaným způsobem vzdáleného ovládání **AAPS** **spárovaný AAPSClient**, viz [Ovládání master ↔ klient](#client-master-control): každý klient má [roli](#client-master-control-roles), která omezuje, co smí dělat, a každý příkaz telefon s **AAPS** ověří podpisem, zkontroluje a potvrdí. Dokud je ovládání z klienta zapnuté, je telefon s **AAPS** v [zabezpečeném režimu](#client-master-control-hardened-mode): ošetření, dočasné cíle a přepnutí profilu zadaná na webové stránce Nightscoutu nebo v aplikaci Nightscout se **nepoužijí**. Aplikace Nightscout pak slouží jen ke sledování.

```{admonition} Only when client control is off
:class: warning
Pokud je **Povolit ovládání z klienta** v **Spravovat → Autorizovaní klienti** vypnuto (a Zjednodušený režim je vypnutý), **AAPS** použije záznamy péče z Nightscoutu jen pro typy dat, které jste zapnuli v **Přijímat** v [části Synchronizace v nastavení NSClientV3](#Preferences-nsclient-synchronization): sacharidy, dočasné cíle, přepnutí profilu a další záznamy péče. Inzulín se tímto způsobem nikdy nepodá: „Korekční bolus“ zadaný v Nightscoutu je jen *oznámen* a **AAPS** ho započítá do aktivního inzulínu, aniž by ho podal. Toto nastavení se pro vzdálené ovládání nedoporučuje; použijte místo něj spárovaný **AAPSClient**.
```

Přečtěte si více o možnostech **Nightscoutu** [zde](https://nightscout.github.io/)

### Tipy, jak nejlépe využít aplikaci Nightscout

1). Pokud se na stránce „zaseknete“ a chcete znovu zobrazit hlavní obrazovku, stačí kliknout na tlačítko „obnovit“ (dole uprostřed) a to vás dostane zpět na domovskou stránku **Nightscout** s grafem glykémie.

Chcete-li zobrazit aktuální profil, který běží na telefonu, můžete stisknout různé ikony na obrazovce nad grafem. Více informací (aktuální sacharidový poměr, citlivost, časové pásmo atd.) uvidíte po stisknutí „basal“, a „OpenAPS“ zobrazí informace o profilu, aktuálním cíli atd. Také lze sledovat stav baterie telefonu i inzulínové pumpy. BWP poskytuje informace o tom, co se podle algoritmu stane v budoucnu, vzhledem k hodnotám IOB a COB.

#### Ostatní ikony v nabídce: co znamená tužka (editace)?

Můžete (technicky) použít editační tužku pro přesunutí nebo odstranění bolusu nebo korekce z posledních 48 hodin.

Více o tom je [zde](https://nightscout.github.io/nightscout/discover/#edit-mode-edit)

Ačkoli by to mohlo být užitečné pro smazání oznámených sacharidů (na které nebyl podán bolus), v praxi to s **AAPS** zatím dobře nefunguje a doporučujeme takové změny provádět přímo v aplikaci **AAPS**.

(RemoteControl_smartwatches)= (remotecontrol-smartwatches)=

## 4) Chytré hodinky

### Možnost 1) Ovládání AAPS z hodinek s Wear OS

![Wear Remote 1](../images/Wear_Remote1.png)

Až budete mít [**AAPS** v hodinkách nastavené](../WearOS/BuildingAapsWearOS.md), podrobné informace o cifernících a jejich funkcích najdete na stránce [Chytré hodinky s Wear OS](../WearOS/WearOsSmartwatch.md).

Na hodinkách je možné spustit následující funkce:

* nastavovat dočasné cíle

* použít bolusovou kalkulačku (proměnné pro výpočet můžete nastavit v nastavení v telefonu)

* zadávat eSacharidy

* podávat bolus (inzulín + sacharidy)

* měnit nastavení hodinek

* monitorovat stav

* kontrolovat stav pumpy

* kontrolovat stav smyčky

* kontrolovat a měnit profil, CPP (Circadian Percentage Profile = posun času + procentní změna)

* zobrazit CDD (celková denní dávka = bolus + bazál za den)

* Vzdálený bolus, když jsou pečovatel a dítě s diabetem 1. typu na různých místech (to je možné u hodinek s **AAPS** a telefonu s **AAPS**, pokud jsou obě zařízení připojena k síti)

#### Komunikace pečovatelů s hodinkami pomocí jiných aplikací (např. WhatsApp)

Do hodinek je možné přidat další aplikace, např. WhatsApp, pro posílání zpráv (například) mezi pečovateli a dětmi. Je důležité mít s telefonem propojený pouze JEDEN Google účet, jinak hodinky nebudou přenášet data. Abyste mohli mít účet Samsung, musí vám být alespoň 13 let, a účet musíte mít nastavený se stejnou e-mailovou adresou, jako je použita v Android telefonu.

Video, které vysvětluje nastavení WhatsAppu pro zprávy na hodinkách Galaxy 4 (WhatsApp nebude mít všechny funkce), najdete [zde](https://gorilla-fitnesswatches.com/how-to-get-whatsapp-on-galaxy-watch-4/)

Úpravy v aplikaci **Galaxy wearable** na telefonu s **AAPS** a v hodinkách umožní, aby zprávy z WhatsAppu ohlásily mírné zavibrování a aby se zpráva z WhatsAppu zobrazila přes aktuální ciferník.

### Možnost 2) **AAPS** na hodinkách, pro dálkové ovládání **AAPS** v telefonu

Podobně jako telefon sledujícího s **AAPSClient** nebo SMS příkazy (viz části výše) lze i chytré hodinky použít ke vzdálenému ovládání **AAPS** a k zobrazení všech údajů profilu. Hlavní rozdíl oproti telefonu sledujícího je v tom, že hodinky jsou s telefonem s **AAPS** propojeny přes Bluetooth a nepotřebují Nightscout ani ověřovací kód. Pokud jsou hodinky i telefon s **AAPS**, propojené přes Bluetooth, zároveň připojené k Wi-Fi nebo mobilním datům, budou hodinky s telefonem s **AAPS** komunikovat i na delší vzdálenost. To zahrnuje i vzdálené podání bolusu, když jsou pečovatel s hodinkami s **AAPS** a dítě s diabetem 1. typu (s telefonem s **AAPS**) na různých místech, což se může hodit, když je dítě ve škole.

Dálkové ovládání pomocí chytrých hodinek je proto často užitečné v těchto situacích:

a)  **AAPSClient** nebo **SMS** příkazy nemohou fungovat; nebo

b)  Uživatel nechce zadávat ověřovací kód (který SMS příkazy vyžadují).

Aby mohly chytré hodinky ovládat **AAPS**, potřebují **Wear OS 3 nebo novější**. Zkontrolujte prosím technické parametry hodinek a podívejte se na stránku [Chytré hodinky a AAPS](../Getting-Started/Watches.md). Pokud si nejste jistí, hledejte nebo se zeptejte ve skupinách **AAPS** na Facebooku/Discordu.

Specific How-to guides for setting up **AAPS** on the popular Samsung Galaxy Watch 4 (40mm) are given below. Hodinky [Garmin](https://apps.garmin.com/en-US/apps/a2eebcac-d18a-4227-a143-cd333cf89b55?fbclid=IwAR0k3w3oes-OHgFdPO-cGCuTSIpqFJejHG-klBTm_rmyEJo6gdArw8Nl4Zc#0) jsou také oblíbenou volbou. Pokud máte zkušenost s nastavením jiných chytrých hodinek, která by podle vás mohla pomoci ostatním, přidejte ji na tyto stránky ([úprava dokumentace](../SupportingAaps/HowToEditTheDocs.md)) a sdílejte svá zjištění s celou komunitou **AAPS**.

### Možnost 3) AAPSClient na hodinkách ke vzdálenému řízení **AAPS** na telefonu

![Wear Remote 2](../images/Wear_Remote2.png)

Software pro hodinky, **AAPSClient** Wear apk, je možné stáhnout přímo z [Github](https://github.com/nightscout/AndroidAPS/releases/).

Pro stažení softwaru klikněte na aplikaci pro hodinky, která odpovídá klientské aplikaci v telefonu: **wear-aapsclient-release_**_verze_ patří k **AAPSClient**, **wear-aapsclient2-release_**_verze_ patří k **AAPSClient2** (viz [O AAPSClient, AAPSClient2 a AAPSClient3](#remotecontrol-aapsclient-versions)):

![obrázek](../images/2308c075-f41c-45bc-9c0f-3938beeaaafb.png)


"Uložte" nebo "Uložte jako" stažený soubor na vhodné místo na vašem počítači:


![obrázek](../images/bcf63cbc-9028-41d5-8416-fa2a31fd6f7d.png)






Soubor **AAPSClient** wear apk můžete přenést do telefonu a potom nahrát do hodinek stejným způsobem jako aplikaci **AAPS** Wear, jak je popsáno v části [Přenos aplikace Wear do telefonu s AAPS](#remote-control-transferring-the-aaps-wear-app-onto-your-aaps-phone)  









