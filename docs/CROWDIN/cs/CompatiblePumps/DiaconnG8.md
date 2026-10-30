# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## Možnosti pumpy s AAPS

* Komunikuje s **AAPS** přes vestavěný Bluetooth vašeho telefonu, bez dalšího komunikačního zařízení.
* Letní čas a změny časového pásma musíte řešit ručně.

## Bluetooth párování inzulínové pumpy

- Klepněte na **nabídku** (☰) v levém horním rohu.

![Nabídka s položkou Konfigurace](../images/v4/Configuration/configuration_menu.png)

- Klepněte na **Konfigurace** > **Pumpa** a vyberte **Diaconn G8**.

![Konfigurace > Pumpa s pluginem Diaconn G8](../images/v4/Configuration/configuration_pump_list_3.png)

Po výběru se na kartě **Diaconn G8** zobrazí dvě tlačítka, **Nastavení** a **Otevřít plugin**:

![Plugin Diaconn G8 vybraný v Konfigurace > Pumpa](../images/v4/Pumps/diaconn_g8_enabled.png)

**Nastavení** otevře nastavení ovladače Diaconn G8 (viz [Nastavení inzulínové pumpy Diaconn G8](#diaconn-g8-insulin-pump-option-setting) níže).

**Otevřít plugin** (nebo **Spravovat** > **Pumpa**) otevře obrazovku pumpy Diaconn G8. Před spárováním pumpy vypadá takto:

![Obrazovka pumpy Diaconn G8 před spárováním](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![obrázek](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
Snímek obrazovky výše je ze starší verze **AAPS**. V **AAPS** 4 se párování spouští tlačítkem **Spárovat** na obrazovce pumpy; nastavení **Vybraná pumpa** už neexistuje.
```

- Na obrazovce pumpy klepněte na **Spárovat**. Otevře se obrazovka **Párování pumpy Diaconn** a **AAPS** vyhledá pumpy v okolí.
- Jakmile se v seznamu objeví modelové číslo vaší inzulínové pumpy, klepněte na něj (například **DIACONN-65010**).

![Obrazovka Párování pumpy Diaconn při vyhledávání pump](../images/DiaconnG8/DiaconnG8_05.png)

- Existují dvě možnosti, jak zkontrolovat modelové číslo:

1. Posledních 5 číslic sériového čísla na zadní straně pumpy.
2. Klikněte na tlačítko O > Information > BLE > posledních 5 číslic.

![obrázek](../images/DiaconnG8/DiaconnG8_06.jpg)

- Po výběru pumpy se zobrazí okno s žádostí o PIN kód. Pro dokončení připojení zadejte PIN, který se zobrazí na vaší pumpě.

 ![obrázek](../images/DiaconnG8/DiaconnG8_07.jpg)

- Když se zobrazí **Spárování úspěšné!**, klepnutím na **OK** se vrátíte na obrazovku pumpy.

## Kontrola stavu pumpy a synchronizace záznamů

- Když je pumpa připojená, otevřete obrazovku pumpy (**Spravovat** > **Pumpa**). Ukazuje stav pumpy (baterie, zásobník, poslední spojení, poslední bolus, bazální dávka a další).
- Klepnutím na **Obnovit** se připojíte k pumpě, aktualizujete stav a synchronizujete záznamy.
- Klepnutím na **Historie pumpy** zobrazíte historii načtenou z pumpy.

![obrázek](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
Snímek obrazovky výše je ze starší verze **AAPS**. V **AAPS** 4 se stav pumpy zobrazuje na obrazovce pumpy (**Spravovat** > **Pumpa**) a synchronizuje se tlačítkem **Obnovit**.
```

(diaconn-g8-bluetooth-troubleshooting)=

## Řešení problémů s Bluetooth

**Co dělat v případě nestabilního propojení s pumpou přes Bluetooth:**

### Způsob 1) Restartujte AAPS a pak pumpu znovu zkontrolujte

- Klepněte na **nabídku** (☰) v levém horním rohu.
- Klepněte na **Konec** v dolní části nabídky.

![Nabídka s položkou Konec dole](../images/v4/Configuration/configuration_menu.png)

- Znovu spusťte **AAPS** a zkontrolujte připojení k pumpě.

### Způsob 2) Pokud první způsob nepomůže, odpojte Bluetooth a pak se znovu připojte.

- Stiskněte a podržte ikonu Bluetooth v horní části po dobu asi 3 sekund.

![obrázek](../images/DiaconnG8/DiaconnG8_11.jpg)

- Klikněte na tlačítko nastavení na spárované pumpě Diaconn G8.

![obrázek](../images/DiaconnG8/DiaconnG8_12.jpg)

- Zrušte spárování.

![obrázek](../images/DiaconnG8/DiaconnG8_13.jpg)

- V **AAPS** otevřete obrazovku pumpy (**Spravovat** > **Pumpa**), klepněte na **Odpárovat** a potvrďte **Resetovat informace o párování?**.
- Opakujte postup párování pumpy pomocí Bluetooth (viz. výše).

## Další informace

(diaconn-g8-insulin-pump-option-setting)=

### Nastavení inzulínové pumpy Diaconn G8

- **Konfigurace** > **Pumpa** > **Diaconn G8** > **Nastavení**
- Nebo na obrazovce pumpy (**Spravovat** > **Pumpa**) klepněte na ikonu nastavení (ozubené kolo) v pravém horním rohu.

![Nastavení ovladače Diaconn G8](../images/v4/Pumps/diaconn_g8_settings.png)

- **Rychlost bolusu** určuje, jak rychle pumpa podává bolus.
- Pokud je zapnutá možnost **Zaznamenat výměnu zásobníku**, při události „Výměna inzulínu“ se příslušné údaje automaticky nahrají jako záznam péče.
- Pokud je zapnutá možnost **Zaznamenat změnu jehly**, při události „Výměna setu“ se příslušné údaje automaticky nahrají jako záznam péče.
- Pokud je zapnutá možnost **Zaznamenat výměnu hadičky**, při události „Výměna hadičky“ se příslušné údaje automaticky přidají jako poznámka.
- Pokud je zapnutá možnost **Zaznamenat výměnu baterie**, při události „Výměna baterie“ se příslušné údaje automaticky nahrají jako záznam péče. Výměnu baterie můžete zaznamenat i sami přes **Spravovat** > **Výměna baterie pumpy**. (Poznámka: Před výměnou baterie zastavte veškeré probíhající injekční funkce.)
- **Synchronizace do Diaconn cloudu** posílá záznamy z pumpy do Diaconn Cloud.

![Menu akcí Diaconn G8](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
Snímek obrazovky výše je ze starší verze **AAPS**. V **AAPS** 4 se výměna baterie zaznamenává přes **Spravovat** > **Výměna baterie pumpy**; karta **Akce** už neexistuje.
```

### Funkce prodlouženého bolusu

- Pokud použijete prodloužený bolus, deaktivuje se uzavřená smyčka.
- Na [této stránce](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment) najdete podrobné informace, proč prodloužený bolus nefunguje v prostředí uzavřené smyčky.

## Kde získat pomoc

Vývoj ovladače Diaconn G8 dělá komunita na **dobrovolné** bázi. Než požádáte o pomoc:

1. **Přečtěte si** příslušnou část této dokumentace a ověřte, jak má funkce fungovat.
2. **Zeptejte se** na kanálu *#AAPS* na [Discordu](https://discord.gg/4fQUWHZ4Mw) nebo v jiném z [komunitních kanálů](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahlaste chybu**: prohledejte [existující hlášení (issues)](https://github.com/nightscout/AndroidAPS/issues); pokud tam vaše chyba není, založte [nové hlášení (issue)](https://github.com/nightscout/AndroidAPS/issues) a přiložte své [log soubory](../GettingHelp/AccessingLogFiles.md).

Když žádáte o pomoc, uveďte značku a model telefonu, verzi Androidu, verzi **AAPS** a jednoduchý popis problému v angličtině (co se změnilo, kdy to naposledy fungovalo).
