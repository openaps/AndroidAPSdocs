# Ažuriranje na novu verziju ili granu

## Izradite sami umjesto preuzimanja

**AAPS** se ne može preuzeti, zbog propisa o medicinskim uređajima. Zakonito je izraditi aplikaciju za vlastitu upotrebu, ali kopiju ne smijete dati drugima! Pojedinosti pogledajte na stranici [Česta pitanja korisnika petlje](../UsefulLinks/FAQ.md).

## Važne napomene

- Molimo ažurirajte **AAPS** na novu verziju što prije nakon što novo izdanje postane dostupno.
- Kad je dostupno novo izdanje, u samoj aplikaciji **AAPS** dobit ćete obavijesnu traku o novoj verziji.
- Nova verzija bit će objavljena i na Facebooku u trenutku izdavanja.
- Nakon izdavanja pažljivo pročitajte [Bilješke o izdanju](ReleaseNotes.md) i sva pitanja razjasnite sa zajednicom na Facebooku ili Discordu prije nego što nastavite s ažuriranjem.
- Ažurirate s **AAPS-a** 3.x? Najprije pročitajte [Što se promijenilo u AAPS-u v4](V4Changes.md): tamo su navedene značajke koje su premještene, preimenovane ili uklonjene.
- Ne zaboravite [izvesti svoje postavke](ExportImportSettings.md). Kad ih nakon ažuriranja ponovno uvezete, birate hoće li se zamijeniti i postavke pumpe.

## Ažuriranje AAPS-a izradom u pregledniku

Već ste izradili svoju aplikaciju AAPS u pregledniku? Slijedite upute za metodu koju ste koristili:

- **AAPS Builder**: izrađujete na stranici **Build AAPS** svog privatnog repozitorija (obično nazvanog `my-aaps`) i aplikaciju preuzimate s GitHuba. Slijedite [Ažuriranje AAPS-a s AAPS Builderom](#aaps-builder-updates). Nema forka koji treba sinkronizirati.
- **Fork i pripremna datoteka**: pokrećete workflow **AAPS-CI** u vlastitoj kopiji (forku) AndroidAPS-a, repozitoriju pod nazivom `AndroidAPS` u vašem GitHub računu, a aplikacija stiže na vaš Google Drive. Slijedite [Ažuriranje putem preglednika (fork)](./UpdateBrowserBuild.md).

## Ažuriranje AAPS-a s Android Studiom

Slijedite [ove upute](./UpdateComputerBuild.md).

## Ažuriranje AAPS-a iz naredbenog retka

Koristite [iste upute](../SettingUpAaps/CLIBuild.md) kao kad ste prije izrađivali AAPS, ali nove promjene povucite pomoću gita (git pull).

(Update-to-new-version-check-aaps-version-on-phone)=

## Nakon ažuriranja

Ovi koraci su isti za svaku metodu izrade. Provjerite u [Bilješkama o izdanju](../Maintenance/ReleaseNotes.md) postoje li posebne upute nakon ažuriranja.

Nakon što ste instalirali novi APK:

- verziju **AAPS-a** na telefonu možete provjeriti tako da otvorite **izbornik** (☰) gore lijevo, a zatim **O aplikaciji** (kao na snimci zaslona ispod). Može se vidjeti trenutačna verzija **AAPS-a**;
- provjerite jeste li uvezli svoje postavke; i
- provjerite svoje postavke **AAPS-a** pod **Postavke** i uvjerite se da su i dalje točne.

![Dijaloški okvir O aplikaciji s instaliranom verzijom AAPS-a](../images/update/about_dialog_version.png)