# Kaip nustatyti Huawei telefoną

**Kuriems telefonams skirtas šis puslapis:** Huawei telefonams su **EMUI 12–EMUI 15**. Visos šios versijos paremtos Android 12. Tai mažiausia Android versija, kurios reikia dabartinei **AAPS** versijai. Telefone su senesne EMUI versija galite naudoti tik [senesnę AAPS versiją](#maintenance-android-version-aaps-version).

```{admonition} HarmonyOS NEXT / HarmonyOS 5 telefonai :class: warning

Naujausiuose Kinijoje parduodamuose Huawei telefonuose veikia HarmonyOS NEXT (HarmonyOS 5 ir naujesnė). Ši sistema nebėra Android, todėl joje **AAPS** neveikia. ```

Huawei telefonai labai agresyviai uždaro fone veikiančias programėles. Visus toliau nurodytus nustatymus pritaikykite **AAPS** ir savo NGJ programėlei (pavyzdžiui, xDrip+ arba Juggluco). Kitaip, kai ekranas išjungtas, ciklas ir gliukozės rodmenys gali sustoti.

Meniu pavadinimai skirtinguose modeliuose gali šiek tiek skirtis. Jei nerandate nustatymo, įveskite jo pavadinimą paieškos juostoje **Settings** (Nustatymai) viršuje.

Toliau pateiktos ekrano nuotraukos yra iš senesnės EMUI versijos. EMUI 12–15 versijose nustatymai tokie patys.

## Baterijos optimizavimo ignoravimas

1. Atverkite **Settings > Apps > Apps**.
2. Viršutiniame dešiniajame kampe spauskite meniu **⋮** ir pasirinkite **Special access > Battery optimization** (specialioji prieiga > baterijos optimizavimas).
3. Spauskite rodyklę sąrašo viršuje ir pasirinkite **All apps** (visos programos).
4. Pasirinkite **AAPS** ir nurodykite **Don't allow** (neleisti). Šiame sąraše esančių programėlių Huawei nebeoptimizuos.
5. Tą patį pakartokite su savo NGJ programėle.

![Huawei - ignoruoti baterijos optimizavimą](../images/Huawei_BatteryOptimization.png)

## App launch: leiskite veikti fone

1. Atverkite **Settings > Battery > App launch** (arba **Settings > Apps > Apps >** pasirinkite programėlę **> Battery > App launch**).
2. Raskite **AAPS** ir išjunkite **Manage automatically** (tvarkyti automatiškai).
3. Lange **Manage manually** (tvarkyti rankiniu būdu) įjunkite visas tris parinktis: 
    - **Auto-launch (automatinis paleidimas)**
    - **Secondary launch** (programėlę gali paleisti kitos programėlės)
    - **Run in background (veikimas fone)**
4. Tą patį pakartokite su savo NGJ programėle.

![Huawei baterijos funkcijos](../images/Huawei_BatteryOptions.png)

## AAPS užrakinimas paskutinių programėlių sąraše

Užrakintos programėlės neuždaromos, kai išvalote paskutinių programėlių sąrašą.

1. Atverkite paskutinių programėlių sąrašą.
2. Perbraukite žemyn ant **AAPS** kortelės. Ant kortelės atsiras spynos ženklas.
3. Tą patį padarykite su savo NGJ programėle.

![Huawei - užrakinti programėlę](../images/Huawei_LockApp.png)

## Energijos taupymo režimas

Laikykite išjungtus režimus **Power saving mode** ir **Ultra power saving** (**Settings > Battery**). Jie uždaro fone veikiančias programėles, nepaisant aukščiau nurodytų nustatymų.

## Jei AAPS vis tiek sustoja fone

Daugiau Huawei skirtų sprendimų rasite svetainėje [Don't kill my app](https://dontkillmyapp.com/huawei).

## Honor telefonai

Honor dabar yra atskiras prekės ženklas, o jo telefonuose veikia MagicOS, ne EMUI. Fono nustatymai labai panašūs: programėlės baterijos nustatymuose ieškokite **App launch**, išjunkite **Manage automatically** ir leiskite visas tris parinktis, tada pašalinkite programėlę iš baterijos optimizavimo.