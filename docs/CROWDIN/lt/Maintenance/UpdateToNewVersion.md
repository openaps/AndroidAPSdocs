# Atnaujinimas į naują versiją arba atšaką

## Kurti sau, o ne parsisiųsti

**AAPS** negalima atsisiųsti dėl medicinos prietaisams taikomų teisės aktų. Sukurti programėlę savo reikmėms yra teisėta, bet jos kopijos negalima duoti kitiems! Daugiau informacijos rasite [DUK puslapyje](../UsefulLinks/FAQ.md).

## Svarbios pastabos

- Kai išleidžiama nauja **AAPS** versija, atnaujinkite programėlę kuo greičiau.
- Kai išleidžiama nauja versija, pačioje **AAPS** programėlėje pamatysite informacinį pranešimą apie naują versiją.
- Nauja versija išleidimo metu taip pat paskelbiama Facebook.
- Kai nauja versija išleista, prieš atnaujindami atidžiai perskaitykite [versijų pastabas](ReleaseNotes.md) ir neaiškius klausimus išsiaiškinkite su bendruomene Facebook arba Discord.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## AAPS atnaujinimas naršyklėje

AAPS programėlę jau kūrėte naršyklėje? Vadovaukitės instrukcijomis pagal būdą, kurį naudojote:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Nereikia sinchronizuoti jokio fork.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## AAPS atnaujinimas su Android Studio

Vadovaukitės [šiomis instrukcijomis](./UpdateComputerBuild.md).

## AAPS atnaujinimas komandinėje eilutėje

Naudokite [tas pačias instrukcijas](../SettingUpAaps/CLIBuild.md) kaip ir anksčiau kurdami AAPS, tik naujus pakeitimus parsisiųskite su git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Patikrinkite [versijų pastabose](../Maintenance/ReleaseNotes.md), ar po atnaujinimo reikia atlikti kokių nors papildomų veiksmų.

Įdiegę naują apk:

- **AAPS** versiją telefone galite patikrinti atidarę **meniu** (☰) viršuje kairėje ir pasirinkę **Apie** (kaip parodyta paveikslėlyje žemiau). galite pamatyti dabartinę **AAPS** versiją;
- įsitikinkite, kad importavote savo nustatymus; ir
- patikrinkite **AAPS** nustatymus skiltyje **Nustatymai** ir įsitikinkite, kad jie vis dar teisingi.

![Langas „Apie“ su įdiegta AAPS versija](../images/about_dialog_version.png)