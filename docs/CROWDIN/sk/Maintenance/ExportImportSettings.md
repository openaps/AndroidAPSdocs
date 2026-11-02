# Vytváranie a obnova záloh

Keď si AAPS nainštalujete do telefónu, stane sa z neho „zdravotnícka pomôcka“, na ktorú sa každý deň spoliehate. Dôrazne sa odporúča mať núdzový záložný plán pre prípad, že sa váš telefón pokazí, bude ukradnutý alebo sa stratí. Therefore, it is essential to prepare by asking yourself: "What if?"

Aby ste mohli obnoviť AAPS do existujúceho alebo nového telefónu, je dôležité uchovávať nasledujúce položky na bezpečnom mieste (to znamená: nie v telefóne). Osvedčeným postupom je mať aspoň dve samostatné zálohy: na lokálnom pevnom disku, USB kľúči a (najlepšie) v cloudovom úložisku, napríklad na Disku Google alebo v Microsoft 365 OneDrive. Ak zálohy uložíte do cloudu, budete mať všetko potrebné vždy dostupné z telefónu a nastavenie obnovíte kdekoľvek a kedykoľvek.

Zvážte zaobstaranie druhého, záložného telefónu a vyskúšajte si na ňom obnovu AAPS, aby ste si overili, že záložný telefón funguje podľa očakávania. Tento krok vám dá istotu, že váš núdzový plán funguje a že môžete bez prerušenia pokračovať v používaní AAPS, ak váš hlavný telefón prestane byť dostupný.

```{admonition} Android backups and phone-transfer tools do not carry your AAPS settings
:class: warning
Since **AAPS** 4.0 the settings are kept in an encrypted store on the phone, and they are left out of the Google backup and of the phone-to-phone transfer of a new phone. A settings export, as described on this page, is the only way to carry them over.
```

Na obnovu je dôležité mať poruke tieto položky:

- Váš **súbor úložiska kľúčov z Android Studia** a príslušné **heslo**: potrebné na (opätovné) zostavenie inštalačného súboru AAPS .APK.
- Aktuálnu kópiu **inštalačného súboru AAPS .APK**
- Aktuálny súbor s **exportom nastavení**: na obnovu dôležitých nastavení (vrátane vašich cieľov!).
- Vaše **hlavné heslo AAPS**
- Zálohy ďalších pomocných aplikácií: napríklad BYODA a/alebo xDrip.
- Osobné poznámky k vášmu nastaveniu.

Nižšie sú položky, ktoré sa odporúča zálohovať.

## Vytváranie záloh

### Súbor úložiska kľúčov z počítača, na ktorom ste zostavili APK
Pri zostavení inštalačného súboru .APK v Android Studiu sa **súbor úložiska kľúčov a heslo použijú na podpísanie inštalačného súboru .APK**. Na aktualizáciu súčasnej inštalácie AAPS je potrebné podpísať inštalačný súbor .APK s aktualizáciou rovnakým úložiskom kľúčov, aké sa použilo pri prvej inštalácii. Pri aktualizácii sa zachovajú všetky nastavenia aj databáza AAPS. Bez toho musíte najprv odinštalovať aktuálnu aplikáciu, potom AAPS [preinštalovať](#reinstall-aaps) a znovu nastaviť.

Uchovanie úložiska kľúčov a príslušného hesla výrazne zjednoduší budúce aktualizácie APK, najmä ak budete potrebovať zostaviť aplikáciu na novom počítači. Podrobnosti o použití úložiska kľúčov pri zostavení nového APK nájdete v časti [Aktualizácia AAPS](../Maintenance/UpdateToNewVersion.md).

**Kedy zálohovať:** Úložisko kľúčov by ste mali zálohovať hneď po prvom zostavení inštalačného súboru **AAPS** .APK.

**Ako zálohovať:** Nájdite cestu k úložisku kľúčov. Ak si ju nepamätáte, nájdete ju v Android Studiu cez **Build > APK > Next**. Cesta bude uvedená v poli „Key store path“. Pomocou správcu súborov prejdite na túto cestu a vytvorte kópiu súboru úložiska kľúčov (s príponou `.jks`). Uložte ho na bezpečné miesto v cloude pre prípad, že by váš počítač nebol dostupný. Nezabudnite si zapísať aj heslo úložiska kľúčov, alias kľúča a heslo kľúča.

### Kópie najnovšieho APK
Ak sa váš hlavný telefón s **AAPS** stratí alebo poškodí, kópia APK vám umožní rýchlo pokračovať v používaní **AAPS** na novom telefóne. Poznámka: budete potrebovať aj zálohu nastavení, ako je uvedené nižšie.

**Kedy zálohovať:** Vždy by ste mali mať zálohu najnovšieho APK, ktoré ste nainštalovali do hlavného telefónu s **AAPS**. Môžete si ponechať aj jednu staršiu verziu pre prípad, že by ste sa k nej z akéhokoľvek dôvodu potrebovali vrátiť.

**Ako zálohovať:** Uchovávajte kópiu na počítači, na ktorom ste APK zostavili v Android Studiu. Okrem toho sa odporúča uložiť kópiu inštalačného APK aj na cloudovú platformu. Uistite sa, že v prípade potreby obe zálohy nájdete. Zvážte vytvorenie samostatných priečinkov na uloženie týchto záloh.

### Súbor s nastaveniami AAPS (označovaný aj ako „Preferences“)

```{admonition} Where are preferences stored on my phone?
:class: tip
Svoje nastavenia nájdete v **AAPS priečinku**, ktorý ste vybrali počas [nastavenia AAPS](#SetupWizard-StoragePermission).</br>
**AAPS priečinok** môžete zmeniť aj na obrazovke **Údržba** (**ponuka** (☰) > **Údržba**), pozrite [Nastavenie lokálneho priečinka AAPS](#preferences-maintenance-logdirectory).
```

S kópiou inštalačného súboru APK (pozrite vyššie) a súborom **Nastavenia** môžete rýchlo začať používať AAPS na existujúcom alebo novom telefóne.

Súbor **Nastavenia** slúži na prispôsobenie aplikácie AAPS vášmu konkrétnemu nastaveniu. Obsahujú napríklad nastavenia **Konfigurácie**, stav cieľov, nastavenia komunikácie s inými službami (napr. Nightscout, Tidepool), automatizácie a profily.

Export nastavení AAPS do súboru vám umožní obnoviť konfiguráciu do stavu z konkrétneho okamihu. Ako už bolo spomenuté, okrem všetkých konfiguračných nastavení obsahuje exportovaný súbor aj stav vašich cieľov, ktorý musíte obnoviť pri **(opätovnej) inštalácii** AAPS. Bez neho budete musieť znovu splniť všetky ciele od začiatku, aby ste mohli zapnúť uzavretý okruh. Súbory s nastaveniami vám tiež umožnia obnoviť „posledné známe dobré“ nastavenia a vrátiť tak zmeny konfigurácie.

**Kedy zálohovať nastavenia AAPS:**
* Po splnení každého cieľa, aby ste neprišli o svoj pokrok. _Bez kópie svojich **Nastavení** budete musieť znovu splniť všetky ciele, ak budete musieť AAPS preinštalovať alebo vymeniť telefón._

* Vždy, keď plánujete väčšie zmeny v konfigurácii (zmena nastavení SMB, zmena typu inzulínu, zmena pumpy, zmeny v automatizáciách), by ste mali zálohovať svoje **Nastavenia** pred zmenami aj po nich. Takto máte svoje najnovšie nastavenia a aj kópiu nastavení spred zmien, ak by ste sa k nim potrebovali vrátiť.

* Tubeless pumps (Such as Omnipod and Medtrum) users only: the **Settings** file contains connection details on your current pod and can be used to restore connection to that pod with a new phone. Ak nemáte kópiu nastavení exportovanú po spustení aktuálneho podu, pri výmene telefónu budete musieť spustiť nový pod.

**Ako zálohovať ručne:**

1. If this is your first time importing or exporting **Settings** you will need to set a master password in [Settings > Protection](#Preferences-master-password). Nastavte heslo a zapíšte si ho na bezpečné miesto. _Bez tohto hesla nebudete mať prístup k zálohám svojich **Nastavení**._

2. Na hlavnej obrazovke **AAPS** otvorte **ponuku** (☰) > **Údržba**. Pomocou štítkov **Lokálne** a **Cloud** vedľa položky **Exportovať nastavenia** zvoľte, kam sa súbor uloží (pozrite **Export alebo import nastavení** nižšie), a potom ťuknite na **Exportovať nastavenia**. **AAPS** ukáže, kam sa súbor uloží: pri voľbe **Lokálne** názov súboru, pri voľbe **Cloud** **Disk Google**. Ťuknite na **OK**.

   ![Export nastavení do lokálneho súboru](../images/Maintenance/export_settings_confirm_local.png)

   ![Export nastavení na Disk Google](../images/Maintenance/export_settings_confirm_cloud.png)

   Zadajte hlavné heslo nastavené vyššie a ťuknite na **OK**.

   ![Hlavné heslo pre export](../images/Maintenance/export_settings_password.png)

   Export potvrdí správa **Nastavenia exportované** (lokálne) alebo **Export do Cloudu bol úspešný** (cloud).

   ![Správa Nastavenia exportované](../images/Maintenance/export_settings_done_local.png)

   ![Správa Export do Cloudu bol úspešný](../images/Maintenance/export_settings_done_cloud.png)

3. Pomocou správcu súborov v telefóne (zvyčajne sa volá „Súbory“ alebo „Moje súbory“) prejdite do Interné úložisko > AAPS > preferences. Tu uvidíte kópiu všetkých exportovaných súborov s nastaveniami. Názov súboru by mal byť `YYYY-MM-DD_Time_appname.json`. Nahrajte tento súbor na cloudovú platformu podľa vlastného výberu. Potom z cloudovej platformy stiahnite kópiu aj do svojho počítača.

(ExportImportSettings-Settings-Export)=

## Export nastavení

```{admonition} Where are preferences stored on my phone?
:class: tip
Svoje nastavenia nájdete v **AAPS priečinku**, ktorý ste vybrali počas [nastavenia AAPS](#SetupWizard-StoragePermission).</br>
**AAPS priečinok** môžete zmeniť aj na obrazovke **Údržba** (**ponuka** (☰) > **Údržba**), pozrite [Nastavenie lokálneho priečinka AAPS](#preferences-maintenance-logdirectory).
```

Odporúča sa pravidelne exportovať nastavenia, najmä pred zmenami konfigurácie a po nich. Exporty môžete robiť **ručne alebo (najlepšie) pomocou automatizácie**. Nezabudnite si zapísať hlavné heslo AAPS a zálohovať súbory s nastaveniami tak, že ich skopírujete z telefónu, napríklad do cloudového úložiska.

**Poznámka**: _Exportované nastavenia budú zašifrované vaším hlavným heslom AAPS: bez hlavného hesla použitého pri exporte nebudete môcť súbor s nastaveniami importovať!_

### Export alebo import nastavení
Ak chcete exportovať alebo importovať nastavenia, otvorte **ponuku** (☰) a vyberte **Údržba**. V časti **Správa súborov** slúžia štítky **Lokálne** a **Cloud** vedľa položiek **Exportovať nastavenia** a **Importovať nastavenia** na voľbu, kam sa súbor s nastaveniami uloží alebo odkiaľ sa načíta: **Lokálne** je AAPS priečinok v telefóne, **Cloud** je dostupný po nastavení [Cloudového adresára](#preferences-maintenance-cloud). Ťuknutím na štítok ho zapnete alebo vypnete; aspoň jeden zostane vždy vybraný a oba riadky majú rovnakú voľbu. Potom ťuknite priamo na **Exportovať nastavenia** alebo **Importovať nastavenia** a spustíte akciu.

![Ponuka Údržba s riadkami Exportovať nastavenia a Importovať nastavenia](../images/Maintenance/maintenance_export_import.png)

(ExportImportSettings-Automating-Settings-Export)=
### Automatický export nastavení

To automate settings exports [(**see Automation**)](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export) open [**Settings** > **Maintenance**](#preferences-maintenance-settings), expand **Unattended Settings Export** and switch on **Enable automated settings export**.

Teraz môžete nastaviť [Automatizáciu](../DailyLifeWithAaps/Automations.md#automating-preference-settings-export), aby exportovala nastavenia buď pravidelne (_napr._ každý týždeň), alebo po výmene podu.

_**Note:** On importing settings, the user always needs to enter the AAPS master password!_

![Nastavenia > Údržba > Automatický export nastavení s prepínačom Povoliť automatický export nastavení](../images/Maintenance/settings_unattended_export.png)

(ExportImportSettings-restoring-from-your-backups-on-a-new-phone-or-fresh-installation-of-aaps)=
## Obnova zo záloh do nového telefónu alebo do novej inštalácie AAPS

```{admonition} Where are preferences stored on my phone?
:class: tip
Svoje nastavenia nájdete v **AAPS priečinku**, ktorý ste vybrali počas [nastavenia AAPS](#SetupWizard-StoragePermission).</br>
**AAPS priečinok** môžete zmeniť aj na obrazovke **Údržba** (**ponuka** (☰) > **Údržba**), pozrite [Nastavenie lokálneho priečinka AAPS](#preferences-maintenance-logdirectory).</br>
Ak **AAPS** stratí prístup k tomuto priečinku (môže sa to stať po preinštalovaní alebo po vymazaní úložiska aplikácie), zobrazí notifikáciu **Prístup do priečinka AAPS bol stratený** a prestane ukladať nastavenia do telefónu, kým [priečinok znovu nevyberiete](#preferences-maintenance-logdirectory).
```

Tento návod použite, ak máte zálohu svojho APK a **Nastavení**, ktorú chcete načítať do nového telefónu, alebo ak ste z akéhokoľvek dôvodu museli APK v existujúcom telefóne odstrániť a znovu nainštalovať.

_Ak aktualizujete **AAPS** pomocou APK zostaveného s rovnakým úložiskom kľúčov, tento postup by ste nemali potrebovať. Napriek tomu sa odporúča pred aktualizáciou vytvoriť zálohu._

Ak aktualizujete **AAPS** po tom, ako ste stratili alebo vymenili pôvodné úložisko kľúčov (napr. pri použití nového počítača na zostavenie bez prenesenia úložiska kľúčov), zálohujte všetky nastavenia podľa postupu vyššie a potom odinštalujte existujúcu verziu **AAPS** z telefónu. Celý postup nájdete v časti [Preinštalovanie AAPS s novým úložiskom kľúčov](#reinstall-aaps).

Ak je to potrebné, ešte pred krokmi uvedenými nižšie [nastavte prijímač svojho zdroja CGM/glykémie](../Getting-Started/CompatiblesCgms.md)

(ExportImportSettings-tubeless-pumps)=
```{admonition} Tubeless pumps (Omnipod and Medtrum) users
:class: warning
Súbor **Nastavenia** obsahuje reláciu podu alebo náplasťovej pumpy, ktorá bola aktívna v čase exportu.
- **Exportujte nastavenia hneď po každej aktivácii podu alebo náplasťovej pumpy** a súbor skopírujte z telefónu.
- **Rovnaký telefón, pod stále beží:** políčko **Nahradiť aj nastavenia pumpy** nechajte nezaškrtnuté. Váš aktuálny pod sa zachová a importujú sa iba ostatné nastavenia.
- **Nový telefón preberá pod:** zaškrtnite **Nahradiť aj nastavenia pumpy** a použite iba súbor exportovaný počas podu, ktorý máte práve nasadený. Súbor zo staršieho podu nahradí reláciu vášho aktuálneho podu a budete musieť spustiť nový pod.
- **Omylom ste importovali starú reláciu podu:** **AAPS** sa stále pokúša spojiť s týmto podom a nový pod nemôžete aktivovať. Deaktivujte ho; ak sa to nepodarí, zahoďte ho (pozrite napríklad [Zahodenie podu](#omnipod-dash-discard-pod) pre Omnipod DASH).
```

```{admonition} Pump settings are kept unless you say otherwise
:class: note
Import v predvolenom stave nemení nastavenia pumpy: pumpa vybraná v **Konfigurácii**, jej spárovanie a všetky ďalšie nastavenia zostanú v tomto telefóne tak, ako sú. Políčko **Nahradiť aj nastavenia pumpy** na obrazovke importu zaškrtnite iba vtedy, keď obnovujete do nového telefónu, ktorý má prevziať tú istú pumpu. Nastavenia, ktoré v súbore nie sú, sa importom nikdy nevymažú.
```

1. Pomocou záložnej kópie svojho APK (pozrite vyššie) postupujte podľa návodu na [novú inštaláciu](../SettingUpAaps/TransferringAndInstallingAaps.md)

2. Spustite **AAPS** a povoľte všetky požadované povolenia

3. Ukončite Sprievodcu nastavením. Importujeme všetky potrebné nastavenia zo záložnej kópie **Nastavení**

4. From the **AAPS** main screen press **Grant** and allow all permissions listed in the **Permissions Required** panel on the top

5. Na hlavnej obrazovke **AAPS** nastavte v [Nastavenia > Ochrana](#Preferences-master-password) hlavné heslo na to isté heslo, ktoré ste použili pri zálohách.

6. Ak ste to ešte neurobili, [nastavte **AAPS priečinok**](#preferences-maintenance-logdirectory): na hlavnej obrazovke **AAPS** otvorte **ponuku** (☰) > **Údržba** > **AAPS priečinok**.

7. Na hlavnej obrazovke **AAPS** otvorte **ponuku** (☰) > **Údržba** > **Exportovať nastavenia** > zadajte hlavné heslo nastavené vyššie > **OK**. Tým sa vytvorí priečinok preferences, ak v telefóne ešte neexistuje.

8. Stiahnite zálohu svojho súboru **Nastavenia** z cloudovej platformy.

9. Pomocou správcu súborov (zvyčajne sa volá „Súbory“ alebo „Moje súbory“) presuňte súbor zo stiahnutých súborov do `/internal storage/AAPS/preferences`, ak je váš **AAPS priečinok** nastavený na `/internal storage/AAPS`

10. Na hlavnej obrazovke **AAPS** otvorte **ponuku** (☰) > **Údržba** a ťuknite na **Importovať nastavenia**. Vyberte súbor s nastaveniami, z ktorého chcete obnovovať (najnovší je navrchu). Dbajte na to, aby ste vybrali správny súbor s nastaveniami – zobrazia sa všetky súbory .json z priečinka preferences (alebo z cloudového adresára, ak je zvolený **Cloud**).

    ![Zoznam súborov s nastaveniami na import](../images/Maintenance/import_settings_files.png)

    **AAPS** zobrazí podrobnosti o súbore. Zadajte hlavné heslo nastavené vyššie a ťuknite na **Dešifrovať a skontrolovať**.

11. Keď je súbor dešifrovaný, rozhodnite, čo urobiť s nastaveniami pumpy. V novom telefóne, ktorý preberá tú istú pumpu, zaškrtnite **Nahradiť aj nastavenia pumpy**, aby sa spárovanie a nastavenia pumpy prevzali zo súboru. Ak chcete zachovať pumpu, s ktorou je tento telefón už spárovaný, nechajte políčko nezaškrtnuté. Potom ťuknite na **Importovať**.

    ![Dešifrovaný súbor s nastaveniami s políčkom Nahradiť aj nastavenia pumpy a tlačidlom Importovať](../images/Maintenance/import_settings_review.png)

12. **AAPS** sa spýta **Použiť importované nastavenia?** a oznámi vám, koľko nastavení sa zmení, a ak ste políčko nechali nezaškrtnuté, koľko nastavení pumpy sa zachová. Zatiaľ sa nič nezapísalo, takže **Zrušiť** ponechá váš telefón presne v pôvodnom stave. Ťuknutím na **OK** nastavenia použijete.

    ![Apply imported settings dialog](../images/Maintenance/import_settings_apply.png)

13. **AAPS** použije importované nastavenia okamžite, bez reštartu. Reštartujú sa iba pluginy, ktorých nastavenia sa zmenili. Počas tohto procesu **AAPS** zobrazuje **Používa sa nastavenie…**; ak je pumpa zaneprázdnená, zobrazí **Čakanie na pumpu…** a nastavenia použije, keď bude pumpa voľná. Ak je pumpa zaneprázdnená aj po jednej minúte, **AAPS** ponúkne nový pokus. Správa **Nastavenia boli použité** potvrdí, že sa používajú importované nastavenia. Každé ošetrenie, ktoré ste zaradili do frontu počas importu, sa zahodí a **AAPS** vám oznámi, že bolo zrušené, takže sa nič nepošle do pumpy dvakrát.

    ![Správa Nastavenia boli použité](../images/Maintenance/import_settings_applied.png)

Ak súbor vybral pumpu, ktorú táto verzia **AAPS** nemá, **AAPS** sa prepne na **Virtuálnu pumpu** a oznámi vám to. V **Konfigurácii** znovu vyberte svoju pumpu a skontrolujte jej nastavenia.

14. Iba pre používateľov púmp bez hadičky (Omnipod a Medtrum): ak ste zaškrtli **Nahradiť aj nastavenia pumpy** a vaše **Nastavenia** neboli zálohované z toho istého podu, ktorý práve používate, budete musieť na spustenie podávania inzulínu spustiť nový pod.

**Riešenie problémov:** ak na hlavnej obrazovke **AAPS** nemôžete nastaviť aktívny profil, otvorte **ponuku** (☰) vľavo hore > **Konfigurácia** > **Pumpa** > prepnite na **Virtuálnu pumpu** > potom prepnite späť na svoj typ pumpy

### Poznámka pre používateľov pumpy Dana RS

- Ak ste zaškrtli **Nahradiť aj nastavenia pumpy**, importujú sa aj nastavenia pripojenia k pumpe: **AAPS** v novom telefóne už bude pumpu „poznať“, a preto nespustí vyhľadávanie cez Bluetooth.
- Spárujte nový telefón s pumpou ručne.