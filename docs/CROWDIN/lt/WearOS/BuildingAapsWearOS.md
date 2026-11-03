# Wear AAPS programėlės kūrimas

**AAPS** programėlė Wear OS išmaniajam laikrodžiui (**Wear APK**, `aaps-wear-….apk`) yra atskiras diegimo failas, ne tas pats kaip **AAPS** telefono programėlė. Reikia abiejų: telefono programėlė vykdo ciklą, o laikrodžio programėlė rodo jo duomenis ir gali jam siųsti komandas. Laikrodžio programėlė įdiegiama iš telefono, žr. [AAPS nustatymas Wear OS laikrodyje](WearOsSmartwatch.md).

Abi programėlės veikia kartu tik tada, kai jos atitinka viena kitą:

- **Ta pati AAPS versija** telefone ir laikrodyje.
- **Ta pati raktų saugykla**, kuria pasirašytos abi programėlės.

Paprasčiausias būdas tai užtikrinti – sukurti abi programėles **tuo pačiu metu**, tame pačiame kūrime. Kūrimas naršyklėje tai padaro už jus: kiekvienas kūrimas sukuria kartu telefono APK ir Wear APK. Su Android Studio arba komandine eilute Wear APK kuriate kaip antrą žingsnį iškart po telefono APK.

```{note}
Jau naudojate **AAPS** telefone, bet neturite Wear APK iš to paties kūrimo? Sukurkite abi programėles iš naujo su ta pačia raktų saugykla ir iš naujo įdiekite ir telefono programėlę. Wear APK, sukurtas po kelių mėnesių arba su kita Android Studio versija, greičiausiai nebus suderinamas su telefono programėle.
```

## Palaikomos Wear OS versijos

**AAPS** veikia laikrodžiuose su **Wear OS 3.0, 3.2 arba 3.5** (Android 11, API lygis 30) **arba naujesne** (Wear OS 4, 5 ir 6). Laikrodžiai su Wear OS 2 nepalaikomi.

```{warning}
AAPS ciferblatai prieinami Wear OS išmaniesiems laikrodžiams su API lygiu nuo 30 iki 33 (Wear OS 3.0, 3.2, 3.5 ir 4).<br>
Naujesnės Wear OS versijos vis labiau gadina AAPS ciferblatus – žr. [Wear OS ciferblatų pakeitimai](#wearos-watchface-changes) ir [Wear OS 5 apribojimai](#BuildingAapsWearOs-WearOS5).
```

(building-aaps-wear-os-method)=

## Wear APK gavimas pagal jūsų kūrimo būdą

Skaitykite skyrių apie būdą, kuriuo [kuriate AAPS](../SettingUpAaps/BuildingAaps.md).

(building-aaps-wear-os-browser)=

### Kūrimas naršyklėje (rekomenduojama)

**Nieko papildomai daryti nereikia.** Kiekvienas kūrimas naršyklėje sukuria du failus iš to paties šaltinio kodo ir su ta pačia raktų saugykla:

- `aaps-….apk`: telefono programėlė.
- `aaps-wear-….apk`: laikrodžio programėlė.

Wear APK atitinka kūrimui pasirinktą [variantą](#browserbuild-variant): `fullRelease` sukuria **AAPS Wear** programėlę, `aapsclientRelease` – **AAPSClient Wear** programėlę, `pumpcontrolRelease` – **PumpControl Wear** programėlę. Kiekviena Wear programėlė bendrauja tik su ją atitinkančia telefono programėle.

Kur rasti Wear APK:

- **AAPS Builder**: on the build page, scroll down to **Artifacts** and download `aaps-wear-….apk` next to the phone app, as shown in [Step 5 – Install the app on your phone](#aaps-builder-step5). Atsisiųskite jį į telefoną, kuriame veikia **AAPS**, jei laikrodžio programėlę diegiate iš telefono (Wear Installer 2 arba Easy Fire Tools), arba į kompiuterį, jei naudojate ADB.

  ![Artefaktai (Artifacts) su telefono ir laikrodžio programėlėmis](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Fork su Google Drive**: atidarykite savo Google Drive, aplanką `AAPS`, tada sukurtos versijos aplanką. Jame yra telefono APK ir Wear APK, žr. [4 žingsnis – Sukurkite APK](#github-build-apk).

  ![Vieta Google Drive](../images/update/CI/GitHubActions5.png)

Atsarginėse kopijose laikykite Wear APK kartu su telefono APK. Naudojant **AAPS Builder**, failai kūrimo puslapyje saugomi tik 14 dienų.

Toliau: įdiekite Wear APK laikrodyje, žr. [AAPS nustatymas Wear OS laikrodyje](WearOsSmartwatch.md).

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear APK kuriamas taip pat kaip telefono APK – kaip antras pasirašytas kūrimas. Tai darykite iškart po telefono APK, su ta pačia Android Studio versija ir ta pačia raktų saugykla.

- Vadovaukitės [kūrimo su Android Studio](../SettingUpAaps/ComputerBuild.md) instrukcijomis.
- Kai pasieksite [modulio pasirinkimą](#Building-APK-wearapk) skyriuje „Sukurkite pasirašytą AAPS APK“, būtinai pasirinkite **`AndroidAPS.wear`**.

![Wear modulis](../images/Building-the-App/wear_build1.png)

Pasirinkite „**fullRelease**“, kad būtų sukurtas **AAPS** Wear APK failas.

![Wear modulis](../images/Building-the-App/wear_build2.png)

Jei norite, išskleidžiamajame meniu vietoj to galite pasirinkti **„pumpcontrolRelease“**. Tada galėsite tik nuotoliniu būdu valdyti pompą, bet be ciklo.

Toliau: įdiekite Wear APK laikrodyje, žr. [AAPS nustatymas Wear OS laikrodyje](WearOsSmartwatch.md).

(building-aaps-wear-os-troubleshooting)=

#### Kūrimo su Android Studio trikčių šalinimas

Kuriant pilną **AAPS** programėlę (ir iš tikrųjų bet kurią pasirašytą programėlę), Android Studio tame pačiame aplanke sukuria .json failą. Dėl to vėliau atsiranda klaidų dėl [neįtrauktų pakeitimų (uncommitted changes)](#troubleshooting_androidstudio-uncommitted-changes), kai bandote sukurti kitą pasirašytą programėlę, pavyzdžiui, **AAPS** Wear programėlę. Greičiausias būdas tai išspręsti – atidaryti aplanką, kuriame buvo sukurta pilna AAPS programėlė. Jūsų aplankas tikriausiai yra panašus į:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\full\release.`

Ištrinkite nereikalingą .json failą arba perkelkite jį iš aplanko. Tada vėl bandykite sukurti **AAPS** Wear programėlę. Jei tai nepadeda, išsamesnis [trikčių šalinimo vadovas](../GettingHelp/TroubleshootingAndroidStudio.md) padės rasti failą, kuris sukelia problemą. Tai gali būti ir jūsų raktų saugyklos failas.

(building-aaps-wear-os-cli)=

### Komandinė eilutė

Vadovaukitės [Kūrimo instrukcijomis naudojant komandinę eilutę](../SettingUpAaps/CLIBuild.md) ir pakartokite kompiliavimo bei pasirašymo žingsnius `wear` moduliui su ta pačia raktų saugykla:

```sh
./gradlew :wear:assembleFullRelease
```

Nepasirašytas Wear APK įrašomas į `wear/build/outputs/apk/full/release/`. Pasirašykite jį su `apksigner` lygiai taip pat kaip telefono APK, tada įdiekite jį laikrodyje, žr. [AAPS nustatymas Wear OS laikrodyje](WearOsSmartwatch.md).
