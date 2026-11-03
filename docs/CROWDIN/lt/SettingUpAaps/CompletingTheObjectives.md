# Mokymo etapų atlikimas

**AAPS** turi seriją **mokymo etapų**, kuriuos reikia atlikti. Jie padeda naudotojui pereiti nuo paprasto atviro ciklo prie hibridinio uždaro ciklo ir visų **AAPS** funkcijų. Atlikdami **mokymo etapus** užtikrinsite, kad:

* teisingai sukonfigūravote viską savo **AAPS** sąrankoje;
* susipažinote su svarbiausiomis **AAPS** funkcijomis; ir
* iš esmės suprantate, ką gali jūsų sistema, kad galėtumėte drąsiau naudoti **AAPS**.

Kai **AAPS** įdiegiama pirmą kartą, kiekvieną mokymo etapą reikia atlikti prieš pereinant prie kito. Einant per kiekvieną **mokymo etapą**, palaipsniui atrakinamos naujos funkcijos.

**1–8 mokymo etapai** padės jums nueiti kelią nuo **AAPS** konfigūravimo telefone iki „paprasto“ hibridinio uždaro ciklo. Tai užtruks apie 6 savaites. Iki **5 mokymo etapo** galite eiti naudodami virtualią pompą (o insuliną tuo metu leisti kitu būdu). **9 ir 10 mokymo etapai** skirti išbandyti pažangesnes **AAPS** funkcijas, kad geriau valdytumėte diabetą. Jiems atlikti reikės iki 3 mėnesių, galbūt ir ilgiau. Daugiau informacijos apie numatomą laiko paskirstymą rasite čia: [Kiek laiko tai užtruks?](#preparing-how-long-will-it-take)

Be to, kad einate per **mokymo etapus**, prireikus galite ir panaikinti savo pažangą bei [grįžti į ankstesnį mokymo etapą](#CompletingTheObjectives-go-back-in-objectives).

## Nustatymų atsarginė kopija

```{admonition} Note
:class: note

Po kiekvieno **mokymo etapo** rekomenduojama eksportuoti **AAPS** nustatymus!
```

Primygtinai rekomenduojama po kiekvieno mokymo etapo [eksportuoti nustatymus](../Maintenance/ExportImportSettings.md), kad neprarastumėte **AAPS** pasiektos pažangos. Eksportuojant sukuriamas **nustatymų failas** (.json), kurio atsarginę kopiją reikia laikyti vienoje ar keliose saugiose vietose (pvz., Google Drive, standžiajame diske, el. laiško priede _ir t. t._). Taip užtikrinama, kad visa **AAPS** pasiekta pažanga bus išsaugota. Jei pametate telefoną arba netyčia ištrinate savo pažangą, json failą galima vėl įkelti į **AAPS**, importuojant naujausią nustatymų failą. Atsarginis **nustatymų failas** taip pat būtinas, jei dėl kokios nors priežasties reikia naujo **AAPS** telefono (naujesnis, pamestas ar sugedęs telefonas _ir t. t._)

**Nustatymų** faile išsaugoma ne tik jūsų pažanga **mokymo etapuose**, bet ir visi jūsų **AAPS** nustatymai, pvz., **maks. bolusas** _ir t. t._

Jei neturėsite nustatymų atsarginės kopijos ir kas nors nutiks jūsų **AAPS** telefonui, **mokymo etapus** teks pradėti iš naujo. **Mokymo etapams** atlikti reikia laiko. Geriau išvengti situacijos, kai juos tenka atlikti dar kartą, pavyzdžiui, nes pametėte telefoną.

(objectives-objective1)=
## 1 mokymo etapas: vizualizavimo ir stebėjimo nustatymas, valandinės bazės ir santykių analizė

**1 mokymo etape** naudotojas turi atlikti pagrindinę techninę **AAPS** sąranką. Kol šis žingsnis neatliktas, toliau eiti negalima.

- Pasirinkite tinkamą NGJ/FGM skiltyje [Konfigūracija → Glikemijos šaltinis](#Config-Builder-bg-source). Daugiau informacijos rasite skyriuje [Glikemijos šaltinis](../Getting-Started/CompatiblesCgms.md).
- Pasirinkite tinkamą pompą skiltyje [Konfigūracija → Pompa](#Config-Builder-pump), kad jūsų pompa galėtų bendrauti su **AAPS**. Pasirinkite **virtualią pompą**, jei naudojate pompos modelį, kuriam nėra **AAPS** tvarkyklės ciklui, arba jei norite atlikti pirmuosius **mokymo etapus**, o insuliną leisti kita sistema. Daugiau informacijos rasite skyriuje [insulino pompa](../Getting-Started/CompatiblePumps.md).
- Jei naudojate Nightscout:
  - Vadovaukitės puslapio [Nightscout](../SettingUpAaps/Nightscout.md) instrukcijomis, kad **Nightscout** galėtų gauti ir rodyti **AAPS** duomenis.
  - Atkreipkite dėmesį, kad **NSClientV3** URL adreso gale **_neturi_ būti „/api/v1/“** – žr. [Nustatymai → NSClientV3](#Preferences-nsclient).
- Jei naudojate Tidepool:
  - Vadovaukitės puslapio [Tidepool](../SettingUpAaps/Tidepool.md) instrukcijomis, kad **Tidepool** galėtų gauti ir rodyti **AAPS** duomenis.

Pastaba: *gali tekti palaukti, kol ateis kitas jutiklio gliukozės rodmuo, kad **AAPS** jį atpažintų.*

(objectives-objective2)=
## 2 mokymo etapas: Išmokite valdyti AAPS

**2 mokymo etape** reikia atlikti kelias „užduotis“, kaip parodyta ekrano kopijoje žemiau. Prie kiekvienos užduoties rodoma jos būsena (**1**): oranžinis užrašas „**Dar nebaigta**“ pasikeičia į „**Užbaigta, puiku!**“, kai tik **AAPS** užregistruoja veiksmą. Jei dar nežinote, kaip atlikti tam tikrą veiksmą, palieskite **Užuomina** (**2**) po užduotimi – atsidarys susijusi dokumentacija.

![2 mokymo etapo ekrano kopija](../images/Objective2_V2_5.png)

**2 mokymo etapo** užduotys:
- Nustatykite **profilį** 90 % 10 min. trukmei.
  - _Užuomina_: pagrindiniame ekrane palieskite savo profilio pavadinimą, kad atvertumėte ekraną **Profilis**, tada naudokite mygtuką **Aktyvuoti** (▶) ir nustatykite procentą bei trukmę. Daugiau informacijos puslapyje [Profilio keitimas ir profilio procentas](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Pastaba_: **AAPS** nepriima valandinės bazės, mažesnės nei 0,05 V/val. Jei jūsų **profilyje** yra 0,05 V/val. ar mažesnių valandinių bazių, prieš atlikdami šią užduotį turėsite sukurti laikiną **profilį** su didesnėmis valandinėmis bazėmis. Atlikę šią užduotį, grįžkite prie savo įprasto **profilio**.
- Imituokite „dušą“ – [atjunkite pompą](#AapsScreens-loop-status) **AAPS** programėlėje 1 val. trukmei.
  - _Užuomina_: pagrindiniame ekrane paspauskite ciklo piktogramą, kad atvertumėte ciklo langą, tada skiltyje **Atjungti pompą** pasirinkite trukmę.
- „Dušą“ užbaikite vėl prijungdami pompą.
  - _Užuomina_: paspauskite piktogramą „atjungta“, kad vėl atvertumėte ciklo langą, ir pasirinkite **Prijungti pompą**.
- Nustatykite pasirinktinį [**laikiną tikslą**](../DailyLifeWithAaps/TempTargets.md) 10 min. trukmei.
  - _Užuomina_: pagrindiniame ekrane paspauskite tikslo intervalą, kad atvertumėte laikino tikslo langą.
- Atverkite įskiepio **Ciklas** turinį.
  - _Užuomina_: atverkite **Konfigūracija → Ciklas** ir palieskite „**Atidaryti įskiepį**“.
- Slinkite arba keiskite KG grafiko mastelį, kad matytumėte ilgesnius ar trumpesnius laiko tarpus.


(objectives-objective3)=
## 3 mokymo etapas: Pasitikrinkite žinias

**3 mokymo etape** naudotojas turi išlaikyti testą su keliais atsakymų variantais. Jis skirtas patikrinti jūsų **AAPS** žinias.

Kai kuriems naudotojams **3 mokymo etapas** yra sunkiausias. Atsakydami į klausimus, skaitykite **AAPS** dokumentaciją. Jei, ieškodami **AAPS** dokumentacijoje, tikrai nerandate atsakymo, paieškokite „Objective 3“ [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) arba [Discord](https://discord.gg/4fQUWHZ4Mw) grupėje (tikėtina, kad jūsų klausimas jau buvo užduotas ir grupė į jį atsakė). Šios grupės gali draugiškai patarti arba nukreipti jus į reikiamą **AAPS** dokumentacijos vietą.

Tuo tarpu:
- Kad atviro ciklo režimu sumažintumėte pranešimų / sprendimų, kuriuos turite priimti (laikinos valandinės bazės), skaičių, savo **profilyje** nustatykite platų tikslo intervalą, _pvz.,_ 90–150 mg/dL arba 5,0–8,5 mmol/l.
- Naktį galite nustatyti platesnę viršutinę ribą arba net išjungti atvirą ciklą.

Norėdami tęsti **3 mokymo etapą**, palieskite klausimo eilutę, kad ją atvertumėte. Atidžiai perskaitykite kiekvieną klausimą ir pasirinkite atsakymą (-us).

Į kiekvieną klausimą gali būti daugiau nei vienas teisingas atsakymas! Pasirinkus neteisingą atsakymą, klausimas užrakinamas 1 valandai. Tik tada galėsite grįžti ir vėl į jį atsakyti. Atminkite, kad kitą kartą atsakant atsakymų tvarka gali būti pasikeitusi. Taip siekiama, kad juos atidžiai perskaitytumėte ir tikrai suprastumėte, ar kiekvienas atsakymas teisingas.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
Kartais į **AAPS** pridedamos naujos funkcijos, dėl kurių prie **mokymo etapų**, ypač **3 mokymo etapo**, gali tekti pridėti naują klausimą. Todėl bet kuris naujas klausimas, pridėtas prie **3 mokymo etapo**, bus pažymėtas kaip „neatliktas“, nes **AAPS** prašys į jį atsakyti. Nesijaudinkite: kiekvienas **mokymo etapas** yra savarankiškas, todėl **neprarasite esamų AAPS funkcijų**, jei kiti **mokymo etapai** liks atlikti.
```

## 4 mokymo etapas: Aktyvuojamas atviras ciklas

**4 mokymo etapo** tikslas – suprasti, kaip dažnai **AAPS** įvertina naudotojo valandinę bazę pagal gliukozės reikšmes ir rekomenduoja laikinos valandinės bazės pakeitimus. Šiame **mokymo etape** pirmą kartą įjungsite atvirą ciklą, priimsite 20 siūlomų laikinos valandinės bazės pakeitimų ir prireikus juos rankiniu būdu nustatysite pompoje. Taip pat stebėsite, kaip veikia [**laikini tikslai**](../DailyLifeWithAaps/TempTargets.md). Jei dar nežinote, kaip **AAPS** nustatyti laikinos valandinės bazės pakeitimą, žr. pompos veiksmus meniu **Valdymas** ([Kur dingo skirtukas Veiksmai?](#screens-action-tab)).

Trumpiausias laikas šiam mokymo etapui atlikti: **7 dienos**. Tai privalomas laukimo laikas. Pereiti prie kito **mokymo etapo** negalima, net jei visi valandinės bazės pakeitimai jau buvo įvykdyti.

- Atvirą ciklą pasirinkite pagrindiniame ekrane paspausdami [ciklo piktogramą](#AapsScreens-loop-status) ir kaip veikimo režimą pasirinkdami **Atviras ciklas**.
- Per 7 dienas rankiniu būdu įvykdykite bent 20 laikinos valandinės bazės pasiūlymų: įveskite juos savo (fizinėje) pompoje ir AAPS patvirtinkite, kad juos priėmėte. Įsitikinkite, kad šie valandinės bazės pakeitimai rodomi **AAPS** ir **Nightscout**.
- Prireikus naudokite [**laikinus tikslus**](../DailyLifeWithAaps/TempTargets.md). Išgydę hipoglikemiją, naudokite iš anksto nustatytą „Hipo laikinas tikslas“, kad sistema neperkoreguotų, kai gliukozė vėl kils.
- Jei šiuo metu vis dar naudojate [paprastąjį režimą](#preferences-simple-mode), dabar turbūt tinkamas laikas jį išjungti.

Kad sumažintumėte siūlomų valandinės bazės pakeitimų skaičių atviro ciklo režimu, vis tiek galite naudoti patarimus, aprašytus [**3 mokymo etape**](#objectives-objective3). Be to, mažiausią procentinį rekomenduojamų valandinės bazės pakeitimų dydį galite pakeisti nustatymu „**Mažiausias pokytis atvirojo ciklo režimu**“, esančiu **Nustatymai → Ciklas**. Kuo didesnė reikšmė, tuo mažiau pranešimų apie pakeitimus gausite.

![Mažiausias pokytis atvirojo ciklo režimu](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

Nebūtina vykdyti kiekvienos sistemos rekomendacijos!
```
(objectives-objective5)=
## Tikslas 5: perpraskite atvirojo ciklo veikimą bei laikinos bazės rekomendacijas

**5 mokymo etape** pradėsite suprasti, kaip sudaromos laikinos valandinės bazės rekomendacijos. Tai apima [valandinės bazės nustatymo logiką](#aaps-screens-how-predictions-become-a-dosing-decision), poveikio analizę stebint [prognozių linijas **AAPS pagrindiniame ekrane**](#aaps-screens-prediction-lines) (arba Nightscout) ir išsamius skaičiavimus, rodomus įskiepio **OpenAPS SMB** ekrane (**Konfigūracija → DKS → Atidaryti įskiepį**).

Numatomas laikas šiam mokymo etapui atlikti: **7 dienos**.

Šiame **mokymo etape** turite nustatyti savo „Didžiausią valandinę bazę“ (max-basal) reikšmę, kaip aprašyta [OpenAPS funkcijose](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to). Šią reikšmę galima nustatyti skiltyje [Nustatymai → OpenAPS SMB](#Preferences-openaps-smb-settings). [Paprastuoju režimu](#preferences-simple-mode) **AAPS** šią reikšmę nustato automatiškai, ir jums nereikia jos keisti. Jei vis dar naudojate virtualią pompą, įsitikinkite, kad šis saugos nustatymas nustatytas ir **AAPS**, ir jūsų insulino pompoje.

Kol neprisiprasite prie **AAPS** skaičiavimų ir nustatymų, galite nustatyti savo [**profilio** KG tikslą](#profile-glucose-targets) aukštesnį nei įprastai. Galite pabandyti savo **profilyje** nustatyti siauresnį **KG tikslo** intervalą (pvz., 1 mmol/l [20 mg/dL] pločio ar siauresnį) ir stebėti, kaip sistema elgiasi.

![Ženklas „Stop“](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

Jei naudojate atvirą ciklą su virtualia pompa, **sustokite čia**. Spauskite **Patikrinti** šio **mokymo etapo** pabaigoje tik tada, kai pereisite prie „tikros“ pompos, kuri leidžia insuliną.

```

![tuščia](../images/blank.png)

(objectives-objective6)=
## Tikslas 6: pradėkite Uždaro ciklo (Closed Loop) režimą su pompos stabdymu esant žemai gliukozei

![Įspėjamasis ženklas](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
Aukštas KG reikšmes vis tiek turėsite koreguoti patys (rankiniu būdu, korekcijomis pompa arba švirkštikliu)!
```

**6 mokymo etape** uždarysite ciklą ir įjungsite jo režimą **Stabdymas esant žemai glikemijai** (LGS), kol [max IOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) nustatytas lygus nuliui. Kad atliktumėte šį **mokymo etapą**, LGS režimu turite išbūti 5 dienas. Per šį laiką patikrinkite, ar jūsų **profilio** nustatymai tikslūs ir ar LGS įvykiai nesuveikia per dažnai.

Trumpiausias laikas šiam mokymo etapui atlikti: **5 dienos**. Tai privalomas laukimo laikas. Kol šis laikas nepraėjo, negalite pereiti prie kito **mokymo etapo**.

Labai svarbu, kad jūsų dabartinis **profilis** (valandinė bazė, JIF, IA) būtų gerai patikrintas prieš uždarant ciklą **LGS** režimu. Dėl neteisingų **profilio** nustatymų galite patekti į hipoglikemijos situacijas, kurias teks gydyti rankiniu būdu. Tikslus **profilis** padės per tas 5 dienas rečiau gydyti žemą glikemiją.

**Jei vis dar dažnai ar sunkiai pasitaiko žema glikemija, apsvarstykite galimybę patikslinti [insulino tipo IVT](#Config-Builder-insulin-dia), valandinę bazę, JIF ir IA.** Kreipkitės į [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) arba [Discord](https://discord.gg/4fQUWHZ4Mw) grupę, kur apie tai daug diskutuojama.


**6 mokymo etape** **AAPS** nepaisys maxIOB nustatymo ir nustatys jį lygų nuliui. **Šis apribojimas baigsis, kai pereisite prie 7 mokymo etapo.**

Tai reiškia, kad **6 mokymo etape**, jei jutiklio gliukozės reikšmės krinta, **AAPS** sumažins jums bazinio insulino tiekimą. Tačiau jei jutiklio gliukozės reikšmės kyla, **AAPS** padidins valandinę bazę virš **profilio** reikšmės tik tada, jei **bazės AIO** yra neigiamas dėl ankstesnio **LGS**. Kitu atveju **AAPS** nedidins valandinės bazės virš dabartinės profilio reikšmės, net jei gliukozės reikšmės kyla. Šis atsargumas skirtas išvengti hipoglikemijos, kol mokotės naudoti **AAPS**.

**Todėl aukštas gliukozės reikšmes turėsite koreguoti rankiniais korekciniais insulino bolusais.**

- Jei jūsų AIO yra neigiamas (žr. ekrano kopiją žemiau), **6 mokymo etape** gali būti nustatyta laikina valandinė bazė (TBR) > 100 %.

![Neigiamo AIO pavyzdys](../images/Objective6_negIOB.png)

- Saugumo dėlei nustatykite tikslinį intervalą šiek tiek aukštesnį nei įprastai – taip turėsite papildomą saugos atsargą.
- Įjunkite režimą „Stabdymas esant žemai glikemijai“: pagrindiniame ekrane paspauskite ciklo piktogramą ir kaip veikimo režimą pasirinkite **Stabdymas esant žemai glikemijai**.
- Stebėkite aktyvias laikinas valandines bazes: žiūrėkite turkio spalvos bazės tekstą PAGRINDINIAME ekrane arba turkio spalvos bazės liniją PAGRINDINIO ekrano grafike.
- Po hipoglikemijos gydymo laikinai galite matyti gliukozės šuolius, nes atšokimo metu bazės padidinti negalima.

(objectives-objective7)=
## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

Kad atliktumėte **7 mokymo etapą**, turite uždaryti ciklą ir padidinti [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). **6 mokymo etape** **maxIOB** buvo automatiškai nustatytas lygus nuliui dėl režimo Stabdymas esant žemai glikemijai. Dabar taip nebėra. **AAPS** pradės naudoti jūsų nustatytą maxIOB reikšmę aukštoms gliukozės reikšmėms koreguoti. [Paprastuoju režimu](#preferences-simple-mode) **AAPS** maxIOB nustato automatiškai, ir jums nereikia jo keisti.

Trumpiausias laikas šiam mokymo etapui atlikti: **1 diena**. Tai privalomas laukimo laikas. Kol šis laikas nepraėjo, pereiti prie kito **mokymo etapo** negalima.

- **Uždarą ciklą** pasirinkite pagrindiniame ekrane paspausdami [ciklo piktogramą](#AapsScreens-loop-status) ir kaip veikimo režimą pasirinkdami **Uždaras ciklas**. Būkite **uždaro ciklo** režimu 1 dieną.

- Pamažu didinkite „Didžiausias AIO naudojant SMB“ (OpenAPS vadinamas „max-iob“) virš 0, kol rasite jums geriausiai tinkančius nustatymus.

Numatytoji šio nustatymo rekomendacija yra „**vidutinis valgio bolusas + 3 × didžiausia paros valandinė bazė**“, kur „didžiausia paros valandinė bazė“ yra didžiausia valandinė reikšmė bet kuriame paros intervale.

![didžiausia paros valandinė bazė](../images/MaxDailyBasal2.png)

Ši rekomendacija turėtų būti laikoma atskaitos tašku. Jei naudojate šią taisyklę, bet kylant gliukozei AAPS suleidžia per daug insulino, gali tekti:
* sumažinti „Didžiausias AIO naudojant SMB“ reikšmę;
* peržiūrėkite savo **profilio** nustatymus ir vienu metu keiskite tik vieną dalyką.

Arba, jei esate labai rezistentiškas insulinui, labai atsargiai didinkite **maxIOB** reikšmę.

Kai būsite tikri, kokia **maxIOB** reikšmė tinka jūsų ciklo dėsningumams, sumažinkite savo **KG tikslus** iki norimo lygio.

(objectives-objective8)=
## 8 mokymo etapas: jei reikia, pakoreguokite valandinę bazę ir santykius, tada įjunkite Autosens

Šiame **mokymo etape** dar kartą įvertinsite, kaip veikia jūsų **profilis**, ir naudosite [Autosens](#Open-APS-features-autosens) funkciją kaip neteisingų nustatymų rodiklį.

Trumpiausias laikas šiam mokymo etapui atlikti: **7 dienos**. Tai privalomas laukimo laikas. Kol šis laikas nepraėjo, pereiti prie kito **mokymo etapo** negalima.

7 dienas naudokite [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) ([paprastuoju režimu](#preferences-simple-mode) jis įjungtas pagal numatymą) ir stebėkite [baltą liniją **pagrindinio ekrano** grafike](#AapsScreens-section-g-additional-graphs), rodančią, kaip jūsų jautrumas insulinui didėja ar mažėja dėl sporto, hormonų ir pan. Stebėkite įskiepio **OpenAPS SMB** ekraną (**Konfigūracija → DKS → Atidaryti įskiepį**), kuriame matyti, kaip **AAPS** atitinkamai koreguoja jautrumą, valandines bazes ir tikslus.

Tai tinkamas laikas peržiūrėti [jautrumo nustatymo](#Config-Builder-sensitivity-detection) nustatymus. Savo jautrumą galite matyti pagrindiniame ekrane [papildomame grafike](#AapsScreens-section-g-additional-graphs).

Be to, galite vienkartinai pasinaudoti [Autotune](#autotune-how-autotune-calculates-adjustments), kad patikrintumėte, ar jūsų valandinės bazės vis dar tikslios, arba atlikti įprastą valandinės bazės testą.

(objectives-objective9)=
## Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

**9 mokymo etape** išbandysite ir naudosite **„supermikrobolusą (SMB)“** kaip vieną pagrindinių funkcijų. Perskaitę privalomą medžiagą gerai suprasite, kas yra SMB, kaip jie veikia ir kodėl po SMB bazė laikinai nustatoma lygi nuliui (nulinė laikina bazė).

Trumpiausias laikas šiam mokymo etapui atlikti: **28 dienos**. Tai privalomas laukimo laikas. Kol šis laikas nesibaigs, negalėsite pereiti prie kito mokymo etapo.

- [SMB skyrių šioje dokumentacijoje](#Open-APS-features-super-micro-bolus-smb) ir [oref1 aprašymą openAPS dokumentacijoje](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) būtina perskaityti, kad suprastumėte **SMB** ir **nulinės laikinos bazės** (zero-temping) principą.
- Tai atlikę, galite [padidinti maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over), kad **SMB** veiktų veiksmingiau. Dabar maxIOB apima visą **AIO**, ne tik sukauptą bazinį insuliną. Ši riba sustabdo **SMB**, kol AIO nukrenta žemiau šios reikšmės (_pvz.,_ **maxIOB** nustatytas 7 V ir valgiui padengti suleidžiamas 8 V bolusas: SMB bus sustabdyti ir neleidžiami, kol **AIO** nenukris žemiau 7 V). Gera pradžia – nustatyti **maxIOB** = **vidutinis valgio bolusas + 3 × didžiausia paros valandinė bazė**, kur „didžiausia paros valandinė bazė“ yra didžiausia valandinė reikšmė bet kuriame paros intervale. Žr. [7 mokymo etapą](#objectives-objective7).
- Įvertinkite angliavandenių įsisavinimo greitį ir, jei jis jums atrodo per lėtas ar per greitas, apsvarstykite galimybę pakeisti parametrą „min_5m_carbimpact“ skiltyje [Nustatymai → Angliavandenių įsisavinimo parametrai → min_5m_carbimpact](#Preferences-min_5m_carbimpact).

(objectives-objective10)=
## 10 mokymo etapas: Automatizacija

**Automatizacijos** tampa prieinamos, kai pradedamas **10 mokymo etapas**.

Trumpiausias laikas šiam mokymo etapui atlikti: **28 dienos**. Tai privalomas laukimo laikas. Kol šis laikas nesibaigs, negalėsite pereiti prie kito mokymo etapo.

Pirmiausia perskaitykite dokumentacijos puslapį [Automatizacija](../DailyLifeWithAaps/Automations.md).

Sukurkite pačią paprasčiausią automatizacijos taisyklę, pavyzdžiui, kad po kelių minučių būtų parodytas Android pranešimas:
- Atverkite **Valdymas → Automatizacija** ir palieskite mygtuką **+** (**Pridėti taisyklę**).
- Įveskite **Užduoties pavadinimas**, pavyzdžiui, „Mano pirmasis automatizacijos pranešimas“.
- Po **Sąlyga** palieskite „**Keisti**“.
  - Palieskite „**Pridėti sąlygą**“ ir pasirinkite „**Laikas**“. **AAPS** sukuria įrašą šiandienai su dabartiniu laiku.
  - Pakeiskite laiką taip, kad sąlyga suveiktų po kelių minučių.
  - Palieskite piktogramą **Išsaugoti** (viršuje dešinėje), kad grįžtumėte į taisyklę.
- Po **Veiksmas** palieskite „**PRIDĖTI**“ ir pasirinkite „**Pranešimas**“.
  - Veiksmo kortelėje įveskite pranešimą, pavyzdžiui, „Mano pirmoji automatizacija“.
- Palieskite piktogramą **Išsaugoti** (viršuje dešinėje) ir įsitikinkite, kad taisyklė yra **Įjungta**.
- Palaukite, kol nustatytu laiku pasirodys pranešimas (priklausomai nuo telefono, jis gali vėluoti kelias minutes)

Tada galite išbandyti naudingesnės **automatizacijos** sukūrimą. Dokumentacijos puslapyje yra keli pavyzdžiai, be to, [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) grupėje galite paieškoti „Automation“ ekrano kopijų. [Discord](https://discord.gg/4fQUWHZ4Mw) bendruomenėje taip pat yra tam skirtas kanalas.

Pavyzdžiui, jei kiekvieną rytą prieš mokyklą ar darbą tuo pačiu metu valgote tuos pačius pusryčius, galite sukurti **automatizaciją**, pvz., „tikslas-prieš-pusryčius“, kuri likus 30 minučių iki pusryčių nustatytų šiek tiek žemesnį **laikiną tikslą**. Tokiu atveju jūsų sąlygoje greičiausiai bus „pasikartojantis laikas“: pasirenkamos konkrečios savaitės dienos (pirmadienis, antradienis, trečiadienis, ketvirtadienis, penktadienis) ir konkretus laikas (06:30). Veiksmas bus „Pradėti laikiną tikslą“ su žemesne nei įprastai tikslo reikšme ir 30 minučių trukme.

## Kai visi mokymo etapai atlikti

Kai atliksite visus **mokymo etapus**, sąraše prie kiekvieno iš jų bus rodoma varnelė ir atlikimo data. Punktas **Mokymo etapai** dingsta iš apatinės navigacijos; sąrašą vis tiek galite atverti per **Konfigūracija → Apribojimai → Mokymo etapai → Atidaryti įskiepį**.

![Visi mokymo etapai atlikti](../images/objectives/objectives_completed.png)

Paspauskite „**Daugiau**“ po mokymo etapu, kad vėl pamatytumėte jo užduotis:

![Atlikto mokymo etapo informacija](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Grįžti į tikslus

Jei dėl kokios nors priežasties norite grįžti atgal **mokymo etapuose**, atverkite atliktą **mokymo etapą** mygtuku „**Daugiau**“ ir palieskite „**Išvalyti užbaigimą**“:

![Grįžti į tikslus](../images/Objective_ClearFinished.png)

Taip pat **mokymo etapą**, kurį dabar atliekate, galima pradėti iš naujo mygtuku „**Išvalyti pradžią**“.
