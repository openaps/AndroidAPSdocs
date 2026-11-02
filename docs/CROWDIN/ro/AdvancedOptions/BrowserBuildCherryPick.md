(github-cherry-pick)=

# Construirea în browser: alegerea unei modificări (cherry-pick)

```{note}
Aceasta este o operațiune opțională, avansată. Funcționează doar dacă construiți cu o **furcă** ([pașii 1–4 din Construirea în navigator](../SettingUpAaps/BrowserBuild.md)). Depozitele **AAPS Builder** nu includ acest flux de lucru (workflow).
```

Folosiți această opțiune doar atunci când un dezvoltator vă cere să testați o anumită modificare (vă dă unul sau mai multe chei de verificare de modificare) înainte ca ea să apară într-o versiune lansată.

## Before you start

- [Sincronizați furca](#Update-to-new-version-update-your-repo): acest flux de lucru construiește starea curentă a ramurii dumneavoastră, nu o versiune pe care o alegeți dintr-o listă.
- Google Drive trebuie să fie autorizat ([Pasul 3](../SettingUpAaps/BrowserBuildGoogleDrive.md)): aplicația construită este salvată acolo, ca la o construire normală.

## Rulați fluxul de lucru

1. În furca dumneavoastră AndroidAPS de pe GitHub, deschideți **Acțiuni**.
2. Extindeți **Toate fluxurile de lucru** și selectați **Cherry Pick CI (Pre-release Feature Backport)**.
3. Apăsați **Executare flux de lucru** și completați:

   ![aaps_cherry-pick_ci](../images/Building-the-App/CI/aaps_cherry_pick_ci.png)

   - **Utilizați fluxul de lucru de la**: ramura în care se adaugă modificările, de obicei `principală`.
   - **Depozit amonte**: depozitul din care provin modificările. Păstrați `nightscout/AndroidAPS`, cu excepția cazului în care dezvoltatorul v-a spus altceva.
   - **Atribuiți chei de verificare la cherry-pick**: cheia sau cheile de verificare pe care le-ați primit, separate prin spații.
   - **Selectați varianta de construire**: vedeți [variantele](#browserbuild-variant) (de obicei `fullRelease`).
4. Tap **Run workflow**. Când se termină, aplicația se află în Google Drive, ca după o [construire normală](../SettingUpAaps/BrowserBuildAPK.md).
