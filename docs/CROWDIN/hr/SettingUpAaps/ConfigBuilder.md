# Konfiguracija (Config Builder)

```{admonition} Coming from AAPS v3?
:class: note
**Config Builder** se sada zove **Konfiguracija** i nalazi se u **izborniku** (☰). Pogledajte [Što se promijenilo u AAPS-u v4](#v4-changes).
```

U **Konfiguraciji** birate koji su dodaci aktivni (CGM, pumpa, APS algoritam, osjetljivost, sinkronizacija, …) i otvarate svaki dodatak i njegove postavke. [Vodič korak po korak](#configuration-v4) nalazi se u nastavku; ostatak ove stranice detaljno opisuje svaki odjeljak.

(configuration-v4)=
## Konfiguracija u AAPS-u v4

U **AAPS-u** v4 dodirnite **izbornik** (☰) u **gornjem lijevom** kutu glavnog zaslona i odaberite **Konfiguracija** (_„Postavite konfiguraciju (CGM, pumpa, …) i omogućite značajke“_).

![Gornji lijevi izbornik sa stavkom Konfiguracija](../images/v4/Configuration/configuration_menu.png)

Dodaci su grupirani po **kategorijama** – na primjer _Zaglađivanje_, _Kalibracija_, _Detekcija osjetljivosti_, _APS_, _Komunikacija_ i _Općenito_. Svaki redak prikazuje naziv kategorije i **trenutno aktivni** dodatak (npr. _APS → OpenAPS SMB_). Dodirnite redak da otvorite kategoriju.

![Zaslon Konfiguracija s popisom kategorija dodataka](../images/v4/Configuration/configuration_plugins.png)

Unutar kategorije vidite dodatke koji su za nju dostupni. U kategorijama s jednim izborom odabirete aktivni dodatak; neke kategorije dopuštaju višestruki izbor (_„Odaberite sve koji odgovaraju“_). Svaki dodatak nudi dvije radnje:

- **Otvori dodatak** – otvara vlastiti zaslon dodatka.
- **Postavke** – otvara postavke dodatka (postavke mogu biti grupirane u odjeljke koji se mogu proširiti).

![Kategorija s dodacima, svaki s „Otvori dodatak“ i „Postavke“](../images/v4/Configuration/configuration_open_plugin.png)

(configuration_sync_icon)=
### Ikona mobitela – „sinkronizirano s glavnog uređaja“

Mala **ikona mobitela (telefona)** pored kategorije ili postavke znači da je ta stavka **sinkronizirana s glavnog uređaja** – njezina vrijednost/odabir dolazi na ovaj uređaj preko kanala NSClientV3 (Nightscout).

Na **klijentu** (**AAPSClient**) ove su stavke **usklađene s glavnim uređajem**. Ikona se prikazuje samo na klijentu, pa se ne vidi na snimci zaslona iznad, koja je napravljena u glavnoj aplikaciji **AAPS**. Na klijentu se obično pojavljuje kod _Zaglađivanje_, _Kalibracija_, _Detekcija osjetljivosti_ i _APS_. Kako se točno glavni uređaj i klijenti usklađuju — i koje postavke možete mijenjati s koje strane — opisano je u odjeljku [Upravljanje glavni uređaj ↔ klijent](#client-master-config-prefs).

Ista se ikona pojavljuje i **unutar postavki**, pokraj pojedinih postavki koje se sinkroniziraju. U primjeru ispod ikonu ima _Granično vrijeme apsorpcije_; postavke bez ikone postavljaju se na svakom uređaju zasebno:

![Postavke dodatka – ikona mobitela označava sinkronizirane postavke](../images/v4/ClientMaster/preferences_synced_icon.png)

Stavke **bez** ikone postavljaju se **na svakom uređaju zasebno**. Najvažniji primjer je sama veza **NSClientV3 (Komunikacija)** — **Nightscout URL**, **pristupni token** i **WebSockets** postavljaju se na svakom telefonu zasebno, pa **nemaju** ikonu mobitela.

---

(Config-Builder-tab-or-hamburger-menu)=
## Otvaranje zaslona dodatka

Svaki zaslon dodatka otvara se na jedan od ovih načina (kartice i potvrdni okvir s okom iz **AAPS-a** v3 više ne postoje, pogledajte [Što se promijenilo u AAPS-u v4](#v4-changes)):

- **Konfiguracija** → kategorija dodatka → **Otvori dodatak**,
- izbornik **Upravljanje** u donjoj navigaciji, za zaslone koje najčešće koristite (Profil, Postavke inzulina, Pumpa, Automatizacija, Hrana...),
- gumb [Brzog pokretanja](../DailyLifeWithAaps/QuickLaunch.md) koji sami dodate,
- **traka za pretraživanje** na glavnom zaslonu.

```{contents}
:backlinks: entry
:depth: 2
```

(ConfigBuilder_Profile)=

## Profil

Ovaj modul nije moguće onemogućiti jer je osnovni dio **AAPS-a**.

Osnovno objašnjenje što sve sadrži vaš **profil** pročitajte u [Vaš AAPS profil](../SettingUpAaps/YourAapsProfile.md).

(insulin)=
(Config-Builder-insulin)=
## Inzulin

![Postavke inzulina](../images/manage/insulin_settings.png)

U **AAPS-u** 4 inzulin više nije dodatak koji se odabire u **Konfiguraciji**. Otvorite **Upravljanje → Postavke inzulina** i postavite inzulin koji koristite.

Uređivač inzulina omogućuje vam:

- dajte inzulinu **Nadimak inzulina** da ga lako prepoznate,
- postavite **Vrh djelovanja** (vrijeme do najveće aktivnosti inzulina, u minutama) i **DIA** (trajanje djelovanja inzulina, u satima), upisivanjem vrijednosti ili gumbima **–** / **+**,
- dodirnite gumb predloška **Učitaj vrh djelovanja iz** – **Novorapid** (75 min), **Fiasp** (55 min) ili **Lyumjev** (45 min) – da biste u jednom koraku upisali standardno vrijeme vrha djelovanja za taj inzulin.

Dopušteni rasponi jednaki su za svaki inzulin:

- **DIA**: od 5 do 9 sati (od 5 do 10 sati ako je vrsta pacijenta postavljena na **Trudnoća**). Kako odabrati vrijednost, pročitajte u [Trajanje djelovanja inzulina (DIA) i vrh djelovanja](#Config-Builder-insulin-dia).
- **Vrh djelovanja**: od 35 do 120 minuta.

Krivulje **aktivnog inzulina** (IOB) i **aktivnosti** prikazane na dnu uređivača mijenjaju se dok mijenjate vrijednosti, pa odmah vidite kako vaše postavke oblikuju djelovanje inzulina.

Više informacija o inzulinskom profilu kako ga prikazuje **AAPS** pročitajte [ovdje](#AapsScreens-insulin-profile).

(Config-Builder-insulin-change-active)=
### Promjena inzulina koji se koristi (DIA ili vrh djelovanja)

Inzulin označen s **AKTIVAN** je onaj koji koristi vaš aktivni profil. Njegova su polja zasivljena: ne možete ga urediti ni izbrisati. Tako naziv inzulina prikazan u vašem aktivnom profilu uvijek odgovara postavkama koje se stvarno koriste.

Da promijenite DIA ili vrh djelovanja koji koristite:

1. Otvorite **Upravljanje → Postavke inzulina**. Ako se zaslon otvori samo za čitanje (**✏️ olovka** na gornjoj traci), dodirnite olovku i otključajte postavke.
2. Dodirnite **+** (_Dodaj novi inzulin_). **AAPS** izrađuje kopiju inzulina prikazanog na zaslonu.
3. Postavite novi **Vrh djelovanja** i/ili **DIA**, a zatim dodirnite ikonu za spremanje (gore desno).
4. Dodirnite **▶** (_Aktiviraj inzulin_) i potvrdite. Novi inzulin postaje **AKTIVAN**.

```{admonition} The name includes peak and DIA
:class: note
**AAPS** nazivu inzulina automatski dodaje vrh djelovanja, DIA i koncentraciju (na primjer _Fiasp 55m 8h U100_), pa svoje konfiguracije razlikujete na prvi pogled.
```

Stari inzulin možete izbrisati kada više nije aktivan.

### Predlošci „Učitaj vrh djelovanja iz“

U **AAPS-u** 4 ne postoji popis vrsta inzulina za odabir. Svaki inzulin koristi istu eksponencijalnu krivulju djelovanja; razlikuju se samo **Vrh djelovanja** i **DIA**. Predlošci **Učitaj vrh djelovanja iz** u uređivaču inzulina jednim dodirom upisuju preporučeni vrh djelovanja za najčešće inzuline (mala ⓘ pokraj **Učitaj vrh djelovanja iz** prikazuje ih s njihovim vrijednostima vrha djelovanja). **Vrh djelovanja** i **DIA** i dalje možete naknadno prilagoditi.

Vrh djelovanja mijenjajte od preporučene vrijednosti samo ako razumijete učinak te promjene. [Graf krivulje inzulina](#AapsScreens-insulin-profile) pomaže vam razumjeti krivulje.

#### Novorapid

![Krivulja inzulina s vrhom djelovanja za Novorapid](../images/Profile/ConfBuild_Insulin_RAO.png)

- preporučeno za Humalog, Novolog i Novorapid (u **AAPS-u** v3 zvao se _Rapid-Acting Oref_)
- Vrh djelovanja = 75 minuta nakon injekcije

#### Fiasp

![Krivulja inzulina s vrhom djelovanja za Fiasp](../images/Profile/ConfBuild_Insulin_URO.png)

- preporučeno za Fiasp (u **AAPS-u** v3 zvao se _Ultra-Rapid Oref_)
- Vrh djelovanja = 55 minuta nakon injekcije

(Config-Builder-lyumjev)=
#### Lyumjev

![Krivulja inzulina s vrhom djelovanja za Lyumjev](../images/Profile/ConfBuild_Insulin_L.png)

- preporučeno za Lyumjev
- Vrh djelovanja = 45 minuta nakon injekcije

#### Vlastiti vrh djelovanja

- U **AAPS-u** 4 ne postoji zasebna vrsta inzulina „Free-Peak Oref“: unesite bilo koji **Vrh djelovanja** (od 35 do 120 minuta) izravno u [uređivaču inzulina](#Config-Builder-insulin), bez predloška.
- Vlastiti vrh djelovanja koristan je ako koristite inzulin koji nije na popisu ili mješavinu različitih inzulina.

(Config-Builder-insulin-dia)=
### Trajanje djelovanja inzulina (DIA) i vrh djelovanja

```{warning}
Kod korištenja petlje smanjenje DIA ili vrha djelovanja uvijek povećava isporučeni inzulin. DIA u AAPS-u djeluje drukčije nego u komercijalnim AID sustavima, a nepažljive promjene ovih postavki mogu promijeniti doziranje inzulina mnogo više ili manje nego što očekujete.
```

AAPS opisuje tijek djelovanja inzulina matematičkom formulom, koja se postavlja s pomoću **DIA** i usko povezane postavke **vrha djelovanja**. DIA je teoretsko trajanje do trenutka kada aktivni inzulin (IOB) padne na nulu, a vrh djelovanja je trenutak kada je učinak inzulina najjači. Iz toga nastaju krivulja aktivnog inzulina (IOB) i krivulja aktivnosti, koja je jednostavno **brzina** opadanja aktivnog inzulina.

Imajte na umu da je kod korištenja petlje u AAPS-u normalno da postoje razdoblja [nultog privremenog bazala](#Open-APS-features-super-micro-bolus-smb). Ovaj nedostajući bazalni inzulin u potpunosti se oduzima od aktivnog inzulina (IOB), što objašnjava zašto IOB u praksi padne na nulu mnogo sati ranije od postavljenog DIA. [Bolusni aktivni inzulin i bazalni aktivni inzulin](#aaps-screens-iob-cob-basal-sens) možete zasebno pogledati na glavnom zaslonu.

Za postavljanje DIA i vrha djelovanja dodirnite **Upravljanje** na glavnom zaslonu, a zatim **Postavke inzulina**. AAPS ovako prikazuje aktivnu konfiguraciju inzulina:

![Primjer konfiguracije inzulina](../images/manage/insulin_profile.png)

U ovom primjeru vrh djelovanja je 55 minuta, DIA je 8 sati, a [koncentracija inzulina](#Insulin-Concentration) je standardnih 100 IU/mL.

Zbog utjecaja nultog privremenog bazala, objašnjenog gore, i formule koju AAPS koristi za opadanje aktivnog inzulina (IOB), većina korisnika postavlja znatno veći DIA nego u komercijalnim sustavima. Općenito, mnogi ljudi smatraju da im **DIA** od 9 h dobro odgovara. Kada steknete više iskustva s AAPS-om i imate dobro podešen profil, možete pokušati pronaći osobne postavke DIA i vrha djelovanja uz pomoć informacija u nastavku.

````{admonition} Details on the impact of DIA and peak configuration
:class: dropdown

Budući da bazalna stopa u AAPS-u neizravno utječe na opadanje aktivnog inzulina (IOB), previsoke bazalne stope mogu prikriti previsok DIA, i obrnuto. Zato je smisleno najprije pažljivo podesiti bazalne stope, a tek onda prilagođavati DIA i vrh djelovanja. Osim toga, imajte na umu da postavke DIA i vrha djelovanja djeluju jedna na drugu: učinak DIA ovisi o vrhu djelovanja, i obrnuto.

Ovi grafikoni pokazuju točan utjecaj DIA i vrha djelovanja na krivulje aktivnog inzulina (IOB), u cijelom rasponu dopuštenih vrijednosti.

Prilagodba DIA:

```{image} ../images/Profile/iob_remaining_static_peak.png
:width: 400px
```

Prilagodba vrha djelovanja:

```{image} ../images/Profile/iob_remaining_static_dia.png
:width: 400px
```

Na kraju, usporedba kada se DIA i vrh djelovanja prilagođavaju zajedno. Logika je da se obje vrijednosti mijenjaju u istom omjeru, tako da je `49/35 ~ 7/5`. Ili slično, `120/93 ~ 9/7`. Razmaci su isti bez obzira na početni DIA ili vrh djelovanja, sve dok je relativna promjena ista za obje vrijednosti.

```{image} ../images/Profile/iob_remaining_uniform.png
:width: 400px
```

Imajte na umu da se kod ovakve prilagodbe DIA i vrha djelovanja svaka točka krivulje pomiče za isti relativni iznos.

````

#### Dodatno čitanje o postavljanju DIA i vrha djelovanja

- [Tehnički detalji i povijesna pozadina iz OpenAPS-a, prethodnika AAPS-a](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves).
- [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) (zašto često griješimo u trajanju djelovanja inzulina) na Diabettechu.
- [Exponential Insulin Curves + Fiasp](https://web.archive.org/web/20220630154425/http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/) (eksponencijalne krivulje inzulina i Fiasp) na See My CGM (arhiva).
- [Revised Humalog model in a closed loop](https://bionicwookiee.com/2022/04/13/revised-humalog-model-in-a-closed-loop/) (revidirani model Humaloga u zatvorenoj petlji) i drugi članci na Bionic Wookieju, koji preporučuju DIA od 9 h za Lyumjev, Fiasp, NovoRapid i Humalog.

(Config-Builder-bg-source)=
## Izvor GUK-a
Odaberite izvor glukoze u krvi koji koristite. Više informacija o postavljanju potražite na stranici [Kompatibilni CGM-ovi](../Getting-Started/CompatiblesCgms.md).

![Konfiguracija > Izvor GUK-a](../images/v4/Configuration/configuration_bg_source.png)

Pomaknite se prema dolje da biste vidjeli ostale izvore:

![Konfiguracija > Izvor GUK-a, nastavak](../images/v4/Configuration/configuration_bg_source_2.png)

![Konfiguracija > Izvor GUK-a, kraj popisa](../images/v4/Configuration/configuration_bg_source_3.png)

- [xDrip+ BG](../CompatibleCgms/xDrip.md) – i za kompatibilne aplikacije kao što je [Juggluco](../CompatibleCgms/Juggluco.md)
- [NSClient BG](../CompatibleCgms/CgmNightscoutUpload.md) – samo ako znate što radite, pogledajte [Izvor GUK-a](../Getting-Started/CompatiblesCgms.md).
- [MM640g](../CompatibleCgms/MM640g.md)
- Glimp – podržana je samo verzija 4.15.57 i novije
- [BYODA (Build Your Own Dexcom App)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
- MicroTech CGM App – za CGM Aidex / LinX
- [Poctech](../CompatibleCgms/PocTech.md)
- Tomato (MiaoMiao) – aplikacija Tomato za uređaj MiaoMiao
- [Glunovo](https://infinovo.com/) – aplikacija Glunovo za CGM sustav Glunovo
- Intelligo – aplikacija Intelligo
- Syai/Ottai – za aplikacije Syai i Ottai (pogledajte [Syai Tag](../CompatibleCgms/SyaiTagX1.md) i [Ottai](../CompatibleCgms/OttaiM8.md))
- SI App – prilagođena aplikacija SI App ili aplikacija Sibionics za CGM Sibionics
- Sino App – prilagođena aplikacija za CGM Sinocare
- Čitač obavijesti – čita vrijednosti glukoze iz obavijesti koje prikazuju službene CGM aplikacije (Dexcom, Medtronic, Eversense itd.)
- Instara – aplikacija Instara
- Slučajni GUK – stvara nasumične podatke GUK-a za testiranje. Može se omogućiti samo u inženjerskoj (razvojnoj) verziji s **Virtualnom pumpom**, pa se u normalnoj instalaciji **AAPS-a** ne može koristiti.

## Smoothing

![Konfiguracija > Zaglađivanje](../images/v4/Configuration/configuration_smoothing.png)

Pogledajte [Zaglađivanje podataka GUK-a](../CompatibleCgms/SmoothingBloodGlucoseData.md).

## Kalibracija

Odaberite kako **AAPS** obrađuje vrijednosti koje prima s vašeg senzora:

- **Bez kalibracije**: vrijednosti senzora koriste se kakve jesu. Koristite ovo kada je senzor već tvornički kalibriran i točan. Ovo je zadana postavka.
- **Linearna kalibracija**: **AAPS** ispravlja vrijednosti senzora nagibom i pomakom koje izračunava iz vaših mjerenja iz prsta.

Kako koristiti **Linearnu kalibraciju**:

1. Odaberite **Linearna kalibracija** u kategoriji **Kalibracija**.
2. Kada umetnete novi senzor, zabilježite promjenu senzora: koristite **Zabilježi promjenu senzora** na zaslonu kalibracije ili u Careportalu unesite umetanje CGM senzora. Tako **AAPS** zna kada je sesija senzora počela. Ako **AAPS** primijeti prazninu u očitanjima dulju od 30 minuta, može vas zamoliti da označite promjenu senzora; ovaj se upit pojavljuje samo na glavnom uređaju, ne na klijentu.
3. Otvorite dodatak i dodirnite **Dodaj kalibraciju**. Unesite vrijednost izmjerenu iz prsta. **AAPS** je spaja u par s vrijednošću senzora iz zadnjih 10 minuta.

Kalibracija se prihvaća samo kada:

- je zabilježena promjena senzora i od tada su prošla barem **2 sata** (zagrijavanje),
- je vaša glukoza stabilna. Ako se mijenja prebrzo, dijaloški okvir vam to javlja i prikazuje granicu,
- postoji očitanje CGM-a iz zadnjih 10 minuta,
- se odnosi na sadašnji trenutak. Ne možete unijeti starija mjerenja iz prsta.

Kako radi korekcija:

- **AAPS** povlači pravac kroz parove trenutačnog senzora: `corrected value = slope × sensor value + offset` (ispravljena vrijednost = nagib × vrijednost senzora + pomak).
- Noviji parovi vrijede više od starijih: par star 2 dana vrijedi oko 37 %, par star 4 dana oko 14 %. Zato linija prati vaš senzor i kada njegova očitanja s vremenom odstupaju.
- Potrebna su barem **2 para**.
- Ako su parovi blizu jedan drugome (razlika manja od 54 mg/dL / 3 mmol/L), vrijednosti se samo pomiču (pomak, bez nagiba).
- Nagib se drži između 0,55 i 1,6. Nagib izvan ovog raspona ograničava se na najbližu vrijednost.
- Sigurnosna granica: ako bi korekcija kod 100 mg/dL (5,5 mmol/L) bila veća od ±30 mg/dL (1,7 mmol/L), korekcija se ne primjenjuje. To vas štiti od pogrešnog unosa.

Što mijenja:

- Ispravljena vrijednost koristi se svugdje: GUK na glavnom zaslonu, graf i petlja. Sama očitanja senzora ne mijenjaju se. Korekcija se primjenjuje dodatno, i na ranija očitanja trenutnog senzora.
- Nova promjena senzora počinje od nule. Parovi iz ranijih senzora više se ne računaju.
- Na grafu je kalibracija prikazana kao oznaka na vrijednosti mjerenja iz prsta.
- Kalibracije se sinkroniziraju preko Nightscouta, pa vaši klijenti prikazuju iste ispravljene vrijednosti.

Provjera i uklanjanje unosa:

- **Otvori dodatak** prikazuje status (na primjer _Nagib 0,85, korekcija u sredini raspona -0,4_), grafikon vaših parova s pravcem i popis unosa.
- Ako je unos pogrešan (na primjer, imali ste šećera na prstu), dodirnite ikonu koša pored njega. Linija se odmah ponovno izračunava.

```{admonition} Using xDrip+ as BG source?
:class: note
xDrip+ ima vlastitu kalibraciju. Kalibrirajte samo na jednom mjestu, kako se vrijednosti senzora ne bi ispravljale dvaput.
```

```{admonition} Calibrate with care
:class: warning
Pogrešna vrijednost mjerenja iz prsta dovodi do pogrešnih vrijednosti glukoze, a time i do pogrešnog doziranja inzulina. Operite ruke prije mjerenja i ne kalibrirajte dok se vaša glukoza brzo mijenja.
```

![Konfiguracija > Kalibracija](../images/v4/Configuration/configuration_calibration.png)

(Config-Builder-pump)=
## Pumpa
Odaberite pumpu koju koristite. Više informacija o postavljanju pročitajte na stranici [Kompatibilne pumpe](../Getting-Started/CompatiblePumps.md).

![Konfiguracija > Pumpa](../images/v4/Configuration/configuration_pump_list_1.png)

Pomaknite se prema dolje da vidite sve upravljačke programe pumpi:

![Konfiguracija > Pumpa, nastavak](../images/v4/Configuration/configuration_pump_list_2.png)

![Konfiguracija > Pumpa, nastavak](../images/v4/Configuration/configuration_pump_list_3.png)

![Konfiguracija > Pumpa, kraj popisa](../images/v4/Configuration/configuration_pump_list_4.png)

Kada odaberete drugu pumpu, **AAPS** traži da potvrdite promjenu:

![Potvrda zamjene dodatka](../images/v4/Pumps/switch_plugin_dialog.png)

- [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
- Dana R Korean (za domaću, korejsku pumpu DanaR)
- Dana Rv2 (pumpa DanaR s neslužbenom nadogradnjom firmwarea)
- [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
- [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
- [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
- Omnipod za [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
- Dash za [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
- [Medtronic](../CompatiblePumps/MedtronicPump.md)
- [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
- [EOPatch2](../CompatiblePumps/EOPatch2.md)
- [Medtrum](../CompatiblePumps/MedtrumNano.md)
- [Equil 5.3](../CompatiblePumps/Equil5.3.md)
- [Carelevo](../CompatiblePumps/CareLevo.md)
- Virtualna pumpa: otvorena petlja – samo prijedlozi **AAPS-a**
  - dok radite prve korake s **AAPS-om**, tijekom prvih [ciljeva](../SettingUpAaps/CompletingTheObjectives.md)
  - za pumpu koja još nema upravljački program

(config-builder-wrong-pump-data)=
### Poruka: „Podaci dolaze s druge pumpe“

**AAPS** pamti pumpu s kojom je povezan (vrstu pumpe i serijski broj). Ako primi podatke s druge pumpe, na primjer nakon što je vaša pumpa zamijenjena novom istog modela, prikazuje ovu poruku i zanemaruje podatke s te pumpe:

![Podaci dolaze s druge pumpe](../images/Screen_DifferentPump.png)

Da biste koristili novu pumpu, promijenite upravljački program pumpe: odaberite **Virtualna pumpa**, potvrdite, a zatim ponovno odaberite svoju pumpu. **AAPS** tada bilježi pumpu s kojom je sada povezan.

(Config-Builder-sensitivity-detection)=

## Detekcija osjetljivosti

![Konfiguracija > Detekcija osjetljivosti](../images/v4/Configuration/configuration_sensitivity_detection.png)

Odaberite vrstu detekcije osjetljivosti. Više detalja o različitim načinima [pročitajte ovdje](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Ovo tijekom rada analizira povijesne podatke i radi prilagodbe ako prepozna da ste osjetljiviji na inzulin (ili, obrnuto, otporniji) nego obično. Više detalja o tome kako se izračunava sam omjer osjetljivosti pročitajte u [Glavne značajke AAPS-a > Autosens](#Open-APS-features-autosens).

Svoju osjetljivost možete vidjeti na glavnom zaslonu u [dodatnom grafu](#AapsScreens-section-g-additional-graphs) ako odaberete SENS% i pratite bijelu liniju. Napomena: morate biti na [Cilju 8](#objectives-objective8) da bi detekcija osjetljivosti/[Autosens](#Open-APS-features-autosens) mogla automatski prilagođavati količinu isporučenog inzulina. Prije nego dosegnete taj cilj, postotak Autosensa / linija na grafu prikazuju se samo informativno.

### Postavke apsorpcije
Ako koristite Oref1 sa **SMB-om**, morate promijeniti **min_5m_carbimpact** na 8. Vrijednost se koristi samo tijekom praznina u očitanjima **CGM-a** ili kada tjelesna aktivnost „potroši“ sav porast glukoze u krvi koji bi inače naveo **AAPS** da smanjuje aktivne ugljikohidrate (COB). Kada se [apsorpcija ugljikohidrata](../DailyLifeWithAaps/CobCalculation.md) ne može dinamički izračunati na temelju reakcija vaše glukoze, primjenjuje se zadano opadanje vaših ugljikohidrata. U osnovi, to je sigurnosna zaštita.

(Config-Builder-aps)=
## APS

![Konfiguracija > APS](../images/v4/Configuration/configuration_aps.png)

Odaberite željeni APS algoritam za prilagodbu terapije. Aktivne detalje odabranog algoritma možete pogledati s **Otvori dodatak**.
- OpenAPS AMA
  - Advanced Meal Assist (napredna pomoć za obroke): stariji algoritam, više se ne preporučuje.
  - Jednostavno rečeno, prednost je u tome što nakon bolusa za obrok sustav može brže postaviti visoki privremeni bazal AKO pouzdano unosite ugljikohidrate.
- [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb)
  - Super Micro Bolus: najnoviji algoritam, preporučen za sve korisnike.
  - Za razliku od AMA, SMB ne koristi privremene bazalne stope za upravljanje razinom glukoze, nego uglavnom male **Super Micro Boluse** (SMB).
  - Napomena: preporučuje se koristiti ovaj algoritam od početka, iako SMB-ove zapravo nećete dobivati do [Cilja 9](#objectives-objective9).
- [Auto ISF](#Open-APS-features-auto-isf)
  - Eksperimentalni algoritam za napredne korisnike. Prikazuje se tek kada su ciljevi ispunjeni.

Ako prelazite s algoritma AMA na SMB, _min_5m_carbimpact_ morate ručno promijeniti na **8** (zadana vrijednost za SMB) u [Postavke → Postavke apsorpcije](#Preferences-min_5m_carbimpact).

## Petlja

Ovaj modul nije moguće onemogućiti jer je osnovni dio **AAPS-a**.

![Konfiguracija > Petlja](../images/v4/Configuration/configuration_loop.png)

## Ograničenja

![Konfiguracija > Ograničenja](../images/v4/Configuration/configuration_constraints.png)

### Ciljevi

**AAPS** ima program učenja (niz ciljeva) koji morate ispuniti korak po korak. Ovo bi vas trebalo sigurno voditi kroz postavljanje sustava zatvorene petlje.

Više informacija pročitajte na stranici [Ispunjavanje ciljeva](../SettingUpAaps/CompletingTheObjectives.md).

## Komunikacija

U ovoj kategoriji (u **AAPS-u** v3 zvala se **Sinkronizacija**) birate želite li i kamo da **AAPS** šalje vaše podatke.

![Konfiguracija > Komunikacija](../images/v4/Configuration/configuration_communication.png)

Pomaknite se prema dolje da vidite ostatak popisa:

![Konfiguracija > Komunikacija, nastavak](../images/v4/Configuration/configuration_communication_2.png)

### NSClientV3

Može se koristiti kao [poslužitelj za izvješća](../SettingUpAaps/SettingUpTheReportingServer.md) i/ili za [daljinski nadzor](../RemoteFeatures/RemoteMonitoring.md) i [daljinsko upravljanje](../RemoteFeatures/RemoteControl.md).

Kako postaviti sinkronizaciju NSClientV3, pročitajte u [Sinkronizacija s poslužiteljem za izvješća](#SetupWizard-synchronization-with-the-reporting-server-and-more).

### Tidepool

Može se koristiti kao [poslužitelj za izvješća](../SettingUpAaps/SettingUpTheReportingServer.md).

Pogledajte [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Koristi se za **slanje** podataka kao što su vrijednosti glukoze i tretmani u xDrip+ na istom telefonu. Njegove postavke sadrže i **Šalji status u xDrip+**, statusni redak s aktivnim inzulinom (IOB) i aktivnim ugljikohidratima (COB) koji prikazuju xDrip+ i neke prateće aplikacije za satove.

### Open Humans

Pogledajte [Open Humans](../SupportingAaps/OpenHumans.md).

(Config-Builder-wear)=
### Wear
Nadzirite **AAPS** i upravljajte njime sa sata s Wear OS-om. Postavljanje sata objašnjeno je na stranici [Postavljanje AAPS-a na vaš Wear OS sat](../WearOS/WearOsSmartwatch.md). Nakon što omogućite dodatak, odaberite njegove opcije u [Postavke > Wear](#preferences-wear). Korištenje sata objašnjeno je na stranici [Upravljanje AAPS-om putem pametnog sata s Wear OS-om](../RemoteFeatures/RemoteControlWearOS.md).

(external-companion-apps)=
### Vanjske prateće aplikacije

Šalje podatke o statusu **AAPS-a** na telefonu, tako da ih druge aplikacije instalirane na njemu mogu prikazati – na primjer prateće aplikacije za satove ili widgete. Emitirani podaci uključuju glukozu i trend, aktivni inzulin (IOB), aktivne ugljikohidrate (COB), bazal i privremeni bazal, naziv profila, status petlje, bateriju telefona i pumpe, razinu u spremniku i napredak bolusa. Omogućite ovo samo ako to traži prateća aplikacija koju koristite.

Aplikacije za koje se zna da čitaju ove podatke su [WatchDrip+](https://bigdigital.home.blog/) (satovi Xiaomi i Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (komplikacije i widgeti za Wear OS te Android Auto putem GlucoDataAuto) i aplikacija G-Watch. Njihovo postavljanje opisano je na stranici [Pametni satovi i AAPS](#watches-external-companion-apps). Neke od njih koriste i **Šalji status u xDrip+** iz dodatka **xDrip** iznad za statusni redak s aktivnim inzulinom (IOB) i aktivnim ugljikohidratima (COB).

U ranijim verzijama ovaj se dodatak zvao **Samsung Tizen**, prema [aplikaciji G-Watch za satove Samsung Tizen](#Watchfaces-tizen) za koju je prvotno napravljen.

### Garmin

Veza s Garmin uređajem (Fenix, Edge...)
## Tretmani
Otvorite **izbornik** (☰) i odaberite [Povijest tretmana](#aaps-screens-treatments) da biste vidjeli zabilježene tretmane. Ako želite urediti ili izbrisati unos (npr. pojeli ste manje ugljikohidrata nego što ste očekivali), odaberite „Ukloni“ i unesite novu vrijednost (po potrebi promijenite vrijeme) putem **Tretmani → UH** u donjoj navigaciji (pogledajte [Ugljikohidrati](#screens-bolus-carbs)).

## Općenito

U **AAPS-u** 4 kategorija **Općenito** u **Konfiguraciji** sadrži samo **Autotune**. Ostale značajke opisane u nastavku uvijek su dostupne i više ih ne treba ovdje omogućiti; svaki odlomak navodi gdje ih pronaći.

![Konfiguracija > Općenito](../images/v4/Configuration/configuration_general.png)

### Pregled

[Glavni zaslon](#AapsScreens-the-homescreen) **AAPS-a** više nije dodatak i nema vlastite postavke u **Konfiguraciji**. Opcije koje su prije bile ovdje sada su u **Postavkama** (ikona zupčanika): [Prikaži bilješke u dijaloškim okvirima](#Preferences-show-notes-field-in-treatments-dialogs), [Statusna svjetla](#Preferences-status-lights) i [Postotak bolusa](#Preferences-deliver-this-part-of-bolus-wizard-result) koji koristi bolus kalkulator. Opcija superbolusa iz **AAPS-a** 3.x [nije dostupna kao postavka](#Preferences-advanced-settings-overview) u **AAPS-u** 4.

(Config-Builder-actions)=
### Radnje

Kartica Radnje iz **AAPS-a** 3.x više ne postoji. Njezini gumbi sada su u izborniku **Upravljanje** – pogledajte [Kamo je nestala kartica Radnje?](#screens-action-tab).

### Automatizacija

**Upravljanje → Automatizacija** omogućuje vam upravljanje [automatizacijama](../DailyLifeWithAaps/Automations.md), počevši od [Cilja 10](#objectives-objective10).

(Config-Builder-sms-communicator)=
### SMS Communicator
Omogućuje njegovateljima na daljinu da putem SMS-a upravljaju nekim značajkama **AAPS-a**, više informacija o postavljanju pročitajte u [SMS naredbe](../RemoteFeatures/SMSCommands.md).

### Hrana
**Upravljanje → Hrana** prikazuje predloške hrane definirane u bazi podataka o hrani u Nightscoutu, više informacija o postavljanju pročitajte u [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods).

Napomena: unosi se ne mogu koristiti u kalkulatoru **AAPS-a**. (Samo pregled)

(Config-Builder-autotune)=
### Autotune

Autotune možete omogućiti, pogledajte [ovdje](../AdvancedOptions/Autotune.md).

### Održavanje

Otvorite **izbornik** (☰) i odaberite **Održavanje** da biste izvezli / uvezli postavke i upravljali datotekama dnevnika.

![Zaslon Održavanje, datoteke dnevnika](../images/screens/maintenance.png)

![Zaslon Održavanje, upravljanje datotekama](../images/screens/maintenance_2.png)

![Zaslon Održavanje, upravljanje bazom podataka](../images/screens/maintenance_3.png)

### Konfiguracija (Config Builder)

Sada se zove **Konfiguracija**: to je ova stranica.