# Aktualizácia na novú verziu alebo vetvu

## Zostavte si aplikáciu sami namiesto stiahnutia

**AAPS** nie je možné stiahnuť kvôli predpisom pre zdravotnícke pomôcky. Zostaviť si aplikáciu pre vlastné použitie je legálne, ale nesmiete jej kópiu dávať iným! Podrobnosti nájdete na stránke [Najčastejšie otázky používateľov APS](../UsefulLinks/FAQ.md).

## Dôležité poznámky

- Keď vyjde nové vydanie **AAPS**, aktualizujte čo najskôr na novú verziu.
- Keď je k dispozícii nové vydanie, priamo v aplikácii **AAPS** dostanete informačný banner o novej verzii.
- Nová verzia bude v čase vydania oznámená aj na Facebooku.
- Po vydaní si pozorne prečítajte [poznámky k vydaniu](ReleaseNotes.md) a ešte pred aktualizáciou si nejasnosti vyjasnite s komunitou na Facebooku alebo Discorde.
- Aktualizujete z **AAPS** 3.x? Najprv si prečítajte [Čo sa zmenilo v AAPS v4](V4Changes.md): nájdete tam funkcie, ktoré sa presunuli, premenovali alebo odstránili.
- Nezabudnite [exportovať svoje nastavenia](ExportImportSettings.md). Keď ich po aktualizácii znova importujete, vyberiete si, či sa majú nahradiť aj nastavenia pumpy.

## Aktualizácia AAPS zostavením v prehliadači

Už ste svoju aplikáciu AAPS zostavili v prehliadači? Postupujte podľa návodu pre spôsob, ktorý ste použili:

- **AAPS Builder**: zostavujete zo stránky **Build AAPS** svojho súkromného repozitára (zvyčajne s názvom `my-aaps`) a aplikáciu si stiahnete z GitHubu. Postupujte podľa časti [Aktualizácia AAPS pomocou AAPS Builder](#aaps-builder-updates). Nie je tu žiadny fork, ktorý by bolo treba synchronizovať.
- **Fork a prípravný súbor**: spúšťate workflow **AAPS-CI** vo svojej vlastnej kópii (forku) AndroidAPS, teda v repozitári s názvom `AndroidAPS` vo vašom účte GitHub, a aplikácia sa uloží na váš Disk Google. Postupujte podľa návodu [Aktualizácia v prehliadači (fork)](./UpdateBrowserBuild.md).

## Aktualizácia AAPS v Android Studiu

Postupujte podľa [tohto návodu](./UpdateComputerBuild.md).

## Aktualizácia AAPS z príkazového riadku

Použite [rovnaký návod](../SettingUpAaps/CLIBuild.md) ako pri predchádzajúcom zostavení AAPS, ale nové zmeny si stiahnite pomocou git.

(Update-to-new-version-check-aaps-version-on-phone)=

## Po aktualizácii

Tieto kroky sú rovnaké pri každom spôsobe zostavenia. V [poznámkach k vydaniu](../Maintenance/ReleaseNotes.md) si overte, či po aktualizácii netreba urobiť niečo špeciálne.

Po nainštalovaní nového APK:

- verziu **AAPS** v telefóne si môžete overiť tak, že otvoríte **ponuku** (☰) vľavo hore a potom **O aplikácii** (ako na snímke obrazovky nižšie). môžete si pozrieť aktuálnu verziu **AAPS**;
- uistite sa, že ste importovali svoje nastavenia; a
- skontrolujte svoje nastavenia **AAPS** v časti **Nastavenia** a uistite sa, že sú stále správne.

![Dialóg O aplikácii s nainštalovanou verziou AAPS](../images/about_dialog_version.png)