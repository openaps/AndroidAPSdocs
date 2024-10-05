# Necessary checks after update coming from AAPS 2.6

- U verze AAPS 2.7 byl kód programu významně změněn.
- Proto je důležité, abyste po aktualizaci provedli nějaké změny, nebo zkontrolovali nastavení.
- Please see [release notes](Releasenotes-version-2-7-0) for details on new and extended features.

## Zkontrolujte zdroj glykémií

- Zkontrolujte, zda je zdroj glykémií po aktualizaci správný.
- Zejména při použití [xDrip+](../Configuration/xdrip.md) se může stát, že zdroj glykémie se změní na Dexcom aplikace (upravená).
- Open [Config builder](Config-Builder-bg-source) (hamburger menu on top left side of home screen)
- Sjeďte dolů na "Zdroj glykémie".
- Je-li to nutné, nastavte správný zdroj glykémie.

![Zdroj glykémie (BG source)](../images/ConfBuild_BG.png)

## Dokončit cíle

- AAPS 2.7 contains new objective 11 (in later versions renumbered to objective 10!) for [automation](../Usage/Automation.md).
- You have to finish exam ([objective 3 and 4](Objectives-objective-3-prove-your-knowledge)) in order to complete [objective 11](Objectives-objective-10-automation).
- If for example you did not finish the exam in [objective 3](../Usage/Objectives-objective-3-prove-your-knowledge) yet, you will have to complete the exam before you can start [objective 11](Objectives-objective-10-automation).
- Neovlivní to cíle, které jste již dokončili. Splněné cíle zůstanou zachovány!

## Nastavit hlavní heslo

- Necessary to be able to [export settings](../Usage/ExportImportSettings.md) as they are encrypted as of version 2.7.
- Klepnutím na tři tečky v pravém horním rohu hlavní obrazovky otevřete Nastavení
- Klepněte na trojúhelník pod "Obecné"
- Klepněte na položku "Hlavní heslo"
- Zadejte heslo, potvrďte ho, a klepněte na tlačítko Ok.

![Nastavit hlavní heslo](../images/MasterPW.png)

## Exportovat nastavení

- AAPS 2.7 používá nový šifrovaný formát zálohy.
- You must [export your settings](../Usage/ExportImportSettings.md) after updating to version 2.7.
- Soubory se zálohou vytvořenou v předchozích verzích mohou být v AAPS 2.7 pouze naimportované. Export bude už v novém formátu.
- Ujistěte se, že jste uložili exportovaná nastavení nejen na vašem telefonu, ale také alespoň na jednom bezpečném místě (pc, cloudové úložiště...).
- Pokud sestavujete apk AAPS 2.7 za použití stejného podpisového klíče jako u předchozích verzí, můžete instalovat novou verzi bez odstranění předchozí verze.
- Všechna nastavení i dokončené cíle zůstanou tak, jak byly v předchozí verzi.
- In case you have lost your keystore build version 2.7 with new keystore and import settings from previous version as described in the [troubleshooting section](troubleshooting_androidstudio-lost-keystore).

## Autosens (Tip - není nutná žádná akce)

- Autosens je změněn na dynamický přepínací model, který replikuje referenční design.
- Autosens se nyní pro výpočet citlivosti přepíná mezi 24 a 8 hodinovým úsekem. Vybere, která z nich je citlivější.
- Pokud uživatelé pocházejí z Oref1, pravděpodobně si všimnou toho, že systém může být méně dynamický na změny, v závislosti na citlivosti za 24 nebo 8 hodin.

## Nastavení hesla pumpy Dana RS (pokud používáte Dana RS)

- V předchozích verzích nebylo heslo pumpy [Dana RS](../Configuration/DanaRS-Insulin-Pump.md) kontrolováno.
- Klepnutím na tři tečky v pravém horním rohu hlavní obrazovky otevřete Nastavení
- Přejděte dolů a klikněte na trojúhelník vedle "Dana RS".
- Klikněte na "Heslo pumpy (pouze v1)"
- Enter pump password ([Default password](DanaRS-Insulin-Pump-default-password) is different depending on firmware version) and click OK.

![Set Dana RS password](../images/DanaRSPW.png)

To change password on Dana RS follow instructions on [DanaRS page](DanaRS-Insulin-Pump-change-password-on-pump).
