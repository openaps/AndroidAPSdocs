# Pumpa Accu-Chek Insight

**Tento software je součástí DIY řešení umělé slinivky, nejedná se o výrobek. Před jeho používáním je důležité, abyste prostudovali a pochopili celý systém, včetně toho jak ho používat. Není to něco, co za Vás udělá veškerý management diabetu. Pokud do toho investujete potřebný čas, pomůže Vám dojít k lepším výsledkům při léčbě Vaší cukrovky, a tím zlepšit i kvalitu Vašeho života. Zbytečně nespěchejte, a vytvořte si čas pro učení. Pouze Vy jste zodpovědní za ovládání Vašeho systému.**

* * *

## ***UPOZORNĚNÍ:** Pokud jste v minulosti používali Insight se **SightRemote**, prosím **aktualizujte na nejnovější verzi AAPS** a **odinstalujte SightRemote**.*

## Hardwarové a softwarové požadavky

* Roche Accu-Chek Insight (kterýkoli firmware, funguje se všemi)

Poznámka: AAPS vždy zapíše data do **prvního bazálního profilu v pumpě**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Getting-Started/ComponentOverview) page which Android version is required to run AAPS.)
* Aplikace AAPS nainstalovaná na vašem telefonu

## Nastavení

* Pumpa Insight by měla být připojena současně pouze k jednomu zařízení. Pokud jsme v minulosti používali dálkové ovládání pro Insight (glukometr), musíte zařízení odstranit ze seznamu spárovaných zařízení v pumpě: Menu > Nastavení > Komunikace > Odebrat zařízení
    
    ![Snímek obrazovky odebrání glukometru z pumpy Insight](../images/Insight_RemoveMeter.png)

* In [Config builder > Pump](../SettingUpAaps/ConfigBuilder.md), select Accu-Chek Insight.
    
    ![Snímek obrazovky nastavení pumpy Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Chcete-li otevřít nabídku nastavení, klikněte na ozubené kolečko.

* V nastavení klikněte na tlačítko „Insight párování“ v horní části obrazovky. Měli byste vidět seznam bluetooth zařízení v dosahu (níže vlevo).
* V pumpě Insight jděte do Menu > Nastavení > Komunikace > Přidat zařízení. Pumpa zobrazí následující obrazovku (vpravo níže) zobrazující seriové číslo pumpy.
    
    ![Snímek obrazovky párování Insight 1](../images/Insight_Pairing1.png)

* Vezměte zpět telefon, klikněte na sériové číslo pumpy v seznamu bluetooth zařízení. Potvrďte kliknutím na Spárovat.
    
    ![Snímek obrazovky párování Insight 2](../images/Insight_Pairing2.png)

* Pumpa i telefon poté zobrazí na displeji kód. Zkontrolujte, jestli jsou na obou zařízení kódy stejné a potvrďte je jak v pumpě, tak v telefonu.
    
    ![Snímek obrazovky párování Insight 3](../images/Insight_Pairing3.png)

* Úspěch! Poplácejte se po zádech, úspěšně jste spárovali pumpu s AAPS.
    
    ![Snímek obrazovky párování Insight 4](../images/Insight_Pairing4.png)

* Pro kontrolu, že je všechno správně, se vraťte do nabídky Konfigurace a klepnutím na ozubené kolečko na řádku pumpy Insight otevřete její nastavení. Klepnutím na Insight párování si zobrazíte další informace o pumpě:
    
    ![Snímek obrazovky informací o spárování Insight](../images/Insight_PairingInformation.png)

Poznámka: Spojení mezi pumpou a telefonem není permanentní. Spojení bude navázáno pouze tehdy, je-li to nezbytné (např. při nastavování dočasného bazálu, posílání bolusu, čtení historie z pumpy apod.). V opačném případě by se baterie v pumpě i mobilu velmi rychle vybila.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## Nastavení v AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](#Preferences-advanced-settings-nsclient)).

![Snímek obrazovky nastavení Insight](../images/Insight_settings.png)

V nastavení pumpy Insight v AAPS můžete povolit následující možnosti:

* „Zaznamenat výměnu zásobníku“: při spuštění programu „naplnit kanylu“ dojde automaticky k zaznamenání výměny inzulínu.

* „Zaznamenat výměnu kanyly“: Tato volba přidá do databáze AAPS záznam při spuštění programu „naplnit kanylu“ na pumpě.

* „Zaznamenat změnu místa“: Tato volba přidá do databáze AAPS záznam při spuštění programu „naplnit kanylu“ na pumpě. ** Poznámka: Výměna kanyly také resetuje Autosens. **

* „Zaznamenat výměnu baterie“: Automaticky provede záznam výměny baterie, pokud vložíte do pumpy novou baterii.

* „Zaznamenat změnu režimu provozu“: Automaticky provede záznam v databázi AAPS, kdykoliv spustíte, vypnete nebo pozastavíte pumpu.

* „Zaznamenat výstrahy“: Automaticky provede záznam v databázi AAPS, kdykoliv pumpa zahlásí alarm (s výjimkou upomínek, bolusů a konce dočasných bazálů (TBR) – ty zaznamenány nejsou).

* „Povolit emulaci dočasných bazálů“: pumpa Insight umožňuje hodnotu maximálního dočasného bazálu (TBR) do výše 250 %. Pumpa má nastaveno omezení dočasného bazálu na 250 %. Pokud je požadavek na dočasný bazál vyšší než 250 %, bude provedena jeho emulace zadáním rozloženého bolusu.
    
    **Pozn.: Používejte vždy pouze jeden rozložený bolus. Používání více rozložených bolusů současně může způsobit chyby.**

* "Zakázat vibrace při ručním zasílání bolusu": Zakáže vibrace pumpy Insight při ručním vydání bolusu (nebo prodlouženého bolusu). Toto nastavení je dostupné pouze s nejnovější verzí firmwaru Insight (3.x).

* "Zakázat vibrace při automatickém zasílání bolusu": Zakáže vibrace pumpy Insight při automatickém vydání bolusu (SMB nebo dočasný bazál s emulací TBR). Toto nastavení je dostupné pouze s nejnovější verzí firmwaru Insight (3.x).

* „Doba čekání na obnovení spojení“: Definuje, jak dlouho bude AAPS čekat před opětovným pokusem po neúspěšném pokusu o připojení. Můžete vybrat 0 až 20 sekund. Pokud máte problémy s připojením, vyberte delší dobu čekání.   
      
    Příklad pro min. dobu trvání zotavení = 5 a max. dobu zotavení = 20   
      
    žádné spojení -> čekej **5** sec.   
    znovu -> žádné spojení -> čekej **6** sec.   
    znovu -> žádné spojení -> čekej **7** sec.   
    znovu -> žádné spojení -> čekej **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* „Limit pro odpojení“: Definuje, jak dlouho (v sekundách) bude AAPS čekat s odpojením od pumpy po dokončení úlohy. Výchozí hodnota je 5 sekund.

Po dobu, kdy byla pumpa zastavena, AAPS zobrazí záznam s dočasnou bazální hodnotou 0 %.

AAPS na záložce Accu-Chek Insight zobrazuje aktuální stav pumpy a dvě tlačítka:

* „Obnovit“: Opětovné načtení stavu pumpy
* „Povolit oznamování konce dočasného bazálu“: Standardně pumpa Insight po dokončení TBR spouští zvukový signál. Toto tlačítko vám umožňuje povolit nebo zakázat tento alarm, aniž byste museli použít software pro konfiguraci pumpy.
    
    ![Snímek obrazovky stavu Insight](../images/Insight_Status2.png)

## Nastavení v pumpě

Nastavení alarmů v pumpě:

* Menu > Nastavení > Nastavení zařízení > Nastavení režimu > Tichý > Signál > Zvuk
* Menu > Nastavení > Nastavení zařízení > Nastavení režimu > Tichý > Hlasitost > 0 (odeberte všechny sloupečky)
* Menu > Režimy > Režim signalizace > Tichý

To ztlumí všechny alarmy na pumpě a ponechá na AAPS rozhodnutí, jestli je alarm pro vás důležitý. Pokud AAPS alarm nepotvrdí, jeho hlasitost se zvýší (nejprve pípnutí, potom vibrace).

(Accu-Chek-Insight-Pump-vibration)=

### Vibrace

V závislosti na verzi firmwaru vaší pumpy bude Insight krátce vibrovat pokaždé, když je vydán bolus (například když AAPS vydá SMB nebo TBR dodá prodloužený bolus).

* Firmware 1.x: Žádné vibrace z výroby
* Firmware 2.x: Vibrace nelze vypnout.
* Firmware 3.x: AAPS vydává bolus potichu. (minimum [version 2.6.1.4](#Releasenotes-version-2-6-1-4))

Verzi firmwaru lze nalézt v menu.

## Výměna baterie

Výdrž baterie u pumpy Insight se při využívání smyčky pohybuje od 10 do 14 dnů, max. 20 dnů. Uživatelé s nejdelší výdrží používají lithiové baterie Energizer.

Pumpa Insight má malou interní baterii udržující základní funkce, jako jsou vnitřní hodiny, zatímco vyměňujete hlavní baterii. Pokud výměna baterie trvá příliš dlouho, tato interní baterie se může vybít, hodiny se resetují a vy budete vyzváni, abyste po vložení nové baterie opětovně nastavili čas. Pokud se to stane, všechny záznamy v AAPS před výměnou baterie nebudou zahrnuty do kalkulací, protože nelze určit jejich správný čas.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Specifické chyba Insight

### Prodloužený bolus

Používejte pouze jeden rozložený bolus v daném čase, protože používání více rozložených bolusů současně může způsobit chyby.

### Časový limit

Někdy se může stát, že pumpa Insight neodpoví během navazování spojení. V takovém případě AAPS zobrazí následující zprávu „Timeout during handshake - reset bluetooth“.

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

V tom případě vypněte bluetooth v pumpě i telefonu na 10 sekund a potom jej opět zapněte.

## Změna časových pásem s pumpou Insight

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-insight).