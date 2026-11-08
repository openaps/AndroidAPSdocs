# Atsarginių kopijų kūrimas ir atkūrimas

Įdiegta jūsų telefone, AAPS tampa „medicinos priemone“, kuria pasikliaujate kasdien. Labai rekomenduojama turėti atsarginį planą tam atvejui, jei telefonas suges, bus pavogtas ar pamestas. Todėl būtina pasiruošti, užduodant sau klausimą: „O kas, jei…?“

Norint atkurti AAPS sąranką esamame ar naujame telefone, svarbu šiuos dalykus laikyti saugioje vietoje (t. y. ne telefone). Geriausia laikyti bent dvi atskiras atsargines kopijas: vietiniame standžiajame diske, USB atmintinėje ir (geriausia) debesų saugykloje, pvz., Google Drive ar Microsoft 365 OneDrive. Jei atsargines kopijas laikysite debesyje, viską, ko reikia sąrankai atkurti, visada pasieksite iš telefono bet kur ir bet kada.

Apsvarstykite galimybę įsigyti atsarginį telefoną ir pasipraktikuoti į jį atkurti AAPS, kad įsitikintumėte, jog jis veikia taip, kaip tikitės. Šis žingsnis suteiks pasitikėjimo, kad atsarginis planas veikia ir kad galėsite be pertraukų toliau naudoti AAPS, jei pagrindinis telefonas taptų nepasiekiamas.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

Kad galėtumėte atkurti sistemą, svarbu turėti po ranka:

- Savo **Android Studio raktų saugyklos failą** ir jo **slaptažodį**: jų reikia AAPS .APK diegimo failui (iš naujo) sukurti.
- Naujausią **AAPS .APK diegimo failo** kopiją
- Naujausią **eksportuotų nustatymų** failą: svarbiems nustatymams atkurti (į jį įeina ir jūsų mokymo etapai!).
- Savo **AAPS pagrindinį slaptažodį**
- Papildomų priemonių atsarginės kopijos: pvz., BYODA ir (arba) xDrip.
- Asmenines pastabas apie savo sąranką.

Toliau nurodyta, kurių dalykų atsargines kopijas rekomenduojama laikyti.

## Atsarginių kopijų kūrimas

### Raktų saugyklos (keystore) failas iš kompiuterio, kuriuo kūrėte APK
Kai Android Studio kuria .APK diegimo failą, jis **pasirašo .APK diegimo failą raktų saugyklos failu ir slaptažodžiu**. Norint atnaujinti esamą AAPS, atnaujinimo .APK diegimo failas turi būti pasirašytas ta pačia raktų saugykla, kuri buvo naudota pirmą kartą diegiant. Atnaujinant visi nustatymai ir AAPS duomenų bazė išlieka. Atminkite, kad be jos pirmiausia turėsite pašalinti esamą programėlę, o tada [iš naujo įdiegti](#reinstall-aaps) ir iš naujo sukonfigūruoti AAPS.

Jei išsaugosite raktų saugyklą ir jos slaptažodį, ateityje atnaujinti APK bus daug paprasčiau, ypač jei programėlę reikės kurti naujame kompiuteryje. Kaip naudoti raktų saugyklą kuriant naują APK, žr. skyrių [AAPS atnaujinimas](../Maintenance/UpdateToNewVersion.md).

**Kada daryti atsarginę kopiją:** raktų saugyklos atsarginę kopiją reikia padaryti pirmą kartą sukūrus **AAPS** .APK diegimo failą.

**Kaip daryti atsarginę kopiją:** suraskite raktų saugyklos kelią. Jei jo neprisimenate, galite jį rasti Android Studio pasirinkę **Build > APK > Next**. Kelias bus nurodytas lauke „Key store path“. Failų naršykle eikite šiuo keliu ir padarykite savo raktų saugyklos failo (su plėtiniu `.jks`) kopiją. Išsaugokite jį saugioje vietoje debesyje, jei kompiuteris taptų nepasiekiamas. Taip pat būtinai užsirašykite raktų saugyklos slaptažodį (key store password), rakto pseudonimą (key alias) ir rakto slaptažodį (key password).

### Naujausio APK kopijos
Jei pagrindinis **AAPS** telefonas pamestas ar sugadintas, turėdami APK kopiją galėsite greitai vėl naudoti **AAPS** naujame telefone. Pastaba: taip pat reikės nustatymų atsarginės kopijos, kaip aprašyta toliau.

**Kada daryti atsarginę kopiją:** laikykite naujausio APK, kurį įdiegėte pagrindiniame **AAPS** telefone, atsarginę kopiją. Galite pasilikti ir vieną ankstesnę versiją, jei dėl kokios nors priežasties prireiktų prie jos grįžti.

**Kaip daryti atsarginę kopiją:** laikykite kopiją kompiuteryje, kuriame APK kūrėte su Android Studio. Be to, rekomenduojama diegimo APK kopiją laikyti debesų saugykloje. Įsitikinkite, kad prireikus mokėsite rasti abi atsargines kopijas. Apsvarstykite galimybę šioms atsarginėms kopijoms sukurti atskirus aplankus.

### AAPS nustatymų failas (dar vadinamas 'Preferences')

```{admonition} Where are preferences stored on my phone?
:class: tip
Savo nustatymus rasite **AAPS aplanke**, kurį pasirinkote per [AAPS sąranką](#SetupWizard-StoragePermission).</br>
**AAPS aplanką** taip pat galite pakeisti ekrane **Servisas** (**meniu** (☰) > **Servisas**), žr. [Vietinio AAPS aplanko nustatymas](#preferences-maintenance-logdirectory).
```

Turėdami APK diegimo failo kopiją (žr. aukščiau) ir savo **nustatymų** failą, galite greitai pradėti naudoti AAPS esamame ar naujame telefone.

**Nustatymų** failas naudojamas AAPS programėlei pritaikyti jūsų sąrankai. Jame yra tokie duomenys kaip skilties **Konfigūracija** nustatymai, mokymo etapų būsena, ryšio su trečiųjų šalių paslaugomis nustatymai (pvz., Nightscout, Tidepool), automatizacijos ir profiliai.

Eksportavę AAPS nustatymus į failą, galite atkurti konfigūraciją tokią, kokia ji buvo tam tikru metu. Kaip minėta, be visų konfigūracijos nustatymų, eksporto faile yra ir jūsų mokymo etapų būsena, kurią reikia atkurti **(iš naujo) diegiant** AAPS. Be jos, norėdami įjungti uždarą ciklą, turėsite iš naujo atlikti visus mokymo etapus. Nustatymų failai taip pat leidžia atkurti „paskutinius gerai veikusius“ nustatymus ir atšaukti konfigūracijos pakeitimus.

**Kada daryti AAPS nustatymų atsarginę kopiją:**
* Kiekvieną kartą užbaigę mokymo etapą, kad neprarastumėte pažangos. _Jei neturėsite **nustatymų** kopijos, perdiegę AAPS arba pakeitę telefoną turėsite vėl atlikti visus mokymo etapus._

* Kiekvieną kartą, kai planuojate didelius konfigūracijos pakeitimus (keičiate SMB nustatymus, insulino tipą, pompą, automatizacijas), padarykite **nustatymų** atsarginę kopiją prieš pakeitimus ir po jų. Taip turėsite naujausius nustatymus ir jų kopiją, kokie jie buvo prieš pakeitimus, jei prireiktų prie jų grįžti.

* Tik pompų be vamzdelio (pvz., Omnipod ir Medtrum) naudotojams: **nustatymų** faile yra dabartinio Pod ryšio duomenys, todėl su juo galima atkurti ryšį su tuo Pod naujame telefone. Jei neturite nustatymų, eksportuotų jau pradėjus naudoti dabartinį Pod, keisdami telefoną turėsite pradėti naują Pod.

**Kaip daryti atsarginę kopiją rankiniu būdu:**

1. Jei **nustatymus** importuojate ar eksportuojate pirmą kartą, turėsite nustatyti pagrindinį slaptažodį [Nustatymai > Apsauga](#Preferences-master-password). Nustatykite slaptažodį ir užsirašykite jį saugioje vietoje. _Be šio slaptažodžio negalėsite pasiekti savo **nustatymų** atsarginių kopijų._

2. **AAPS** pagrindiniame ekrane atidarykite **meniu** (☰) > **Servisas**. Ženkleliais **Vietinė saugykla** ir **Debesis** šalia **Eksportuoti nustatymus** pasirinkite, kur išsaugoti failą (žr. **Nustatymų eksportavimas ir importavimas** toliau), tada bakstelėkite **Eksportuoti nustatymus**. **AAPS** parodo, kur bus išsaugotas failas: pasirinkus **Vietinė saugykla** – failo pavadinimą, pasirinkus **Debesis** – **Google Drive**. Bakstelėkite **OK**.

   ![Nustatymų eksportavimas į vietinį failą](../images/Maintenance/export_settings_confirm_local.png)

   ![Nustatymų eksportavimas į Google Drive](../images/Maintenance/export_settings_confirm_cloud.png)

   Įveskite aukščiau nustatytą pagrindinį slaptažodį ir bakstelėkite **OK**.

   ![Pagrindinis slaptažodis eksportavimui](../images/Maintenance/export_settings_password.png)

   Eksportavimą patvirtina pranešimas **Nustatymai eksportuoti** (vietinė saugykla) arba **Sėkmingai eksportuota į debesį** (debesis).

   ![Pranešimas „Nustatymai eksportuoti“](../images/Maintenance/export_settings_done_local.png)

   ![Pranešimas „Sėkmingai eksportuota į debesį“](../images/Maintenance/export_settings_done_cloud.png)

3. Telefono failų naršykle (dažniausiai vadinama „Files“ arba „Mano failai“) eikite į Internal Storage > AAPS > preferences. Čia matysite visų eksportuotų nustatymų failų kopijas. Failo pavadinimas turi būti `YYYY-MM-DD_Time_appname.json`. Įkelkite šį failą į pasirinktą debesų saugyklą. Tada iš debesų saugyklos atsisiųskite kopiją ir į savo kompiuterį.

(ExportImportSettings-Settings-Export)=

## Settings Export

```{admonition} Where are preferences stored on my phone?
:class: tip
Savo nustatymus rasite **AAPS aplanke**, kurį pasirinkote per [AAPS sąranką](#SetupWizard-StoragePermission).</br>
**AAPS aplanką** taip pat galite pakeisti ekrane **Servisas** (**meniu** (☰) > **Servisas**), žr. [Vietinio AAPS aplanko nustatymas](#preferences-maintenance-logdirectory).
```

Rekomenduojama reguliariai eksportuoti nustatymus, ypač prieš konfigūracijos pakeitimus ir po jų. Eksportuoti galite **rankiniu būdu arba (geriau) per automatizaciją**. Būtinai užsirašykite AAPS pagrindinį slaptažodį ir darykite nustatymų failų atsargines kopijas – nukopijuokite juos iš telefono, pavyzdžiui, į debesų saugyklą.

**Pastaba**: _Eksportuoti nustatymai užšifruojami jūsų AAPS pagrindiniu slaptažodžiu: be pagrindinio slaptažodžio, kuris buvo naudotas eksportuojant, nustatymų failo importuoti negalėsite!_

If you forgot your master password, you can [reset it](#FAQ-reset-master-password), but settings files exported with the old password still need the old one.

### Nustatymų eksportavimas ir importavimas
Norėdami eksportuoti ar importuoti nustatymus, atidarykite **meniu** (☰) ir pasirinkite **Servisas**. Skiltyje **Failų tvarkymas** ženkleliai **Vietinė saugykla** ir **Debesis** šalia **Eksportuoti nustatymus** ir **Importuoti nustatymus** nurodo, kur nustatymų failas išsaugomas arba iš kur nuskaitomas: **Vietinė saugykla** – tai AAPS aplankas jūsų telefone, **Debesis** galima naudoti, kai nustatytas [Debesies aplankas](#preferences-maintenance-cloud). Bakstelėjus ženklelį, jis įjungiamas arba išjungiamas; bent vienas visada lieka pasirinktas, o abiem eilutėms galioja tas pats pasirinkimas. Tada bakstelėkite pačią eilutę **Eksportuoti nustatymus** arba **Importuoti nustatymus**, kad pradėtumėte.

![Meniu Servisas su eilutėmis „Eksportuoti nustatymus“ ir „Importuoti nustatymus“](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automatinis nustatymų eksportavimas

Norėdami nustatymus eksportuoti automatiškai [(**žr. Automatizacija**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export), atidarykite [**Nustatymai** > **Servisas**](#preferences-maintenance-settings), išskleiskite **Automatinis nustatymų eksportavimas** ir įjunkite **Įjungti automatinį nustatymų eksportavimą**.

Dabar galite nustatyti [automatizaciją](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export), kuri eksportuotų nustatymus reguliariai (_pvz._, kas savaitę) arba po Pod keitimo.

_**Pastaba:** importuojant nustatymus, visada reikia įvesti AAPS pagrindinį slaptažodį!_

![Nustatymai > Servisas > Automatinis nustatymų eksportavimas su jungikliu „Įjungti automatinį nustatymų eksportavimą“](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Atkūrimas iš atsarginių kopijų naujame telefone arba po naujo AAPS įdiegimo

```{admonition} Where are preferences stored on my phone?
:class: tip
Savo nustatymus rasite **AAPS aplanke**, kurį pasirinkote per [AAPS sąranką](#SetupWizard-StoragePermission).</br>
**AAPS aplanką** taip pat galite pakeisti ekrane **Servisas** (**meniu** (☰) > **Servisas**), žr. [Vietinio AAPS aplanko nustatymas](#preferences-maintenance-logdirectory).</br>
Jei **AAPS** praranda prieigą prie šio aplanko (taip gali nutikti perdiegus programėlę arba išvalius jos saugyklą), rodomas pranešimas **Prarasta prieiga prie AAPS aplanko** ir nustatymai telefone nebeišsaugomi, kol [vėl nepasirinksite aplanko](#preferences-maintenance-logdirectory).
```

Vadovaukitės šiomis instrukcijomis, jei turite APK ir **nustatymų** atsarginę kopiją, kurią norite įkelti į naują telefoną, arba jei dėl kokios nors priežasties reikėjo pašalinti ir iš naujo įdiegti APK esamame telefone.

_Jei atnaujinate **AAPS** APK failu, sukurtu su ta pačia raktų saugykla, šių veiksmų atlikti nereikia. Vis dėlto prieš atnaujinant vis tiek patariama sukurti atsarginę kopiją._

Jei atnaujinate **AAPS** po to, kai pametėte ar pakeitėte pradinę raktų saugyklą (pvz., naudojate naują kompiuterį APK kurti ir neperkėlėte raktų saugyklos), pirmiausia sukurkite visų nustatymų atsargines kopijas, kaip aprašyta aukščiau, o tada pašalinkite esamą **AAPS** versiją iš telefono. Visą procedūrą rasite skyriuje [AAPS perdiegimas su nauja raktų saugykla](#reinstall-aaps).

Jei reikia, prieš atlikdami toliau nurodytus veiksmus [nustatykite savo NGJ / glikemijos šaltinio imtuvą](../Getting-Started/CompatiblesCgms.md)

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
**Nustatymų** (Preferences) faile yra Pod arba pompos (patch) sesija, kuri buvo aktyvi, kai failą eksportavote.
- **Eksportuokite iš karto po kiekvieno Pod ar pompos (patch) aktyvavimo** ir nukopijuokite failą iš telefono.
- **Tas pats telefonas, Pod vis dar veikia:** laukelio **Taip pat pakeisti pompos nustatymus** nežymėkite. Dabartinis Pod išlieka, importuojami tik kiti nustatymai.
- **Naujas telefonas perima Pod:** pažymėkite **Taip pat pakeisti pompos nustatymus** ir naudokite tik failą, eksportuotą naudojant tą Pod, kurį nešiojate dabar. Failas iš ankstesnio Pod pakeičia dabartinio Pod sesiją, ir jums teks pradėti naują Pod.
- **Per klaidą importuota sena Pod sesija:** **AAPS** vis bando susisiekti su tuo Pod, ir jūs negalite aktyvuoti naujo. Išjunkite jį; jei nepavyksta, pašalinkite jį (pvz., Omnipod DASH atveju žr. [Pod pašalinimas](#omnipod-dash-discard-pod)).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
Pagal numatytuosius nustatymus importas pompos nustatymų nekeičia: **Konfigūracija** pasirinkta pompa, jos susiejimas ir visi kiti jos nustatymai šiame telefone lieka tokie, kokie buvo. Laukelį **Taip pat pakeisti pompos nustatymus** importavimo ekrane pažymėkite tik tada, kai atkuriate nustatymus naujame telefone, kuris turi perimti tą pačią pompą. Nustatymai, kurių faile nėra, importuojant niekada neištrinami.
```

1. Naudodami aukščiau minėtą APK atsarginę kopiją, vadovaukitės [naujo įdiegimo](../SettingUpAaps/TransferringAndInstallingAaps.md) instrukcijomis

2. Paleiskite **AAPS** ir suteikite visus prašomus leidimus

3. Išeikite iš sąrankos vedlio. Importuosime visus reikiamus nustatymus iš **nustatymų** atsarginės kopijos

4. **AAPS** pagrindiniame ekrane paspauskite **Suteikti** ir suteikite visus leidimus, išvardytus viršuje esančiame skydelyje **Reikalingi leidimai**

5. **AAPS** pagrindiniame ekrane nustatykite pagrindinį slaptažodį [Nustatymai > Apsauga](#Preferences-master-password) – tokį patį, kokį naudojote atsarginėms kopijoms.

6. Jei dar to nepadarėte, [nustatykite **AAPS aplanką**](#preferences-maintenance-logdirectory): **AAPS** pagrindiniame ekrane atidarykite **meniu** (☰) > **Servisas** > **AAPS aplankas**.

7. **AAPS** pagrindiniame ekrane atidarykite **meniu** (☰) > **Servisas** > **Eksportuoti nustatymus** > įveskite aukščiau nustatytą pagrindinį slaptažodį > **OK**. Taip telefone bus sukurtas aplankas preferences, jei jo dar nėra.

8. Iš debesų saugyklos atsisiųskite savo **nustatymų** failo atsarginę kopiją.

9. Failų naršykle (dažniausiai vadinama „Files“ arba „Mano failai“) perkelkite failą iš atsisiuntimų į `/internal storage/AAPS/preferences`, jei jūsų **AAPS aplankas** nustatytas į `/internal storage/AAPS`

10. **AAPS** pagrindiniame ekrane atidarykite **meniu** (☰) > **Servisas** ir bakstelėkite **Importuoti nustatymus**. Pasirinkite nustatymų failą, iš kurio norite atkurti nustatymus (naujausias yra viršuje). Įsitikinkite, kad pasirinkote tinkamą nustatymų failą: bus rodomi visi .json failai iš aplanko preferences (arba iš debesies aplanko, jei pasirinkta **Debesis**).

    ![Importuojamų nustatymų failų sąrašas](../images/Maintenance/import_settings_files.png)

    **AAPS** parodo failo informaciją. Įveskite aukščiau nustatytą pagrindinį slaptažodį ir bakstelėkite **Iššifruoti & peržiūrėti**.

11. Kai failas iššifruotas, nuspręskite, ką daryti su pompos nustatymais. Naujame telefone, kuris perima tą pačią pompą, pažymėkite **Taip pat pakeisti pompos nustatymus**, kad susiejimas ir pompos nustatymai būtų paimti iš failo. Nežymėkite laukelio, jei norite palikti pompą, su kuria šis telefonas jau susietas. Tada bakstelėkite **Importuoti**.

    ![Iššifruotas nustatymų failas su laukeliu „Taip pat pakeisti pompos nustatymus“ ir mygtuku „Importuoti“](../images/Maintenance/import_settings_review.png)

12. **AAPS** klausia **Taikyti importuotus nustatymus?** ir parodo, kiek nustatymų pasikeis, o jei laukelio nepažymėjote – kiek pompos nustatymų bus išsaugota. Kol kas niekas neįrašyta, todėl **Atšaukti** palieka telefoną lygiai tokį, koks jis buvo. Bakstelėkite **OK**, kad pritaikytumėte.

    ![Langas „Taikyti importuotus nustatymus?“](../images/Maintenance/import_settings_apply.png)

13. **AAPS** importuotus nustatymus pritaiko iš karto, nepaleisdama programėlės iš naujo. Iš naujo paleidžiami tik tie įskiepiai, kurių nustatymai pasikeitė. Kol tai vyksta, **AAPS** rodo **Taikomi nustatymai…**; jei pompa užimta, rodoma **Laukiama pompos…**, o nustatymai pritaikomi, kai pompa atsilaisvina. Jei pompa po vienos minutės vis dar užimta, **AAPS** pasiūlo bandyti dar kartą. Pranešimas **Nustatymai pritaikyti** patvirtina, kad importuoti nustatymai naudojami. Visos terapijos, kurios laukė eilėje importo metu, atmetamos, ir **AAPS** praneša, kad jos atšauktos, todėl niekas nėra siunčiama į pompą du kartus.

    ![Pranešimas „Nustatymai pritaikyti“](../images/Maintenance/import_settings_applied.png)

Jei faile pasirinkta pompa, kurios ši **AAPS** versija neturi, **AAPS** perjungia į **Virtuali pompa** ir apie tai praneša. Vėl pasirinkite savo pompą skiltyje **Konfigūracija** ir patikrinkite jos nustatymus.

14. Tik pompų be vamzdelio (Omnipod ir Medtrum) naudotojams: jei pažymėjote **Taip pat pakeisti pompos nustatymus**, o jūsų **nustatymų** atsarginė kopija buvo padaryta ne su tuo Pod, kurį dabar naudojate, insulino tiekimui pradėti turėsite pradėti naują Pod.

**Trikčių šalinimas:** jei **AAPS** pagrindiniame ekrane nepavyksta nustatyti aktyvaus profilio, atidarykite **meniu** (☰) viršuje kairėje > **Konfigūracija** > **Pompa** > perjunkite į **Virtuali pompa** > tada vėl perjunkite į savo pompos tipą

### Pastaba Dana RS vartotojams

- Jei pažymėjote **Taip pat pakeisti pompos nustatymus**, importuojami ir pompos ryšio nustatymai: **AAPS** naujame telefone jau „žinos“ pompą, todėl Bluetooth paieškos nepradės.
- Naują telefoną ir pompą susiekite rankiniu būdu.