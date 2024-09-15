# Pumpa Accu-Chek Insight

**Tento software je součástí DIY řešení umělé slinivky, nejedná se o výrobek. Před jeho používáním je důležité, abyste prostudovali a pochopili celý systém, včetně toho jak ho používat. Není to něco, co za Vás udělá veškerý management diabetu. Pokud do toho investujete potřebný čas, pomůže Vám dojít k lepším výsledkům při léčbě Vaší cukrovky, a tím zlepšit i kvalitu Vašeho života. Zbytečně nespěchejte, a vytvořte si čas pro učení. Pouze Vy jste zodpovědní za ovládání Vašeho systému.**

* * *

## ***UPOZORNĚNÍ:** Pokud jste v minulosti používali Insight se **SightRemote**, prosím **aktualizujte na nejnovější verzi AAPS** a **odinstalujte SightRemote**.*

## Hardwarové a softwarové požadavky

* Roche Accu-Chek Insight (kterýkoli firmware, funguje se všemi)

Poznámka: AAPS vždy zapíše data do **prvního bazálního profilu v pumpě**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](module-phone) page which Android version is required to run AAPS.)
* The AAPS app installed on your phone

## Nastavení

* Pumpa Insight by měla být připojena současně pouze k jednomu zařízení. Pokud jsme v minulosti používali dálkové ovládání pro Insight (glukometr), musíte zařízení odstranit ze seznamu spárovaných zařízení v pumpě: Menu > Nastavení > Komunikace > Odebrat zařízení
    
    ![Snímek obrazovky odebrání glukometru z pumpy Insight](../images/Insight_RemoveMeter.png)

* In [Config builder](../Configuration/Config-Builder) of the AAPS app select Accu-Chek Insight in the pump section
    
    ![Snímek obrazovky nastavení pumpy Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Chcete-li otevřít nabídku nastavení, klikněte na ozubené kolečko.

* V nastavení klikněte na tlačítko „Insight párování“ v horní části obrazovky. Měli byste vidět seznam bluetooth zařízení v dosahu (níže vlevo).
* V pumpě Insight jděte do Menu > Nastavení > Komunikace > Přidat zařízení. Pumpa zobrazí následující obrazovku (vpravo níže) zobrazující seriové číslo pumpy.
    
    ![Snímek obrazovky párování Insight 1](../images/Insight_Pairing1.png)

* Vezměte zpět telefon, klikněte na sériové číslo pumpy v seznamu bluetooth zařízení. Potvrďte kliknutím na Spárovat.
    
    ![Snímek obrazovky párování Insight 2](../images/Insight_Pairing2.png)

* Pumpa i telefon poté zobrazí na displeji kód. Zkontrolujte, jestli jsou na obou zařízení kódy stejné a potvrďte je jak v pumpě, tak v telefonu.
    
    ![Snímek obrazovky párování Insight 3](../images/Insight_Pairing3.png)

* Úspěch! Pat yourself on the back for successfully pairing your pump with AAPS.
    
    ![Snímek obrazovky párování Insight 4](../images/Insight_Pairing4.png)

* To check all is well, go back to Config builder in AAPS and tap on the cog-wheel by the Insight Pump to get into Insight settings, then tap on Insight Pairing and you will see some information about the pump:
    
    ![Snímek obrazovky informací o spárování Insight](../images/Insight_PairingInformation.png)

Poznámka: Spojení mezi pumpou a telefonem není permanentní. Spojení bude navázáno pouze tehdy, je-li to nezbytné (např. při nastavování dočasného bazálu, posílání bolusu, čtení historie z pumpy apod.). V opačném případě by se baterie v pumpě i mobilu velmi rychle vybila.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## Nastavení v AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](Preferences-advanced-settings-nsclient)).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AAPS you can enable the following options:

* „Zaznamenat výměnu zásobníku“: při spuštění programu „naplnit kanylu“ dojde automaticky k zaznamenání výměny inzulínu.

* "Log tube changes": This adds a note to the AAPS database when you run the "tube filling" program on the pump.

* "Log site change": This adds a note to the AAPS database when you run the "cannula filling" program on the pump. ** Poznámka: Výměna kanyly také resetuje Autosens. **

* „Zaznamenat výměnu baterie“: Automaticky provede záznam výměny baterie, pokud vložíte do pumpy novou baterii.

* "Log operating mode changes": This inserts a note in the AAPS database whenever you start, stop or pause the pump.

* "Log alerts": This records a note in the AAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).

* „Povolit emulaci dočasných bazálů“: pumpa Insight umožňuje hodnotu maximálního dočasného bazálu (TBR) do výše 250 %. Pumpa má nastaveno omezení dočasného bazálu na 250 %. Pokud je požadavek na dočasný bazál vyšší než 250 %, bude provedena jeho emulace zadáním rozloženého bolusu.
    
    **Pozn.: Používejte vždy pouze jeden rozložený bolus. Používání více rozložených bolusů současně může způsobit chyby.**

* "Zakázat vibrace při ručním zasílání bolusu": Zakáže vibrace pumpy Insight při ručním vydání bolusu (nebo prodlouženého bolusu). Toto nastavení je dostupné pouze s nejnovější verzí firmwaru Insight (3.x).

* "Zakázat vibrace při automatickém zasílání bolusu": Zakáže vibrace pumpy Insight při automatickém vydání bolusu (SMB nebo dočasný bazál s emulací TBR). Toto nastavení je dostupné pouze s nejnovější verzí firmwaru Insight (3.x).

* "Recovery duration": This defines how long AAPS will wait before trying again after a failed connection attempt. Můžete vybrat 0 až 20 sekund. Pokud máte problémy s připojením, vyberte delší dobu čekání.   
      
    Příklad pro min. dobu trvání zotavení = 5 a max. dobu zotavení = 20   
      
    žádné spojení -> čekej **5** sec.   
    znovu -> žádné spojení -> čekej **6** sec.   
    znovu -> žádné spojení -> čekej **7** sec.   
    znovu -> žádné spojení -> čekej **8** sec.   
    ...   
    znovu -> žádné spojení -> čekej **20** sec.   
    znovu -> žádné spojení -> čekej **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AAPS will wait to disconnect from the pump after an operation is finished. Výchozí hodnota je 5 sekund.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* „Obnovit“: Opětovné načtení stavu pumpy
* „Povolit oznamování konce dočasného bazálu“: Standardně pumpa Insight po dokončení TBR spouští zvukový signál. Toto tlačítko vám umožňuje povolit nebo zakázat tento alarm, aniž byste museli použít software pro konfiguraci pumpy.
    
    ![Snímek obrazovky stavu Insight](../images/Insight_Status2.png)

## Nastavení v pumpě

Configure alarms in the pump as follows:

* Menu > Nastavení > Nastavení zařízení > Nastavení režimu > Tichý > Signál > Zvuk
* Menu > Nastavení > Nastavení zařízení > Nastavení režimu > Tichý > Hlasitost > 0 (odeberte všechny sloupečky)
* Menu > Režimy > Režim signalizace > Tichý

This will silence all alarms from the pump, allowing AAPS to decide if an alarm is relevant to you. If AAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(Accu-Chek-Insight-Pump-vibration)=

### Vibrace

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x: Žádné vibrace z výroby
* Firmware 2.x: Vibrace nelze vypnout.
* Firmware 3.x: AAPS delivers bolus silently. (minimum [version 2.6.1.4](Releasenotes-version-2-6-1-4))

Firmware version can be found in the menu.

## Výměna baterie

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. Pokud se to stane, všechny záznamy v AAPS před výměnou baterie nebudou zahrnuty do kalkulací, protože nelze určit jejich správný čas.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Specifické chyba Insight

### Prodloužený bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Časový limit

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Změna časových pásem s pumpou Insight

For information on traveling across time zones see section [Timezone traveling with pumps](Timezone-traveling-insight).