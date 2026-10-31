(reinstall-aaps)=
# Přeinstalace AAPS s novým úložištěm klíčů

Každé apk **AAPS** je podepsané **úložištěm klíčů**. Aktualizace se nainstaluje přes vaši současnou aplikaci **AAPS** jen tehdy, když je podepsaná **stejným úložištěm klíčů**: pak zůstanou zachována všechna vaše nastavení a data. Proto doporučujeme uložit úložiště klíčů a jeho heslo na bezpečné místo.

Pokud se pokusíte nainstalovat apk podepsané jiným úložištěm klíčů než dříve, zobrazí se chybová zpráva, že instalace selhala!

(reinstall-aaps-when)=
## Kdy musíte přeinstalovat?

**AAPS** musíte odinstalovat a znovu nainstalovat, když je vaše nové apk podepsané jiným úložištěm klíčů, například:

- Nemůžete najít své staré úložiště klíčů nebo jeho heslo.
- Vytvořili jste nové úložiště klíčů, například pomocí [Možnosti 1 sestavení v prohlížeči](../SettingUpAaps/BrowserBuildKeystore.md) nebo **Create a new key** v [AAPS Builder](../SettingUpAaps/BrowserBuildAapsBuilder.md).
- Sestavujete na novém počítači a úložiště klíčů jste do něj nezkopírovali.

Pokud své úložiště klíčů stále máte, tuto stránku nepotřebujete: použijte ho znovu a [aktualizujte **AAPS**](../Maintenance/UpdateToNewVersion.md) bez odinstalace.

(reinstall-aaps-before)=
## Než začnete

- Odinstalace **AAPS** smaže všechna jeho nastavení, vaše [cíle](../SettingUpAaps/CompletingTheObjectives.md) a aktuální připojení k pumpě. Získáte je zpět importem svého **souboru s nastavením**, proto se ujistěte, že máte nějaký nedávný.
- Soubor s nastavením neobsahuje historii ošetření a glykémií. Pokud nahráváte data do [Nightscoutu](../SettingUpAaps/SettingUpTheReportingServer.md), můžete je po přeinstalaci načíst zpět (krok 8).
- Potřebujete své [**hlavní heslo**](#Preferences-master-password): soubor s nastavením je jím zašifrovaný.
- **Uživatelé Omnipodu a Medtrumu:** nejprve si přečtěte [Pumpy bez hadičky](#ExportImportSettings-tubeless-pumps). Váš soubor s nastavením musí být exportovaný během podu nebo patche, který máte právě nasazený.
- Pokud je to potřeba, [nastavte si přijímač zdroje CGM/glykémie](../Getting-Started/CompatiblesCgms.md) dříve, než začnete.

(reinstall-aaps-steps)=
## Kroky

Obrázky ukazují přechod z **AAPS** 3.4 (kroky 1 až 3) na **AAPS** 4 (kroky 6 až 8). Jiné verze vypadají trochu jinak.

(reinstall-aaps-export)=
### 1. Exportujte své nastavení

Exportujte nastavení pomocí **AAPS**, které máte v telefonu právě nainstalované. Podrobnosti najdete v části [Export nastavení](#ExportImportSettings-Settings-Export).

V **AAPS** 3.4: otevřete **Údržba** a klepněte na **Možnosti exportu**. V části **Uživatelská nastavení** zaškrtněte **Lokální úložiště** a klepněte na **OK**.

*Poznámka: Jako bezpečnostní zálohu můžete použít také [Cloudové úložiště](#preferences-maintenance-cloud). To je dobrý nápad, ale Lokální úložiště si ponechte pro rychlou obnovu nastavení.*

![Možnosti exportu s Uživatelskými nastaveními nastavenými na Lokální úložiště](../images/ReinstallAaps/reinstall_export_options_local.png)

Na tlačítku je teď **Exportovat nastavení (Místní)**. Klepněte na něj.

![Údržba s tlačítkem Exportovat nastavení (Místní)](../images/ReinstallAaps/reinstall_export_settings_local.png)

**AAPS** ukáže název souboru, který vytvoří. Klepněte na **OK**, zadejte své hlavní heslo a klepněte na **OK**.

![Potvrzení exportu nastavení s názvem souboru](../images/ReinstallAaps/reinstall_export_confirm.png)

V **AAPS** 4: otevřete **Údržba**, vyberte štítek **Lokálně** vedle **Exportovat nastavení** a klepněte na **Exportovat nastavení**.

(reinstall-aaps-copy)=
### 2. Zkopírujte soubor s nastavením mimo telefon

Soubor je ve složce **preferences** vašeho [adresáře **AAPS**](#SetupWizard-StoragePermission) a jmenuje se podobně jako `2026-10-13_222735_full.json`. Zkopírujte ho nebo nahrajte na jiné místo (např. do počítače, na cloudové úložiště...). Soubor po odinstalaci obvykle v telefonu zůstane, ale pro jistotu si ponechte kopii i jinde.

(reinstall-aaps-nightscout-before)=
### 3. Synchronizace s Nightscoutem

Tento krok není povinný, ale doporučujeme ho, pokud používáte [DynISF](#Open-APS-features-DynamicISF): budete moci pokračovat přímo s aktuálním nastavením a nebudete muset čekat 5 dní, než plugin získá potřebná data. NSClient V3 musí být [povolený a nastavený](../SettingUpAaps/SettingUpTheReportingServer.md).

Před odinstalací se ujistěte, že Nightscout má všechna vaše data.

Otevřete **NSClient**, klepněte na tlačítko **Plná synchronizace** ve spodní části obrazovky a pak na **OK**.

![Obrazovka NSClient s tlačítkem Plná synchronizace](../images/ReinstallAaps/reinstall_ns_fullsync_menu_before.png)

*Poznámka: Potřebný čas závisí na službě, kde je váš Nightscout hostovaný.*

![Potvrzení plné synchronizace](../images/ReinstallAaps/reinstall_ns_fullsync_confirm.png)

**AAPS** pak nabídne vyčištění své databáze. **OK** odstraní z telefonu data starší než 3 měsíce, takže synchronizace bude mnohem rychlejší. **Zrušit** synchronizuje bez vyčištění. Databáze v telefonu se při odinstalaci stejně smaže, takže obě možnosti jsou v pořádku.

![Dotaz na vyčištění databáze](../images/ReinstallAaps/reinstall_ns_fullsync_cleanup.png)

Nechte **AAPS** běžet, dokud synchronizace neskončí.

(reinstall-aaps-build)=
### 4. Sestavte nové apk

[Sestavte](../SettingUpAaps/BuildingAaps.md) nové podepsané apk se svým novým úložištěm klíčů a přeneste ho do telefonu.

(reinstall-aaps-uninstall)=
### 5. Odinstalujte AAPS

V telefonu otevřete **Nastavení** > **Aplikace** > **AAPS**, klepněte na **Odinstalovat** a potvrďte tlačítkem **OK**.

![Informace o aplikaci AAPS s tlačítkem Odinstalovat](../images/ReinstallAaps/reinstall_uninstall_appinfo.png)

(reinstall-aaps-install)=
### 6. Nainstalujte a spusťte nové AAPS

[Nainstalujte](../SettingUpAaps/TransferringAndInstallingAaps.md) nové apk a spusťte **AAPS**. [Průvodce nastavením](../SettingUpAaps/SetupWizard.md) se zeptá na oprávnění, která **AAPS** potřebuje: u každého z nich klepněte na **Udělit**. Tím se také znovu vypne [optimalizace baterie](#setup-wizard-bluetooth-battery-optimisation).

![Seznam Vyžadovaná oprávnění v průvodci nastavením](../images/ReinstallAaps/reinstall_permissions.png)

U položky **Adresář AAPS** vyberte stejnou složku **AAPS** jako dříve (tu, ve které je složka **preferences**), klepněte na **Použít tuto složku** a **Povolit**.

![Výběr stávající složky AAPS](../images/ReinstallAaps/reinstall_aaps_directory.png)

Když **AAPS** najde vaše exportované nastavení, průvodce nastavením zobrazí obrazovku [Nalezeno uložené nastavení](#setup-wizard-import-settings), kde ho můžete importovat. Můžete také průvodce zavřít a importovat nastavení z **Údržba**, jak je popsáno níže.

(reinstall-aaps-import)=
### 7. Importujte své nastavení

Pokud už soubor s nastavením v telefonu není, zkopírujte ho zpět do složky **preferences** ve vašem adresáři **AAPS**.

Otevřete nabídku (☰) > **Údržba**, vyberte štítek **Lokálně** vedle **Importovat nastavení** a klepněte na **Importovat nastavení**.

![Údržba s Importovat nastavení](../images/ReinstallAaps/reinstall_maintenance_import.png)

Seznam ukazuje každý soubor s jeho verzí **AAPS** a s tím, jak je starý. Vyberte soubor, který jste exportovali v kroku 1.

![Seznam souborů s nastavením k importu](../images/ReinstallAaps/reinstall_import_file_list.png)

V novém **AAPS** nemusíte nejprve nastavovat hlavní heslo. Do pole **Heslo pro dešifrování** zadejte hlavní heslo, které jste použili při exportu, a klepněte na **Dešifrovat**. Zpráva **Soubor byl zašifrován jiným heslem** je očekávaná: nové **AAPS** vaše heslo ještě nezná. Import ho obnoví spolu s ostatními nastaveními.

![Heslo pro dešifrování souboru s nastavením](../images/ReinstallAaps/reinstall_import_password.png)

Zaškrtněte **Nahradit také nastavení pumpy**: bez toho se vaše pumpa a její nastavení neobnoví. Uživatelé Omnipodu a Medtrumu: zaškrtněte to jen tehdy, pokud byl soubor exportovaný během vašeho současného podu nebo patche (viz [Pumpy bez hadičky](#ExportImportSettings-tubeless-pumps)).

![Zaškrtnuté Nahradit také nastavení pumpy](../images/ReinstallAaps/reinstall_import_replace_pump.png)

Klepněte na **Importovat**, pak na **OK** pro použití nastavení a znovu na **OK** u zprávy **Nastavení byla použita**.

![Potvrzení použití importovaného nastavení](../images/ReinstallAaps/reinstall_import_apply.png)

(reinstall-aaps-nightscout-after)=
### 8. Získejte zpět svou historii z Nightscoutu

Otevřete nabídku (☰) > [**Konfigurace**](../SettingUpAaps/ChangeAapsConfiguration.md) > **Komunikace** a pod **NSClientV3** klepněte na **Otevřít plugin**. Zkontrolujte, že stav ukazuje **Připojeno**. Pokud ne, viz [Řešení problémů s NSClientem](TroubleshootingNsClient.md).

![Komunikace s tlačítkem Otevřít plugin u NSClientV3](../images/ReinstallAaps/reinstall_ns_open_plugin.png)

Klepněte na tlačítko **Plná synchronizace** ve spodní části obrazovky a na **OK**. Databáze je nová, takže na dotaz na vyčištění můžete odpovědět libovolně.

![Obrazovka NSClientV3 s tlačítkem Plná synchronizace](../images/ReinstallAaps/reinstall_ns_fullsync_menu_after.png)

**AAPS** načte vaše data z Nightscoutu. Až bude hotovo, v logu se zobrazí **Full sync finished**.

![Log NSClientV3 se zprávou Full sync finished](../images/ReinstallAaps/reinstall_ns_fullsync_finished.png)

(reinstall-aaps-check)=
### 9. Kontrola a pokračování ve smyčce

Zkontrolujte, že je pumpa připojená a že přicházejí hodnoty z CGM, a pak pokračujte ve smyčce.

(reinstall-aaps-afterwards)=
## Potom

Od této chvíle vždy používejte své nové úložiště klíčů a uložte ho i s heslem na bezpečné místo mimo telefon. Viz [Vytváření a obnova záloh](../Maintenance/ExportImportSettings.md).
