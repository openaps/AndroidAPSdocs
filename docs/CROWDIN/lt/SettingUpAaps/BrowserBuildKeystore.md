(aaps-ci-preparation)=

# Kūrimas naršyklėje – 2 žingsnis: Sukurkite pasirašymo raktų saugyklą

```{note}
Tai yra **2 žingsnis** iš [Kūrimas naršyklėje](BrowserBuild.md). Pirmiausia atlikite [1 žingsnį – Sukurkite savo GitHub fork](BrowserBuildFork.md).
```

AAPS turi būti pasirašyta privačiais raktais, kurie saugomi **Java KeyStore (JKS)** raktų saugykloje. Tai svarbiausias viso proceso sprendimas, nes nuo jo priklauso, ar vėliau galėsite **atnaujinti** AAPS jos neįdiegdami iš naujo.

```{note}
Kituose žingsniuose privačią informaciją (savo raktų saugyklą, o vėliau ir prieigą prie Google Drive) išsaugosite GitHub kaip **slaptąsias reikšmes (secrets)**. Slaptoji reikšmė (secret) – tai tiesiog užšifruota reikšmė, kurią gali perskaityti tik jūsų pačių kūrimas: niekas kitas, net žmonės, žiūrintys į jūsų fork, jos nemato. Taip jūsų kūrimas lieka tik jūsų.
```

## Pasirinkite raktų saugyklos variantą

Perskaitykite abu variantus ir pasirinkite tą, kuris tinka jūsų situacijai.

### 1 variantas – Sugeneruokite naują raktų saugyklą (nauji naudotojai)

Rinkitės šį variantą, jei tinka **bent vienas** iš šių teiginių:

- AAPS kuriate **pirmą kartą**.
- Neturite raktų saugyklos iš ankstesnio kūrimo su Android Studio (kompiuteryje).
- Pamiršote raktų saugyklos slaptažodį arba pseudonimą (alias).

```{warning}
Kuriant AAPS **1 variantu** sukuriama visiškai nauja raktų saugykla, todėl **esamos AAPS atnaujinti vietoje nebus galima**. Norėdami pereiti prie šio naujo kūrimo, turite eksportuoti nustatymus, pašalinti senąją AAPS, įdiegti naująją ir vėl importuoti nustatymus. Atlikite veiksmus, aprašytus skyriuje [AAPS įdiegimas iš naujo su nauja raktų saugykla](#reinstall-aaps).
```

**→ [Toliau: 1 variantas – Sugeneruokite naują raktų saugyklą](BrowserBuildO1.md)**

### 2 variantas – Įkelkite esamą raktų saugyklą (esami / buvę naudotojai)

Rinkitės šį variantą, jei **jau turite** `.jks` raktų saugyklą, kurią naudojote ankstesniam AAPS kūrimui kompiuteryje su Android Studio, **ir** žinote jos slaptažodį bei pseudonimą (alias) (dažniausiai `key0`).

Taip esamą AAPS bus galima toliau atnaujinti: būsimi atnaujinimai naudos tą pačią raktų saugyklą.

**→ [Toliau: 2 variantas – Įkelkite esamą raktų saugyklą](BrowserBuildO2.md)**

----

```{note}
Kitame puslapyje pasirinksite savo įrenginį (kompiuterį arba iPhone). Kiekvieno įrenginio puslapyje paaiškinta, kaip tame įrenginyje teisingai atsisiųsti ir atidaryti paruošimo failą ir sukurti raktų saugyklą. Sukurta AAPS programėlė bus išsaugota jūsų Google Drive.
```

**Toliau: pasirinkite [1 variantą](BrowserBuildO1.md) arba [2 variantą](BrowserBuildO2.md) aukščiau, tada atlikite veiksmus, aprašytus jūsų įrenginiui skirtame puslapyje.**

----

(ci-keystore-export)=

## Raktų saugyklos eksportavimas (nebūtina)

Jei norite eksportuoti išsaugotą raktų saugyklą, naudokite šį būdą.

Šis skriptas eksportuos anksčiau nustatytą raktų saugyklos informaciją (iš 1 arba 2 varianto) kaip slaptažodžiu apsaugotą ZIP failą į jūsų Google Drive aplanką `/AAPS/KeyStore`.

```{warning}
Prieš naudodami šį eksportavimo būdą, įsitikinkite, kad raktų saugyklos ir Google Drive nustatymai jau atlikti.
```

### Žingsniai:

1. **Pridėkite ZIP slaptažodžio slaptąją reikšmę:**
   - Atverkite savo saugyklos **Settings** → **Secrets and variables** → **Actions**
   - Spauskite **New repository secret**
   - Lauke **Name** įveskite: `ZIP_PASSWORD`
   - Lauke **Secret** įveskite savo pasirinktą ZIP šifravimo slaptažodį
   - Slaptažodžiui naudokite tik anglų abėcėlės raides ir skaitmenis (be specialiųjų simbolių)
   - Spauskite **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **Paleiskite eksportavimo darbo eigą (workflow):**
   - Savo saugykloje atverkite skirtuką **Actions**
   - Pasirinkite **CI Keystore Export**
   - Spauskite **Run workflow**
   - Eksportuotas raktų saugyklos ZIP failas bus išsaugotas jūsų Google Drive

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

1 variantas – Sugeneruokite naują raktų saugyklą <BrowserBuildO1.md>
2 variantas – Įkelkite esamą raktų saugyklą <BrowserBuildO2.md>
```
