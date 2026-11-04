(browser-build)=

# Kūrimas naršyklėje

AAPS kūrimas su GitHub Actions.

**Mažiausia palaikoma AAPS versija yra 3.3.2.1.**

## Kurti sau, o ne parsisiųsti

**AAPS programėlės (apk failo) negalima atsisiųsti dėl medicinos prietaisų reglamentų. Sukurti programėlę savo reikmėms yra teisėta, bet jos kopijos negalima duoti kitiems!**

Daugiau informacijos rasite [DUK puslapyje](../UsefulLinks/FAQ.md).

(Building-APK-without-a-computer)=

## Pasirinkite, kaip kurti

Pasirinkite būdą, kuris tinka įrenginiui, kuriuo kuriate:

### Android telefone: AAPS Builder (rekomenduojama)

Sąrankos puslapis padės žingsnis po žingsnio sukurti savo privačią kūrimo saugyklą GitHub. Nieko nereikia diegti, nereikia paruošimo failo, o kiekvieną kūrimą paleidžiate patys. Programėlę atsisiunčiate tiesiai iš GitHub. Google Drive nebūtinas.

Tai veikia ir kompiuterio naršyklėje.

**→ [Kūrimas su AAPS Builder](BrowserBuildAapsBuilder.md)**

### Kompiuteryje arba iPhone / iPad: fork ir paruošimo failas

GitHub sukuriate AAPS šaltinio kodo kopiją (fork), raktų saugyklą sukuriate su paruošimo failu, o sukurta programėlė išsaugoma jūsų Google Drive. Atlikite toliau aprašytus keturis žingsnius.

```{note}
**Jau kuriate su fork?** Toliau jį atnaujinkite, kaip aprašyta puslapyje [Atnaujinimas naršyklėje (fork)](../Maintenance/UpdateBrowserBuild.md), arba pereikite prie AAPS Builder. Norėdami pereiti, pirmiausia gaukite savo raktų saugyklos kopiją iš fork: žr. [Perėjimas nuo ankstesnio kūrimo naršyklėje](#aaps-builder-from-fork).
```

Naršyklėje teks naudoti kelis skirtukus ir pereiti iš vieno į kitą. Chrome pavyzdys:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
Teks pereiti iš vieno skirtuko į kitą: pradėkite uždarę visus skirtukus, kad perjungdami tarp jų nepasiklystumėte.
```

#### Ko jums reikės

- **Google paskyros**, kad sukurta programėlė galėtų būti išsaugota jūsų Google Drive.
- **GitHub paskyros** (nemokamos) – ją sukursite 1 žingsnyje.
- **Interneto naršyklės**, kurioje vienu metu gali būti atidaryti keli skirtukai (toliau aprašoma Chrome).
- Nedidelės **pagalbinės priemonės paruošimo failui paleisti**. Kurios reikia, priklauso nuo įrenginio, kuriuo kuriate – dabar nieko diegti nereikia, 2 žingsnyje bus paaiškinta, ko reikia jūsų įrenginiui:
  - **Kompiuteris (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** papildomos programėlės nereikia – naudojate įtaisytąją programėlę Files ir naršyklę.

#### Žingsniai

Kūrimas naršyklėje – tai pasirinkimų seka. Atlikite šiuos žingsnius iš eilės:

1. **[Sukurkite savo GitHub fork](BrowserBuildFork.md)** – asmeninę AAPS šaltinio kodo kopiją.
2. **[Sukurkite pasirašymo raktų saugyklą](BrowserBuildKeystore.md)** – svarbiausias sprendimas: sukurti naują raktų saugyklą (1 variantas) arba įkelti esamą (2 variantas), tada atlikite veiksmus, aprašytus jūsų įrenginiui skirtame puslapyje.
3. **[Suteikite prieigą prie Google Drive](BrowserBuildGoogleDrive.md)** – leiskite GitHub išsaugoti sukurtą programėlę jūsų Google Drive.
4. **[Sukurkite APK](BrowserBuildAPK.md)** – paleiskite GitHub Actions darbo eigą (workflow) ir pasirinkite versiją bei variantą.

Jei kyla problemų, žr. **[Kūrimas naršyklėje: trikčių šalinimas](../GettingHelp/BrowserBuildTroubleshooting.md)**. Papildomus veiksmus su fork rasite skyriuose [raktų saugyklos eksportavimas](#ci-keystore-export) arba [vieno pakeitimo įtraukimas (cherry-pick)](#github-cherry-pick).

----

**Pradėkite nuo [1 žingsnio – Sukurkite savo GitHub fork](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
1 žingsnis: Sukurkite fork <BrowserBuildFork.md>
2 žingsnis: Sukurkite raktų saugyklą <BrowserBuildKeystore.md>
3 žingsnis: Suteikite prieigą prie Google Drive <BrowserBuildGoogleDrive.md>
4 žingsnis: Sukurkite APK <BrowserBuildAPK.md>
```
