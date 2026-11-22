# Pojmovnik

**AAPS** = AndroidAPS je naziv Android aplikacije.

**AAPSClient** = aplikacija pratitelja za njegovatelje. Na telefonu pratitelja prati **AAPS** korisnika preko korisnikove stranice **Nightscout** i, nakon uparivanja s telefonom na kojem radi **AAPS**, njime daljinski upravlja. Ne miješati s **NSClientom**. Više informacija → [Wiki – „Aplikacija AAPSClient“](../RemoteFeatures/AapsClient.md) i [Upravljanje glavni uređaj ↔ klijent](#client-master-control).

**Aktivnost** = aktivnost inzulina, pokazuje brzinu opadanja aktivnog inzulina (IOB). Pogledajte [Wiki – „DIA“](#Config-Builder-insulin-dia) i povezani **BGI**.

**AID** = Automated Insulin Delivery (automatska isporuka inzulina). Izraz koji se općenito koristi u kliničkoj praksi i istraživanjima za sustav koji automatski prilagođava isporuku inzulina na temelju podataka **CGM-a**. **APS** i **zatvorena petlja** znače isto → pogledajte i **OS-AID**.

**APS** = Artificial Pancreas System (sustav umjetne gušterače) → pogledajte i **AID**.

**AMA** = Advanced Meal Assist (napredna pomoć kod obroka). Algoritam koji omogućuje **AAPS-u** da nakon bolusa za obrok agresivnije poveća bazal korisnika. Više informacija → [Wiki – „Advanced Meal Assist (AMA)“](#Open-APS-features-advanced-meal-assist-ama).

**Faktor prilagodbe** = koristi se u **dinamičkom ISF-u**; to je vrijednost koju korisnik postavlja u **Postavkama**, između 1 % i 300 %. Djeluje kao množitelj vrijednosti **TDD**. Pogledajte [Wiki – faktor prilagodbe dinamičkog ISF-a](#dyn-isf-adjustment-factor)

**Android Auto** = sustav koji na zaslonu automobila prikazuje određene funkcije Android pametnog telefona, uključujući **AAPS**. Više informacija → [Wiki – „Android Auto“](../RemoteFeatures/AndroidAuto.md).

**APK** = Android application Package (Android paket aplikacije). Instalacijska datoteka softvera. Više informacija → [Wiki – „Izrada AAPS-a“](../SettingUpAaps/BuildingAaps.md).

**Autosens** = izračun osjetljivosti na inzulin u razdoblju od 24 sata i 8 sati itd. Više informacija → [DIABETTECH – **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = platforma za računalstvo u oblaku na kojoj se može smjestiti web-aplikacija **Nightscout** → pogledajte i **Nightscout**.

**BAT** = statusna oznaka za slabu bateriju pumpe, prikazana u statusnom retku glavnog zaslona **AAPS-a** → pogledajte i **CAN** / **RES** / **SEN**.

**BG** = glukoza u krvi (GUK).

**BGI** = blood glucose impact (utjecaj na glukozu u krvi). Koliko bi **GUK** „trebao“ porasti ili pasti samo na temelju djelovanja inzulina.

**Izvor GUK-a** = postavka AAPS-a za odabir izvora podataka o glukozi u krvi. Pogledajte [Wiki – Izvor GUK-a](#Config-Builder-bg-source)

**Bridge** (most) = dodatni uređaj koji **FGM** pretvara u **CGM**.

**BR** = Basal Rate (bazalna stopa). Količina inzulina u određenom vremenskom bloku za održavanje **GUK-a** na stabilnoj razini. → pogledajte i **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App (izradite vlastitu Dexcom aplikaciju). Način da korisnik izradi vlastitu Dexcom aplikaciju za očitavanje podataka senzora Dexcom G6.

**CAGE** = Cannula AGE (starost kanile). Prikazuje se na glavnom zaslonu **AAPS-a** i u Nightscoutu, na temelju korisnikovih unosa **Punjenje** u Careportalu → pogledajte i **Nightscout**.

**CAN** = statusna oznaka za zakašnjelu promjenu kanile, prikazana u statusnom retku glavnog zaslona **AAPS-a** → pogledajte i **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor (kontinuirani monitor glukoze) → pogledajte i **FGM**.

**Zatvorena petlja** = sustav zatvorene petlje koji automatski prilagođava korisnikovu bazalnu isporuku na temelju algoritma **AAPS-a** i postavki korisnikovog **profila**, bez potrebe za odobrenjem korisnika. Više informacija → [Wiki – „Zatvorena petlja“](#KeyAapsFeatures-ClosedLoop) i pogledajte i **HCL** / **FCL**.

**COB** = Carbs On Board (aktivni ugljikohidrati). To je količina ugljikohidrata koja je trenutno dostupna za probavu korisnika → pogledajte i IOB.

**CSF** = Carbs Sensitivity Factor (faktor osjetljivosti na ugljikohidrate). tj. koliko se **GUK** korisnika povisi za 1 g apsorbiranih ugljikohidrata.

**DIA** = Duration of Insulin Action (trajanje djelovanja inzulina). Više informacija → [Wiki – „DIA“](#Config-Builder-insulin-dia) i pogledajte i → [DIABETTECH – „DIA“](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = Daylight Saving Time (ljetno računanje vremena). Pogledajte [Wiki – Promjena vremenske zone i ljetno računanje vremena](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dinamički ISF (ili DynISF)** = značajka **AAPS-a** koja dinamički prilagođava faktor osjetljivosti na inzulin (**ISF**) na temelju korisnikovog **TDD-a** i **GUK-a**.

**eCarbs** = extended Carbs (produženi ugljikohidrati, eUH). Ugljikohidrati raspoređeni na nekoliko sati (npr. za masti/bjelančevine), što **AAPS-u** omogućuje da inzulin rasporedi kao kod produženog bolusa. Više informacija → [Wiki – „Produženi ugljikohidrati“](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = Full Closed Loop (potpuno zatvorena petlja). Petlja kojoj ne treba nikakav unos korisnika kod obroka: bez brojanja ugljikohidrata i bez bolusa za obrok. Više informacija → [Wiki – „Potpuno zatvorena petlja“](../AdvancedOptions/FullClosedLoop.md) i pogledajte i **HCL**.

**FGM** = Flash Glucose Monitor (flash monitor glukoze), npr. Abbott Freestyle Libre. Više informacija → [Wiki – „Izvor GUK-a“](#Config-Builder-bg-source) i pogledajte i „CGM“.

**git** = alat koji se koristi za spremanje i preuzimanje izvornog koda **AAPS-a**.

**GitHub** = web-usluga na kojoj se nalazi izvorni kod **AAPS-a** i njegova kontrola verzija (praćenje promjena u datotekama i usklađivanje rada na njima, posebno za timove), a može i izraditi aplikaciju. Potreban je i za ažuriranja **APK-a**. Više informacija → [Wiki – „Ažuriranje na novu verziju ili granu“](../Maintenance/UpdateToNewVersion.md).

**Glimp** = aplikacija za prikupljanje vrijednosti s Freestyle Librea.

**HCL (ili hibridna zatvorena petlja)** = petlja koja automatizira isporuku inzulina između obroka, ali korisnik i dalje mora dati bolus za obroke. Gotovo svaki sustav u svakodnevnoj upotrebi, uključujući **AAPS**, je hibridna zatvorena petlja → pogledajte i **FCL** / **zatvorena petlja**.

**IC (I:C, ICR, CR, omjer ugljikohidrata)** = omjer inzulina i ugljikohidrata. Uobičajeno se izražava u g/J, iako kratica upućuje na obrnuto.

**IOB** = Insulin On Board (aktivni inzulin). Inzulin koji je aktivan u tijelu korisnika. Pogledajte [Wiki – Aktivni inzulin](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor (faktor osjetljivosti na inzulin). Očekivani pad GUK-a kao rezultat jedne jedinice inzulina. Jedinica je mg/dL/J ili mmol/L/J. One nisu jednake bez pretvorbe!

**Spremište ključeva (Keystore ili JKS)** = Java Key Store, šifrirana datoteka u kojoj se spremaju vaši osobni razvojni certifikati i ključevi potrebni za izradu (i ponovnu izradu) **AAPS-a**.

**LGS** = Low Glucose Suspend (zaštita od niske razine glukoze). Pogledajte [Wiki – Zaštita od niske razine glukoze](#KeyAapsFeatures-LGS)

**LineageOS** = besplatni operacijski sustav otvorenog koda za pametne telefone i sl. Ako koristite Accu-Chek Combo, pogledajte [Wiki – pumpa Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**Datoteke dnevnika** = zapisi **AAPS-a** o radnjama korisnika (korisni za rješavanje problema i otklanjanje pogrešaka). Više informacija → [Wiki – „Pristup datotekama dnevnika“](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maksimalni ukupni aktivni inzulin (IOB). To je sigurnosna značajka koja sprječava da **AAPS** isporuči inzulin iznad postavki korisnika. Više informacija → [Wiki – „Maksimalni ukupni aktivni inzulin koji OpenAPS ne može prekoračiti“](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = sigurnosna značajka; izračun zadane razgradnje ugljikohidrata kada se apsorpcija ugljikohidrata ne može odrediti iz reakcija GUK-a korisnika. Više informacija → [Wiki – „min_5m_carbimpact“](#Preferences-min_5m_carbimpact).

**Nightscout** = projekt otvorenog koda za pristup podacima **CGM-a** i izvješćivanje o njima. Središnje mjesto za korisnikove podatke iz **AAPS-a**; može izraditi izvješća za pregled korisnikovih starijih podataka u **Nightscoutu**, kao što su očekivani HbA1c, vrijeme u rasponu ili traženje obrazaca u podacima pomoću percentilnog grafikona itd.

**Nightscout** → pogledajte i **Nightscout Reporter**. To je posebno korisno roditeljima koji prate liječenje dijabetesa svog djeteta.

**Nightscout Reporter Tool** = alat koji iz podataka web-aplikacije Nightscout izrađuje izvješća u PDF-u. Potražite „Nightscout Reporter“, „NS Reporter“ na Facebooku.

**NSClient** (**NSClientV3**) = dodatak **AAPS-a** koji sinkronizira podatke s **Nightscoutom** (**Konfiguracija** → **Komunikacija**). To nije isto što i **AAPSClient**, aplikacija pratitelja. Više informacija → [Wiki – „NSClient“](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (otvoreni sustav umjetne gušterače), prethodni projekt i osnova AAPS-a.

**Sustav otvorene petlje** = značajka **AAPS-a** koja predlaže prilagodbe, a korisnik ih mora ručno izvršiti u **AAPS-u**. Više informacija → [Wiki – „Otvorena petlja“](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = detekcija osjetljivosti i „reference design implementation version 0/1“ (implementacija referentnog dizajna, verzija 0/1). To je ključni algoritam OpenAPS-a. Više informacija → [Wiki – „Detekcija osjetljivosti“](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = Open-Source Automated Insulin Delivery (automatska isporuka inzulina otvorenog koda). Sustav **AID** izrađen od softvera otvorenog koda, kao što su **AAPS**, **OpenAPS**, Loop ili Trio. Te sustave službeno nisu odobrila zdravstvena tijela (FDA, NHS itd.) → pogledajte i **AID**.

**Vrijeme vrha djelovanja** = vrijeme najvećeg učinka danog inzulina. Više informacija → [Wiki – „Trajanje djelovanja inzulina (DIA) i vrh djelovanja“](#Config-Builder-insulin-dia).

**PH** = Pump History (povijest pumpe). Može se otvoriti u povijesti tretmana **AAPS-a**: otvorite **Izbornik** (☰) gore lijevo na glavnom zaslonu i odaberite **Tretmani**.

**Predviđanja** = predviđanja budućeg **GUK-a** na temelju različitih izračuna. Više informacija → [Wiki – „Linije predviđanja“](#aaps-screens-prediction-lines).

**Profil** = osnovne postavke liječenja korisnika (bazalna stopa, **DIA**, **IC**, **ISF**, ciljni **GUK**). **AAPS** koristi samo profile izrađene u **AAPS-u** (**Upravljanje** → **Profil**), ali **profili** iz **Nightscouta** mogu se kopirati (sinkronizirati) u **AAPS**. Više informacija → [Wiki – „Vaš AAPS profil“](../SettingUpAaps/YourAapsProfile.md).

**Zamjena profila** = (privremena) zamjena korisnikovog **profila** drugim **profilom** spremljenim u **AAPS-u**.

**Postotak profila** = (privremeno) povećanje ili smanjenje korisnikovog **profila** u postotku za odabrano razdoblje.

**RES** = statusna oznaka za zakašnjelu promjenu spremnika, prikazana u statusnom retku glavnog zaslona **AAPS-a** → pogledajte i **BAT** / **CAN** / **SEN**.

**RileyLink** = hardverski uređaj otvorenog koda koji povezuje Bluetooth Low Energy (BLE) s bežičnom komunikacijom na 916 MHz (za stare Medtronic pumpe) ili 433 MHz (za pumpe Omnipod Eros).

**SAGE** = sensor age (starost senzora). Prikazuje se na glavnom zaslonu **AAPS-a** i u **Nightscoutu**, na temelju korisnikovih unosa **Umetanje senzora** u Careportalu → pogledajte i **Nightscout**.

**SEN** = statusna oznaka za zakašnjelu promjenu senzora, prikazana u statusnom retku glavnog zaslona **AAPS-a** → pogledajte i **BAT** / **CAN** / **RES**.

**Detekcija osjetljivosti** = izračun osjetljivosti na inzulin zbog tjelovježbe, hormona itd. pogledajte i → [DIABETTECH – „Autosens“](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Šum senzora** = izraz za nestabilna očitanja **CGM-a** zbog kojih vrijednosti **GUK-a** „skaču“. Više informacija → [Wiki – „Zaglađivanje podataka GUK-a“](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus (super mikro bolus). Značajka **AAPS-a** za bržu isporuku inzulina radi korekcije **GUK-a**. Više informacija → [Wiki – „**SMB**“](#Open-APS-features-super-micro-bolus-smb) i pogledajte i **UAM**.

**Superbolus** = prebacivanje bazalnog inzulina u bolus za bržu korekciju **GUK-a**.

**TBB** = total base basal (ukupni osnovni bazal, zbroj bazalne stope unutar 24 sata) → pogledajte i **TBR** / **TDD**.

**TBR** = temporary basal rate (privremena bazalna stopa) → pogledajte i **TBB** / **TDD**.

**TDD** = total daily dose (ukupna dnevna doza, bolus + bazal na dan) → pogledajte i **TBB** / **TBR**.

**TT** = temporary target (privremeni cilj): privremeno povećanje/smanjenje ciljnog **GUK-a** (raspona) korisnika, npr. za jelo ili sport. Više informacija → [Wiki – „Privremeni ciljevi“](../DailyLifeWithAaps/TempTargets.md).

**UAM** = unannounced meals (nenajavljeni obroci). Otkrivanje značajnog porasta razine **GUK-a** zbog obroka, adrenalina ili drugih utjecaja i pokušaj da se to korigira. Više informacija → [Wiki – „UAM“](#enable-uam) i pogledajte i **SMB**.

**Virtualna pumpa** = značajka **AAPS-a** koja korisniku omogućuje da isproba funkcije **AAPS-a** ili osobama s dijabetesom čiji model pumpe nema upravljački program za **AAPS** omogućuje korištenje **AAPS-a** kao otvorene petlje → pogledajte i **Otvorena petlja**.

**Pozadina** = pozadinska slika **AAPS-a**, pogledajte stranicu o telefonima.

**xDrip** = softver otvorenog koda za očitavanje **CGM** sustava.

**Nulti privremeni bazal** (Zero-temp) = privremena bazalna stopa od 0 % (bez isporuke bazalnog inzulina).

→ pogledajte i [dokumentaciju OpenAPS-a](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)