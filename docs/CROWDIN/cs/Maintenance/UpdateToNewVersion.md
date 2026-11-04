# Aktualizace na novou verzi nebo větev (branch)

## Sestavte si aplikaci sami, místo stažení

**AAPS** není kvůli předpisům pro zdravotnické prostředky k dispozici ke stažení. Sestavit si aplikaci pro vlastní použití je legální, ale nesmíte dávat kopii jiným! Podrobnosti najdete na stránce [Nejčastější otázky uživatelů APS](../UsefulLinks/FAQ.md).

## Důležité poznámky

- Jakmile vyjde nová verze **AAPS**, aktualizujte na ni prosím co nejdříve.
- Když je k dispozici nová verze, zobrazí se přímo v aplikaci **AAPS** informační banner o nové verzi.
- Nová verze bude v době vydání oznámena také na Facebooku.
- Po vydání si prosím podrobně přečtěte [Poznámky k vydání](ReleaseNotes.md) a případné dotazy si vyjasněte s komunitou na Facebooku nebo Discordu, než začnete s aktualizací.
- Aktualizujete z **AAPS** 3.x? Nejprve si přečtěte [Co se změnilo v AAPS v4](V4Changes.md): najdete tam funkce, které byly přesunuty, přejmenovány nebo odstraněny.
- Nezapomeňte [exportovat nastavení](ExportImportSettings.md). Když je po aktualizaci znovu importujete, vyberete si, zda se mají nahradit také nastavení pumpy.

## Aktualizace AAPS sestavením v prohlížeči

Už jste aplikaci AAPS sestavili v prohlížeči? Postupujte podle návodu pro metodu, kterou jste použili:

- **AAPS Builder**: sestavujete ze stránky **Build AAPS** ve svém soukromém repozitáři (obvykle s názvem `my-aaps`) a aplikaci stahujete z GitHubu. Postupujte podle části [Aktualizace AAPS s AAPS Builder](#aaps-builder-updates). Není třeba synchronizovat žádný fork.
- **Fork a přípravný soubor**: workflow **AAPS-CI** spouštíte ve své vlastní kopii (forku) AndroidAPS, tedy v repozitáři s názvem `AndroidAPS` ve vašem účtu GitHub, a aplikace se uloží na váš Disk Google. Postupujte podle návodu [Aktualizace v prohlížeči (fork)](./UpdateBrowserBuild.md).

## Aktualizace AAPS pomocí Android Studia

Postupujte podle [tohoto návodu](./UpdateComputerBuild.md).

## Aktualizace AAPS z příkazové řádky

Použijte [stejný návod](../SettingUpAaps/CLIBuild.md) jako při předchozím sestavení AAPS, ale nové změny si stáhněte pomocí git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Po aktualizaci

Tyto kroky jsou stejné pro všechny způsoby sestavení. V [Poznámkách k vydání](../Maintenance/ReleaseNotes.md) zkontrolujte, zda po aktualizaci neplatí nějaké zvláštní pokyny.

Po instalaci nového APK:

- verzi **AAPS** v telefonu zkontrolujete tak, že vlevo nahoře otevřete **nabídku** (☰) a pak **O aplikaci** (viz snímek obrazovky níže). Zobrazí se aktuální verze **AAPS**;
- ujistěte se, že jste importovali svá nastavení; a
- zkontrolujte své nastavení **AAPS** v **Nastavení** a ujistěte se, že je stále správné.

![Dialog O aplikaci s nainstalovanou verzí AAPS](../images/about_dialog_version.png)