# Ažuriranje na novu verziju ili granu

## Izradite sami umjesto preuzimanja

**AAPS** se ne može preuzeti, zbog propisa o medicinskim uređajima. Zakonito je izraditi aplikaciju za vlastitu upotrebu, ali kopiju ne smijete dati drugima! Pojedinosti pogledajte na stranici [Česta pitanja korisnika petlje](../UsefulLinks/FAQ.md).

## Važne napomene

- Molimo ažurirajte **AAPS** na novu verziju što prije nakon što novo izdanje postane dostupno.
- Kad je dostupno novo izdanje, u samoj aplikaciji **AAPS** dobit ćete obavijesnu traku o novoj verziji.
- Nova verzija bit će objavljena i na Facebooku u trenutku izdavanja.
- Nakon izdavanja pažljivo pročitajte [Bilješke o izdanju](ReleaseNotes.md) i sva pitanja razjasnite sa zajednicom na Facebooku ili Discordu prije nego što nastavite s ažuriranjem.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Ažuriranje AAPS-a izradom u pregledniku

Već ste izradili svoju aplikaciju AAPS u pregledniku? Slijedite upute za metodu koju ste koristili:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Nema forka koji treba sinkronizirati.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Ažuriranje AAPS-a s Android Studiom

Follow [these instructions](./UpdateComputerBuild.md).

## Ažuriranje AAPS-a iz naredbenog retka

Koristite [iste upute](../SettingUpAaps/CLIBuild.md) kao kad ste prije izrađivali AAPS, ali nove promjene povucite pomoću gita (git pull).

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. Provjerite u [Bilješkama o izdanju](../Maintenance/ReleaseNotes.md) postoje li posebne upute nakon ažuriranja.

Nakon što ste instalirali novi APK:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![About dialog with the AAPS version installed](../images/update/about_dialog_version.png)