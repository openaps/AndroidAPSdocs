# Cestování s pumpou mezi časovými pásmy

## DanaR, Korejská DanaR

Se změnou časového pásma v telefonu není žádný problém, protože tyto pumpy nepoužívají historii

(timezone-traveling-danarv2-danars)=

## DanaRv2, DanaRS

These pumps need a special care because AAPS is using history from the pump but the records in pump don't have timezone stamp. **To znamená, že pokud prostě změníte časové pásmo na telefonu, historické záznamy se z pumpy načtou v jiném pásmu a zdvojí se.**

Abychom se tomu vyhnuli, existují dvě možnosti:

### Možnost 1: Ponechat původní čas a posunout profil

* Na telefonu v nastavení vypněte 'Automatická změna data a času' (ruční změna časového pásma).
* Telefon musí mít po celou dobu cestování/pobytu nastaven standardní domácí čas.
* Posuňte v čase svůj profil podle rozdílu času doma a v cílové destinaci.
   
   * Dlouze přidržte název profilu (uprostřed horní části hlavní obrazovky)
   * Vyberte 'Přepnutí profilu'
   * Nastavte 'Posun času' podle času ve vaší destinaci.
   
   ![Přepnutí profilu s posunem času](../images/ProfileSwitchTimeShift2.png)
   
   * např. Vídeň -> New York: posun času +6 hodin
   * např. Vídeň -> Sydney: posun času -8 hodin
* Probably not an option if using [patched LibreLink app](#libre2-patched-librelink-app-with-xdrip) as automatic time zone must be set to start a new Libre 2 sensor.

### Možnost 2: Vymazat historii pumpy

* Na telefonu v nastavení vypněte 'Automatická změna data a času' (ruční změna časového pásma)

Když vysednete z letadla:

* vypněte pumpu
* změňte časové pásmo na telefonu
* vypněte telefon, zapněte pumpu
* vymažte historii v pumpě
* změňte čas na pumpě
* zapněte telefon
* nechejte telefon spojit se s pumpou a sladit se s jejím časem

(timezone-traveling-insight)=

## Insight

Ovladač automaticky upravuje čas v pumpě podle času v telefonu.

Insight také zpracovává záznamy v historii o změnách času. Takže správný čas lze určit v AAPS navzdory změně času.

Může ale způsobit nepřesnosti v celkových denních dávkách. Neměl by to však být problém.

Uživatel pumpy Insight se tedy nemusí obávat změn časového pásma a změn času. K tomuto pravidlu existuje jedna výjimka: pumpa Insight má malou vnitřní baterii k napájení času atd. zatímco měníte "skutečnou" baterii. Pokud výměna baterie trvá příliš dlouho, tato interní baterie se může vybít, hodiny se resetují a vy budete vyzváni, abyste po vložení nové baterie opětovně nastavili čas. In this case all entries prior to the battery change are skipped in calculation in AAPS as the correct time cannot be identified properly.

## Accu-Chek Combo

The [new Combo driver](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) automatically adjusts the time of the pump to the time of the phone. The Combo cannot store timezones, only local time, which is precisely what the new driver programs into the pump. In addition, it stores the timezone in the local AAPS preferences to be able to convert the pump's localtime to a full timestamp that has a timezone offset. The user does not have to do anything; if the time on the Combo deviates too much from the phone's current time, the pump's time is automatically adjusted.

Note that this takes some time, however, since it can only be done in the remote-terminal mode, which is generally slow. This is a Combo limitation that cannot be overcome.

The old, Ruffy-based driver does not adjust the time automatically. The user has to do that manually. See below for the steps necessary to do that safely in case the timezone / daylight savings is the reason for the change.

## Medtrum

Ovladač automaticky upravuje čas v pumpě podle času v telefonu.

Timezone changes keep the history in tact, only TDD may be affected. Manually changing the time on the phone can cause problems with the history and IOB. If you change time manually double check the IOB.

When the timezone or time changes running TBR's are stopped.

(time-adjustment-daylight-savings-time-dst)=

## Úpravy letního času

V závislosti na pumpě a CGM, může skok v čase způsobit problémy. S pumpou Combo apod. se historie načítá znovu a to by vedlo ke zdvojení položek. Úpravy proto prosím provádějte tehdy, když jste vzhůru, ne během noci.

Jestliže k bolusu používáte kalkulačku, prosím nepoužívejte COB a IOB, pokud nemáte jistotu, že jsou naprosto správné - raději je několik hodin po změně času nepoužívejte vůbec.

### Accu-Chek Combo

**NOTE**: As mentioned above, this secton is only valid for the old, Ruffy-based driver. The new driver adjusts date and time and DST automatically.

AAPS will issue an alarm if the time between pump and phone differs too much. In case of DST time adjustment, this would be in the middle of the night. To prevent this and enjoy your sleep instead, follow these steps so that you can force the time change at a time convenient to yourself:

#### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * Pro střední Evropu (CET) by to bylo "Brazzaville" (Kongo). Změňte časové pásmo telefonu na Kongo.

3. In AAPS refresh your pump.

4. Zkontrolujte kartu Ošetření... If you see any duplicate treatments:
   
   * DON'T press "delete treatments in the future"
   * Klepněte na "odstranit" u všech budoucích ošetření a také u těch, která jsou duplicitní. Toto by mělo ošetření zneplatnit, nikoli je odstranit, takže již nebudou využívaná k výpočtu IOB.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

#### Actions to take after the clock change

Toto přepnutí je vhodné dělat v době, kdy máte nízký IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Klepněte na "odstranit" u všech budoucích ošetření a také u těch, která jsou duplicitní. Toto by mělo ošetření zneplatnit, nikoli je odstranit, takže již nebudou využívaná k výpočtu IOB.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

### Accu-Chek Insight

* Změna letního času se provádí automaticky. Není vyžadována žádná akce.

### Medtrum

* Změna letního času se provádí automaticky. Není vyžadována žádná akce.

### Other pumps

* This feature is available since AAPS version 2.2.
* V zájme prevence potíží bude smyčka na 3 hodiny PO přepnutí letního času deaktivována. A to z bezpečnostních důvodů (příliš vysoký IOB kvůli duplicitnímu bolusu před změnou letního času).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. Zobrazení této zprávy není doprovázeno žádným zvukovým signálem ani vibracemi.