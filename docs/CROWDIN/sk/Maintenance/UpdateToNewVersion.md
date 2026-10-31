# Aktualizácia na novú verziu alebo vetvu

## Zostavte si aplikáciu sami namiesto stiahnutia

**AAPS** nie je možné stiahnuť kvôli predpisom pre zdravotnícke pomôcky. Zostaviť si aplikáciu pre vlastné použitie je legálne, ale nesmiete jej kópiu dávať iným! Podrobnosti nájdete na stránke [Najčastejšie otázky používateľov APS](../UsefulLinks/FAQ.md).

## Dôležité poznámky

- Keď vyjde nové vydanie **AAPS**, aktualizujte čo najskôr na novú verziu.
- Keď je k dispozícii nové vydanie, priamo v aplikácii **AAPS** dostanete informačný banner o novej verzii.
- Nová verzia bude v čase vydania oznámená aj na Facebooku.
- Po vydaní si pozorne prečítajte [poznámky k vydaniu](ReleaseNotes.md) a ešte pred aktualizáciou si nejasnosti vyjasnite s komunitou na Facebooku alebo Discorde.
- Nezabudnite exportovať nastavenia **AAPS**.

## Aktualizácia AAPS zostavením v prehliadači

Už ste svoju aplikáciu AAPS zostavili v prehliadači? Postupujte podľa návodu pre spôsob, ktorý ste použili:

- **AAPS Builder** (váš súkromný repozitár, zvyčajne s názvom `my-aaps`): [Aktualizácia AAPS pomocou AAPS Builder](#aaps-builder-updates). Nie je tu žiadny fork, ktorý by bolo treba synchronizovať.
- **Fork a prípravný súbor** (vaša vlastná kópia AndroidAPS): [Aktualizácia v prehliadači (fork)](./UpdateBrowserBuild.md).

## Aktualizácia AAPS v Android Studiu

Follow [these instructions](./UpdateComputerBuild.md).

## Aktualizácia AAPS z príkazového riadku

Použite [rovnaký návod](../SettingUpAaps/CLIBuild.md) ako pri predchádzajúcom zostavení AAPS, ale nové zmeny si stiahnite pomocou git.

(Update-to-new-version-check-aaps-version-on-phone)=

### Kontrola verzie AAPS v telefóne

V [poznámkach k vydaniu](../Maintenance/ReleaseNotes.md) si overte, či po aktualizácii netreba urobiť niečo špeciálne.

Po nainštalovaní nového APK:

- verziu **AAPS** v telefóne si môžete overiť tak, že vľavo hore otvoríte **ponuku** (☰) a potom **O aplikácii** (ako na snímke obrazovky nižšie). Aktuálnu verziu **AAPS** si môžete pozrieť;
- uistite sa, že import nastavení prebehol; a
- skontrolujte nastavenia **AAPS** v časti **Nastavenia** a uistite sa, že sú stále správne.

![Dialóg O aplikácii s nainštalovanou verziou AAPS](../images/about_dialog_version.png)