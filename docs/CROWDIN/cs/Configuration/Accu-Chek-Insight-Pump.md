# Pumpa Accu-Chek Insight

**Tento software je součástí DIY řešení umělé slinivky, nejedná se o výrobek. Před jeho používáním je důležité, abyste prostudovali a pochopili celý systém, včetně toho jak ho používat. Není to něco, co za Vás udělá veškerý management diabetu. Pokud do toho investujete potřebný čas, pomůže Vám dojít k lepším výsledkům při léčbě Vaší cukrovky, a tím zlepšit i kvalitu Vašeho života. Zbytečně nespěchejte, a vytvořte si čas pro učení. Pouze Vy jste zodpovědní za ovládání Vašeho systému.**

* * *

## ***UPOZORNĚNÍ:** Pokud jste v minulosti používali Insight se **SightRemote**, prosím **aktualizujte na nejnovější verzi AAPS** a **odinstalujte SightRemote**.*

## Hardwarové a softwarové požadavky

* Roche Accu-Chek Insight (kterýkoli firmware, funguje se všemi)

Poznámka: AAPS vždy zapíše data do **prvního bazálního profilu v pumpě**.

* Telefon se systémem Android (v podstatě každá Android verze bude fungovat s Insight, ale zkontrolujte stránku [Module](../Module/module#phone), která Android verze je požadována pro AndroidAPS.)
* Aplikace AndroidAPS nainstalovaná v telefonu

## Nastavení

* Pumpa Insight by měla být připojena současně pouze k jednomu zařízení. Pokud jsme v minulosti používali dálkové ovládání pro Insight (glukometr), musíte zařízení odstranit ze seznamu spárovaných zařízení v pumpě: Menu > Nastavení > Komunikace > Odebrat zařízení
    
    ![Snímek obrazovky odebrání glukometru z pumpy Insight](../images/Insight_RemoveMeter.png)

* V nabídce [Konfigurace](../Configuration/Config-Builder) aplikace AndroidAPS vyberte v sekci Pumpa model Accu-Chek Insight
    
    ![Snímek obrazovky nastavení pumpy Insight](../images/Insight_ConfigBuilder.png)

* Chcete-li otevřít nabídku nastavení, klikněte na ozubené kolečko.

* V nastavení klikněte na tlačítko „Insight párování“ v horní části obrazovky. Měli byste vidět seznam bluetooth zařízení v dosahu (níže vlevo).
* V pumpě Insight jděte do Menu > Nastavení > Komunikace > Přidat zařízení. Pumpa zobrazí následující obrazovku (vpravo níže) zobrazující seriové číslo pumpy.
    
    ![Snímek obrazovky párování Insight 1](../images/Insight_Pairing1.png)

* Vezměte zpět telefon, klikněte na sériové číslo pumpy v seznamu bluetooth zařízení. Potvrďte kliknutím na Spárovat.
    
    ![Snímek obrazovky párování Insight 2](../images/Insight_Pairing2.png)

* Pumpa i telefon poté zobrazí na displeji kód. Zkontrolujte, jestli jsou na obou zařízení kódy stejné a potvrďte je jak v pumpě, tak v telefonu.
    
    ![Snímek obrazovky párování Insight 3](../images/Insight_Pairing3.png)

* Úspěch! Můžete si poblahopřát, úspěšně jste spárovali pumpu s AndroidAPS.
    
    ![Snímek obrazovky párování Insight 4](../images/Insight_Pairing4.png)

* Pro kontrolu, jestli je vše správně, jděte zpět do nabídky Konfigurace v AndroidAPS a klikněte na ozubené kolečko v nabídce Pumpa - Accu Chek Insight pro vstup do nastavení. Klikněte na Insight párování, kde uvidíte informace o pumpě:
    
    ![Snímek obrazovky informací o spárování Insight](../images/Insight_PairingInformation.png)

Poznámka: Spojení mezi pumpou a telefonem není permanentní. Spojení bude navázáno pouze tehdy, je-li to nezbytné (např. při nastavování dočasného bazálu, posílání bolusu, čtení historie z pumpy apod.). V opačném případě by se baterie v pumpě i mobilu velmi rychle vybila.

## Nastavení v AAPS

Při používání pumpy Insight **nesmí být nastaveno 'Vždy použít absolutní hodnoty bazálu'**. V AAPS přejděte do nastavení > NSClient > Rozšířené nastavení a ujistěte se, že možnost 'Vždy použít bazální absolutní hodnoty' je vypnuta. Toto nastavení způsobuje problémy při nastavování dočasných bazálů.

Jestliže potřebujete používat Autotune, jediným řešením v tuto chvíli je **zakázat synchronizaci** s Nightscoutem (pouze nahrávání). V AAPS přejděte do nastavení > NSClient > Pokročilá nastavení a povolte ‘Pouze nahrávání do NS (zakázat synchronizaci)‘.

![Snímek obrazovky nastavení Insight](../images/Insight_settings.png)

V Insight nastavení v AndroidAPS můžete upravit následující možnosti:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.

* "Log tube changes": This adds a note to the AndroidAPS database when you run the "tube filling" program on the pump.

* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**

* "Log battery changes": This records a battery change when you put a new battery in the pump.

* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.

* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).

* „Povolit emulaci dočasných bazálů“: pumpa Insight umožňuje hodnotu maximálního dočasného bazálu (TBR) do výše 250 %. Pumpa má nastaveno omezení dočasného bazálu na 250 %. Pokud je požadavek na dočasný bazál vyšší než 250 %, bude provedena jeho emulace zadáním rozloženého bolusu.
    
    **Pozn.: Používejte vždy pouze jeden rozložený bolus. Používání více rozložených bolusů současně může způsobit chyby.**

* "Disable vibrations on manual bolus delivery": This disables the Insight pump's vibrations when delivering a manual bolus (or extended bolus). This setting is available only with the latest version of Insight firmware (3.x).

* "Disable vibrations on automated bolus delivery": This disables the Insight pump's vibrations when delivering an automatic bolus (SMB or Temp basal with TBR emulation). This setting is available only with the latest version of Insight firmware (3.x).

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

Po dobu, kdy byla pumpa zastavena, AAPS zobrazí záznam s dočasnou bazální hodnotou 0 %.

V AndroidAPS v záložce Accu-Chek Insight se zobrazuje aktuální stav pumpy a dvě tlačítka:

* „Obnovit“: Opětovné načtení stavu pumpy
* „Povolit oznamování konce dočasného bazálu“: Standardně pumpa Insight po dokončení TBR spouští zvukový signál. Toto tlačítko vám umožňuje povolit nebo zakázat tento alarm, aniž byste museli použít software pro konfiguraci pumpy.
    
    ![Snímek obrazovky stavu Insight](../images/Insight_Status2.png)

## Nastavení v pumpě

Nastavení alarmů v pumpě:

* Menu > Nastavení > Nastavení zařízení > Nastavení režimu > Tichý > Signál > Zvuk
* Menu > Nastavení > Nastavení zařízení > Nastavení režimu > Tichý > Hlasitost > 0 (odeberte všechny sloupečky)
* Menu > Režimy > Režim signalizace > Tichý

To ztlumí všechny alarmy z pumpy, což umožní systému AndroidAPS rozhodnout, zda je pro vás alarm relevantní. Pokud alarm AndroidAPS nebude potvrzen, hlasitost alarmu se bude zvyšovat (nejprvé pípnutí, potom vibrace).

### Vibrace

Pumpy Insight s novějším firmwarem budou vibrovat vždy při podání bolusu (například, když AndroidAPS pošle SMB nebo emulace TBR vydá prodloužený bolus).

* Firmware 1.x: Žádné vibrace z výroby
* Firmware 2.x: Vibrace nelze vypnout.
* Firmware 3.x: AndroidAPS aplikuje bolus tiše. (minimální [verze 2.6.1.4](../Installing-AndroidAPS/Releasenotes#version-2-6-1-4))

Verzi Firmware lze nalézt v menu.

## Výměna baterie

Výdrž baterie u pumpy Insight se při využívání smyčky pohybuje od 10 do 14 dnů, max. 20 dnů. Uživatelé s nejdelší výdrží používají lithiové baterie Energizer.

Pumpa Insight má malou interní baterii udržující základní funkce, jako jsou vnitřní hodiny, zatímco vyměňujete hlavní baterii. Pokud výměna baterie trvá příliš dlouho, tato interní baterie se může vybít, hodiny se resetují a vy budete vyzváni, abyste po vložení nové baterie opětovně nastavili čas. Pokud se tak stane, všechny položky v AndroidAPS provedené před výměnou baterie nebudou zahrnuty do kalkulací, jelikož nelze určit správný čas.

## Specifické chyba Insight

### Prodloužený bolus

Používejte pouze jeden prodloužený bolus v daném čase, protože používání více prodloužených bolusů současně může způsobit chyby.

### Časový limit

Někdy se může stát, že pumpa Insight neodpoví během navazování spojení. V takovém případě AAPS zobrazí následující zprávu "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

V tom případě vypněte bluetooth v pumpě i telefonu na 10 sekund a potom jej opět zapněte.

## Změna časových pásem s pumpou Insight

Více informací o cestování přes více časových pásem najdete v části [Cestování s pumpou mezi časovými pásmy](../Usage/Timezone-traveling#insight).