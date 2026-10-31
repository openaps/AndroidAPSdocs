# Equil

Tento návod popisuje nastavení inzulínové pumpy Equil.

```{contents} Table of contents
:depth: 1
:local: true
```

## Možnosti pumpy s AAPS

* Patch pumpa bez hadičky, která komunikuje s **AAPS** přes vestavěný Bluetooth vašeho telefonu, bez dalšího komunikačního zařízení.
* **AAPS** považuje Equil za patch pumpu se zásobníkem 200 U: hlavní obrazovka ukazuje stavové kontrolky patch pumpy a volby **Plnění/doplňování** a **Výměna baterie pumpy** se nenabízejí. Plnění, naplnění kanyly a výměna baterie se provádějí v průvodcích pumpy.
* Když je pumpa pozastavená nebo zastavená, **AAPS** zaznamená dočasný bazál 0 U/h, takže se do IOB nezapočítává žádný bazální inzulín.
* Letní čas a změny časového pásma musíte řešit ručně.

## Hardwarové a softwarové požadavky
* **Kompatibilní hardware Equil**

  Aktuálně jsou podporovány verze Equil 5.3 a 5.4.

* **AAPS** sestavené a nainstalované podle návodu [Sestavení AAPS](../SettingUpAaps/BuildingAaps.md)

## Nastavení

### Výběr pumpy Equil

Otevřete **nabídku** (☰) v levém horním rohu, zvolte **[Konfigurace](#Config-Builder-pump)** a v sekci **Pumpa** vyberte **Equil**.

Po výběru se na kartě **Equil** zobrazí dvě tlačítka, **Nastavení** a **Otevřít plugin**:

![Plugin Equil vybraný v Konfigurace > Pumpa](../images/v4/Pumps/equil_enabled.png)

**Otevřít plugin** (nebo **Spravovat** → **Pumpa**) otevře obrazovku pumpy Equil. Před spárováním pumpy vypadá takto:

![Obrazovka pumpy Equil před spárováním](../images/v4/Pumps/equil_pump_screen.png)

### Nastavení

Nastavení Equil otevřete tlačítkem **Nastavení** na kartě **Equil** nebo ikonou ozubeného kola v pravém horním rohu obrazovky pumpy.

![Nastavení ovladače Equil](../images/v4/Pumps/equil_settings.png)

* **Upozornění na nízký stav baterie**: upozorní vás, když je baterie pumpy slabá.
* **Výstraha nízké hladiny inzulínu**: upozorní vás, když je v zásobníku málo inzulínu.
* **Typ výstrahy**: jak vás pumpa upozorňuje: **Ztlumit**, **Pouze vibrovat**, **Pouze zvuky** nebo **Vibrace a zvuky**.
* **Rychlost bolusu**: jak rychle se bolus podá: **1,5 U/min (standardní)**, **3 U/min**, **6 U/min** nebo **12 U/min**. Rychlejší bolus může způsobit více alarmů okluze.

![Volby rychlosti bolusu v nastavení Equil](../images/v4/Pumps/equil_bolus_speed.png)

```{admonition} Max basal and max bolus on the patch
:class: note
Samotný patch odmítne každou bazální dávku nad maximem, které do něj **AAPS** naprogramuje. **AAPS** vezme vyšší z hodnot: vaše [nastavení](../SettingUpAaps/Preferences.md) **maximální bazální dávky**, nebo nejvyšší hodinovou bazální dávku ve vašem **profilu**, takže patch vždy přijme váš profil i dočasné bazály, které smyčka požaduje. **AAPS** do patche posílá také váš maximální povolený bolus.

Když změníte **maximální bazální dávku** nebo **maximální bolus**, **AAPS** pošle nové hodnoty do patche automaticky. Posílají se také při každém přepnutí profilu. Na samotném patchi není potřeba nic nastavovat.
```

### Spárování pumpy

Na obrazovce pumpy stiskněte **Párovat**. Průvodce vás provede každým krokem. Řada teček nahoře ukazuje, jak daleko jste.

Pokud se Android zeptá, zda smí **AAPS** vyhledávat zařízení v okolí a připojovat se k nim, stiskněte **Povolit**. **AAPS** to potřebuje, aby pumpu našlo.

![Android žádá o oprávnění vyhledávat zařízení v okolí](../images/Equil/activate1.png)

Průvodce má tyto kroky. Stisknutím **Další** pokračujete, stisknutím **Zrušit** průvodce opustíte.

1. **Vyžadován profil**: zobrazí se jen tehdy, pokud jste v **AAPS** ještě nikdy neaktivovali žádný **profil**. Vyberte profil, který chcete použít, a stiskněte **Aktivovat profil**.
1. **Sestavit pumpu**: složte dohromady pumpu, naplněný zásobník a nabitou baterii.

   ![Krok Sestavit pumpu](../images/Equil/activate2.png)

1. **Najít pumpu**: **AAPS** vyhledá pumpy Equil v okolí. Vyberte ze seznamu svou pumpu.

   ![Krok Najít pumpu s pumpou Equil v seznamu](../images/Equil/find_pump.png)
1. **Spárovat zařízení**: v poli **Nastavit heslo pro párování** můžete zadat heslo pro párování. Musí mít 4 znaky, vybrané z `ABCDEF0123456789`. Stiskněte **Párovat**.

   ![Krok Spárovat zařízení s heslem pro párování](../images/Equil/activate3.png)

1. **Vybrat inzulín**: zobrazí se jen tehdy, pokud máte nastaveno více než jeden inzulín. Vyberte inzulín, který je v zásobníku.
1. **Naplnit**: pumpa **nesmí** být na své základně. Stiskněte **Plnění/doplňování** a plňte zásobník, dokud se na špičce jehly neobjeví kapka inzulínu. Stiskněte **Další**.

   ![Krok Naplnit](../images/Equil/prime_fill.png)
1. **Rotace míst aplikace**: zobrazí se jen tehdy, pokud je v nastavení rotace míst aplikace zapnutá volba **Spravovat střídání míst pumpy**. Klepněte na místo, kam pumpu připevníte, nebo stiskněte **Přeskočit**.
1. **Připojit pumpu**: připevněte pumpu na její základnu.

   ![Krok Připojit pumpu](../images/Equil/attach_pump.png)
1. **Naplnit kanylu**: když je pumpa na základně, stiskněte **Odstranit vzduch**, aby se z kanyly odstranil vzduch. Stiskněte **Další**.

   ![Krok Naplnit kanylu s tlačítkem Odstranit vzduch](../images/Equil/prime_cannula.png)

1. **Potvrdit**: nasaďte si pumpu na tělo a stiskněte **Dokončit**.

   ![Krok Potvrdit s tlačítkem Dokončit](../images/Equil/confirm.png)

```{warning}
Pokud si nastavíte vlastní heslo pro párování (doporučeno kvůli vaší bezpečnosti), uložte si ho na bezpečné místo. Heslo se uloží v pumpě. Pumpa ho vyžaduje při každém novém párování, dokud ji v **AAPS** správně neodpárujete. Do té doby nelze pumpu používat ani s původním ručním ovladačem (PDA).
```

### Obrazovka pumpy po spárování

Po spárování pumpy ukazuje obrazovka pumpy tato tlačítka:

* **Obnovit**: hned načte stav a historii pumpy.
* **Pozastavit** / **Obnovit podávání inzulínu**: zastaví nebo znovu spustí výdej inzulínu.
* **Vyměnit zásobník**: provede vás odpojením pumpy, vložením nového zásobníku (a v případě potřeby nové baterie), plněním a opětovným připojením. První krok se zeptá: *Budete také aplikovat nový infuzní set (základnu a kanylu)?*
  * **Ano, nový infuzní set**: zvolíte místo, kanyla se naplní a **AAPS** zaznamená výměnu inzulínu a výměnu kanyly.
  * **Ne, pouze zásobník nebo baterie**: kanyla se nenaplní a **AAPS** zaznamená jen výměnu inzulínu.

  Po výměně zásobníku ukazuje úroveň baterie **-**, dokud ji **AAPS** znovu nenačte z pumpy.

  ![První krok Vyměnit zásobník se ptá na nový infuzní set](../images/Equil/change_reservoir_question.png)

* **Historie**: ukazuje události zaznamenané pumpou.
* **Zrušit párování zařízení**: provede vás odpojením pumpy a zrušením jejího spárování s **AAPS**. Tím se zastaví výdej inzulínu, píst pumpy se vrátí zpět dolů a spárování se smaže.

### Alarmy

* Alarm nízkého stavu inzulínu zazní jednou na každé úrovni (10 U, 5 U a 2 U) a když je zásobník prázdný. Alarm slabé baterie zazní jednou při 10 % a jednou při 5 %. Každá úroveň spustí alarm jen jednou až do další výměny zásobníku.
* Alarmy a zastavení pumpy se také zaznamenají jako oznámení v ošetřeních, s časem, kdy je pumpa zapsala, takže později uvidíte, kdy a proč se pumpa zastavila.
* Pokud se zásobník během bolusu vyprázdní, **AAPS** zaznamená jen inzulín podaný do té doby a sdělí vám obě množství.

## Kde získat pomoc

Vývoj ovladače Equil provádí komunita na **dobrovolnické** bázi. Než požádáte o pomoc:

1. **Přečtěte si** příslušnou část této dokumentace a ověřte, jak má funkce fungovat.
2. **Zeptejte se** na kanálu *#AAPS* na [Discordu](https://discord.gg/4fQUWHZ4Mw) nebo v jiném z [komunitních kanálů](../GettingHelp/WhereCanIGetHelp.md).
3. **Nahlaste chybu**: prohledejte [existující hlášení (issues)](https://github.com/nightscout/AndroidAPS/issues); pokud tam vaše chyba není, založte [nové hlášení (issue)](https://github.com/nightscout/AndroidAPS/issues) a přiložte své [log soubory](../GettingHelp/AccessingLogFiles.md).

Když žádáte o pomoc, uveďte značku a model telefonu, verzi Androidu, verzi **AAPS** a jednoduchý popis problému v angličtině (co se změnilo, kdy to naposledy fungovalo).
