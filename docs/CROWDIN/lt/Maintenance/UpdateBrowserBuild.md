# Atnaujinimas naršyklėje (fork)

```{tip}
AAPS kūrėte su **AAPS Builder**? Šio puslapio jums nereikia: žr. [AAPS atnaujinimas su AAPS Builder](#aaps-builder-updates).
```

## Kurti sau, o ne parsisiųsti

**AAPS** negalima atsisiųsti dėl medicinos prietaisams taikomų teisės aktų. Sukurti programėlę savo reikmėms yra teisėta, bet jos kopijos negalima duoti kitiems! Daugiau informacijos rasite [DUK puslapyje](../UsefulLinks/FAQ.md).

```{note}
Jei norite pirmą kartą atnaujinti **AAPS** naršyklėje, nukopijuokite atsarginę raktų saugyklos failo kopiją į savo Google Drive. Tada vietoj šio vadovo vadovaukitės [**AAPS** kūrimo naršyklėje instrukcijomis](../SettingUpAaps/BrowserBuild.md). Užuot kūrę naują raktų saugyklą, turite pasirinkti tą, kurią nukopijavote iš savo kompiuterio.
Tai privaloma tik pirmą kartą. Vėlesniems atnaujinimams galėsite naudoti šį vadovą.
```

```{tip}
**Norite pereiti prie AAPS Builder?** [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md) yra paprastesnis kūrimas naršyklėje: nereikia sinchronizuoti fork, o programėlę atsisiunčiate tiesiai iš GitHub. Pereiti nebūtina: šis vadovas ir toliau tinka. Jei pereinate, pirmiausia pasiimkite raktų saugyklos kopiją iš savo fork, kaip paaiškinta skyriuje [Perėjimas nuo ankstesnio kūrimo naršyklėje](#aaps-builder-from-fork). Kitaip naujai sukurta programėlė negalės atnaujinti AAPS jūsų telefone.
```

## AAPS atnaujinimo į naują versiją naršyklėje apžvalga

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

Jei kyla problemų, žr. atskirą puslapį [Kūrimas naršyklėje: trikčių šalinimas](../GettingHelp/BrowserBuildTroubleshooting.md).

### Eksportuokite nustatymus

Eksportuokite nustatymus iš dabartinės **AAPS** versijos savo telefone. Galbūt to neprireiks, bet geriau būti atsargiems.

Jei neprisimenate, kaip tai padaryti, žr. puslapį [Nustatymų eksportavimas ir importavimas](ExportImportSettings.md).

(Update-to-new-version-update-your-repo)=
### Atnaujinkite savo GitHub saugyklą

[Prisijunkite prie GitHub](https://github.com/login).

1. Pasirinkite Repositories (saugyklos).
2. Slinkite žemyn ir pasirinkite savo AndroidAPS saugyklą.

![AndroidAPS saugyklos pasirinkimas](../images/update/CI/GitHubUpdate1.png)

3. Įsitikinkite, kad naudojate savo AndroidAPS kopiją (Forked from nightscout/AndroidAPS)
4. Palieskite Sync Fork, kad ją atnaujintumėte (atsiliekančių commit skaičius gali skirtis nuo paveikslėlio)



![AndroidAPS saugyklos sinchronizavimas](../images/update/CI/GitHubUpdate2.png)

5. Palieskite Update Branch

![AndroidAPS saugyklos atnaujinimas](../images/update/CI/GitHubUpdate3.png)

Pastaba: jei per klaidą pakeitėte savo AndroidAPS kopiją, pamatysite šį ekraną. Atmeskite visus pakeitimus (commit), kad grįžtumėte prie išleistos versijos.

![Netyčinių pakeitimų atmetimas](../images/update/CI/GitHubUpdate4.png)

Dabar savo kopiją sinchronizavote (atnaujinote) su naujausia **AAPS** versija. Puiku.

![Saugykla sinchronizuota](../images/update/CI/GitHubUpdate5.png)

### Paleiskite darbo eigą (workflow), kad sukurtumėte pasirašytą APK

1. Savo AndroidAPS kopijoje GitHub pasirinkite Actions.
2. Išskleiskite All Workflows.
3. Pasirinkite AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Slinkite žemyn ir palieskite Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. Keep the branch set to master. In **Select AAPS Version**, check that **4.0.0**, the newest version at the top of the list, is selected. If your fork is not up to date, the preselected version is an older one: if you run the workflow with the form as it opens, you rebuild that older version and your app is not updated. Choose the [variant](#browserbuild-variant) (fullRelease), and then tap Run workflow.

   ```{note}
   The list of versions is part of the workflow in your fork. If **4.0.0** is missing, your fork is not synchronized yet: go back to [Update your GitHub repository](#Update-to-new-version-update-your-repo).
   ```



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. Pamatysite pranešimą Workflow run was successfully requested. Atnaujinkite naršyklės puslapį ir galėsite stebėti kūrimo eigą. Kai veiksmas baigsis, prie AAPS CI veiksmo atsiras žalia varnelė. Sėkmingai sukūrėte atnaujintą **AAPS** versiją. Tai reiškia, kad master ir Wear apk dabar išsaugomi tiesiai jūsų Google Drive (kaip parodyta žemiau). AAPSClient apk galima atsisiųsti iš Github > nightscout > AndroidAPS [čia](https://github.com/nightscout/AndroidAPS/releases)


![Darbo eigos stebėjimas](../images/update/CI/GitHubActions4.png)


### Įdiekite AAPS APK

1. Atidarykite savo Google Drive
2. Atidarykite aplanką AAPS, pasirinkite naujos versijos aplanką ir rasite ir telefono, ir Android Wear versijas.

![Vieta Google Drive](../images/update/CI/GitHubActions5.png)

```{note}
Nuo 2026 m. rugsėjo Google [Android kūrėjų tapatybės patikrinimas](#android-developer-verification), priklausomai nuo jūsų šalies, gali neleisti įdiegti APK paspaudus failą. Nemokami apėjimo būdai aprašyti tame puslapyje.
```

Tęskite [čia](#Update-to-new-version-check-aaps-version-on-phone)

(update-browser-build-troubleshooting)=

## Troubleshooting

Jei kas nors nepavyksta, nepanikuokite.

Giliai įkvėpkite!

Tada patikrinkite, ar jūsų problema jau aprašyta: žr. [AAPS Builder trikčių šalinimas](#aaps-builder-troubleshooting), jei kuriate su **AAPS Builder**, arba [Kūrimas naršyklėje: trikčių šalinimas](#aaps-ci-troubleshooting) kitu atveju.

Jei reikia daugiau pagalbos, kreipkitės į kitus **AAPS** naudotojus [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) arba [Discord](https://discord.gg/4fQUWHZ4Mw).
