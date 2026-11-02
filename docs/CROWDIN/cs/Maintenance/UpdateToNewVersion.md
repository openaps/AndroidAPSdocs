# Aktualizace na novou verzi nebo větev (branch)

## Sestavte si aplikaci sami, místo stažení

**AAPS** není kvůli předpisům pro zdravotnické prostředky k dispozici ke stažení. Sestavit si aplikaci pro vlastní použití je legální, ale nesmíte dávat kopii jiným! Podrobnosti najdete na stránce [Nejčastější otázky uživatelů APS](../UsefulLinks/FAQ.md).

## Důležité poznámky

- Jakmile vyjde nová verze **AAPS**, aktualizujte na ni prosím co nejdříve.
- Když je k dispozici nová verze, zobrazí se přímo v aplikaci **AAPS** informační banner o nové verzi.
- Nová verze bude v době vydání oznámena také na Facebooku.
- Po vydání si prosím podrobně přečtěte [Poznámky k vydání](ReleaseNotes.md) a případné dotazy si vyjasněte s komunitou na Facebooku nebo Discordu, než začnete s aktualizací.
- Updating from **AAPS** 3.x? Read [What changed in AAPS v4](V4Changes.md) first: it lists the features that moved, were renamed or were removed.
- Do not forget to [export your settings](ExportImportSettings.md). When you import them again after the update, you choose whether the pump settings are replaced too.

## Aktualizace AAPS sestavením v prohlížeči

Už jste aplikaci AAPS sestavili v prohlížeči? Postupujte podle návodu pro metodu, kterou jste použili:

- **AAPS Builder**: you build from the **Build AAPS** page of your private repository (usually named `my-aaps`) and download the app from GitHub. Follow [Updating AAPS with AAPS Builder](#aaps-builder-updates). Není třeba synchronizovat žádný fork.
- **Fork and preparation file**: you run the **AAPS-CI** workflow in your own copy (fork) of AndroidAPS, a repository named `AndroidAPS` in your GitHub account, and the app lands in your Google Drive. Follow [Update with a browser (fork)](./UpdateBrowserBuild.md).

## Aktualizace AAPS pomocí Android Studia

Follow [these instructions](./UpdateComputerBuild.md).

## Aktualizace AAPS z příkazové řádky

Použijte [stejný návod](../SettingUpAaps/CLIBuild.md) jako při předchozím sestavení AAPS, ale nové změny si stáhněte pomocí git.

(Update-to-new-version-check-aaps-version-on-phone)=

## After the update

These steps are the same for every build method. V [Poznámkách k vydání](../Maintenance/ReleaseNotes.md) zkontrolujte, zda po aktualizaci neplatí nějaké zvláštní pokyny.

Po instalaci nového APK:

- you can check the **AAPS** version on your phone by opening the **menu** (☰) on the top left and then **About** (as per the screenshot below). The current **AAPS** version can be viewed;
- make sure you have imported your settings; and
- please check your **AAPS** settings under **Settings** and ensure these remain accurate.

![Dialog O aplikaci s nainstalovanou verzí AAPS](../images/about_dialog_version.png)