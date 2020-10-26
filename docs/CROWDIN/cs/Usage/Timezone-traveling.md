# Cestování s pumpou mezi časovými pásmy

## DanaR, Korejská DanaR

Se změnou časového pásma v telefonu není žádný problém, protože tyto pumpy nepoužívají historii

## DanaRv2, DanaRS

Tyto pumpy vyžadují zvláštní péči, protože AndroidAPS z nich používá historické údaje, ale tyto záznamy v pumpě nemají údaj o časovém pásmu. **To znamená, že pokud prostě změníte časové pásmo na telefonu, historické záznamy se z pumpy načtou v jiném pásmu a zdvojí se.**

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
* Probably not an option if using [patched LibreLink app](../Hardware/Libre2#time-zone-travelling) as automatic time zone must be set to start a new Libre 2 sensor.

### Možnost 2: Vymazat historii pumpy

* Na telefonu v nastavení vypněte 'Automatická změna data a času' (ruční změna časového pásma)

Když vystoupíte z letadla:

* vypněte pumpu
* změňte časové pásmo na telefonu
* vypněte telefon, zapněte pumpu
* vymažte historii v pumpě
* změňte čas na pumpě
* zapněte telefon
* nechejte telefon spojit se s pumpou a sladit se s jejím časem

## Insight

Ovladač automaticky upravuje čas v pumpě podle času v telefonu.

Insight také zpracovává záznamy v historii o změnách času. Takže správný čas lze určit v AAPS navzdory změně času.

Může ale způsobit nepřesnosti v celkových denních dávkách. Neměl by to však být problém.

Uživatel pumpy Insight se tedy nemusí obávat změn časového pásma a změn času. K tomuto pravidlu existuje jedna výjimka: pumpa Insight má malou vnitřní baterii k napájení času atd. zatímco měníte "skutečnou" baterii. Pokud výměna baterie trvá příliš dlouho, tato interní baterie se může vybít, hodiny se resetují a vy budete vyzváni, abyste po vložení nové baterie opětovně nastavili čas. V tomto případě jsou všechny položky před změnou baterie přeskočeny, protože správný čas nelze určit.

# Úpravy letního času

V závislosti na pumpě a CGM, může skok v čase způsobit problémy. S pumpou Combo apod. se historie načítá znovu a to by vedlo ke zdvojení položek. Úpravy proto prosím provádějte tehdy, když jste vzhůru, ne během noci.

Jestliže k bolusu používáte kalkulačku, prosím nepoužívejte COB a IOB, pokud nemáte jistotu, že jsou naprosto správné - raději je několik hodin po změně času nepoužívejte vůbec.

## Accu-Chek Combo

AndroidAPS spustí alarm, pokud se čas mezi pumpou a telefonem liší příliš. V případě úpravy letního času by to bylo uprostřed noci. To prevent this and enjoy your sleep instead follow these steps so that you can force the time change at a time convient to yourself:

### Actions to take before the clock change

1. Switch OFF any setting that automatically sets the timezone, so you can force the time change when you want to. How you can do this will depend on your smartphone and Android version.
   
   * Some have two settings, one for automatic setting of the time (which ideally should remain on) and one for automatic setting of the timezone (which you must turn OFF).
   * Unfortunately some Android versions have a single switch to enable automatic setting of both the time and the timezone. You’ll have to turn this off for now.

2. Find a time zone that has the same time as your current location but doesn't use DST.
   
   * A list of these countries is available [https://greenwichmeantime.com/countries](https://greenwichmeantime.com/countries/)
   * For Central European Time (CET) this could be "Brazzaville" (Kongo). Change your phone's timezone to Kongo.

3. In AndroidAPS refresh your pump.

4. Check the Treatments tab... If you see duplicate any treatments:
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

### Actions to take after the clock change

A good time to make this switch would be with low IOB. E.g. an hour before a meal such as breakfast, (any recent boluses in the pump history will have been small SMB corrections. Your COB and IOB should both be close to zero.)

1. Change the Android timezone back to your current location and re-enable automatic timezone.
2. AndroidAPS will soon start alerting you that the Combo’s clock doesn’t match. So update the pump’s clock manually via the pump’s screen and buttons.
3. On the AndroidAPS “Combo” screen, press Refresh.
4. Then go to the Treatments screen, and look for any events in the future. There shouldn’t be many.
   
   * DON'T press "delete treatments in the future"
   * Hit "remove" on all future treatments and duplicate ones. This should invalidate the treatments rather than removing them so they will not be considered for IOB anymore.

5. If the situation on how much IOB/COB is unclear - for safety please disable the loop for at least one DIA and Max-Carb-Time - whatever is bigger.*

6. Continue as normal.

## Accu-Chek Insight

* Change to DST is done automatically. No action required.

## Other pumps

* This feature is available since AndroidAPS version 2.2.
* To prevent difficulties the Loop will be deactivated for 3 hours AFTER the DST switch. This is done for safety reasons (IOB too high due to duplicated bolus prior to DST change).
* You will receive a notification on the main screen prior to DST change that loop will be disabled temporarily. This message will appear without beep, vibration or anything.